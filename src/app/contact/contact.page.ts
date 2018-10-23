import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Messages } from '../classes/messages';
import { MessagesService } from '../services/messages.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
  providers: [MessagesService]
})

export class ContactPage implements OnInit {
  public formData : FormGroup
  public _messages$: Messages[]

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

  ngOnInit() {

  /*  
    this._messages$ = this.messagesService.getMessages().pipe(
      map( res=> res )
    )
    */

   this.messagesService.getMessages().subscribe(data => this._messages$ = data)
 

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
