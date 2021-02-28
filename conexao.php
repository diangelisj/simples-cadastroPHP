<?php
$servidor = "localhost";// em alguns casos deverá informar o número ip, outros o endereço url (kinghost/ locaweb)
$usuario = "root"; //
$senha = "";
$dbname = "nome do banco de dados";

//Criar a conexao
$conn = mysqli_connect($servidor, $usuario, $senha, $dbname);