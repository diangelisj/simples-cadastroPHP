<?php

/* arquivo de conexão deverá ser informado de acordo com 
as regras do servidor.
*/
include_once 'conexao.php';

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);

$query_usuario = "INSERT INTO usuarios (nome, email) VALUES ('$nome', '$email')";
mysqli_query($conn, $query_usuario);

if(mysqli_insert_id($conn)){
	echo true;
}else{
	echo false;
}