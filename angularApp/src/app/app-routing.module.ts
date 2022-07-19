import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcarComponent } from './addcar/addcar.component';
import { AdminCarsComponent } from './admin-cars/admin-cars.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthGuard } from './admin-panel/auth.guard';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { CarCardComponent } from './car-card/car-card.component';
import { CarPageComponent } from './car-page/car-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MassageSendComponent } from './massage-send/massage-send.component';
import { MessageInboxComponent } from './message-inbox/message-inbox.component';
import { MessageComponent } from './message/message.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersCarsComponent } from './users-cars/users-cars.component';
import { UsersMessagesComponent } from './users-messages/users-messages.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'car/add',component:AddcarComponent},
  {path:'car-card',component:CarCardComponent},
  {path:'car/page/:id',component:CarPageComponent},
  {path:'user/login',component:LoginComponent},
  {path:'user/register',component:RegisterComponent},
  {path:'message',component:MessageComponent,children:[
    {path:'massage-inbox',component:MessageInboxComponent},
    {path:'massage-send',component:MassageSendComponent}
  ]},
  {path:'admin',component:AdminPanelComponent,children:[
    {path:'admin-users',component:AdminUsersComponent},
    {path:'admin-categories',component:AdminCategoriesComponent},
    {path:'admin-cars',component:AdminCarsComponent},
  ],canActivate:[AuthGuard]},
  {path:'user-profile',component:UserProfileComponent,children:[
    {path:'users-profile-messages',component:UsersMessagesComponent},
    {path:'users-profile-cars',component:UsersCarsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
