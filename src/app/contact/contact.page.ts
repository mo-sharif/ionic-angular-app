import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Messages } from '../classes/messages';
import { MessagesService } from '../services/messages.service';
import { AlertController } from '@ionic/angular';

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
    private messagesService: MessagesService,
    public alertController: AlertController 
    ) 

    {
    this.formData = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
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
  ngOnInit() {

  /*  
    this._messages$ = this.messagesService.getMessages().pipe(
      map( res=> res )
    )
    */

   this.messagesService.getMessages().subscribe(data => {this._messages$ = data},
    error => console.log(error))
 

} 

}
