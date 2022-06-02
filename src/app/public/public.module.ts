import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

import { FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PublicComponent],
  imports: [
    PublicRoutingModule,
    CommonModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    MatButtonModule,
  ],
})
export class PublicModule {}
