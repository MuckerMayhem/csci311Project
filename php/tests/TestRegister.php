<?php


use PHPUnit\Framework\TestCase;

//require('../lib/config.php');
require_once('lib/helper_funcs.php');

class TestRegister extends TestCase
{
    public function testMalformedInput()
    {
        $post = [
            'username' => 'Test1;1@',
            'password' => 'password',
            'email' => 'testmail@mail.com'
        ];

        $url = "http://localhost:1234/~csci311e/server/register.php";

        $server_output = serverPOST($post, $url);
        $result = (json_decode($server_output['response'], true));

        $expected_message = "Username must only contain letters, numbers and underscores.";
        $this->assertEquals($expected_message, $result['message']['username']);

        $post = [
            'username' => 'T',
            'password' => 'password',
            'email' => 'testmail@mail.com'
        ];

        $server_output = serverPOST($post, $url);
        $result = (json_decode($server_output['response'], true));

        $expected_message = "Username must have length between 4 and 50 characters.";
        $this->assertEquals($expected_message, $result['message']['username']);

        $post = [
            'username' => 'Test123',
            'password' => 'password;SQL INJECTION OH NO!!2@3',
            'email' => 'testmail@mail.com'
        ];

        $server_output = serverPOST($post, $url);
        $result = (json_decode($server_output['response'], true));

        $expected_message = "Password must only contain letters, numbers and underscores.";
        $this->assertEquals($expected_message, $result['message']['password']);

        $post = [
            'username' => 'Test123',
            'password' => 'p',
            'email' => 'testmail@mail.com'
        ];

        $server_output = serverPOST($post, $url);
        $result = (json_decode($server_output['response'], true));

        $expected_message = "Password must have length between 4 and 50 characters.";
        $this->assertEquals($expected_message, $result['message']['password']);

        $post = [
            'username' => 'Test123',
            'password' => 'password',
            'email' => 'email#em'
        ];

        $server_output = serverPOST($post, $url);
        $result = (json_decode($server_output['response'], true));

        $expected_message = "Email is not a valid email address.";
        $this->assertEquals($expected_message, $result['message']['email']);
    }

    public function testUserExists()
    {
        $post = [
            'username' => 'macdonaldezra',
            'password' => 'password',
            'email' => 'email@email.com'
        ];

        $url = "http://localhost:1234/~csci311e/server/register.php";

        $server_output = serverPOST($post, $url);
        $result = (json_decode($server_output['response'], true));

        $expected_message = "User with that username already exists.";
        $this->assertEquals($expected_message, $result['message']);

    }

    public function testCreateAccountSuccess()
    {
        $post = [
            'username' => 'testuser_1',
            'password' => 'password',
            'email' => 'email@email.com'
        ];

        $url = "http://localhost:1234/~csci311e/server/register.php";

        $server_output = serverPOST($post, $url);
        $result = (json_decode($server_output['response'], true));

        $expected_message = "Successfully created account.";
        $this->assertEquals($expected_message, $result['message']);
    }
}
