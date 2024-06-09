<html>

    <body>
    <?php 
     session_start();
$user = $_SESSION["username"];//this is how we find the user that logged in 
echo $user;
$title =isset($_POST['title']) ? $_POST['title'] : 'nothing';
    echo $title;
    $startDate = $_POST['start-date'];
    $starttime = $_POST['start-time'];
    $enddate = $_POST['end-date'];
    $endtime = $_POST['end-time'];
    $repeat = $_POST['reapeanted'];
    $desc = $_POST['event-description'];
    echo $desc;
    $servername = "localhost";
			$username = "root";
			$password = "";
			$database = "timeLordDatabase";
			// Connect to MySQL Database Server Using mysqli
		        // Object Oriented way
			$conn = new mysqli($servername, $username, $password, $database);

            $sql = "INSERT INTO events (username,title,start_time, start_date, end_time, end_date, does_repeat) VALUES ('$user','$title','$starttime','$startDate','$endtime','$enddate','$repeat')"; //select all the columns from database table test1
            
            #"INSERT INTO events(username,event_name,event_date,event_location)
        #VALUES('$user','$eventName','$date','$location')";
            
            mysqli_query($conn, $sql);
            $conn->close(); //disconnect from the MySQL database
   ?>
    </body>
</html>
