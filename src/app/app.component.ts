import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">HOME</a>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {}
