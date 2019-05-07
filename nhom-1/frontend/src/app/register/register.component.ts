﻿import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '@app/_services/user.service';
import { AlertService } from '@app/_services/alert.service';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private http: HttpClient
    ) { 
        // redirect to home if already logged in
        if (this.userService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            username: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z0-9]*')]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            birthday: ['', Validators.required],
            gender: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .subscribe(
                data => {
                    if (data.state) {
                        this.alertService.success('Registration successful', true);
                        this.router.navigate(['/login']);
                    }
                    else {
                        this.alertService.error('Username is already taken');
                        this.loading = false;
                    }
                },
                error => {
                    this.alertService.error("Server error");
                    console.log(error);
                    this.loading = false;
                });
    }
}
