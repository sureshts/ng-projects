import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../shared/model/contact-us.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  @ViewChild('form')
  form!: NgForm;

  contact: Contact;
  constructor() {}

  ngOnInit(): void {
    this.contact = {
      fullName: '',
      email: '',
      message: '',
    };
  }

  onSubmit() {
    console.log('Submitted', this.form.value);
  }
}
