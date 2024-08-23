enum AudioLevel {
    min,
    medio,
    otroValor = 10,
    max
}

const currentAudio: AudioLevel = AudioLevel.otroValor
console.log(currentAudio)
console.log(AudioLevel)