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
  occupation: 'Software Engineer ',
  password: 'fenway11',
  phone: 0,
  rePassword: 'fenway11',
  rent: 1601.0000000000002,
  savingsGoal: '500',
  transportation: 0
}

//right now password is being stored on user - should present only the hash

const purchases = purchaseData

const User = {userInfo, purchases}

export default User
