/**
 * Created by amitthakkar on 23/06/16.
 */
import {Component, OnInit, OnChanges, AfterViewInit, OnDestroy, DoCheck} from '@angular/core';
import {ChildComponent} from "./child.component";

@Component({
    selector: 'parent-component',
    template: `
       Hello World Form Parent Component! Name: {{name}} 
       <button (click)="toggleChild()">{{ isChildDisplay ? 'Remove' : 'Add' }} Child Component</button>
       <child-component *ngIf="isChildDisplay" (onLiked)="like($event)" [name]="name"></child-component>
    `,
    directives: <any>[ChildComponent]
})
export class ParentComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy, DoCheck {
    name:string = 'Amit Thakkar';
    isChildDisplay:boolean = true;

    constructor() {
        console.log('I am Parent constructor');
    }

    ngOnChanges() {
        console.log('I am Parent ngOnChanges');
    }

    ngOnInit() {
        console.log('I am Parent ngOnInit');
    }

    ngAfterViewInit() {
        console.log('I am Parent ngAfterViewInit');
    }

    ngOnDestroy() {
        console.log('I am Parent ngOnDestroy');
    }

    ngDoCheck() {
        console.log('I am Parent ngDoCheck');
    }

    like(liked:boolean) {
        console.log(222, liked);
    }

    toggleChild() {
        this.isChildDisplay = !this.isChildDisplay;
    }
}