import { Component } from '@angular/core';

@Component({
  selector: 'Key-Up',
  template: `
    <b>KeyUpComponent_v1</b><br/>
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})

export class KeyUpComponent_v1 {
  values = '';

  // Angular 把事件对象存入 $event 变量中
  // $event 对象的形态取决于所触发的事件。 
  // 这个 keyup 事件来自 DOM ，所以 $event 必须是一个 标准的 DOM 事件对象 。 
  // $event.target 给了我们一个 HTMLInputElement 对象

  // without strong typing
  onKey(event:any) {
    this.values += event.target.value + ' | ';
  }
  // with strong typing
//   onKey(event: KeyboardEvent) {
//     this.values += (<HTMLInputElement>event.target).value + ' | ';
//   }
}

@Component({
  selector: 'key-up2',
  template: `
    <b>KeyUpComponent_v2</b><br/>
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v2 {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}

@Component({
  selector: 'key-up3',
  template: `
    <input #box (keyup.enter)="values=box.value">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v3 {
  values = '';
}

@Component({
  selector: 'key-up4',
  template: `
    <input #box
      (keyup.enter)="values=box.value"
      (blur)="values=box.value">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v4 {
  values = '';
}
