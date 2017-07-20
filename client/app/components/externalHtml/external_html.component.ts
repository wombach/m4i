/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'my-wppage',
    templateUrl: './app/components/externalHtml/external_html.component.html',
    styleUrls: ['./app/components/externalHtml/external_html.component.css']
})

export class ExternalHtmlComponent  {
  private fetchedHtml: any;
  
  constructor(http: Http) {
//    var headers = new Headers();
//    // headers.append('x-forwarded-host', '192.168.2.10');
//    http.get('http://192.168.2.10/wp-login.php' , {headers: headers} )
//        .subscribe(response => {
//          this.fetchedHtml = response.text;
//          console.log(this.fetchedHtml);
//        }, err => {
//                // Log errors if any
//                console.log(err);
//             });
   }
}
