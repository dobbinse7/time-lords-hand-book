<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>The Time Lord's Handbook</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="home.js"></script>
</head>

<body>
  <h1> The Time Lord's Handbook </h1>
  <ul>
    <li id="top"><a href="home.php">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="settings.html">Settings</a></li>
  </ul>

  <?php
    session_start();
      echo "<h2>Welcome, Time Lord <span style=\"color:#d42\">" . $_SESSION["firstname"] . "</span>!</h2>";
  ?>

  <table id="calendar">
        <tr> 
            <th id="month" colspan="7">
              <div id="cal-menu">
                <button>Today</button>
                <button onclick="nextMonth('previous'), fillCal()" id="leftBtn">❮</button> 
                <span onclick="" id="month-name"></span>
                <button onclick="nextMonth('next'), fillCal()" id="rightBtn">❯</button>
              </div>
            </th>
        </tr>
        <tr>
            <th onclick="fillCal()">Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
        </tr>
        <div id="event-form">
            <div onclick="closePopUp()" style="text-align:right"><button id="exit">X</button></div>
            <h1 id="date"></h1>
            <form method="POST" name="form" action="yuhhh.php"  >
                <div>
                 <input type="text" name="title" placeholder="Title" id="name-field" >
                 </div>
                 <div>
                 <label for="date-from">Starts</label>
                 <input id="start" type="date" name="start-date">
                 <input id="start-time" type="time" name="start-time" >
                 </div>
                 <div>
                   <label for="date-to">Ends</label>
                 <input id="end" type="date" name="end-date">
                 <input id="end-time" type="time" name="end-time" >
                 </div>
              <!--
                   <div>
                   <select name="reapeanted">
                     <option value="dnr">Does not repeat</option>
                     <option value="daily">Daily</option>
                     <option value="weekly">Weekly</option>
                     <option value="monthly">Monthly</option>
                     <option value="yearly">Yearly</option>
                   </select>
                   </div>
                -->
                   
                   
                 <label for="event-description">Description</label>
                <textarea name="event-description" id="e-desc" cols="25" rows="5"></textarea>
                <button onclick="closePopUp()" name="submit" type="submit" value="submit">Save</button>            
               </form>
        </div>
    </table>
  
  <br>
  



  <script src="/calendar.js"></script>






</body>

</html>
</body>

</html>