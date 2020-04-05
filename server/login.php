<?php
// Filename: login.php
// Created by: Sarah Carruthers, March 2020
// Modified by: Ezra MacDonald, March 2020

$log_file = "./error_log.log";
ini_set("log_errors", TRUE);
ini_set('error_log', $log_file);

require_once("lib/auth.php");
require_once("lib/validators.php");
require_once("lib/json_helpers.php");

session_start();

// Check if user is already logged in
if (isset($_SESSION['users']['username'])) {
    http_response_code(201);
    header("location:home.php");
    exit;
}

// Attempt to log in user
$err = array();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, TRUE);
    $username = trim($data['username']);
    $password = trim($data['password']);

    if (isset($password) && isset($username)) {
        // Password validation
        if (!has_format_matching($password, '/^[A-Za-z0-9_]+$/')) {
            $err["password"] = "Password must only contain letters, numbers and underscores.";
        } elseif (!has_length($password, ['min' => 4, 'max' => 50])) {
            $err["password"] = "Password must have length between 4 and 50 characters.";
        }

        if (!has_format_matching($username, '/^[A-Za-z0-9_]+$/')) {
            $err["username"] = "Username must only contain letters, numbers and underscores.";
        } elseif (!has_length($password, ['min' => 4, 'max' => 50])) {
            $err["username"] = "Username must have length between 4 and 50 characters.";
        }

        if (empty($err)) {
            $logged_in = attempt_login($username, $password);
            if ($logged_in) {
                $_SESSION['users']['username'] = $username;
                echo json_response(200, 'Successful login.');
                exit;
            } else {
                echo json_response(403, "Unable to find user with that username and password.");
                exit;
            }
        } else {
            echo json_response(403, $err);
        }
    } else {
        echo json_response(400, "Malformed request, unable to process.");
    }
} else {
    echo json_response(405, "Invalid HTTP Method.");
}
?>
