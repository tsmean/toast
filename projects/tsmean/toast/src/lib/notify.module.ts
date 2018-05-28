import {ModuleWithProviders, NgModule} from '@angular/core';
import { NotifyComponent } from './notify/notify.component';
import {CommonModule} from '@angular/common';
import {NotifyService} from './notify.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotifyComponent],
  exports: [NotifyComponent]
})
export class NotifyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NotifyModule,
      providers: [NotifyService]
    };
  }
}

