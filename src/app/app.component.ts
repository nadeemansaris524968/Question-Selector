import { IfThenQuestion } from './if-then';
import { Response } from '@angular/http';
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

  independentQuestions: any[];

  ifThenQuestions: any[];

  constructor(private service: IndependentService) {
  }

  ngOnInit() {
    this.service.getAllIndependentQuestions()
          .subscribe(jsonData => {
            this.independentQuestions = jsonData[0].independent;
            this.ifThenQuestions = jsonData[0].if_thens;
          });
      // .subscribe(questions => this.independentQuestions = questions);
  }

  independentAnswer(question: any, independentRadio: HTMLInputElement) {
    question["chosenAnswer"] = independentRadio.value;
    console.log("independent: "+JSON.stringify(question));
    // console.log(this.ifThenQuestions);
    // console.log("All Questions: "+JSON.stringify(this.independentQuestions));
  }

  ifAnswer(ifThenObj_ifQuestion: any, ifRadio: HTMLInputElement) {
    if (ifRadio.value === "Yes"){
      ifThenObj_ifQuestion["showThenQuestion"] = true
    }
    else{
      ifThenObj_ifQuestion["showThenQuestion"] = false
    }
    
    ifThenObj_ifQuestion["chosenAnswer"] = ifRadio.value;
    console.log("If_question: "+JSON.stringify(ifThenObj_ifQuestion));
  }

  thenAnswer(ifThenObj_thenQuestion: any, thenRadio: HTMLInputElement){
    ifThenObj_thenQuestion["chosenAnswer"] = thenRadio.value;
    console.log("Then_question: "+JSON.stringify(ifThenObj_thenQuestion));
  }

}
