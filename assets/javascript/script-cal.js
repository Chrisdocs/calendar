//initial luxon setup
let DateTime = luxon.DateTime;

var dateMil = DateTime.now('HH:ss').hour;
console.log(dateMil);

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
var hour = dt.hour;
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


// Formatting for humans to read
var humantext = dt.toLocaleString();
console.log(humantext);
var humantext2 = dt.toLocaleString(DateTime.DATETIME_MED); //remove "TIME" to remove the time
console.log(humantext2);

var humanText3 = dt.toLocaleString(DateTime.DATE_MED);
console.log("Today is " + humanText3);

var humanText4 = dt.toLocaleString(DateTime.TIME_SIMPLE);

var plusa = dt.plus({ hours: 3, minutes: 2 });
console.log(plusa);
var minus = dt.minus({ days: 7 });
console.log(minus);
var startof = dt.startOf('day');
console.log(startof);
var endof = dt.endOf('hour');
console.log(endof);

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

//global variables
var arrayIndex = 0;
//select all the <p> elements with the given class and create a node list
var allHoursPSelector = document.querySelectorAll("p.cal-hr-p");
//
var today = document.getElementById("today-h2");
var todayTime = document.getElementById("today-h2-time");

// insert todays date into a heading element
today.textContent = "Hello, Today is " + humanText3;

// insert the current time
todayTime.textContent = "and it is " + humanText4;

//loop through the hours array
for (var i = 0; i < hoursArray.length; i++) {
    //take the first hour of the day and iterate through the hoursArray adding an hour per array object and converting the time string into simple text
    var zeroHour = startof.plus(hoursArray[i]).toLocaleString(DateTime.TIME_SIMPLE);
    //create a variable which loops through the node (query slector all) for the p elements
    var allHoursItems = allHoursPSelector.item([i]);

    // function which inserts the converted times into the node elements
function input() {
    // create a variable which selects the <p> elements, but does not group them into a nodelist
    var className = document.getElementsByClassName("cal-hr-p")
    // for each node element, insert text content of the zerohour (which adds one hour for each iteration of the hours array)
    hoursArray.forEach(element => element); {
        for (var i = 0; i < className.length; i++)
        allHoursItems.textContent = zeroHour;
    };

};
input();
};

var textBox = document.getElementsByClassName("time-color");

var timeBox = document.getElementsByClassName("cal-hr-p");
var timeBoxArray = Array.from(timeBox);
var textAreaArray = Array.from(textBox);
var highlightTime = function() {
    
    for (var i = 0; i < timeBox.length; i++) {

        var hourToTest = timeBoxArray[i];
        var hourId = timeBox[i].id

        
        if(dateMil > parseInt(hourId)) {
            textAreaArray[i].classList.add("past");
            console.log('It is less than now');
        } else if (dateMil < parseInt(hourId)) {
            textAreaArray[i].classList.add("future");
            console.log('It is more than now');
        } else if (dateMil === parseInt(hourId)) {
            textAreaArray[i].classList.add("present");
            console.log('It is now');
        }
    }
}
highlightTime();


var saveIcon = function() {
    //insert save file icon html into each button element
	var saveBtn = document.querySelectorAll(".cal-hr-btn");

    for (var i = 0; i < saveBtn.length; i++) {
        saveBtn[i].innerHTML = '<i class="fas fa-save"></i>';
    };
}
saveIcon();

// save entries with button click
var saveBtnClick = document.querySelectorAll(".cal-hr-btn");

saveBtnClick.forEach((item, index) => {item.addEventListener("click", event => {

    var textBox = document.getElementsByClassName("form-control");
    //set to variable
    var textBoxDescription = textBox[index].value; //description
    var taskTime = timeBox[index].textContent; //time
    //save to local storage set time time, description
    localStorage.setItem(taskTime, textBoxDescription); //save to local storage
});
});

// get the text content of the sibling <textarea> element
for (var i = 0; i < timeBox.length; i++) {
    if (hour) {
var getTime = timeBox[i].textContent;
var getTaskTime = localStorage.getItem(getTime);
var reInsertText = document.querySelectorAll(".form-control");
reInsertText[i].textContent = getTaskTime;
    }
}
