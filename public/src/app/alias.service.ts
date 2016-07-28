import { Injectable } from '@angular/core';

@Injectable()
export class AliasService {

    constructor() { }

    all(): Array<any> {
        return [
            {
                Alias: "rfc",
        	    Target:"http://docrcf.ss",    
        	    User:"rcoll",
        	    Created:"date1",   
        	    Modified:"date2",  
        	    Description:"redirige vers la rfc...."
            },
            {
                Alias: "wiki",
        	    Target:"http://wikipedia.ss",    
        	    User:"rcoll",
        	    Created:"date1",   
        	    Modified:"date2",  
        	    Description:"redirige vers la wikipedia...."
            }
      ]
    }

}
