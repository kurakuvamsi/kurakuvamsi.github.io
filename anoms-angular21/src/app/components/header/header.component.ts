import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mobileOpen = false;
  programsOpen = false;
  servicesOpen = false;

  toggleMenu(): void {
    this.mobileOpen = !this.mobileOpen;
    if (!this.mobileOpen) this.programsOpen = false;
  }

  togglePrograms(): void {
    this.programsOpen = !this.programsOpen;
    if (this.programsOpen) {
      this.servicesOpen = false;
    }
  }

  closeMenu(): void {
    this.mobileOpen = false;
    this.programsOpen = false;
    this.servicesOpen = false
  }

  toggleServices(): void {
    this.servicesOpen = !this.servicesOpen;
    if (this.servicesOpen) {
      this.programsOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.programs-wrap')) {
      this.servicesOpen = false;
      this.programsOpen = false;
    }
  }
  
}
