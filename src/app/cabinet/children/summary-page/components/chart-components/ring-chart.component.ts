import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TransactionService } from '../../../../services/transaction.service';
import { INewTransaction } from '../../../../../shared/interfaces/interfaces';

@Component({
    selector: 'app-ring-chart',
    templateUrl: './ring-chart.components.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppRingChartComponent {

  @Input() private _transactions!: INewTransaction[];

}
