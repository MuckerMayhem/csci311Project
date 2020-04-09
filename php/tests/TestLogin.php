<?php
use PHPUnit\Framework\TestCase;
require_once('lib/helper_funcs.php');

session_start();

$_SESSION['users']['username'] = 'macdonaldezra';

class LoginTest extends TestCase {

    public function testNoUser()
    {
        $post = [
            'username' => 'Test1',
            'password' => 'password'
        ];

        $url = "http://localhost:1234/~csci311e/server/login.php";

        $server_output = serverPOST($post, $url);

        $result = (json_decode($server_output['response'], true));

        $expected_message = "Unable to find user with that username and password.";
        $this->assertEquals($expected_message, $result['message']);
    }

    public function testAlreadyLoggedIn()
    {
        var_dump($_SESSION);
        $_SESSION['users']['username'] = 'macdonaldezra';
        $post = [
            'username' => 'macdonaldezra',
            'password' => 'password'
        ];

        $url = "http://localhost:1234/~csci311e/server/login.php";

        serverPOST($post, $url);
        $output = serverPOST($post, $url);

        $response = json_decode($output['response'], true);
        $code = $output['responsecode'];

        echo $code;


        $not_expected = "Successful login.";

        $this->assertNotEquals($not_expected, $response['message']);
    }

    public function testLogin()
    {
        $post = [
            'username' => 'macdonaldezra',
            'password' => 'password'
        ];

        $url = "http://localhost:1234/~csci311e/server/login.php";

        $output = json_decode(serverPOST($post, $url)['response'], true);

        $expected = "Successful login.";

        $this->assertEquals($expected, $output['message']);

    }
}