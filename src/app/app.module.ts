import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SafePipePipe } from './pipe/safe-pipe.pipe';
import { CreateContentComponent } from './create-content/create-content.component';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { ContentListComponent } from './content-list/content-list.component';
import { UpdateContentComponent } from './update-content/update-content.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SafePipePipe,
    CreateContentComponent,
    ContentDetailsComponent,
    ContentListComponent,
    UpdateContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  // entryComponents: [ContentListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
