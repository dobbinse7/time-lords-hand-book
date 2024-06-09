 <?php 
        session_start();
        $user = $_SESSION["username"];//this is how we find the user that logged in 
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "timeLordDatabase";
        // Connect to MySQL Database Server Using mysqli
            // Object Oriented way
        $conn = new mysqli($servername, $username, $password, $database);

        $sql = "SELECT * FROM events where username='$user' ORDER BY start_date ASC "; 
        mysqli_query($conn, $sql);

        //$sql = "SELECT * FROM events";
$result = $conn->query($sql);

// create an array to store the data
$data = array();

// loop through the result and add data to the array
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
}

// convert array to JSON
$json_data = json_encode($data);

// print JSON data
echo $json_data;

// close connection
$conn->close();
    ?>
