/**
 * Created by amitthakkar on 23/06/16.
 */
import {Component, OnInit, OnChanges, AfterViewInit, OnDestroy, Input, Output, DoCheck} from '@angular/core';
import {EventEmitter} from "@angular/forms/src/facade/async";

@Component({
    selector: 'child-component',
    template: `
        <div>
            Hello From Child Component! Name: {{name}}
            <button (click)="like()">{{ liked ? 'Unlike' : 'Like' }}</button>
        </div>
    `
})
export class ChildComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy, DoCheck {
    @Input() name:string;
    @Output() onLiked = new EventEmitter<boolean>();
    liked = false;

    constructor() {
        console.log('I am Child constructor');
    }

    ngOnChanges() {
        console.log('I am Child ngOnChanges');
    }

    ngOnInit() {
        console.log('I am Child ngOnInit');
    }

    ngAfterViewInit() {
        console.log('I am Child ngAfterViewInit');
    }

    ngOnDestroy() {
        console.log('I am Child ngOnDestroy');
    }

    ngDoCheck() {
        console.log('I am Child ngDoCheck');
    }

    like() {
        this.liked = !this.liked;
        this.onLiked.emit(this.liked);
    }
}