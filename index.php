<?php
if(isset($_POST['login']) && isset($_POST['pw'])){
    $login = sanitizeString($_POST['login']);
    $passwrod = sanitizeString(($_POST['pw']));
    setcookie("userLogin", $login, 0, "/");
    setcookie("userPw", $passwrod, 0, "/");
    echo "Cookie was craeated sucsesfully";
}
function sanitizeString($val){
    $val = strip_tags($val);
    $val = htmlentities($val);
    $val = stripslashes($val);
    return $val;
}