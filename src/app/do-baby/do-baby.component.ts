import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Unicorn } from '../common/objects/unicorn';
import { DataGlobal } from '../common/service/data-global.service';
import { DoBaby } from './do-baby.service';

@Component({
  selector: 'app-do-baby',
  templateUrl: './do-baby.component.html',
  styleUrls: ['./do-baby.component.scss']
})
export class DoBabyComponent implements OnInit {

  constructor(
    public doBabyService: DoBaby,
    private router: Router,
    private dataGlobal: DataGlobal
  ) { }

  ngOnInit(): void {
  }

  babyUnicorn?: Unicorn;

  createBaby() {
    if (this.doBabyService.firstUnicorn && this.doBabyService.secondUnicorn) {
      this.babyUnicorn = new Unicorn(
        this.doBabyService.firstUnicorn.name + this.doBabyService.secondUnicorn.name,
        this.mergeColor(),
        this.randomGender(),
        0);

    }

  }

  hexToDecimal(hex: string): number {
    return parseInt(hex, 16)
  };

  mergeColor(): string {
    if (this.doBabyService.firstUnicorn && this.doBabyService.secondUnicorn) {
      const firstColors = {
        red: this.hexToDecimal(this.doBabyService.firstUnicorn.color.slice(0, 2)),
        green: this.hexToDecimal(this.doBabyService.firstUnicorn.color.slice(2, 4)),
        blue: this.hexToDecimal(this.doBabyService.firstUnicorn.color.slice(4, 6))
      }
      console.log("firstColors %o", firstColors);

      const secondColors = {
        red: this.hexToDecimal(this.doBabyService.secondUnicorn.color.slice(0, 2)),
        green: this.hexToDecimal(this.doBabyService.secondUnicorn.color.slice(2, 4)),
        blue: this.hexToDecimal(this.doBabyService.secondUnicorn.color.slice(4, 6))
      }
      console.log("firstColors %o", secondColors);

      const babyColor = {
        red: ((firstColors.red + secondColors.red) / 2) >> 0,
        green: ((firstColors.green + secondColors.green) / 2) >> 0,
        blue: ((firstColors.blue + secondColors.blue) / 2) >> 0
      }

      console.log("babyColor %o", babyColor);

      return babyColor.red.toString(16) + babyColor.green.toString(16) + babyColor.blue.toString(16);
    } else {
      return "ffffff"
    }
  }

  randomGender(): string {
    const randomValue = ((Math.random() * 753624863211255451651325541158484865) >> 0) % 2
    return randomValue == 1 ? 'male' : 'female';
  }

  valider() {
    if (this.babyUnicorn) {
      this.dataGlobal.unicornList.push(this.babyUnicorn)
    }
    this.router.navigate(["/home"]);
  }

}
