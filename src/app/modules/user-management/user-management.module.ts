import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserManagementPageRoutingModule } from './user-management-routing.module';

import { UserManagementPage } from './user-management.page';
import { ComponentsModule } from '../../shared/components/components.module';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserManagementPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [UserManagementPage, UserCardComponent],
})
export class UserManagementPageModule {}
