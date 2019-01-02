/*Export Table Init*/

"use strict"; 

$(document).ready(function() {
	$('#prodata').DataTable( {
		dom: 'Bfrtip',
		buttons: [
			'csv'
		]
	} );
} );
