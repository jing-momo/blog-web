import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-literary',
  templateUrl: './literary.component.html',
  styleUrls: ['./literary.component.css']
})
export class LiteraryComponent implements OnInit {
  isOpen = true;
  picture = localStorage.getItem('picture');

  constructor() {
  }

  ngOnInit() {
  }

}
