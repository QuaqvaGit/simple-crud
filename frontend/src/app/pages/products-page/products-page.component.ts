import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  TuiAlertService,
  TuiButtonModule,
  TuiDialogService,
} from '@taiga-ui/core';
import { CommonModule } from '@angular/common';
import {
  TuiTableModule,
  TuiTablePaginationModule,
} from '@taiga-ui/addon-table';
import { TuiAccordionModule } from '@taiga-ui/kit';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import BasePageComponent from '../base-page.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiTableModule,
    TuiTablePaginationModule,
    TuiAccordionModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent extends BasePageComponent<Product> {
  protected override itemFieldNames: string[] = ['ID', 'Название', 'Цена'];

  form = this.formBuilder.group({
    name: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [
      Validators.required,
      Validators.pattern(/\d+/),
    ]),
    workshopNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/\d+/),
    ]),
  });

  public constructor(
    dbService: ProductsService,
    alertService: TuiAlertService,
    dialogService: TuiDialogService,
    private formBuilder: FormBuilder,
  ) {
    super(dbService, alertService, dialogService);
  }

  protected override entityFromForm(): Partial<Product> {
    return {
      code: this.editedItem?.code,
      name: this.form.get('name')!.value!,
      price: this.form.get('price')!.value!,
      workshopNumber: this.form.get('workshopNumber')!.value!,
    };
  }
}
