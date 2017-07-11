import { Component } from '@angular/core';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-root',
  providers: [ CookieService ],
  template: '<app-hero-form></app-hero-form>',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  cookies: Object;
  user: string;
  keys: Array<string>;
  cName: string;
  cValue: string;
  rName: string;
  checkName: string;

  constructor( public cookieService: CookieService ) {
    this.update();
    /* this is for testing only */
    this.addCookie('wordpress_logged_in_6ebf9f7ef5b8a2a1a06c62cc50693637',
'Andreas+Wombacher|1499936566|6PS6n0a3lboEJpCJ3ZXIBcpJLJxOJRX2Isel8Uizq6g|' +
'7fd7d94a03aa6ddaca389fa0f7dbf90f976a8730936ebaf07efa83b8d258254a');
    console.log(this.cookies);
  }
  update() {
    this.cookies = this.cookieService.getAll();
    this.keys = Object.keys(this.cookies);
    /*for (let key of this.keys) {
      if (key =)
    }*/
  }
  addCookie(cName: string, cValue: string) {
    console.log('Adding: ', cName, cValue);
    this.cookieService.set(cName, cValue);
    this.update();
  }
  removeCookie(rName: string) {
    console.log('Removing: ', rName);
    this.cookieService.delete(rName);
    this.update();
  }
  removeAll() {
    console.log('Removing all cookies');
    this.cookieService.deleteAll();
    this.update();
  }
  checkCookie() {
    console.log('Checking: ', this.checkName);
    console.log(this.cookieService.check(this.checkName));
    window.alert('Check cookie ' + this.checkName + ' returned ' + this.cookieService.check(this.checkName));
  }
}
