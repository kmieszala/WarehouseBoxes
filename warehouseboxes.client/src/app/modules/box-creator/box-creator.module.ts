import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxFormComponent } from './components/box-form/box-form.component';
import { BoxListComponent } from './components/box-list/box-list.component';
import { BoxPanelComponent } from './components/box-panel/box-panel.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BoxFormComponent,
    BoxListComponent,
    BoxPanelComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: 'panel', 
        component: BoxPanelComponent, 
        children: [
          { path: '', component: BoxListComponent, pathMatch: 'full', data: { breadcrumb: 'list' } },
        ]
      },
    ]),
  ]
})
export class BoxCreatorModule { }
