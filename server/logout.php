<?php
// Filename: auth.php
// Created by: Sarah Carruthers, March 2020

    session_start(); /* Starts the session */
    session_destroy(); /* Destroy started session */
    header("location:home.php");
    exit;
?>