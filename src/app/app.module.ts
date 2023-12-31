import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ServerComponent } from './server/server.component';
import { BindingComponent } from './binding/binding.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SubmitDialogComponent } from './submit-dialog/submit-dialog.component';
import {FormsModule} from "@angular/forms";
import { DirectivesComponent } from './directives/directives.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
// import {FormsModule} from "@angular/forms";
// import {HttpClientModule} from "@angular/common/http";
// in declarations we tell Angular to scan these components
@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    TaskListComponent,
    ServerComponent,
    BindingComponent,
    SubmitDialogComponent,
    DirectivesComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,MatDialogModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
