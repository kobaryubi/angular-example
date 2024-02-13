import { Component } from "@angular/core";
import { Config, ConfigService } from "../config.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-http-client",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./http-client.component.html",
})
export class HttpClientComponent {
  config: Config | undefined;

  constructor(private configService: ConfigService) {}

  showConfig() {
    this.configService.getConfig().subscribe((data) => {
      this.config = data;
    });
  }
}
