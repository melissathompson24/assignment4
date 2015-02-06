
//ready event handler
$(document).ready(function() {

	//adds span elements after each input element
	$(":text").after("<span> </span>");

	//track how many digits are entered into phone entry
		$('#phone').keyup(function () {
		    if ($('#phone').val().length < 10) {
		        $(this).addClass('inValid');
		    } else {
		        $(this).removeClass('inValid');
		        $(this).addClass('Valid');
		    }
		});


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

  				var phoneValue = $('#phone').val();
  				console.log(phoneValue);
  				var phoneFormatted = "(" + phoneValue.substr(0,3) + ") " + phoneValue.substr(3,3) + "-" + phoneValue.substr(6,4);
  				$('#phone').val(phoneFormatted);


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
	  			} else {
	  				confirm("Thanks! You've submitted the following information:" + name + ", " + address + ", " + phoneFormatted + ", and " + email + ".");
	  			}
				     


		} // end function
	); //end submit




}); //end ready event handler function