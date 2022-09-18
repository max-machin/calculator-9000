<?php 

include_once("core.php");

$result = $_POST['result'];
$operation = $_POST['operation'];

$connect = mysqli_connect("localhost", "root", "", "calculator9000");
$sql = "INSERT INTO result (result, operation) values ('$result', $operation')";
$result = mysqli_query($connect, $sql);
$json_array = mysqli_fetch_all($result);


echo json_encode($json_array)

?>