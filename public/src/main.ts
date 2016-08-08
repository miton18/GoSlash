// Angular 2 imports
import { bootstrap } from '@angular/platform-browser-dynamic'
import { enableProdMode, ViewEncapsulation } from '@angular/core'
import { CompilerConfig } from '@angular/compiler'
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment } from './app/'
import { provideRouter, RouterConfig } from '@angular/router';

// App services imports
import { AliasService, AliasServiceTest } from './app/alias.service';
import { AuthService } from './app/auth.service';
// App view imports
import { AliasListComponent } from './app/alias-list'
import { LoginComponent } from './app/login';

if (environment.production) {
  enableProdMode()
}

const APP_ROUTES: RouterConfig = [
  { 
    path: '', 
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'aliases', 
    component: AliasListComponent,
    canActivate: [AuthService] 
  }
  //{ path: '**', component: NotFoundComponent }    
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];


bootstrap(AppComponent, [
  /*{
    provide: CompilerConfig,
    useValue: new CompilerConfig({defaultEncapsulation: ViewEncapsulation.Native})
  }*/
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  {
    provide: AliasService,
    useClass: environment.production ? AliasService : AliasServiceTest,
  },
  {
    provide: AuthService,
    useClass: AuthService
  }
])
.catch(err => {
  console.error("App failed to start", err)
})
