<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>TLH SignUp</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="home.js"></script>
</head>

<body>

<h1> The Time Lord's Handbook</h1>
  <ul>
    <li id="top"><a href="index.php">Sign In</a>
    </li>
    <li id="top"><a id="navSelected" href="signUp.html">SignUp</a>
    <li><a href="about.html">About</a></li>
    <li><a href="settings.html">Settings</a></li>
  </ul>
  <div id="signIn">

    <br>
    <br>
    <br>
    <br>

    <h2>Sign Up</h2>
    <form method ="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" id="Login">
      <!--   <label>First Name:</label>!-->
      <input class="signUpForm" type="text" id="SUfname" name="fname" placeholder="First Name"><br>

      <!-- <label>LastName Name:</label>!-->
      <input class="signUpForm" type="text" id="SUlname" name="lname" placeholder="Last Name"><br>

      <!--email !-->
      <input class="signUpForm" type="text" id="SUuser" name="user" placeholder="Username"><br>

      <!--password 1 !-->
      <input class="signUpForm" type="text" id="SUpwd1" name="pwd1" placeholder="Password"><br>
      <!--password 2 !-->
      <input class="signUpForm" type="text" id="SUpwd2" name="pwd2" placeholder="Confirm Password"><br>
      <br>
      <input id="signUpButton" type="submit" value="GET PLANNING"><br>
      <!-- <p>Already have an account?</p>
      <input id="signInButton" type="submit" value="Sign In"> -->
    </form>
  </div>

   <?php

    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }

    $servername="localhost";
    $username = "root";
    $password = "";
    $database="timeLordDatabase";

    //create connection
    $conn= new mysqli($servername, $username, $password, $database);

    if($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    // Create table if one doesn't exist
    $sql_create_table = "CREATE TABLE IF NOT EXISTS users(firstName VARCHAR(255),lastName VARCHAR(255), username VARCHAR(255), pass VARCHAR(255));";
    mysqli_query($conn, $sql_create_table);

    $firstName=$lastName=$user=$pwd="";

    if($_SERVER["REQUEST_METHOD"]=="POST"){
      $firstName=test_input($_POST["fname"]);
      $lastName=test_input($_POST["lname"]);
      $user=test_input($_POST["user"]);
      $pwd1= test_input($_POST["pwd1"]);
      $pwd2= test_input($_POST["pwd2"]);
      //$pwd_hash=password_hash($_POST["pwd"],PASSWORD_DEFAULT);
    
      // Check if passwords match
      if($pwd1 === $pwd2){
        // Check if the username already exists
        $sql_check_username = "SELECT * FROM Users WHERE username = '$user'";
        $usercheck = mysqli_query($conn, $sql_check_username);
        // Add info to the Users table if doesn't exist
        if($usercheck->num_rows === 0){
          $sql_create_user = "INSERT INTO users(firstName,lastName,username,pass) VALUES('$firstName','$lastName','$user','$pwd1')";
          mysqli_query($conn, $sql_create_user);
          echo "User added!<br>Use the Sign-in page to access your planner!";
        }
        else {
          echo "Username already exists, please use a different username or use the 'Sign In' page to access your planner.";
          echo "<script>
          document.getElementById(\"SUfname\").value = '$firstName';
          document.getElementById(\"SUlname\").value = '$lastName';
          document.getElementById(\"SUpwd1\").value = '$pwd1';
          document.getElementById(\"SUpwd2\").value = '$pwd2';
          </script>";
        }
      }
      else{
        echo "Passwords don't match!";
        echo "<script>
          document.getElementById(\"SUfname\").value = '$firstName';
          document.getElementById(\"SUlname\").value = '$lastName';
          document.getElementById(\"SUuser\").value = '$user';
          document.getElementById(\"SUpwd1\").value = '$pwd1';
          </script>";
      }
    }
    
  ?>

  
  

</body>
</html>