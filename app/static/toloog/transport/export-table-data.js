/*导出按钮的js*/

"use strict"; 

$(document).ready(function() {
	$('#example').DataTable( {
		dom: 'Bfrtip',
		buttons: [
			'csv', 'excel'
		]
	} );
} );