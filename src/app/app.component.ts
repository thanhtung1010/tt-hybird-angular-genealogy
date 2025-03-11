import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppConfigService, FirebaseService } from 'common-service';

@Component({
  selector: 'tt-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet],
})
export class AppComponent {

  constructor(
    private translateService: TranslateService,
    private firebaseService: FirebaseService,
    private appconfig: AppConfigService,
  ) {}

  ngOnInit(): void {
    this.translateService.addLangs(['vi']);
    this.translateService.setDefaultLang('vi');
    this.translateService.use('vi');

    this.firebaseService.init().subscribe(resp => {});
    this.appconfig.init();
  }
}
