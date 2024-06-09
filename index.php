<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>The Time Lord's Handbook</title>
    <link href="style.css" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="home.js"></script>
  </head>
  <body>
    <h1>The Time Lord's Handbook</h1>
    <ul>
      <li id="top"><a id="navSelected" href="index.php">Sign In</a></li>
      <li id="top"><a href="signUp.php">Sign Up</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="settings.html">Settings</a></li>
    </ul>
    
    <div id="signIn">
      <h5>Sign In</h5>
    </div>
    <br>

    
    <div id="signIn">
      <form id="Login" method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
      <input id="signInForm" type="text" name="username" placeholder="Username">
      <br>



      <?php
      if(isset($_POST["username"]) && empty($_POST["userame"])){ ?>
        
        <span class="username-error error"> <p> Username is Required!</p> </span>
      <?php } ?>


      <br>
<span class="underline"></span><br><br>

<input id="signInForm" type="password" name="password" placeholder="Password">

      <?php
      if(isset($_POST["password"]) && empty($_POST["password"])){ ?>
        
        <span class="error"><p>Password is Required </p></span>
      <?php } ?>
      <br>
       

        <input id="signInButton" type="submit" name="submit "value="Sign In"><br>
        <p>Dont Have An Account?</p>
              <p> <a href= 'signUp.php'>BECOME A TIME LORD NOW!!</a></p>
      </form>
    </div>
    <?php
      $servername="localhost";
      $username = "root";
      $password = "";
      $database="timeLordDatabase";
      //create connection
      $conn= new mysqli($servername, $username, $password, $database);
      $loginUser =$loginpwd=$username_error="";
      if($_SERVER["REQUEST_METHOD"]=="POST"){
        $loginUser=test_input($_POST["username"]);
        $loginpwd=test_input($_POST["password"]);
        
        $sql_login_user = "SELECT * FROM users Where username= '$loginUser' AND pass='$loginpwd'";
        
        $loginInfo=mysqli_query($conn, $sql_login_user);
        $userlogin=mysqli_fetch_assoc($loginInfo);
        
        if ($userlogin)  {
          // Authentication successful
          //Get the user's ID from the resulT
          // Store the user's ID in the session
          session_start();
        
          $_SESSION["username"]=$userlogin["username"];
          $_SESSION["firstname"]=$userlogin["firstName"];
          header("Location:home.php");
          exit();
        } else {
    
        if (empty($_POST["password"])) {
          
          $password_error="*password is Required";
      }



        }
      }

      function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }
    ?>
    <br><br>
    
  </body>
</html>