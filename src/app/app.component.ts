import { IndependentService } from './service/independent.service';
import { IndependentQuestion } from './independent';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  independentQuestions: IndependentQuestion[];

  constructor(private service: IndependentService) {
  }

  ngOnInit() {
    this.service.getAllIndependentQuestions()
      .subscribe(questions => this.independentQuestions = questions);
  }

  answerRadioClick(question: IndependentQuestion, answerRadio: HTMLInputElement, ) {
    question.chosenAnswer = answerRadio.value;
    console.log(JSON.stringify(question));
    // console.log("All Questions: "+JSON.stringify(this.independentQuestions));
  }

}
