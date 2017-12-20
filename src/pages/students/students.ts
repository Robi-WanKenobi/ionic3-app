import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentsProvider } from "../../providers/students/students";
import { AddstudentPage} from "../addstudent/addstudent";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class StudentsPage {

  students: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, private rest: StudentsProvider) {

  }

  ionViewDidLoad() {
    this.getStudents();
  }

  ionViewWillEnter(){
    this.getStudents();
  }

  getStudents() {
    this.rest.getAllStudents().then(
      (students) => {
        this.students = students;
      },
      (error) => {
        this.errorMessage = <any>error;
      });
  }

  toAddStudent(){
    this.navCtrl.push(AddstudentPage);
  }
}
