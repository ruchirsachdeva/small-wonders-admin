import {Routes} from '@angular/router';
import {ContentListComponent} from '../content-list/content-list.component';


export const routes: Routes = [
    {path: '', redirectTo: '/contents', pathMatch: 'full'},
    {
        path: 'contents',
        component: ContentListComponent,
    }

];
