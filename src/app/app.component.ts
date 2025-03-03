import { Component } from '@angular/core';
//import { IMyComponentProps } from './components/MyComponent';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //For the button component, label is passed as a prop
  propName:string = "1st Prop Value";
  onEventName (){
    this.propName = "2nd Prop Value";
  }
  //integrate react component in angular, sothat import path is passed as a prop
}
