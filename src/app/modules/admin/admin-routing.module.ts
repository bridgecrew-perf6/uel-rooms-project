import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBasicUserComponent } from './admin-basic-user/admin-basic-user.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminPremiumUserComponent } from './admin-premium-user/admin-premium-user.component';
import { AdminUserDetailsComponent } from './admin-user-details/admin-user-details.component';
import { AdminGroupComponent } from './admin-group/admin-group.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';


const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'basicuser',
        component: AdminBasicUserComponent
      },
      {
        path: 'premiumuser',
        component: AdminPremiumUserComponent
      },
      {
        path: 'userdetails',
        component: AdminUserDetailsComponent
      },
      {
        path: 'group',
        component: AdminGroupComponent
      },
      {
        path: 'messages',
        component: AdminMessagesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
