import { Cliente } from "./Cliente.js";
import { Contas } from "./contas/Conta.js";
import { ContaCorrente } from "./contas/ContaCorrente.js";
import { ContaPoupanca } from "./contas/ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const ContaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
ContaCorrenteRicardo.depositar(500);
ContaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(ContaCorrenteRicardo)