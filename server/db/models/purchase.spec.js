// /* global describe beforeEach it */

// const { expect } = require("chai");
// const db = require("../index");
// const Purchase = require("./purchase");

// describe("▒▒▒ Purchase Model Tests ▒▒▒", () => {
//   beforeEach("Synchronize and clear database", () => db.sync({ force: true }));

//   after("Synchronize and clear database", () => db.sync({ force: true }));

//   describe("Sequelize models", function() {
//     let purchase;
//     beforeEach("Creates purchase", () =>
//       Purchase.create({
//         name: "Halal Guys",
//         amount: 152.82,
//         category: "Food and Drink",
//         categoryDetailed: "Restaurant"
//       }).then(newPurchase => (purchase = newPurchase))
//     );

//     describe("Purchase Model", () => {
//       it("has the expected schema definition", () => {
//         expect(purchase.name).to.be.an("string");
//         expect(purchase.amount).to.be.an("number");
//       });

//       it("has the length", async () => {
//         const purchases = await Purchase.findAll();
//         expect(purchases.length).to.equal(1);
//       });

//       it("can have multiple purchases", async () => {
//         await Purchase.findOrCreate({
//           where: {
//             amount: 90.46,
//             category: "Shops",
//             categoryDetailed: "Clothing and Accessories",
//             name: "260 SAMPLE SALE CHELSE"
//           }
//         });
//         const allPurchases = await Purchase.findAll();
//         expect(allPurchases.length).to.equal(2);
//       });
// //
//       it("won't add new purchase if any of info is typed in error", async () => {
//         await Purchase.findOrCreate({
//           where: {
//             amount: 9.8,
//             category: "Food and Drink",
//             categoryDetailed: null,
//             name: "KING OF FALAFEL"
//           }
//         });
//         const allPurchasesWithoutError = await Purchase.findAll();
//         expect(allPurchasesWithoutError.length).to.equal(2);
//         expect(allPurchasesWithoutError[0].name).to.equal("Halal Guys");
//         expect(allPurchasesWithoutError[1].name).to.equal("KING OF FALAFEL");
//       });
//     });
//   });
// });
