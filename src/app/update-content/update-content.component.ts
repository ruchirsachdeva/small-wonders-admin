import {Component, OnInit} from '@angular/core';
import {Content} from '../model/api';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-update-content',
  templateUrl: './update-content.component.html',
  styleUrls: ['./update-content.component.scss']
})
export class UpdateContentComponent implements OnInit {

  id: number;
  content: Content;

  constructor(private route: ActivatedRoute, private router: Router,
              private employeeService: ContentService) {
  }

  ngOnInit() {
    this.content = new Content();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getContent(this.id)
      .subscribe(data => {
        console.log(data);
        this.content = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateContent(this.id, this.content)
      .subscribe(data => console.log(data), error => console.log(error));
    this.content = new Content();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
