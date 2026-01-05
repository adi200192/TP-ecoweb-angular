import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  effect
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthStore } from 'src/app/shared/store';
import { StaticContentService } from 'src/app/shared/services/static-content.service';

// MAUVAISE PRATIQUE BP18: Au lieu d'utiliser des constantes statiques,
// on charge le menu dynamiquement à chaque fois
@Component({
    selector: 'app-header',
    imports: [RouterLink, NgFor, RouterLinkActive, NgIf],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly #authStore = inject(AuthStore);
  readonly #staticContentService = inject(StaticContentService);

  // MAUVAISE PRATIQUE BP18: Signal pour stocker le menu chargé dynamiquement
  readonly menu = signal<any[]>([]);
  readonly currentUser = this.#authStore.selectors.user;

  constructor() {
    // MAUVAISE PRATIQUE BP18: Recharger le menu à chaque changement d'authentification
    // au lieu d'utiliser des constantes statiques
    effect(() => {
      const isAuthenticated = this.#authStore.selectors.isAuthenticated();

      // MAUVAISE PRATIQUE: Appel asynchrone pour du contenu qui ne change jamais
      this.#staticContentService.getMenuConfiguration(isAuthenticated).subscribe(
        menuItems => {
          this.menu.set(menuItems);
          console.log('Menu loaded dynamically - SHOULD BE STATIC');
        }
      );
    });
  }

  // ================================================================================
  // MAUVAISE PRATIQUE BP38: Mapping des icônes vers des images PNG matricielles
  // Au lieu d'utiliser Font Awesome (vectoriel), on utilise des PNG (matriciel)
  // Ces images ne s'adaptent pas bien aux écrans haute résolution (Retina, etc.)
  // ================================================================================
  getMenuIconBitmap(iconClass: string): string {
    const iconMap: { [key: string]: string } = {
      'fa-solid fa-house': 'https://cdn-icons-png.flaticon.com/24/1946/1946488.png',
      'fa-solid fa-pen-to-square': 'https://cdn-icons-png.flaticon.com/24/1159/1159633.png',
      'fa-solid fa-gear': 'https://cdn-icons-png.flaticon.com/24/2099/2099058.png',
      'fa-solid fa-user': 'https://cdn-icons-png.flaticon.com/24/1077/1077114.png',
      'fa-solid fa-right-to-bracket': 'https://cdn-icons-png.flaticon.com/24/1828/1828490.png',
      'fa-solid fa-user-plus': 'https://cdn-icons-png.flaticon.com/24/1077/1077063.png'
    };
    return iconMap[iconClass] || 'https://cdn-icons-png.flaticon.com/24/1828/1828778.png';
  }
}
