import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SummaryPageComponent } from './children/summary-page/summary-page.component';
import { TransactionPageComponent } from './children/transaction-page/transaction-page.component';
import { ModalTransactionComponent } from './children/summary-page/components/transaction/modal-transaction/modal-transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from './services/transaction.service';
import {AppRingChartComponent} from './children/summary-page/components/chart-components/ring-chart.component';
import {TuiRingChartModule} from "@taiga-ui/addon-charts";

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent, children: [
            { path:'',redirectTo:'/',pathMatch:'full' },
            { path:'',component:SummaryPageComponent },
            { path:'transaction',component:TransactionPageComponent }
        ]
    }
];


@NgModule({
    declarations:[
        MainLayoutComponent,
        SummaryPageComponent,
        TransactionPageComponent,
        ModalTransactionComponent,
        AppRingChartComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TuiRingChartModule
  ],
    exports: [
        RouterModule
    ],
    providers:[
        TransactionService
    ]
})

export class CabinetWebModule{}
