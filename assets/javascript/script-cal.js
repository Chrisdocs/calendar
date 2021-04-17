let DateTime = luxon.DateTime;

var dtfull = DateTime.fromObject({zone: 'America/Los_Angeles', numberingSystem: 'beng'})

DateTime.fromISO("2017-05-15")          //=> May 15, 2017 at midnight
DateTime.fromISO("2017-05-15T08:30:00") //=> May 15, 2017 at 8:30

var dt = DateTime.now();
// console.log(dt);

//get specific components of the time; ie year, month, week, day, minute, second

// var year = dt.year;
// console.log("The year is " + year);
// var month = dt.month;
// console.log("The month is " + month);
// var week = dt.weekday;
// console.log("The day of the week is " + week);
// var day = dt.day;
// console.log("The day is " + day);
// var hour = dt.hour;
// console.log("The hour is " + hour);
// var minute = dt.minute;
// console.log("The minut is " + minute);
// var second = dt.second;
// console.log("the second is " + second);

// other components you can call

// var zone = dt.zoneName;
// console.log(zone);
// var offset = dt.offset;
// console.log(offset);
// var daysInMonth = dt.daysInMonth;
// console.log(daysInMonth)

// Formatting to humans to read

// var humantext = dt.toLocaleString();
// console.log(humantext);
// var humantext2 = dt.toLocaleString(DateTime.DATETIME_MED); //remove "TIME" to remove the time
// console.log(humantext2);

// var humantext3 = dt.toLocaleString(DateTime.DATE_MED);
// console.log("Today is " + humantext3);

// var plusa = dt.plus({ hours: 3, minutes: 2 });
// console.log(plusa);
// var minus = dt.minus({ days: 7 });
// console.log(minus);
// var startof = dt.startOf('day');
// console.log(startof);
// var endof = dt.endOf('hour');
// console.log(endof);

var hoursArray = [
    {hours: 0},
    {hours: 1},
    {hours: 2},
    {hours: 3},
    {hours: 4},
    {hours: 5},
    {hours: 6},
    {hours: 7},
    {hours: 8},
    {hours: 9},
    {hours: 10},
    {hours: 11},
    {hours: 12},
    {hours: 13},
    {hours: 14},
    {hours: 15},
    {hours: 16},
    {hours: 17},
    {hours: 18},
    {hours: 19},
    {hours: 20},
    {hours: 21},
    {hours: 22},
    {hours: 23},
];

var arrayIndex = 0;
var allHoursPSelector = document.querySelectorAll("p.cal-hr-p");

//loop through the hours array
for (var i = 0; i < hoursArray.length; i++) {
    //take the first hour of the day and iterate through the hoursArray converting the time string into simple text
    var zeroHour = startof.plus(hoursArray[i]).toLocaleString(DateTime.TIME_SIMPLE);
    //create a variable which loops through the node (query slector all) for the p elements
    var allHoursItems = allHoursPSelector.item([i]);

    // function which inserts the converted times into the node elements
function input() {
    var className = document.getElementsByClassName("cal-hr-p")
    // for each node elements, insert text content of the zero hour array (which adds one hour for each iteration)
    hoursArray.forEach(element => element); {
        for (var i = 0; i < className.length; i++)
        allHoursItems.textContent = zeroHour;
    };
};
input();
};

var today = document.getElementById("today-h2");
today.textContent = "Hello, Today is " + humantext3;