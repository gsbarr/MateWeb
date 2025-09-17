<?php



    $input = $_POST["rutaImg"];
    $output = 'ecu1.jpg';
    file_put_contents($output, file_get_contents($input));






?>