import React, {useState, useEffect, useContext} from 'react';

import back from '../../../../assets/_Header/back-button.png';
import pdf from '../../../../assets/_Header/pdf.png';
import {OrderDetailCOmponent} from '../../../../componenets/OrderDetailsComponent';

import AppHeader from '../../../../ui/AppHeader';

export const OrderDetail = ({navigation, route}: any) => {
  const {docNum} = route.params;
  return (
    <>
      <AppHeader
        menuImg={back}
        addImg={pdf}
        pdfscreen={true}
        title={'Order Detail'}
        menuPress={() => navigation.goBack()}
        addPress={() => navigation.navigate('Pdf')}
      />
      <OrderDetailCOmponent
      //  docNum={docNum}
      />
    </>
  );
};
