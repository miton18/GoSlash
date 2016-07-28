import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

/**
 * Manage user connection 
 * 
 * @export
 * @class UserService
 */
@Injectable()
export class UserService {

    private host: string = 'http://local.dev/api/auth'

    private auth: boolean
    private token: string
    private info: Object

    /**
     * Creates an instance of UserService.
     * 
     * @param {Http} http
     */
    constructor (private http: Http) { 
        this.auth   = false
        this.token  = ''
        this.info   = {}
    }
    
    /**
     * Try to login with an user and a password 
     * 
     * @param {string} user
     * @param {string} password
     */
    login (user: string, password: string) {
    
        this.http.post( this.host, {
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
        this.http.delete( this.host )
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