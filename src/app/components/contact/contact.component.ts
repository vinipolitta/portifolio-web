

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private contactService: ContactService
    ) {
    }

    ngOnInit(): void {
        this.formulario();
    }

    formulario() {
        this.form = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            subject: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    submit() {
        console.log(this.form.valid);
        if (this.form.valid) {
            this.contactService.sendEmail(this.form.value).subscribe(res => {
                console.log(res);

            })
        }

    }
}
