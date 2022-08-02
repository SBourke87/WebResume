import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from 'src/app/project/project.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor() { }
  mobile: boolean = true;
  ngOnInit(): void {
    if (window.screen.width < 500) { // 768px portrait
      this.mobile = true;
    }
  }

}
