$(document).ready(function() {
	$('#fullpage').fullpage();
	/*$('#fullpage').fullpage({
		anchors:['firstPage', 'waterPage', 'naturePage', 'windPage']
	});*/

	$('#ctaBtn').addClass('rubberBand');

	/*$('#ctaBtn').hover(function() {
		$(this).addClass('rubberBand');
	});*/

	$('#ctaBtn').on( "click", function() {
		$.fn.fullpage.moveSectionDown();
	});
});
