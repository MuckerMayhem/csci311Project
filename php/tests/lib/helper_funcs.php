<?php
function serverPOST($post_field, $url) {

    $data_string = json_encode($post_field);

//extract data from the post
//set POST variables
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($data_string)
    ));


// Receive server response ...
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $server_output = curl_exec($ch);

    $response_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    curl_close ($ch);

    $return_vals = array();
    $return_vals['response'] = $server_output;
    $return_vals['responsecode'] = $response_code;

    return $return_vals;
}
?>