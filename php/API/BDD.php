<?php 

include_once("core.php");

$connect = mysqli_connect("localhost", "root", "", "calculator9000");
$sql = "SELECT * FROM result";
$result = mysqli_query($connect, $sql);
$json_array = mysqli_fetch_all($result);


echo json_encode($json_array)

?>
