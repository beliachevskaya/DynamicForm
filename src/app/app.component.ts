import { Component } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  template: '<mat-card><app-dynamic-form [questions]="questions"></app-dynamic-form></mat-card>',
  styleUrls: ['./app.component.sass'],
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
