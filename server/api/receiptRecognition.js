const router = require('express').Router();
const defaultHandler = require('./errorHandler');
const vision = require('@google-cloud/vision')
const clientVision = new vision.ImageAnnotatorClient();
const language = require('@google-cloud/language')
const clientLanguage = new language.LanguageServiceClient()

router.post(
  '/',
  defaultHandler(async (req, res, next) => {
    const img = req.body.base64String
    console.log('in the thunk')
    require('fs').writeFile('sendToGoogle.jpeg', img, {encoding: 'base64'}, function(err){
      console.log(err, 'success')
    })
    const image = ''
    const textOnReceipt = await clientVision.textDetection(image);
    console.log('succeded', textOnReceipt)
    const elements = textOnReceipt[0].textAnnotations[0].description.split(
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

    const brand = elements[0];
    let summary = {};
    console.log(items, prices)
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
    //   const textContent = await clientLanguage.classifyText({
    //     document: document
    //   });
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
    //   const textContent = await clientLanguage.classifyText({
    //     document: document
    //   });
    //   summary.category = textContent[0].categories[0].name.slice(1);
    //   summary.Total = Number(TotalPrice);
    //   summary.purchasedItems = boughtItems;
    // }
    // res.send(summary);
  })
);

module.exports = router;
