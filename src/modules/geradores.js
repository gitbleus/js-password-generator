const rand = (min, max) => Math.floor(Math.random()*(max-min) + min)
const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const simbolos = '!@#$%&*'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  const senhaArray = [];
  qtd = Number(qtd);

  if (qtd > 128) return 'Você ultrapassou 128 caracteres!';

  for (let i = 0; i < qtd; i++) {
    if (maiusculas) {
      senhaArray.push(geraMaiuscula())
    }
    if (minusculas) {
      senhaArray.push(geraMinuscula())
    }
    if (numeros) {
      senhaArray.push(geraNumero())
    }
    if (simbolos) {
      senhaArray.push(geraSimbolo())
    }
  }

  return senhaArray.join('').slice(0, qtd)
}

