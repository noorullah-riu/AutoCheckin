import React, {useState, useContext, useEffect, useRef} from 'react';
import EcomContext from '../../../contextApi/DataProvider';
import {useTask} from '../../../networking/UseTask';
import Loader from '../../../ui/Loader';
import Error404 from '../../../ui/Error';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {
  Alert,
  StyleSheet,
  SafeAreaView,
  PermissionsAndroid,
  Platform,
  watchID,
  View,
} from 'react-native';

import back from '../../../assets/_Header/back-button.png';

import AppHeader from '../../../ui/AppHeader';
import Geolocation from '@react-native-community/geolocation';

export const Location = ({navigation}: any) => {
  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [locationStatus, setLocationStatus] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };

    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');
        console.log('Ths is position object');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(+currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(+currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };
  const initialRegion = {
    latitude: 31.582045,
    longitude: 74.329376,
    latitudeDelta: 1,
    longitudeDelta: 1,
  };
  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        //Will give you the location on location change

        setLocationStatus('You are Here');
        console.log(position);

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(+currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(+currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };

  return (
    <>
      <AppHeader
        menuImg={back}
        // addImg={search}
        title={'My Location'}
        menuPress={() => navigation.goBack()}
        addPress={() => Alert.alert('comming soon')}
        SearchHeader={true}
      />
      <SafeAreaView style={{flex: 1}}>
        {/* <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.boldText}>{locationStatus}</Text>
            <Text
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 16,
                color: colors.Danube,
              }}>
              Longitude: {currentLongitude}
            </Text>
            <Text
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 16,
                color: colors.Danube,
              }}>
              Latitude: {currentLatitude}
            </Text>
          </View>
        </View> */}
        <View style={styles.MainContainer}>
          <MapView
            style={styles.mapStyle}
            showsUserLocation={true}
            zoomEnabled={true}
            provider={PROVIDER_GOOGLE}
            followsUserLocation={true}
            scrollEnabled={true}
            mapType={'hybrid'}
            zoomControlEnabled={true}
            showsBuildings={true}
            showsTraffic={true}
            showsIndoors={true}
            initialRegion={initialRegion}>
            <Marker
              coordinate={{
                latitude: currentLatitude,
                longitude: currentLongitude,
              }}
              pinColor="#6783cd"
              title={'Location'}
              description={'Your Current location'}
            />
          </MapView>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
