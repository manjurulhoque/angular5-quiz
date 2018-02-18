import { Question } from './models/Question';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    n = 0;
    clicked = false;
    resultActive = false;
    answered = 0;
    current: any[];
    results = [];
    disabled: true;
    questions: Question[] = [
        {
            question: "what's your name?",
            answers: ["Rumi", "dbkdgb", "sadman", "ehry"],
            correct: 1,
            selected: false
        },
        {
            question: "what's your country name?",
            answers: ["BD", "USA", "UK", "England"],
            correct: 2,
            selected: false
        },
        {
            question: "what's your CGPA?",
            answers: ["2.5", "3.5", "Under 2.5 and between 3.5", "Above 3.5"],
            correct: 3,
            selected: false
        }
    ];

    constructor() {
        this.current = this.questions[this.n]['answers'];
    }

    onClick(i: any) {
        this.clicked = true;
        this.answered = i;
    }

    next() {
        this.questions[this.n]['selected'] = true;
        this.results.push(
            {
                question: this.questions[this.n],
                correct: this.questions[this.n]['correct'],
                myanswer: this.answered,
                rightorwrong: this.questions[this.n]['correct'] == this.answered+1 ? 1 : 0
            }
        );
        this.clicked = false;
        this.answered = 0;
        this.n++;
        if (this.n !== this.questions.length) {
            this.current = this.questions[this.n]['answers'];
        }
    }

    show() {
        // console.log('answer');
        this.resultActive = true;
    }
}
