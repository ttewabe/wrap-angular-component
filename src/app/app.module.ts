import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyComponentWrapperComponent } from './components/my-component-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentWrapperComponent//Component to wrap react component
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
