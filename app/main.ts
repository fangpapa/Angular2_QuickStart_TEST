// Angular's browser bootstrap function
import { bootstrap }    from '@angular/platform-browser-dynamic';

// The application root component, AppComponent.
import { AppComponent } from './app.component';
bootstrap(AppComponent);

import {ClickMeComponent} from './click-me.component';
bootstrap(ClickMeComponent);

import {KeyUpComponent_v1} from './keyup.components';
bootstrap(KeyUpComponent_v1);

import {LoopbackComponent} from './loop-back.component';
bootstrap(LoopbackComponent);

import {KeyUpComponent_v2} from './keyup.components';
bootstrap(KeyUpComponent_v2);




//import {ParentComponent} from './parent.component';
//bootstrap(<any>ParentComponent);