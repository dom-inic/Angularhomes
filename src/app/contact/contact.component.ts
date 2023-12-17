import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ContactService } from '../contact.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
    <div>
      <section>
      <h2 class="section-heading">Contact Us</h2>
      <form [formGroup]="applyForm" (submit)="submitContact()">
      <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <label for="message">Message</label>
        <input id="message" type="text" formControlName="message">
        <label for="subject">Subject</label>
        <input id="subject" type="text" formControlName="subject">
        <button type="submit" class="primary">Contact</button>
    </form>
      </section>
    </div>
  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  contactService = inject(ContactService);

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  })

  submitContact(){
    this.contactService.submitContact(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.subject ?? '',
      this.applyForm.value.message ?? ''
    )
  }

}
