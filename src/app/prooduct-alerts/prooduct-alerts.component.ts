import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-prooduct-alerts',
  templateUrl: './prooduct-alerts.component.html',
  styleUrls: ['./prooduct-alerts.component.css'],
})
export class ProoductAlertsComponent {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
}
