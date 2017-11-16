import { of } from 'rxjs/observable/of';
import { IndependentQuestion } from './../independent';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class IndependentService {

  constructor() { }

  independentQuestions: IndependentQuestion[] = [
    {
      text: 'Given how the CXR look, do you think the patient has Gait normal?',
      answers: [
        'Yes',
        'No',
        'Not applicable'
      ],
      chosenAnswer: ''
    },
    {
      text: 'Given how the CXR look, do you think the patient has Gait normal?',
      answers: [
        'Yes',
        'No',
        'Not applicable'
      ],
      chosenAnswer: ''
    },
  ];

  getAllIndependentQuestions() : Observable<IndependentQuestion[]> {
    return of(this.independentQuestions);
  }
}