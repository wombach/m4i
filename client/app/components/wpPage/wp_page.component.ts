/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {WpUser} from "../../models/wpUser";
import {ProjectService} from "../../services/project.service";
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-wppage',
    templateUrl: './app/components/wpPage/wp_page.component.html',
    styleUrls: ['./app/components/wpPage/wp_page.component.css']
})

export class WpPageComponent implements OnInit {
    private users: any[] = [];

    constructor(
        private router: Router,
        private projectService: ProjectService) {
    }

    ngOnInit() {
        this.projectService.getWpUsers()
           .subscribe((data) => {
              this.users.push(data);
             },
             err => {
                // Log errors if any
                console.log(err);
             });
    }

    gotoDetail(user: WpUser) {
        console.log(user);
        //let link = ['/detail', project._id];
        //this.router.navigate(link);
    }
}
