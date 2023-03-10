var audio = document.getElementById("audioG");
var playPauseBtn = document.getElementById("playPause");

playPauseBtn.addEventListener("click", function(){
	if(audio.paused){
		audio.play();
		playPauseBtn.innerHTML = "Pausa";
        audio.volume = 0.5;

	}
	else {
		audio.pause();
		playPauseBtn.innerHTML = "Play";
        audio.volume = 0.5;
	}
});