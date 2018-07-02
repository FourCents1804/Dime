import purchaseData from '../../../seed/purchaseData'

const userInfo = {
  age: '23',
  electricity: 0,
  email:
  'rwetmore3@gmail.com',
  entertainment: 0,
  firstName: 'Ryan',
  gas: 100.99999999999997,
  gender: 'Male',
  lastName: 'Wetmore',
  monthlyIncome: '10000',
  occupation: 'Software Engineer',
  password: 'fenway11',
  phone: 0,
  rePassword: 'fenway11',
  rent: 1601.0000000000002,
  savingsGoal: '500',
  transportation: 0
}

const purchases = purchaseData

//right now password is being stored on user - should present only the hash

//test:
// const purchases = [
//   {
//     "amount": 13.07,
//     "categoryBroad": "Shops",
//     "categoryDetailed": "Food and Beverage Store",
//     "createdAt": "2018-05-16",
//     "name": "LEONIDAS CHOCOLATES",
//     "transaction_id": 1
//   },
//   {
//     "amount": 26.25,
//     "categoryBroad": "Travel",
//     "categoryDetailed": "Public Transportation Services",
//     "createdAt": "2018-05-16",
//     "name": "MTA MVM VENDING MACHINES",
//     "transaction_id": 2
//   },
//   {
//     "amount": 90.46,
//     "categoryBroad": "Shops",
//     "categoryDetailed": "Clothing and Accessories",
//     "createdAt": "2018-05-15",
//     "name": "260 SAMPLE SALE CHELSE",
//     "transaction_id": 3
//   },
//   {
//     "amount": 9.8,
//     "categoryBroad": "Food and Drink",
//     "categoryDetailed": "Restaurants",
//     "createdAt": "2018-05-15",
//     "name": "KING OF FALAFEL &",
//     "transaction_id": 4
//   },
//   {
//     "amount": 18,
//     "categoryBroad": "Service",
//     "categoryDetailed": "Personal Care",
//     "createdAt": "2018-05-15",
//     "name": "PAYGATE_KIWDISK 4552788",
//     "transaction_id": 5
//   },
//   {
//     "amount": 25,
//     "categoryBroad": "Food and Drink",
//     "categoryDetailed": "Restaurants",
//     "createdAt": "2018-05-15",
//     "name": "Starbucks",
//     "transaction_id": 6
//   },
//   {
//     "amount": 8.5,
//     "categoryBroad": "Food and Drink",
//     "categoryDetailed": "Restaurants",
//     "createdAt": "2018-05-15",
//     "name": "TACOS MORELOS",
//     "transaction_id": 7
//   },
//   {
//     "amount": 1.1,
//     "categoryBroad": "Food and Drink",
//     "categoryDetailed": "",
//     "createdAt": "2018-05-15",
//     "name": "USA*IDEAL VENDING",
//     "transaction_id": 8
//   },
//   {
//     "amount": 8.01,
//     "categoryBroad": "Food and Drink",
//     "categoryDetailed": "Restaurants",
//     "createdAt": "2018-05-14",
//     "name": "KILLARNEY ROSE",
//     "transaction_id": 9
//   },
//   {
//     "amount": 3.27,
//     "categoryBroad": "Food and Drink",
//     "categoryDetailed": "Restaurants",
//     "createdAt": "2018-05-14",
//     "name": "OPEN KITCHEN 15 IN",
//     "transaction_id": 10
//   },
//   {
//     "amount": 4.9,
//     "categoryBroad": "Food and Drink",
//     "categoryDetailed": "Restaurants",
//     "createdAt": "2018-05-14",
//     "name": "OPEN KITCHEN 15 IN",
//     "transaction_id": 11
//   }]

const User = {userInfo, purchases}

export default User
