export function is18OrOlder(birthDate: Date) {
  const today = new Date(); // cria um objeto de data com a data e hora atuais
  const birth = new Date(birthDate); // cria um objeto de data com a data de nascimento fornecida
  const eighteenYearsAgo = new Date( // cria um objeto de data que representa a data de 18 anos atrás a partir de hoje
    today.getFullYear() - 18, // obtém o ano atual e subtrai 18
    today.getMonth(), // obtém o mês atual (note que janeiro é 0, fevereiro é 1, etc.)
    today.getDate() // obtém o dia do mês atual
  );
  // retorna true se a data de nascimento for menor ou igual a 18 anos atrás e maior ou igual a 1900, caso contrário, retorna false
  return birth <= eighteenYearsAgo && birth.getFullYear() >= 1900;
}
