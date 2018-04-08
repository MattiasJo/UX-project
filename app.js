var nature_sounds = new Audio('./media/forest_sounds.mp3');
var water_sounds = new Audio('./media/water_sounds.mp3');
var fire_sounds = new Audio('./media/fire_sounds.mp3');
var playing = {
	'audio-nature': false,
	'audio-water': false,
	'audio-fire': false
};

$(document).ready(function() {
	$('#fullpage').fullpage({
		navigation: true,
		navigationTooltips: ['First page', 'Water stream', 'Nature', 'Bonfire']
	});

	setInterval(function() {
		$('#ctaBtn').addClass('rubberBand');
	}, 200);

	$('.icon-link').on( "click", function() {
		switch(this.id) {
			case 'water-link':
				$.fn.fullpage.moveTo(2);
				break;
			case 'nature-link':
				$.fn.fullpage.moveTo(3);
				break;
			case 'fire-link':
				$.fn.fullpage.moveTo(4);
				break;
		}
	});

	$('.audio-button').on( "click", function() {
		switch(this.id) {
			case 'audio-nature':
				if(playing[this.id]) {
					document.getElementById('audio-nature').src = "./media/play_button.png";
					nature_sounds.pause();
					playing[this.id] = false;
				} else {
					document.getElementById('audio-nature').src = "./media/pause_button.png";
					nature_sounds.play();
					playing[this.id] = true;
				}
				break;
			case 'audio-water':
				if(playing[this.id]) {
					document.getElementById('audio-water').src = "./media/play_button.png";
					water_sounds.pause();
					playing[this.id] = false;
				} else {
					document.getElementById('audio-water').src = "./media/pause_button.png";
					water_sounds.play();
					playing[this.id] = true;
				}
				break;
			case 'audio-fire':
				if(playing[this.id]) {
					document.getElementById('audio-fire').src = "./media/play_button.png";
					fire_sounds.pause();
					playing[this.id] = false;
				} else {
					document.getElementById('audio-fire').src = "./media/pause_button.png";
					fire_sounds.play();
					playing[this.id] = true;
				}
				break;
		}
	});

	$('.volume-slider').on("click", function(){
		switch(this.id) {
			case 'volume-water':
				water_sounds.volume = this.value * 0.01;
				break;
			case 'volume-nature':
				nature_sounds.volume = this.value * 0.01;
				break;
			case 'volume-fire':
				fire_sounds.volume = this.value * 0.01;
				break;
		}
	});

	$('#ctaBtn').on( "click", function() {
		$.fn.fullpage.moveSectionDown();
	});

	$('#timerBtn').on( "click", function() {
		$('#timer__logo').addClass('tada');
		var duration = $('#timerInput')[0].value * 1000 * 60;
		var min, sec;
		if(duration === 0) { duration = 5 * 1000 * 60; }
		var timer = setInterval(function(){
			if(duration > 0) {
				duration -= 1000;
				min = Math.floor(duration / (60 * 1000));
				sec = Math.floor((duration / 1000) % 60);
				document.getElementById("timerVal").innerHTML = min + "m " + sec + "s";
			} else {
				document.getElementById("timerVal").innerHTML = "0m 0s";
				clearInterval(timer);
			}
		}, 1000);
	});
});
