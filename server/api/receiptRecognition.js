const router = require('express').Router();
const defaultHandler = require('./errorHandler');
const vision = require('@google-cloud/vision');
const clientVision = new vision.ImageAnnotatorClient();
const language = require('@google-cloud/language');
const clientLanguage = new language.LanguageServiceClient();

router.post(
  '/',
  defaultHandler(async (req, res, next) => {
    const { boughtItemsStr } = req.body;
    console.log('in the thunk');
    const document = {
      content: boughtItemsStr,
      type: 'PLAIN_TEXT'
    };
    const textContent = await clientLanguage.classifyText({
      document: document
    });
    res.send(textContent);
  })
);

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
//   })
// );

module.exports = router;
