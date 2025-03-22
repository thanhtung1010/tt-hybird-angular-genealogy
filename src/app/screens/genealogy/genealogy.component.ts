import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableLayoutComponent } from '@components';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
    selector: 'tt-genealogy',
    templateUrl: './genealogy.component.html',
    styleUrls: ['./genealogy.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TableLayoutComponent,
        NzInputModule,
    ],
})
export class GenealogyComponent implements OnInit {
    value = '';
    constructor() {}

    ngOnInit() {}
}
