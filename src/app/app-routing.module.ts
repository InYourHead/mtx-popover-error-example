import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExamplePageComponent} from "./example-page/example-page.component";
import {ExamplePageButtonComponent} from "./example-page-button/example-page-button.component";

const routes: Routes = [
  {path: '', component: ExamplePageButtonComponent},
  {path: 'example', component: ExamplePageComponent},
  {path: 'button', component: ExamplePageButtonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
