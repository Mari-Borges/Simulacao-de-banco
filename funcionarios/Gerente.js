import { Funcionario } from "./Funcionario";

export class Gerentes extends Funcionario{
    constructor(nome, salario, cpf){
        super(nome, salario, cpf);
        this._bonificacao = 1.1;
    }

}