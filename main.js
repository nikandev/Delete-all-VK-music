var list = document.querySelectorAll(".audio_row");

var delay = 1000; //ms
var promise = Promise.resolve();

console.log(`Total songs: ${list.length}`);

list.forEach(function(element) {
	promise = promise.then(function() {
		let obj = AudioUtils.getAudioFromEl(element);
		console.log(`delete ${obj[3]}`);
		console.log(`aid ${obj[0]}`);
		console.log(`oid ${obj[1]}`);
		var hashes = obj[13].split('/');
		var hash = hashes[3];

		console.log(`hash ${hash}`);

		ajax.post("al_audio.php", {
			act: "delete_audio",
			oid: obj[1],
			aid: obj[0],
			hash: hash,
			restore: 1
		})
		
		return new Promise(function (resolve) {
			setTimeout(resolve, delay);
		});
	});
});

promise.then(function () {
  console.log('Loop finished.');
});
