import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {DetailsComponent} from "./details/details.component";

const routeConfig: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Tour of Heroes'
  },
  {
    path: 'heroes',
    component: HeroesComponent,
    title: 'My Heroes'
  },
  {
    path:'details/:id',
    component: DetailsComponent,
    title: 'Hero'
  }
];

export default routeConfig;
