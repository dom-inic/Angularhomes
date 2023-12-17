import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  submitContact(
    firstName: string,
    lastName: string,
    email: string,
    subject: string,
    message: string
  ) {
    console.log(
      `Contact created successfully for:
      ${firstName} ${lastName} email: ${email}
      subject: ${subject} message: ${message}`
    );
  }

  constructor() {}
}
