import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';

interface Theme {
  name: string;
  styles: ThemeStyle[];
}

interface ThemeStyle {
  themeVariable: string;
  value: string;
}


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes: Theme[] = [];
  private currentTheme: number = 0;

  constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document) {
    this.themes = [
      {
        name: 'day',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#f1a851'},
          { themeVariable: '--ion-color-primary-rgb', value: '241, 128, 81'},
          { themeVariable: '--ion-color-primary-contrast', value: '#000000'},
          { themeVariable: '--ion-color-primary-contrast-rgb', value: '255,255,255'},
          { themeVariable: '--ion-color-primary-shade', value: '#f1a851'},
          { themeVariable: '--ion-color-primary-tint', value: '#4c8dff'},
          { themeVariable: '--ion-item-ios-background-color', value: '#ffffff'},
          { themeVariable: '--ion-item-md-background-color', value: '#ffffff'},
          { themeVariable: '--ion-tabbar-background-color', value: '#fff'},
          { themeVariable: '--ion-tabbar-ios-text-color-active', value: '#000000'},
          { themeVariable: '--ion-tabbar-md-text-color-active', value: '#000000'},
          { themeVariable: '--ion-background-color', value: '#ffffff'},
          { themeVariable: '--ion-text-color', value: '#000000'}, 
          { themeVariable: '--ion-toolbar-background', value: '#ffffff'},

        ]
      },
      {
        name: 'night',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#f1a851'},
          { themeVariable: '--ion-color-primary-rgb', value: '241, 128, 81'},
          { themeVariable: '--ion-color-primary-contrast', value: '#ffffff'},
          { themeVariable: '--ion-color-primary-contrast-rgb', value: '255,255,255'},
          { themeVariable: '--ion-color-primary-shade', value: '#1e2023'},
          { themeVariable: '--ion-color-primary-tint', value: '#383a3e'},
          { themeVariable: '--ion-item-ios-background-color', value: '#717171'},
          { themeVariable: '--ion-item-md-background-color', value: '#717171'},
          { themeVariable: '--ion-tabbar-background-color', value: '#222428'},
          { themeVariable: '--ion-tabbar-ios-text-color-active', value: '#ffffff'},
          { themeVariable: '--ion-tabbar-md-text-color-active', value: '#ffffff'},
          { themeVariable: '--ion-background-color', value: '#000000'},
          { themeVariable: '--ion-text-color', value: '#ffffff'}, 
          { themeVariable: '--ion-toolbar-background', value: '#0d0d0d'},
          { themeVariable: '--ion-item-background:', value: '#1c1c1c'},
          { themeVariable: '--ion-card:', value:'#f1a851'},
        ]
      }
    ]
   }

   cycleTheme(): void {
    

    if(this.themes.length > this.currentTheme + 1){
      this.currentTheme++;
    } else {
      this.currentTheme = 0;
    }

    this.setTheme(this.themes[this.currentTheme].name);

  }

  setTheme(name): void {
    console.log(name)

    let theme = this.themes.find(theme => theme.name === name);

    this.domCtrl.write(() => {

      theme.styles.forEach(style => {
        document.documentElement.style.setProperty(style.themeVariable, style.value);
      });

    });

  }
}
