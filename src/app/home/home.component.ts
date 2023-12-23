import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  standalone: true,
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button type="button">Search</button>
      </form>
    </section>
  `,
})
export class HomeComponent {}
