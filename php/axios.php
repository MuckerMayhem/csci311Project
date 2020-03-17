<?php
include "config.php";

$response = "";


if (isset($_POST['request'])) {
//    echo "<strong>Post received.</strong> <br/> <br/> <strong>Name:</strong> " . $_POST['request'];
    $request = $_POST['request'];
} else {
    echo "Post not received.";
}

if (isset($_POST['get_api_data'])) {
    pull_api_data();
    exit;
}


function pull_api_data()
{
    global $response;
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://ssd-api.jpl.nasa.gov/scout.api",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "cache-control: no-cache"
        ),
    ));

    $response = curl_exec($curl);
    echo $response;
    $err = curl_error($curl);
}


// Fetch All records
if ($request == 1) {
    $userData = mysqli_query($con, "select * from users order by id desc");

    $response = array();
    while ($row = mysqli_fetch_assoc($userData)) {
        $response[] = $row;
    }

    echo json_encode($response);
    exit;
}

// Add record
if ($request == 2) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    $hash = hash('sha256', $password);

    function createSalt()
    {
        $text = md5(uniqid(rand(), TRUE));
        return substr($text, 0, 3);
    }

    $salt = createSalt();
    $password = hash('sha256', $salt . $hash);

    $userData = $con->prepare("SELECT * FROM users WHERE username=? OR email=?");
    $userData->bind_param("ss", $username, $email);
    $userData->execute();
    $result = $userData->get_result();
    if ($result->num_rows == 0) {
        $insert = $con->prepare("INSERT INTO users(username,password,email) VALUES(?,?,?)");
        $insert->bind_param("sss", $username, $password, $email);
        $insert->execute();
        $insert->close();
        echo "Insert successfully";
    } else {
        echo "Username/Email already exists.";
    }
    $userData->close();
    exit;

    /* LOGIN THING TO IMPLEMENT
    //Create query
$qry="SELECT * FROM member WHERE username='$username' AND password='$password'";
$result=mysql_query($qry);

//Check whether the query was successful or not
if($result) {
    if(mysql_num_rows($result) > 0) {
        //Login Successful
        session_regenerate_id();
        $member = mysql_fetch_assoc($result);
        $_SESSION['SESS_MEMBER_ID'] = $member['id'];
        $_SESSION['SESS_FIRST_NAME'] = $member['username'];
        $_SESSION['SESS_LAST_NAME'] = $member['password'];
        session_write_close();
        header("location: profile.php");
        exit();
    }
    else {
        //Login failed
        //error message
    }
else {
    die("Query failed");
}
    */
}

// Update record
if ($request == 3) {
    $id = $data->id;
    $name = $data->name;
    $email = $data->email;

    mysqli_query($con, "UPDATE users SET name='" . $name . "',email='" . $email . "' WHERE id=" . $id);

    echo "Update successfully";
    exit;
}

// Get API stuff for Scouts API.
if ($request == 4) {
    global $response;

    if (!$response == "") {
        echo $response;
    } else {
        echo "No response available.";
    }
    exit;
}

// Fetch All records
if ($request == 5) {
    if (isset($_POST['email'])) {
        $email = $_POST['email'];
        $userData = mysqli_query($con, "select password from users where email=$email");

        $response = array();
        while ($row = mysqli_fetch_assoc($userData)) {
            $response[] = $row;
        }

        echo json_encode($response);
    }
    exit;
}
?>