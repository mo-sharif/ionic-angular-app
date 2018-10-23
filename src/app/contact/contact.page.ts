import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Messages } from '../classes/messages';
import { MessagesService } from '../services/messages.service';


@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
  providers: [MessagesService]
})

export class ContactPage implements OnInit {
  public formData : FormGroup
  _messagesArray: Messages[]

  constructor( 
    private formBuilder: FormBuilder, 
    public alertController: AlertController,
    private messagesService: MessagesService
    ) 

    {
    this.formData = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit() :void {
   this.getMessages()
}

getMessages() :void {

    this.messagesService.getMessages()
    .subscribe(
        results => this._messagesArray =results,
        error => console.log("Error :: " + error)
    )

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
