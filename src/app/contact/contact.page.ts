import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  public formData : FormGroup;

  constructor( private formBuilder: FormBuilder, public alertController: AlertController) {
    this.formData = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
    
  }
  async logForm(){
    console.log(this.formData.value)
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sent!',
      subHeader: this.formData.value.title,
      message: this.formData.value.description,
      buttons: ['Thanks!']
    });

    await alert.present();
  }
}
