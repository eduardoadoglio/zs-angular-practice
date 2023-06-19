import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if(parentModule) {
      throw new Error('Core module has already been loaded. Import the core modules in AppModule only');
    }
  }

}
