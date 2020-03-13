<?php
include "config.php";


if (isset($_POST['request'])) {
//    echo "<strong>Post received.</strong> <br/> <br/> <strong>Name:</strong> " . $_POST['request'];
    $request = $_POST['request'];
} else {
    echo "Post not received.";
}

//$data = json_decode(file_get_contents("php://input"));
//
//$request = $data->request;

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
    $username = $data->username;
    $name = $data->name;
    $email = $data->email;

    $userData = mysqli_query($con, "SELECT * FROM users WHERE username='" . $username . "'");
    if (mysqli_num_rows($userData) == 0) {
        mysqli_query($con, "INSERT INTO users(username,name,email) VALUES('" . $username . "','" . $name . "','" . $email . "')");
        echo "Insert successfully";
    } else {
        echo "Username already exists.";
    }

    exit;
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
    $err = curl_error($curl);

    echo $response;

    curl_close($curl);
    exit;
}
?>