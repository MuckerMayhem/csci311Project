<?php

// Filename: home.php
// Created by: Ezra MacDonald, March 2020
require_once('lib/json_helpers.php');

if (isset($_SESSION['users']['username'])) {
    header("location:home.php");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, TRUE);
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {

} else {
    echo json_response(405, "Invalid HTTP Request method.");
}

