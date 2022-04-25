import {ComponentRef, Injectable, ViewContainerRef} from "@angular/core";
import {EntranceComponent} from "./entrance/entrance.component";

@Injectable({providedIn: 'root'})
export class ModalService{

  private modals: any[] = [];
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<EntranceComponent>;

  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: string) {
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id:string){
    const modal = this.modals.find(x => x.id === id)
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(EntranceComponent)
  }

  close(id: string) {
    const modal = this.modals.find(x => x.id === id);
    this.viewRef.clear();
  }

}
