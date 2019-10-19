import {Component, OnInit} from '@angular/core';
import {Content} from '../model/api';
import {Observable} from 'rxjs';
import {ContentService} from '../services/content.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contents: Observable<Content[]>;

  constructor(private contentService: ContentService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.contents = this.contentService.getContentsList();
  }

  deleteContent(id: number) {
    this.contentService.deleteContent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  contentDetails(id: number) {
    this.router.navigate(['details', id]);
  }


}
