import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

// MAUVAISE PRATIQUE BP18: Service qui charge dynamiquement du contenu statique
// Ce contenu ne change jamais et devrait être hardcodé ou pré-rendu
@Injectable({
  providedIn: 'root'
})
export class StaticContentService {

  // MAUVAISE PRATIQUE: Charger la configuration du menu depuis un Observable
  // au lieu d'utiliser des constantes statiques
  getMenuConfiguration(isAuthenticated: boolean): Observable<any[]> {
    // Simule un délai réseau pour du contenu qui ne change jamais!
    const menu = isAuthenticated ? [
      {
        url: '',
        title: 'Home',
      },
      {
        url: 'editor',
        title: 'New Article',
        icon: 'fa-solid fa-pen-to-square',
      },
      {
        url: 'settings',
        title: 'Settings',
        icon: 'fa-solid fa-gear',
      },
    ] : [
      {
        url: '',
        title: 'Home',
      },
      {
        url: 'login',
        title: 'Sign in',
      },
      {
        url: 'register',
        title: 'Sign up',
      },
    ];

    // MAUVAISE PRATIQUE: Ajouter un délai artificiel pour simuler une requête
    return of(menu).pipe(delay(100));
  }

  // MAUVAISE PRATIQUE: Charger le contenu du footer dynamiquement
  getFooterContent(): Observable<any> {
    const footerData = {
      githubUrl: 'https://github.com/AndyT2503/angular-conduit-signals',
      githubText: 'Fork on Github',
      externalUrl: 'https://example.com/external-resource',
      externalText: 'External Resource'
    };

    return of(footerData).pipe(delay(80));
  }

  // MAUVAISE PRATIQUE: Charger le texte de la bannière dynamiquement
  getBannerContent(): Observable<any> {
    const bannerData = {
      title: 'conduit',
      description: 'A place to share your knowledge',
      titleEmoji1: '🚀',
      titleEmoji2: '✨',
      separator: '━━━━━'
    };

    return of(bannerData).pipe(delay(90));
  }
}
