import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message :String  = "Hello from BridgeLabz";
  // logoPath : String = ".assets/BridgeLabz.webp";
  imgUrl = "https://imgs.search.brave.com/XQ0WY7x-HzRxJRqNjoBGNkKifTo2ztQ9i-N3lXv8uWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ndW1s/ZXQuYXNzZXR0eXBl/LmNvbS9mcmVlcHJl/c3Nqb3VybmFsLzIw/MjEtMDYvMzJhZjdm/OWYtYjYwMy00ZTEy/LTgzNDAtYmEyNDI1/YmI1ZWU4L0JyaWRn/ZUxhYnouUE5H"
  
}
