const purchaseData = [
  {
    amount: 13.07,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2018-05-16',
    name: 'LEONIDAS CHOCOLATES',
    transactionId: 'ow1DqbBdERHMyamZgEDaC1QMryymNgiBA0do5'
  },
  {
    amount: 26.25,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2018-05-16',
    name: 'MTA MVM VENDING MACHINES',
    transactionId: 'bkKE5A1YxJIzraYv7OxaSR6NAeeOQ1fqeaxgm'
  },
  {
    amount: 90.46,
    categoryBroad: 'Shops',
    categoryDetailed: 'Clothing and Accessories',
    createdAt: '2018-05-15',
    name: '260 SAMPLE SALE CHELSE',
    transactionId: 'qLwPK7j6QdC6gw3DKMPQS1xapD9KqJTJy3jnE'
  },
  {
    amount: 9.8,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-15',
    name: 'KING OF FALAFEL &',
    transactionId: '9o9R71Ky4jfoK8zjOkQrsXN0j0J3wXCdZ517E'
  },
  {
    amount: 18,
    categoryBroad: 'Service',
    categoryDetailed: 'Personal Care',
    createdAt: '2018-05-15',
    name: 'PAYGATE_KIWDISK 4552788',
    transactionId: 'ndDL1oRYMEIEVOPw5ML0sOZ0y5EbeEfAwaZEg'
  },
  {
    amount: 25,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-15',
    name: 'Starbucks',
    transactionId: 'p6d13g0wRQFwRPBZVM1QFVxO83dKLJFJMbdaZ'
  },
  {
    amount: 8.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-15',
    name: 'TACOS MORELOS',
    transactionId: 'X6MZDLBYyKFL03QEAJyVtdz0yOPD9PH4ZXgJ1'
  },
  {
    amount: 1.1,
    categoryBroad: 'Food and Drink',
    categoryDetailed: '',
    createdAt: '2018-05-15',
    name: 'USA*IDEAL VENDING',
    transactionId: 'p6d13g0wRQFwRPBZVM1LSVoKep8zM8tJ56oKb'
  },
  {
    amount: 8.01,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-14',
    name: 'KILLARNEY ROSE',
    transactionId: 'dvgQ70AY8ZUEBJn4YK8QUNr6a4oe0PCbJvQNO'
  },
  {
    amount: 3.27,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-14',
    name: 'OPEN KITCHEN 15 IN',
    transactionId: '9o9R71Ky4jfoK8zjOkQvUYKrVvjE5qud1bEnb'
  },
  {
    amount: 4.9,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-14',
    name: 'OPEN KITCHEN 15 IN',
    transactionId: 'VmAJdwyYB3iwMqpE8aBDF05dpV37xjUrVNgvR'
  },
  {
    amount: 690.79,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-05-14',
    name: 'Payment to Chase card ending in 8623 05/14',
    transactionId: 'zko09DvK13IK1pgAqM08t950X8vEpDTOy8nJe'
  },
  {
    amount: 42,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-05-14',
    name: 'TRADE FAIR #7',
    transactionId: 'mZg6L5aYOMf58V1brO63tdbDEpBKZrFMk6veP'
  },
  {
    amount: 13.25,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-13',
    name: 'HONG KONG RESTAURANT',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAAsNkrzw89gbCM1ngjv'
  },
  {
    amount: -690.79,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-05-13',
    name: 'Payment Thank You-Mobile',
    transactionId: 'rD7qA9xLnwtL4xy1gMqqIxKOqPMgadIBO07An'
  },
  {
    amount: 25,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-13',
    name: 'Starbucks',
    transactionId: '4OE94dj1AKUDONE94qjjUwebMNOkRVTkjOrEr'
  },
  {
    amount: 8,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-13',
    name: 'TACOS MORELOS',
    transactionId: 'aKbM8k1YaxIkX49oeBNNhwajPKDqAgTZqEVap'
  },
  {
    amount: 312.6,
    categoryBroad: 'Service',
    categoryDetailed: 'Telecommunication Services',
    createdAt: '2018-05-11',
    name: 'BILL PAYMENT',
    transactionId: '4OE94dj1AKUDONE94qjDTMKpxyKnPBHkzPD8v'
  },
  {
    amount: 8.44,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2018-05-10',
    name: "RUBY'S CANDY & GROCERY IN",
    transactionId: 'grAXR4gYobC4y5ZKpvo8UzvzXyyRmQHqLVEqw'
  },
  {
    amount: 1.1,
    categoryBroad: 'Food and Drink',
    categoryDetailed: '',
    createdAt: '2018-05-10',
    name: 'USA*IDEAL VENDING',
    transactionId: 'bkKE5A1YxJIzraYv7OxjIkOk0QQoLvCqwYaq1'
  },
  {
    amount: 1.1,
    categoryBroad: 'Food and Drink',
    categoryDetailed: '',
    createdAt: '2018-05-10',
    name: 'USA*IDEAL VENDING',
    transactionId: 'ow1DqbBdERHMyamZgED6hxmxRNN7XoCBZN0B6'
  },
  {
    amount: 12.79,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-09',
    name: 'ROTI MEDITERRANEAN GRILL',
    transactionId: '4OE94dj1AKUDONE94qjoi5jB8R46mAFkME5NM'
  },
  {
    amount: 29.06,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-05-08',
    name: 'FAMILY MARKET',
    transactionId: '6oBO86zq0AfwQNL1a3b3CP1qxMaXLLFavJ7Kw'
  },
  {
    amount: 21.78,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-08',
    name: 'KING OF FALAFEL & SHA',
    transactionId: 'LvmKZ509pQUjDgB07p6phVpRL8wNXXH0AMz7J'
  },
  {
    amount: 1.1,
    categoryBroad: 'Food and Drink',
    categoryDetailed: '',
    createdAt: '2018-05-08',
    name: 'USA*IDEAL VENDING',
    transactionId: 'w3jkZwoB6PHB6m0D8MkMsbraJKOQ99fL94AXL'
  },
  {
    amount: 725,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-05-07',
    name: 'Venmo',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAguwPZQ0796vCMk6Dbw'
  },
  {
    amount: 15.24,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-06',
    name: 'ROTI MEDITERRANEAN GRILL',
    transactionId: 'aKbM8k1YaxIkX49oeBN6fEJxkLRR7RfZwaeDq'
  },
  {
    amount: 13.63,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-06',
    name: 'TERRACE FISH & CHIPS',
    transactionId: 'rD7qA9xLnwtL4xy1gMqaT01zjnJJBJIBdA89q'
  },
  {
    amount: 4.12,
    categoryBroad: 'Shops',
    categoryDetailed: 'Pharmacies',
    createdAt: '2018-05-06',
    name: 'Walgreens',
    transactionId: '4OE94dj1AKUDONE94qj3h3rBgvAA4AFkMEQLx'
  },
  {
    amount: -0.01,
    categoryBroad: 'Interest',
    categoryDetailed: 'Interest Earned',
    createdAt: '2018-05-03',
    name: 'INTEREST PAYMENT',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJa6Y4jERIZv3Ddy'
  },
  {
    amount: 6,
    categoryBroad: 'Bank Fees',
    categoryDetailed: '',
    createdAt: '2018-05-03',
    name: 'MONTHLY SERVICE FEE',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7PrgyakDIROXNBy'
  },
  {
    amount: 68.79,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-02',
    name: 'ALIADA',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbDQeZa5BoCL6oYXm'
  },
  {
    amount: 6.22,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2018-05-02',
    name: 'Lyft',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqzLVeRJb6fr8aNXn'
  },
  {
    amount: 12.09,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-05-02',
    name: 'Potbelly Sandwich Shop',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VYbQJ7xMCMDyxYk'
  },
  {
    amount: 5,
    categoryBroad: 'Community',
    categoryDetailed: 'Organizations and Associations',
    createdAt: '2018-05-02',
    name: 'QueensJS',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJvQr1z9VbFb3jepm'
  },
  {
    amount: 26.9,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-05-01',
    name: 'FOOD BAZAAR',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1d54ogKOtOZ39Y8'
  },
  {
    amount: -2000,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-30',
    name:
      'BOOK TRANSFER CREDIT B/O: WOORI BANK CHUNG KU SEOUL KOREA REP. SOUTH 100 ORG:/010097743 PARK HYE SUK REF: TEL:6466591495/BNF/CHASE BANK 39-01 MAIN STREET, FLUSHING, NY. CHASE TRN: 8953100120GS',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9XDBKrqmFmNj3D6'
  },
  {
    amount: 15,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'Foreign Transaction',
    createdAt: '2018-04-30',
    name: 'INTERNATIONAL INCOMING WIRE FEE',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqp3XNBdynf6g0qJE'
  },
  {
    amount: 4.75,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2018-04-30',
    name: 'LA COLOMBE - PRINCE',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MQaOyj1dudJ1Eo3'
  },
  {
    amount: 7.25,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-04-30',
    name: 'POMMES FRITES',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6dQexN9rFRJran7'
  },
  {
    amount: 29.92,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-30',
    name: 'SEAMLSSMOKJAKOREANEAT',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0Mg4ojOdACQx3BjZ'
  },
  {
    amount: 7,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-29',
    name: 'JUSTINO`S PIZZERIA',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNyAq4vgat4w8mQg'
  },
  {
    amount: 11.97,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-29',
    name: 'LENWICH 10 HANOVER LLC',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnAeZO05wJCJ1jkr8'
  },
  {
    amount: 73.33,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-04-27',
    name: 'H MART',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8y1J4wYAtAn4e6z'
  },
  {
    amount: 10,
    categoryBroad: 'Community',
    categoryDetailed: 'Religious',
    createdAt: '2018-04-27',
    name: 'UNITY',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaP9ZQo3k4uEDjmRX'
  },
  {
    amount: 12.83,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-26',
    name: 'Subway',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZDz6xg0qtyQRDPO'
  },
  {
    amount: -294.6,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-04-24',
    name: 'Payment Thank You-Mobile',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXM756ajJntpkaB7B'
  },
  {
    amount: 294.6,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-04-24',
    name: 'Payment to Chase card ending in 8623 04/24',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPqQxeLypRFRwB7dy'
  },
  {
    amount: 5.54,
    categoryBroad: 'Shops',
    categoryDetailed: 'Pharmacies',
    createdAt: '2018-04-22',
    name: 'Duane Reade',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKaJw84bpIMeV3y1'
  },
  {
    amount: 44.6,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-22',
    name: 'KONDO RESTAURANT',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVN01XvybqFdDKbzN'
  },
  {
    amount: 29.94,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-22',
    name: 'OBAO',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9OND7ELqgI8a3K1A'
  },
  {
    amount: 9.45,
    categoryBroad: 'Shops',
    categoryDetailed: 'Pharmacies',
    createdAt: '2018-04-22',
    name: 'Rite Aid',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpMBzvVZojCrwLNDy'
  },
  {
    amount: 9.8,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-19',
    name: 'KING OF FALAFEL & SHA',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4LbrdEPqCqLD19e'
  },
  {
    amount: 6.39,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-19',
    name: 'OPEN KITCHEN 15 IN',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdXPwmrOYCQjqmrg'
  },
  {
    amount: 10,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-04-19',
    name: 'Venmo',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5YdV07BmsQY7R5g'
  },
  {
    amount: 28.04,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-04-18',
    name: 'FAMILY MARKET',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe18YZrB3qFqwm7vj'
  },
  {
    amount: 121,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2018-04-18',
    name: 'Metropolitan Transportation Authority',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp57XLZV3MCMrvzgL'
  },
  {
    amount: -669.8,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-04-18',
    name: 'Payment Thank You-Mobile',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJaBbDxVqZFB9Kkzm'
  },
  {
    amount: 669.8,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-04-18',
    name: 'Payment to Chase card ending in 8623 04/18',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4LJgjYmA7f9qkYaX'
  },
  {
    amount: 12,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-04-18',
    name: 'Venmo',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPKXB0qYdrFaoLxke'
  },
  {
    amount: 38,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-04-18',
    name: 'Venmo',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKvxLmbyOfO1xN7B'
  },
  {
    amount: 39.84,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-17',
    name: 'SEAMLSSPELICANACHICKE',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwgxk7ND9KFRJx67J'
  },
  {
    amount: 70.36,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2018-04-16',
    name: 'A TIME FOR WINE TROPICANA',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpazZBrA7tbopw56'
  },
  {
    amount: 62.65,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-16',
    name: "DOCK'S OYSTER HOUSE",
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaA017ZKNtyQ9azj'
  },
  {
    amount: 32.67,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-16',
    name: "P.F. Chang's China Bistro",
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp57XLZV3MCMrvzgv'
  },
  {
    amount: 70,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-04-16',
    name: 'Venmo',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svz8Oajg6JtJZvVod'
  },
  {
    amount: 300.99,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-04-16',
    name: 'Venmo',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEq63xpvjAFmQ3erV'
  },
  {
    amount: 50.65,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-16',
    name: 'YAKITORI TOTTO',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6moRLZr7tZYeXVp'
  },
  {
    amount: 2.5,
    categoryBroad: 'Travel',
    categoryDetailed: 'Charter Buses',
    createdAt: '2018-04-15',
    name: 'GREYHOUND F/S #2007',
    transactionId: '4OE94dj1AKUDONE94qjRs6p8PAvq74CkNQbrr'
  },
  {
    amount: -130.43,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2018-04-13',
    name: 'MEALPAL',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm7QeJnkLBIBE8m7n'
  },
  {
    amount: 13.07,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-11',
    name: 'OBAO',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqzLVeRJb6fr8aNXo'
  },
  {
    amount: 25,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-11',
    name: 'Starbucks',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7PrgyakDIROXNBw'
  },
  {
    amount: 20,
    categoryBroad: 'Service',
    categoryDetailed: 'Personal Care',
    createdAt: '2018-04-10',
    name: 'PAYGATE_KIWDISK 4552788',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9XDBKrqmFmNj3Dg'
  },
  {
    amount: 21.51,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-09',
    name: 'DISTRICT MOT.',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPqQxeLypRFRwB7dp'
  },
  {
    amount: 13.66,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-04-09',
    name: 'FAMILY MARKET',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqp3XNBdynf6g0qJB'
  },
  {
    amount: 45.1,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-09',
    name: 'KONDO RESTAURANT',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5YdV07BmsQY7R51'
  },
  {
    amount: 2.5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'ATM',
    createdAt: '2018-04-09',
    name: 'NON-CHASE ATM FEE-WITH',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJa6Y4jERIZv3DpD'
  },
  {
    amount: 51.75,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2018-04-09',
    name: 'NON-CHASE ATM WITHDRAW 079564 04/082523 BROA',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7Z8JbDAgXumB8pQX'
  },
  {
    amount: 33.81,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-09',
    name: 'SEAMLSSPELICANACHICKE',
    transactionId: 'ow1DqbBdERHMyamZgED7fygODPEVbBFBZPjMb'
  },
  {
    amount: 9.42,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-08',
    name: 'Chipotle Mexican Grill',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwgxk7ND9KFRJx6Eb'
  },
  {
    amount: 98,
    categoryBroad: 'Travel',
    categoryDetailed: 'Charter Buses',
    createdAt: '2018-04-08',
    name: 'GREYHOUND LINES CNP',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaA017ZKNtyQ9azy'
  },
  {
    amount: 12.4,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-08',
    name: "McDonald's",
    transactionId: '5oEVxw5PvkfxK95D1B6bFJaBbDxVqZFB9KkRN'
  },
  {
    amount: 9.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-06',
    name: 'JUSTINO`S PIZZERIA',
    transactionId: 'ow1DqbBdERHMyamZgED7fygODPEVbBFBZPj53'
  },
  {
    amount: 7.8,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2018-04-05',
    name: 'TAXI SVC LONG ISALND C',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpazZBrA7tbopw59'
  },
  {
    amount: 40,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2018-04-04',
    name: 'ATM WITHDRAWAL 003555 04/0445 WALL S',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kPEzYL9DSKZBpJy'
  },
  {
    amount: -0.01,
    categoryBroad: 'Interest',
    categoryDetailed: 'Interest Earned',
    createdAt: '2018-04-04',
    name: 'INTEREST PAYMENT',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKNr6RD3BF0K4e7n'
  },
  {
    amount: 5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: '',
    createdAt: '2018-04-04',
    name: 'MONTHLY SERVICE FEE',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPKXB0qYdrFaoLxKn'
  },
  {
    amount: 6,
    categoryBroad: 'Bank Fees',
    categoryDetailed: '',
    createdAt: '2018-04-04',
    name: 'MONTHLY SERVICE FEE',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKNr6RD3BF0K4eDw'
  },
  {
    amount: 24.69,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-04-03',
    name: 'LAN LARB',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyVmL'
  },
  {
    amount: 8.84,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2018-04-03',
    name: 'Lyft',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jvAZ'
  },
  {
    amount: 130.43,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2018-04-03',
    name: 'MEALPAL',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gz7'
  },
  {
    amount: 9.3,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2018-04-03',
    name: 'TAXI SVC 41-25 36TH ST',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jd8w'
  },
  {
    amount: 15.66,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Arts and Entertainment',
    createdAt: '2018-04-02',
    name: 'UA KAUFMAN ASTORIA 14',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30nA'
  },
  {
    amount: 725,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-04-02',
    name: 'Venmo',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rjp'
  },
  {
    amount: 36,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Arts and Entertainment',
    createdAt: '2018-04-01',
    name: 'Regal Cinemas',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8oO5'
  },
  {
    amount: 5.54,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-04-01',
    name: 'TRADE FAIR #7',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wLq'
  },
  {
    amount: 25.02,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-04-01',
    name: 'TRADE FAIR #7',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZpw'
  },
  {
    amount: 40,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2018-03-30',
    name: 'ATM WITHDRAWAL 003609 03/3055 WATER',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQRO9e'
  },
  {
    amount: 25.49,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-03-30',
    name: 'FAMILY MARKET',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jv75'
  },
  {
    amount: -653.23,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-03-30',
    name: 'Payment Thank You-Mobile',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rMk'
  },
  {
    amount: 653.23,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-03-30',
    name: 'Payment to Chase card ending in 8623 03/30',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjN99'
  },
  {
    amount: 149.55,
    categoryBroad: 'Service',
    categoryDetailed: 'Telecommunication Services',
    createdAt: '2018-03-29',
    name: 'TEXT2PAY',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNwq'
  },
  {
    amount: 8.7,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-28',
    name: 'CAFE ARTE 2',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQROK7'
  },
  {
    amount: 9.8,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-28',
    name: 'KING OF FALAFEL & SHA',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMQJgPoD0IpkagZD'
  },
  {
    amount: 26.01,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-03-27',
    name: 'FAMILY MARKET',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3wZr'
  },
  {
    amount: 6.48,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2018-03-27',
    name: 'PINKBERRY 15049',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8Bo'
  },
  {
    amount: 25,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-27',
    name: 'Starbucks',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRzR'
  },
  {
    amount: 40,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2018-03-26',
    name: 'ATM WITHDRAWAL 001230 03/2655 WATER',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV80d'
  },
  {
    amount: 12.92,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2018-03-26',
    name: 'Lyft',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMQJgPoD0Ipkagdp'
  },
  {
    amount: 52.64,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-26',
    name: 'YAKITORI TOTTO',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAPb'
  },
  {
    amount: 15.78,
    categoryBroad: 'Shops',
    categoryDetailed: 'Pharmacies',
    createdAt: '2018-03-25',
    name: 'CVS',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDgMp'
  },
  {
    amount: 5.17,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2018-03-25',
    name: 'GONG CHA CHINATOWN',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30nm'
  },
  {
    amount: 16.2,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-25',
    name: "McDonald's",
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqy4P'
  },
  {
    amount: 12.03,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-23',
    name: 'Potbelly Sandwich Shop',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZp4'
  },
  {
    amount: 39.03,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-23',
    name: 'SEAMLSSENTHAICETHAIKI',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wLv'
  },
  {
    amount: 42.95,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-22',
    name: 'BONCHON ASTORIA',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8oOA'
  },
  {
    amount: 13.9,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2018-03-21',
    name: 'Lyft',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3wpM'
  },
  {
    amount: 3.54,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-21',
    name: 'Starbucks',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rML'
  },
  {
    amount: 4.84,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-21',
    name: 'Starbucks',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jv7B'
  },
  {
    amount: 500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-03-21',
    name: 'Venmo',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRnd'
  },
  {
    amount: 14.4,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-03-19',
    name: 'FAMILY MARKET',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNwo'
  },
  {
    amount: 1.06,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2018-03-19',
    name: 'Lyft',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqy8b'
  },
  {
    amount: 18.16,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2018-03-19',
    name: 'Lyft',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKA63'
  },
  {
    amount: 2.5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'ATM',
    createdAt: '2018-03-19',
    name: 'NON-CHASE ATM FEE-WITH',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1L3mD6v7CqwmpPy'
  },
  {
    amount: 51.75,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2018-03-19',
    name: 'NON-CHASE ATM WITHDRAW 452611 03/192523 BROA',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDg6d'
  },
  {
    amount: 7.61,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-18',
    name: 'COTTON GOURMET INC.',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQROKQ'
  },
  {
    amount: 61.17,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-18',
    name: 'HAEIN SUSHI AND SASHIMI',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMQJgPoD0IpkagJP'
  },
  {
    amount: 23.22,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-03-14',
    name: 'TRADE FAIR #7',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV85D'
  },
  {
    amount: 25.04,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-13',
    name: 'KING OF FALAFEL & SHA',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAkR'
  },
  {
    amount: 121,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2018-03-13',
    name: 'Metropolitan Transportation Authority',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3wV3'
  },
  {
    amount: 30.22,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-13',
    name: 'SEAMLSSDISTRICTSAIGON',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRXD'
  },
  {
    amount: -5000,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-12',
    name:
      'BOOK TRANSFER CREDIT B/O: WOORI BANK CHUNG KU SEOUL KOREA REP. SOUTH 100 ORG:/010097743 PARK HYE SUK REF: TEL:646591495/BNF/CHASE BANK 39-01 MAIN STREET, FLUSHING, NY. CHASE TRN: 5906700071HG',
    transactionId: 'ow1DqbBdERHMyamZgED7fygXbZkQoeuBZP8r7'
  },
  {
    amount: 15,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'Foreign Transaction',
    createdAt: '2018-03-12',
    name: 'INTERNATIONAL INCOMING WIRE FEE',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5o3RJqvQCMrvemX'
  },
  {
    amount: -1000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2018-03-12',
    name: 'Online Transfer from CHK ...6254 transaction#: 6975337282',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4LXAdnzbVf9qkAQP'
  },
  {
    amount: -166,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2018-03-12',
    name: 'Online Transfer from SAV ...1371 transaction#: 6973370665',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJa5qd8LPmCB9KqNg'
  },
  {
    amount: 166,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2018-03-12',
    name: 'Online Transfer to CHK ...6254 transaction#: 6973370665 03/12',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svzp65krPefJZvbPe'
  },
  {
    amount: 1000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2018-03-12',
    name: 'Online Transfer to SAV ...1371 transaction#: 6975337282 03/12',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpYAE6n9VUbopY0D'
  },
  {
    amount: -304.86,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-03-12',
    name: 'Payment Thank You-Mobile',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1L3mD6v7Cqwmpgo'
  },
  {
    amount: -81.44,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-03-12',
    name: 'Payment Thank You-Mobile',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDg34'
  },
  {
    amount: 81.44,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-03-12',
    name: 'Payment to Chase card ending in 8623 03/12',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg895naA4HRJx085'
  },
  {
    amount: 304.86,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-03-12',
    name: 'Payment to Chase card ending in 8623 03/12',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXanKMJVDYIyQ9dYE'
  },
  {
    amount: 34.29,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-12',
    name: 'TAKE 31',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqyDA'
  },
  {
    amount: 7.61,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-03-11',
    name: 'H MART',
    transactionId: 'ow1DqbBdERHMyamZgED7fygXbZkQoeuBZP8oO'
  },
  {
    amount: 21,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2018-03-11',
    name: 'NYCTAXI2L65',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJa5qd8LPmCB9Kq6d'
  },
  {
    amount: 6.48,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-09',
    name: 'COTTON GOURMET INC.',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpYAE6n9VUbopYX7'
  },
  {
    amount: 95,
    categoryBroad: 'Shops',
    categoryDetailed: 'Department Stores',
    createdAt: '2018-03-09',
    name: 'MACYS HERALD SQUARE',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXanKMJVDYIyQ9dJJ'
  },
  {
    amount: 5.43,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-09',
    name: 'Panera Bread',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg895naA4HRJx0Vz'
  },
  {
    amount: -200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2018-03-08',
    name: 'Online Transfer from SAV ...1371 transaction#: 6965778565',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6brVvBM8UZYe8KM'
  },
  {
    amount: 200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2018-03-08',
    name: 'Online Transfer to CHK ...6254 transaction#: 6965778565 03/08',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEq5jeR8X9UmQ3ZDn'
  },
  {
    amount: -81.44,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-03-07',
    name: 'Payment Thank You-Mobile',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5o3RJqvQCMrveJm'
  },
  {
    amount: 81.44,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-03-07',
    name: 'Payment to Chase card ending in 8623 03/07',
    transactionId: '4OE94dj1AKUDONE94qjRs6p570oE1mFkNQXD3'
  },
  {
    amount: 200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2018-03-06',
    name: 'ATM WITHDRAWAL 003148 03/063 TIMES S',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm73L4pZD5cBE8vrP'
  },
  {
    amount: 30.39,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2018-03-06',
    name: 'DELIVERY.COM',
    transactionId: '4OE94dj1AKUDONE94qjRs6p570oE1mFkNQXJk'
  },
  {
    amount: 11.07,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-03-06',
    name: 'FAMILY MARKET',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6brVvBM8UZYe897'
  },
  {
    amount: 27.52,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-03-06',
    name: 'TRADE FAIR #7',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm73L4pZD5cBE8vaZ'
  },
  {
    amount: 6,
    categoryBroad: 'Bank Fees',
    categoryDetailed: '',
    createdAt: '2018-03-05',
    name: 'MONTHLY SERVICE FEE',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9JqEwoY7HmNjQpR'
  },
  {
    amount: 160.24,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-03-05',
    name: 'Payment to Chase card ending in 8623 03/05',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz1b3XaKnSr8ab9N'
  },
  {
    amount: 36,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-03-05',
    name: 'TAKE 31',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7JkOoR8NUROXL1V'
  },
  {
    amount: 70,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-03-05',
    name: 'Venmo',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7JkOoR8NUROXLvL'
  },
  {
    amount: 130.43,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2018-03-04',
    name: 'MEALPAL',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz1b3XaKnSr8abVk'
  },
  {
    amount: -160.24,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-03-04',
    name: 'Payment Thank You-Mobile',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9JqEwoY7HmNjQkA'
  },
  {
    amount: 15.37,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2018-03-04',
    name: 'UBER *TRIP 4MY3U',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpOyKV8YMS6g07bm'
  },
  {
    amount: 2.5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'ATM',
    createdAt: '2018-03-01',
    name: 'NON-CHASE ATM FEE-WITH',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPq5pr1o67HRwBqb8'
  },
  {
    amount: 102,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2018-03-01',
    name: 'NON-CHASE ATM WITHDRAW 271581 03/0191 FIRST',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpOyKV8YMS6g07wp'
  },
  {
    amount: 3107,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2018-02-28',
    name: 'CHECK # 5040',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5aBpow8ZcQY7pyj'
  },
  {
    amount: 15.24,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-28',
    name: 'KING OF FALAFEL & SHA',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPq5pr1o67HRwBq3L'
  },
  {
    amount: 145,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-27',
    name: 'MURPHYS PUB',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5aBpow8ZcQY7p1x'
  },
  {
    amount: -322.15,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-02-27',
    name: 'Payment Thank You-Mobile',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKXyo0PJnSO1x43d'
  },
  {
    amount: 322.15,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-02-27',
    name: 'Payment to Chase card ending in 8623 02/27',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKXyo0PJnSO1x4Rq'
  },
  {
    amount: -300,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2018-02-26',
    name: 'ATM CASH DEPOSIT 02/25 3818 BROADWAY',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kb9mK43wsKZB9P3'
  },
  {
    amount: 15,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Wire',
    createdAt: '2018-02-26',
    name: 'DOMESTIC INCOMING WIRE FEE',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svzp65krPefJZvb1O'
  },
  {
    amount: -1000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Wire',
    createdAt: '2018-02-26',
    name:
      'FEDWIRE CREDIT VIA: WOORI BANK, NEW YORK/026005416 B/O: PARK HYE SUK SINDAEBANG-DONG DONGJAK-GU REF: CHASE NYC/CTR/BNF=JOSHUA SHIN PARK ASTORIA, NY 111063320/AC-0000000094 07 RFB=O/B WOORI BANK N OBI=/ROC/FD T8218000672 TEL:6466591495 IMAD: 0226QMGFT005002168 TRN: 6734509057FF',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4LXAdnzbVf9qkAv6'
  },
  {
    amount: 17.2,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-25',
    name: '251 GINZA SUSHI HUANG I',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svzp65krPefJZvbB6'
  },
  {
    amount: 48.48,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Arts and Entertainment',
    createdAt: '2018-02-25',
    name: '9640 AMC ONLINE',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEq5jeR8X9UmQ3Z1N'
  },
  {
    amount: 23.4,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-25',
    name: 'DONG CHUN HONG',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kb9mK43wsKZB97j'
  },
  {
    amount: 33.39,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-25',
    name: 'DONG CHUN HONG',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4LXAdnzbVf9qkAdV'
  },
  {
    amount: 149.55,
    categoryBroad: 'Service',
    categoryDetailed: 'Telecommunication Services',
    createdAt: '2018-02-23',
    name: 'BILL PAYMENT',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKb3pxAzXH0K4pmq'
  },
  {
    amount: 12.03,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-23',
    name: 'Potbelly Sandwich Shop',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJrEwoxqzcZv38Vr'
  },
  {
    amount: 19.6,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-23',
    name: 'WOORI JIP',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7ZBg4Ypn1CmB8XjN'
  },
  {
    amount: 18.5,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-02-22',
    name: "D'AGOSTINO STORE #",
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK9d1p35LHaoL3yP'
  },
  {
    amount: -270.02,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-02-22',
    name: 'Payment Thank You-Mobile',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oaya'
  },
  {
    amount: 270.02,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-02-22',
    name: 'Payment to Chase card ending in 8623 02/22',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7ZBg4Ypn1CmB8XYB'
  },
  {
    amount: -499.75,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-02-22',
    name: 'Venmo',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEq5jeR8X9UmQ3ZO5'
  },
  {
    amount: 27.22,
    categoryBroad: 'Service',
    categoryDetailed: 'Telecommunication Services',
    createdAt: '2018-02-21',
    name: 'CELL NATION',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gdm'
  },
  {
    amount: 31.15,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-21',
    name: 'KONDO RESTAURANT',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jdye'
  },
  {
    amount: 25,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-21',
    name: 'Starbucks',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyV3O'
  },
  {
    amount: 20,
    categoryBroad: 'Service',
    categoryDetailed: 'Personal Care',
    createdAt: '2018-02-20',
    name: 'PAYGATE_KIWDISK 4552788',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8ozO'
  },
  {
    amount: 17.42,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-20',
    name: 'SEAMLSSOLIVERS',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8o0A'
  },
  {
    amount: 14.19,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-02-20',
    name: 'TRADE FAIR #7',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wkv'
  },
  {
    amount: 20.67,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-02-20',
    name: 'TRADE FAIR #7',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZx4'
  },
  {
    amount: 9.41,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-18',
    name: 'OPEN KITCHEN 15 IN',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jvZB'
  },
  {
    amount: 16.77,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-18',
    name: 'Potbelly Sandwich Shop',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4r0L'
  },
  {
    amount: 6.75,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2018-02-16',
    name: "RUBY'S CANDY & GROCERY IN",
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNzo'
  },
  {
    amount: 2,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-02-16',
    name: 'Venmo',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJrEwoxqzcZv38wA'
  },
  {
    amount: 1818,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-02-16',
    name: 'Venmo',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKb3pxAzXH0K4pZN'
  },
  {
    amount: 6.12,
    categoryBroad: 'Shops',
    categoryDetailed: 'Pharmacies',
    createdAt: '2018-02-13',
    name: 'Duane Reade',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMQJgPoD0IpkagnP'
  },
  {
    amount: -290.88,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-02-13',
    name: 'Payment Thank You-Mobile',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8pD'
  },
  {
    amount: 290.88,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-02-13',
    name: 'Payment to Chase card ending in 8623 02/13',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK9d1p35LHaoL3wL'
  },
  {
    amount: 6.53,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-13',
    name: 'Subway',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQRO4Q'
  },
  {
    amount: 51.25,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-12',
    name: 'BBQ CHICKEN',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3wg3'
  },
  {
    amount: 8.26,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-12',
    name: 'KILLARNEY ROSE',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRjD'
  },
  {
    amount: 9.28,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-02-12',
    name: 'TRADE FAIR #7',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAxR'
  },
  {
    amount: 17.8,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-02-11',
    name: 'FAMILY MARKET',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqy5A'
  },
  {
    amount: 15.79,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-02-11',
    name: 'FRITESNMEATS GROUP LL',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJa5qd8LPmCB9Kq4d'
  },
  {
    amount: 121,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2018-02-11',
    name: 'Metropolitan Transportation Authority',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1L3mD6v7CqwmpDo'
  },
  {
    amount: 8.3,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2018-02-11',
    name: 'NYCTAXI4K27',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDgK4'
  },
  {
    amount: 21.3,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2018-02-11',
    name: 'NYCTAXI4K27',
    transactionId: 'ow1DqbBdERHMyamZgED7fygXbZkQoeuBZP8bO'
  },
  {
    amount: 4.26,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-11',
    name: 'PIE BY THE POUND',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXanKMJVDYIyQ9dvJ'
  },
  {
    amount: 5.75,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-11',
    name: 'THINK COFFEE 4TH',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg895naA4HRJx0kz'
  },
  {
    amount: 7.49,
    categoryBroad: 'Shops',
    categoryDetailed: 'Pharmacies',
    createdAt: '2018-02-09',
    name: 'Duane Reade',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5o3RJqvQCMrveKm'
  },
  {
    amount: 8.76,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2018-02-09',
    name: 'TAXI SVC PARLIN',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpYAE6n9VUbopY77'
  },
  {
    amount: 54,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-08',
    name: 'GYU-KAKU RESTAURANT',
    transactionId: '4OE94dj1AKUDONE94qjRs6p570oE1mFkNQXnk'
  },
  {
    amount: 5.44,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-08',
    name: 'OPEN KITCHEN 15 IN',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6brVvBM8UZYe817'
  },
  {
    amount: 20.99,
    categoryBroad: 'Shops',
    categoryDetailed: '',
    createdAt: '2018-02-07',
    name: 'Amazon',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm73L4pZD5cBE8vwZ'
  },
  {
    amount: -282.46,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-02-07',
    name: 'Payment Thank You-Mobile',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7JkOoR8NUROXLjV'
  },
  {
    amount: 282.46,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-02-07',
    name: 'Payment to Chase card ending in 8623 02/07',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oaKX'
  },
  {
    amount: 37.99,
    categoryBroad: 'Shops',
    categoryDetailed: 'Convenience Stores',
    createdAt: '2018-02-06',
    name: 'GREENBAY ESSENTIALS',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz1b3XaKnSr8abvk'
  },
  {
    amount: 26.86,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-06',
    name: 'SHUYA CAFE DE RAMEN.',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9JqEwoY7HmNjQ0A'
  },
  {
    amount: 11.98,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-05',
    name: 'ASTORIA BIER AND CHEESE',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPq5pr1o67HRwBqvL'
  },
  {
    amount: 20.57,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-05',
    name: 'ASTORIA BIER AND CHEESE',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpOyKV8YMS6g07nm'
  },
  {
    amount: 15.23,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-04',
    name: "PETEY'S BURGER",
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5aBpow8ZcQY7pmx'
  },
  {
    amount: 78.26,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2018-02-02',
    name: 'MEALPAL',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kb9mK43wsKZB9Aj'
  },
  {
    amount: 15.79,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-02',
    name: 'UNDERGROUND PIZZA',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKXyo0PJnSO1x4gd'
  },
  {
    amount: 40,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2018-02-01',
    name: 'ATM WITHDRAWAL 004785 02/0155 WATER',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gvJ'
  },
  {
    amount: 75.78,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-02-01',
    name: 'JEAN GEORGES',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4LXAdnzbVf9qkA7V'
  },
  {
    amount: 7.28,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2018-02-01',
    name: 'Lyft',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jdKV'
  },
  {
    amount: -412.37,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-02-01',
    name: 'Payment Thank You-Mobile',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svzp65krPefJZvbE6'
  },
  {
    amount: 412.37,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-02-01',
    name: 'Payment to Chase card ending in 8623 02/01',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyVBZ'
  },
  {
    amount: 11.31,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-31',
    name: 'Burger King',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEq5jeR8X9UmQ3ZAN'
  },
  {
    amount: 5,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-01-31',
    name: 'Venmo',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30JY'
  },
  {
    amount: 154.84,
    categoryBroad: 'Service',
    categoryDetailed: 'Telecommunication Services',
    createdAt: '2018-01-30',
    name: 'BILL PAYMENT',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7ZBg4Ypn1CmB8XgN'
  },
  {
    amount: 25,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-30',
    name: 'Starbucks',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKb3pxAzXH0K4pBq'
  },
  {
    amount: 11.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-30',
    name: 'TST* DOS TOROS - MAIDEN L',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK9d1p35LHaoL3NP'
  },
  {
    amount: 22,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-30',
    name: 'VITE VINOSTERIA',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJrEwoxqzcZv38Rr'
  },
  {
    amount: 12.88,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-01-28',
    name: 'FAMILY MARKET',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oava'
  },
  {
    amount: 3.92,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2018-01-28',
    name: 'INSOMNIA COOKIES - 3RD',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jdQe'
  },
  {
    amount: 3.99,
    categoryBroad: 'Shops',
    categoryDetailed: 'Pharmacies',
    createdAt: '2018-01-28',
    name: 'Rite Aid',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyVvO'
  },
  {
    amount: 24.54,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-01-28',
    name: 'TRADE FAIR #7',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gnm'
  },
  {
    amount: 43.02,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-28',
    name: 'TST* OKA -',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30qm'
  },
  {
    amount: 9.42,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-26',
    name: 'Chipotle Mexican Grill',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wbv'
  },
  {
    amount: 60,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2018-01-26',
    name: 'Venmo',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wna'
  },
  {
    amount: 52.55,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-25',
    name: 'BAEKJEONG',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8oaA'
  },
  {
    amount: 14,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-25',
    name: 'Dig Inn Broad Street',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZL4'
  },
  {
    amount: 40,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2018-01-24',
    name: 'ATM WITHDRAWAL 007429 01/2455 WATER',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZob'
  },
  {
    amount: 23.4,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-23',
    name: 'DONG CHUN HONG',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jv4B'
  },
  {
    amount: 7.34,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2018-01-23',
    name: 'Lyft',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8odO'
  },
  {
    amount: -1894.22,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-01-23',
    name: 'Payment Thank You-Mobile',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rpL'
  },
  {
    amount: 1894.22,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-01-23',
    name: 'Payment to Chase card ending in 8623 01/23',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jv3Z'
  },
  {
    amount: 1630.95,
    categoryBroad: 'Shops',
    categoryDetailed: 'Computers and Electronics',
    createdAt: '2018-01-22',
    name: 'Apple Store',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQROqQ'
  },
  {
    amount: 44.11,
    categoryBroad: 'Shops',
    categoryDetailed: 'Bookstores',
    createdAt: '2018-01-22',
    name: 'GAM MEE OK',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV80D'
  },
  {
    amount: 4.36,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-22',
    name: 'IDEA COFFEE',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3wp3'
  },
  {
    amount: 36,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-22',
    name: 'KILLARNEY ROSE',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjN4o'
  },
  {
    amount: 71.51,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-22',
    name: 'MERMAID OYSTER BAR',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMQJgPoD0IpkagdP'
  },
  {
    amount: 7.99,
    categoryBroad: 'Shops',
    categoryDetailed: 'Pharmacies',
    createdAt: '2018-01-21',
    name: 'CVS',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqy8A'
  },
  {
    amount: 19.49,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2018-01-21',
    name: 'Hale and Hearty Soups',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRnD'
  },
  {
    amount: 13.05,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-21',
    name: "PETEY'S BURGER",
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKA6R'
  },
  {
    amount: 20.83,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2018-01-19',
    name: 'CITY ACRES MARKET',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30zY'
  },
  {
    amount: 17.91,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-19',
    name: 'TASTE OF TOKYO INC',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDg64'
  },
  {
    amount: 12.52,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-18',
    name: 'UNDERGROUND PIZZA',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1w4a'
  },
  {
    amount: -316.71,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2018-01-17',
    name: 'Payment Thank You-Mobile',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30wm'
  },
  {
    amount: 316.71,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-01-17',
    name: 'Payment to Chase card ending in 8623 01/17',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rBp'
  },
  {
    amount: 15.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2018-01-16',
    name: 'TST* DOS TOROS - MAIDEN L',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZyb'
  },
  {
    amount: 431.08,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2018-01-12',
    name: 'Payment to Chase card ending in 8623 01/12',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNO9'
  },
  {
    amount: -635.52,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2018-01-11',
    name: 'ATM CHECK DEPOSIT 01/11 28 LIBERTY ST',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQROee'
  },
  {
    amount: 15610,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2018-01-11',
    name: 'CHECK # 5039',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8Xd'
  },
  {
    amount: -2000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2018-01-11',
    name: 'DEPOSIT ID NUMBER 145211',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMQJgPoD0IpkagQp'
  },
  {
    amount: 2.5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'ATM',
    createdAt: '2018-01-09',
    name: 'NON-CHASE ATM FEE-WITH',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLR4d'
  },
  {
    amount: 51.75,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2018-01-09',
    name: 'NON-CHASE ATM WITHDRAW 946293 01/092523 BROA',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3wxM'
  },
  {
    amount: 2,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2018-01-08',
    name: 'COUNTER CHECK',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDg8d'
  },
  {
    amount: 21.28,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2018-01-08',
    name: 'Lyft',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqy0b'
  },
  {
    amount: 33.61,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2018-01-08',
    name: 'Lyft',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAg3'
  },
  {
    amount: 10.37,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2018-01-04',
    name: 'Lyft',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1L3mD6v7CqwmpJy'
  },
  {
    amount: 10.5,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2018-01-04',
    name: 'Lyft',
    transactionId: 'ow1DqbBdERHMyamZgED7fygXbZkQoeuBZP847'
  },
  {
    amount: 100,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2018-01-02',
    name: 'ATM WITHDRAWAL 003412 12/313536 154T',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg895naA4HRJx0b5'
  },
  {
    amount: 9.84,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2018-01-02',
    name: 'Lyft',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJa5qd8LPmCB9Kqwg'
  },
  {
    amount: -10000,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-12-29',
    name:
      'BOOK TRANSFER CREDIT B/O: WOORI BANK CHUNG KU SEOUL KOREA REP. SOUTH 100 ORG:/010097743 PARK HYE SUK REF: TEL:6466591495/BNF/CHASE BANK 39-01 MAIN STREET, FLUSHING, NY. CHASE TRN: 7697000363JS',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpYAE6n9VUbopYmD'
  },
  {
    amount: -10000,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-12-29',
    name:
      'BOOK TRANSFER CREDIT B/O: WOORI BANK CHUNG KU SEOUL KOREA REP. SOUTH 100 ORG:/010097743 PARK HYE SUK REF: TEL:6466591495/BNF/CHASE BANK 39-01 MAIN STREET, FLUSHING, NY. CHASE TRN: 7697100363JS',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXanKMJVDYIyQ9dxE'
  },
  {
    amount: 15,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'Foreign Transaction',
    createdAt: '2017-12-29',
    name: 'INTERNATIONAL INCOMING WIRE FEE',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6brVvBM8UZYe87M'
  },
  {
    amount: 15,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'Foreign Transaction',
    createdAt: '2017-12-29',
    name: 'INTERNATIONAL INCOMING WIRE FEE',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5o3RJqvQCMrveOX'
  },
  {
    amount: 584.41,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-12-26',
    name: 'Payment to Chase card ending in 8623 12/26',
    transactionId: '4OE94dj1AKUDONE94qjRs6p570oE1mFkNQXR3'
  },
  {
    amount: 584.41,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-12-26',
    name: 'Payment to Chase card ending in 8623 12/26',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7JkOoR8NUROXLeL'
  },
  {
    amount: 56,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-12-26',
    name: 'Venmo',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm73L4pZD5cBE8vVP'
  },
  {
    amount: 182.59,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-12-21',
    name: 'Payment to Chase card ending in 8623 12/21',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz1b3XaKnSr8abAN'
  },
  {
    amount: 280.18,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-12-19',
    name: 'Payment to Chase card ending in 8623 12/19',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9JqEwoY7HmNjQVR'
  },
  {
    amount: 2.5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'ATM',
    createdAt: '2017-12-18',
    name: 'NON-CHASE ATM FEE-WITH',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5aBpow8ZcQY7pEj'
  },
  {
    amount: 22,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2017-12-18',
    name: 'NON-CHASE ATM WITHDRAW 456209 12/182544 BROA',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPq5pr1o67HRwBqo8'
  },
  {
    amount: 49,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-12-18',
    name: 'Venmo',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpOyKV8YMS6g07Mp'
  },
  {
    amount: 151.18,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-12-15',
    name: 'Payment to Chase card ending in 8623 12/15',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKXyo0PJnSO1x4pq'
  },
  {
    amount: -2000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-12-11',
    name: 'DEPOSIT ID NUMBER 288873',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kb9mK43wsKZB9o3'
  },
  {
    amount: 43.02,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-12-11',
    name: 'DISTRICT MOT. ASTORIA NY 12/09',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svzp65krPefJZvbDO'
  },
  {
    amount: 100,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Golf',
    createdAt: '2017-12-11',
    name: 'DWIT GOL MOK FLUSHING NY 12/08',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4LXAdnzbVf9qkA36'
  },
  {
    amount: 48.37,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-12-11',
    name: 'H MART NEW YORK NY 12/11',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKb3pxAzXH0K4p0N'
  },
  {
    amount: 61.72,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-12-11',
    name: 'IZAKAYA NOMAD NEW YORK NY 12/09',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7ZBg4Ypn1CmB8XnB'
  },
  {
    amount: 38.01,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-12-11',
    name: 'K-TOWN BBQ NEW YORK NY 12/10',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJrEwoxqzcZv38ZA'
  },
  {
    amount: 20,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2017-12-11',
    name: 'Metropolitan Transportation Authority',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK9d1p35LHaoL3aL'
  },
  {
    amount: 25.8,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-12-11',
    name: 'TAXI SVC LONG ISLAND LONG ISLAND C NY 12/09',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEq5jeR8X9UmQ3Zo5'
  },
  {
    amount: 6,
    categoryBroad: 'Bank Fees',
    categoryDetailed: '',
    createdAt: '2017-12-05',
    name: 'MONTHLY SERVICE FEE',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oaLX'
  },
  {
    amount: 295.13,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-12-04',
    name: 'Payment to Chase card ending in 6097 12/04',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyVMZ'
  },
  {
    amount: 12.34,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-12-04',
    name: 'Seamless',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jdbV'
  },
  {
    amount: 20,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2017-11-28',
    name: 'Metropolitan Transportation Authority',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gOJ'
  },
  {
    amount: 15.24,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-11-27',
    name: 'Seamless',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30QY'
  },
  {
    amount: 11.84,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-11-24',
    name: 'Seamless',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wda'
  },
  {
    amount: -2000,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-11-22',
    name:
      'BOOK TRANSFER CREDIT B/O: WOORI BANK CHUNG KU SEOUL KOREA REP. SOUTH 100 ORG:/010097743 PARK HYE SUK REF: TEL:6466591495/BNF/CHASE BANK 39-01 MAIN STREET, FLUSHING, NY. CHASE TRN: 9859200326FI',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZRb'
  },
  {
    amount: 15,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'Foreign Transaction',
    createdAt: '2017-11-22',
    name: 'INTERNATIONAL INCOMING WIRE FEE',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jvJZ'
  },
  {
    amount: 2.5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'ATM',
    createdAt: '2017-11-22',
    name: 'NON-CHASE ATM FEE-WITH',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rAp'
  },
  {
    amount: 62,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2017-11-22',
    name: 'NON-CHASE ATM WITHDRAW 576608 11/2225-30 BRO',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8o4O'
  },
  {
    amount: 2000,
    categoryBroad: 'Community',
    categoryDetailed: 'Education',
    createdAt: '2017-11-21',
    name: 'FULLSTACK ACADEMY IN FULLSTACKACAD NY 11/20',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNE9'
  },
  {
    amount: 17.53,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-11-20',
    name: 'Seamless',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQROye'
  },
  {
    amount: 60,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-11-20',
    name: 'Venmo',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMQJgPoD0Ipkagpp'
  },
  {
    amount: 250.87,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-11-17',
    name: 'Payment to Chase card ending in 6097 11/17',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3w8M'
  },
  {
    amount: 281.69,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-11-17',
    name: 'Payment to Chase card ending in 6097 11/17',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8Md'
  },
  {
    amount: 191.35,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-11-16',
    name: 'Payment to Chase card ending in 6097 11/16',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRrd'
  },
  {
    amount: 48.48,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Arts and Entertainment',
    createdAt: '2017-11-13',
    name: '9640 AMC ONLINE KS 11/12',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqyQb'
  },
  {
    amount: 80.74,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-11-13',
    name: 'Payment to Chase card ending in 6097 11/13',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDgqd'
  },
  {
    amount: 31.85,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-11-13',
    name: 'Seamless',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAd3'
  },
  {
    amount: -2000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-11-10',
    name: 'TRANSFER FROM CHK XXXXXX2811',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30Q8'
  },
  {
    amount: 453.62,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-11-09',
    name: 'Payment to Chase card ending in 6097 11/09',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZR9'
  },
  {
    amount: 26.95,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-11-09',
    name: 'Seamless',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wdr'
  },
  {
    amount: 56,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Arts and Entertainment',
    createdAt: '2017-11-06',
    name: 'MISSION ESCAPE GAMES MISSIONESCAPE NY 11/05',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNE1'
  },
  {
    amount: 250.74,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-11-06',
    name: 'Payment to Chase card ending in 6097 11/06',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rAv'
  },
  {
    amount: 10.33,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-11-06',
    name: 'Seamless',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8o4Z'
  },
  {
    amount: 35.66,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-11-06',
    name: 'Seamless',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jvJw'
  },
  {
    amount: 20,
    categoryBroad: 'Service',
    categoryDetailed: 'Personal Care',
    createdAt: '2017-11-01',
    name: 'PAYGATE_KIWDISK 45527 SEOUL 10/30',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQROy3'
  },
  {
    amount: 196.19,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-11-01',
    name: 'Payment to Chase card ending in 6097 11/01',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMQJgPoD0Ipkagpx'
  },
  {
    amount: 12.89,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-10-30',
    name: 'Seamless',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8Mx'
  },
  {
    amount: 15.01,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-10-27',
    name: 'Seamless',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3w8w'
  },
  {
    amount: 17.22,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-10-26',
    name: 'Seamless',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRrN'
  },
  {
    amount: 205.24,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-10-25',
    name: 'Payment to Chase card ending in 6097 10/25',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqyQ9'
  },
  {
    amount: 38.93,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-10-25',
    name: 'Seamless',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAd7'
  },
  {
    amount: 18.47,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-10-23',
    name: 'Lyft',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDgq0'
  },
  {
    amount: 233.27,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-10-23',
    name: 'Payment to Chase card ending in 6097 10/23',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1L3mD6v7Cqwmpq4'
  },
  {
    amount: 27.57,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-10-20',
    name: "Papa John's",
    transactionId: '5oEVxw5PvkfxK95D1B6bFJa5qd8LPmCB9KqBj'
  },
  {
    amount: 16.84,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-10-20',
    name: 'Seamless',
    transactionId: 'ow1DqbBdERHMyamZgED7fygXbZkQoeuBZP8Bg'
  },
  {
    amount: 23.47,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-10-19',
    name: 'Seamless',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg895naA4HRJx0RK'
  },
  {
    amount: 7.44,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-10-17',
    name: 'Lyft',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXanKMJVDYIyQ9dyR'
  },
  {
    amount: 93.56,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-10-16',
    name: 'Payment to Chase card ending in 6097 10/16',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpYAE6n9VUbopYb3'
  },
  {
    amount: -500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-10-12',
    name: 'TRANSFER FROM CHK XXXXXX2811',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5o3RJqvQCMrveMr'
  },
  {
    amount: -1000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-10-11',
    name: 'DEPOSIT ID NUMBER 510568',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6brVvBM8UZYe8jr'
  },
  {
    amount: 333.34,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-10-11',
    name: 'Payment to Chase card ending in 6097 10/11',
    transactionId: '4OE94dj1AKUDONE94qjRs6p570oE1mFkNQXAe'
  },
  {
    amount: -500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-10-10',
    name: 'TRANSFER FROM CHK XXXXXX2811',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm73L4pZD5cBE8vZ8'
  },
  {
    amount: 49,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-10-10',
    name: 'TREEHOUSE FL 10/06',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7JkOoR8NUROXLZM'
  },
  {
    amount: 3.49,
    categoryBroad: 'Shops',
    categoryDetailed: 'Digital Purchase',
    createdAt: '2017-10-10',
    name: 'Yodo1 Games g.co/helppay# CA 10/07',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz1b3XaKnSr8abeX'
  },
  {
    amount: 307.68,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-10-06',
    name: 'Payment to Chase card ending in 6097 10/06',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9JqEwoY7HmNjQMv'
  },
  {
    amount: 163.87,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-10-03',
    name: 'Payment to Chase card ending in 6097 10/03',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPq5pr1o67HRwBq90'
  },
  {
    amount: -27,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-10-03',
    name: 'Venmo',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpOyKV8YMS6g07N9'
  },
  {
    amount: 8.4,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-10-02',
    name: 'Lyft',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5aBpow8ZcQY7pdN'
  },
  {
    amount: 22.46,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-10-02',
    name: 'Lyft',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKXyo0PJnSO1x4Xo'
  },
  {
    amount: 60,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-10-02',
    name: 'Venmo',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kb9mK43wsKZB9Dz'
  },
  {
    amount: -300,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-09-29',
    name:
      'BOOK TRANSFER CREDIT B/O: WOORI BANK CHUNG KU SEOUL KOREA REP. SOUTH 100 ORG:/010097743 PARK HYE SUK REF: TEL:6466591495/BNF/CHASE BANK 39-01 MAIN STREET, FLUSHING, NY. CHASE TRN: 6426200272JL',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4LXAdnzbVf9qkA4d'
  },
  {
    amount: 15,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'Foreign Transaction',
    createdAt: '2017-09-29',
    name: 'INTERNATIONAL INCOMING WIRE FEE',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svzp65krPefJZvbNE'
  },
  {
    amount: 331.26,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-09-28',
    name: 'Payment to Chase card ending in 6097 09/28',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEq5jeR8X9UmQ3ZwO'
  },
  {
    amount: 12.4,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-09-26',
    name: 'Lyft',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7ZBg4Ypn1CmB8Xbn'
  },
  {
    amount: 251.49,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-09-25',
    name: 'Payment to Chase card ending in 6097 09/25',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJrEwoxqzcZv38YZ'
  },
  {
    amount: 40.89,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-09-20',
    name: 'Lyft',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK9d1p35LHaoL306'
  },
  {
    amount: 30.11,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-09-20',
    name: 'Seamless',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKb3pxAzXH0K4poo'
  },
  {
    amount: 252.47,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-09-19',
    name: 'Payment to Chase card ending in 6097 09/19',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oadx'
  },
  {
    amount: -2000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-09-12',
    name: 'DEPOSIT ID NUMBER 45113',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jd0x'
  },
  {
    amount: 104.68,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-09-12',
    name: 'Payment to Chase card ending in 6097 09/12',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyVra'
  },
  {
    amount: 5.71,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-09-11',
    name: 'Lyft',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gAp'
  },
  {
    amount: 365.41,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-09-08',
    name: 'Payment to Chase card ending in 6097 09/08',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30e8'
  },
  {
    amount: 49,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-09-07',
    name: 'TREEHOUSE FL 09/06',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1wxr'
  },
  {
    amount: 6,
    categoryBroad: 'Bank Fees',
    categoryDetailed: '',
    createdAt: '2017-09-06',
    name: 'MONTHLY SERVICE FEE',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZY9'
  },
  {
    amount: 8.93,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-09-05',
    name: 'Lyft',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jvew'
  },
  {
    amount: 210.17,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-09-05',
    name: 'Payment to Chase card ending in 6097 09/05',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8orZ'
  },
  {
    amount: 285.92,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-09-05',
    name: 'Payment to Chase card ending in 6097 09/05',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4rQv'
  },
  {
    amount: 13.67,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-09-01',
    name: 'Lyft',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNy1'
  },
  {
    amount: 60,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-09-01',
    name: 'Venmo',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQROV3'
  },
  {
    amount: 350.02,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-08-28',
    name: 'Payment to Chase card ending in 6097 08/28',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMQJgPoD0Ipkag6x'
  },
  {
    amount: 180.22,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-08-25',
    name: '342 WEST 40TH STREET LL NEW YORK NY 08/24',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8dx'
  },
  {
    amount: 26.41,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-08-24',
    name: 'UBER *US AUG23 UZGR CA 08/23',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3wow'
  },
  {
    amount: 15.23,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-08-21',
    name: 'BBQ CHICKEN NEW YORK NY 08/18',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqy39'
  },
  {
    amount: 36.84,
    categoryBroad: 'Recreation',
    categoryDetailed: '',
    createdAt: '2017-08-21',
    name: 'CULL AND PISTOL NEW YORK NY 08/17',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRON'
  },
  {
    amount: -2,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Credit',
    createdAt: '2017-08-21',
    name: 'Cash Redemption',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7ZBg4Ypn1CmB8XEr'
  },
  {
    amount: 39.72,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-08-21',
    name: 'GRACE STREET NEW YORK NY 08/18',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDgX0'
  },
  {
    amount: 14.62,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-08-21',
    name: 'Seamless',
    transactionId: 'ow1DqbBdERHMyamZgED7fygXbZkQoeuBZP8Jg'
  },
  {
    amount: 77.19,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-08-21',
    name: 'The Lobster Place (Reta New York NY 08/17',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAX7'
  },
  {
    amount: 150,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-08-21',
    name: 'Venmo',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1L3mD6v7Cqwmp64'
  },
  {
    amount: 48,
    categoryBroad: 'Shops',
    categoryDetailed: 'Clothing and Accessories',
    createdAt: '2017-08-18',
    name: 'CARHARTT WORK IN PROGRE NEW YORK NY 08/17',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg895naA4HRJx04K'
  },
  {
    amount: 19.32,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-08-18',
    name: 'Lyft',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJa5qd8LPmCB9KqDj'
  },
  {
    amount: 55,
    categoryBroad: 'Shops',
    categoryDetailed: 'Clothing and Accessories',
    createdAt: '2017-08-18',
    name: 'Nike SOHO 325 New York NY 08/17',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXanKMJVDYIyQ9d1R'
  },
  {
    amount: 572.64,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-08-17',
    name: 'Payment to Chase card ending in 6097 08/17',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpYAE6n9VUbopY93'
  },
  {
    amount: 10.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-08-16',
    name: 'GRACE STREET NEW YORK NY 08/15',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4Lr'
  },
  {
    amount: -34.5,
    categoryBroad: 'Service',
    categoryDetailed: 'Travel Agents and Tour Operators',
    createdAt: '2017-08-16',
    name: 'PLN*PRICELINE.COM AI CT 08/15',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBq9w'
  },
  {
    amount: 34.5,
    categoryBroad: 'Service',
    categoryDetailed: 'Travel Agents and Tour Operators',
    createdAt: '2017-08-16',
    name: 'PRICELINE*AIR TICKETS CT 08/15',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7pZD'
  },
  {
    amount: 14.9,
    categoryBroad: 'Shops',
    categoryDetailed: 'Clothing and Accessories',
    createdAt: '2017-08-16',
    name: 'UNIQLO NY 34TH ST #32 NEW YORK NY 08/15',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9eB'
  },
  {
    amount: 16.32,
    categoryBroad: 'Shops',
    categoryDetailed: 'Computers and Electronics',
    createdAt: '2017-08-15',
    name: 'Blizzard Entertainment',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAx5'
  },
  {
    amount: -637,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-08-14',
    name: 'ATM CASH DEPOSIT 08/14 1260 BROADWAY',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvbao'
  },
  {
    amount: -510,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-08-14',
    name: 'ATM CASH DEPOSIT 08/14 1260 BROADWAY',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3ZMb'
  },
  {
    amount: -45,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-08-14',
    name: 'ATM CHECK DEPOSIT 08/14 1260 BROADWAY',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8X14'
  },
  {
    amount: 8.36,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-08-14',
    name: 'Lyft',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pY8'
  },
  {
    amount: 101.19,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-08-14',
    name: 'Payment to Chase card ending in 6097 08/14',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL369'
  },
  {
    amount: 19.37,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-08-14',
    name: 'Seamless',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38o0'
  },
  {
    amount: 226,
    categoryBroad: 'Travel',
    categoryDetailed: 'Lodging',
    createdAt: '2017-08-11',
    name: 'AMOMA.COM HOTELS ANNEMASSE 08/10',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVdv'
  },
  {
    amount: 11.5,
    categoryBroad: 'Travel',
    categoryDetailed: 'Charter Buses',
    createdAt: '2017-08-11',
    name: 'MEGABUS.COM WWW.MEGABUS.C NJ 08/10',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jd9y'
  },
  {
    amount: 12.5,
    categoryBroad: 'Travel',
    categoryDetailed: 'Charter Buses',
    createdAt: '2017-08-11',
    name: 'MEGABUS.COM WWW.MEGABUS.C NJ 08/10',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oaZe'
  },
  {
    amount: 180.98,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-08-10',
    name: 'Payment to Chase card ending in 6097 08/10',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3g4M'
  },
  {
    amount: 12,
    categoryBroad: 'Travel',
    categoryDetailed: 'Charter Buses',
    createdAt: '2017-08-09',
    name: 'BOLT BUS TX 08/08',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30rJ'
  },
  {
    amount: 19.96,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-08-08',
    name: 'Seamless',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wjd'
  },
  {
    amount: 18.5,
    categoryBroad: 'Travel',
    categoryDetailed: 'Charter Buses',
    createdAt: '2017-08-07',
    name: 'GREYHOUND #4146 TX 08/06',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZKY'
  },
  {
    amount: 49,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-08-07',
    name: 'TREEHOUSE FL 08/06',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8o77'
  },
  {
    amount: 20,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2017-08-04',
    name: 'Metropolitan Transportation Authority',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvOX'
  },
  {
    amount: -0.04,
    categoryBroad: 'Interest',
    categoryDetailed: 'Interest Earned',
    createdAt: '2017-08-03',
    name: 'INTEREST PAYMENT',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJrEwoxqzcZv380v'
  },
  {
    amount: 31.58,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-08-03',
    name: 'Seamless',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4r8b'
  },
  {
    amount: 13.43,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-08-02',
    name: 'Seamless',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjNkA'
  },
  {
    amount: -1604,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-08-01',
    name: 'ATM CASH DEPOSIT 08/01 1260 BROADWAY',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQRO8J'
  },
  {
    amount: -417,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-08-01',
    name: 'ATM CASH DEPOSIT 08/01 1260 BROADWAY',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagw0'
  },
  {
    amount: -182.25,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-08-01',
    name: 'ATM CHECK DEPOSIT 08/01 1260 BROADWAY',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8QE'
  },
  {
    amount: 2599,
    categoryBroad: 'Community',
    categoryDetailed: 'Education',
    createdAt: '2017-07-31',
    name: 'APP ACADEMY CA 07/27',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyOJ'
  },
  {
    amount: 2622.74,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Debit',
    createdAt: '2017-07-31',
    name:
      'EBOOKERS COM 22d9e6b7 f6c8 07/30 Pound Sterl1935.84 X 1.315372 (EXCHG RTE) + 76.39 (EXCHG RTE ADJ)',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8aw'
  },
  {
    amount: 76.85,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-07-31',
    name: 'Lyft',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgZP'
  },
  {
    amount: -1000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-07-31',
    name: 'Online Transfer from SAV ...1371 transaction#: 6403773733',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRQo'
  },
  {
    amount: -2300,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-07-31',
    name: 'Online Transfer from SAV ...1371 transaction#: 6403879578',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wMq'
  },
  {
    amount: 1000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-07-31',
    name: 'Online Transfer to CHK ...6254 transaction#: 6403773733 07/31',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKb3pxAzXH0K4p8E'
  },
  {
    amount: 2300,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-07-31',
    name: 'Online Transfer to CHK ...6254 transaction#: 6403879578 07/31',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK9d1p35LHaoL3Yq'
  },
  {
    amount: 85.55,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-07-31',
    name: 'Payment to Chase card ending in 6097 07/31',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0Q0'
  },
  {
    amount: 411.94,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-07-31',
    name: 'Payment to Chase card ending in 6097 07/31',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9KqLJ'
  },
  {
    amount: 17.19,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-07-31',
    name: 'Seamless',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpAY'
  },
  {
    amount: -150,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-07-31',
    name: 'Venmo',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAa9'
  },
  {
    amount: -1000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-07-28',
    name: 'Online Transfer from SAV ...1371 transaction#: 6398629565',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9d5a'
  },
  {
    amount: 1000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-07-28',
    name: 'Online Transfer to CHK ...6254 transaction#: 6398629565 07/28',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oaro'
  },
  {
    amount: -1000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-07-27',
    name: 'Online Transfer from SAV ...1371 transaction#: 6397488263',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYgO'
  },
  {
    amount: 1000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-07-27',
    name: 'Online Transfer to CHK ...6254 transaction#: 6397488263 07/27',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jdDp'
  },
  {
    amount: 1062.26,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-07-27',
    name: 'Payment to Chase card ending in 6097 07/27',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrveL6'
  },
  {
    amount: 320.61,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-07-26',
    name: 'Payment to Chase card ending in 6097 07/26',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8PQ'
  },
  {
    amount: 480.47,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-07-24',
    name: 'Payment to Chase card ending in 6097 07/24',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagwK'
  },
  {
    amount: 149.38,
    categoryBroad: 'Service',
    categoryDetailed: 'Telecommunication Services',
    createdAt: '2017-07-20',
    name: 'BILL PAYMENT WWW.ATT.COM TX 07/19',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8Q6'
  },
  {
    amount: 4.49,
    categoryBroad: 'Shops',
    categoryDetailed: 'Digital Purchase',
    createdAt: '2017-07-19',
    name: 'NetmarbleGam g.co/helppay# CA 07/19',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wMd'
  },
  {
    amount: 50,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-07-18',
    name: 'Venmo',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAap'
  },
  {
    amount: 100,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-07-18',
    name: 'Venmo',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRQ9'
  },
  {
    amount: 500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2017-07-17',
    name: 'ATM WITHDRAWAL 002521 07/1632000 PAC',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgZL'
  },
  {
    amount: 416.44,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-07-17',
    name: 'Payment to Chase card ending in 6097 07/17',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyOZ'
  },
  {
    amount: 25.91,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-07-13',
    name: 'Seamless',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpVK'
  },
  {
    amount: 241.51,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-07-12',
    name: 'Payment to Chase card ending in 6097 07/12',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kq7K'
  },
  {
    amount: 17.44,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-07-12',
    name: 'Seamless',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8np'
  },
  {
    amount: 26.84,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-07-11',
    name: 'Seamless',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0q7'
  },
  {
    amount: -2700,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-07-10',
    name: 'ATM CASH DEPOSIT 07/10 3105 30TH AVE',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9dOz'
  },
  {
    amount: -740,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-07-10',
    name: 'ATM CASH DEPOSIT 07/10 3105 30TH AVE',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYax'
  },
  {
    amount: -330,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-07-10',
    name: 'ATM CASH DEPOSIT 07/10 3105 30TH AVE',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve5Q'
  },
  {
    amount: -280,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-07-10',
    name: 'ATM CASH DEPOSIT 07/10 3105 30TH AVE',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8vb'
  },
  {
    amount: -69,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-07-10',
    name: 'ATM CASH DEPOSIT 07/10 3105 30TH AVE',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8v6A'
  },
  {
    amount: -38,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-07-10',
    name: 'ATM CASH DEPOSIT 07/10 3105 30TH AVE',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLdQ'
  },
  {
    amount: -75,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-07-10',
    name: 'ATM CHECK DEPOSIT 07/09 1260 BROADWAY',
    transactionId: '4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQXKq'
  },
  {
    amount: 24.48,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-07-10',
    name: 'Lyft',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8abkV'
  },
  {
    amount: 350.02,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-07-10',
    name: 'Payment to Chase card ending in 6097 07/10',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQ90'
  },
  {
    amount: 84.58,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-07-07',
    name: 'Payment to Chase card ending in 6097 07/07',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqro'
  },
  {
    amount: 49,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-07-07',
    name: 'TREEHOUSE FL 07/06',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07vw'
  },
  {
    amount: -0.06,
    categoryBroad: 'Interest',
    categoryDetailed: 'Interest Earned',
    createdAt: '2017-07-06',
    name: 'INTEREST PAYMENT',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gK5'
  },
  {
    amount: 6,
    categoryBroad: 'Bank Fees',
    categoryDetailed: '',
    createdAt: '2017-07-06',
    name: 'MONTHLY SERVICE FEE',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4KX'
  },
  {
    amount: -400,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-07-06',
    name: 'Online Transfer from SAV ...1371 transaction#: 6349487263',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7peQ'
  },
  {
    amount: 400,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-07-06',
    name: 'Online Transfer to CHK ...6254 transaction#: 6349487263 07/06',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyVNJ'
  },
  {
    amount: 88.19,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-07-05',
    name: 'KARAOKE WOW NEW YORK NY 06/30',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9re'
  },
  {
    amount: 23.67,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-07-05',
    name: 'Seamless',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAzz'
  },
  {
    amount: 94.77,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-07-03',
    name: 'NEW WONJO RESTAURANT NEW YORK NY 06/29',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvbz7'
  },
  {
    amount: 23,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-07-03',
    name: 'NYCTAXI9V31 ASTORIA NY 06/30',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3ZdL'
  },
  {
    amount: 12.9,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-06-30',
    name: 'PARIS BAGUETTE QUEENS NY 06/28',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38y7'
  },
  {
    amount: 24.22,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-06-30',
    name: 'Seamless',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8XOM'
  },
  {
    amount: 113.35,
    categoryBroad: 'Service',
    categoryDetailed: 'Utilities',
    createdAt: '2017-06-29',
    name: 'CONED BILL PAYMEN NY 06/28',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3Db'
  },
  {
    amount: 56.25,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Arts and Entertainment',
    createdAt: '2017-06-29',
    name: 'THE MAZE NEW YORK NY 06/28',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pvr'
  },
  {
    amount: -500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-06-28',
    name: 'Online Transfer from SAV ...1371 transaction#: 6326023554',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oax5'
  },
  {
    amount: 500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-06-28',
    name: 'Online Transfer to CHK ...6254 transaction#: 6326023554 06/28',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx309d'
  },
  {
    amount: 24.32,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-06-28',
    name: 'Seamless',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jdwa'
  },
  {
    amount: 149.4,
    categoryBroad: 'Service',
    categoryDetailed: 'Telecommunication Services',
    createdAt: '2017-06-27',
    name: 'BILL PAYMENT WWW.ATT.COM TX 06/25',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx304b'
  },
  {
    amount: 20,
    categoryBroad: 'Service',
    categoryDetailed: 'Personal Care',
    createdAt: '2017-06-27',
    name: 'PAYGATE_KIWDISK 45527 SEOUL 06/24',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVAn'
  },
  {
    amount: 20.51,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-06-27',
    name: 'Seamless',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3g1r'
  },
  {
    amount: 86.04,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-06-26',
    name: 'HER NAME IS HAN NEW YORK NY 06/22',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8oDo'
  },
  {
    amount: 52.8,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-06-26',
    name: 'KARAOKE WOW NEW YORK NY 06/24',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rYy'
  },
  {
    amount: 57.7,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-06-26',
    name: 'KONDO RESTAURANT NY 06/26',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQROpL'
  },
  {
    amount: 20,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2017-06-26',
    name: 'Metropolitan Transportation Authority',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV876'
  },
  {
    amount: -500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-06-26',
    name: 'Online Transfer from SAV ...1371 transaction#: 6318576011',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wPB'
  },
  {
    amount: 500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-06-26',
    name: 'Online Transfer to CHK ...6254 transaction#: 6318576011 06/26',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1waY'
  },
  {
    amount: 5.39,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-06-26',
    name: 'PARIS BAGUETTE-NEW YOR NEW YORK NY 06/22',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZgV'
  },
  {
    amount: 13.17,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-06-26',
    name: 'PARIS BAGUETTE-NEW YOR NEW YORK NY 06/24',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjN5K'
  },
  {
    amount: 87.62,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-06-26',
    name: 'Payment to Chase card ending in 6097 06/26',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkageK'
  },
  {
    amount: 35.24,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-06-26',
    name: 'TAKE 31 NEW YORK NY 06/24',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvXk'
  },
  {
    amount: 9.99,
    categoryBroad: 'Shops',
    categoryDetailed: '',
    createdAt: '2017-06-23',
    name: 'Amazon',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRd9'
  },
  {
    amount: 166.18,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-06-23',
    name: 'Payment to Chase card ending in 6097 06/23',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKALp'
  },
  {
    amount: 11.11,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-06-23',
    name: 'TOUS LES JOURS NEW YORK NY 06/22',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wzd'
  },
  {
    amount: 20,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Arts and Entertainment',
    createdAt: '2017-06-22',
    name: '210 - BOWLERO QUEENS - WOODSIDE NY 06/21',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgvL'
  },
  {
    amount: 24.36,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Arts and Entertainment',
    createdAt: '2017-06-22',
    name: '210 - BOWLERO QUEENS WOODSIDE NY 06/21',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpXK'
  },
  {
    amount: 50.45,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Arts and Entertainment',
    createdAt: '2017-06-22',
    name: '210 - BOWLERO QUEENS WOODSIDE NY 06/21',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyaZ'
  },
  {
    amount: 7.98,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-06-22',
    name: 'H MART 38 W. 32ND ST. NEW YORK NY 06/22',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8Dp'
  },
  {
    amount: 20,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-06-21',
    name: 'NYCTAXI8J57 NEW YORK NY 06/20',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kq3K'
  },
  {
    amount: 74.44,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-06-20',
    name: 'MK KARAOKE LLC NEW YORK NY 06/20',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9dPz'
  },
  {
    amount: 29.84,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-06-20',
    name: 'Seamless',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0M7'
  },
  {
    amount: 20,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2017-06-19',
    name: 'Metropolitan Transportation Authority',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8mb'
  },
  {
    amount: -800,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-06-19',
    name: 'Online Transfer from SAV ...1371 transaction#: 6305114006',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYex'
  },
  {
    amount: 800,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-06-19',
    name: 'Online Transfer to CHK ...6254 transaction#: 6305114006 06/19',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZ33'
  },
  {
    amount: 642.61,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-06-19',
    name: 'Payment to Chase card ending in 6097 06/19',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve9Q'
  },
  {
    amount: 8,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-06-16',
    name: 'Lyft',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8vzA'
  },
  {
    amount: 16.43,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-06-16',
    name: 'Seamless',
    transactionId: '4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQXvq'
  },
  {
    amount: 56.35,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-06-13',
    name: 'Payment to Chase card ending in 6097 06/13',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLJQ'
  },
  {
    amount: 15.07,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-06-12',
    name: 'Seamless',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8abmV'
  },
  {
    amount: -500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-06-09',
    name: 'Online Transfer from SAV ...1371 transaction#: 6285049859',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQA0'
  },
  {
    amount: 500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-06-09',
    name: 'Online Transfer to CHK ...6254 transaction#: 6285049859 06/09',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8o6P'
  },
  {
    amount: 134.91,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-06-09',
    name: 'Payment to Chase card ending in 6097 06/09',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqno'
  },
  {
    amount: 25.22,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-06-09',
    name: 'Seamless',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07zw'
  },
  {
    amount: 20.18,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-06-07',
    name: 'Seamless',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7p6Q'
  },
  {
    amount: 49,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-06-07',
    name: 'TREEHOUSE FL 06/06',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4vX'
  },
  {
    amount: 16.48,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-06-06',
    name: 'Seamless',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9Re'
  },
  {
    amount: 267.09,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-06-05',
    name: 'Payment to Chase card ending in 6097 06/05',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3ZBL'
  },
  {
    amount: 27.75,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-05-31',
    name: 'Payment to Chase card ending in 6097 05/31',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv3897'
  },
  {
    amount: 35.39,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-05-31',
    name: 'Seamless',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8XeM'
  },
  {
    amount: -907,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-05-30',
    name: 'ATM CASH DEPOSIT 05/30 1260 BROADWAY',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4r70'
  },
  {
    amount: -569,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-05-30',
    name: 'ATM CASH DEPOSIT 05/30 1260 BROADWAY',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNJ4'
  },
  {
    amount: -202.5,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-05-30',
    name: 'ATM CHECK DEPOSIT 05/30 1260 BROADWAY',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQRO19'
  },
  {
    amount: 20.27,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-05-30',
    name: 'Lyft',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVLn'
  },
  {
    amount: 10.74,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-30',
    name: 'M1 Long Island NY 05/26',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oaj5'
  },
  {
    amount: -500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-05-30',
    name: 'Online Transfer from SAV ...1371 transaction#: 6257675997',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pnr'
  },
  {
    amount: 500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-05-30',
    name: 'Online Transfer to CHK ...6254 transaction#: 6257675997 05/30',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMQJgPoD0IpkagEQ'
  },
  {
    amount: 53.87,
    categoryBroad: 'Payment',
    categoryDetailed: 'Credit Card',
    createdAt: '2017-05-30',
    name: 'Payment to Chase card ending in 6097 05/30',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30Kb'
  },
  {
    amount: 15.83,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-05-30',
    name: 'Seamless',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3g6r'
  },
  {
    amount: 22.69,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-05-30',
    name: 'Seamless',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jdxa'
  },
  {
    amount: 25.26,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-05-30',
    name: 'Seamless',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL34b'
  },
  {
    amount: 8.71,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-05-26',
    name: "RUBY'S CANDY & GROCERY ASTORIA NY 05/23",
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1w8B'
  },
  {
    amount: 13.59,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-25',
    name: "McDonald's",
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZ1V'
  },
  {
    amount: 17.74,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-05-25',
    name: 'UBER *US MAY24 IY6P CA 05/25',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8o3o'
  },
  {
    amount: 154.69,
    categoryBroad: 'Service',
    categoryDetailed: 'Telecommunication Services',
    createdAt: '2017-05-24',
    name: 'BILL PAYMENT WWW.ATT.COM TX 05/22',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjNpK'
  },
  {
    amount: 13,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-24',
    name: 'GRACE STREET NEW YORK NY 05/23',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rby'
  },
  {
    amount: 20,
    categoryBroad: 'Service',
    categoryDetailed: 'Personal Care',
    createdAt: '2017-05-24',
    name: 'PAYGATE_KIWDISK 45527 SEOUL 05/23',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jv9k'
  },
  {
    amount: 45.2,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-23',
    name: 'ALIADA RESTAURANT ASTORIA NY 05/22',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagVK'
  },
  {
    amount: 24.21,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-05-23',
    name: 'Seamless',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQROML'
  },
  {
    amount: 11.1,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-23',
    name: 'Starbucks',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8L6'
  },
  {
    amount: 56.65,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-22',
    name: 'DONG CHUN HONG NEW YORK NY 05/18',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3w0d'
  },
  {
    amount: 23.41,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-22',
    name: 'DONG CHUN HONG NEW YORK NY 05/21',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpkK'
  },
  {
    amount: 5.5,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-05-22',
    name: 'FRESH FRUIT & GROCERY ASTORIA NY 05/19',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKA3p'
  },
  {
    amount: 8.99,
    categoryBroad: 'Travel',
    categoryDetailed: 'Airports',
    createdAt: '2017-05-22',
    name: 'LAGUARDIA-CC-BK 31-1 LONG ISLAND C NY126602 05/22',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9KqrK'
  },
  {
    amount: 17.88,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-05-22',
    name: 'Lyft',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8Rp'
  },
  {
    amount: 22.58,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-05-22',
    name: 'Seamless',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyoZ'
  },
  {
    amount: 25.8,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-05-22',
    name: 'TAXI SVC LIC LONG IS CITY NY 05/19',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRb9'
  },
  {
    amount: 9.8,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-22',
    name: 'TOUS LES JOURS NEW YORK NY 05/20',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgyL'
  },
  {
    amount: 43.51,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-19',
    name: 'ABIKO CURRY NEW YORK NY 05/18',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9doz'
  },
  {
    amount: 3.5,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-05-19',
    name: 'FOOD GALLERY 32 NY NY 05/18',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve7Q'
  },
  {
    amount: 121,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2017-05-19',
    name: 'Metropolitan Transportation Authority',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe80b'
  },
  {
    amount: 4.48,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-05-19',
    name: 'SWEET CHURROS, INC. NEW YORK NY 05/18',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYKx'
  },
  {
    amount: 7.03,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-19',
    name: 'TOUS LES JOURS NEW YORK NY 05/18',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0e7'
  },
  {
    amount: 14.95,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-17',
    name: 'HONG KONG RESTAURANT ASTORIA NY 05/15',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagOE'
  },
  {
    amount: 28.84,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-05-17',
    name: 'Lyft',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8vk'
  },
  {
    amount: 9.48,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-17',
    name: 'TOUS LES JOURS NEW YORK NY 05/16',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wQZ'
  },
  {
    amount: 15.74,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-16',
    name: 'AMPLE HILLS CREAMERY NEW YORK NY 05/14',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAvx'
  },
  {
    amount: -321.88,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-05-16',
    name: 'ATM CHECK DEPOSIT 05/16 1260 BROADWAY',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8PM'
  },
  {
    amount: 13.06,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-16',
    name: 'KING OF FALAFEL & S ASTORIA NY 05/15',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyb8'
  },
  {
    amount: 2.18,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-16',
    name: 'KING OF FALAFEL & S Queens NY 05/15',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgr8'
  },
  {
    amount: 17.79,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-05-16',
    name: 'Seamless',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRPX'
  },
  {
    amount: 7.5,
    categoryBroad: 'Shops',
    categoryDetailed: 'Department Stores',
    createdAt: '2017-05-15',
    name: 'BLOOMINGDALES NEW YORK NEW YORK NY 05/12',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9doP'
  },
  {
    amount: 33.19,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-15',
    name: 'DONG CHUN HONG NEW YORK NY 05/11',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9KqrL'
  },
  {
    amount: 6,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-15',
    name: 'GRACE STREET NEW YORK NY 05/13',
    transactionId: '4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQXaO'
  },
  {
    amount: 35.5,
    categoryBroad: 'Travel',
    categoryDetailed: 'Charter Buses',
    createdAt: '2017-05-15',
    name: 'GREYHOUND LINES CNP TX 05/12',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYKK'
  },
  {
    amount: 9.86,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-15',
    name: 'M1 Long Island NY 05/12',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0eq'
  },
  {
    amount: 35.7,
    categoryBroad: 'Travel',
    categoryDetailed: 'Charter Buses',
    createdAt: '2017-05-15',
    name: 'MEGABUS.COM / COACHU WWW.MEGABUS.C NJ 05/12',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve7N'
  },
  {
    amount: 50,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-15',
    name: 'RAMEN OKIDOKI NY 05/10',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8RJ'
  },
  {
    amount: 2.18,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-05-15',
    name: 'SWEET CHURROS, INC. NEW YORK NY 05/13',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLEa'
  },
  {
    amount: 3.05,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-05-15',
    name: 'SWEET CHURROS, INC. New York NY 05/13',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8vop'
  },
  {
    amount: -100,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-05-15',
    name: 'Venmo',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpkq'
  },
  {
    amount: 144,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-05-15',
    name: 'Venmo',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe80k'
  },
  {
    amount: 3.95,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-12',
    name: 'TOUS LES JOURS NEW YORK NY 05/11',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQwe'
  },
  {
    amount: 4.08,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-12',
    name: 'TOUS LES JOURS NEW YORK NY 05/11',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8ab64'
  },
  {
    amount: 6.44,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-12',
    name: 'TOUS LES JOURS NEW YORK NY 05/11',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07mD'
  },
  {
    amount: -806,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-05-11',
    name: 'ATM CASH DEPOSIT 05/11 1260 BROADWAY',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqkY'
  },
  {
    amount: 52.26,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-05-11',
    name: 'KARAOKE CITY NEW YORK NY 05/10',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4wm'
  },
  {
    amount: 19.42,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-05-11',
    name: 'Seamless',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7pO9'
  },
  {
    amount: 6.97,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-11',
    name: 'Starbucks',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9X9'
  },
  {
    amount: 6.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-10',
    name: 'GRACE STREET NEW YORK NY 05/09',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAmY'
  },
  {
    amount: 6.49,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-05-10',
    name: 'KEY FOODS #0564 ASTORIA NY 421897 05/10',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvbRX'
  },
  {
    amount: 152.43,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-05-09',
    name: 'A.P.C. 2129669685 NY 05/07',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8X5k'
  },
  {
    amount: 60,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-09',
    name: 'BAEKJEONG NEW YORK NY 05/08',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38ea'
  },
  {
    amount: 154.69,
    categoryBroad: 'Service',
    categoryDetailed: 'Telecommunication Services',
    createdAt: '2017-05-09',
    name: 'BILL PAYMENT WWW.ATT.COM TX 05/08',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4p5y'
  },
  {
    amount: 18,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-05-09',
    name: 'TAXI SVC FLUSHING LONG IS CITY NY 05/07',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3ZLy'
  },
  {
    amount: 42,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-05-08',
    name: 'BARNJOO UNION SQUARE IN NEW YORK NY 05/07',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jdAE'
  },
  {
    amount: 5.25,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-08',
    name: 'GRACE STREET NEW YORK NY 05/06',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3ng'
  },
  {
    amount: 8.15,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-08',
    name: 'GRACE STREET NEW YORK NY 05/06',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oa7P'
  },
  {
    amount: 7.41,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-08',
    name: 'M1 Long Island NY 05/08',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wyM'
  },
  {
    amount: 56,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-08',
    name: 'MAX BRENNER NEW YORK NY 05/07',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVaE'
  },
  {
    amount: 58.79,
    categoryBroad: 'Shops',
    categoryDetailed: 'Beauty Products',
    createdAt: '2017-05-08',
    name: 'Sephora',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30AD'
  },
  {
    amount: 49,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-05-08',
    name: 'TREEHOUSE FL 05/06',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZNr'
  },
  {
    amount: 367.45,
    categoryBroad: 'Shops',
    categoryDetailed: 'Clothing and Accessories',
    createdAt: '2017-05-08',
    name: 'VINCE #909 SOHO MERCER NEW YORK NY 013548 05/07',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3g7Z'
  },
  {
    amount: 236.2,
    categoryBroad: 'Travel',
    categoryDetailed: 'Airlines and Aviation Services',
    createdAt: '2017-05-05',
    name: 'American Airlines',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvPn'
  },
  {
    amount: 23.41,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-05-05',
    name: 'FAMILY MARKET ASTORIA NY 05/03',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8ovQ'
  },
  {
    amount: 6.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-05',
    name: 'GRACE STREET NEW YORK NY 05/04',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjN3d'
  },
  {
    amount: 6.58,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-05',
    name: 'TOUS LES JOURS NEW YORK NY 05/04',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rOV'
  },
  {
    amount: -815,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-05-04',
    name: 'ATM CASH DEPOSIT 05/04 1260 BROADWAY',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQROJo'
  },
  {
    amount: 5.86,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-04',
    name: 'Panera Bread',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagjE'
  },
  {
    amount: 96.66,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-03',
    name: 'GAMMEEOK NEW YORK NY 05/02',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wLZ'
  },
  {
    amount: 44.33,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-03',
    name: 'HANBAT RESTAURANT NEW YORK NY 05/03',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRZX'
  },
  {
    amount: -0.06,
    categoryBroad: 'Interest',
    categoryDetailed: 'Interest Earned',
    createdAt: '2017-05-03',
    name: 'INTEREST PAYMENT',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAyL'
  },
  {
    amount: 6,
    categoryBroad: 'Bank Fees',
    categoryDetailed: '',
    createdAt: '2017-05-03',
    name: 'MONTHLY SERVICE FEE',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKA5x'
  },
  {
    amount: -1000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-05-03',
    name: 'Online Transfer from SAV ...1371 transaction#: 6197655330',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV84k'
  },
  {
    amount: 1000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-05-03',
    name: 'Online Transfer to CHK ...6254 transaction#: 6197655330 05/03',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3w4o'
  },
  {
    amount: 5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'Excess Activity',
    createdAt: '2017-05-03',
    name: 'SAVINGS WITHDRAWAL LIMIT FEE',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRkQ'
  },
  {
    amount: 35.54,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-02',
    name: 'MATSUNOYA NEW YORK NY 05/01',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgd8'
  },
  {
    amount: 21.6,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-05-02',
    name: 'Seamless',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqy78'
  },
  {
    amount: 100,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2017-05-01',
    name: 'ATM WITHDRAWAL 002192 04/29349 5TH A',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0Nq'
  },
  {
    amount: 100,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2017-05-01',
    name: 'ATM WITHDRAWAL 002194 04/29349 5TH A',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9dNP'
  },
  {
    amount: 60,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2017-05-01',
    name: 'ATM WITHDRAWAL 008403 05/011260 BROA',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8ab04'
  },
  {
    amount: 61.7,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-01',
    name: 'BAEKJEONG NEW YORK NY 04/29',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9KqeL'
  },
  {
    amount: 3.79,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-05-01',
    name: 'H MART 38 W. 32ND ST. NEW YORK NY 04/29',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8Lk'
  },
  {
    amount: 32.24,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-05-01',
    name: 'H MART NEW YORK NY 04/28',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpBq'
  },
  {
    amount: 7.41,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-05-01',
    name: 'M2 Pomona NY 04/28',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8YJ'
  },
  {
    amount: 26,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-05-01',
    name: 'TAXI SVC WOODSIDE WOODSIDE NY 04/30',
    transactionId: '4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQXyO'
  },
  {
    amount: 4.08,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-05-01',
    name: 'TOUS LES JOURS NEW YORK NY 04/29',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrveNN'
  },
  {
    amount: 20.78,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-05-01',
    name: 'UBER *US APR29 T5PY CA 04/29',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYrK'
  },
  {
    amount: 34.39,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-05-01',
    name: 'UBER *US APR30 XCMG CA 05/01',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8vxp'
  },
  {
    amount: 1.75,
    categoryBroad: 'Food and Drink',
    categoryDetailed: '',
    createdAt: '2017-05-01',
    name: 'USA*CANTEEN VEND AMITYVILLE NY 05/01',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLya'
  },
  {
    amount: 100,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2017-04-28',
    name: 'ATM WITHDRAWAL 006579 04/281260 BROA',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqyYo'
  },
  {
    amount: 16.96,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-04-28',
    name: 'FAMILY MARKET ASTORIA NY 04/26',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQ5e'
  },
  {
    amount: 12,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-28',
    name: 'GRACE STREET NEW YORK NY 04/27',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07RD'
  },
  {
    amount: 5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'Excess Activity',
    createdAt: '2017-04-28',
    name: 'SAVINGS WITHDRAWAL LIMIT FEE',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDgAr'
  },
  {
    amount: 3.12,
    categoryBroad: 'Shops',
    categoryDetailed: 'Pharmacies',
    createdAt: '2017-04-27',
    name: 'CVS/PHARMACY #02 02457 NEW YORK NY 847514 04/27',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB969'
  },
  {
    amount: 30.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-27',
    name: 'KONDO RESTAURANT NY 04/26',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7pM9'
  },
  {
    amount: 37.56,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-04-27',
    name: 'NYCTAXI6G20 MANHASSET NY 04/25',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqLY'
  },
  {
    amount: 8,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-04-27',
    name: 'SWEET CHURROS, INC. New York NY 04/27',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4Em'
  },
  {
    amount: 29.37,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-26',
    name: 'DADAM New York NY 04/25',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAyY'
  },
  {
    amount: 11.7,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-26',
    name: 'SUBWAY 031925 LONG ISLAND C NY 04/26',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvbwX'
  },
  {
    amount: 13.06,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-25',
    name: 'KING OF FALAFEL & S Queens NY 04/24',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3Qg'
  },
  {
    amount: 20,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-04-25',
    name: 'NYCTAXI5H11 LONG ISLAND NY 04/24',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38ja'
  },
  {
    amount: 17.79,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-04-25',
    name: 'Seamless',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3Zvy'
  },
  {
    amount: 11.18,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-25',
    name: 'Starbucks',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pky'
  },
  {
    amount: 15.24,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-25',
    name: 'WA BAR NEW YORK NY 04/23',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8XMk'
  },
  {
    amount: 4.13,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-24',
    name: 'GRACE STREET NEW YORK NY 04/22',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx308D'
  },
  {
    amount: 18.2,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-24',
    name: 'Lyft',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wqM'
  },
  {
    amount: 19.78,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-24',
    name: "McDonald's",
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oamP'
  },
  {
    amount: 2.5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'ATM',
    createdAt: '2017-04-24',
    name: 'NON-CHASE ATM FEE-WITH',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1waq'
  },
  {
    amount: 102,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2017-04-24',
    name: 'NON-CHASE ATM WITHDRAW 060474 04/23315 5th A',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx309A'
  },
  {
    amount: 17.69,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-04-24',
    name: "RUBY'S CANDY & GROCERY ASTORIA NY 04/21",
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVoE'
  },
  {
    amount: 57.71,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-24',
    name: 'SANFORDSRESTAURANT ASTORIA NY 04/21',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jdzE'
  },
  {
    amount: 4.08,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-24',
    name: 'TOUS LES JOURS NEW YORK NY 04/22',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3gpZ'
  },
  {
    amount: 4.08,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-21',
    name: 'TOUS LES JOURS NEW YORK NY 04/20',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZMr'
  },
  {
    amount: -831,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-04-20',
    name: 'ATM CASH DEPOSIT 04/20 1260 BROADWAY',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8o1Q'
  },
  {
    amount: 11.32,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-04-20',
    name: 'CAFFE BENE SUNNYSIDE SUNNYSIDE NY 04/19',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rPV'
  },
  {
    amount: 1.75,
    categoryBroad: 'Food and Drink',
    categoryDetailed: '',
    createdAt: '2017-04-20',
    name: 'USA*CANTEEN VEND AMITYVILLE NY 04/19',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvMn'
  },
  {
    amount: 2.91,
    categoryBroad: 'Shops',
    categoryDetailed: 'Pharmacies',
    createdAt: '2017-04-19',
    name: 'CVS/PHARMACY #01 01058 SUNNYSIDE NY 808625 04/19',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAjx'
  },
  {
    amount: 18.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-19',
    name: 'DADAM New York NY 04/18',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wBZ'
  },
  {
    amount: 121,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2017-04-19',
    name: 'Metropolitan Transportation Authority',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyM8'
  },
  {
    amount: -200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-04-19',
    name: 'Online Transfer from SAV ...1371 transaction#: 6160781470',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjNBd'
  },
  {
    amount: 200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-04-19',
    name: 'Online Transfer to CHK ...6254 transaction#: 6160781470 04/19',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6n9KkM01URJrZ3w'
  },
  {
    amount: 20,
    categoryBroad: 'Service',
    categoryDetailed: 'Personal Care',
    createdAt: '2017-04-19',
    name: 'PAYGATE_KIWDISK 45527 SEOUL 04/18',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8nk'
  },
  {
    amount: 16.16,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-19',
    name: 'SUBWAY 031925 LONG ISLAND C NY 04/19',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRAX'
  },
  {
    amount: 25,
    categoryBroad: 'Recreation',
    categoryDetailed: '',
    createdAt: '2017-04-19',
    name: 'SUNCTRYAIR 33782056705 EAGAN MN 04/16',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQROEo'
  },
  {
    amount: 20.51,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-04-19',
    name: 'Seamless',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkag0E'
  },
  {
    amount: 66.33,
    categoryBroad: 'Shops',
    categoryDetailed: 'Department Stores',
    createdAt: '2017-04-18',
    name: 'DFS GROUP LP LAX LOS ANGELES CA 04/17',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpyq'
  },
  {
    amount: 6.61,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-18',
    name: 'LOS ANGELES 3154B LOS ANGELES CA 04/16',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8eJ'
  },
  {
    amount: 8.86,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-18',
    name: 'Lyft',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgw8'
  },
  {
    amount: 46.3,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-04-18',
    name: 'NYCTAXI1R17 LONG ISLAND NY 04/17',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9KqPL'
  },
  {
    amount: 13.99,
    categoryBroad: 'Shops',
    categoryDetailed: 'Convenience Stores',
    createdAt: '2017-04-17',
    name: '7-Eleven',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRAM'
  },
  {
    amount: 36,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Arts and Entertainment',
    createdAt: '2017-04-17',
    name: 'Fandango',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve0N'
  },
  {
    amount: 84.74,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-17',
    name: 'JAE BU DO LOS ANGELES CA 04/16',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpyn'
  },
  {
    amount: 2,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-17',
    name: 'Lyft',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8kk'
  },
  {
    amount: 4.05,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-17',
    name: 'Lyft',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8eX'
  },
  {
    amount: 4.55,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-17',
    name: 'Lyft',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAjq'
  },
  {
    amount: 5,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-17',
    name: 'Lyft',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9deL'
  },
  {
    amount: 12.79,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-17',
    name: 'Lyft',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkag0z'
  },
  {
    amount: 17.8,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-17',
    name: 'Lyft',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYZK'
  },
  {
    amount: 18.6,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-17',
    name: 'Lyft',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wBm'
  },
  {
    amount: -500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-04-17',
    name: 'Online Transfer from SAV ...1371 transaction#: 6154087848',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0Bq'
  },
  {
    amount: 500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-04-17',
    name: 'Online Transfer to CHK ...6254 transaction#: 6154087848 04/17',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNPgZ8RDEt4w8o65'
  },
  {
    amount: 294.13,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-17',
    name: 'THIRD ST PROMENADE #1 SANTA MONICA CA 04/14',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8nb'
  },
  {
    amount: 4.34,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-17',
    name: 'THREE BROOMSTICKS UNIVERSAL CTY CA 04/13',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9deP'
  },
  {
    amount: 6.51,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-17',
    name: 'TOKYO JAPANESE LIFESTY LOS ANGELES CA 04/16',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0B6'
  },
  {
    amount: 5.72,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-17',
    name: 'TST* DIRT DOG LOS ANGELES CA 04/15',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgwV'
  },
  {
    amount: 22.61,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-17',
    name: 'TST* DIRT DOG LOS ANGELES CA 04/15',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyMX'
  },
  {
    amount: 34,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Arts and Entertainment',
    createdAt: '2017-04-17',
    name: 'X LANES LOS ANGELES CA 04/16',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9KqPq'
  },
  {
    amount: 16.48,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-14',
    name: 'Lyft',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8kq'
  },
  {
    amount: 17,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-14',
    name: 'Lyft',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYZL'
  },
  {
    amount: 438,
    categoryBroad: 'Community',
    categoryDetailed: 'Education',
    createdAt: '2017-04-14',
    name: 'UNIV STUDIOS O40000010 CA 04/12',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve0E'
  },
  {
    amount: 375,
    categoryBroad: 'Tax',
    categoryDetailed: 'Payment',
    createdAt: '2017-04-13',
    name: 'IRS USATAXPYMT PPD ID: 3387702000',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8v4q'
  },
  {
    amount: 307,
    categoryBroad: 'Tax',
    categoryDetailed: 'Payment',
    createdAt: '2017-04-13',
    name: 'NYS DTF PIT Tax Paymnt PPD ID: N146013200',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLP0'
  },
  {
    amount: -500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-04-13',
    name: 'Online Transfer from SAV ...1371 transaction#: 6146341215',
    transactionId: '4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQX5x'
  },
  {
    amount: 500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-04-13',
    name: 'Online Transfer to CHK ...6254 transaction#: 6146341215 04/13',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnA8wEyRzvFJ1jva5'
  },
  {
    amount: 35.41,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-04-12',
    name: 'CAL MART BEER & WINE LOS ANGELES CA 04/11',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQ1P'
  },
  {
    amount: 33.89,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-04-12',
    name: 'H MART LOS ANGELES LOS ANGELES CA 188177 04/11',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB94d'
  },
  {
    amount: 25,
    categoryBroad: 'Travel',
    categoryDetailed: 'Airlines and Aviation Services',
    createdAt: '2017-04-12',
    name: 'JetBlue',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8abnP'
  },
  {
    amount: 7.33,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-12',
    name: 'Lyft',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqJa'
  },
  {
    amount: 10.53,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-12',
    name: 'Lyft',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7p8n'
  },
  {
    amount: 15.04,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-12',
    name: 'Lyft',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g071g'
  },
  {
    amount: 6.51,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-12',
    name: 'TOKYO JAPANESE LIFESTY LOS ANGELES CA 04/11',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4dx'
  },
  {
    amount: 4.06,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-11',
    name: 'DUNKIN #356521 Q3 BOSTON MA 04/10',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL31V'
  },
  {
    amount: 40,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-11',
    name: 'GAMMEEOK NEW YORK NY 04/10',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvb3A'
  },
  {
    amount: 78,
    categoryBroad: 'Shops',
    categoryDetailed: 'Digital Purchase',
    createdAt: '2017-04-11',
    name: 'Groupon',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8XLE'
  },
  {
    amount: 10.62,
    categoryBroad: 'Shops',
    categoryDetailed: 'Newsstands',
    createdAt: '2017-04-11',
    name: 'HUDSON ST 1509 BOSTON MA 04/10',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38Bg'
  },
  {
    amount: 29.4,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-11',
    name: 'RAMEN OKIDOKI NY 04/09',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAJa'
  },
  {
    amount: 2.57,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-11',
    name: 'Starbucks',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4prP'
  },
  {
    amount: 15.5,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-11',
    name: 'UBER *US APR10 V7ED CA 04/10',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3Z4K'
  },
  {
    amount: 100,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2017-04-10',
    name: 'ATM WITHDRAWAL 006296 04/09349 5TH A',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4ro1'
  },
  {
    amount: 154.65,
    categoryBroad: 'Service',
    categoryDetailed: 'Telecommunication Services',
    createdAt: '2017-04-10',
    name: 'BILL PAYMENT WWW.ATT.COM TX 04/07',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wYm'
  },
  {
    amount: 1.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: '',
    createdAt: '2017-04-10',
    name: 'CMSVEND*CV FARMINGDALE AMITYVILLE NY 04/07',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3gyv'
  },
  {
    amount: 18.23,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-04-10',
    name: 'FAMILY MARKET ASTORIA NY 04/07',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wrx'
  },
  {
    amount: 6.41,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-10',
    name: 'GRACE STREET NEW YORK NY 04/08',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8obD'
  },
  {
    amount: 5.72,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-04-10',
    name: 'M1 New York NY 04/07',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30PQ'
  },
  {
    amount: 8.15,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-04-10',
    name: 'NYCTAXI5C17 ASTORIA NY 04/09',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjN63'
  },
  {
    amount: -1000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-04-10',
    name: 'Online Transfer from SAV ...1371 transaction#: 6136391007',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oapy'
  },
  {
    amount: 1000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-04-10',
    name: 'Online Transfer to CHK ...6254 transaction#: 6136391007 04/10',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8EYXQgbkfAn4r7k'
  },
  {
    amount: 150.97,
    categoryBroad: 'Travel',
    categoryDetailed: 'Lodging',
    createdAt: '2017-04-10',
    name: 'PLN*PRICELINE HOTELS CT 04/08',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVk8'
  },
  {
    amount: 9.99,
    categoryBroad: 'Shops',
    categoryDetailed: 'Digital Purchase',
    createdAt: '2017-04-10',
    name: 'Pixonic LLC g.co/payhelp# CA 04/10',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8Eb'
  },
  {
    amount: 3.49,
    categoryBroad: 'Shops',
    categoryDetailed: 'Pharmacies',
    createdAt: '2017-04-10',
    name: 'Rite Aid',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQROYE'
  },
  {
    amount: 26.65,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-10',
    name: 'Shake Shack',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZwK'
  },
  {
    amount: 3.21,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-10',
    name: 'Starbucks',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagzz'
  },
  {
    amount: 4.08,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-10',
    name: 'TOUS LES JOURS NEW YORK NY 04/06',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jdJQ'
  },
  {
    amount: 2.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-10',
    name: 'WOORI JIP NEW YORK NY 04/08',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvb9'
  },
  {
    amount: 13.61,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-07',
    name: 'SUBWAY 031925 LONG ISLAND C NY 04/07',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyNX'
  },
  {
    amount: 3.63,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-04-07',
    name: 'SWEET CHURROS, INC. NEW YORK NY 04/06',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAQq'
  },
  {
    amount: 49,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-04-07',
    name: 'TREEHOUSE FL 04/06',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmp1n'
  },
  {
    amount: -500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-04-07',
    name: 'Telephone transfer from SAV XXXXXX1371',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRBM'
  },
  {
    amount: 500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-04-07',
    name: 'Telephone transfer to CHK XXXXX6254 04/07',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPYkpXNngfEDjNJq'
  },
  {
    amount: 21.74,
    categoryBroad: 'Shops',
    categoryDetailed: 'Pharmacies',
    createdAt: '2017-04-07',
    name: 'Walgreens',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgRV'
  },
  {
    amount: -1475,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-04-06',
    name: 'ATM CASH DEPOSIT 04/06 1260 BROADWAY',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZM0pQrmwtyQRO17'
  },
  {
    amount: -1050,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-04-06',
    name: 'ATM CASH DEPOSIT 04/06 1260 BROADWAY',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMQJgPoD0IpkagED'
  },
  {
    amount: -776,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-04-06',
    name: 'ATM CASH DEPOSIT 04/06 1260 BROADWAY',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKZbykBOeUMeV8Po'
  },
  {
    amount: -325,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-04-06',
    name: 'ATM CASH DEPOSIT 04/06 1260 BROADWAY',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9OMqkpw3zf8a3w4r'
  },
  {
    amount: -127.5,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-04-06',
    name: 'ATM CHECK DEPOSIT 04/06 1260 BROADWAY',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpMNo5YbEnCrwLRkR'
  },
  {
    amount: 6.76,
    categoryBroad: 'Shops',
    categoryDetailed: 'Pharmacies',
    createdAt: '2017-04-06',
    name: 'CVS/PHARM 02457--320FI NEW YORK NY 04/06',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYnL'
  },
  {
    amount: 7.75,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-06',
    name: 'GRACE STREET NEW YORK NY 04/04',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP87X'
  },
  {
    amount: 9,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-04-06',
    name: 'KARAOKE CITY NEW YORK NY 04/04',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kqoq'
  },
  {
    amount: 58,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-04-06',
    name: 'KARAOKE CITY NEW YORK NY 04/05',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0O6'
  },
  {
    amount: 14.24,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-06',
    name: "McDonald's",
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9d0L'
  },
  {
    amount: -0.08,
    categoryBroad: 'Interest',
    categoryDetailed: 'Interest Earned',
    createdAt: '2017-04-05',
    name: 'INTEREST PAYMENT',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNBbKmAJ4HdDKAyb'
  },
  {
    amount: 6,
    categoryBroad: 'Bank Fees',
    categoryDetailed: '',
    createdAt: '2017-04-05',
    name: 'MONTHLY SERVICE FEE',
    transactionId: '4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQXOx'
  },
  {
    amount: 9.44,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-05',
    name: 'UBER *US APR05 7FYR CA 04/05',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrvenE'
  },
  {
    amount: 1.75,
    categoryBroad: 'Food and Drink',
    categoryDetailed: '',
    createdAt: '2017-04-05',
    name: 'USA*CANTEEN VEND AMITYVILLE NY 04/05',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8Eq'
  },
  {
    amount: 20,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-04-04',
    name: 'Seamless',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8v0q'
  },
  {
    amount: 26.02,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-04',
    name: 'TAMASHII ASTORIA NY 04/03',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLK0'
  },
  {
    amount: 17.54,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-04-03',
    name: 'Lyft',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7pBn'
  },
  {
    amount: 1.63,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-04-03',
    name: 'M2 Pomona NY 03/31',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQ6P'
  },
  {
    amount: 10.79,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-04-03',
    name: 'M2 Pomona NY 03/31',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8abQP'
  },
  {
    amount: 37.06,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-04-03',
    name: 'Seamless',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07eg'
  },
  {
    amount: 28.25,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-04-03',
    name: 'TREATSA PIZZA CORP NEW YORK NY 04/02',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqAa'
  },
  {
    amount: 1.75,
    categoryBroad: 'Food and Drink',
    categoryDetailed: '',
    createdAt: '2017-04-03',
    name: 'USA*CANTEEN VEND AMITYVILLE NY 04/03',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4nx'
  },
  {
    amount: 5.25,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-31',
    name: 'GRACE STREET NEW YORK NY 03/30',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkA0a'
  },
  {
    amount: 4.3,
    categoryBroad: 'Shops',
    categoryDetailed: 'Bookstores',
    createdAt: '2017-03-31',
    name: 'KORYO BOOKS NEW YORK NY 03/30',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9jd'
  },
  {
    amount: 72.11,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-30',
    name: 'FIVE SENSES NEW YORK NY 03/28',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvbLA'
  },
  {
    amount: 35.4,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-30',
    name: 'KONDO RESTAURANT NY 03/29',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3Z8K'
  },
  {
    amount: 4.14,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-03-30',
    name: 'SWEET CHURROS, INC. New York NY 03/30',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38Eg'
  },
  {
    amount: 4.3,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-30',
    name: 'Starbucks',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8XJE'
  },
  {
    amount: 5.42,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-29',
    name: 'GRACE STREET NEW YORK NY 03/28',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4p3P'
  },
  {
    amount: 16.33,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-29',
    name: 'SUBWAY 031925 LONG ISLAND C NY 03/29',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3bV'
  },
  {
    amount: 22.16,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-03-29',
    name: 'TRADE FAIR #7 LONG ISLAND C NY 03/29',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oa8y'
  },
  {
    amount: 5.93,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-03-28',
    name: 'CAFFE BENE SUNNYSIDE SUNNYSIDE NY 03/27',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wzx'
  },
  {
    amount: 13.95,
    categoryBroad: 'Service',
    categoryDetailed: 'Travel Agents and Tour Operators',
    createdAt: '2017-03-28',
    name: 'COA*CHEAPOAIR.COM AI CHEAPOAIR.COM NY 03/28',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZ9K'
  },
  {
    amount: 53,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-28',
    name: 'ENTHAICE THAI KITCHEN ASTORIA NY 03/27',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8o5D'
  },
  {
    amount: 40,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-28',
    name: 'GAMMEEOK NEW YORK NY 03/25',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyV68'
  },
  {
    amount: 21,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-28',
    name: 'NATURAL TOFU SUNNYSIDE NY 03/27',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx305Q'
  },
  {
    amount: -800,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-28',
    name: 'Online Transfer from SAV ...1371 transaction#: 6108099140',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jdvQ'
  },
  {
    amount: 800,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-28',
    name: 'Online Transfer to CHK ...6254 transaction#: 6108099140 03/28',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdLOv9eNRhQjqyYP'
  },
  {
    amount: 5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'Excess Activity',
    createdAt: '2017-03-28',
    name: 'SAVINGS WITHDRAWAL LIMIT FEE',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4mPYjpQ1FqLDgAp'
  },
  {
    amount: 13.98,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-03-28',
    name: 'Seamless',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3g8v'
  },
  {
    amount: 73,
    categoryBroad: 'Travel',
    categoryDetailed: 'Lodging',
    createdAt: '2017-03-27',
    name: 'AIRBNB * HM4QYHEMWB CA 03/27',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRmM'
  },
  {
    amount: 14.55,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-27',
    name: 'DD/BR #346449 Q35 ASTORIA NY 03/24',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagMz'
  },
  {
    amount: 19.96,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-03-27',
    name: 'FAMILY MARKET ASTORIA NY 03/24',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rg1'
  },
  {
    amount: 56.49,
    categoryBroad: 'Travel',
    categoryDetailed: 'Airlines and Aviation Services',
    createdAt: '2017-03-27',
    name: 'JetBlue',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjNv3'
  },
  {
    amount: -700,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-27',
    name: 'Online Transfer from SAV ...1371 transaction#: 6104930111',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvg9'
  },
  {
    amount: 10,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-27',
    name: 'Online Transfer to CHK ...6254 transaction#: 6104930111 03/27',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1L3mD6v7Cqwmp9M'
  },
  {
    amount: 5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'Excess Activity',
    createdAt: '2017-03-27',
    name: 'SAVINGS WITHDRAWAL LIMIT FEE',
    transactionId: 'ow1DqbBdERHMyamZgED7fygXbZkQoeuBZP8O1'
  },
  {
    amount: 350.8,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-27',
    name: 'SUNCTRYAIR 33779932263 NEW YORK NY 03/24',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQRO0E'
  },
  {
    amount: 5.23,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-03-27',
    name: 'SWEET CHURROS, INC. NEW YORK NY 03/25',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8bb'
  },
  {
    amount: 7,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-27',
    name: 'WOORI JIP NEW YORK NY 03/25',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wqm'
  },
  {
    amount: 32.58,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Arts and Entertainment',
    createdAt: '2017-03-24',
    name: 'AMC EMPIRE 25 #0552 NEW YORK NY 03/22',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDg5V'
  },
  {
    amount: 82.2,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-24',
    name: 'OOTOYA TIMES SQUARE NEW YORK NY 03/22',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyxX'
  },
  {
    amount: -800,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-24',
    name: 'Online Transfer from SAV ...1371 transaction#: 6099591654',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAmq'
  },
  {
    amount: 800,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-24',
    name: 'Online Transfer to CHK ...6254 transaction#: 6099591654 03/24',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJa5qd8LPmCB9KqVM'
  },
  {
    amount: 5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'Excess Activity',
    createdAt: '2017-03-24',
    name: 'SAVINGS WITHDRAWAL LIMIT FEE',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg895naA4HRJx0vY'
  },
  {
    amount: 22.69,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-24',
    name: 'SUBWAY 031925 LONG ISLAND C NY 03/24',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmp5n'
  },
  {
    amount: 7.56,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-03-23',
    name: 'E-K New York NY 03/22',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0D6'
  },
  {
    amount: 6.31,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-03-23',
    name: 'M1 Pomona NY 03/22',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kqgq'
  },
  {
    amount: 6.99,
    categoryBroad: 'Shops',
    categoryDetailed: 'Digital Purchase',
    createdAt: '2017-03-23',
    name: 'Symbolab g.co/payhelp# CA 03/22',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP86X'
  },
  {
    amount: 1.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: '',
    createdAt: '2017-03-23',
    name: 'USA*CANTEEN VEND AMITYVILLE NY 03/22',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9d3L'
  },
  {
    amount: 15.87,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-22',
    name: 'GRACE STREET NEW YORK NY 03/21',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagM4'
  },
  {
    amount: 10.33,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-22',
    name: "McDonald's",
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8bZ'
  },
  {
    amount: 20,
    categoryBroad: 'Shops',
    categoryDetailed: 'Clothing and Accessories',
    createdAt: '2017-03-22',
    name: "Men's Wearhouse",
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve4E'
  },
  {
    amount: -200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-22',
    name: 'Online Transfer from SAV ...1371 transaction#: 6095257535',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopY8L'
  },
  {
    amount: 200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-22',
    name: 'Online Transfer to CHK ...6254 transaction#: 6095257535 03/22',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXanKMJVDYIyQ9dZX'
  },
  {
    amount: 5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'Excess Activity',
    createdAt: '2017-03-22',
    name: 'SAVINGS WITHDRAWAL LIMIT FEE',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpYAE6n9VUbopYkB'
  },
  {
    amount: 25.41,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-03-22',
    name: 'Seamless',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8gq'
  },
  {
    amount: 62,
    categoryBroad: 'Community',
    categoryDetailed: 'Organizations and Associations',
    createdAt: '2017-03-21',
    name: 'EDUCO INTERNATIONAL I GA 03/20',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wq6'
  },
  {
    amount: 90.26,
    categoryBroad: 'Shops',
    categoryDetailed: 'Beauty Products',
    createdAt: '2017-03-21',
    name: 'LUSH LEXINGTON (750) NEW YORK NY 03/20',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRm7'
  },
  {
    amount: 51.55,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-21',
    name: 'TONY DI NAPOLI 3RD AVE NEW YORK NY 03/20',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAmJ'
  },
  {
    amount: 1.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: '',
    createdAt: '2017-03-20',
    name: 'CMSVEND*CV FARMINGDALE AMITYVILLE NY 03/17',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8VP'
  },
  {
    amount: 21.75,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-20',
    name: 'DONG CHUN HONG NEW YORK NY 03/19',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8N4'
  },
  {
    amount: 40,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-20',
    name: 'GAMMEEOK NEW YORK NY 03/18',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrvePy'
  },
  {
    amount: 15.2,
    categoryBroad: 'Travel',
    categoryDetailed: 'Airports',
    createdAt: '2017-03-20',
    name: 'LAGUARDIA-CC-BK 31-1 LONG ISLAND C NY662131 03/20',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8abRv'
  },
  {
    amount: 8,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-03-20',
    name: 'Lyft',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9dqA'
  },
  {
    amount: 23.95,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-03-20',
    name: 'Lyft',
    transactionId: '4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQXgE'
  },
  {
    amount: 9.98,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-20',
    name: "McDonald's",
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLa1'
  },
  {
    amount: 22.8,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-03-20',
    name: 'NYCTAXI5K88 BROOKLYN NY 03/18',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx05E'
  },
  {
    amount: -300,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-20',
    name: 'Online Transfer from SAV ...1371 transaction#: 6087052435',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyxj'
  },
  {
    amount: -200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-20',
    name: 'Online Transfer from SAV ...1371 transaction#: 6090209956',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgYn'
  },
  {
    amount: 300,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-20',
    name: 'Online Transfer to CHK ...6254 transaction#: 6087052435 03/20',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5o3RJqvQCMrveop'
  },
  {
    amount: 200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-20',
    name: 'Online Transfer to CHK ...6254 transaction#: 6090209956 03/20',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6brVvBM8UZYe84Y'
  },
  {
    amount: 5,
    categoryBroad: 'Bank Fees',
    categoryDetailed: 'Excess Activity',
    createdAt: '2017-03-20',
    name: 'SAVINGS WITHDRAWAL LIMIT FEE',
    transactionId: '4OE94dj1AKUDONE94qjRs6p570oE1mFkNQXEd'
  },
  {
    amount: 3.76,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-20',
    name: 'Starbucks',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpZN'
  },
  {
    amount: 40.49,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-20',
    name: 'THIRD FLOOR CAFE NEW YORK NY 03/18',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9KqYz'
  },
  {
    amount: 5.92,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-20',
    name: 'TOUS LES JOURS NEW YORK NY 03/18',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYNv'
  },
  {
    amount: 29.03,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-03-20',
    name: 'TRADE FAIR #7 LONG ISLAND C NY 03/19',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8vkK'
  },
  {
    amount: 10.15,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-17',
    name: 'GREGORYS COFFEE 31 New York NY 03/16',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQrp'
  },
  {
    amount: 65.56,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-17',
    name: 'HANBAT RESTAURANT NEW YORK NY 03/16',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07PM'
  },
  {
    amount: 88.99,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-16',
    name: 'DONG CHUN HONG NEW YORK NY 03/14',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqyR'
  },
  {
    amount: 7.62,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-03-16',
    name: 'SWEET CHURROS, INC. NEW YORK NY 03/16',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9Er'
  },
  {
    amount: 13.01,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-16',
    name: 'Starbucks',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7pqd'
  },
  {
    amount: 31.29,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-16',
    name: 'TAMASHII ASTORIA NY 03/15',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4bL'
  },
  {
    amount: 16.24,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-15',
    name: 'GRACE STREET NEW YORK NY 03/14',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3ZEv'
  },
  {
    amount: 65.55,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-15',
    name: 'KENKA RESTAURANT NEW YORK NY 03/13',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAVr'
  },
  {
    amount: 23.46,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-03-15',
    name: 'Lyft',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvbgR'
  },
  {
    amount: -300,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-14',
    name: 'Online Transfer from SAV ...1371 transaction#: 6074759217',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8X9d'
  },
  {
    amount: 300,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-14',
    name: 'Online Transfer to CHK ...6254 transaction#: 6074759217 03/14',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm73L4pZD5cBE8vAY'
  },
  {
    amount: 6.53,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-14',
    name: 'SUBWAY 031925 LONG ISLAND C NY 03/13',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pV3'
  },
  {
    amount: 16.1,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-03-14',
    name: 'Seamless',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38mB'
  },
  {
    amount: 3.76,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-14',
    name: 'Starbucks',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3OO'
  },
  {
    amount: 32.95,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-03-14',
    name: 'UBER *US MAR13 I6NA CA 03/14',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oa5B'
  },
  {
    amount: 200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2017-03-13',
    name: 'ATM WITHDRAWAL 002747 03/11349 5TH A',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7JkOoR8NUROXLYX'
  },
  {
    amount: 6.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-13',
    name: 'GRACE STREET NEW YORK NY 03/11',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3gPQ'
  },
  {
    amount: 20.7,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-03-13',
    name: 'Lyft',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wZp'
  },
  {
    amount: 11.28,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-03-13',
    name: 'M2 New York NY 03/10',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jd56'
  },
  {
    amount: 18.8,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-03-13',
    name: 'QUEENS MEDALLION ENTE LONG ISLAND NY 03/11',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyV7j'
  },
  {
    amount: 25.76,
    categoryBroad: 'Shops',
    categoryDetailed: 'Pharmacies',
    createdAt: '2017-03-13',
    name: 'Rite Aid',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZEZ'
  },
  {
    amount: 2.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-13',
    name: 'WOORI JIP NEW YORK NY 03/11',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30Zv'
  },
  {
    amount: 5.25,
    categoryBroad: 'Shops',
    categoryDetailed: 'Arts and Crafts',
    createdAt: '2017-03-10',
    name: 'ARTIST & CRAFTSMAN LIC LONG ISLAND NY696306 03/10',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagX4'
  },
  {
    amount: 100,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Withdrawal',
    createdAt: '2017-03-10',
    name: 'ATM WITHDRAWAL 000158 03/101260 BROA',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz1b3XaKnSr8ab5E'
  },
  {
    amount: 18.2,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-03-10',
    name: 'FAMILY MARKET ASTORIA NY 03/08',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8oZm'
  },
  {
    amount: 7.75,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-10',
    name: 'GRACE STREET NEW YORK NY 03/09',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjNa7'
  },
  {
    amount: 9.99,
    categoryBroad: 'Shops',
    categoryDetailed: 'Digital Purchase',
    createdAt: '2017-03-10',
    name: 'Pixonic LLC g.co/payhelp# CA 03/09',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jv5V'
  },
  {
    amount: 9.53,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-10',
    name: 'SUBWAY 031925 LONG ISLAND C NY 03/10',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQROj6'
  },
  {
    amount: 9.8,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-10',
    name: 'TOUS LES JOURS NEW YORK NY 03/09',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rwx'
  },
  {
    amount: 125.21,
    categoryBroad: 'Shops',
    categoryDetailed: 'Department Stores',
    createdAt: '2017-03-09',
    name: "Macy's",
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wm6'
  },
  {
    amount: 4.45,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-09',
    name: 'Panera Bread',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8zZ'
  },
  {
    amount: 62.68,
    categoryBroad: 'Shops',
    categoryDetailed: '',
    createdAt: '2017-03-08',
    name: 'Amazon',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqy6j'
  },
  {
    amount: 12,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-03-08',
    name: 'FRESH FRUIT & GROCERY ASTORIA NY 03/06',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRo7'
  },
  {
    amount: 13.4,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-03-08',
    name: 'Lyft',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAZJ'
  },
  {
    amount: 1.75,
    categoryBroad: 'Food and Drink',
    categoryDetailed: '',
    createdAt: '2017-03-07',
    name: 'CMSVEND*CV FARMINGDALE AMITYVILLE NY 03/06',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kqnz'
  },
  {
    amount: 2608.45,
    categoryBroad: 'Service',
    categoryDetailed: 'Financial',
    createdAt: '2017-03-07',
    name: 'LAG01 CUNY LAGUA PAYMENT SV 000001163181 WEB ID: 9751000422',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9dEA'
  },
  {
    amount: -3000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-07',
    name: 'Online Transfer from SAV ...1371 transaction#: 6059086447',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgjn'
  },
  {
    amount: 3000,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-07',
    name: 'Online Transfer to CHK ...6254 transaction#: 6059086447 03/07',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9JqEwoY7HmNjQ7D'
  },
  {
    amount: 20,
    categoryBroad: 'Service',
    categoryDetailed: 'Personal Care',
    createdAt: '2017-03-07',
    name: 'PAYGATE_KIWDISK 45527 SEOUL 03/06',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8EP'
  },
  {
    amount: 21.6,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-03-07',
    name: 'Seamless',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpzN'
  },
  {
    amount: 49,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-03-07',
    name: 'TREEHOUSE FL 03/06',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopY4v'
  },
  {
    amount: 12.74,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-03-07',
    name: 'UBER *US MAR07 JL3E CA 03/07',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0gE'
  },
  {
    amount: 22.23,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-06',
    name: 'DONG CHUN HONG NEW YORK NY 03/05',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAZr'
  },
  {
    amount: 10.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-06',
    name: 'GRACE STREET NEW YORK NY 03/04',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4yL'
  },
  {
    amount: 16.4,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-06',
    name: 'GRACE STREET NEW YORK NY 03/04',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9qr'
  },
  {
    amount: 8.94,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-03-06',
    name: 'Lyft',
    transactionId: '4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQXoE'
  },
  {
    amount: 116.5,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2017-03-06',
    name: 'Metropolitan Transportation Authority',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7pgd'
  },
  {
    amount: 23.3,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-03-06',
    name: 'NYCTAXI1R58 NEW YORK NY 03/04',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqXR'
  },
  {
    amount: 9.8,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-03-06',
    name: 'NYCTAXI5P63 LONG ISLAND NY 03/05',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3Zqv'
  },
  {
    amount: 19.3,
    categoryBroad: 'Travel',
    categoryDetailed: 'Taxi',
    createdAt: '2017-03-06',
    name: 'NYCTAXI5P63 LONG ISLAND NY 03/05',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8Xxd'
  },
  {
    amount: 45.73,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-06',
    name: 'ON NOW NEW YORK NY 03/05',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvb6R'
  },
  {
    amount: -390,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-06',
    name: 'Online Transfer from SAV ...1371 transaction#: 6053771886',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrveby'
  },
  {
    amount: 390,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-06',
    name: 'Online Transfer to CHK ...6254 transaction#: 6053771886 03/06',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpOyKV8YMS6g07BO'
  },
  {
    amount: 46.91,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-06',
    name: 'PELICANA USA SUNNYSIDE NY 03/02',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8A4'
  },
  {
    amount: 3.76,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-06',
    name: 'Starbucks',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXLn1'
  },
  {
    amount: 6.97,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-06',
    name: 'Starbucks',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8vLK'
  },
  {
    amount: 44.73,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-06',
    name: 'TAMASHII ASTORIA NY 03/03',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8ab4v'
  },
  {
    amount: 18.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-06',
    name: 'TREATSA PIZZA CORP NEW YORK NY 03/03',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07AM'
  },
  {
    amount: 21,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-06',
    name: 'TREATSA PIZZA CORP NEW YORK NY 03/03',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQqp'
  },
  {
    amount: -800,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-03-03',
    name: 'ATM CASH DEPOSIT 03/02 4610 QUEENS BLVD',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oaeZ'
  },
  {
    amount: 15.57,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-03-03',
    name: 'FAMILY MARKET ASTORIA NY 03/01',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pX3'
  },
  {
    amount: -0.09,
    categoryBroad: 'Interest',
    categoryDetailed: 'Interest Earned',
    createdAt: '2017-03-03',
    name: 'INTEREST PAYMENT',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKXyo0PJnSO1x4oa'
  },
  {
    amount: 6,
    categoryBroad: 'Bank Fees',
    categoryDetailed: '',
    createdAt: '2017-03-03',
    name: 'MONTHLY SERVICE FEE',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oaBB'
  },
  {
    amount: 6.42,
    categoryBroad: 'Shops',
    categoryDetailed: 'Beauty Products',
    createdAt: '2017-03-03',
    name: 'NATURE REPUBLIC NEW YORK NY 03/02',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3XO'
  },
  {
    amount: -200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-03',
    name: 'Online Transfer from SAV ...1371 transaction#: 6052614226',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38KB'
  },
  {
    amount: 200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-03-03',
    name: 'Online Transfer to CHK ...6254 transaction#: 6052614226 03/03',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5aBpow8ZcQY7pvA'
  },
  {
    amount: 148.75,
    categoryBroad: 'Service',
    categoryDetailed: 'Telecommunication Services',
    createdAt: '2017-03-02',
    name: 'BILL PAYMENT WWW.ATT.COM TX 03/01',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30Mv'
  },
  {
    amount: 4.99,
    categoryBroad: 'Shops',
    categoryDetailed: 'Digital Purchase',
    createdAt: '2017-03-02',
    name: 'Pixonic LLC g.co/payhelp# CA 03/02',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyV1j'
  },
  {
    amount: 4.14,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-03-02',
    name: 'SWEET CHURROS, INC. NEW YORK NY 03/02',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3gbQ'
  },
  {
    amount: 25.75,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-03-02',
    name: 'Seamless',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jda6'
  },
  {
    amount: 3.76,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-03-01',
    name: 'Starbucks',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1w3p'
  },
  {
    amount: 5.25,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-28',
    name: 'GRACE STREET NEW YORK NY 02/27',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8oNm'
  },
  {
    amount: 16.82,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-28',
    name: 'TREATSA PIZZA CORP NEW YORK NY 02/27',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZ6Z'
  },
  {
    amount: -2240,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-02-27',
    name: 'ATM CASH DEPOSIT 02/26 1260 BROADWAY',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kb9mK43wsKZB900'
  },
  {
    amount: -266,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-02-27',
    name: 'ATM CASH DEPOSIT 02/26 1260 BROADWAY',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svzp65krPefJZvbrB'
  },
  {
    amount: -35,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-02-27',
    name: 'ATM CASH DEPOSIT 02/26 1260 BROADWAY',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEq5jeR8X9UmQ3Z7A'
  },
  {
    amount: -420,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-02-27',
    name: 'ATM CHECK DEPOSIT 02/26 1260 BROADWAY',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4LXAdnzbVf9qkAj8'
  },
  {
    amount: 34.07,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-27',
    name: 'BCD TOFU HOUSE NEW YORK NY 02/26',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8AP'
  },
  {
    amount: 41.4,
    categoryBroad: 'Shops',
    categoryDetailed: 'Convenience Stores',
    createdAt: '2017-02-27',
    name: 'CIRCLE NYC INC NEW YORK NY 02/25',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQROZ6'
  },
  {
    amount: 1.5,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-02-27',
    name: 'FOOD GALLERY 32 NY NY 02/25',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRM7'
  },
  {
    amount: 9.56,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-27',
    name: 'GRACE STREET NEW YORK NY 02/25',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKA9J'
  },
  {
    amount: 13,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-27',
    name: 'GRACE STREET NEW YORK NY 02/25',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8KZ'
  },
  {
    amount: 106,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-02-27',
    name: 'KARAOKE WOW NEW YORK NY 02/25',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkago4'
  },
  {
    amount: 10.33,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-27',
    name: "McDonald's",
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjNx7'
  },
  {
    amount: -500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-02-27',
    name: 'Online Transfer from SAV ...1371 transaction#: 6032940983',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvwV'
  },
  {
    amount: 500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-02-27',
    name: 'Online Transfer to CHK ...6254 transaction#: 6032940983 02/27',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7ZBg4Ypn1CmB8XqY'
  },
  {
    amount: 12.39,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-27',
    name: 'Panera Bread',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpeN'
  },
  {
    amount: 13.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-27',
    name: 'ROLL & KATSU KITCHE New York NY 02/25',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wO6'
  },
  {
    amount: 10.89,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-02-27',
    name: "RUBY'S CANDY & GROCERY ASTORIA NY 02/23",
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rkx'
  },
  {
    amount: 9.53,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-27',
    name: 'SUBWAY 031925 LONG ISLAND C NY 02/26',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgkn'
  },
  {
    amount: 5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-27',
    name: 'WOORI JIP NEW YORK NY 02/25',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqynj'
  },
  {
    amount: 27.25,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-24',
    name: 'GRACE STREET NEW YORK NY 02/23',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0aE'
  },
  {
    amount: 14.52,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-02-24',
    name: 'Seamless',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kqxz'
  },
  {
    amount: 4.99,
    categoryBroad: 'Shops',
    categoryDetailed: 'Digital Purchase',
    createdAt: '2017-02-23',
    name: 'Altitude Gam g.co/payhelp# CA 02/23',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYDv'
  },
  {
    amount: 12,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-23',
    name: 'CHIPOTLE 2135 NEW YORK NY 02/22',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrvexy'
  },
  {
    amount: 35.01,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-02-23',
    name: 'Seamless',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9d4A'
  },
  {
    amount: 20,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2017-02-22',
    name: 'Metropolitan Transportation Authority',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8O4'
  },
  {
    amount: 39.75,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-21',
    name: 'BANGIA NEW YORK NY 02/16',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wvV'
  },
  {
    amount: 19.58,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-21',
    name: 'DADAM New York NY 02/20',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0aM'
  },
  {
    amount: 40,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-21',
    name: 'DONG CHUN HONG NEW YORK NY 02/19',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpe6'
  },
  {
    amount: 6.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-21',
    name: 'GRACE STREET NEW YORK NY 02/18',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgkq'
  },
  {
    amount: 19.99,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-02-21',
    name: 'H MART NEW YORK NY 02/16',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8aB'
  },
  {
    amount: 16.59,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-21',
    name: 'Lyft',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8Aa'
  },
  {
    amount: 17.63,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-21',
    name: 'Lyft',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLR3j'
  },
  {
    amount: 40.69,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-21',
    name: 'Lyft',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyJ0'
  },
  {
    amount: -300,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-02-21',
    name: 'Online Transfer from SAV ...1371 transaction#: 6019465459',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagb5'
  },
  {
    amount: 300,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-02-21',
    name: 'Online Transfer to CHK ...6254 transaction#: 6019465459 02/21',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJrEwoxqzcZv38qw'
  },
  {
    amount: 4.57,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-02-21',
    name: 'SWEET CHURROS, INC. New York NY 02/20',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9d4o'
  },
  {
    amount: 19.42,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-02-21',
    name: 'Seamless',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAq6'
  },
  {
    amount: 23.57,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-02-21',
    name: 'Seamless',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kqx7'
  },
  {
    amount: 9.15,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-17',
    name: 'GREGORYS COFFEE 31 New York NY 02/16',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8OE'
  },
  {
    amount: 52.11,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-17',
    name: 'Lyft',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrvex0'
  },
  {
    amount: 18.33,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-02-17',
    name: 'Seamless',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYDr'
  },
  {
    amount: 15,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-16',
    name: 'Lyft',
    transactionId: '4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQX4B'
  },
  {
    amount: 25.34,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-16',
    name: 'Lyft',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8vDk'
  },
  {
    amount: 5.57,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-02-16',
    name: 'SWEET CHURROS, INC. NEW YORK NY 02/16',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXL7n'
  },
  {
    amount: 15.15,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-15',
    name: 'WOORI JIP NEW YORK NY 02/13',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8abqq'
  },
  {
    amount: 15,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-14',
    name: 'Lyft',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4B4'
  },
  {
    amount: 32.84,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-14',
    name: 'Lyft',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7por'
  },
  {
    amount: 41.99,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-14',
    name: 'Lyft',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqe5'
  },
  {
    amount: 45.48,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-14',
    name: 'Lyft',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9gp'
  },
  {
    amount: 3.21,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-14',
    name: 'PARIS BAGUETTE-NEW YOR NEW YORK NY 02/12',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQe4'
  },
  {
    amount: 27,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-14',
    name: 'PHO 32 NEW YORK NY 02/12',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g074y'
  },
  {
    amount: 46.26,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-13',
    name: 'DONG CHUN HONG NEW YORK NY 02/10',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38L4'
  },
  {
    amount: 12.6,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-13',
    name: 'GRACE STREET NEW YORK NY 02/11',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wO1'
  },
  {
    amount: 2.17,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-02-13',
    name: 'H MART NEW YORK NY 02/12',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZDn'
  },
  {
    amount: 120,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-02-13',
    name: 'KARAOKE CITY NEW YORK NY 02/11',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVnD'
  },
  {
    amount: 54.38,
    categoryBroad: 'Shops',
    categoryDetailed: 'Beauty Products',
    createdAt: '2017-02-13',
    name: 'LUSH HERALD SQUARE(762) NEW YORK NY 02/11',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30ON'
  },
  {
    amount: 15,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-13',
    name: 'Lyft',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3zM'
  },
  {
    amount: 18.34,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-13',
    name: 'Lyft',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8ogk'
  },
  {
    amount: 20,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-13',
    name: 'Lyft',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8X7v'
  },
  {
    amount: 66.87,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-13',
    name: 'Lyft',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oaz9'
  },
  {
    amount: 135.77,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-13',
    name: 'Lyft',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3ZNz'
  },
  {
    amount: 47.06,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-13',
    name: 'MUI NEW YORK NY 02/10',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jd6P'
  },
  {
    amount: 20,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2017-02-13',
    name: 'Metropolitan Transportation Authority',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jvom'
  },
  {
    amount: -200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-02-13',
    name: 'Online Transfer from SAV ...1371 transaction#: 6001081178',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvb0j'
  },
  {
    amount: -500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-02-13',
    name: 'Online Transfer from SAV ...1371 transaction#: 6001748183',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAbo'
  },
  {
    amount: 200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-02-13',
    name: 'Online Transfer to CHK ...6254 transaction#: 6001081178 02/13',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKb3pxAzXH0K4pP0'
  },
  {
    amount: 500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-02-13',
    name: 'Online Transfer to CHK ...6254 transaction#: 6001748183 02/13',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK9d1p35LHaoL390'
  },
  {
    amount: 19.88,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-02-13',
    name: 'Seamless',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pOb'
  },
  {
    amount: 11.6,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-13',
    name: 'UBER *US FEB11 SLBG CA 02/11',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3grL'
  },
  {
    amount: 23.89,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-10',
    name: 'GRACE STREET NEW YORK NY 02/09',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQRO71'
  },
  {
    amount: 15,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-10',
    name: 'Lyft',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagR5'
  },
  {
    amount: 13.98,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-02-10',
    name: 'Seamless',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4rZa'
  },
  {
    amount: 5.72,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-10',
    name: 'TOUS LES JOURS NEW YORK NY 02/09',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjN1M'
  },
  {
    amount: 3.26,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-02-09',
    name: 'H MART 38 W. 32ND ST. NEW YORK NY 02/09',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8rB'
  },
  {
    amount: 19.42,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-02-09',
    name: 'H MART 38 W. 32ND ST. NEW YORK NY 02/09',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wEV'
  },
  {
    amount: 1.75,
    categoryBroad: 'Food and Drink',
    categoryDetailed: '',
    createdAt: '2017-02-08',
    name: 'CMSVEND*CV FARMINGDALE AMITYVILLE NY 02/07',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyX0'
  },
  {
    amount: 16.32,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-08',
    name: 'KOBEQUE NEW YORK NY 02/06',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRgj'
  },
  {
    amount: 8,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-08',
    name: 'Lyft',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAE6'
  },
  {
    amount: 20,
    categoryBroad: 'Travel',
    categoryDetailed: 'Public Transportation Services',
    createdAt: '2017-02-07',
    name: 'Metropolitan Transportation Authority',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgPq'
  },
  {
    amount: 18.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-06',
    name: 'DADAM New York NY 02/04',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0wM'
  },
  {
    amount: 7.75,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-06',
    name: 'GRACE STREET NEW YORK NY 02/04',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYdr'
  },
  {
    amount: 44,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-06',
    name: 'JONGRO BBQ NEW YORK NY 02/05',
    transactionId: 'aKbM8k1YaxIkX49oeBNmIN6V7DzxdytZYe8BE'
  },
  {
    amount: 8,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-06',
    name: 'Lyft',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrveX0'
  },
  {
    amount: -500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-02-06',
    name: 'Online Transfer from SAV ...1371 transaction#: 5985193589',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmp36'
  },
  {
    amount: 500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-02-06',
    name: 'Online Transfer to CHK ...6254 transaction#: 5985193589 02/06',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbD4BrjEN9FL6oaMZ'
  },
  {
    amount: 3.76,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-06',
    name: 'PARIS BAGUETTE-NEW YOR NEW YORK NY 02/02',
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8qa'
  },
  {
    amount: 6.97,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-02-06',
    name: 'SWEET CHURROS, INC. New York NY 02/04',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9dgo'
  },
  {
    amount: 31.8,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-02-06',
    name: 'Seamless',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kq87'
  },
  {
    amount: 31.89,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-02-06',
    name: 'TRADE FAIR #7 LONG ISLAND C NY 02/05',
    transactionId: '4OE94dj1AKUDONE94qjRs6p04OQBZDtkNQX9B'
  },
  {
    amount: 18.73,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-02-03',
    name: 'FAMILY MARKET ASTORIA NY 02/01',
    transactionId: 'rD7qA9xLnwtL4xy1gMqBcm74BMbzYAUBE8vRk'
  },
  {
    amount: 15.74,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-03',
    name: 'GRACE STREET NEW YORK NY 02/02',
    transactionId: '0zEoy9bw3qHD8ZJAnLPvsqz36p5woNhr8abwq'
  },
  {
    amount: -0.08,
    categoryBroad: 'Interest',
    categoryDetailed: 'Interest Earned',
    createdAt: '2017-02-03',
    name: 'INTEREST PAYMENT',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJvYV5X6DeCb3jd1w'
  },
  {
    amount: 12.74,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-03',
    name: 'Lyft',
    transactionId: 'jxdYeJvz79fJ0Y6vMr79sz7ODj0Y4nfROXL6n'
  },
  {
    amount: 6,
    categoryBroad: 'Bank Fees',
    categoryDetailed: '',
    createdAt: '2017-02-03',
    name: 'MONTHLY SERVICE FEE',
    transactionId: 'vBoKJdmqw1UqN5veDMKPtP9EmM8ekyImNjQ44'
  },
  {
    amount: 15.87,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-02-02',
    name: 'FAMILY MARKET ASTORIA NY 01/31',
    transactionId: 'kJwdz8vY9VI8R7LNg4zYtPqrRZMmEVIRwBqO5'
  },
  {
    amount: 13.84,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-02-02',
    name: 'Lyft',
    transactionId: 'KA9yJZO7nRF3ZXn95pjEFA5pmJ9KveSQY7pwr'
  },
  {
    amount: 10.89,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-02',
    name: 'STRAND SMOKEHOUSE ASTORIA NY 02/01',
    transactionId: 'yK7vgL3yDBIyDErXjMvoUqKoOMr7BwhO1x4Z4'
  },
  {
    amount: 4.57,
    categoryBroad: 'Shops',
    categoryDetailed: 'Food and Beverage Store',
    createdAt: '2017-02-02',
    name: 'SWEET CHURROS, INC. NEW YORK NY 02/02',
    transactionId: '3oO7jMxDkyfwVdg6BPO4F1kmD0N7yJUKZB9yp'
  },
  {
    amount: 31.85,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-02-02',
    name: 'Seamless',
    transactionId: 'ALmdwAp4b5CDZ0NJexYgsqpKnExa51h6g07Dy'
  },
  {
    amount: 20,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-02-01',
    name: '85281700721 HKTW 4552 SEOUL 01/31',
    transactionId: 'BDNwLvQagotEp4d3aJP0U4Ld738rxPH9qkAEo'
  },
  {
    amount: 22.54,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-02-01',
    name: 'Seamless',
    transactionId: 'qLwPK7j6QdC6gw3DKMP7Svz5JMbRmNtJZvbpj'
  },
  {
    amount: 32.96,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-02-01',
    name: 'TRADE FAIR #7 LONG ISLAND C NY 01/31',
    transactionId: 'P4Z0O7dY6LFg4wkYBA6KtEqeAdNzQ7hmQ3ZPz'
  },
  {
    amount: 8.47,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-01-31',
    name: 'GRACE STREET NEW YORK NY 01/30',
    transactionId: 'w3jkZwoB6PHB6m0D8MkqIbDroM8pkOHL6oaN9'
  },
  {
    amount: 13.91,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-01-31',
    name: 'Lyft',
    transactionId: 'LvmKZ509pQUjDgB07p6YSVKpBYn1QwU0K4pgb'
  },
  {
    amount: 31.04,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-01-31',
    name: 'Seamless',
    transactionId: '1ozbkVZ6yBfRozrd1Dx0s7Z4XdL6macmB8XNv'
  },
  {
    amount: 120,
    categoryBroad: 'Shops',
    categoryDetailed: 'Clothing and Accessories',
    createdAt: '2017-01-31',
    name: 'TOMI JAZZ NEW YORK NY 01/29',
    transactionId: 'DPQLqjnJ9gFXZ0dNDw8QumJwRPkvA5UZv38b4'
  },
  {
    amount: 5.1,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-01-31',
    name: 'TOUS LES JOURS NEW YORK NY 01/30',
    transactionId: '6oBO86zq0AfwQNL1a3bDFPK1r8AOyaIaoL3RM'
  },
  {
    amount: 4.99,
    categoryBroad: 'Shops',
    categoryDetailed: 'Convenience Stores',
    createdAt: '2017-01-30',
    name: '7-Eleven',
    transactionId: 'ndDL1oRYMEIEVOPw5MLeUd8XAeDLn6UAn4r9a'
  },
  {
    amount: 178.75,
    categoryBroad: 'Service',
    categoryDetailed: 'Telecommunication Services',
    createdAt: '2017-01-30',
    name: 'BILL PAYMENT WWW.ATT.COM TX 01/28',
    transactionId: 'M0AkomrVXdtRzq3xQyYOszKypj7A0DfMeV8YB'
  },
  {
    amount: 23,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-01-30',
    name: 'BROADWAY STATION ASTORIA NY 01/26',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1QO8Vzy6HOZ3gQL'
  },
  {
    amount: 30.03,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-01-30',
    name: 'DONG CHUN HONG NEW YORK NY 01/29',
    transactionId: 'Rx4rQV6YD1fomLvYApD3UjZpqbd5Y9HyQRO31'
  },
  {
    amount: 6,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-01-30',
    name: 'GREGORYS COFFEE 31 New York NY 01/28',
    transactionId: 'QaQjE9wYLDfpr6AY5vLJhaPp4DdMyrIEDjNrM'
  },
  {
    amount: 61.33,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Bar',
    createdAt: '2017-01-30',
    name: 'KARAOKE WOW NEW YORK NY 01/26',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0MzA1PnXYHQx30bN'
  },
  {
    amount: 70,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-01-30',
    name: 'KONDO RESTAURANT NY 01/30',
    transactionId: 'EqJD3r18V7t4opwOB6v1HXMgnZzrVmIpkagD5'
  },
  {
    amount: 8,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-01-30',
    name: 'Lyft',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MZdD6K3bcdJ1wK1'
  },
  {
    amount: -200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-01-30',
    name: 'Online Transfer from SAV ...1371 transaction#: 5967620689',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VzMpw64PHMDyVjD'
  },
  {
    amount: -500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-01-30',
    name: 'Online Transfer from SAV ...1371 transaction#: 5969127354',
    transactionId: 'dvgQ70AY8ZUEBJn4YK87UJv5b4xBnwtb3jdOP'
  },
  {
    amount: 200,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-01-30',
    name: 'Online Transfer to CHK ...6254 transaction#: 5967620689 01/30',
    transactionId: 'mZg6L5aYOMf58V1brO6eI0VvxzNDaKFMDyV4L'
  },
  {
    amount: 500,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Internal Account Transfer',
    createdAt: '2017-01-30',
    name: 'Online Transfer to CHK ...6254 transaction#: 5969127354 01/30',
    transactionId: 'zko09DvK13IK1pgAqM0ytj1BKQR0PEtOZ3gB7'
  },
  {
    amount: 18.33,
    categoryBroad: 'Service',
    categoryDetailed: 'Food and Beverage',
    createdAt: '2017-01-30',
    name: 'Seamless',
    transactionId: 'NjQAgbrOdwF8jYy7XKdPtE6KrqjYz7hRJrZkn'
  },
  {
    amount: 6.09,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Arts and Entertainment',
    createdAt: '2017-01-30',
    name: 'UA KAUFMAN ASTORIA 14 ASTORIA NY 01/27',
    transactionId: 'p6d13g0wRQFwRPBZVM1eFnAEJMrYgatJ1jv8m'
  },
  {
    amount: 39.9,
    categoryBroad: 'Recreation',
    categoryDetailed: 'Arts and Entertainment',
    createdAt: '2017-01-30',
    name: 'UA KAUFMAN ASTORIA 14 ASTORIA NY 01/27',
    transactionId: 'X6MZDLBYyKFL03QEAJybcjNZa9rxpwH4w8onk'
  },
  {
    amount: 15.5,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-01-27',
    name: 'GRACE STREET NEW YORK NY 01/26',
    transactionId: 'VmAJdwyYB3iwMqpE8aBrFpM5j1y3LOtrwLRxj'
  },
  {
    amount: 37.03,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-01-27',
    name: 'THIRD FLOOR CAFE NEW YORK NY 01/27',
    transactionId: '7QgM5LNBjvFXD3RV6yZ1ugdvYqEZxntQjqyL0'
  },
  {
    amount: 14.15,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-01-27',
    name: 'TREATSA PIZZA CORP NEW YORK NY 01/26',
    transactionId: '9o9R71Ky4jfoK8zjOkQNUVNKq69jZoUdDKAB6'
  },
  {
    amount: 26.6,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-01-27',
    name: 'UBER *US JAN26 HX7U CA 01/27',
    transactionId: 'grAXR4gYobC4y5ZKpvoeHn4YqyK7oNtqLDgVq'
  },
  {
    amount: 70,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Third Party',
    createdAt: '2017-01-27',
    name: 'Venmo',
    transactionId: 'Or0v9g5Yw6CD8dRYmkwQs9Okg0XYr5C8a3wRV'
  },
  {
    amount: -800,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-01-26',
    name: 'ATM CASH DEPOSIT 01/26 1260 BROADWAY',
    transactionId: 'YLr5PD9YKkCD4yVEgOKxs0Mmdz7EqvFQx30pA'
  },
  {
    amount: -700,
    categoryBroad: 'Transfer',
    categoryDetailed: 'Deposit',
    createdAt: '2017-01-26',
    name: 'ATM CASH DEPOSIT 01/26 1260 BROADWAY',
    transactionId: 'e0KnVjgYZ5tRK89rjkZes7MB1ZmwxLCdJ1weq'
  },
  {
    amount: 6.84,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-01-26',
    name: 'GRACE STREET NEW YORK NY 01/25',
    transactionId: '5oEVxw5PvkfxK95D1B6bFJadZvRwp1tB9Kqa7'
  },
  {
    amount: 3.26,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-01-26',
    name: 'H MART 38 W. 32ND ST. NEW YORK NY 01/26',
    transactionId: '8o1EbDR3r0fV16O9eX7oUXaMNzymxgIyQ9dno'
  },
  {
    amount: 20.91,
    categoryBroad: 'Shops',
    categoryDetailed: 'Supermarkets and Groceries',
    createdAt: '2017-01-26',
    name: 'H MART 38 W. 32ND ST. NEW YORK NY 01/26',
    transactionId: 'ZDvoB1eYkAt1rKpEOwkBCwg5KJ3MrEtRJx0dM'
  },
  {
    amount: 7.08,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-01-26',
    name: "PAIN D'AVIGNON AT T New York NY 01/25",
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8Na'
  },
  {
    amount: 8.2,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-01-26',
    name: 'TOUS LES JOURS NEW YORK NY 01/24',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpY6'
  },
  {
    amount: 55,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-01-25',
    name: 'HER NAME IS HAN NEW YORK NY 01/23',
    transactionId: 'JkO3a8bgQEIJkdPNwqK7sNpE7y40vetbopYRr'
  },
  {
    amount: 7.2,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-01-25',
    name: 'UBER *US JAN25 YPQJ CA 01/25',
    transactionId: 'xy9Ao6J3LqH3LNpQXMAVFp5RM8e0ydtMrve80'
  },
  {
    amount: 16.88,
    categoryBroad: 'Travel',
    categoryDetailed: 'Car Service',
    createdAt: '2017-01-23',
    name: 'Lyft',
    transactionId: 'bkKE5A1YxJIzraYv7OxVTe1mqQMz4XHqwmpY0'
  },
  {
    amount: 25.41,
    categoryBroad: 'Food and Drink',
    categoryDetailed: 'Restaurants',
    createdAt: '2017-01-23',
    name: "Papa John's",
    transactionId: 'ow1DqbBdERHMyamZgED7fygZBN8pKjhBZP8N8'
  }
];

module.exports = purchaseData;
