user = User.first
user.cases.create(number: '1A', title: 'Important', client: 'Best Buy')
user.cases.create(number: '2B', title: 'Expensive', client: 'Trump')
user.cases.create(number: '3C', title: 'Tricky', client: 'Elon Musk')