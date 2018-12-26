import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

const routes: Routes = [
  {path: 'carousel', component: CarouselComponent},
  {path: 'expansion-panel', component: ExpansionPanelComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
