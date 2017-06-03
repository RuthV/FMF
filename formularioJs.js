



function validar(form) {


 	$('#nombre').css('border-color', 'gray')
 	$('#direccion').css('border-color', 'gray')
 	$('#telefono').css('border-color', 'gray')


 	var contador = false;
	
	if (nombre.value.length==0) {
		$('#nombre').css('border-color', 'red')
		
	} else
	   $('#nombre').css('border-color', 'gray') 
	   

	if (direccion.value.length==0) {
		$('#direccion').css('border-color', 'red')
		
	} else
	    $('#direccion').css('border-color', 'gray')
	    
	if (telefono.value.length==0 || isNaN($('#telefono').val())) {
		$('#telefono').css('border-color', 'red')
		$("#error").append('<div> Error: solo numeros</div>');
		
	}else {
	$('#telefono').css('border-color', 'gray');
	$("#error").remove();
	contador = true;
	
    }

    if (nombre.value.length!=0 && direccion.value.length!=0 && telefono.value.length!=0 && contador==true ) {
    	console.log("si");
    	$("#success").append('<div>Tus datos son: <br/> Nombre : '+nombre.value+' <br/> Direcci&oacuten : '+direccion.value+' <br/> tel&eacutefono : '+telefono.value+'</div>');
    }

	
}