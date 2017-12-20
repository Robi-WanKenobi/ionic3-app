import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { SubjectsPage } from "../pages/subjects/subjects";
import { StudentsPage } from '../pages/students/students';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StudentsProvider} from "../providers/students/students";

import { HttpClientModule} from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { AddstudentPage } from "../pages/addstudent/addstudent";
import { Toast } from "@ionic-native/toast";
import { SubjectsProvider } from '../providers/subjects/subjects';
import { AddsubjectPage} from "../pages/addsubject/addsubject";
import { SubjectDetailsPage} from "../pages/subject-details/subject-details";

@NgModule({
  declarations: [
    MyApp,
    SubjectsPage,
    StudentsPage,
    AddstudentPage,
    AddsubjectPage,
    SubjectDetailsPage,
    TabsPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SubjectsPage,
    StudentsPage,
    AddstudentPage,
    AddsubjectPage,
    SubjectDetailsPage,
    TabsPage
  ],
  providers: [
    Toast,
    HttpClient,
    StudentsProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SubjectsProvider
  ]
})
export class AppModule {}
