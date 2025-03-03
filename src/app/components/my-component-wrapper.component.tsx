import React from "react";
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import ReactDOM from "react-dom"; //Handles mounting/unmounting of the React component
import { StrictMode } from "react";
import { MyComponent } from "./MyComponent";

@Component({
  selector: "app-my-component-wrapper", //Declares the Angular component’s selector.
  template: `<div #root></div>`, //The #root reference allows Angular to access this div where the React component will be rendered.
})
export class MyComponentWrapperComponent
  implements AfterViewInit, OnChanges, OnDestroy
{
  @ViewChild("root") container!: ElementRef<HTMLDivElement>; //Access to the <div> element in the template.

  @Input() propName!: string; //Allows passing props from Angular to React. and ! is a non-null assertion operator, indicating that the property will be initialized later.
  @Output() eventName = new EventEmitter<string>(); //Event emitter to communicate from React to Angular.

  //Initializes React component after Angular finishes rendering the view.
  ngAfterViewInit(): void {
    this.render(); //Called after Angular initializes the component.Calls render() to mount the React component.
  }

  //This Lifecycle hook can help to Re-renders the React component when @Input changes.
  ngOnChanges(changes: SimpleChanges): void {
    this.render(); //Called when btnProps changes and Calls render() to update the React component.
  }

  //Unmounts the React component when Angular destroys the component.
  ngOnDestroy(): void {
    ReactDOM.unmountComponentAtNode(this.container.nativeElement); //Unmounts the React component from the DOM.
  }

  handleEventName = () => {
    this.eventName.emit("React button clicked!"); //To emit the event to the parent component
  };
  private render() {
    if (!this.container) return; //Ensures the React component is only rendered when this.container exists
    ReactDOM.render(
      <StrictMode>
        <MyComponent
          propName={this.propName}
          onEventName={this.handleEventName}
        />{" "}
        {/*Passes btnProps from Angular to React */}
      </StrictMode>,
      this.container.nativeElement,
    );
  }
}
