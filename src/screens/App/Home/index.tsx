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
import rfSpacing from '../../../theme/rfSpacing';
import BlueButton from '../../../ui/BlueButton';
import Header from '../../../ui/Header';
import {removeUser} from '../../../storage/index';
import ShowToast from '../../../ui/Toast';
import EcomContext from '../../../contextApi/DataProvider';
import axios from 'axios';
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
  } = useContext(EcomContext);
  const [historyArrToday, sethistoryArrToday] = useState([]);
  const [historyArrYesterday, sethistoryArrYesterday] = useState([]);
  const [BhistoryArrYesterday, setBhistoryArrYesterday] = useState(false);
  const [fromdate, setfromDate] = useState('');
  const [todate, settoDate] = useState('');

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
  // const outDate = date => {
  //   //Current Date

  //   if (date == 0) {
  //     date = 28;
  //     month = month - 1;
  //   }
  //   var today2 =
  //     (date < 10 ? '0' + date : date) +
  //     '-' +
  //     (month < 10 ? '0' + month : month) +
  //     '-' +
  //     year;
  //   console.log('yesteday', today2);
  //   funGetHistoryYesterday(today2);
  // };

  const funGetHistoryToday = a => {
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
          if (element?.outtime == null) {
            //   Alert.alert('found null');
            setactiveProjectName(element.project);
            setactiveProject(true);
          } else {
            setactiveProject(false);
          }
        });
        sethistoryArrToday(response.data.TimesheetDetails);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const funGetHistoryYesterday = a => {
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
          if (element?.outtime == null) {
            //   Alert.alert('found null');
            setactiveProjectName(element.project);
            setactiveProject(true);
          }
        });
        sethistoryArrYesterday(response?.data?.TimesheetDetails);
        //  setactiveProject
      })
      .catch(function (error) {
        //    Alert.alert('error');
        console.log(error);
      });
  };
  /* 
  useEffect(() => {
    getCurrentDate_1();
    getCurrentDate();
  }, []); */

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

  const username = `Username`;
  const DATA = [
    {
      date: '2023-02-28',
      project: '0004-DXB-NEU',
      intime: '11:03',
      outtime: '11:09',
      totalhours: '00:06',
      remarks: null,
      status: 'Open',
    },
    {
      date: '2023-02-28',
      project: '0011-DXB-CASH',
      intime: '17:30',
      outtime: null,
      totalhours: null,
      remarks: null,
      status: 'Open',
    },
    {
      date: '2023-02-28',
      project: '0011-DXB-CASH',
      intime: '18:30',
      outtime: null,
      totalhours: null,
      remarks: null,
      status: 'Open',
    },
  ];

  return (
    <>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <Header title={'Home'} />
        <View style={styles.containerStyling}>
          <View
            style={{
              marginBottom: 20,
              flexDirection: 'row',
            }}>
            <View style={{flex: 3}}>
              <Text style={styles.singinTxt}>{Data?.employeename}</Text>
            </View>
            <Pressable
              onPress={logOut}
              style={{
                flex: 1,
                borderColor: colors.tomato,
                borderWidth: 1,
                marginTop: 10,
              }}>
              <Text style={styles.singinTxt2}>LogOut</Text>
            </Pressable>
            <View style={{flex: 0.5}}></View>
          </View>

          <View>
            <Text
              style={{
                fontSize: 14,
                color: colors.grey,
                fontWeight: 'bold',
                marginLeft: 20,
                marginBottom: 10,
              }}>
              Previous Day
            </Text>
            {historyArrYesterday?.length ? (
              <>
                <FlatList
                  horizontal={true}
                  data={historyArrYesterday}
                  keyExtractor={item => item.date}
                  renderItem={({item, index, separators}) => (
                    <View>
                      {/* <View
                        style={{
                          backgroundColor: '#eee',
                          marginRight: 10,
                          borderRadius: 20,
                          paddingBottom: 10,
                        }}>
                        <View style={{width: 250}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 10,
                              marginLeft: 10,
                            }}>
                            <View style={{flex: 1}}>
                              <Text>Date</Text>
                            </View>
                            <View style={{flex: 1}}>
                              <Text>{item.date}</Text>
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 5,
                              marginLeft: 10,
                            }}>
                            <View style={{flex: 1}}>
                              <Text>Project</Text>
                            </View>
                            <View style={{flex: 1}}>
                              <Text>{item.project}</Text>
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 5,
                              marginLeft: 10,
                            }}>
                            <View style={{flex: 1}}>
                              <Text>In Time</Text>
                            </View>
                            <View style={{flex: 1}}>
                              <Text>{item.intime}</Text>
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 5,
                              marginLeft: 10,
                            }}>
                            <View style={{flex: 1}}>
                              <Text>Out Time</Text>
                            </View>
                            <View style={{flex: 1}}>
                              <Text>{item.outtime}</Text>
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 5,
                              marginLeft: 10,
                            }}>
                            <View style={{flex: 1}}>
                              <Text>Total Hours</Text>
                            </View>
                            <View style={{flex: 1}}>
                              <Text>{item.totalhours}</Text>
                            </View>
                          </View>
                        </View>
                      </View> */}

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
                          <View style={styles.f1}>
                            <Text style={styles.yellowTxt1}>
                              {item.outtime}
                            </Text>
                          </View>
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
                    fontSize: 12,
                    color: colors.grey,
                    marginTop: 10,
                    textAlign: 'center',
                    marginBottom: 10,
                  }}>
                  No Previous Day History
                </Text>
              </>
            )}
          </View>

          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: colors.grey,
                marginLeft: 20,
                marginTop: 10,
                marginBottom: 10,
              }}>
              Current Day
            </Text>
            <FlatList
              horizontal={true}
              data={historyArrToday}
              keyExtractor={item => item.date}
              renderItem={({item, index, separators}) => (
                // <View
                //   style={{
                //     backgroundColor: '#eee',
                //     marginRight: 10,
                //     borderRadius: 20,
                //     paddingBottom: 10,
                //   }}>
                //   <View style={{width: 250}}>
                //     <View
                //       style={{
                //         flexDirection: 'row',
                //         marginTop: 10,
                //         marginLeft: 10,
                //       }}>
                //       <View style={{flex: 1}}>
                //         <Text>Date</Text>
                //       </View>
                //       <View style={{flex: 1}}>
                //         <Text>{item.date}</Text>
                //       </View>
                //     </View>
                //     <View
                //       style={{
                //         flexDirection: 'row',
                //         marginTop: 5,
                //         marginLeft: 10,
                //       }}>
                //       <View style={{flex: 1}}>
                //         <Text>Project</Text>
                //       </View>
                //       <View style={{flex: 1}}>
                //         <Text>{item.project}</Text>
                //       </View>
                //     </View>

                //     <View
                //       style={{
                //         flexDirection: 'row',
                //         marginTop: 5,
                //         marginLeft: 10,
                //       }}>
                //       <View style={{flex: 1}}>
                //         <Text>In Time</Text>
                //       </View>
                //       <View style={{flex: 1}}>
                //         <Text>{item.intime}</Text>
                //       </View>
                //     </View>

                //     <View
                //       style={{
                //         flexDirection: 'row',
                //         marginTop: 5,
                //         marginLeft: 10,
                //       }}>
                //       <View style={{flex: 1}}>
                //         <Text>Out Time</Text>
                //       </View>
                //       <View style={{flex: 1}}>
                //         <Text>{item.outtime}</Text>
                //       </View>
                //     </View>

                //     <View
                //       style={{
                //         flexDirection: 'row',
                //         marginTop: 5,
                //         marginLeft: 10,
                //       }}>
                //       <View style={{flex: 1}}>
                //         <Text>Total Hours</Text>
                //       </View>
                //       <View style={{flex: 1}}>
                //         <Text>{item.totalhours}</Text>
                //       </View>
                //     </View>

                //     {/*           <View
                //       style={{
                //         flexDirection: 'row',
                //         marginTop: 5,
                //         marginLeft: 10,
                //       }}>
                //       <View style={{flex: 1}}>
                //         <Text>Status</Text>
                //       </View>
                //       <View style={{flex: 1}}>
                //         <Text>{item.status}</Text>
                //       </View>
                //     </View> */}
                //   </View>
                // </View>
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
                      <View style={{flex: 1}}>
                        <Text style={styles.yellowTxt1}>{item.outtime}</Text>
                      </View>
                      <Pressable
                        onPress={() => Alert.alert('CheckOut')}
                        style={{
                          flex: 0.8,
                          borderColor: colors.tomato,
                          borderWidth: 1,
                          marginRight: rfSpacing.m,
                          marginBottom: rfSpacing.ms,
                        }}>
                        <Text style={styles.singinTxt2}>CheckOut</Text>
                      </Pressable>
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
    marginTop: rfSpacing['4xl'],
    textAlign: 'center',
    color: '#000',
  },
  h60: {
    height: rfSpacing['6xl'],
    flex: 1,
  },
  singinTxt: {
    marginTop: 10,
    //  textAlignVertical: 'center',
    //   textAlign: 'center',
    //  height: rfSpacing['6xl'],
    marginLeft: 20,
    color: colors.Indigo,
    fontSize: 13,
    fontWeight: 'bold',
  },
  singinTxt2: {
    //  marginTop:10,
    textAlignVertical: 'center',
    textAlign: 'center',
    //  height: rfSpacing['6xl'],
    color: colors.tomato,
    fontSize: 12,
    fontWeight: 'bold',
  },
  lognDiv: {
    marginTop: rfSpacing['5xl'],
    height: rfSpacing['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: rfSpacing.m,
    alignItems: 'center',
  },
  itemDiv: {
    marginTop: rfSpacing.m,
    paddingVertical: rfSpacing.m,
    width: windowwidth - rfSpacing['6xl'],
    backgroundColor: colors.white,
    marginLeft: rfSpacing.m,
    borderRadius: rfSpacing.m,
    alignSelf: 'center',
    borderWidth: 1,
  },
  cName: {
    color: colors.Indigo,
    fontWeight: 'bold',
    fontSize: rfSpacing.xl,
    textAlign: 'center',
  },
  cnameDiv1: {
    flexDirection: 'row',
    paddingHorizontal: rfSpacing.xl,
  },
  f1: {
    flex: 1,
  },
  cName1: {
    marginLeft: rfSpacing.xl,
    color: colors.Indigo,
    fontWeight: 'bold',
    fontSize: rfSpacing.xl,
  },
  s13: {
    marginLeft: rfSpacing.xl,
    fontSize: rfSpacing.l,
    color: colors.grey,
  },
  fRow: {
    flexDirection: 'row',
  },
  s12: {
    marginLeft: rfSpacing.xl,
    fontSize: rfSpacing.l,
    marginTop: rfSpacing.xs,
    color: colors.grey,
  },
  yellowTxt: {
    fontSize: rfSpacing.m,
    color: colors.meeting,
    fontWeight: '700',
    textAlign: 'right',
    marginRight: rfSpacing['xl'],
  },

  s15: {
    marginLeft: rfSpacing.xl,
    fontSize: rfSpacing.l,
    fontWeight: '500',
    color: colors.Indigo,
  },
  txtDate: {
    marginTop: rfSpacing.xl,
    color: colors.white,
    alignSelf: 'center',
  },
  item1Div: {
    marginTop: rfSpacing['4xl'],
    width: rfSpacing['2H'],
    height: rfSpacing['7xl'],
    borderRadius: rfSpacing.m,
    backgroundColor: colors.Indigo,
  },

  cnameDiv: {
    flexDirection: 'row',
    marginTop: rfSpacing.m,
    marginBottom: rfSpacing.m,
    paddingVertical: rfSpacing.m,
    backgroundColor: colors.white,
    marginHorizontal: rfSpacing['8xl'],
  },

  yellowTxt1: {
    fontSize: rfSpacing.m,
    color: colors.Rajah,
    fontWeight: '700',
    textAlign: 'right',
    marginRight: rfSpacing['xl'],
  },
});
