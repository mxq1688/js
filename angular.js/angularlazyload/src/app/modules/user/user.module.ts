import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

import { InfoComponent } from './components/info/info.component';
import { SettingsComponent } from './components/settings/settings.component'


@NgModule({
  declarations: [UserComponent, InfoComponent, SettingsComponent],
    // exports: [UserComponent, InfoComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
