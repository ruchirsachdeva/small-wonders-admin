import { Component, OnInit } from '@angular/core';
import {Content} from '../model/api';
import {Router} from '@angular/router';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  content: Content = new Content();
  submitted = false;

  constructor(private employeeService: ContentService,
              private router: Router) { }

  ngOnInit() {
  }

  newContent(): void {
    this.submitted = false;
    this.content = new Content();
  }

  save() {
    this.employeeService.createContent(this.content)
      .subscribe(data => console.log(data), error => console.log(error));
    this.content = new Content();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/contents']);
  }
}
