import { Component, OnInit } from '@angular/core';
import { delay } from "rxjs";
import { Router } from "@angular/router";
import { DisableScrollService } from "../_services/disable-scroll.service";

interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean;
}

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    openSidebar = false;
    needToDisableScroll = false;
    isSideNavCollapsed = false;
    screenWidth = 0;
    contentClass: string = '';

    constructor(
        private router: Router,
        private disableScrollService: DisableScrollService
    ) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.disableScrollService.disableScrollSubject
            .pipe(delay(100))
            .subscribe(needToDisableScroll => this.needToDisableScroll = needToDisableScroll);
    }

    onToggleSideNav(data: SideNavToggle): void {
        this.screenWidth = data.screenWidth;
        this.isSideNavCollapsed = data.collapsed;
        this.getContentClass();
    }

    getContentClass(): void {
        if (this.isSideNavCollapsed && this.screenWidth > 768) {
            this.contentClass = 'content-trimmed';
        } else if (this.isSideNavCollapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
            this.contentClass = 'content-md-screen'
        } else {
            this.contentClass = '';
        }
    }

}
