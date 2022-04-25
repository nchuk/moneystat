import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {SummaryPageComponent} from "./children/summary-page/summary-page.component";
import {TransactionPageComponent} from "./children/transaction-page/transaction-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, children: [
      {path:'',redirectTo:'/',pathMatch:'full'},
      {path:'',component:SummaryPageComponent},
      {path:'transaction',component:TransactionPageComponent}
    ]
  }
]


@NgModule({
  declarations:[
    MainLayoutComponent,
    SummaryPageComponent,
    TransactionPageComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CabinetWebModule{}
