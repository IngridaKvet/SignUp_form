const inputAll = document.querySelectorAll("input");

let clickEvent = () => {
    document.querySelector("input").classList.add("submitted")
    console.log("he")
}

inputAll.forEach((item) => {
        item.addEventListener('click', function clickEvent(event){
            event.target.classList.add('submitted'); 
        })
    });
    
//__________________

  document.getElementById("Pass1").addEventListener("change", validatePassword);
  document.getElementById("Pass2").addEventListener("change", validatePassword);

	function validatePassword(){
		let pass1 = document.getElementById("Pass1").value;
    let pass2 = document.getElementById("Pass2").value;

    if((pass1 != pass2)&&(pass2 != "")) {
      document.getElementById("errorMsg").innerHTML="Passwords Don\'t Match";
			document.getElementById('Pass1').setCustomValidity('Passwords Don\'t Match');
			document.getElementById('Pass2').setCustomValidity('Passwords Don\'t Match');
			
    	} else {
        document.getElementById('errorMsg').innerHTML='';
				document.getElementById('Pass1').setCustomValidity('');
				document.getElementById('Pass2').setCustomValidity('');

    }   

  }
