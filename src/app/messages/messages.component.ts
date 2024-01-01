import { Component } from "@angular/core";
import { MessageService } from "../message.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-messages",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./messages.component.html",
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
