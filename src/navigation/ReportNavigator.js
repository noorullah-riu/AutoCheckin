import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Reports} from '../screens';
import {Ledger} from '../screens';
import {Inventory} from '../screens/App/Reports/Inventory';
import {Transition} from 'react-native-reanimated';
import LedgerPdf from '../screens/App/Reports/Ledger/LegderPdf';
import {Aging} from '../screens/App/Reports/Aging';
import AgingPdf from '../screens/App/Reports/Aging/AgingPdf';
import {BussinessReport} from '../screens/App/Reports/BussinessReport';
import BussinessPdf from '../screens/App/Reports/BussinessReport/BussinessPdf';
import {Sale} from '../screens/App/Reports/Sale';

const ReportsStack = createStackNavigator();

export const ReportNavigator = () => {
  return (
    <ReportsStack.Navigator
      screenOptions={{
        headerShown: false,
        transition: (
          <Transition.Together>
            <Transition.Out
              type="slide-bottom"
              durationMs={400}
              interpolation="easeIn"
            />
            <Transition.In type="fade" durationMs={500} />
          </Transition.Together>
        ),
      }}>
      <ReportsStack.Screen name="Reports" component={Reports} />
      <ReportsStack.Screen name="Ledger" component={Ledger} />
      <ReportsStack.Screen name="Inventory" component={Inventory} />
      <ReportsStack.Screen name="LedgerPdf" component={LedgerPdf} />
      <ReportsStack.Screen name="Aging" component={Aging} />
      <ReportsStack.Screen name="AgingPdf" component={AgingPdf} />
      <ReportsStack.Screen name="BussinessReport" component={BussinessReport} />
      <ReportsStack.Screen name="BussinessPdf" component={BussinessPdf} />
      <ReportsStack.Screen name="Sale" component={Sale} />
    </ReportsStack.Navigator>
  );
};
