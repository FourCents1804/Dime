const router = require('express').Router();
const defaultHandler = require('./errorHandler');

const vision = require('@google-cloud/vision');
const clientVision = new vision.ImageAnnotatorClient();
const language = require('@google-cloud/language');
const clientLanguage = new language.LanguageServiceClient();
const GOOGLE_APPLICATION_CREDENTIALS = '../../json'
//Add Parsing Function Here

router.post(
  '/',
  defaultHandler(async (req, res, next) => {
    const textOnReceipt = await clientVision.textDetection(req.body.fileName);
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
    if (brand === 'Walmart') {
      const TotalPrice = prices[prices.length - 2];
      const subTotalIdx = items.findIndex(el => {
        return el.startsWith('SUBTOTAL');
      });
      const boughtItems = items.slice(6, subTotalIdx);
      const document = {
        content: boughtItems.join(' '),
        type: 'PLAIN_TEXT'
      };
      const textContent = await clientLanguage.classifyText({
        document: document
      });
      summary.category = textContent.categories[0].name.slice(1);
      summary.Total = TotalPrice;
      summary.purchasedItems = boughtItems;
    }

    if (brand === 'WHOLE') {
      const NetSalesIdx = items.findIndex(el => {
        return el.startsWith('Net Sales');
      });
      const TotalIdx = elements.findIndex(el => {
        return el.startsWith('Subtotal');
      });
      const TotalPrice = elements[TotalIdx - 1].replace(/\$/g, '');
      const boughtItems = items.slice(5, NetSalesIdx);
      const document = {
        content: boughtItems.join(' '),
        type: 'PLAIN_TEXT'
      };
      const textContent = await clientLanguage.classifyText({
        document: document
      });
      summary.category = textContent[0].categories[0].name.slice(1);
      summary.Total = Number(TotalPrice);
      summary.purchasedItems = boughtItems;
    }
    res.send(summary);
  })
);

module.exports = router;
