let months = ["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"]
const date = new Date;
let firstDay = new Date(date.getFullYear(),date.getMonth(),1).toDateString().slice(0,3)
let lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).toDateString().slice(0,3)
let month = date.getMonth();
let year = date.getFullYear();
let numOfWeeks =calcNumOfWeeks(month,year);
let row,col
let events = []
let returnedVals, dbData


document.getElementById("month-name").innerHTML=months[month]+" "+year;

let calendar = document.getElementById("calendar");
let week = []

generateWeeks(month, year);
let day=[]
let days = [[],[]]
let numOfDays = calcHowManyDays(month)

generateDays(numOfWeeks);
setFirstDayOfMonth(firstDay, numOfWeeks, numOfDays);

fillCal()

highlightCurrentDay()
/*window.onclick = function(e) {

}*/
function yrn(e){
    console.log(e.srcElement.className); // then e.srcElement.className has the class
    row = e.srcElement.className[3]
    col = e.srcElement.className[5]
    openForm()
}
const form = document.getElementById("event-form")
form.addEventListener('submit', handleForm)

/*Function Definitions below///////////////////////////// */
function fillCalendar(index1, index2,totalDays){
    let dayNum = 2;
    let node = document.createElement("h1")
    let node1 = node.cloneNode(true)
    for (var i = index1; i >= 0; i--) {
        for( let j = index2; j <=6; j++ ){
            if(dayNum > totalDays)
            break;
            days[i][j].innerHTML=`
                                <div class="day-numbering" >
                                    <div class="days">${dayNum}
                                </div>
                                <div class = "events-container"id="${dayNum}"></div>
                                </div>`
            days[i][j].setAttribute("class", "bt")
            days[i][j].className += " " + i + " " +j
            days[i][j].setAttribute("onclick", "yrn(event)")
            dayNum++;
    }
    index2=0
  }

}

function calcNumOfWeeks(month, year) {
    let firstOfMonth = new Date(year, (month+1)-1, 1);
    let lastOfMonth = new Date(year, month+1, 0);
    let used = firstOfMonth.getDay() + lastOfMonth.getDate();
    return(Math.ceil( used / 7));
};

function generateDays(numOfWeeks){

            for (var i = 0; i < numOfWeeks; i++) {
                days[i]=[]
                for( let j = 0; j <=6; j++ ){
                day[j]=week[i].insertCell(-1);
                days[i][j]=day[j]
                }
          }

}

function generateWeeks(month, year) {
    let weeks =calcNumOfWeeks(month, year);
        for(let j = 0; j <weeks; j++){
            week[j] = calendar.insertRow(2);
        }
}

function setFirstDayOfMonth(firstDay,numOfWeeks,numOfDays) {
    switch(firstDay){
        case "Sun": //days[numOfWeeks-1][0].innerHTML = "1";
        days[numOfWeeks-1][0].innerHTML=`
        <div class="day-numbering" >
            <div class="days">1
        </div>
        <div class = "events-container"id="1"></div>
        </div>`
        days[numOfWeeks-1][0].setAttribute("class", "bt")
        days[numOfWeeks-1][0].className += " " + (numOfWeeks-1) + " " +0
        days[numOfWeeks-1][0].setAttribute("onclick", "yrn(event)")
            fillCalendar(numOfWeeks-1,1,numOfDays);
            break;
        case "Mon": //days[numOfWeeks-1][1].innerHTML = "1";
        days[numOfWeeks-1][1].innerHTML=`
        <div class="day-numbering" >
            <div class="days">1
        </div>
        <div class = "events-container"id="1"></div>
        </div>`
        days[numOfWeeks-1][1].setAttribute("class", "bt")
        days[numOfWeeks-1][1].className += " " + (numOfWeeks-1) + " " +1
        days[numOfWeeks-1][1].setAttribute("onclick", "yrn(event)")
            fillCalendar(numOfWeeks-1,2,numOfDays);
            break;
        case "Tue": //days[numOfWeeks-1][2].innerHTML = "1";
        days[numOfWeeks-1][2].innerHTML=`
        <div class="day-numbering" >
            <div class="days">1
        </div>
        <div class = "events-container"id="1"></div>
        </div>`
        days[numOfWeeks-1][2].setAttribute("class", "bt")
        days[numOfWeeks-1][2].className += " " + (numOfWeeks-1) + " " +2
        days[numOfWeeks-1][2].setAttribute("onclick", "yrn(event)")
            fillCalendar(numOfWeeks-1,3,numOfDays);
            break;
        case "Wed": //days[numOfWeeks-1][3].innerHTML = "1";
        days[numOfWeeks-1][3].innerHTML=`
        <div class="day-numbering" >
            <div class="days">1
        </div>
        <div class = "events-container"id="1"></div>
        </div>`
        days[numOfWeeks-1][3].setAttribute("class", "bt")
        days[numOfWeeks-1][3].className += " " + (numOfWeeks-1) + " " +3
        days[numOfWeeks-1][3].setAttribute("onclick", "yrn(event)")
            fillCalendar(numOfWeeks-1,4,numOfDays);
            break;
        case "Thu": //days[numOfWeeks-1][4].innerHTML = "1";
        days[numOfWeeks-1][4].innerHTML=`
        <div class="day-numbering" >
            <div class="days">1
        </div>
        <div class = "events-container"id="1"></div>
        </div>`
        days[numOfWeeks-1][4].setAttribute("class", "bt")
        days[numOfWeeks-1][4].className += " " + (numOfWeeks-1) + " " +4
        days[numOfWeeks-1][4].setAttribute("onclick", "yrn(event)")
            fillCalendar(numOfWeeks-1,5,numOfDays);
            break;
        case "Fri": //days[numOfWeeks-1][5].innerHTML = "1";
        days[numOfWeeks-1][5].innerHTML=`
        <div class="day-numbering" >
            <div class="days">1
        </div>
        <div class = "events-container"id="1"></div>
        </div>`
        days[numOfWeeks-1][5].setAttribute("class", "bt")
        days[numOfWeeks-1][5].className += " " + (numOfWeeks-1) + " " +5
        days[numOfWeeks-1][5].setAttribute("onclick", "yrn(event)")
            fillCalendar(numOfWeeks-1,6,numOfDays);
            break;
        case "Sat": //days[numOfWeeks-1][6].innerHTML = "1";
        days[numOfWeeks-1][6].innerHTML=`
        <div class="day-numbering" >
            <div class="days">1
        </div>
        <div class = "events-container"id="1"></div>
        </div>`
        days[numOfWeeks-1][6].setAttribute("class", "bt")
        days[numOfWeeks-1][6].className += " " + (numOfWeeks-1) + " " +6
        days[numOfWeeks-1][6].setAttribute("onclick", "yrn(event)")
            fillCalendar(numOfWeeks-2,0,numOfDays);
                break;
    }
}

function deleteWeeks(numOfWeeks) {
    let weeksToDelete = numOfWeeks;
    weeksToDelete++;
    for(let j = 0; j <numOfWeeks; j++){
        calendar.deleteRow(weeksToDelete);
        weeksToDelete--
    }

}

function nextMonth(nextOrPrevMonth) {
    if(nextOrPrevMonth == 'next'){
        month ==11 ? year++:year
        month == 11 ? month = 0: month++
    }
    else{
        month ==0 ? year--:year
    month == 0 ? month = 11: month--
    }

    numOfDays = calcHowManyDays(month)
    document.getElementById("month-name").innerHTML=months[month]+" "+year;
    deleteWeeks(numOfWeeks)
    generateWeeks(month, year);
    numOfWeeks =calcNumOfWeeks(month,year);
    generateDays(numOfWeeks);
    firstDay = new Date(year,month,1).toDateString().slice(0,3)
    setFirstDayOfMonth(firstDay, numOfWeeks, numOfDays);
}

function calcHowManyDays(month){
    switch (month) {
        case 1:  return (year%4==0 ?  29: 28)
        case 3:
        case 5:
        case 8:
        case 10: return 30;
        default: return 31;
     }
}

function openForm() {
  let chosenDay = days[row][col].innerText.substr(1,1) == '\n'? days[row][col].innerText.substr(0,1): days[row][col].innerText.substr(0,2)
    document.getElementById("event-form").style.display = "block";
    document.getElementById("date").innerText=months[month]+" "+ chosenDay +", "+year
  document.getElementById("start").value = year.toString() + "-"+(month <= 9? '0' + (month+1).toString(): (month+1).toString()) + "-" +(chosenDay <= 9? '0' + chosenDay.toString(): chosenDay.toString())

  document.getElementById("end").value = year.toString() + "-"+(month <= 9? '0' + (month+1).toString(): (month+1).toString()) + "-" +(chosenDay <= 9? '0' + chosenDay.toString(): chosenDay.toString())


 document.getElementById("start-time").value = "00:00"
  document.getElementById("end-time").value = "23:59"
}

function closePopUp(){
  document.getElementById("event-form").style.display ="none"
}

function addToCal(){
  //year == events[0]['start-date'].substring(0,4)? that: that
  document.getElementById(`${parseInt(events[0]['start-date'].substr(8,2))}`).innerHTML+=(`<div class="events">${events[0]['title']==''?
  "(No title)"+ ', '+ events[0]['start-time']:
  events[0]['title']+', ' +events['stat-time']} `)


}

function highlightCurrentDay(){
    let currMonth = date.getMonth()
    let currYear = date.getFullYear()
    let currDay = date.getDate()
    if(currMonth == month && currYear == year){
        document.getElementById(`${currDay}`).parentNode.childNodes[1].classList.add('dot')
    }
}

//let dbData = JSON.parse(returnedVals)
/*function addFromDB(){
    let dbData = JSON.parse(returnedVals)
    for(let i = 0; i<dbData.length; i++){
        let dbMonth = parseInt(dbData[i]['start date'].substr(5,2))
        dbMonth--
        if(parseInt(dbData[i]['start date'].substr(0,4)) == year && dbMonth == month){
                console.log("sucesss")
        }
    }
}*/

function addToDay(){
    let date = new Date();
    let day = date.getDay()
    let days = ["Sun", 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    document.getElementById("day").innerHTML=days[day]
}

function handleForm(event){
    event.preventDefault()
    const myFormData = new FormData(event.target)
    const formDataObj = Object.fromEntries(myFormData.entries())
    console.log(formDataObj)
    events.unshift(formDataObj)
    addToCal()

    var  myJsonString= JSON.stringify(formDataObj);
    $.ajax({
        type:"post",
        url:"yuhhh.php",
        data:
        {
           'title' :(events[0]["title"]==''? '(No title)': events[0]['title']),
           'start-date' :events[0]["start-date"],
           'start-time' :events[0]["start-time"],
           'end-date' :events[0]["end-date"],
           'end-time' :events[0]["end-time"],
           'reapeanted' :events[0]["reapeanted"],
           'description' :events[0]["event-description"]

        },
        cache:false,
        success: function (html)
        {
           alert(events[0]['title']);

        }
    });

}



function fillCal(){
    /*fetch("getdata.php")
        .then((response) =>{
            if(!response.ok){
                throw new Error("nah")
            }
            return response.json()
        })
        .then((data)=>{
            alert(data)
        })
        .catch((error)=>{
            alert(response.json)
        })*/

        $.get("getdata.php", function(data){
              returnedVals = data;
              dbData = JSON.parse(returnedVals)
              for(let i = 0; i<dbData.length; i++){
                  let dbMonth = parseInt(dbData[i]['start_date'].substr(5,2))
                  dbMonth--
                  if(parseInt(dbData[i]['start_date'].substr(0,4)) == year && dbMonth == month){
                    //document.getElementById(`${parseInt(dbData[i]['start date'].substr(8))}`).innerHTML+=`<div class="events">${dbData[i]['title']+", "+dbData[i]['start time']}</div>`
                    //$(`#${parseInt(dbData[i]['start date'].substr(8))}`).append(`<div class="events">${dbData[i]['title']+", "+dbData[i]['start time']}</div>`)
                    let newEn = document.createElement('div');
                            newEn.innerText=`${dbData[i]['title']+", "+dbData[i]['start_time']}`
                            newEn.setAttribute('class', 'events')
                            document.getElementById(`${parseInt(dbData[i]['start_date'].substr(8))}`).appendChild(newEn)

                    if(parseInt(dbData[i]['start_date'].substr(8)) != parseInt(dbData[i]['end_date'].substr(8))){
                        for(let j =(parseInt(dbData[i]['start_date'].substr(8))+1); j<= parseInt(dbData[i]['end_date'].substr(8)); j++){
                            /*let newEn = document.createElement('div');
                            newEn.innerText=`${dbData[i]['title']+", "+dbData[i]['start time']}`
                            newEn.setAttribute('class', 'events')
                            document.getElementById(j).appendChild(newEn)
                            */
                            document.getElementById(j).innerHTML+=`<div class="events">${dbData[i]['title']+", "+dbData[i]['start_time']}</div>`
                            //$(`#${j}`).append(`<div class="events">${dbData[i]['title']+", "+dbData[i]['start time']}</div>`)
                        }

                  }
                }


              }
        })


    }


function goToToday(){

}

function changeToDayView(){
    document.querySelector("table").innerHTML=
    `<table><tr> <th>${firstDay}</th>  </tr>
        <tr>
            <tr> <div>12 AM</div> <td class = "dayview" ></td>>  </tr>
            <tr> <th>1 AM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>2 AM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>3 AM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>4 AM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>5 AM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>6 AM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>7 AM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>8 AM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>9 AM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>10 AM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>11 AM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>12 PM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>1 PM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>2 PM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>3 PM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>4 PM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>5 PM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>6 PM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>7 PM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>8 PM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>9 PM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>10 PM</th> <td class = "dayview" ></td>> </tr>
            <tr> <th>11 PM</th> <td class = "dayview" ></td>> </tr>
            </tr>
    </table>`
}
