function playSound() {
    Synth.loadSoundProfile({
	    name: 'foo',
		attack: function() { return 0.002; },
		dampen: function(sampleRate, frequency, volume) {
		return Math.pow(0.5*Math.log((frequency*volume)/sampleRate),2);
	    },
		wave: function(i, sampleRate, frequency, volume) {
		var base = this.modulate[0];
		//console.log(base);
		return this.modulate[4](
					i,
					sampleRate,
					frequency,
					Math.pow(base(i, sampleRate, frequency, 0), 2) +
					(0.75 * base(i, sampleRate, frequency, 0.25)) +
					(0.1 * base(i, sampleRate, frequency, 0.5))
					);
	    }
	});
    Synth.play('foo','D',4,2);
    Synth.debug();
}

