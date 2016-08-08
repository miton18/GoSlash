import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from './environment';
import { 
  CanActivate, 
  CanDeactivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

  auth: boolean
  token: string
  info: Object

  private static host = environment.url 

  constructor(private http: Http ) {
    this.auth  = false
    this.token = ""
    this.info  = {}
  }

  /**
   * Method called when user try to go in another page
   * if logged allow, else deny
   * 
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {boolean}
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return false
  }

  login (user: string, password: string) {
    
        this.http.post( AuthService.host, {
            user: user,
            password: password
        }, {
        // Request args 
        }).subscribe( 
        (data: Response) => {
        
            let obj = data.json()
            if (obj.err == null) {
                this.auth  = true
                this.token = obj.token
                this.info  = obj.user
            }
            return this.auth 
        },
        (err: Error) => {
            console.error('userService: ' + err)
        })
    } 
    
    /**
     * Logout if user is logged in 
     * 
     * @returns
     */
    logout () {

        if(!this.auth) return true
        this.http.delete( AuthService.host )
        .subscribe( 
        (data: Response) => {
        
            let obj = data.json()
            if (obj.err == null) {
                this.auth  = false
                this.token = ''
                this.info  = {}
            }
            return ! this.auth 
        },
        (err: Error) => {
            console.error('userService: ' + err)
        })
    }
}
