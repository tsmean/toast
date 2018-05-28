import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotifyService} from '../notify.service';
import {AppNotification} from '../notify.model';
import {of, Subject, Subscription} from 'rxjs';
import {delay, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit, OnDestroy {

  public notification: AppNotification;
  private onDestroyStarted: Subject<void> = new Subject<void>();
  public hidden: boolean;
  private removalSubscription: Subscription;

  constructor(
    private notifyService: NotifyService
  ) {
  }

  ngOnInit() {

    this.notifyService.notifications.pipe(
      takeUntil(this.onDestroyStarted)
    ).subscribe(notification => {
      this.notification = notification;

      this.hidden = false;

      if (this.removalSubscription) {
        this.removalSubscription.unsubscribe();
      }
      this.removalSubscription = of(null)
        .pipe(
          delay(notification.timer)
        )
        .subscribe(() => {
          this.removeNotification();
        });

    });
  }

  removeNotification() {
    this.hidden = true;
  }

  ngOnDestroy() {
    this.onDestroyStarted.next();
  }

}
