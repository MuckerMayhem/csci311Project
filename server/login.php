<?php
// Filename: login.php
// Created by: Sarah Carruthers, March 2020
// Modified by: Ezra MacDonald, March 2020

    header('Access-Control-Allow-Methods: POST');

    require_once("lib/auth.php");
    require_once("lib/validators.php");

    session_start();

    // Check if user is already logged in
    if (isset($_SESSION['users']['username'])) {
        header("location:home.php");
        http_response_code(300); // General redirect status code
        exit;
    }

    // Attempt to log in user
    $err = array("message" => "");
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $json = file_get_contents('php://input');
        $data = json_decode($json['data']);
        $username = $data['username'];
        $password = $data['password'];

        if (isset($password) && isset($username)) {
            // trim white space and set max length
            if (!has_format_matching($password, '/[A-Za-z0-9_]/')) {
                $err["message"] = "Password must only contain letters, numbers and underscores.";
                http_response_code(401);
                echo json_encode($err);
            } elseif (!has_format_matching($username, '/[A-Za-z0-9_]/')) {
                $err["message"] = "Username must only contain letters, numbers and underscores.";
                http_response_code(401);
                echo json_encode($err);
            } else {
                $logged_in = attempt_login($username, $password);
                if ($logged_in) {
                    $_SESSION['users']['username'] = $username;
                    session_id();
                    header("location:home.php");        
                } else {
                    $err["message"] = "Unable to find user with that username and password.";
                    http_response_code(401);
                    echo json_encode($err);         
                }
            }
        } else {
            $err["message"] = "Malformed request received.";
            echo json_encode($err);
        }
        echo json_encode($err);
    } else {
        header("HTTP/1.0 Method Not Allowed", TRUE, 405);
    }
?>