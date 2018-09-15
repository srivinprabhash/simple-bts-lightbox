jQuery(document).ready(function($) {

	$('img').click(function(event) {
		img_src = $(this).attr('src');
		lauch_modal(img_src)
	});

});

function lauch_modal(img_src) {
	
	// PREPARE ELEMENT
	var elem = "<div class='modal fade' id='img-lightbox' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'></div></div></div></div>";
	$('body').append(elem)

	$("#img-lightbox .modal-body").html("<center><img class='img-fluid img-responsive'/></center>")
	$("#img-lightbox .modal-body img").attr('src', img_src);
	$("#img-lightbox").modal()
	
}