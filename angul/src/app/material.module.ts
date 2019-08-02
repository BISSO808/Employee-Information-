import { NgModule } from '@angular/core';
import {MatInputModule, MatSelectModule, MatCardModule, MatButtonModule,MatMenuModule, } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
    declarations: [
      ],
    imports: [
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,MatMenuModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [],
  exports:[
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,MatMenuModule
    ,MatFormFieldModule,
    MatIconModule
  ]
})
export class materialModule{};