import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { SubjectsProvider} from "../../providers/subjects/subjects";

/**
 * Generated class for the SubjectDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subject-details',
  templateUrl: 'subject-details.html',
})
export class SubjectDetailsPage {

  subject: {};
  nombre: string;
  alumnos: {}[];
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: SubjectsProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    this.getSubject(this.id);
  }

  getSubject(id){
    this.rest.showSubject(id).then(
      (subject) => {
        this.subject = subject;
        this.nombre = subject['nombre'];
        this.alumnos = subject['estudiantes'];
      },
      (error) => {
        let toast = this.toastCtrl.create({
          message: `Error al cargar detalles`,
          duration: 1500
        });
        toast.present();
        setTimeout(() => {
          this.navCtrl.pop();
        }, 1700);
      }
    )
  }
}
