import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Unicorn } from '../common/objects/unicorn';
import { DataGlobal } from '../common/service/data-global.service';
import { DoBaby } from '../do-baby/do-baby.service';
import { Mates } from '../mates/mates.service';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

  constructor(
    private mates: Mates,
    private router: Router,
    private dataGlobal: DataGlobal,
    private doBaby: DoBaby
  ) { }

  @Input() unicorn!: Unicorn;
  @Input() origin!: String;
  unicornMate?: Unicorn;



  ngOnInit(): void {
    this.whoIsMyMate();
  }

  whoIsMyMate() {
    if (this.unicorn.mateUnicorn) {
      for (const mate of this.dataGlobal.listeMate) {
        this.unicornMate = Unicorn.equals(mate[0], this.unicorn) ? mate[1] : Unicorn.equals(mate[1], this.unicorn) ? mate[0] : undefined;
        if (this.unicornMate) {
          break;
        }
      }
    }
  }

  redirectToMates() {
    this.mates.nextUnicorn = this.unicorn;
    this.router.navigate(["/mates"]);
  }

  redirectDoBaby() {
    this.doBaby.firstUnicorn = this.unicorn;
    this.doBaby.secondUnicorn = this.unicornMate;
    this.router.navigate(["/doBaby"]);
  }

  canDoBaby(): boolean {
    if (this.unicorn.mateUnicorn) {
      if (this.unicorn.gender == 'male' && this.unicornMate?.gender == "female" || this.unicorn.gender == 'female' && this.unicornMate?.gender == "male") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
