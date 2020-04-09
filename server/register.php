<?php
// Filename: register.php
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

$err = array();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, TRUE); // load json as associative array
    $username = trim($data['username']);
    $email = trim($data['email']);
    $password = trim($data['password']);

    if (isset($username) && isset($email) && isset($password)) {
        // Validate username
        if (!has_format_matching($username, '/^[A-Za-z0-9_]+$/')) {
            $err["username"] = "Username must only contain letters, numbers and underscores.";
        } elseif (!has_length($password, ['min' => 4, 'max' => 50])) {
            $err["username"] = "Username must have length between 4 and 50 characters.";
        }

        // Validate password
        if (!has_format_matching($password, '/^[A-Za-z0-9_]+$/')) {
            $err["password"] = "Password must only contain letters, numbers and underscores.";
        } elseif (!has_length($password, ['min' => 4, 'max' => 50])) {
            $err["password"] = "Password must have length between 4 and 50 characters.";
        }

        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $err["email"] = "Email is not a valid email address.";
        }

        if (empty($err)) {
            if (userExists($username)) {
                echo json_error_response(403, "User with that username already exists.");
                exit;
            } else {
                $created = createAccount($username, $password, $email);
                if (!$created) {
                    echo json_error_response(500, "Unable to create account, please try again some other time.");
                    exit;
                } else {
                    // Successfully created user
                    $_SESSION['users']['username'] = $username;
                    echo json_response(201, "Successfully created account.");
                }
            }
        } else {
            // Send validation errors to client
            echo json_error_response(403, $err);
        }
    } else {
        echo json_error_response(400, "Malformed request, unable to process.");
    }
} else {
    header("HTTP/1.0 Method Not Allowed", TRUE, 405);
}

?>
