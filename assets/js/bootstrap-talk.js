var slide_wrap = $('.slide-holder');

function emptySlide() {
	slide_wrap.empty();
}

function generatePagination(total_slides) {
	var pagination = $('#slide-pagination ul');

	pagination.append('<li><a href="#slide-1">&laquo;</a></li>');
	
	for (var i = 1; i <= total_slides; i++) {
		pagination.append('<li><a href="#slide-' + i + '">' + i + '</a></li>');
	}

	pagination.append('<li><a href="#slide-' + total_slides + '">&raquo;</a></li>');
}

$(function() {
	// Generate Pagination
	generatePagination(15);

	// Load Hello When Clicked
	$('#hello').click(function (){
		emptySlide();
		slide_wrap.load('slides/hello.html');
	});

	// Load Hello When Clicked
	$('#code').click(function (){
		emptySlide();
		slide_wrap.load('slides/code.html');
	});

	$('#docs').click(function (){
		emptySlide();
		slide_wrap.load('slides/docs.html');
	});

	// Load Slide When Requested
	$('#slide-pagination a').click(function(){
		emptySlide();
		var slide = this.hash.substr(1);
		slide_wrap.load('slides/' + slide + '.html');
	});

	// Check for existing urls and fetch that data
	if(window.location.hash) {
		var slide = window.location.hash.substr(1);
		emptySlide();
		slide_wrap.load('slides/' + slide + '.html');
	}
});