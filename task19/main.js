// var dob = new Date("06/24/2008");
// //calculate month difference from current date in time
// var month_diff = Date.now() - dob.getTime();

// //convert the calculated difference in date format
// var age_dt = new Date(month_diff); 

// //extract year from date    
// var year = age_dt.getUTCFullYear();

// //now calculate the age of the user
// var age = Math.abs(year - 1970);

// //display the calculated age
// document.write("Age of the date entered: " + age + " years");


let day = document.querySelector('.day')
let month = document.querySelector('.month')
let year = document.querySelector('.year')
let dayResult = document.getElementById('dayresult')
let monthResult = document.getElementById('monthresult')
let yearResult = document.getElementById('yearresult')
let button = document.getElementById('button')
let date = new Date()
console.log((date));
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
function calculateAge() {
    let nowYear = date.getFullYear();
    let nowMonth = date.getMonth();
    let nowDate = date.getDate();
    dayResult.innerHTML = nowYear - year.value;
    monthResult.innerHTML = nowMonth + 1 - month.value;
    yearResult.innerHTML = nowDate - day.value;
}


