import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tipsTricks';


  ngAfterViewChecked() {
    console.log("--- Change detection triggered ---");
    
  }
}
