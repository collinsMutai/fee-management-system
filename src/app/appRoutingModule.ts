

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './Services/auth-guard.service';
import { ShowbalanceComponent } from './showbalance/showbalance.component';
import { ShownobalanceComponent } from './shownobalance/shownobalance.component';
import { StudentResolverServiceService } from './Services/student-resolver.service.service';

const appRoutes:Routes =[
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'student',component:StudentsComponent,  resolve:{students:StudentResolverServiceService}, canActivateChild:[AuthGuardService], children:[
        {path: 'balance', component: ShowbalanceComponent},
        {path: 'nobalance', component:ShownobalanceComponent}
    ]},
    {path:'notfound', component:NotfoundComponent},
    {path:'**', redirectTo:'/notfound'}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}