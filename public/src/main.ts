import { bootstrap } from '@angular/platform-browser-dynamic'
import { enableProdMode, ViewEncapsulation } from '@angular/core'
import { CompilerConfig } from '@angular/compiler'
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment } from './app/'

import { AliasService, AliasServiceTest } from './app/alias.service';

if (environment.production) {
  enableProdMode()
}

bootstrap(AppComponent, [
  /*{
    provide: CompilerConfig,
    useValue: new CompilerConfig({defaultEncapsulation: ViewEncapsulation.Native})
  }*/
  HTTP_PROVIDERS,
  {
    provide: AliasService,
    useClass: environment.production ? AliasService : AliasServiceTest,
  }

])
