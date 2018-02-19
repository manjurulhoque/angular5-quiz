import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    @Input() results = [];
    n = 0;
    current: any[];
    myanswer: number;
    correct: number;
    rightorwrong: number;
    totalCorrect = 0;
    constructor() {}

    ngOnInit() {
        for(let i = 0; i < this.results.length; i++){
            if(this.results[i].rightorwrong === 1){
                this.totalCorrect += 1;
            }
        }
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
