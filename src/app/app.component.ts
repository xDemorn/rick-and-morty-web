import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @HostBinding('class') className = '';
  
  darkModeControl: FormControl = new FormControl(false);

  constructor(private _router: Router, private overlay: OverlayContainer, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // Rick and Morty logo
    this.matIconRegistry.addSvgIcon(
      "rickAndMorty",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/custom-icons/rick-and-morty-logo.svg")
    );

    // GitHub logo
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/custom-icons/github.svg")
    );

    // LinkedIn logo
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/custom-icons/linkedin.svg")
    );

    // Twitter logo
    this.matIconRegistry.addSvgIcon(
      "twitter",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/custom-icons/twitter.svg")
    );
  }

  ngOnInit(): void {

    let local = localStorage.getItem('settings');
    
    if (local != null) {
      let settings = JSON.parse(local);
      this.ToggleDarkMode(settings.isDarkMode);
      this.darkModeControl.setValue(true);
    }

    this.darkModeControl.valueChanges.subscribe((isDarkMode) => {
      this.ToggleDarkMode(isDarkMode);
    });
  }

  private ToggleDarkMode(isDarkMode: boolean): void {
    const darkClassName = 'dark-mode-theme';
    this.className = isDarkMode ? darkClassName : '';
    
    if (isDarkMode) {
      this.overlay.getContainerElement().parentElement?.classList.add(darkClassName);
    } else {
      this.overlay.getContainerElement().parentElement?.classList.remove(darkClassName);
    }

    localStorage.setItem('settings', JSON.stringify({isDarkMode: isDarkMode}));
  }
}
