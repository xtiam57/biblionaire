import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';
import { QuickMindComponent } from './quick-mind/quick-mind.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'quick-mind',
    component: QuickMindComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [GameComponent, MenuComponent, QuickMindComponent];
