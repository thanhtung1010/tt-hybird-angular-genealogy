import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService, FirebaseUserModel } from 'common-service';

@Component({
    selector: 'tt-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
    standalone: true,
})
export class AvatarComponent implements OnInit {
    user!: FirebaseUserModel;

    constructor(private firebaseService: FirebaseService) {}

    ngOnInit() {
        this.user = this.firebaseService.user;
    }
}
