import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

const MaterialModules = [
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule,
];

@NgModule({
  declarations: [],
  providers: [],
  imports: [MaterialModules],
  exports: [MaterialModules],
})
export class MaterialModule {}
