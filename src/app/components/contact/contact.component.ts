import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact.service';
import { EmailService } from 'src/app/services/email.service';

export interface ResponseEmail {
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.formulario();
  }

  formulario() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      this.emailService.sendEmail(this.form.value).subscribe(
        (response: ResponseEmail) => {
          if (response) {
            this.toastr.success(response.message);
            this.form.reset();
          }
        },
        (error: HttpErrorResponse) => {
          this.toastr.error(error.message);
        }
      );
    }
  }
}
