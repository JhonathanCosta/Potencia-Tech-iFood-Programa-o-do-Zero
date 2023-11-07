
// Função para calcular o saldo de vitórias
function calcularSaldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível com base no saldo
function determinarNivel(saldoVitorias) {
    if (saldoVitorias < 10) {
        return 'Ferro';
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        return 'Bronze';
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        return 'Prata';
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        return 'Ouro';
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        return 'Diamante';
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        return 'Lendário';
    } else {
        return 'Imortal';
    }
}

// Função principal que chama as funções auxiliares
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = calcularSaldoVitorias(vitorias, derrotas);
    const nivel = determinarNivel(saldoVitorias);
    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Exemplo de uso da função
const vit = 60;
const der = 10;
const resultado = calcularNivel(vit, der);
console.log(resultado);
