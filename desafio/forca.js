class Forca {
  constructor(palavraCorreta) {
    this.palavraCorreta = palavraCorreta;
    this.letrasChutadas = []
    this.vidas = 6;
    this.palavra = (() => {
      let underline = []
      for (let i = 0; i < palavraCorreta.length; i++) {
        underline.push("_")
      }
      return underline
    })()
    
  }

  chutar(letra) {
    if (letra.length > 1) {
    } else {
      if (this.letrasChutadas.includes(letra, 0)) {
      } else {
        this.letrasChutadas.push(letra)
        if (this.palavraCorreta.includes(letra, 0)) {
          for (let i = 0; i < this.palavraCorreta.length; i++) {
            if (this.palavraCorreta[i] === letra) {
              this.palavra[i] = letra
            }
          }
        } else {
          this.vidas--;
        }
      }
    }
  }

  buscarEstado() {
    if (this.vidas === 0) {
      return "perdeu"
    } else if (this.palavra.join('') === this.palavraCorreta) {
      return "ganhou"
    } else {
      return "aguardando chute"
    }
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca
