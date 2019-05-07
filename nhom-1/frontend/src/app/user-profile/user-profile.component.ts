import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '@app/_models';
import { UserService } from '@app/_services/user.service';

export interface Friend {
    user: User;
    relation: String;
};
  
@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    file: any;
    user: User;
    friends: Array<Friend>;
    isMyProfile: boolean;
    relation: string;
    default: string;
    showFriends = {'friend': true, 'wait for accept': false, 'sent request': false};
    sideNavButton: [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private dialog: MatDialog,
    ) {
        this.user = new User;
        this.isMyProfile = false;
    }

    ngOnInit() {
        this.route.params.subscribe(param => {
            var username = param['username'];
            if (this.userService.currentUserValue)
                this.isMyProfile = (username == this.userService.currentUserValue.username);
            this.userService.checkvalid(username)
                .subscribe(
                    data => {
                        if (data.valid) {
                            this.router.navigate(['notfound'])
                        }
                    }
                );
            this.getUser(username);
        });
    }

    getUser(username) {
        this.userService.get(username)
            .subscribe(
                data => {
                    this.user = data.user;
                    this.getFriends();
                    this.getRelation();
                }
            );
    }

    getFriends() {
        if (!this.isMyProfile) return;
        this.friends = new Array<Friend>();
        this.user.friends.forEach(friend => {
            this.userService.get(friend.username)
                .subscribe(
                    data => {
                        this.friends.push({user: data.user, relation:friend.relationType});
                    }
                );
        });
    }

    getRelation() {
        if (this.isMyProfile) return;
        this.userService.checkFriend(this.user.username)
            .subscribe(
                data => {
                    this.relation = data.isFriend;
                }
            );
    }

    getGender(): string {
        if (this.user.gender)
            return 'Male';
        return 'Female';
    }

    getBirthday(): string {
        if (!this.user.birthday) return 'Unknown';
        let birthday = new Date(this.user.birthday);
        return birthday.toDateString();
    }

    editProfileDialog(): void {
        this.dialog.open(EditProfileDialog, {
            data: this.user
        });
    }

    updateAvatarDialog(): void {
        this.dialog.open(UpdateAvatarDialog, {
            data: this.user.avatarUrl
        });
    }

    addFriend(username = this.user.username): void {
        this.userService.addFriend(username)
            .subscribe(
                data => {
                    this.getUser(this.user.username);
                    this.getRelation();
                }
            )
    }

    rejectFriend(username = this.user.username): void {
        this.userService.rejectFriend(username)
            .subscribe(
                data => {
                    this.getUser(this.user.username);
                    this.getRelation();
                }
            )
    }

    acceptFriend(username = this.user.username): void {
        this.userService.acceptFriend(username)
            .subscribe(
                data => {
                    this.getRelation();
                }
            )
    }

    routeToMessage() {
        this.router.navigate(['messenger'], {queryParams:{u: this.user.username}});
    }
}

@Component({
    selector: 'edit-profile-dialog',
    templateUrl: 'edit-profile-dialog.html',
})
export class EditProfileDialog {
    form: FormGroup;

    constructor(
        private userService: UserService,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<EditProfileDialog>,
        @Inject(MAT_DIALOG_DATA) public data: User
    ) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [this.data.name, Validators.required],
            birthday: [this.data.birthday, Validators.required],
            gender: [this.data.gender, Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    
    onNoClick(): void {
        this.dialogRef.close();
    }

    submit() {
        if (this.form.invalid) 
            return;
        this.userService.updateProfile(this.form.value)
            .subscribe(
                (value) => {
                    window.location.reload();
                }
            );
        this.dialogRef.close();
    }
}

@Component({
    selector: 'update-avatar-dialog',
    templateUrl: 'update-avatar-dialog.html',
})
export class UpdateAvatarDialog {
    previewUrl: string;
    @ViewChild('fileInput') fileInput: any;
    file: any;

    constructor(
        private userService: UserService,
        public dialogRef: MatDialogRef<UpdateAvatarDialog>,
        @Inject(MAT_DIALOG_DATA) public data: string
    ) {
        this.previewUrl = data;
    }

    onUpload($event: any) {
        this.file = $event.target.files[0];
        this.previewUrl = URL.createObjectURL(this.file);
    }

    submit() {
        let fileData = new FormData();
        fileData.append('avatar', this.file);
        this.userService.updateAvatar(fileData)
            .subscribe(
                (value) => {
                    window.location.reload();
                }
            );
        this.dialogRef.close();
    }

    browse() {
        this.fileInput.nativeElement.click();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
