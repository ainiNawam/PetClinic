import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Appoinment } from '../models/appoinment.mode';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.page.html',
  styleUrls: ['./appoinment.page.scss'],
})
export class AppoinmentPage implements OnInit {
  appoinment = {} as Appoinment;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {}
  async createAppoinment(appoinment: Appoinment){
    if(this.formValidation()) {
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();

    try{
      await this.firestore.collection("appoinment").add(appoinment);
    } catch(e){
      this.showToast(e);
    }
    //dismiss loader
    (await loader).dismiss();

    //redirect to home page
    this.navCtrl.navigateRoot("index");
    }
  }
  
  formValidation(){
    if(!this.appoinment.name){
      this.showToast("Enter name");
      return false;

    }

    if(!this.appoinment.email){
      this.showToast("Enter email");
      return false;
    }

    if(!this.appoinment.enquiry){
      this.showToast("Enter enquiry");
      return false;
    }

    if(!this.appoinment.message){
      this.showToast("Enter message");
      return false;
    }

    if(!this.appoinment.date){
      this.showToast("Enter date");
      return false;
      }
      
      if(!this.appoinment.time){
        this.showToast("Enter time");
        return false;
      }

    return true;
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());

}}
