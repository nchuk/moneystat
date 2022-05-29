import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SummaryPageComponent } from '../../../summary-page.component';
import { INewTransaction } from '../../../../../../shared/interfaces/interfaces';
import { TransactionService } from '../../../../../services/transaction.service';

@Component({
    selector: 'app-modal-transaction',
    templateUrl: './modal-transaction.component.html',
    styleUrls: ['./modal-transaction.component.scss']
})
export class ModalTransactionComponent implements OnInit{

    public transactionForm: FormGroup;
    public typeModal!:string;
    public categories: string[] = ['Продукты','Одежда','Развлечения','Автомобиль'];
    private _date: Date = new Date();

    constructor(public modal:SummaryPageComponent,
                private _transactionService: TransactionService) {
        this.transactionForm = new FormGroup({
            sum: new FormControl(null,Validators.required),
            categories: new FormControl(null,Validators.required),
        });
    }

    public ngOnInit(): void {
        this._date = new Date();
        this.typeModal = this.modal.type;
    }

    public datePicker(ev:any ): void {
        const event:string  = ev.target.getAttribute('id');
        switch (event){
            case 'today':
                this._date = new Date();
                break;
            case 'yesterday':
                this._date = new Date(this._date.setDate(this._date.getDate()-1));
                break;
            case 'calendar':
                this._date = new Date(ev.target.value);
                break;
        }
    }

    public submit():void{
        if (this.transactionForm.invalid){
            return;
        }

        const newTransaction: INewTransaction = {
            type: this.typeModal,
            sum: this.transactionForm.value.sum,
            categories: this.transactionForm.value.categories,
            date: this._date,
        };

        this._transactionService.addTransaction(newTransaction).subscribe(()=>{
            this.transactionForm.reset();
        });

    }

    public closeModal():void{
        this.modal.removeDynamicComponent();
    }

}
