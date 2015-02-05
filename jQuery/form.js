
//ready event handler
$(document).ready(function() {

	//adds span elements after each input element
	$(":text").after("<span> </span>");

	//track how many digits are entered into phone entry
	  			/*$("#phone").keyup(function(){
	  				var phoneLength = $('#phone').length;
	  				$("#phoneLength").append(phoneLength + "Digits entered");
	  				if (phoneLength < 10) {
	  					$("#phone").addClass('inValid');
	  				} else if (phoneLength ===10) {
	  					$("#phone").addClass('Valid');
	  				}
				});*/


			
			$("#phone").keyup(function(){
				var phoneLength = $("#phone").length;
				console.log(phoneLength);
  				if (phoneLength > 9) {
  					$("#phone").removeClass('inValid');
  					$("#phone").addClass('Valid');
  				}
  				
  			});



/*$("#phone").keyup(function(){
				var phoneLength = $(this).length;
				console.log(phoneLength);
  				if (1 > phoneLength < 10) {
  					$("#phone").addClass('inValid');

				} else if (phoneLength > 9) {
							$("#phone").removeClass('inValid');
							$("#phone").addClass('Valid');
  				}
  				
  			});*/



	  			
  			


			 	/*var maxLength = 10;
			 	$('#phone').keyup(function() {
			 		var length = $(this).val().length;
			 		var length = maxLength - length;
			 		$('#phoneLength').text(length);
			 	});*/
			 	/*$("#phone").keyup(function() {
			 	alert("keyup event occured!");
			 	});*/

	//once form is submitted
	 	$("#form").submit(
	 	function(event) {
	 	var isValid = true;

		  		//validate name entry
	 			var name = $("#name").val();

	  			if ( name.length <= 0) {
	 				$("#name").next().text("Your name is required.");
	 				isValid = false;
	  			} else {
	 				$("#name").val(name);
	 				$("#name").next().text(""); }


	 			//validate name entry
	  			var address = $("#address").val();

	 			if ( address.length <= 0) {
	  				$("#address").next().text("Your address is required.");
	  				isValid = false;
	  			} else {
	 				$("#address").val(address);
	  				$("#address").next().text(""); }


  				//make sure phone is in correct format



	  			//validate email address
	  			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z-9.-]+\.[A-Za-z]{2,4}\b/;
	  			var email = $("#email").val();
	  			if (email == "") {
	  				$("#email").next().text("Your email address is required.");
	  				isValid = false;
	  			} else if (!emailPattern.test(email)) {
	  				$("#email").next().text("You must enter a valid email address");
	  				isValid = false;
	  			} else {
	  				$("#email").next().text("");
	  			}



	  			//prevent form from being submitted if any entries are invalid
	  			if (isValid == false) {event.preventDefault(); 
	  				$('input').addClass('inValid');

	  			}
				     


		} // end function
	); //end submit




}); //end ready event handler function