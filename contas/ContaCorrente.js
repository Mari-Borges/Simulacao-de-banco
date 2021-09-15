import { Contas } from "./Conta.js";

export class ContaCorrente extends Contas {
    static numeroDeContas = 0;
    constructor(agencia, cliente){
        super(0, agencia, cliente);
        ContaCorrente.numeroDeContas += 1; 
    }
    teste(){
        super.teste();
        console.log("teste na classe conta corrente");
    }
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa)
        }
}
