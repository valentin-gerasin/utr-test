import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ICar } from 'src/app/interfaces/products.interfaces';

@Component({
  selector: 'app-car-info',
  standalone: true,
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarInfoComponent {
  @Input() carInfo: ICar;
}
