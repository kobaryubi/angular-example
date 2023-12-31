import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { BindingComponent } from "./binding/binding.component";
import { ComponentsComponent } from "./components/components.component";
import { ReferenceComponent } from "./reference/reference.component";
import { TutorialComponent } from "./tutorial/tutorial.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home page",
  },
  {
    path: "turorial",
    component: TutorialComponent,
    title: "Tutorial",
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
];
