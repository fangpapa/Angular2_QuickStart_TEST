import { Component } from '@angular/core';

@Component({
  selector: 'click-me',
  template: `
    <p>
    <b>click-me.component</b><br/>
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}
    </p>
    `
    //我们可以使用 Angular 事件绑定 机制来响应 任何 DOM 事件
    //语法非常简单。我们只要把 DOM 事件的名字包裹在圆括号中，然后用一个放在引号中的“模板语句”对它赋值就可以了
})

export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}