import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Turma } from '../models/turma-model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TrumasService {

    constructor(private http: HttpClient) {}

    lista(): Observable<Turma[]> {
        return this.http.get<Turma[]>('assets/turmas.json');
    }
}
