		//CAPTURAR ELEMENTOS HTML
		const calculadora = document.getElementById('calculadora');
		const botonAbrir = document.getElementById('botonShow');
		const botonClose = document.getElementById('close');
		const pantalla = document.getElementById('pantalla');
		const number = document.querySelectorAll('.number');
		const suma = document.querySelector('.suma');
		const clear = document.querySelector('.clear');
		const resta = document.querySelector('.resta');
		const multiplica = document.querySelector('.multiplica');
		const divideix = document.querySelector('.divideix');
		const signe = document.querySelector('.signe');
		const coma = document.querySelector('.coma');
		const igual = document.querySelector('.igual');
		//VARIABLES AUDIOS
		let clicNumbers = new Audio('clic.mp3');
		let clicOperators = new Audio('operators.mp3');
		// Variables
		let digit = "";
		let memoria = "";
		let operacio;
		
		//EVENTOS
		botonAbrir.addEventListener('click', ()=>{abreCalculadora()});
		calculadora.style.display = "none";
		function abreCalculadora(){
			calculadora.style.display = "block";
		}
		botonClose.addEventListener('click', ()=>{closeCalculadora()});
		function closeCalculadora(){
			calculadora.style.display = "none";
		}
			
		number.forEach((element, index)=>{
			element.addEventListener('click', ()=>{calc(index)});
		});

		clear.addEventListener('click', ()=>{clearScreen()});
		suma.addEventListener('click', ()=>{sumar()});
		resta.addEventListener('click', ()=>{restar()});
		multiplica.addEventListener('click', ()=>{multiplicar()});
		divideix.addEventListener('click', ()=>{dividir()});
		signe.addEventListener('click', ()=>{signar()});
		coma.addEventListener('click', ()=>{decimal()});
		igual.addEventListener('click', ()=>{iguals()});
		
		//FUNCTION CALC
		function calc(num){
			clicNumbers.play();
			pantalla.value = digit + num;
			digit = pantalla.value;
		}
		
		//FUNCTION IGUALA
		function iguals(){
			clicOperators.play();
			if(operacio=="suma"){
				memoria = Number(digit) + Number(memoria);
				
			}else if(operacio=="resta"){
				if (memoria===""){
				memoria =  Number(digit);
			
			}else{
				memoria = memoria - Number(digit);
				}
			
			} else if(operacio=="multiplicacio"){
			if(memoria === ""){
				memoria = 1;
								
			}if(digit==""){
				digit=1;
			}
				memoria = Number(digit) * memoria;
			}else if(operacio=="divide"){
				if(memoria===""){
				memoria = Number(digit);
				//digit = "";
			} 
			if(digit==""){
				memoria = pantalla.value;
			}	
				digit = pantalla.value;
				memoria =  Number(memoria) / Number(digit);
				
			}
			pantalla.value = memoria;
			digit = "";
		}

		//FUNCTION DECIMAL
		function decimal(){
			clicNumbers.play();
		if(digit==""){
			digit="0.";
			}
		if(digit.indexOf('.')== -1){
			pantalla.value = digit + '.';
			digit = pantalla.value; 
			}
			
		}
		
		//FUNCTION SUMA
		function sumar(){
			clicNumbers.play();
			memoria = Number(digit) + Number(memoria);
			pantalla.value = memoria;
			digit = "";
			operacio = "suma";
			//memoria = Number(digit);
			//digit = "";
			}
			
		//FUNCTION RESTA	
		function restar(){
			clicNumbers.play();
		if (memoria===""){
			memoria =  Number(digit);
			
		} else {
			memoria = memoria - Number(digit);
		}
			pantalla.value = memoria;
			digit = "";
			operacio = "resta";
		}
		//FUNCTION MULTIPLICACIÓN
		function multiplicar(){
			clicNumbers.play();
		if(memoria === ""){
			memoria = 1;
								
		} if(digit==""){
			digit=1;
			}
			 
			memoria = Number(digit) * memoria;
			pantalla.value = memoria;
			digit = "";
			operacio = "multiplicacio";
		}
		
		
		//FUNCTION DIVISION
		function dividir(){
			clicNumbers.play();
			if(memoria===""){
				memoria = Number(digit);
				digit = "";
			} if(digit==""){
				memoria = pantalla.value;
			}else{
				memoria =  Number(memoria) / Number(digit);
				pantalla.value = memoria;
				digit = "";
				
			}
			operacio = "divide";	
		}	
		//FUNCTION SIGNES	
		function signar(){
			clicNumbers.play();
		if(memoria!= "" && digit != ""){
			//pantalla.value = digit;
			pantalla.value = digit * -1;
			digit = pantalla.value;

		} else {
			memoria = Number(digit) + memoria;
			memoria = memoria * -1;
			pantalla.value = memoria;
			digit ="";
			}
		}
		//FUNCTION LIMPIAR PANTALLA
		function clearScreen(){
			clicNumbers.play();
			pantalla.value = "0";
			digit= "";
			memoria = "";
			
		}
		
