user = User.first
user.cases.create(number: '1234', title: 'UT v. TAMU', client: 'UT Legal')
user.cases.create(number: '5678', title: 'Harris County Pollution Fine', client: 'Shell Legal')
user.cases.create(number: '4567', title: 'Dell Intellectual Property Theft', client: 'Dell Legal')