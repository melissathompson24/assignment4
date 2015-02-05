
//ready event handler
$(document).ready(function() {

	//adds span elements after each input element
	$(":text").after("<span> </span>");

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


	  			//validate phone number
	  			var phone = $("#phone").val();
	  			if (phone.length < 10) {
	  				$("#phone").next().text("Your phone number must be exactly 10 digits long.");
	  				isValid = false;
	  			} else {
	  				$("#phone").next().text("");
	  			}



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