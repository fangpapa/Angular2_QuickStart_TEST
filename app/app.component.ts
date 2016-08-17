// 每个 Angular 应用都至少有一个 根组件 ，习惯上命名为 AppComponent ，它是放用户界面的容器。 
// 组件是 Angular 应用程序中最基本的构造块儿。组件通过它所关联的模板，控制屏幕的一部分——这就是 视图

import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-app1',
    template: `
        <h1>{{title}}</h1>
        <h2>My favorite hero is: {{myHero.name}}</h2>
        <p>Heroes:</p>
        <ul>
        <li *ngFor="let hero of heroes; let i=index;">
           {{i + 1}} . {{ hero.name }}
        </li>
        </ul>
        <p *ngIf="heroes.length > 3">There are many heroes!</p>
    `
    //The string assigned to *ngFor is not a template expression. 
    //It’s a microsyntax — a little language of its own that Angular interprets

    // 也可使用
    // templateUrl: ''
})

export class AppComponent {
    title = 'Tour of Heroes';
    heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
    ];
    myHero = this.heroes[0];
}
