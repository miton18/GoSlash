import { AliasInterface } from './alias.interface';

export class Alias implements AliasInterface {

    Alias: string
    Target: string
    Description: string
    User: string
    Created: string 
    Modified: string

    constructor(obj?:AliasInterface ) {
        for (let prop in obj) {
            this[prop] = obj[prop]
        }
        console.log("new Alias", this)
    }

    toString(): string {
        return this.Alias + " " + this.Target + " " + this.User + " " + this.Modified + " " + this.Created + " " + this.Description
    }
}
