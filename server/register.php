<?php
// Filename: register.php
// Created by: Sarah Carruthers, March 2020
// Modified by: Ezra MacDonald, March 2020
    
    require_once("auth.php");
    require_once("validators.php");

    session_start();

    // Check if user is already logged in
    if (isset($_SESSION['users']['username'])) {
        header("location:home.php");
        http_response_code(300); // General redirect status code
        exit;
    }

        $err = array("message" => "");
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json = file_get_contents('php://input');
            $data = json_decode($json['data']);
            $username = $_POST['username'];
            $email = $_POST['email'];
            $password = $_POST['password'];

            if (isset($username) && isset($email) && isset($password)) {


        } else {
            $err["message"] = "Malformed request received.";
            echo json_encode($err);
        }
            echo json_encode($err);
        } else {
            header("HTTP/1.0 Method Not Allowed", TRUE, 405);
    }

?>