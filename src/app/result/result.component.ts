import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    @Input() results = [];
    n = 0;
    clicked = false;
    resultActive = false;
    answered = 0;
    current: any[];
    disabled: true;
    myanswer: number;
    correct: number;
    rightorwrong: number;
    constructor() {

    }

    ngOnInit() {
        console.log(this.results);
        this.correct = this.results[this.n]['correct'];
        this.myanswer = this.results[this.n]['myanswer'];
        this.rightorwrong = this.results[this.n]['rightorwrong'];
        this.current = this.results[this.n]['question']['answers'];
    }

    next() {
        this.n++;
        this.current = this.results[this.n]['question']['answers'];
        this.correct = this.results[this.n]['correct'];
        this.myanswer = this.results[this.n]['myanswer'];
        this.rightorwrong = this.results[this.n]['rightorwrong'];
    }

}
