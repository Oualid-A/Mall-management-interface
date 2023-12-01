import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, inject } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { delay, filter } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  showAradeiChildren = true;
  showContentChildren = false;
  showPermissionChildren = false;
  showRecieptChildren = false;
  activeLink: string = '/';
  activeLinkParent: string = '/';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  private readonly observer = inject(BreakpointObserver);
  private readonly router = inject(Router);

  setActiveLink(link: string) {
    this.activeLink = link;
  }
  setActiveLinkParent(link: string) {
    this.activeLinkParent = link;
  }
  toggleAradeiChildren() {
    this.showContentChildren = false;
    this.showRecieptChildren = false;
    this.showPermissionChildren = false;
    this.showAradeiChildren = !this.showAradeiChildren;
  }

  toggleContentChildren() {
    this.showAradeiChildren = false;
    this.showRecieptChildren = false;
    this.showPermissionChildren = false;
    this.showContentChildren = !this.showContentChildren;
  }
  togglePermissionChildren() {
    this.showContentChildren = false;
    this.showAradeiChildren = false;
    this.showRecieptChildren = false;
    this.showPermissionChildren = !this.showPermissionChildren;
  }
  toggleRecieptChildren() {
    this.showContentChildren = false;
    this.showPermissionChildren = false;
    this.showAradeiChildren = false;
    this.showRecieptChildren = !this.showRecieptChildren;
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 1500px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
}
