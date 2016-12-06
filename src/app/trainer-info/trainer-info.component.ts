import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-info',
  templateUrl: './trainer-info.component.html',
  styleUrls: ['./trainer-info.component.css']
})
export class TrainerInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// 1. Add trainer info page to router
// 2. Create a link from app component to the new trainer info page
