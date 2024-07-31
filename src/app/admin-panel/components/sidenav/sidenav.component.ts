import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData, SidenavItem, SidenavToggle } from '@app/admin-panel/models/frontend';
import { fadeInOut, rotate } from '@app/admin-panel/components/sidenav/models/animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    fadeInOut,
    rotate
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();

  collapsed: boolean = false;
  screenWidth: number = 0;
  multiple: boolean = false;

  protected readonly navbarData = navbarData;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth
      });
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth
    });
  }

  handleClick(item: SidenavItem): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded;
  }

  getActiveClass(data: SidenavItem): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: SidenavItem): void {
    if (!this.multiple) {
      this.navbarData.forEach(subItem => {
        subItem.expanded = item === subItem && subItem.expanded;
      });
    }
  }

  logout(): void {
  }
}
