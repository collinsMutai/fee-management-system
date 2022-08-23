import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './appRoutingModule';
import { ShowbalanceComponent } from './showbalance/showbalance.component';
import { ShownobalanceComponent } from './shownobalance/shownobalance.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { ShortenPipe } from './Pipes/Shorten';
import { StyleDirective } from './Directives/StyleDirective';
import { AddStudentComponent } from './add-student/add-student.component';

import { StudentWithBalancePipe } from './Pipes/student-with-balance.pipe';
import { StudentWithNoBalancePipe } from './Pipes/student-with-no-balance.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    StudentsComponent,
    NotfoundComponent,
    ShowbalanceComponent,
    ShownobalanceComponent,
    ShowAllComponent,
    ShortenPipe,
    StyleDirective,
    AddStudentComponent,
    StudentWithBalancePipe,
    StudentWithNoBalancePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
