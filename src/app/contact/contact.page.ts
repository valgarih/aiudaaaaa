import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  constructor(private emailComposer: EmailComposer) { }

  email;
  subject;
  mensaje;
  ngOnInit() {
  }
    
  public send(){
    let email = {
      to: this.email,
      cc: [],
      bcc: [],
      attachment : [],
      subject: this.subject,
      body: this.mensaje,
      isHtml: false,
      app: "Gmail"
    }
    this.emailComposer.open(email);
  }
}
