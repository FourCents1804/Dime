import axios from 'axios';
import Expo from 'expo';
import {key} from '../../../secrets'

const { manifest } = Expo.Constants;
const ip = manifest.packagerOpts.dev
  ? manifest.debuggerHost
      .split(`:`)
      .shift()
      .concat(`:19004`)
  : `localhost:19004`;

export const ADD_PURCHASE = 'ADD_PURCHASE';

export const defaultPurchase = {};

const addPurchase = newPurchase => ({ type: ADD_PURCHASE, newPurchase });

export const addNewPurchase = base64String => async dispatch => {

  const body = {
    requests: [
      {
        image: {
          content: base64String,
        },
        features: [
          {
            type: 'TEXT_DETECTION',
            maxResults: 1,
          }
        ]
      },
    ],
  };
  let responce = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${key}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'

    },
    body: JSON.stringify(body)
  })
  const parsed = await responce.json()
  const elements = parsed.responses[0].textAnnotations[0].description.split(
    '\n'
  );
  const items = [];
  const prices = [];
  elements.forEach(el => {
    if (el.match(/^[A-Za-z]/i)) {
      items.push(el);
    } else if (el.match(/^[0-9]*[.][0-9]/i)) {
      prices.push(el);
    }
  });
  console.log(items, prices)
  // const brand = elements[0];
  // let summary = {};
  // if (brand === 'Walmart') {
  //   const TotalPrice = prices[prices.length - 2];
  //   const subTotalIdx = items.findIndex(el => {
  //     return el.startsWith('SUBTOTAL');
  //   });
  //   const boughtItems = items.slice(6, subTotalIdx);
  //   const document = {
  //     content: boughtItems.join(' '),
  //     type: 'PLAIN_TEXT'
  //   };
  //    responce = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${key}`, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'

  //     },
  //     body: JSON.stringify({
  //       requests: [
  //         {
  //           image: {
  //             content: base64String,
  //           },
  //           features: [
  //             {
  //               type: 'TEXT_DETECTION',
  //               maxResults: 1,
  //             }
  //           ]
  //         },
  //       ],
  //     };)
  //   })
  //   summary.category = textContent.categories[0].name.slice(1);
  //   summary.Total = TotalPrice;
  //   summary.purchasedItems = boughtItems;
  // }

  // if (brand === 'WHOLE') {
  //   const NetSalesIdx = items.findIndex(el => {
  //     return el.startsWith('Net Sales');
  //   });
  //   const TotalIdx = elements.findIndex(el => {
  //     return el.startsWith('Subtotal');
  //   });
  //   const TotalPrice = elements[TotalIdx - 1].replace(/\$/g, '');
  //   const boughtItems = items.slice(5, NetSalesIdx);
  //   const document = {
  //     content: boughtItems.join(' '),
  //     type: 'PLAIN_TEXT'
  //   };
  // const {data } = await axios.post(`http://${ip}/api/receiptRecognition`, {base64String});

  // dispatch(addPurchase(data));
};

export default function(state = defaultPurchase, action) {
  switch (action.type) {
    case ADD_PURCHASE:
      return action.newPurchase;
    default:
      return state;
  }
}
