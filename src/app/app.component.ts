import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule, MessagesComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "Tour of Heroes";
}
