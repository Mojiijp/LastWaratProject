<?php
    $email = $_POST['email'];
    $password = $_POST['password'];

    $INSECURE_JSON ='[
      {
        "email":"admin@email.com",
        "password":"123456"
      }
    ]';

    $array = json_decode($INSECURE_JSON, TRUE);

    foreach ($array as $insecure_val) {
        if($insecure_val['email'] == $email 
           && $insecure_val['password'] == $password) {
            print "found";
            $_SESSION['submit'] = $email;
            break;
        }
    }
?>