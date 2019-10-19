import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentService} from '../services/content.service';
import {Content} from '../model/api';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {

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

  list() {
    this.router.navigate(['employees']);
  }

}
