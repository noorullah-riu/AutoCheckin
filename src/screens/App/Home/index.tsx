import React, {useContext, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  FlatList,
  Alert,
  Dimensions,
} from 'react-native';
import colors from '../../../theme/colors';
import Loader from '../../../ui/Loader';
import BlueButton from '../../../ui/BlueButton';
import Header from '../../../ui/Header';
import {removeUser} from '../../../storage/index';
import ShowToast from '../../../ui/Toast';
import EcomContext from '../../../contextApi/DataProvider';
import axios from 'axios';
import Spacings from '../../../theme/Spacings';
const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;
export const Home = props => {
  const {
    UserAuthentic,
    Data,
    setUserAuthentic,
    activeProject,
    setactiveProject,
    activeProjectName,
    setactiveProjectName,
    activeProjectYesterday,
    setactiveProjectYesterday,

    ActiveProjectDeviceID, setActiveProjectDeviceID,
  } = useContext(EcomContext);
  const [historyArrToday, sethistoryArrToday] = useState([]);
  const [historyArrYesterday, sethistoryArrYesterday] = useState([]);
  const [BhistoryArrYesterday, setBhistoryArrYesterday] = useState(false);
  const [fromdate, setfromDate] = useState('');
  const [todate, settoDate] = useState('');
  const [loading, setloading] = useState(false);

  const logOut = async () => {
    const resp = await removeUser();
    if (resp) {
      setUserAuthentic(!UserAuthentic);
      ShowToast('success', `See You Soon`);
    }
  };
  const getCurrentDate = () => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year,.
    var today =
      (date < 10 ? '0' + date : date) +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      year;
    console.log('today', today);
    funGetHistoryToday(today);
  };

  const getCurrentDate_1 = () => {
    var date = new Date().getDate() - 1; //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year,.
    if (date == 0) {
      date = 28;
      month = month - 1;
    }
    var today2 =
      (date < 10 ? '0' + date : date) +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      year;
    console.log('yesteday', today2);
    funGetHistoryYesterday(today2);
  };
  const funGetHistoryToday = a => {
    setloading(true);
    axios
      .post('https://time.vmivmi.co:8092/api/VMI/GetHistory', {
        employeeid: Data?.employeeid,
        extEmpNo: Data?.extEmpNo,
        fromdate: a,
        todate: a,
        project: '',
      })
      .then(function (response) {
        //   console.log(response.data.TimesheetDetails);
        response?.data?.TimesheetDetails?.forEach(async element => {
          //   console.log(element?.outtime, '------------');
          if (!element.outtime) {
            //   Alert.alert('found null');
            setactiveProjectName(element.project);
            setactiveProject(true);
            setActiveProjectDeviceID(element.INdeviceID);
            setloading(false);
          } else {
            setactiveProject(false);
            setloading(false);
          }
        });
        sethistoryArrToday(response.data.TimesheetDetails);
        setloading(false);
      })
      .catch(function (error) {
        setloading(false);
        console.log(error);
      });
  };
  const funGetHistoryYesterday = a => {
    //  ADV1004A and password 12345.
    setloading(true);
    axios
      .post('https://time.vmivmi.co:8092/api/VMI/GetHistory', {
        employeeid: Data?.employeeid,
        extEmpNo: Data?.extEmpNo,
        fromdate: a,
        todate: a,
        project: '',
      })
      .then(function (response) {
        response?.data?.TimesheetDetails?.forEach(async element => {
          //   console.log(element?.outtime, '------------');
          if (!element.outtime) {
            //  Alert.alert('found null');
            setloading(false);
            setactiveProjectName(element.project);
            setactiveProject(true);
            setactiveProjectYesterday(true);
            setActiveProjectDeviceID(element.INdeviceID);
          } else {
            setloading(false);
            setactiveProject(false);
          }
        });
        sethistoryArrYesterday(response?.data?.TimesheetDetails);
        setloading(false);
        // setactiveProject
      })
      .catch(function (error) {
        setloading(false);
        //    Alert.alert('error');
        console.log(error);
      });
  };

  useEffect(() => {
    getCurrentDate_1();
    getCurrentDate();
  }, []);

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      getCurrentDate_1();
      getCurrentDate();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [props.navigation]);
  if (loading) return <Loader />;

  return (
    <>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <Header title={'Home'} />
        <View style={styles.containerStyling}>
          <View
            style={{
              marginBottom: Spacings['4xl'],
              flexDirection: 'row',
            }}>
            <View style={{flex: 3}}>
              <Text style={styles.singinTxt}>{Data?.employeename}</Text>
              <Text style={styles.singinTxt}>{Data?.extEmpNo}</Text>
            </View>
            <Pressable
              onPress={logOut}
              style={{
                flex: 1,
                borderColor: colors.tomato,
                borderWidth: 1,
                marginVertical:10,
              //  alignItems:"center",
                justifyContent:"center"
               // marginTop: Spacings.m,

              }}>
              <Text style={styles.singinTxt2}>LogOut</Text>
            </Pressable>
            <View style={{flex: 0.5}}></View>
          </View>

          <View>
            <Text
              style={{
                fontSize: Spacings.xl,
                color: colors.grey,
                fontWeight: 'bold',
                marginLeft: Spacings['w4xl'],
                marginBottom: Spacings.m,
              }}>
              Previous Day
            </Text>
            {historyArrYesterday?.length ? (
              <>
                <FlatList
                  horizontal={true}
                  data={historyArrYesterday}
                  keyExtractor={item => item?.INGlocation + item?.outtime}
                  renderItem={({item, index, separators}) => (
                    <View>
                      <View style={styles.itemDiv}>
                        <View style={styles.fRow}>
                          <View style={styles.f1}>
                            <Text style={styles.cName1}>{item.project}</Text>
                          </View>
                        </View>
                        <View style={styles.fRow}>
                          <View style={styles.f1}>
                            <Text style={styles.s13}>Date:</Text>
                          </View>
                          <View style={styles.f1}>
                            <Text style={styles.yellowTxt1}>{item.date}</Text>
                          </View>
                        </View>

                        <View style={styles.fRow}>
                          <View style={styles.f1}>
                            <Text style={styles.s13}>Total Hours:</Text>
                          </View>
                          <View style={styles.f1}>
                            <Text style={styles.yellowTxt}>
                              {item.totalhours}
                            </Text>
                          </View>
                        </View>

                        <View style={styles.fRow}>
                          <View style={styles.f1}>
                            <Text style={styles.s13}>In Device ID</Text>
                          </View>
                          <View style={styles.f1}>
                            <Text style={styles.yellowTxt}>
                              {item?.INdeviceID}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.fRow}>
                          <View style={styles.f1}>
                            <Text style={styles.s13}>Out Device ID</Text>
                          </View>
                          <View style={styles.f1}>
                            <Text style={styles.yellowTxt}>
                              {item?.OUTDeviceID}
                            </Text>
                          </View>
                        </View>

                        <View style={styles.fRow}>
                          <View style={styles.f1}>
                            <Text style={styles.s13}>In Time:</Text>
                          </View>
                          <View style={styles.f1}>
                            <Text style={styles.yellowTxt1}>{item.intime}</Text>
                          </View>
                        </View>

                        <View style={styles.fRow}>
                          <View style={styles.f1}>
                            <Text style={styles.s13}>Out Time:</Text>
                          </View>
                          {item?.outtime ? (
                            <View style={{flex: 1}}>
                              <Text style={styles.yellowTxt1}>
                                {item.outtime}
                              </Text>
                            </View>
                          ) : (
                            <Pressable
                              onPress={() =>
                                props.navigation.navigate('CheckOut', {
                                  screen: 'CheckOut',
                                })
                              }
                              style={{
                                flex: 0.5,
                                borderColor: colors.tomato,
                                borderWidth: 1,
                                marginRight: Spacings.wm,
                                paddingVertical: Spacings.xs,
                              }}>
                              <Text style={styles.singinTxt2}>CheckOut</Text>
                            </Pressable>
                          )}
                          {/* <View style={styles.f1}>
                            <Text style={styles.yellowTxt1}>
                              {item.outtime}
                            </Text>
                          </View>  */}
                        </View>
                      </View>
                    </View>
                  )}
                />
              </>
            ) : (
              <>
                <Text
                  style={{
                    fontSize: Spacings.l,
                    color: colors.grey,
                    marginTop: Spacings.m,
                    textAlign: 'center',
                    marginBottom: Spacings.m,
                  }}>
                  No Previous Day History
                </Text>
              </>
            )}
          </View>

          <View>
            <Text
              style={{
                fontSize: Spacings.xl,
                fontWeight: 'bold',
                color: colors.grey,
                marginLeft: Spacings.w4xl,
                marginTop: Spacings.m,
                marginBottom: Spacings.m,
              }}>
              Current Day
            </Text>
            <FlatList
              horizontal={true}
              data={historyArrToday}
              keyExtractor={item => item?.INGlocation + item?.outtime}
              renderItem={({item, index, separators}) => (
                <View>
                  <View style={styles.itemDiv}>
                    <View style={styles.fRow}>
                      <View style={styles.f1}>
                        <Text style={styles.cName1}>{item.project}</Text>
                      </View>
                    </View>
                    <View style={styles.fRow}>
                      <View style={styles.f1}>
                        <Text style={styles.s13}>Date:</Text>
                      </View>
                      <View style={styles.f1}>
                        <Text style={styles.yellowTxt1}>{item.date}</Text>
                      </View>
                    </View>

                    <View style={styles.fRow}>
                      <View style={styles.f1}>
                        <Text style={styles.s13}>Total Hours:</Text>
                      </View>
                      <View style={styles.f1}>
                        <Text style={styles.yellowTxt}>{item.totalhours}</Text>
                      </View>
                    </View>

                    <View style={styles.fRow}>
                      <View style={styles.f1}>
                        <Text style={styles.s13}>In Device ID</Text>
                      </View>
                      <View style={styles.f1}>
                        <Text style={styles.yellowTxt}>{item?.INdeviceID}</Text>
                      </View>
                    </View>
                    <View style={styles.fRow}>
                      <View style={styles.f1}>
                        <Text style={styles.s13}>Out Device ID</Text>
                      </View>
                      <View style={styles.f1}>
                        <Text style={styles.yellowTxt}>
                          {item?.OUTDeviceID}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.fRow}>
                      <View style={styles.f1}>
                        <Text style={styles.s13}>In Time:</Text>
                      </View>
                      <View style={styles.f1}>
                        <Text style={styles.yellowTxt1}>{item.intime}</Text>
                      </View>
                    </View>

                    <View style={styles.fRow}>
                      <View style={styles.f1}>
                        <Text style={styles.s13}>Out Time:</Text>
                      </View>
                      {item?.outtime ? (
                        <View style={{flex: 1}}>
                          <Text style={styles.yellowTxt1}>{item.outtime}</Text>
                        </View>
                      ) : (
                        <Pressable
                          onPress={() =>
                            props.navigation.navigate('CheckOut', {
                              screen: 'CheckOut',
                            })
                          }
                          style={{
                            flex: 0.5,
                            borderColor: colors.tomato,
                            borderWidth: 1,
                            marginRight: Spacings.wm,
                            paddingVertical: Spacings.xs,
                          }}>
                          <Text style={styles.singinTxt2}>CheckOut</Text>
                        </Pressable>
                      )}
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyling: {
    flex: 1,
  },
  textStyling: {
    marginTop: Spacings['4xl'],
    textAlign: 'center',
    color: '#000',
  },
  h60: {
    height: Spacings['6xl'],
    flex: 1,
  },
  singinTxt: {
    marginTop: Spacings.m,

    marginLeft: Spacings.w4xl,
    color: colors.Indigo,
    fontSize: Spacings.l,
    fontWeight: 'bold',
  },
  singinTxt2: {
    //  marginTop:10,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: colors.tomato,
    fontSize: Spacings.l,
    fontWeight: 'bold',
  },
  lognDiv: {
    marginTop: Spacings['5xl'],
    height: Spacings['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: Spacings.m,
    alignItems: 'center',
  },
  itemDiv: {
    marginTop: Spacings.m,
    paddingVertical: Spacings.m,
    width: windowwidth - Spacings['w6xl'],
    backgroundColor: colors.white,
    marginLeft: Spacings.wm,
    borderRadius: Spacings.wm,
    alignSelf: 'center',
    borderWidth: 1,
  },
  cName: {
    color: colors.Indigo,
    fontWeight: 'bold',
    fontSize: Spacings.xl,
    textAlign: 'center',
  },
  cnameDiv1: {
    flexDirection: 'row',
    paddingHorizontal: Spacings.wxl,
  },
  f1: {
    flex: 1,
  },
  cName1: {
    marginLeft: Spacings.wxl,
    color: colors.Indigo,
    fontWeight: 'bold',
    fontSize: Spacings.xl,
  },
  s13: {
    marginLeft: Spacings.wxl,
    fontSize: Spacings.l,
    color: colors.grey,
  },
  fRow: {
    flexDirection: 'row',
  },
  s12: {
    marginLeft: Spacings.wxl,
    fontSize: Spacings.l,
    marginTop: Spacings.xs,
    color: colors.grey,
  },
  yellowTxt: {
    fontSize: Spacings.m,
    color: colors.meeting,
    fontWeight: '700',
    textAlign: 'right',
    marginRight: Spacings['wxl'],
  },

  s15: {
    fontSize: Spacings.l,
    fontWeight: '500',
    color: colors.Indigo,
  },
  txtDate: {
    marginTop: Spacings.xl,
    color: colors.white,
    alignSelf: 'center',
  },
  item1Div: {
    marginTop: Spacings['4xl'],
    width: Spacings['w2H'],
    height: Spacings['7xl'],
    borderRadius: Spacings.wm,
    backgroundColor: colors.Indigo,
  },

  cnameDiv: {
    flexDirection: 'row',
    marginTop: Spacings.m,
    marginBottom: Spacings.m,
    paddingVertical: Spacings.m,
    backgroundColor: colors.white,
    marginHorizontal: Spacings['8xl'],
    borderWidth: 2,
    borderColor: colors.new_black,
  },

  yellowTxt1: {
    fontSize: Spacings.m,
    color: colors.Rajah,
    fontWeight: '700',
    textAlign: 'right',
    marginRight: Spacings['wxl'],
  },
});
