const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays.futureId&&holidays.futureId.name || 'ID {futureId} not created yet')

let copied = holidays[christmas]
copied={
    
        name: 'X-mas',
    
}



let correctDate = new Date(copied.date)
correctDate.setHours(0);
correctDate.setMinutes(0);
const isEarlier = correctDate.getTime() <holidays[6].date.getTime();
console.log('New date is earlier:', isEarlier)
if (isEarlier){
    copied.date = correctDate
}
 
 console.log('ID change:', holidays[christmas].id != copied.id);
 console.log('Name change:', holidays[christmas].name != copied.name || copied.name);
 console.log('Date change:', holidays[christmas].date != copied.date || copied.date.tolocaleDateString('en-GB'));

 const firstHolidayTimestamp = Math.min(
    //holidays[0].date.getTime(), 
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const lastHolidayTimestamp = Math.max(
    //holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),  
)
const firstDay= new Date(firstHolidayTimestamp).toLocaleDateString('en-GB',{
    day:'2-digit',
    month:'2-digit',
    year:'numeric',
}
);

const lastDay= new Date(lastHolidayTimestamp).toLocaleDateString('en-GB',{
    day:'2-digit',
    month:'2-digit',
    year:'numeric',
}
);

console.log(`first Holiday: ${firstDay}`);
console.log(`Last Holiday: ${lastDay}`);


const RandomDay= holidays[Math.floor(Math.random()* 9)].date.toLocaleDateString('en-GB',{
    day:'2-digit',
    month:'2-digit',
    year:'numeric',
});

console.log(`Random holiday:${RandomDay}`);


