import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from 
'@ionic/angular';
import { Appoinment } from 'src/app/models/appoinment.mode';

@Component({
  selector: 'app-edit-appoinment',
  templateUrl: './edit-appoinment.page.html',
  styleUrls: ['./edit-appoinment.page.scss'],
})
export class EditAppoinmentPage implements OnInit {
  appoinment = {} as Appoinment;
  id: any;
  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {this.id = this.actRoute.snapshot.paramMap.get("id");}

  ngOnInit() {
    this.getAppoinmentById(this.id);
  }

  async getAppoinmentById(id: string){
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();
  
    this.firestore.doc("appoinment/" + id)
    .valueChanges()
    .subscribe(data => {
      this.appoinment.name = data["name"];
      this.appoinment.email = data["email"];
      this.appoinment.enquiry = data["enquiry"];
      this.appoinment.phone = data["phone"];
      this.appoinment.petName = data["petName"];
      this.appoinment.gender = data["gender"];
      this.appoinment.date = data["date"];
      this.appoinment.time = data["time"];
    });
    //dismiss loader
    (await loader).dismiss();
    }
  
    async updateAppoinment(appoinment: Appoinment){
      if(this.formValidation()) {
        //show loader
        let loader = this.loadingCtrl.create({
        message: "Please wait..."
        });
        (await loader).present();
    
        try{
         
          await this.firestore.doc("appoinment/" + this.id).update(appoinment);
        } catch(e){
          this.showToast(e);
        }
        //dismiss loader
        (await loader).dismiss();
  //redirect to view post page
  this.navCtrl.navigateRoot("view-appoinment");
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

if(!this.appoinment.phone){
  this.showToast("Enter phone number");
  return false;
  }

  if(!this.appoinment.petName){
    this.showToast("Enter Pet Name");
    return false;
    }

if(!this.appoinment.gender){
this.showToast("Enter gender");
return false;
}

return true;
}

showToast (gender:string){
this.toastCtrl.create({
message: gender,
duration: 3000
})
.then(toastData => toastData.present());
}
}
