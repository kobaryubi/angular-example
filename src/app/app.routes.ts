import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { BindingComponent } from "./binding/binding.component";
import { ComponentsComponent } from "./components/components.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home page",
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
];
