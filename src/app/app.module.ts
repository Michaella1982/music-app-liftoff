import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';

import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostsEditComponent } from './posts/posts-edit/posts-edit.component';


import { RecordCrateComponent } from './record-collection-components/record-crate/record-crate.component';
import { RecordDetailComponent } from './record-collection-components/record-crate/record-detail/record-detail.component';
import { RecordListComponent } from './record-collection-components/record-list/record-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecordCrateComponent,

    RecordDetailComponent,
    RecordListComponent,
    PostsListComponent,

    PostsEditComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
