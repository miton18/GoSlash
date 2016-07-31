import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AliasService  {

    constructor(private http: Http) { }
    all(): Array<any> {
        return []
    }
}

@Injectable()
export class AliasServiceTest {

    constructor(private http: Http) { }

    all(): Array<any> {
        return [
            {
                Alias: "ddg",
        	    Target:"https://duckduckgo.com/${1:+?q=$1}",    
        	    User:"rcoll",
        	    Created:"1392259631",   
        	    Modified:"1392259634",  
        	    Description:"blob"
            },
            {
                Alias: "google",
        	    Target:"http://www.google.fr/${1:+#q=$1}",    
        	    User:"rcoll",
        	    Created:"1392259631",   
        	    Modified:"1392259634",  
        	    Description:"lorem ipsum"
            },
            {
                Alias: "rfc",
        	    Target:"http://tools.ietf.org/html/${1:+rfc}${1:+$1}",    
        	    User:"rcoll",
        	    Created:"1392259631",   
        	    Modified:"1392259634",  
        	    Description:"redirige vers la wikipedia...."
            }
      ]
    }
}