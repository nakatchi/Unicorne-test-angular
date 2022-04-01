import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Unicorn } from '../common/objects/unicorn';
import { DataGlobal } from '../common/service/data-global.service';

@Component({
  selector: 'app-create-unicorn',
  templateUrl: './create-unicorn.component.html',
  styleUrls: ['./create-unicorn.component.scss']
})
export class CreateUnicornComponent implements OnInit {

  constructor(
    private dataGlobal:DataGlobal,
    private router:Router
  ) { }

  unicornProfilForm:any = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    color: new FormControl('', Validators.required),
    gender: new FormGroup({
      value: new FormControl('', Validators.required),
      other: new FormControl('')
    }),
    age: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    
  }

  unicornProfilSubmit():void {
      console.log(this.dataGlobal.unicornList);
      let unicorn = new Unicorn(
      this.unicornProfilForm.get("name").value,
      this.unicornProfilForm.get("color").value,
      this.unicornProfilForm.get("gender.value").value,
      this.unicornProfilForm.get("age").value,
      this.unicornProfilForm.get("gender.other").value
      );
      this.dataGlobal.unicornList.push(unicorn);
      this.dataGlobal.setUnicornList();
      this.redirectToHome();
  }

  redirectToHome() :void {
    this.router.navigate(["/home"]);
  }
}
