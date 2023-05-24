const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo ={
	firstName : leoName ,
	balance : leoBalance*-1,
	accessId : '47afb389-8014-4d0b-aff3-e40203d2107f',
	currency:'R',
	age : 24,
	address: {
		number : leoNumber,
		street : leoStreet,
		postalcode : leoPostal,
	}
}

const sarah= {
	fullname : sarahName + sarahSurname,
	age : 62,
	accessId : '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	currency: 'R',
	balance : sarahBalance*-1,
	address: {
		number : sarahNumber,
		street : sarahStreet,
		postalcode : sarahPostal,
	}
}

console.log('\n', sarah.fullname, '\n',sarah.age,'\n',sarah.accessId,'\n',sarah.currency, sarah.balance,'\n', sarah.address.number,'\n',sarah.address.street,'\n',sarah.address.postalcode,'\n',)
console.log('\n', leo.firstName, '\n',leo.age,'\n',leo.accessId, '\n',leo.currency, leo.balance,'\n', leo.address.number,'\n',leo.address.street,'\n',leo.address.postalcode,'\n',)

//console.log(leo, leo[address][postal-code])
//console.log(sarah, sarah[address][postal-code])