import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataGlobal } from '../common/service/data-global.service';
import { Mates } from './mates.service';

@Component({
  selector: 'app-mates',
  templateUrl: './mates.component.html',
  styleUrls: ['./mates.component.scss']
})
export class MatesComponent implements OnInit {

  constructor(
    public matesService: Mates,
    public dataGlobal: DataGlobal,
    private router:Router
  ) { }

  selectedUnicorn: any;


  ngOnInit(): void {

  }

  createMates() {
    if (this.matesService.nextUnicorn && this.selectedUnicorn) {
      const mate = [];
      mate.push(this.matesService.nextUnicorn);
      mate.push(this.selectedUnicorn);
      this.dataGlobal.listeMate?.push(mate);
      this.matesService.nextUnicorn.mateUnicorn = true;
      this.selectedUnicorn.mateUnicorn = true;
      this.dataGlobal.setUnicornList();
    }
    this.router.navigate(['/home']);
  }

}
