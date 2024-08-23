"use strict";
var AudioLevel;
(function (AudioLevel) {
    AudioLevel[AudioLevel["min"] = 0] = "min";
    AudioLevel[AudioLevel["medio"] = 1] = "medio";
    AudioLevel[AudioLevel["otroValor"] = 10] = "otroValor";
    AudioLevel[AudioLevel["max"] = 11] = "max";
})(AudioLevel || (AudioLevel = {}));
const currentAudio = AudioLevel.otroValor;
console.log(currentAudio);
console.log(AudioLevel);
