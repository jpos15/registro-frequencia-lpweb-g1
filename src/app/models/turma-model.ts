import { Aluno } from './aluno-model';

export class Turma {

    constructor(numero: string,
                nome: string,
                alunos: Array<Aluno>) {}

    numero: string;
    nome: string;
    alunos: Array<Aluno>;
}