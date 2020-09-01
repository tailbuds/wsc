import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { StartComponent } from './start/start.component';
import { SlidesComponent } from './slides/slides.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { ScrollBarDirective } from './scroll-bar/scroll-bar.directive';

@NgModule({
  declarations: [
    SlidesComponent,
    StartComponent,
    LogoComponent,
    NavbarComponent,
    SearchBarComponent,
    ProgressBarComponent,
    ScoreCardComponent,
    ScrollBarDirective,
  ],
  exports: [
    SlidesComponent,
    StartComponent,
    LogoComponent,
    NavbarComponent,
    SearchBarComponent,
    ProgressBarComponent,
    ScoreCardComponent,
    ScrollBarDirective,
  ],
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
