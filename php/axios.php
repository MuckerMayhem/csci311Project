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

// Add record
if ($request == 1) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    $password = password_hash($password, PASSWORD_BCRYPT);

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
}

// Get API stuff for Scouts API.
if ($request == 2) {
    global $response;

    if (!$response == "") {
        echo $response;
    } else {
        echo "No response available.";
    }
    exit;
}

// Login function, pulls specified user from DB and checks stored password with input.
if ($request == 3) {
    $password = $_POST['password'];
    $email = $_POST['email'];

    $userData = $con->prepare("SELECT * FROM users WHERE username=? OR email=?");
    $userData->bind_param("ss", $username, $email);
    $userData->execute();
    $result = $userData->get_result();
    if ($result->num_rows == 1) {
        $member = $result->fetch_array();
        $real_pass = $member['password'];

        if (password_verify($password, $real_pass)) {
            echo "success";
        } else {
            echo "no match";
        }
    }
    exit();
}
?>