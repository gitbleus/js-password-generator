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

  const geradores = [];
  if (maiusculas) geradores.push(geraMaiuscula);
  if (minusculas) geradores.push(geraMinuscula);
  if (numeros) geradores.push(geraNumero);
  if (simbolos) geradores.push(geraSimbolo);

  for (let i = 0; i < qtd; i++) {
    const geradorAleatorio = geradores[Math.floor(Math.random() * geradores.length)];
    senhaArray.push(geradorAleatorio());
  }

  return senhaArray.join('');
}

