import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phython',
  templateUrl: './phython.component.html',
  styleUrls: ['./phython.component.css']
})
export class PhythonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  language(){
    return "Phython";
  }

}
