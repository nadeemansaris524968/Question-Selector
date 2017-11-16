import { Http, Response } from '@angular/http';
import { of } from 'rxjs/observable/of';
import { IndependentQuestion } from './../independent';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class IndependentService {

  constructor(private http: Http) { }

  independentQuestions: IndependentQuestion[];
  
  getAllIndependentQuestions() : Observable<Response> {
    return this.http.get('.././assets/findings_questions_answer_options.json')
                    .map(jsonData => jsonData.json());
    // return of(this.independentQuestions);
  }
}