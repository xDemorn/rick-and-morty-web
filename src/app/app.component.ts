import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @HostBinding('class') className = '';
  
  darkModeControl: FormControl = new FormControl(false);

  constructor(private overlay: OverlayContainer) { }

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
