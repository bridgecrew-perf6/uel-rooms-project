import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminBasicUserComponent } from './admin-basic-user/admin-basic-user.component';
import { AdminHeaderComponent } from './reusable-components/admin-header/admin-header.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CoreModule } from '../core/core.module';
import { AdminPremiumUserComponent } from './admin-premium-user/admin-premium-user.component';
import { AdminUserDetailsComponent } from './admin-user-details/admin-user-details.component';
import { AdminGroupComponent } from './admin-group/admin-group.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';


@NgModule({
  declarations: [AdminBasicUserComponent, AdminHeaderComponent, AdminLayoutComponent, AdminPremiumUserComponent, AdminUserDetailsComponent, AdminGroupComponent, AdminMessagesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ]
})
export class AdminModule { }
