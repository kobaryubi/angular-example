import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";

@Component({
  selector: "app-observables",
  standalone: true,
  imports: [],
  templateUrl: "./observables.component.html",
})
export class ObservablesComponent implements OnInit {
  ngOnInit() {
    const numbers$ = of(1, 2, 3);
    numbers$.subscribe((value) => {
      console.log("Observable emitted the next value: " + value);
    });
  }
}
