import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email = new FormControl();
  password = new FormControl();



  constructor() { }

  ngOnInit(): void {
  }

  save(){
    alert(this.email.value);
    alert(this.password.value);
  }

}
