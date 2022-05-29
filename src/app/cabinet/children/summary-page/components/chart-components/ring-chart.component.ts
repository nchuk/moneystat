import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TransactionService } from '../../../../services/transaction.service';

@Component({
    selector: 'app-ring-chart',
    templateUrl: './ring-chart.components.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppRingChartComponent {

    public readonly sum:number;
    public readonly value:number[];
    public readonly labels:string[];

    constructor(private _transactionService: TransactionService) {
        this.sum = _transactionService.sum;
        this.value = _transactionService.value;
        this.labels = _transactionService.labels;
    }

    getValue(index: number): number {
        return Number.isNaN(index) ? this.sum : this.value[index];
    }

    getLabel(index: number): string {
        return Number.isNaN(index) ? 'Total' : this.labels[index];
    }
}
