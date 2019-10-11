<!DOCTYPE html>
<html lang="pt-BR">

<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>CALCULO</title>
    <link rel="stylesheet" href="default.css" />
    <?php 
/* esse bloco de código em php verifica se existe a sessão, pois o usuário pode
 simplesmente não fazer o login e digitar na barra de endereço do seu navegador 
o caminho para a página principal do site (sistema), burlando assim a obrigação de 
fazer um login, com isso se ele não estiver feito o login não será criado a session, 
então ao verificar que a session não existe a página redireciona o mesmo
 para a index.php.*/
session_start();
if((!isset ($_SESSION['login']) == true) and (!isset ($_SESSION['senha']) == true))
{
  unset($_SESSION['login']);
  unset($_SESSION['senha']);
  header('location:index.php');
  }
 
$logado = $_SESSION['login'];
?>
</head>

<head>

<body>
	<header>
		<div class="topbar">
			<h2>Os Incriveis Calculos de Kelvin, o Matematico.</h2>
		</div>
	</header>
	<main>
		<form name="calcform" method="dialog">
			<fieldset>
				<legend>Massa óssea</legend>

				<label for="altura">Altura:<select name="opMedida3" id="opMedida3">
						<option value="centimetros">Centimetros</option>
						<option value="metros">Metros</option>
					</select></label>
				<input type="text" name="altura" onkeyup="somenteNumeros(this);" maxlength="10" id="altura" placeholder="Altura" required>

				<label for="punho">Diâmetro do punho:<select name="opMedida1" id="opMedida1">
						<option value="centimetros">Centimetros</option>
						<option value="milimetros">Milimetros</option>
						<option value=""></option>
					</select></label>
				<input type="text" name="punho" onkeyup="somenteNumeros(this);" maxlength="10" id="punho" placeholder="Diâmetro do punho" required>

				<label for="femur">Diâmetro do fêmur:<select name="opMedida2" id="opMedida2">
						<option value="centimetros">Centimetros</option>
						<option value="milimetros">Milimetros</option>
						<option value=""></option>
					</select></label>
				<input type="text" name="femur" onkeyup="somenteNumeros(this);" maxlength="10" id="femur" placeholder="Diâmetro do fêmur" required>

				<label for="resultado">Resultado:</label>
				<input tabindex="-0" type="text" name="resultado" id="resultado" readonly />

				<input class="botao" type="button" value="Limpar" onclick="apagaForm()">
				<input class="botao" type="button" value="Calcular" onClick="calcular(document.calcform.opMedida1.value,
				 document.calcform.opMedida2.value,
				 document.calcform.opMedida3.value)" />
				<figcaption>MO = (Altura<sup>2</sup> x Punho x Fêmur x 400)<sup> 0,712</sup> x 3,02</figcaption>
			</fieldset>

			<fieldset>
				<legend>Taxa metabolismo basal</legend>

				<label for="valor1">Digite o valor do peso:</label>
				<input type="text" name="valor1" onkeyup="somenteNumeros(this);" maxlength="10" id="valor1" placeholder="Seu peso" title="Seu peso" required>

				<label for="valor2">Digite o valor da altura:<select name="opAltura2" id="opAltura2">
					<option value="centimetros">Centimetros</option>
					<option value="metros">Metros</option>
				</select></label>
				<input type="text" name="valor2" onkeyup="somenteNumeros(this);" maxlength="10" id="valor2" placeholder="Sua altura" required>

				<label for="valor3">Digite o valor da idade:</label>
				<input type="text" name="valor3" onkeyup="somenteNumeros(this);" maxlength="10" id="valor3" placeholder="Sua idade" required>

				<label>Escolha o genero:<select name="oper" id="oper">
					<option value="masculino">Masculino</option>
					<option value="feminino">Feminino</option>
					

				</select></label>

				<label for="res">Resultado:</label>
				<input tabindex="-0" type="text" name="res" id="res" readonly />

				<input class="botao" type="button" value="Limpar" onclick="apagaForm1()">
				<input class="botao" type="button" value="Calcular" onClick="calcular2(document.calcform.oper.value,
				document.calcform.opAltura2.value)" />
			</fieldset>
		</form>
	</main>
	<script src="soma.js"></script>
</body>

</head>

</html>