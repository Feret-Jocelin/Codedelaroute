import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { QuizQuestion } from '../services/question';
import { QuestionService } from '../services/question.service';


@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.page.html',
  styleUrls: ['./quiz-question.page.scss'],
})
export class QuizQuestionPage implements OnInit {

  question = null;
  selected = 0;
  score = 0;

  constructor(private storage: Storage, private service: QuestionService) {

	this.question = this.service.get(0);
 }

  ngOnInit() {
  }

  onChange($event) {
	console.log($event.detail.value);
	this.selected = $event.detai.valuel;
  }

  onValidate($event) {
	if (this.selected == this.question.bonChoix) {
  	this.score++;
	}
	if (this.question.id < (this.question.count() - 1)) {
  	this.question = this.service.get(this.question.id + 1);
	}
	else {
  	this.storage.set('lastQuiz', this.score);

	}
  }

}
