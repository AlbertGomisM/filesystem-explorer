<?php

$file = $_POST['file'];

if (isset($_POST['file'])){

    $myfile = json_encode($file);
    
    fopen("$myfile", "w");

} else {

    echo "error";

}

?>

