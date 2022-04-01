import { Injectable } from "@angular/core";
import { Unicorn } from "../objects/unicorn";

@Injectable({
    providedIn: 'root',
  })
export class DataGlobal {
    unicornList: Unicorn[] = this.getUnicornList();
    listeMate:any[][] = this.getListeMate();

    // récupère la liste des licornes du localstorage
    getUnicornList(): Unicorn[] {
      return JSON.parse(localStorage.getItem("unicornList") ?? "[]");
    }

    getListeMate(): any[][] {
      return JSON.parse(localStorage.getItem("unicornMates") ?? "[]");
    }

    // stock la liste des licornes dans le localStorage
    setUnicornList():void {
      localStorage.setItem("unicornList", JSON.stringify(this.unicornList));
      localStorage.setItem("unicornMates", JSON.stringify(this.listeMate));
    }

    
}
