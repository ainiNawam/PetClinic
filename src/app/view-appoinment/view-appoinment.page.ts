import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-view-appoinment',
  templateUrl: './view-appoinment.page.html',
  styleUrls: ['./view-appoinment.page.scss'],
})
export class ViewAppoinmentPage implements OnInit {
  appoinments: any;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {}
  ionViewWillEnter() {
    this.getAppoinments();
  }
  async getAppoinments(){
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
    this.firestore
    .collection("appoinment")
    .snapshotChanges()
    .subscribe(data => { 
      this.appoinments = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()["name"],
          email: e.payload.doc.data()["email"],
          enquiry: e.payload.doc.data()["enquiry"],
          phone: e.payload.doc.data()["phone"],
          petName: e.payload.doc.data()["petName"],
          message: e.payload.doc.data()["message"],
          gender: e.payload.doc.data()["gender"],
          date: e.payload.doc.data()["date"],
          time: e.payload.doc.data()["time"],
        };
      });

      loader.dismiss();
    });
    
    } catch(e){
    this.showToast(e);

    }
  }

  async deleteAppoinment(id: string){
  //show loader
  let loader = this.loadingCtrl.create({
  message: "Please wait..."
  });
  (await loader).present();

  await this.firestore.doc("appoinment/" + id).delete();

  //dismiss loader
  (await loader).dismiss();
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }
}


