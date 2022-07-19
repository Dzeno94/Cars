import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import  {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { CarCardComponent } from './car-card/car-card.component';

import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { AddcarComponent } from './addcar/addcar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CarPageComponent } from './car-page/car-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';
import { CommentComponent } from './comment/comment.component';
import { UsersCarsComponent } from './users-cars/users-cars.component';
import { UsersMessagesComponent } from './users-messages/users-messages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminCarsComponent } from './admin-cars/admin-cars.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MessageComponent } from './message/message.component';
import { MessageInboxComponent } from './message-inbox/message-inbox.component';
import { MassageSendComponent } from './massage-send/massage-send.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    UserComponentComponent,
    CarCardComponent,
    FooterComponent,
    RegisterComponent,
    AddcarComponent,
    UserProfileComponent,
    CarPageComponent,
    SidebarComponent,
    SearchComponent,
    CommentComponent,
    UsersCarsComponent,
    UsersMessagesComponent,
    AdminPanelComponent,
    AdminUsersComponent,
    AdminCategoriesComponent,
    AdminCarsComponent,
    MessageComponent,
    MessageInboxComponent,
    MassageSendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CarouselModule,
    ToastrModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MainModule {}
