import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PostService } from './post.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InterceptorService } from './loader/interceptor.service';
import { LoginComponent } from './login/login.component';
import {  RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { ActivitiesComponent } from './activities/activities.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { ViewComponent } from './view/view.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FileUploadServicService } from './file-upload-servic.service';
import { HelpAndSupportComponent } from './help-and-support/help-and-support.component';
import { FooterComponent } from './footer/footer.component';
import { ButtomsheetComponent } from './buttomsheet/buttomsheet.component';
import { MatBottomSheetModule  } from '@angular/material/bottom-sheet';
import { FileSaverModule } from 'ngx-filesaver';





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    ActivitiesComponent,
    UploadfileComponent,
    ViewComponent,
    HelpAndSupportComponent,
    FooterComponent,
    ButtomsheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  MatFormFieldModule,
  FormsModule,
  HttpClientModule,
  MatProgressBarModule,
  RouterModule,
  MatGridListModule,
  MatCardModule,
  MatListModule,
  MatTableModule,
  MatSidenavModule,
  ReactiveFormsModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireStorageModule,
  AngularFireDatabaseModule,
  MatBottomSheetModule,
  FileSaverModule
  
 
  ],
  providers: [FileUploadServicService,PostService,{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},AuthGuard,AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
