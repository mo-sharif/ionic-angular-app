import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  private todo : FormGroup;

  constructor( private formBuilder: FormBuilder, public alertController: AlertController) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
    
  }
  async logForm(){
    console.log(this.todo.value)
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sent!',
      subHeader: this.todo.value.title,
      message: this.todo.value.description,
      buttons: ['Thanks!']
    });

    await alert.present();
  }
}
