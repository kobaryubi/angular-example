import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { BindingComponent } from "./binding/binding.component";
import { ComponentsComponent } from "./components/components.component";
import { ReferenceComponent } from "./reference/reference.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { FormsComponent } from "./forms/forms.component";
import { AnimationComponent } from "./animation/animation.component";
import { ObservablesComponent } from "./observables/observables.component";
import { HttpClientComponent } from "./http-client/http-client.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home page",
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    title: "Dashboard",
  },
  {
    path: "heroes",
    component: HeroesComponent,
    title: "Heroes",
  },
  {
    path: "heroes/:id",
    component: HeroDetailComponent,
    title: "Hero details",
  },
  {
    path: "forms",
    component: FormsComponent,
    title: "Forms",
  },
  {
    path: "details/:id",
    component: DetailsComponent,
    title: "Home details",
  },
  {
    path: "components",
    component: ComponentsComponent,
    title: "Components",
  },
  {
    path: "binding",
    component: BindingComponent,
    title: "Binding",
  },
  {
    path: "reference",
    component: ReferenceComponent,
    title: "Reference",
  },
  {
    path: "animations",
    component: AnimationComponent,
    title: "Animations",
  },
  {
    path: "observables",
    component: ObservablesComponent,
    title: "Observables",
  },
  {
    path: "http-client",
    component: HttpClientComponent,
    title: "HttpClient",
  },
];
