import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordsControllerService {

  constructor(private http: HttpClient) {}

  getWords(){
    return this.http.get('../assets/words/answers.json');
  }
}
