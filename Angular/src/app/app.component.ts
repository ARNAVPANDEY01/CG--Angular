import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { log } from 'node:console';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  standalone: true,
  // imports:[FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  message :String  = "Hello from BridgeLabz";
  // logoPath : String = ".assets/BridgeLabz.webp";
  imgUrl = "https://imgs.search.brave.com/XQ0WY7x-HzRxJRqNjoBGNkKifTo2ztQ9i-N3lXv8uWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ndW1s/ZXQuYXNzZXR0eXBl/LmNvbS9mcmVlcHJl/c3Nqb3VybmFsLzIw/MjEtMDYvMzJhZjdm/OWYtYjYwMy00ZTEy/LTgzNDAtYmEyNDI1/YmI1ZWU4L0JyaWRn/ZUxhYnouUE5H"
  url = "https://www.bridgelabz.com";
  username : string = '';
  nameerror : string = '';

  onClick($event : MouseEvent){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "blank");
  }



  onInput($event : any)
   {
    const inputElemnt = $event.target as HTMLInputElement;
    this.username = inputElemnt.value;

    console.log("change Event Occured", this.username);

    const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    if(nameRegex.test(this.username)){
      this.nameerror = "";
      return;
    }
    this.nameerror = "Name is Incorrect";
  }
  
}
