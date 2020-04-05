<?php
// Filename: json_response.php
// Created by: Ezra MacDonald, March 2020

// function modified from: https://ohdoylerules.com/snippets/simple-php-json-response/
//
// Usage Examples:
// echo json_response(500, 'Server Error! Please Try Again!');
// Responds with: {"status":false,"message":"Server Error! Please Try Again!"}
// echo json_response(200, 'working');
// Responds with {"status":true,"message":"working"}

function json_response($code = 200, $message = null) {
    // clear the old headers
    header_remove();
    // set the actual code
    http_response_code($code);

    // set the header to make sure cache is forced
    // Cache Control headers
    // no-transform: no transformations or conversions should be made to this resource. The
    //   Content-Encoding, Content-Range, Content-Type headers must not be modified by a proxy.
    // max-age: Maximum amount of time that a resource is considered fresh. Time is relative to the
    //   time of request.
    // s-maxage: Overrides max-age or the Expires header, but only for shared caches (ge. proxies).
    header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
    header('Content-Type: application/json');

    return json_encode(array('message' => $message));
}

function json_error_response($code = 400, $errors = null) {
    header_remove();
    http_response_code($code);
    header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
    header("Conte-Type: application/json");

    return json_encode(array('message' => $errors));
}
?>
