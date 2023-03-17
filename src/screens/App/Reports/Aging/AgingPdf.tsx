import React, {useState} from 'react';
import {Platform} from 'react-native';
import WebView from 'react-native-webview';
import AppHeader from '../../../../ui/AppHeader';
import pdf from '../../../../assets/_Header/pdf.png';
import back from '../../../../assets/_Header/back-button.png';
import {PermissionsAndroid} from 'react-native';
import {View, Alert} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';
import colors from '../../../../theme/colors';
import rfSpacing from '../../../../theme/rfSpacing';

export const AgingPdf = ({navigation}: any) => {
  const [count, setCount] = useState(1);
  const Html = {
    html: `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device width,initial scale =1.0" />
      <meta name="keywords" content="HTML,CSS" />
      <meta name="description" content="....." />
  
      <title>Gulf Packaging</title>
      <style>
        h1 {
          color: black;
          font-family: Calibri, sans-serif;
          font-style: normal;
          font-weight: bold;
          text-decoration: none;
          font-size: 22pt;
        }
        .s1 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: normal;
          text-decoration: none;
          font-size: 11.5pt;
        }
        .s2 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: 700;
          text-decoration: none;
          font-size: 10pt;
        }
        .s21 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: 100;
          padding-left: 136pt;
          text-align: left;
          text-decoration: none;
          font-size: 10pt;
        }
        .s22 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: 100;
          padding-left: 133pt;
          text-align: left;
          text-decoration: none;
          font-size: 10pt;
        }
        .s23 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: 100;
          padding-left: 116pt;
          text-align: left;
          text-decoration: none;
          font-size: 10pt;
        }
        .s24 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: 100;
          padding-left: 178pt;
          text-align: left;
          text-decoration: none;
          font-size: 10pt;
        }
        .s25 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: 100;
          padding-left: 156pt;
          text-align: left;
          text-decoration: none;
          font-size: 10pt;
        }
        .s3 {
          color: black;
          font-family: Calibri, sans-serif;
          font-style: normal;
          font-weight: bold;
          text-decoration: none;
          font-size: 8pt;
        }
        .s4 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: normal;
          text-decoration: none;
          font-size: 8pt;
        }
      </style>
    </head>
  
    <body>
      <u>
        <h1 style="padding-top: 2pt; text-align: center">
          GULF PACKAGING (PVT) LTD
        </h1>
        <h2 style="padding-top: 2pt; text-align: center">Aging Report</h2>
      </u>
  
      <table
        style="
          border-collapse: collapse;
          margin-top: 60px;
          margin-left: auto;
          margin-right: auto;
          width: 90%;
        "
        cellspacing="0"
      >
        <tr style="height: 4pt; background-color: gainsboro">
          <td
            style="
              width: 12%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 4pt; text-align: left">
              Customer<span class="s4"> </span>Code
            </p>
          </td>
          <td
            style="
              width: 12%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 2pt; text-align: left">
              Customer Name<span class="s4"> </span>
            </p>
          </td>
          <td
            style="
              width: 5%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 2pt; text-align: left">Type</p>
          </td>
          <td
            style="
              width: 8%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 4pt; text-align: left">Doc.No.</p>
          </td>
          <td
            style="
              width: 8%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-right: 3pt;
  
                text-align: left;
              "
            >
              Instal.No.
            </p>
          </td>
  
          <td
            style="
              width: 10%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 4pt; text-align: left">
              Posting Date
            </p>
          </td>
          <td
            style="
              width: 10%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 4pt; text-align: left">
              Due Date
            </p>
          </td>
          <td
            style="
              width: 25%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 20pt; text-align: left">
              Balance Due
            </p>
          </td>
        </tr>
        <tr style="height: 4pt">
          <td
            style="
              width: 12%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 4pt; text-align: left">
              <span class="s4">U000410 </span>
            </p>
          </td>
          <td
            style="
              width: 12%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 2pt; text-align: left">
              <span class="s4">Foodly </span>
            </p>
          </td>
          <td
            style="
              width: 5%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 2pt; text-align: left">IN</p>
          </td>
          <td
            style="
              width: 8%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 4pt; text-align: left">
              22230732
            </p>
          </td>
          <td
            style="
              width: 8%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s4"
              style="
                padding-right: 3pt;
  
                text-align: left;
              "
            >
              1
            </p>
          </td>
  
          <td
            style="
              width: 10%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 4pt; text-align: left">
              20.09.22
            </p>
          </td>
          <td
            style="
              width: 10%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 4pt; text-align: left">
              19.11.22
            </p>
          </td>
          <td
            style="
              width: 25%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 10pt; text-align: right">
              PKR 19,275.20
            </p>
          </td>
        </tr>
        <tr style="height: 4pt">
          <td
            style="
              width: 12%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 4pt; text-align: left">
              <span class="s4">U000409 </span>
            </p>
          </td>
          <td
            style="
              width: 12%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 2pt; text-align: left">
              <span class="s4">4C Packages </span>
            </p>
          </td>
          <td
            style="
              width: 5%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 2pt; text-align: left">IN</p>
          </td>
          <td
            style="
              width: 8%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 4pt; text-align: left">
              22230771
            </p>
          </td>
          <td
            style="
              width: 8%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s4"
              style="
                padding-right: 3pt;
  
                text-align: left;
              "
            >
              1
            </p>
          </td>
  
          <td
            style="
              width: 10%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 4pt; text-align: left">
              21.09.22
            </p>
          </td>
          <td
            style="
              width: 10%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 4pt; text-align: left">
              20.11.22
            </p>
          </td>
          <td
            style="
              width: 25%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 10pt; text-align: right">
              PKR 119,310.00
            </p>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `,
  };
  const htmlContent = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device width,initial scale =1.0" />
      <meta name="keywords" content="HTML,CSS" />
      <meta name="description" content="....." />
  
      <title>Gulf Packaging</title>
      <style>
        h1 {
          color: black;
          font-family: Calibri, sans-serif;
          font-style: normal;
          font-weight: bold;
          text-decoration: none;
          font-size: 22pt;
        }
        .s1 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: normal;
          text-decoration: none;
          font-size: 11.5pt;
        }
        .s2 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: 700;
          text-decoration: none;
          font-size: 10pt;
        }
        .s21 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: 100;
          padding-left: 136pt;
          text-align: left;
          text-decoration: none;
          font-size: 10pt;
        }
        .s22 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: 100;
          padding-left: 133pt;
          text-align: left;
          text-decoration: none;
          font-size: 10pt;
        }
        .s23 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: 100;
          padding-left: 116pt;
          text-align: left;
          text-decoration: none;
          font-size: 10pt;
        }
        .s24 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: 100;
          padding-left: 178pt;
          text-align: left;
          text-decoration: none;
          font-size: 10pt;
        }
        .s25 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: 100;
          padding-left: 156pt;
          text-align: left;
          text-decoration: none;
          font-size: 10pt;
        }
        .s3 {
          color: black;
          font-family: Calibri, sans-serif;
          font-style: normal;
          font-weight: bold;
          text-decoration: none;
          font-size: 8pt;
        }
        .s4 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: normal;
          text-decoration: none;
          font-size: 8pt;
        }
      </style>
    </head>
  
    <body>
      <u>
        <h1 style="padding-top: 2pt; text-align: center">
          GULF PACKAGING (PVT) LTD
        </h1>
        <h2 style="padding-top: 2pt; text-align: center">Aging Report</h2>
      </u>
  
      <table
        style="
          border-collapse: collapse;
          margin-top: 60px;
          margin-left: auto;
          margin-right: auto;
          width: 90%;
        "
        cellspacing="0"
      >
        <tr style="height: 4pt; background-color: gainsboro">
          <td
            style="
              width: 12%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 4pt; text-align: left">
              Customer<span class="s4"> </span>Code
            </p>
          </td>
          <td
            style="
              width: 12%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 2pt; text-align: left">
              Customer Name<span class="s4"> </span>
            </p>
          </td>
          <td
            style="
              width: 5%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 2pt; text-align: left">Type</p>
          </td>
          <td
            style="
              width: 8%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 4pt; text-align: left">Doc.No.</p>
          </td>
          <td
            style="
              width: 8%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-right: 3pt;
  
                text-align: left;
              "
            >
              Instal.No.
            </p>
          </td>
  
          <td
            style="
              width: 10%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 4pt; text-align: left">
              Posting Date
            </p>
          </td>
          <td
            style="
              width: 10%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 4pt; text-align: left">
              Due Date
            </p>
          </td>
          <td
            style="
              width: 25%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 20pt; text-align: left">
              Balance Due
            </p>
          </td>
        </tr>
        <tr style="height: 4pt">
          <td
            style="
              width: 12%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 4pt; text-align: left">
              <span class="s4">U000410 </span>
            </p>
          </td>
          <td
            style="
              width: 12%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s3" style="padding-right: 2pt; text-align: left">
              <span class="s4">Foodly </span>
            </p>
          </td>
          <td
            style="
              width: 5%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 2pt; text-align: left">IN</p>
          </td>
          <td
            style="
              width: 8%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 4pt; text-align: left">
              22230732
            </p>
          </td>
          <td
            style="
              width: 8%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s4"
              style="
                padding-right: 3pt;
  
                text-align: left;
              "
            >
              1
            </p>
          </td>
  
          <td
            style="
              width: 10%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 4pt; text-align: left">
              20.09.22
            </p>
          </td>
          <td
            style="
              width: 10%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 4pt; text-align: left">
              19.11.22
            </p>
          </td>
          <td
            style="
              width: 25%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 10pt; text-align: right">
              PKR 19,275.20
            </p>
          </td>
        </tr>
        <tr style="height: 4pt">
          <td
            style="
              width: 12%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 4pt; text-align: left">
              <span class="s4">U000409 </span>
            </p>
          </td>
          <td
            style="
              width: 12%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 2pt; text-align: left">
              <span class="s4">4C Packages </span>
            </p>
          </td>
          <td
            style="
              width: 5%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 2pt; text-align: left">IN</p>
          </td>
          <td
            style="
              width: 8%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 4pt; text-align: left">
              22230771
            </p>
          </td>
          <td
            style="
              width: 8%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s4"
              style="
                padding-right: 3pt;
  
                text-align: left;
              "
            >
              1
            </p>
          </td>
  
          <td
            style="
              width: 10%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 4pt; text-align: left">
              21.09.22
            </p>
          </td>
          <td
            style="
              width: 10%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 4pt; text-align: left">
              20.11.22
            </p>
          </td>
          <td
            style="
              width: 25%;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p class="s4" style="padding-right: 10pt; text-align: right">
              PKR 119,310.00
            </p>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
  const askPermission = () => {
    async function requestExternalWritePermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Pdf creator needs External Storage Write Permission',
            message: 'Pdf creator needs access to Storage data in your SD Card',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          createPDF();
        } else {
          Alert('WRITE_EXTERNAL_STORAGE permission denied');
        }
      } catch (err) {
        alert('Write permission err', err);
        console.warn(err);
      }
    }
    if (Platform.OS === 'android') {
      requestExternalWritePermission();
    } else {
      createPDF();
    }
  };
  const createPDF = async () => {
    let options = {
      //Content to print
      html: htmlContent,
      // fileName: 'my-test',
      fileName: `invoice_${count}`,
      directory: 'Download',

      base64: true,
    };

    let file = await RNHTMLtoPDF.convert(options);
    // console.log(file.filePath);
    Alert.alert(
      'Successfully Exported',
      'Path:' + file.filePath,
      [
        {
          text: 'Cancel',
          onPress: () => navigation.navigate('Aging'),
          //   style: 'cancel',
        },
        {text: 'Open', onPress: () => openFile(file.filePath)},
      ],
      {cancelable: true},
    );
  };

  const openFile = filepath => {
    const path = filepath;
    FileViewer.open(path)
      .then(() => {
        // success
      })
      .catch(error => {
        // error
      });
  };
  return (
    <>
      <>
        <AppHeader
          menuImg={back}
          addImg={pdf}
          pdfscreen={true}
          title={'Ledger Pdf Deatils'}
          menuPress={() => navigation.goBack()}
          addPress={askPermission}
        />
        <View
          style={{
            paddingTop: rfSpacing.xl,
            backgroundColor: colors.white,
          }}></View>
        <WebView originWhitelist={['*']} source={Html} />
      </>
    </>
  );
};
export default AgingPdf;
