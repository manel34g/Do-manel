		var nome = "Ana";
		document.write("<h1>" + nome + "</h1>"); 
		//cometário de uma linha

		/*comentários 
		em 
		muitas
		linhas
		*/
	 	/*variáveis em JavaScript não podem começar com caractéres numéricos, não podem ter caracteres epeciais,*/

		//variável booleana
		var booleana = false;

		//variável numérica
		var numerosReais = -5;

		//variável de strig/texto
		var letrasPalavra = "uma variavel";

		document.write("<h1>" + letrasPalavra + "</h1>");

		console.log(booleana);

		var duvida = prompt("Boa Tarde, já alugou hotel na Trivago?");

		document.write("<h1>Por que você " + duvida + " fez isso?</h1>");

		//null

		/* ausência intencional de um valor*/

		var qlqCoisa = null;

		//undefined

		/* valor não definido */

		var outraCoisas = undefined;

		//Desafio


		var a = 10;
		var b = 20;
		var c = null;

		document.write("<h1> A " + a + 
			"</h1> <h1> B " + b + 
			"</h1> <h1> C " + c + "</h1>" );

		var c = a;
		var a = b;
		var b = c;
 		var c = null;

 		document.write("<h1> A <span class='a'>"+ a +  " </h1>")
		document.write("<h1> B " + "<span class='a'>"  + b + 
			"</span> </h1>")
		document.write("<h1> C <span class='a'> " + c +  "</span></h1>");

 		/*operadores de comparação*/


 		// igual (==) verifica se os valores comparados são iguais

 		// idêntico (===) verifica se os valores comparados são iguais e do mesmo tipo

 		// Diferente (!+)Verifica se os valores comparados são diferentes

 		// Não idêntico (!==) Vefifica se os valores comparados são  diferente e de tipos diferentes

 		// Menor (<) - verifica se o valor da esquerda é menor que o valor da direita

 		// Maior (>) - verifica se o valor da esquerda é maior que o valor da direita

 		// Menor igual (<=) Verifica se o valor da esquerda é menor ou igual ao valor da direita

 		//Maior igual (>=) Verifica se o valor da esquerda é maior ou igual ao valor da direita

 		if (c == true )	{ 
 			document.write("<h1> É  verdadeiro</h1>")
 		}
 		else {
 			document.write("<h1> É  <span class='a'>verdadeiro</span></h1>")
 		}


 		//Casting de tipos -converter dados

 		// string para numérico , valor inteiro
 			//parseInt()

 		// string para numérico com fração
 			//parseFloat()

 		// numérico para string 
 			//toString()


 		// Operadores lógicos

 		// E (&&) Verdadeiro se todas as expressões forem verdadeiras

 		// Ou (||) Verdadeiro se pelo menos uma das expressões for verdadeira

 		// Negação (!) Inverte o resultado da expresssão de comparação 


 		//comando switch

 		switch (c){

 			case null:
 				var c = "null"
 				document.write("<h1> C <span class='a'> " + c.toUpperCase() + "</span></h1>")
 				break
 		}


 		//Operador Ternário

 		//var resultado = <condição> ? <verdadeiro> : <falso>;
 		var bcd = a <= 20 ? document.write("<h1> É <span class='a'> VERDADEIRO</span></h1>") : document.write("<h1> É <span class='a'>FALSO</span></h1>")


 		//Funções 

 		//Void: não retorna um Parâmetro

 		//Retorno: retorna um Parâmetro

 		function calcularAreaTerreno( Largura, Comprimento){

 			return Largura * Comprimento;

 		}
 		var area = calcularAreaTerreno(10,10)
 		document.write("<h1 onclick='alert('teste')'> A área do terreno é de <span class='a'>" + area + " </span> Metros²</h1>")


 		//Escopo

 		//* Global
 			
 		//* Função
 				  
 		//* Bloco  

 		//Funções Anônimas 

 		var saudarNovo = function (Nome){
 			
 			return Nome
 		}
 		document.write("<h1> Olá <span class='a'> " + saudarNovo("Vitor") + "</span></h1>")


 		//Manipulação de strings

 		// .length : Retorna o tamanho da String

 		// .charAt() : Retorna o caracter num determinado índice

 		// .indexOf() [-1 quando não há caracter] : Indica a primeira ocorrência de um determinado caracter

 		// .replace() : Substitui uma cadeia de caracteres, de um valor determinado, para outro concedido

 		// .substr() : Recorta uma parte da String, a partir de uma posição inicial, e uma quantidade de caracteres depois da posição inicial

 		// .toLowerCase() : Transforma os caracteres de uma String para letras minúsculas

 		// .toUpperCase() : Transforma os caracteres de uma String para letras maiúsculas

 		// .trim() : Remove os espaços nas estremidades da String



 		//Métodos matemáticos

 		// Math. ...

 		// Math.ceil() : Arredonda um valor fracionado para a casa unitária a cima.

 		// Math.floor() : Arredonda um valor fracionado para a casa unitária a baixo.

 		// Math.round() : Arredonda um valor para a casa unitária a baixo caso o valor decimal seja entre 1 e 4 e, arrendonda para a casa unitária a cima caso, seja entre 5 e 9.

 		// Math.random() : Gera um número aleatório entre 0 e 1.

 		// Math.abs() : Gera um valor absoluto, sempre positivo.


 		//Manipulação de Data

 		// var data = new Date()

 		// data.getDate() : Valor do Dia 

 		// data.getMonth() : Valor do Mês + 1

 		// data.getFullYear : Valor do Ano

 		// data.setDate() : Define o valor do Dia

 		// data.setMonth() : Define o valor do Mês

 		// data.setFullYear() : Define o valor do Ano

 		// data.getTime() : Recupera a data em milissegundos de 1 de janeiro de 1970 até a data em questão.

 		// /1000/60/60/24 : 86.400.000

 		function realizarOpp(){

		var numUm = parseInt(prompt("Digite o Primeiro número"))
		var realOpp = prompt("Digite a Operação")
		var numDois = parseInt(prompt("Digite o Segundo número"))
		 
		switch(realOpp){

			case "adição":
			document.write("<h1>  O Resultado <span class='a'>" + (numDois + numUm) +"</span></h1>")
			break

			case "adicão":
			document.write("<h1>  O Resultado <span class='a'>" + (numDois + numUm) +"</span></h1>")
			break

			case "adiçao":
			document.write("<h1>  O Resultado <span class='a'>" + (numDois + numUm) +"</span></h1>")
			break

			case "adicao":
			document.write("<h1>  O Resultado <span class='a'>"+ (numDois + numUm) +"</span></h1>")
			break

			// Subtração

			case "subtração":
			document.write("<h1>  O Resultado <span class='a'>"+ (numDois -numUm) +"</span></h1>")
			break

			case "subtracão":
			document.write("<h1>  O Resultado <span class='a'>"+ (numDois - numUm) +"</span></h1>")
			break

			case "subtraçao":
			document.write("<h1>  O Resultado <span class='a'>"+ (numDois -numUm) +"</span></h1>")
			break

			case "subtracao":
			document.write("<h1>  O Resultado <span class='a'>"+ (numDois - numUm) +"</span></h1>")
			break
		}
 		}	

 		realizarOpp()

 		//Eventos 

 		// Mouse
 		/*

			*onclick : aciona quando o elemento é clicado

			*ondblclick : acionado quando o elemento é clicado duas vezes

			*onmouseup : acionando qunado um determinado elemento é liberado

			*onmouseover : acionado quando o ponteiro do mouse está sobre o elemento.

			*onmouseout : acionado quando o ponteiro do mouse não está sobre o elemento.
 		*/

 		// Teclado 
 		/*
			*onkeydown : aciona quando pressiona a tecla
			*onkeypress : aciona enquanto pressiona a tecla
			*onkeyup : aciona quando a tecla é solta

		*/

		//Janela 

		//onresize : aciona quando a página redimensionada

		//onscroll : aciona quando o scroll do mouse é acionado 


		//Formulário

		//onfocus : aciona quando o elemento  recebe foco

		//onblur : aciona quando o elemento perde o foco

		//onchange : aciona quando o elemento muda de estado




		//Selecionar elementos do DOM

		//getElementById() : seleciona o elemento pelo Id

		//getElementsByTagName() : seleciona o elemento pela Tag

		//getElementsByClassName()  : seleciona o elemento pela classe

		//getElementsByName() : seleciona o elemento pelo Nome

		function changeColor (Cor){
			document.getElementById('frame').style.background = Cor
		}

		function changeColor2 (Cor,Id){
			document.getElementById(Id).style.background = Cor
		}

		function contCheck (){
			var content = document.getElementById("type").value.trim() 
			content = content.length
			console.log(content)
			/*switch (content) {

				case 0:
				document.getElementById('type').style.background = 'red'

				case 1:
				document.getElementById('type').style.background = 'red'

				case 2:
				document.getElementById('type').style.background = 'red'

				case 3:
				document.getElementById('type').style.background = 'green'


			}*/
			if (content <= 2) {
				document.getElementById('type').style.background = 'red'
			}
			else {
				document.getElementById('type').style.background = 'green'
			}
		}

		/*Array

		 Listas ordenadas 

		 var lista = Array();

		 lista[1] = 'item de lista1'

		 var lista = Array('item de lista1', 'item de lista2')

		 var lista = ['item de lista1', 'item de lista2']
	
		 Arrya multidimensional: Listas dentro de listas

		 var lista = [lista2 , lista3]

		 .push('') : adiciona um elemento no final do Array

		 .unshift('') : adiciona um elemento no início do Array

		 .pop('') : remove um elemento no final do Array

		 .shift('') : remove um elemento no início do Array

		 .indexOf('') : identifica o índice de um valor pesquisado

		 .sort() : reorganiza o indice dos elementos em ordem alfabética
		*/

		var lista_1 = Array()

		lista_1['frutas'] = Array("Uva", "Morango", "Melão", "Pera")
		lista_1["moveis"] = Array( "Geladeira", "Balcão", "Forno", "Pia")

		console.log(lista_1['moveis'][2])

		var contList = ['Cadeira','Impressora','Garfo']

		function add (Id) {

			var content = document.getElementById(Id).value

			if (content.length == 0){
					alert('Escreva algo')
					document.getElementById(Id).value = ''
			}	
			else {

				if (contList.indexOf(content) == -1) {
					console.log(content.indexOf(content))
					contList.push(content)
				 	console.log(contList)
				 	alert(content + ', foi adicionado com sucesso!!')
				 	document.getElementById(Id).value = ''
					}	

				else {
				alert('Esse item já está na lista')
				document.getElementById(Id).value = ''
					}		
			 	
			}
			
		}
		function Ord (){
			contList.sort()
			document.getElementById('write').value = ''
			console.log(contList)
		}


		// WHILE
		/* while (<condição>){
			código
		}
		*/



		// DO WHILE
		/*do {
			cógigo
		} 
		while(condição) {
			código
			
		}
		*/


		// FOR	
		/* for(variavael;condição;controle){
			código
		}
		*/

		//For in
		/*for (var x in lista1) {
			código
		}
		
		*/

		//Foreach
		/*lista1.forEach(callback(valor,indice,array))
		*/



		// arguments

		// Retorna os parâmetros da função.


		// Tratamentos de erro

		/* try ; tenta executar um código

		try {
				código

		}
		catch(e) {
				código
		}
			finally ; executa após o código com erro
		
		finally {
				código
		}
				
		throw nem Error()
		}
		*/

		// Window
		/*É janela de visualização do navegador*/