let months = ["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"]
let date = new Date();
    let day = date.getDay() 
    let days = ["Sun", 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    document.getElementById("day").innerHTML=days[day]
    let currentMonth = date.getMonth()
    let today = date.getDate()
    let year = date.getFullYear()
    document.getElementById("num-day").innerHTML=today

    document.getElementById("the-date").innerHTML=months[currentMonth] + " "+ today + ", "+year


    function nextDay(){
        day ==6? day =0 : day++
        document.getElementById("day").innerHTML=days[day]
        
        let maxDays =calcHowManyDays(currentMonth)
        today < maxDays? today++ : today = 1 
        if( today == 1) {currentMonth++} 
        if(currentMonth>11){currentMonth = 1 
            year++}
        document.getElementById("num-day").innerHTML=today
        document.getElementById("the-date").innerHTML=months[currentMonth] + " "+ today + ", "+year
    }

    function prevDay(){
        let prevMonth = currentMonth-1;
        day ==0? day =6 : day--
        document.getElementById("day").innerHTML=days[day]
        let maxDays =calcHowManyDays((prevMonth))
        if (today > 1){ today-- }
            else {today = maxDays
                    currentMonth-- }
        if(currentMonth<0){currentMonth = 11 
                            year--}
        document.getElementById("num-day").innerHTML=today
        document.getElementById("the-date").innerHTML=months[currentMonth] + " "+ today + ", "+year
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
