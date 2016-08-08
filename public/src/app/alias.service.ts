import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Alias } from './alias.class';

@Injectable()
export class AliasService  {

    constructor(private http: Http) { }
    all(): Array<Alias> {
        return []
    }
}

@Injectable()
export class AliasServiceTest {

    constructor(private http: Http) { }

    all(): Array<Alias> {
        return [
            new Alias({
                Alias: "ddg",
        	    Target:"https://duckduckgo.com/${1:+?q=$1}",    
        	    User:"rcoll",
        	    Created:"1392259631",   
        	    Modified:"1392259634",  
        	    Description:"blob"
            }),
            new Alias({
                Alias: "google",
        	    Target:"http://www.google.fr/${1:+#q=$1}",    
        	    User:"rcoll",
        	    Created:"1392259631",   
        	    Modified:"1392259634",  
        	    Description:"lorem ipsum"
            }),
            new Alias({
                Alias: "rfc",
        	    Target:"http://tools.ietf.org/html/${1:+rfc}${1:+$1}",    
        	    User:"rcoll",
        	    Created:"1392259631",   
        	    Modified:"1392259634",  
        	    Description:"redirige vers la wikipedia...."
            })
      ]
    }
}