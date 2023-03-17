import React, {useState} from 'react';
import {Platform} from 'react-native';
import WebView from 'react-native-webview';
import AppHeader from '../../../ui/AppHeader';
import pdf from '../../../assets/_Header/pdf.png';
import back from '../../../assets/_Header/back-button.png';
import {PermissionsAndroid} from 'react-native';
import {View, Alert} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';
import spacing from '../../../theme/spacing';
import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';

export const Pdf = ({navigation}: any) => {
  const [count, setCount] = useState(1);
  const Html = {
    html: `
  <!DOCTYPE html>
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
    </u>

    <p style=" padding-left: 36pt; text-align: left">

      <span class="s2"> G/L Account/BP Code</span>
      <span class="s21">R000010</span>

    </p>
    <p style="padding-top: 1pt; padding-left: 36pt; text-align: left">
      <span class="s2"> G/L Account/BP Name</span>
      <span class="s22">Taste Cuisine PVT Limited</span>

    </p>
    <p style="padding-left: 36pt; text-align: left">
      <span class="s2"> G/L Account/BP Currency</span>
      <span class="s23">Pakistani Ruppees</span>
    </p>
    <p style="padding-left: 36pt; text-align: left">
      <span class="s2">Prev.Balance</span>
      <span class="s24">LC: 2,058,331.24</span>
    </p>
    <p style="padding-left: 36pt; text-align: left">
      <span class="s2">Prev.Balance Due</span>
      <span class="s25">LC: 261,069.00</span>
    </p>
    <table
    style="
      border-collapse: collapse;
      margin-left: auto;
      margin-right: 40pt;
    "
    cellspacing="0"
  >
    <tr style="height: 1pt">
      <td
        style="
          width: 70pt;
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
         From Date:
        </p>
      </td>
      <td
        style="
          width: 60pt;
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
        <p class="s4" style="padding-left: 2pt; text-align: right">
          19.11.18
        </p>
      </td>
    </tr>

  <tr style="height: 4pt">
    <td
      style="
        width: 70pt;
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
       To Date:
      </p>
    </td>
    <td
      style="
        width: 60pt;
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
      <p class="s4" style="padding-left: 2pt; text-align: right">
        11.11.22
      </p>
    </td>
  </tr>
</table>
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
      <tr style="height: 4pt">
        <td
          style="
            width: 13%;
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
            Posting<span class="s4"> </span>Date
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
          <p class="s3" style="padding-right: 2pt; text-align: left">
            Trans<span class="s4"> </span>#
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
          <p class="s3" style="padding-right: 10pt; text-align: left">Source</p>
        </td>
        <td
          style="
            width: 40%;
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
          <p class="s3" style="padding-right: 28pt; text-align: left">
            Details
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
            class="s3"
            style="
              padding-left: 28pt;
              padding-right: 28pt;

              text-align: center;
            "
          >
            Debit
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
          <p class="s3" style="padding-left: 28pt; padding-right: 28pt; text-align: center"">Credit</p>
        </td>
        <td
          style="
            width: 13%;
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
            style="padding-left: 28pt; padding-right: 28pt; text-align: center"
          >
            Balance
          </p>
        </td>
      </tr>
      <tr style="height: 4pt">
        <td
          style="
            width: 13%;
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
           19.11.18
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
          <p class="s4" style="padding-right: 2pt; text-align: left">
            19245
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
          <p class="s4" style="padding-right: 10pt; text-align: left">JE</p>
        </td>
        <td
          style="
            width: 40%;
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
          <p class="s4" style="padding-right: 28pt; text-align: left">
            Transfer Online 76351392
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
              padding-left: 28pt;

              text-align: right;
            "
          >
            0
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
          <p class="s4" style="padding-left: 28pt; text-align: right">200,000</p>
        </td>
        <td
          style="
            width: 13%;
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
            style=" padding-left: 28pt; text-align: right"
          >
            1,858,331
          </p>
        </td>
      </tr>
    <tr style="height: 4pt">
      <td
        style="
          width: 13%;
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
         11.12.18
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
        <p class="s4" style="padding-right: 2pt; text-align: left">
          13555
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
        <p class="s4" style="padding-right: 10pt; text-align: left">JE</p>
      </td>
      <td
        style="
          width: 40%;
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
        <p class="s4" style="padding-right: 28pt; text-align: left">
          A/R Invoices-R 000010
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
            padding-left: 28pt;

            text-align: right;
          "
        >
          98,998
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
        <p class="s4" style="padding-left: 28pt; text-align: right">0</p>
      </td>
      <td
        style="
          width: 13%;
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
          style=" padding-left: 28pt; text-align: right"
        >
          1,957,330
        </p>
      </td>
    </tr>
  </table>
  </body>
</html>`,
  };
  const htmlContent = `
  <!DOCTYPE html>
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
    </u>

    <p style=" padding-left: 36pt; text-align: left">

      <span class="s2"> G/L Account/BP Code</span>
      <span class="s21">R000010</span>

    </p>
    <p style="padding-top: 1pt; padding-left: 36pt; text-align: left">
      <span class="s2"> G/L Account/BP Name</span>
      <span class="s22">Taste Cuisine PVT Limited</span>

    </p>
    <p style="padding-left: 36pt; text-align: left">
      <span class="s2"> G/L Account/BP Currency</span>
      <span class="s23">Pakistani Ruppees</span>
    </p>
    <p style="padding-left: 36pt; text-align: left">
      <span class="s2">Prev.Balance</span>
      <span class="s24">LC: 2,058,331.24</span>
    </p>
    <p style="padding-left: 36pt; text-align: left">
      <span class="s2">Prev.Balance Due</span>
      <span class="s25">LC: 261,069.00</span>
    </p>
    <table
    style="
      border-collapse: collapse;
      margin-left: auto;
      margin-right: 40pt;
    "
    cellspacing="0"
  >
    <tr style="height: 1pt">
      <td
        style="
          width: 70pt;
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
         From Date:
        </p>
      </td>
      <td
        style="
          width: 60pt;
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
        <p class="s4" style="padding-left: 2pt; text-align: right">
          19.11.18
        </p>
      </td>
    </tr>

  <tr style="height: 4pt">
    <td
      style="
        width: 70pt;
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
       To Date:
      </p>
    </td>
    <td
      style="
        width: 60pt;
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
      <p class="s4" style="padding-left: 2pt; text-align: right">
        11.11.22
      </p>
    </td>
  </tr>
</table>
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
      <tr style="height: 4pt">
        <td
          style="
            width: 13%;
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
            Posting<span class="s4"> </span>Date
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
          <p class="s3" style="padding-right: 2pt; text-align: left">
            Trans<span class="s4"> </span>#
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
          <p class="s3" style="padding-right: 10pt; text-align: left">Source</p>
        </td>
        <td
          style="
            width: 40%;
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
          <p class="s3" style="padding-right: 28pt; text-align: left">
            Details
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
            class="s3"
            style="
              padding-left: 28pt;
              padding-right: 28pt;

              text-align: center;
            "
          >
            Debit
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
          <p class="s3" style="padding-left: 28pt; padding-right: 28pt; text-align: center"">Credit</p>
        </td>
        <td
          style="
            width: 13%;
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
            style="padding-left: 28pt; padding-right: 28pt; text-align: center"
          >
            Balance
          </p>
        </td>
      </tr>
      <tr style="height: 4pt">
        <td
          style="
            width: 13%;
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
           19.11.18
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
          <p class="s4" style="padding-right: 2pt; text-align: left">
            19245
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
          <p class="s4" style="padding-right: 10pt; text-align: left">JE</p>
        </td>
        <td
          style="
            width: 40%;
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
          <p class="s4" style="padding-right: 28pt; text-align: left">
            Transfer Online 76351392
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
              padding-left: 28pt;

              text-align: right;
            "
          >
            0
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
          <p class="s4" style="padding-left: 28pt; text-align: right">200,000</p>
        </td>
        <td
          style="
            width: 13%;
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
            style=" padding-left: 28pt; text-align: right"
          >
            1,858,331
          </p>
        </td>
      </tr>
    <tr style="height: 4pt">
      <td
        style="
          width: 13%;
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
         11.12.18
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
        <p class="s4" style="padding-right: 2pt; text-align: left">
          13555
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
        <p class="s4" style="padding-right: 10pt; text-align: left">JE</p>
      </td>
      <td
        style="
          width: 40%;
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
        <p class="s4" style="padding-right: 28pt; text-align: left">
          A/R Invoices-R 000010
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
            padding-left: 28pt;

            text-align: right;
          "
        >
          98,998
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
        <p class="s4" style="padding-left: 28pt; text-align: right">0</p>
      </td>
      <td
        style="
          width: 13%;
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
          style=" padding-left: 28pt; text-align: right"
        >
          1,957,330
        </p>
      </td>
    </tr>
  </table>
  </body>
</html>`;
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
        {text: 'Cancel', style: 'cancel'},
        {text: 'Open', onPress: () => openFile(file.filePath)},
      ],
      {cancelable: true},
    );
  };

  const openFile = filepath => {
    const path = filepath; // absolute-path-to-my-local-file.
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
          title={'Pdf Deatils'}
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

export default Pdf;
