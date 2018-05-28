import {Component} from '@angular/core';

import {NotificationPosition, NotifyOptions, NotifyService} from '@tsmean/toast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message = 'Hello World';
  color: string;
  background: string;
  timer: number;
  position: NotificationPosition = {
    bottom: 0,
    right: 0
  };
  withShadow = true;

  constructor(
    private notifyService: NotifyService
  ) {
  }

  notify(type?: string) {
    const options: NotifyOptions = {
      color: this.color,
      background: this.background,
      position: this.position,
      timer: this.timer,
      withShadow: this.withShadow
    };

    if (type === 'error') {
      this.notifyService.error(this.message, options);
    } else {
      this.notifyService.success(this.message, options);
    }
  }

}
