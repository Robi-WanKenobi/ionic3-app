import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {StudentsProvider} from "../../providers/students/students";

/**
 * Generated class for the EditStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-student',
  templateUrl: 'edit-student.html',
})
export class EditStudentPage {

  id: any;
  nombre:string;
  apellido:string;
  edad:number;
  genero:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: StudentsProvider,
              public toastCtrl: ToastController,) {
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    console.log('ionViewDidLoad EditStudentPage');
    this.getStudent(this.id);
  }

  getStudent(id){
    this.rest.showStudent(id).then(
      (student) => {
        this.nombre = student['nombre'];
        this.apellido = student['apellido'];
        this.edad = student['edad'];
        this.genero = student['genero'];
      },
      (error) => {
        let toast = this.toastCtrl.create({
          message: `Error al cargar detalles`,
          duration: 1000
        });
        toast.present();
        setTimeout(() => {
          this.navCtrl.pop();
        }, 1200);
      }
    )
  }


  editStudent(){
    this.rest.updateStudent(this.id,{nombre:this.nombre, apellido:this.apellido, edad:this.edad, genero:this.genero})
      .then((result) => {
        let toast = this.toastCtrl.create({
          message: `Estudiante actualizado`,
          duration: 1000
        });
        toast.present();
        setTimeout(() => {
          // this.navCtrl.popToRoot();
          // might try this instead
          this.navCtrl.pop();
        }, 1200);
        //this.router.navigate(['/student-details', id]);
      }, (err) => {
        console.log(err);
        let toast = this.toastCtrl.create({
          message: `Error al actualizar estudiante`,
          duration: 1000
        });
        toast.present();
        setTimeout(() => {
          this.navCtrl.pop();
        }, 1200);
      });
  }
}
