/*5.	When the page has finished loading the section must fade in*/
$(document).ready(function() {
	$("section").show(function() {
		$("p").fadeIn(1000);
	});
});

/*6.	Add a textbox with the class "alias", and put the cursor inside it right after the <section> fades in.*/
$( document ).ready(function() {
  $( "#textbox" ).focus();
});
