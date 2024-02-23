function tocarNota(nota, tom, volume, duracao) {
    // Validar parâmetros
    if (!["C", "D", "E", "F", "G", "A", "B"].includes(nota)) {
      throw new Error(`Nota inválida: ${nota}`);
    }
  
    if (!Number.isInteger(tom) || tom < 1) {
      throw new Error(`Tom inválido: ${tom}`);
    }
  
    if (!Number.isInteger(volume) || volume < 0 || volume > 100) {
      throw new Error(`Volume inválido: ${volume}`);
    }
  
    if (!Number.isInteger(duracao) || duracao < 0 || duracao > 1000) {
      throw new Error(`Duração inválida: ${duracao}`);
    }
  
    // Calcular frequência da nota
    const frequencias = {
      C: 261.63,
      D: 293.66,
      E: 329.63,
      F: 349.23,
      G: 392.00,
      A: 440.00,
      B: 493.88,
    };
    const frequenciaBase = frequencias[nota];
    const frequencia = frequenciaBase * Math.pow(2, tom - 1);
  
    // Criar contexto de áudio
    const audioContext = new AudioContext();
  
    // Criar oscilador
    const oscillator = audioContext.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequencia, audioContext.currentTime);
  
    // Criar envelope de amplitude
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume / 100, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duracao / 1000);
  
    // Conectar os nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
  
    // Iniciar e parar o som
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duracao / 1000);
  }
  window.onload = function() {
  // Exemplo de uso
  const playButton = document.getElementById("play-button");

playButton.addEventListener("click", () => {
  // Call tocarNota here with desired parameters
  tocarNota("D", 4, 50, 250);
  tocarNota("C", 4, 50, 250);
  tocarNota("D", 4, 50, 250);
  tocarNota("C", 4, 50, 250);

});
  }