import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input()
  status = '';

  @Output()
  close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
