import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component'
import { InfoComponent } from './components/info/info.component'
import { SettingsComponent } from './components/settings/settings.component'

const routes: Routes = [
    {
        path: '',component: UserComponent
    },
    {
        path: 'info',component: InfoComponent
    },
    {
        path: 'setting',component: SettingsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
