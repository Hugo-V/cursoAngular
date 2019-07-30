import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progres-spiner',
  templateUrl: './progres-spiner.component.html',
  styleUrls: ['./progres-spiner.component.css']
})
export class ProgresSpinerComponent implements OnChanges {
  @Input() valor: number;
  @Input() total: number;
  value: number;
  constructor() { }

  ngOnChanges() {
    this.value = (100 / this.total) * this.valor;
  }

}
