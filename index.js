import { Cliente } from "./Cliente.js";
import { Gerentes } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Funcionario } from "./funcionarios/Funcionario.js";

const diretor = new Diretor("Rodrigo", 10000, 1234567900);
diretor.cadastrarSenha("12345")
const gerente = new Gerentes("Marcelo", 5000, 9998887770);
gerente.cadastrarSenha("1234")
const cliente = new Cliente("Marcia", 12323456700, "123");


const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345");
const gerenteEstalogado = SistemaAutenticacao.login(gerente, "123")

console.log(gerenteEstalogado, diretorEstaLogado);
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");