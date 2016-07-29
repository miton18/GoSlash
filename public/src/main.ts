import { bootstrap } from '@angular/platform-browser-dynamic'
import { enableProdMode, ViewEncapsulation } from '@angular/core'
import { AppComponent, environment } from './app/'
import { CompilerConfig } from '@angular/compiler';

if (environment.production) {
  enableProdMode()
}

bootstrap(AppComponent, [
  /*{
    provide: CompilerConfig,
    useValue: new CompilerConfig({defaultEncapsulation: ViewEncapsulation.Native})
  }*/

])
