import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'subject': new FormControl('', [Validators.required]),
      'message': new FormControl('',[Validators.required])

    })
  }
  async onSubmit() {
    emailjs.init('46wc-9rSp7mZXPHmD');
    let response = await emailjs.send("service_7ubxdvp","template_hjnu2en",{
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
      });
      alert("message sent");
      this.contactForm.reset();
  }

}
