import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  lastQuiz = 0
  
  constructor(private storage: Storage) { 
	  // Récupérer le résultat du dernier quiz
	  storage.get('lastQuiz').then( (val) => {
	  	this.lastQuiz = val
	  })
  }

  ngOnInit() {
  }

  test() {
	this.storage.set('lastQuiz', 9);

	this.storage.get('lastQuiz').then( (val) => {
  	this.lastQuiz = val
	})
  }

}
