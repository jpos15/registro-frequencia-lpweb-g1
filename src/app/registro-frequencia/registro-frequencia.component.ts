import { Component, OnInit } from '@angular/core';
import { TrumasService } from './turmas.service';
import { Turma } from '../models/turma-model';
import { Aluno } from '../models/aluno-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-frequencia',
  templateUrl: './registro-frequencia.component.html',
  styleUrls: ['./registro-frequencia.component.css']
})
export class RegistroFrequenciaComponent implements OnInit {

  turmas: Array<Turma>;
  alunos: Array<Aluno>;
  registros: Array<any> = [];

  turma: string;
  aluno: string;
  frequencia: number;
  nota1: number;
  nota2: number;

  constructor( private turmasService: TrumasService ) { }

  ngOnInit() {
    this.criarFormulario();
    this.obterTurmas();
  }

  obterTurmas() {
    this.turmasService.lista()
      .subscribe(dados => {
        this.turmas = dados;
      });
  }

  criarFormulario() {
    this.turma = '';
    this.aluno = '';
    this.frequencia = null;
    this.nota1 = null;
    this.nota2 = null;
  }

  salvar(form: NgForm) {
    const objRegisto = {
      turma: this.encontrarTurma(this.turma),
      aluno: this.encontrarAluno(this.aluno),
      frequencia: this.frequencia,
      nota1: this.nota1,
      nota2: this.nota2,
      media: this.calcularMedia(this.nota1, this.nota2)
    };

    this.registros.push(objRegisto);
    this.alunos = [];
    form.resetForm();
    console.log(this.registros);
   }

  encontrarTurma(numero: string) {
    return this.turmas.find( cd => cd.numero === numero);
  }

  encontrarAluno(codigo: string) {
    return this.alunos.find( cd => cd.codigo === codigo);
  }

  calcularMedia(nota1: number, nota2: number) {
    return (nota1 + nota2) / 2;
  }

  calcularFrequenciaMedia() {
    const quantidade = this.registros.length;
    return this.registros.reduce((a, b) => a + b.media, 0) / quantidade;
  }

  calcularNota1Media() {
    const quantidade = this.registros.length;
    return this.registros.reduce((a, b) => a + b.nota1, 0) / quantidade;
  }

  calcularNota2Media() {
    const quantidade = this.registros.length;
    return this.registros.reduce((a, b) => a + b.nota2, 0) / quantidade;
  }

  turmaSelecionada() {
    const objTurma = this.turmas.find( cd => cd.numero === this.turma);
    this.alunos = objTurma.alunos;
    this.aluno = '';
    console.log(this.turma);
  }
}
