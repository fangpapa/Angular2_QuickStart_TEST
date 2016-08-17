import { Component } from '@angular/core';

@Component({
  selector: 'loop-back',
  template: `
    <b>loop-back.component</b><br/>
    <input #box (keyup)="A">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }