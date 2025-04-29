import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService, FirebaseUserDto } from 'common-service';

@Component({
    selector: 'tt-avatar',
    templateUrl: './avatar.component.html',
    standalone: true,
})
export class AvatarComponent implements OnInit {
    user!: FirebaseUserDto;

    constructor(private firebaseService: FirebaseService) {}

    ngOnInit() {
        this.user = this.firebaseService.user;
    }
}
