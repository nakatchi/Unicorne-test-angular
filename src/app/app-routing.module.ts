import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUnicornComponent } from './create-unicorn/create-unicorn.component';
import { HomeComponent } from './home/home.component';
import { MatesComponent } from './mates/mates.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CanActivateMate } from './mates/mates.service'
import { DoBabyComponent } from './do-baby/do-baby.component';
import { CanActivateBaby } from './do-baby/do-baby.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateUnicornComponent},
  { path: 'mates', component: MatesComponent, canActivate: [CanActivateMate] },
  { path: 'doBaby', component: DoBabyComponent, canActivate: [CanActivateBaby]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
