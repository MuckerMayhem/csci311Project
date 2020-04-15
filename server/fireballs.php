<?php

$log_file = "./error_log.log";
ini_set("log_errors", TRUE);
ini_set('error_log', $log_file);

session_start();


// Check if user is already logged in
if (isset($_SESSION['users']['username'])) {
    http_response_code(201);
    header("location:home.php");
    exit;
}

require("../config.php");
require_once("lib/json_helpers.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents("php://input"), true);
    $start_row = $data['row_index'];

    if (!isset($start_row)) {
        json_response(400, 'Malformed request. Unable to process.');
        exit;
    }

    $start_row = $_POST['row_index'];

    $end_row = $start_row + 100;

    if ($start_row > 0) {
        $start_row--; // Need to do this because of how LIMIT works in MySQL
    }

    global $dbservername, $dbdatabase, $dbusername, $dbpassword;
    $myHandle;
    $options = [
        PDO::ATTR_EMULATE_PREPARES   => false, // turn off emulation mode for "real" prepared statements
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, //turn on errors in the form of exceptions
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, //make the default fetch be an associative array
    ];
    try {
        $myHandle = new PDO("mysql:host=$dbservername;dbname=$dbdatabase", $dbusername, $dbpassword, $options);
    } catch (PDOException $e){
        $err .= "Connection failed: " . $e->getMessage(). "\n";
    }
    // We use LIMIT to get all results from some desired row to the last row.
    $stmt = $myHandle->prepare("SELECT * FROM Fireballs LIMIT :start_row, :end_row");
    $stmt->bindParam(':start_row', $start_row);
    $stmt->bindParam(':end_row', $end_row);
    $stmt->execute();
    $arr = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if (!$arr) {
        echo "No results!";
    }

    $stmt = $myHandle->prepare("SELECT COUNT(*) FROM Fireballs");
    $row_count = $stmt->execute();
    $arr["row_count"] = $row_count;

    echo json_response(200, $arr);
} else {
    echo json_response(405, "Invalid HTTP Method.");
}
?>
