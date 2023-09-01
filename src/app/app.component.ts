import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'td-Form';

  // topics = ['Angular', 'React', 'Vue'];

  // userModel = new User('Rob', 'rob@gmail.com', 55555555555, '', 'morning', true);

  submit(login: any){
    console.log("Form Submitted!", login)
  }
}
