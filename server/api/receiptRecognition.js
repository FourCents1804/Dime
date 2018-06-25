const router = require('express').Router();
const defaultHandler = require('./errorHandler');

const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

const fileName = '/path/to/image';

//Add Parsing Function Here

router.get(
  '/',
  defaultHandler(async (req, res, next) => {
    const rawItems = [];
    const textOnReceipt = await client.textDetection(fileName);
    const detections = textOnReceipt[0].textAnnotations;
    detections.forEach(text => rawItems.push(text));
    res.send(rawItems);
  })
);

module.exports = router;
