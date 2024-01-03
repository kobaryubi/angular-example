import { Injectable } from "@angular/core";
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from "@angular/forms";
import { HeroService } from "./hero.service";
import { Observable, catchError, map, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class UniqueAlterEgoValidator implements AsyncValidator {
  constructor(private heroService: HeroService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.heroService.isAlterEgoTaken(control.value).pipe(
      map((isTaken) => (isTaken ? { uniqueAlterEgo: true } : null)),
      catchError(() => of(null))
    );
  }
}
