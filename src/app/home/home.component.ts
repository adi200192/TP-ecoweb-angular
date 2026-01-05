import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { provideComponentStore } from '@ngrx/component-store';
import { DEFAULT_LIMIT } from '../shared/constants';
import { AuthStore } from '../shared/store';
import { ArticleListComponent } from '../shared/ui/article-list';
import { PaginationComponent } from '../shared/ui/pagination';
import { FEED_TYPE, FeedType, HomeStore } from './home.store';
import { FeedToggleComponent } from './ui/feed-toggle/feed-toggle.component';
import { TagsComponent } from './ui/tags/tags.component';
import { Article } from '../shared/models';

// MAUVAISE PRATIQUE BP47: Import de services pour faire des requêtes HTTP multiples
import { TagService } from '../shared/services/tag.service';
import { ArticleService } from '../shared/services';
import { StaticContentService } from '../shared/services/static-content.service';

// MAUVAISE PRATIQUE BP8: Import pour créer des connexions non fermées
@Component({
    selector: 'app-home',
    imports: [
        TagsComponent,
        FeedToggleComponent,
        NgIf,
        ArticleListComponent,
        PaginationComponent,
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideComponentStore(HomeStore)]
})
export default class HomeComponent implements OnInit, OnDestroy {
  readonly #homeStore = inject(HomeStore);
  readonly #authStore = inject(AuthStore);
  readonly articleCount = this.#homeStore.selectors.articleCount;
  readonly currentOffset = this.#homeStore.selectors.currentOffset;
  readonly isAuthenticated = this.#authStore.selectors.isAuthenticated;
  readonly articleList = this.#homeStore.selectors.articleList;

  // MAUVAISE PRATIQUE BP47: Injection de services pour faire des requêtes inutiles
  readonly #tagService = inject(TagService);
  readonly #articleService = inject(ArticleService);

  // MAUVAISE PRATIQUE BP18: Injection du service pour charger du contenu statique dynamiquement
  readonly #staticContentService = inject(StaticContentService);

  // MAUVAISE PRATIQUE BP34: Injection du Router pour recharger toute la page
  readonly #router = inject(Router);

  // MAUVAISE PRATIQUE BP18: Signal pour stocker le contenu de bannière chargé dynamiquement
  readonly bannerContent = signal<any>({
    title: 'conduit',
    description: 'A place to share your knowledge',
    titleEmoji1: '🚀',
    titleEmoji2: '✨',
    separator: '━━━━━'
  });

  // MAUVAISE PRATIQUE BP8: Connexion fictive qui reste ouverte
  private keepAliveConnection: any;

  // MAUVAISE PRATIQUE BP34: Timer pour rafraîchissement complet de la page
  private fullPageRefreshTimer: any;

  // MAUVAISE PRATIQUE BP34: Compteur de rechargements de page
  readonly refreshCount = signal<number>(0);

  ngOnInit(): void {
    if (this.isAuthenticated()) {
      this.toggleFeed(FEED_TYPE.yourFeed);
    } else {
      this.toggleFeed(FEED_TYPE.globalFeed);
    }

    // MAUVAISE PRATIQUE BP18: Charger le contenu de bannière dynamiquement
    // au lieu de l'avoir en HTML statique
    this.#staticContentService.getBannerContent().subscribe(content => {
      this.bannerContent.set(content);
      console.log('Banner content loaded dynamically - SHOULD BE STATIC HTML');
    });

    // MAUVAISE PRATIQUE BP47: Multiples requêtes HTTP inutiles au chargement
    // Au lieu de charger une seule fois, on fait plusieurs requêtes redondantes
    this.makeUnnecessaryHttpRequests();

    // MAUVAISE PRATIQUE BP8: Ajout de beforeunload qui empêche bfcache
    window.addEventListener('beforeunload', this.handleBeforeUnload);

    // MAUVAISE PRATIQUE BP8: Ajout de unload qui empêche bfcache
    // Devrait utiliser pagehide à la place
    window.addEventListener('unload', this.handleUnload);

    // MAUVAISE PRATIQUE BP8: Création d'une connexion fictive non fermée
    // Simule une connexion qui reste ouverte et empêche bfcache
    this.keepAliveConnection = setInterval(() => {
      // Connexion fictive qui consomme des ressources
      console.log('Keep-alive connection active');
    }, 5000);

    // ================================================================================
    // MAUVAISE PRATIQUE BP34: Rechargement COMPLET de la page au lieu de partiel
    // Au lieu de mettre à jour seulement les zones qui changent (AJAX partiel),
    // on recharge TOUTE la page, y compris le header, footer, CSS, JS, etc.
    // ================================================================================
    this.setupFullPageRefresh();

    // ================================================================================
    // MAUVAISE PRATIQUE BP44: Modifier le DOM pendant qu'on le traverse
    // Au lieu de collecter les éléments d'abord puis modifier ensuite,
    // on modifie le DOM à chaque itération de la boucle, ce qui force
    // des recalculs de layout (reflow) à chaque modification
    // ================================================================================
    this.modifyDOMWhileTraversing();

    // ================================================================================
    // MAUVAISE PRATIQUE BP45: NE PAS rendre les éléments invisibles lors de modification
    // Au lieu de faire display:none → modifications → display:block (2 reflows),
    // on modifie les éléments pendant qu'ils sont visibles (N reflows)
    // ================================================================================
    this.modifyVisibleElements();

    // ================================================================================
    // MAUVAISE PRATIQUE BP52: Déclencher de nombreux repaint et reflow
    // Au lieu de minimiser les modifications DOM et de style,
    // on déclenche volontairement des repaint/reflow répétés et inutiles
    // ================================================================================
    this.triggerExcessiveRepaintReflow();

    // ================================================================================
    // MAUVAISE PRATIQUE BP56: NE PAS utiliser la délégation d'événements
    // Au lieu d'attacher UN seul listener sur le parent et utiliser event.target,
    // on attache un listener individuel sur CHAQUE élément enfant
    // Cela surcharge la mémoire du navigateur avec des centaines de listeners
    // ================================================================================
    this.attachIndividualEventListeners();

    // ================================================================================
    // MAUVAISE PRATIQUE BP40: Modifier les propriétés CSS une par une
    // Au lieu d'ajouter/supprimer une classe CSS (1 seul repaint/reflow),
    // on modifie chaque propriété individuellement (N repaint/reflow)
    // ================================================================================
    this.modifyCSSPropertiesOneByOne();

    // ================================================================================
    // MAUVAISE PRATIQUE BP54: NE PAS mettre en cache les objets DOM accédés souvent
    // Au lieu de stocker la référence DOM dans une variable,
    // on parcourt le DOM à chaque accès (coûteux en cycles CPU)
    // ================================================================================
    this.accessDOMWithoutCaching();
  }

  // ================================================================================
  // MAUVAISE PRATIQUE BP44: Modifier le DOM pendant qu'on le traverse
  // Cette méthode illustre plusieurs anti-patterns de manipulation du DOM
  // ================================================================================
  private modifyDOMWhileTraversing(): void {
    // Attendre que le DOM soit prêt
    setTimeout(() => {
      // MAUVAISE PRATIQUE BP44: Modifier les éléments pendant qu'on les parcourt
      // Chaque modification déclenche un reflow/repaint
      const allParagraphs = document.querySelectorAll('p');
      allParagraphs.forEach((p, index) => {
        // MAUVAISE PRATIQUE: Modifier l'élément pendant la traversée
        p.setAttribute('data-index', String(index));
        p.classList.add('bp44-modified');
        // Chaque ajout de classe force un recalcul du style
        
        // MAUVAISE PRATIQUE: Créer et insérer un élément pendant la boucle
        const badge = document.createElement('span');
        badge.className = 'bp44-badge';
        badge.textContent = `[${index}]`;
        badge.style.cssText = 'font-size: 10px; color: #999; margin-left: 5px;';
        p.appendChild(badge); // Force un reflow à chaque insertion!
      });

      // MAUVAISE PRATIQUE BP44: Ajouter des éléments au DOM pendant qu'on le parcourt
      // Cette boucle peut devenir infinie si mal gérée
      const allDivs = document.getElementsByTagName('div');
      const originalLength = allDivs.length;
      for (let i = 0; i < Math.min(originalLength, 20); i++) {
        const div = allDivs[i];
        if (div && !div.hasAttribute('data-bp44-processed')) {
          div.setAttribute('data-bp44-processed', 'true');
          
          // MAUVAISE PRATIQUE: Créer un nouvel élément pendant la traversée
          const marker = document.createElement('span');
          marker.className = 'bp44-dom-marker';
          marker.style.cssText = 'position: absolute; width: 3px; height: 3px; background: red; opacity: 0.3;';
          div.style.position = 'relative';
          div.insertBefore(marker, div.firstChild); // Force reflow!
        }
      }

      // MAUVAISE PRATIQUE BP44: Modifier la collection live pendant l'itération
      // getElementsByClassName retourne une collection LIVE
      const elements = document.getElementsByClassName('btn');
      // Parcourir une collection live tout en la modifiant est dangereux
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i] as HTMLElement;
        // MAUVAISE PRATIQUE: Modifier l'élément pendant la traversée
        el.setAttribute('data-bp44-btn-index', String(i));
        el.style.position = 'relative'; // Force reflow
        
        // MAUVAISE PRATIQUE: Ajouter un enfant pendant la traversée
        if (!el.querySelector('.bp44-btn-marker')) {
          const marker = document.createElement('span');
          marker.className = 'bp44-btn-marker';
          marker.innerHTML = '•';
          marker.style.cssText = 'position: absolute; top: -2px; right: -2px; font-size: 8px; color: orange;';
          el.appendChild(marker);
        }
      }

      // MAUVAISE PRATIQUE BP44: Lire puis écrire de manière alternée (thrashing)
      // Ceci force le navigateur à recalculer le layout à chaque lecture
      const links = document.querySelectorAll('a');
      links.forEach((link) => {
        // MAUVAISE PRATIQUE: Lecture (force layout calculation si dirty)
        const currentWidth = link.offsetWidth;
        const currentHeight = link.offsetHeight;
        
        // MAUVAISE PRATIQUE: Écriture (marque le layout comme dirty)
        link.setAttribute('data-original-width', String(currentWidth));
        link.setAttribute('data-original-height', String(currentHeight));
        
        // MAUVAISE PRATIQUE: Nouvelle lecture (force recalcul du layout!)
        const newWidth = link.getBoundingClientRect().width;
        
        // MAUVAISE PRATIQUE: Nouvelle écriture
        link.style.minWidth = newWidth + 'px';
        
        // Ce pattern lecture/écriture/lecture/écriture est appelé "layout thrashing"
        // et est extrêmement coûteux en termes de performance
      });

      // MAUVAISE PRATIQUE BP44: Modification récursive du DOM
      this.recursivelyModifyDOM(document.body, 0, 3);

      console.log('BP44 - MAUVAISE PRATIQUE: DOM modifié pendant sa traversée');
      console.log('Ceci a causé de nombreux reflows/repaints coûteux');
      console.log('Bonne pratique: collecter d\'abord, modifier ensuite en batch');
    }, 1000);
  }

  // MAUVAISE PRATIQUE BP44: Modification récursive du DOM
  private recursivelyModifyDOM(element: Element, depth: number, maxDepth: number): void {
    if (depth >= maxDepth) return;
    
    // MAUVAISE PRATIQUE: Modifier chaque élément pendant la traversée récursive
    if (element.nodeType === Node.ELEMENT_NODE) {
      element.setAttribute('data-bp44-depth', String(depth));
      
      // MAUVAISE PRATIQUE: Ajouter des données pendant la récursion
      const children = element.children;
      for (let i = 0; i < children.length; i++) {
        // MAUVAISE PRATIQUE: Modification pendant parcours récursif
        children[i].setAttribute('data-bp44-child-index', String(i));
        this.recursivelyModifyDOM(children[i], depth + 1, maxDepth);
      }
    }
  }

  // ================================================================================
  // MAUVAISE PRATIQUE BP45: NE PAS rendre les éléments invisibles lors de leur modification
  // Au lieu de faire display:none avant modification puis display:block après (2 reflows),
  // on modifie directement les éléments visibles, générant un reflow à chaque changement
  // ================================================================================
  private modifyVisibleElements(): void {
    setTimeout(() => {
      // Trouver des éléments à modifier
      const containers = document.querySelectorAll('.container, .row, .col, .news-feed');
      
      containers.forEach((container) => {
        const el = container as HTMLElement;
        
        // MAUVAISE PRATIQUE BP45: Modifier de nombreuses propriétés SANS rendre invisible
        // Chaque modification génère un reflow car l'élément est visible
        
        // Modification 1 - génère 1 reflow
        el.style.padding = '15px';
        
        // Modification 2 - génère 1 reflow
        el.style.margin = '10px';
        
        // Modification 3 - génère 1 reflow
        el.style.width = 'calc(100% - 20px)';
        
        // Modification 4 - génère 1 reflow
        el.style.minHeight = '50px';
        
        // Modification 5 - génère 1 reflow
        el.style.border = '1px solid transparent';
        
        // Modification 6 - génère 1 reflow
        el.style.borderRadius = '4px';
        
        // Modification 7 - génère 1 reflow
        el.style.boxSizing = 'border-box';
        
        // TOTAL: 7 reflows au lieu de 2 si on avait fait display:none/block
        
        // BONNE PRATIQUE (commentée) aurait été:
        // el.style.display = 'none'; // 1 reflow
        // el.style.padding = '15px';
        // el.style.margin = '10px';
        // el.style.width = 'calc(100% - 20px)';
        // el.style.minHeight = '50px';
        // el.style.border = '1px solid transparent';
        // el.style.borderRadius = '4px';
        // el.style.boxSizing = 'border-box';
        // el.style.display = 'block'; // 1 reflow
        // TOTAL: 2 reflows
      });

      // MAUVAISE PRATIQUE BP45: Modifications multiples sur les boutons visibles
      const buttons = document.querySelectorAll('.btn, button');
      buttons.forEach((button) => {
        const btn = button as HTMLElement;
        
        // MAUVAISE PRATIQUE: 10 modifications sur un élément visible = 10 reflows potentiels
        btn.style.padding = '8px 16px';           // Reflow 1
        btn.style.fontSize = '14px';              // Reflow 2
        btn.style.fontWeight = '500';             // Reflow 3
        btn.style.lineHeight = '1.5';             // Reflow 4
        btn.style.borderRadius = '4px';           // Reflow 5
        btn.style.border = '1px solid #ccc';      // Reflow 6
        btn.style.minWidth = '80px';              // Reflow 7
        btn.style.minHeight = '36px';             // Reflow 8
        btn.style.margin = '2px';                 // Reflow 9
        btn.style.boxShadow = '0 1px 2px rgba(0,0,0,0.1)'; // Reflow 10
      });

      // MAUVAISE PRATIQUE BP45: Modifications sur les liens visibles
      const navLinks = document.querySelectorAll('a.nav-link, .nav-link');
      navLinks.forEach((link) => {
        const a = link as HTMLElement;
        
        // Encore des modifications sans rendre invisible
        a.style.padding = '10px 15px';
        a.style.margin = '0 5px';
        a.style.display = 'inline-block';
        a.style.minWidth = '60px';
        a.style.textAlign = 'center';
        a.style.borderBottom = '2px solid transparent';
        // 6 reflows au lieu de 2
      });

      // MAUVAISE PRATIQUE BP45: Animation frame par frame sur élément visible
      // Au lieu de le cacher, animer, puis réafficher
      const banner = document.querySelector('.banner') as HTMLElement;
      if (banner) {
        let step = 0;
        const animateVisible = () => {
          if (step < 20) {
            // MAUVAISE PRATIQUE: Modifier l'élément visible à chaque frame
            banner.style.opacity = String(0.8 + (step * 0.01));
            banner.style.transform = `translateY(${-step * 0.5}px)`;
            banner.style.padding = `${20 + step}px`;
            // 3 modifications = 3 reflows par frame!
            step++;
            requestAnimationFrame(animateVisible);
          }
        };
        // Démarrer l'animation visible (mauvaise pratique)
        // animateVisible(); // Commenté pour ne pas perturber l'UI
      }

      // MAUVAISE PRATIQUE BP45: Modification de table sans la cacher
      const tables = document.querySelectorAll('table');
      tables.forEach((table) => {
        const t = table as HTMLElement;
        // Modifier une table visible est très coûteux
        t.style.width = '100%';
        t.style.borderCollapse = 'collapse';
        t.style.margin = '20px 0';
        t.style.fontSize = '14px';
        // 4 reflows sur une table = très coûteux car recalcul de toutes les cellules
      });

      console.log('BP45 - MAUVAISE PRATIQUE: Éléments modifiés SANS être rendus invisibles');
      console.log('Nombreux reflows générés inutilement');
      console.log('Bonne pratique: display:none, modifier, display:block = 2 reflows max');
    }, 1500);
  }

  // ================================================================================
  // MAUVAISE PRATIQUE BP52: Déclencher de nombreux repaint et reflow inutiles
  // Le repaint = changement d'apparence (couleur, background, visibility)
  // Le reflow = recalcul de position/dimension (width, height, margin, padding)
  // Ces opérations sont très coûteuses en CPU et doivent être minimisées
  // ================================================================================
  private triggerExcessiveRepaintReflow(): void {
    setTimeout(() => {
      // ================================================================================
      // MAUVAISE PRATIQUE BP52: Repaint excessifs - changements d'apparence répétés
      // ================================================================================
      
      const allElements = document.querySelectorAll('*');
      let repaintCount = 0;
      let reflowCount = 0;

      // MAUVAISE PRATIQUE: Changer la couleur de fond de tous les éléments
      // Chaque changement de background-color déclenche un REPAINT
      allElements.forEach((el, index) => {
        if (index < 50) { // Limiter pour ne pas bloquer
          const htmlEl = el as HTMLElement;
          if (htmlEl.style) {
            // REPAINT 1: Changement de couleur de fond
            const colors = ['#fff', '#fefefe', '#fdfdfd', '#fcfcfc', '#fbfbfb'];
            htmlEl.style.backgroundColor = colors[index % colors.length];
            repaintCount++;
            
            // REPAINT 2: Changement de couleur de texte
            htmlEl.style.color = index % 2 === 0 ? '#333' : '#334';
            repaintCount++;
            
            // REPAINT 3: Changement de visibilité (sans reflow si visibility)
            htmlEl.style.visibility = 'visible';
            repaintCount++;
            
            // REPAINT 4: Changement d'opacité
            htmlEl.style.opacity = '0.999';
            repaintCount++;
            
            // REPAINT 5: Changement de box-shadow (coûteux)
            htmlEl.style.boxShadow = '0 0 0 0 transparent';
            repaintCount++;
          }
        }
      });

      // ================================================================================
      // MAUVAISE PRATIQUE BP52: Reflow excessifs - changements de géométrie répétés
      // ================================================================================
      
      const containers = document.querySelectorAll('div, section, article, main, aside');
      containers.forEach((container, index) => {
        if (index < 30) { // Limiter pour ne pas bloquer
          const el = container as HTMLElement;
          
          // REFLOW 1: Changement de width
          el.style.width = 'auto';
          reflowCount++;
          
          // REFLOW 2: Changement de height
          el.style.height = 'auto';
          reflowCount++;
          
          // REFLOW 3: Changement de margin
          el.style.marginTop = '0px';
          el.style.marginBottom = '0px';
          reflowCount += 2;
          
          // REFLOW 4: Changement de padding
          el.style.paddingTop = '0px';
          el.style.paddingBottom = '0px';
          reflowCount += 2;
          
          // REFLOW 5: Changement de border (width change = reflow)
          el.style.borderWidth = '0px';
          reflowCount++;
          
          // REFLOW 6: Changement de position
          el.style.position = 'relative';
          reflowCount++;
          
          // REFLOW 7: Changement de display
          // el.style.display = 'block'; // Commenté car trop perturbant
          // reflowCount++;
        }
      });

      // ================================================================================
      // MAUVAISE PRATIQUE BP52: Layout thrashing - alternance lecture/écriture
      // Forcer le navigateur à recalculer le layout à chaque lecture
      // ================================================================================
      
      const measuredElements = document.querySelectorAll('.btn, a, p, span');
      measuredElements.forEach((el, index) => {
        if (index < 20) {
          const htmlEl = el as HTMLElement;
          
          // MAUVAISE PRATIQUE: Lecture (force sync layout si DOM dirty)
          const width = htmlEl.offsetWidth;
          reflowCount++; // Sync layout forcé
          
          // MAUVAISE PRATIQUE: Écriture (dirty le layout)
          htmlEl.style.minWidth = width + 'px';
          
          // MAUVAISE PRATIQUE: Autre lecture (force sync layout à nouveau!)
          const height = htmlEl.offsetHeight;
          reflowCount++; // Sync layout forcé
          
          // MAUVAISE PRATIQUE: Autre écriture
          htmlEl.style.minHeight = height + 'px';
          
          // Ce pattern read-write-read-write est le pire pour les performances
        }
      });

      // ================================================================================
      // MAUVAISE PRATIQUE BP52: Tables - les reflows de tables sont 3x plus coûteux
      // ================================================================================
      
      const tables = document.querySelectorAll('table, .table');
      tables.forEach((table) => {
        const t = table as HTMLElement;
        // MAUVAISE PRATIQUE: Modifier une table = recalcul de TOUTES les cellules
        t.style.tableLayout = 'auto'; // Force recalcul complet
        t.style.width = '100%';
        t.style.borderSpacing = '0';
        reflowCount += 3; // Tables = 3x plus coûteux
      });

      // ================================================================================
      // MAUVAISE PRATIQUE BP52: Animations qui déclenchent repaint/reflow à chaque frame
      // Au lieu d'utiliser transform/opacity (GPU), on anime des propriétés coûteuses
      // ================================================================================
      
      let animationFrame = 0;
      const animateWithReflow = () => {
        if (animationFrame < 10) { // Limité à 10 frames pour la démo
          const animatedElements = document.querySelectorAll('.banner, .news-feed');
          animatedElements.forEach((el) => {
            const htmlEl = el as HTMLElement;
            // MAUVAISE PRATIQUE: Animer width/height au lieu de transform
            // htmlEl.style.width = `calc(100% - ${animationFrame}px)`;
            // htmlEl.style.marginLeft = `${animationFrame * 0.5}px`;
            // Chaque frame = reflow!
          });
          animationFrame++;
          // requestAnimationFrame(animateWithReflow);
        }
      };
      // animateWithReflow(); // Commenté pour ne pas bloquer

      // ================================================================================
      // MAUVAISE PRATIQUE BP52: Scroll handlers qui déclenchent des reflows
      // ================================================================================
      
      const handleScrollWithReflow = () => {
        // MAUVAISE PRATIQUE: Lire et modifier le DOM dans un handler scroll
        const scrollY = window.scrollY;
        document.querySelectorAll('.banner').forEach((el) => {
          const htmlEl = el as HTMLElement;
          // Modification dans scroll handler = reflow à chaque scroll
          htmlEl.style.backgroundPositionY = `${scrollY * 0.5}px`;
          repaintCount++;
        });
      };
      
      // MAUVAISE PRATIQUE: Handler scroll sans throttle/debounce
      window.addEventListener('scroll', handleScrollWithReflow, { passive: false });

      console.log(`BP52 - MAUVAISE PRATIQUE: Repaint/Reflow excessifs déclenchés`);
      console.log(`Repaints déclenchés: ~${repaintCount}`);
      console.log(`Reflows déclenchés: ~${reflowCount}`);
      console.log('Ces opérations sont très coûteuses en CPU');
      console.log('Bonne pratique: batching, requestAnimationFrame, transform/opacity');
    }, 2000);
  }

  // MAUVAISE PRATIQUE BP8: Handler beforeunload qui empêche bfcache
  private handleBeforeUnload = (event: BeforeUnloadEvent): void => {
    // Ce type de handler empêche le navigateur d'utiliser bfcache
    console.log('Page unloading - prevents bfcache');
  };

  // MAUVAISE PRATIQUE BP8: Handler unload qui empêche bfcache
  private handleUnload = (): void => {
    console.log('Page unloaded - prevents bfcache');
  };

  // MAUVAISE PRATIQUE BP47 & BP64: Méthode qui fait des requêtes HTTP multiples sans cache
  private makeUnnecessaryHttpRequests(): void {
    // MAUVAISE PRATIQUE BP64: Ne PAS utiliser localStorage pour les tags
    // Les tags sont des données statiques qui changent rarement
    // Devrait être: vérifier localStorage d'abord, sinon fetch + store

    // MAUVAISE PRATIQUE: Charger les tags 3 fois de suite sans cache
    this.#tagService.getTags().subscribe((response) => {
      console.log('Unnecessary tags request 1 - NOT CACHED');
      // MAUVAISE PRATIQUE BP64: On ne stocke PAS dans localStorage
      // localStorage.setItem('cached_tags', JSON.stringify(response.tags));
    });
    this.#tagService.getTags().subscribe(() => {
      console.log('Unnecessary tags request 2 - NOT CACHED');
    });
    this.#tagService.getTags().subscribe(() => {
      console.log('Unnecessary tags request 3 - NOT CACHED');
    });

    // MAUVAISE PRATIQUE BP64: Charger des articles sans utiliser le cache
    // Devrait utiliser Service Worker cache ou localStorage
    this.#articleService.getArticleGlobal({ limit: 10, offset: 0 }).subscribe(() => {
      console.log('Unnecessary article request 1 - NOT CACHED');
    });
    this.#articleService.getArticleGlobal({ limit: 10, offset: 0 }).subscribe(() => {
      console.log('Unnecessary article request 2 - NOT CACHED');
    });

    // MAUVAISE PRATIQUE: Faire des requêtes en boucle sans cache
    for (let i = 0; i < 5; i++) {
      this.#tagService.getTags().subscribe(() => {
        console.log(`Redundant tags request in loop ${i} - NO CACHING`);
      });
    }

    // MAUVAISE PRATIQUE BP64: Simuler des requêtes pour données config statiques
    // Ces données ne changent jamais et devraient être en localStorage
    this.fetchStaticConfigWithoutCache();
  }

  // MAUVAISE PRATIQUE BP64: Méthode qui fetch des données statiques sans cache
  private fetchStaticConfigWithoutCache(): void {
    // Exemple de données statiques qu'on devrait stocker localement:
    // - Configuration de l'app
    // - Liste des pays
    // - Traductions
    // - Métadonnées

    // MAUVAISE PRATIQUE: On simule un fetch de config au lieu d'utiliser localStorage
    const shouldUseCache = false; // MAUVAISE PRATIQUE: Toujours false!

    if (!shouldUseCache) {
      // Toujours fetcher au lieu de lire localStorage
      console.log('Fetching static config from server - SHOULD BE CACHED');
    }

    // MAUVAISE PRATIQUE: Même pour les données qui ne changent jamais
    // on ne les met pas en cache local
    const staticData = {
      appVersion: '1.0.0',
      supportedLanguages: ['en', 'fr', 'es'],
      maxUploadSize: 5242880
    };

    // MAUVAISE PRATIQUE BP64: On ne sauvegarde PAS dans localStorage
    // localStorage.setItem('app_config', JSON.stringify(staticData));
    console.log('Static data NOT saved to localStorage');
  }

  ngOnDestroy(): void {
    // MAUVAISE PRATIQUE: On ne nettoie pas les listeners avant destruction
    // Les listeners restent actifs et empêchent bfcache
    // window.removeEventListener('beforeunload', this.handleBeforeUnload);
    // window.removeEventListener('unload', this.handleUnload);

    // MAUVAISE PRATIQUE: On ne ferme pas la connexion
    // clearInterval(this.keepAliveConnection);
  }

  selectTag(tag: string): void {
    this.#homeStore.queryArticle({
      feedType: FEED_TYPE.tagFeed,
      params: {
        limit: DEFAULT_LIMIT,
        offset: 0,
        tag,
      },
    });
  }

  toggleFeed(feedType: FeedType): void {
    this.#homeStore.queryArticle({
      feedType,
      params: {
        limit: DEFAULT_LIMIT,
        offset: 0,
      },
    });
  }

  onPageOffsetChange(offset: number): void {
    this.#homeStore.onOffsetChange(offset);
  }

  toggleFavorite(article: Article): void {
    this.#homeStore.toggleFavorite(article);
  }

  // ================================================================================
  // MAUVAISE PRATIQUE BP34: Rechargement COMPLET de la page
  // Au lieu d'utiliser un rechargement partiel (AJAX) pour mettre à jour
  // seulement les zones qui changent, on recharge TOUTE la page
  // ================================================================================

  // MAUVAISE PRATIQUE BP34: Configuration du rafraîchissement complet périodique
  private setupFullPageRefresh(): void {
    // MAUVAISE PRATIQUE: Timer qui recharge toute la page toutes les 60 secondes
    // Au lieu de juste rafraîchir les articles via AJAX
    this.fullPageRefreshTimer = setInterval(() => {
      console.log('BP34 - MAUVAISE PRATIQUE: Rechargement COMPLET de la page');
      console.log('Devrait utiliser un rechargement PARTIEL (AJAX) pour les articles uniquement');
      
      // Incrémenter le compteur de rechargements
      const currentCount = parseInt(localStorage.getItem('page_refresh_count') || '0', 10);
      localStorage.setItem('page_refresh_count', String(currentCount + 1));
      this.refreshCount.set(currentCount + 1);
      
      // MAUVAISE PRATIQUE: Rechargement complet avec window.location.reload()
      // Ceci recharge: HTML, CSS, JS, images, header, footer, sidebar...
      // Au lieu de juste la zone de contenu des articles
      // window.location.reload(); // Décommenté pour ne pas casser l'expérience
      
      // Alternative mauvaise pratique: navigation vers la même page
      // this.forceFullPageReload();
    }, 60000); // Toutes les 60 secondes

    console.log('BP34 - Timer de rechargement COMPLET de page activé (60s)');
    console.log('Devrait utiliser: rechargement PARTIEL des articles uniquement');
  }

  // MAUVAISE PRATIQUE BP34: Méthode de rechargement complet manuel
  forceFullPageReload(): void {
    console.log('BP34 - MAUVAISE PRATIQUE: Rechargement COMPLET forcé');
    console.log('Toutes les ressources seront re-téléchargées: HTML, CSS, JS, images...');
    
    // MAUVAISE PRATIQUE: Diverses méthodes de rechargement complet
    // Méthode 1: window.location.reload() - recharge tout
    // window.location.reload();
    
    // Méthode 2: Assigner window.location.href - recharge tout
    // window.location.href = window.location.href;
    
    // Méthode 3: Router navigate avec skipLocationChange puis reload
    // this.#router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //   this.#router.navigate(['/']);
    // });
    
    // Pour la démo, on simule le rechargement avec un log
    console.warn('SIMULATION: Page entière rechargée (header, footer, CSS, JS, tout!)');
  }

  // MAUVAISE PRATIQUE BP34: Rafraîchir les articles en rechargeant TOUTE la page
  // Devrait utiliser un appel AJAX partiel pour ne rafraîchir que la liste
  refreshArticlesWithFullReload(): void {
    console.log('BP34 - MAUVAISE PRATIQUE: Pour rafraîchir les articles...');
    console.log('...on recharge TOUTE la page au lieu de juste la zone articles');
    
    // MAUVAISE PRATIQUE: Recharge tout le DOM, CSS, JS pour juste mettre à jour les articles
    // Bon code serait: this.#homeStore.queryArticle({...}) sans recharger la page
    
    // Simulation du rechargement
    const startTime = performance.now();
    
    // MAUVAISE PRATIQUE: On pourrait juste appeler:
    // this.#articleService.getArticleGlobal({...}).subscribe(articles => update...)
    // Mais à la place on recharge TOUTE la page:
    setTimeout(() => {
      const endTime = performance.now();
      console.log(`Rechargement complet simulé en ${endTime - startTime}ms`);
      console.log('Une mise à jour AJAX partielle aurait été ~10x plus rapide');
    }, 100);
  }

  // MAUVAISE PRATIQUE BP34: Rechargement complet pour changement de tag
  // Au lieu de filtrer côté client ou faire un appel AJAX partiel
  selectTagWithFullReload(tag: string): void {
    console.log(`BP34 - MAUVAISE PRATIQUE: Sélection du tag "${tag}"`);
    console.log('On recharge TOUTE la page au lieu de filtrer les articles');
    
    // MAUVAISE PRATIQUE: Rechargement complet avec paramètre URL
    // window.location.href = `/?tag=${encodeURIComponent(tag)}`;
    
    // Bonne pratique serait:
    // this.selectTag(tag); // Juste mettre à jour la zone articles via AJAX
  }

  // ================================================================================
  // MAUVAISE PRATIQUE BP56: NE PAS utiliser la délégation d'événements
  // Au lieu d'attacher UN listener sur le parent avec event.target,
  // on attache un listener individuel sur CHAQUE élément, surchargeant la mémoire
  // ================================================================================
  private attachIndividualEventListeners(): void {
    setTimeout(() => {
      let listenerCount = 0;

      // ================================================================================
      // MAUVAISE PRATIQUE: Un listener par bouton au lieu d'un sur le conteneur
      // ================================================================================
      const allButtons = document.querySelectorAll('button, .btn');
      allButtons.forEach((button, index) => {
        // MAUVAISE PRATIQUE: Chaque bouton a son propre listener
        button.addEventListener('click', (e) => {
          console.log(`Bouton ${index} cliqué via listener individuel`);
        });
        listenerCount++;
        
        // MAUVAISE PRATIQUE: Ajout de listeners multiples pour différents événements
        button.addEventListener('mouseenter', () => {
          (button as HTMLElement).style.opacity = '0.9';
        });
        listenerCount++;
        
        button.addEventListener('mouseleave', () => {
          (button as HTMLElement).style.opacity = '1';
        });
        listenerCount++;
        
        button.addEventListener('focus', () => {
          console.log(`Focus sur bouton ${index}`);
        });
        listenerCount++;
        
        button.addEventListener('blur', () => {
          console.log(`Blur sur bouton ${index}`);
        });
        listenerCount++;
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Un listener par lien au lieu de déléguer
      // ================================================================================
      const allLinks = document.querySelectorAll('a');
      allLinks.forEach((link, index) => {
        // MAUVAISE PRATIQUE: Chaque lien a son propre listener
        link.addEventListener('click', (e) => {
          console.log(`Lien ${index} cliqué: ${(link as HTMLAnchorElement).href}`);
        });
        listenerCount++;
        
        link.addEventListener('mouseenter', () => {
          (link as HTMLElement).style.textDecoration = 'underline';
        });
        listenerCount++;
        
        link.addEventListener('mouseleave', () => {
          (link as HTMLElement).style.textDecoration = '';
        });
        listenerCount++;
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Un listener par élément de liste au lieu de déléguer
      // ================================================================================
      const allListItems = document.querySelectorAll('li, .list-item, .tag-pill');
      allListItems.forEach((item, index) => {
        // MAUVAISE PRATIQUE: Un listener par item
        item.addEventListener('click', () => {
          console.log(`Item ${index} cliqué`);
          (item as HTMLElement).classList.toggle('selected');
        });
        listenerCount++;
        
        item.addEventListener('mouseenter', () => {
          (item as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0.05)';
        });
        listenerCount++;
        
        item.addEventListener('mouseleave', () => {
          (item as HTMLElement).style.backgroundColor = '';
        });
        listenerCount++;
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Un listener par cellule de tableau au lieu d'un sur la table
      // Exemple exactement inverse de la bonne pratique GreenIT
      // ================================================================================
      const allTableCells = document.querySelectorAll('td, th');
      allTableCells.forEach((cell, index) => {
        // MAUVAISE PRATIQUE: Un listener PAR CELLULE au lieu d'un sur <table>
        cell.addEventListener('click', () => {
          document.querySelectorAll('td, th').forEach(c => 
            (c as HTMLElement).classList.remove('highlight')
          );
          (cell as HTMLElement).classList.add('highlight');
          console.log(`Cellule ${index} sélectionnée via listener individuel`);
        });
        listenerCount++;
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Un listener par paragraphe
      // ================================================================================
      const allParagraphs = document.querySelectorAll('p');
      allParagraphs.forEach((p, index) => {
        p.addEventListener('click', () => {
          console.log(`Paragraphe ${index} cliqué`);
        });
        listenerCount++;
        
        // MAUVAISE PRATIQUE: Listener même sur des éléments qu'on ne clique jamais
        p.addEventListener('dblclick', () => {
          console.log(`Double-clic sur paragraphe ${index}`);
        });
        listenerCount++;
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Un listener par image
      // ================================================================================
      const allImages = document.querySelectorAll('img');
      allImages.forEach((img, index) => {
        img.addEventListener('load', () => {
          console.log(`Image ${index} chargée`);
        });
        listenerCount++;
        
        img.addEventListener('error', () => {
          console.log(`Erreur de chargement image ${index}`);
        });
        listenerCount++;
        
        img.addEventListener('click', () => {
          console.log(`Clic sur image ${index}`);
        });
        listenerCount++;
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Un listener par input/textarea
      // ================================================================================
      const allInputs = document.querySelectorAll('input, textarea, select');
      allInputs.forEach((input, index) => {
        input.addEventListener('focus', () => {
          console.log(`Focus sur input ${index}`);
        });
        listenerCount++;
        
        input.addEventListener('blur', () => {
          console.log(`Blur sur input ${index}`);
        });
        listenerCount++;
        
        input.addEventListener('input', () => {
          console.log(`Saisie sur input ${index}`);
        });
        listenerCount++;
        
        input.addEventListener('change', () => {
          console.log(`Change sur input ${index}`);
        });
        listenerCount++;
        
        input.addEventListener('keydown', () => {
          console.log(`Keydown sur input ${index}`);
        });
        listenerCount++;
        
        input.addEventListener('keyup', () => {
          console.log(`Keyup sur input ${index}`);
        });
        listenerCount++;
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Listeners sur des conteneurs génériques
      // ================================================================================
      const allDivs = document.querySelectorAll('div');
      allDivs.forEach((div, index) => {
        if (index < 100) { // Limiter pour ne pas trop surcharger
          div.addEventListener('mouseenter', () => {
            // Listener inutile sur tous les divs
          });
          listenerCount++;
          
          div.addEventListener('mouseleave', () => {
            // Listener inutile sur tous les divs
          });
          listenerCount++;
        }
      });

      console.log('BP56 - MAUVAISE PRATIQUE: Event listeners individuels attachés');
      console.log(`Nombre total de listeners créés: ${listenerCount}`);
      console.log('Chaque listener occupe de la mémoire!');
      console.log('Bonne pratique: 1 listener sur le parent + event.target');
      console.log('Exemple: table.onclick = (e) => highlight(e.target)');
    }, 2500);
  }

  // ================================================================================
  // MAUVAISE PRATIQUE BP40: Modifier les propriétés CSS une par une
  // Au lieu d'utiliser addClass/removeClass (1 seul repaint/reflow),
  // on modifie chaque propriété style individuellement (N repaint/reflow)
  // ================================================================================
  private modifyCSSPropertiesOneByOne(): void {
    setTimeout(() => {
      let propertyChangeCount = 0;

      // ================================================================================
      // MAUVAISE PRATIQUE: Modifier margin-top, margin-right, margin-bottom, margin-left
      // au lieu d'utiliser margin: X Y Z W (ou une classe CSS)
      // ================================================================================
      const containers = document.querySelectorAll('.container, .row, section, article');
      containers.forEach((container) => {
        const el = container as HTMLElement;
        
        // MAUVAISE PRATIQUE: 4 modifications au lieu d'une seule
        el.style.marginTop = '0px';      // Repaint/Reflow 1
        propertyChangeCount++;
        el.style.marginRight = '0px';    // Repaint/Reflow 2
        propertyChangeCount++;
        el.style.marginBottom = '0px';   // Repaint/Reflow 3
        propertyChangeCount++;
        el.style.marginLeft = '0px';     // Repaint/Reflow 4
        propertyChangeCount++;
        
        // BONNE PRATIQUE serait: el.style.margin = '0px';
        // ou mieux: el.classList.add('no-margin');
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Modifier padding-* séparément au lieu de padding
      // ================================================================================
      const boxes = document.querySelectorAll('.card, .banner, .sidebar, div');
      boxes.forEach((box, index) => {
        if (index < 30) {
          const el = box as HTMLElement;
          
          // MAUVAISE PRATIQUE: 4 propriétés au lieu d'une
          el.style.paddingTop = '0px';    // Repaint/Reflow
          propertyChangeCount++;
          el.style.paddingRight = '0px';  // Repaint/Reflow
          propertyChangeCount++;
          el.style.paddingBottom = '0px'; // Repaint/Reflow
          propertyChangeCount++;
          el.style.paddingLeft = '0px';   // Repaint/Reflow
          propertyChangeCount++;
          
          // BONNE PRATIQUE: el.style.padding = '0px';
        }
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Modifier border-* séparément au lieu de border
      // ================================================================================
      const borderedElements = document.querySelectorAll('.btn, button, input, .card');
      borderedElements.forEach((bordered) => {
        const el = bordered as HTMLElement;
        
        // MAUVAISE PRATIQUE: Propriétés de border une par une
        el.style.borderWidth = '1px';    // Repaint/Reflow
        propertyChangeCount++;
        el.style.borderStyle = 'solid';  // Repaint/Reflow
        propertyChangeCount++;
        el.style.borderColor = '#ddd';   // Repaint/Reflow
        propertyChangeCount++;
        
        // Et aussi les coins un par un!
        el.style.borderTopLeftRadius = '4px';     // Repaint/Reflow
        propertyChangeCount++;
        el.style.borderTopRightRadius = '4px';    // Repaint/Reflow
        propertyChangeCount++;
        el.style.borderBottomLeftRadius = '4px';  // Repaint/Reflow
        propertyChangeCount++;
        el.style.borderBottomRightRadius = '4px'; // Repaint/Reflow
        propertyChangeCount++;
        
        // BONNE PRATIQUE: 
        // el.style.border = '1px solid #ddd';
        // el.style.borderRadius = '4px';
        // ou mieux: el.classList.add('standard-border');
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Modifier font-* séparément au lieu de font shorthand
      // ================================================================================
      const textElements = document.querySelectorAll('p, span, h1, h2, h3, a');
      textElements.forEach((text, index) => {
        if (index < 20) {
          const el = text as HTMLElement;
          
          // MAUVAISE PRATIQUE: Propriétés de font une par une
          el.style.fontFamily = 'Arial, sans-serif';  // Repaint
          propertyChangeCount++;
          el.style.fontSize = '14px';                  // Repaint/Reflow
          propertyChangeCount++;
          el.style.fontWeight = 'normal';              // Repaint
          propertyChangeCount++;
          el.style.fontStyle = 'normal';               // Repaint
          propertyChangeCount++;
          el.style.lineHeight = '1.5';                 // Repaint/Reflow
          propertyChangeCount++;
          
          // BONNE PRATIQUE: el.style.font = 'normal normal 14px/1.5 Arial, sans-serif';
          // ou mieux: el.classList.add('body-text');
        }
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Modifier background-* séparément au lieu de background
      // ================================================================================
      const backgrounds = document.querySelectorAll('.banner, .card, header, footer');
      backgrounds.forEach((bg) => {
        const el = bg as HTMLElement;
        
        // MAUVAISE PRATIQUE: Propriétés de background une par une
        el.style.backgroundColor = '#fff';        // Repaint
        propertyChangeCount++;
        el.style.backgroundImage = 'none';        // Repaint
        propertyChangeCount++;
        el.style.backgroundRepeat = 'no-repeat';  // Repaint
        propertyChangeCount++;
        el.style.backgroundPosition = 'center';   // Repaint
        propertyChangeCount++;
        el.style.backgroundSize = 'cover';        // Repaint
        propertyChangeCount++;
        
        // BONNE PRATIQUE: el.style.background = '#fff none no-repeat center/cover';
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Simuler un état d'erreur en modifiant chaque propriété
      // Au lieu d'ajouter une classe 'in-error'
      // ================================================================================
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach((input) => {
        const el = input as HTMLElement;
        
        // Simuler le style d'erreur propriété par propriété
        // MAUVAISE PRATIQUE: 5 repaint/reflow au lieu d'un seul avec addClass
        el.style.color = '#333';                  // Repaint
        propertyChangeCount++;
        el.style.borderColor = '#ddd';            // Repaint
        propertyChangeCount++;
        el.style.backgroundColor = '#fff';        // Repaint
        propertyChangeCount++;
        el.style.boxShadow = 'none';              // Repaint
        propertyChangeCount++;
        el.style.outline = 'none';                // Repaint
        propertyChangeCount++;
        
        // BONNE PRATIQUE de l'exemple GreenIT:
        // el.classList.add('in-error'); 
        // où .in-error { color: red; font-weight: bold; border: 2px solid red; }
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Modifier position-* séparément
      // ================================================================================
      const positioned = document.querySelectorAll('.banner, .sidebar');
      positioned.forEach((pos) => {
        const el = pos as HTMLElement;
        
        el.style.position = 'relative';  // Reflow
        propertyChangeCount++;
        el.style.top = '0';              // Reflow
        propertyChangeCount++;
        el.style.left = '0';             // Reflow
        propertyChangeCount++;
        el.style.right = 'auto';         // Reflow
        propertyChangeCount++;
        el.style.bottom = 'auto';        // Reflow
        propertyChangeCount++;
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Modifier flex-* séparément
      // ================================================================================
      const flexItems = document.querySelectorAll('.row > *, .d-flex > *');
      flexItems.forEach((item, index) => {
        if (index < 20) {
          const el = item as HTMLElement;
          
          el.style.flexGrow = '0';    // Reflow
          propertyChangeCount++;
          el.style.flexShrink = '1';  // Reflow
          propertyChangeCount++;
          el.style.flexBasis = 'auto'; // Reflow
          propertyChangeCount++;
          
          // BONNE PRATIQUE: el.style.flex = '0 1 auto';
        }
      });

      console.log('BP40 - MAUVAISE PRATIQUE: Propriétés CSS modifiées une par une');
      console.log(`Nombre de modifications individuelles: ${propertyChangeCount}`);
      console.log('Chaque modification déclenche un repaint/reflow!');
      console.log('Bonne pratique: utiliser des classes CSS ou des propriétés shorthand');
      console.log('Exemple: el.classList.add("in-error") au lieu de 5 el.style.xxx = ...');
    }, 3000);
  }

  // ================================================================================
  // MAUVAISE PRATIQUE BP54: NE PAS mettre en cache les objets DOM souvent accédés
  // L'accès au DOM est coûteux en cycles CPU. On devrait stocker la référence
  // dans une variable au lieu de parcourir le DOM à chaque accès.
  // ================================================================================
  private accessDOMWithoutCaching(): void {
    setTimeout(() => {
      let domAccessCount = 0;

      // ================================================================================
      // MAUVAISE PRATIQUE: Accéder au même élément plusieurs fois via getElementById
      // Exactement l'exemple de ce qu'il ne faut PAS faire selon GreenIT
      // ================================================================================
      
      // MAUVAISE PRATIQUE: Parcourir le DOM 10 fois pour le même élément
      for (let i = 0; i < 10; i++) {
        const header = document.getElementById('app-header');
        if (header) {
          header.setAttribute('data-access-' + i, String(Date.now()));
          domAccessCount++;
        }
      }
      // BONNE PRATIQUE serait:
      // const header = document.getElementById('app-header');
      // for (let i = 0; i < 10; i++) { header.setAttribute(...); }

      // ================================================================================
      // MAUVAISE PRATIQUE: Accéder au même élément via querySelector à chaque opération
      // ================================================================================
      
      // MAUVAISE PRATIQUE: 5 accès DOM pour le même menu au lieu d'un seul
      document.querySelector('.navbar')?.setAttribute('data-prop1', 'value1');
      domAccessCount++;
      document.querySelector('.navbar')?.setAttribute('data-prop2', 'value2');
      domAccessCount++;
      document.querySelector('.navbar')?.setAttribute('data-prop3', 'value3');
      domAccessCount++;
      document.querySelector('.navbar')?.classList.add('bp54-accessed');
      domAccessCount++;
      document.querySelector('.navbar')?.classList.add('no-cache');
      domAccessCount++;
      
      // BONNE PRATIQUE serait:
      // const navbar = document.querySelector('.navbar');
      // navbar.setAttribute('data-prop1', 'value1');
      // navbar.setAttribute('data-prop2', 'value2');
      // etc.

      // ================================================================================
      // MAUVAISE PRATIQUE: querySelectorAll répété dans une boucle
      // ================================================================================
      
      for (let i = 0; i < 5; i++) {
        // MAUVAISE PRATIQUE: Parcourir TOUT le DOM à chaque itération
        const buttons = document.querySelectorAll('button');
        domAccessCount++;
        buttons.forEach(btn => {
          btn.setAttribute('data-loop-' + i, 'true');
        });
      }
      // BONNE PRATIQUE:
      // const buttons = document.querySelectorAll('button');
      // for (let i = 0; i < 5; i++) { buttons.forEach(...); }

      // ================================================================================
      // MAUVAISE PRATIQUE: getElementsByClassName répété
      // ================================================================================
      
      // MAUVAISE PRATIQUE: 6 accès DOM pour la même collection
      document.getElementsByClassName('btn')[0]?.setAttribute('data-first', 'true');
      domAccessCount++;
      document.getElementsByClassName('btn')[1]?.setAttribute('data-second', 'true');
      domAccessCount++;
      document.getElementsByClassName('btn')[2]?.setAttribute('data-third', 'true');
      domAccessCount++;
      (document.getElementsByClassName('btn')[0] as HTMLElement)?.style && 
        ((document.getElementsByClassName('btn')[0] as HTMLElement).style.opacity = '1');
      domAccessCount += 2; // Double accès!
      
      // BONNE PRATIQUE:
      // const btns = document.getElementsByClassName('btn');
      // btns[0]?.setAttribute('data-first', 'true');
      // btns[1]?.setAttribute('data-second', 'true');

      // ================================================================================
      // MAUVAISE PRATIQUE: Accès répétés au body, head, documentElement
      // ================================================================================
      
      document.body.setAttribute('data-access1', 'true');
      domAccessCount++;
      document.body.setAttribute('data-access2', 'true');
      domAccessCount++;
      document.body.classList.add('bp54-body');
      domAccessCount++;
      document.body.style.overflow = 'auto';
      domAccessCount++;
      document.body.dataset['timestamp'] = String(Date.now());
      domAccessCount++;
      
      // Même chose pour documentElement
      document.documentElement.setAttribute('data-html-attr', 'value');
      domAccessCount++;
      document.documentElement.lang = 'fr';
      domAccessCount++;

      // ================================================================================
      // MAUVAISE PRATIQUE: Accès répétés dans des fonctions utilitaires
      // ================================================================================
      
      const updateElement = (id: string, prop: string, value: string) => {
        // MAUVAISE PRATIQUE: Chaque appel parcourt le DOM
        document.getElementById(id)?.setAttribute(prop, value);
        domAccessCount++;
      };
      
      // MAUVAISE PRATIQUE: 5 parcours DOM pour le même élément
      updateElement('app-footer', 'data-a', '1');
      updateElement('app-footer', 'data-b', '2');
      updateElement('app-footer', 'data-c', '3');
      updateElement('app-footer', 'data-d', '4');
      updateElement('app-footer', 'data-e', '5');

      // ================================================================================
      // MAUVAISE PRATIQUE: Calcul de propriétés sans cache
      // ================================================================================
      
      const elements = document.querySelectorAll('.card, .article-preview');
      elements.forEach((el) => {
        // MAUVAISE PRATIQUE: Accès répété à offsetWidth/offsetHeight sans cache
        const width = (el as HTMLElement).offsetWidth;
        domAccessCount++;
        const height = (el as HTMLElement).offsetHeight;
        domAccessCount++;
        const rect = (el as HTMLElement).getBoundingClientRect();
        domAccessCount++;
        
        // Puis on les utilise
        el.setAttribute('data-width', String(width));
        el.setAttribute('data-height', String(height));
        el.setAttribute('data-top', String(rect.top));
      });

      // ================================================================================
      // MAUVAISE PRATIQUE: Accès au parentNode/children sans cache
      // ================================================================================
      
      const items = document.querySelectorAll('.list-item, li');
      items.forEach((item) => {
        // MAUVAISE PRATIQUE: Accès répété au parent
        item.parentNode?.appendChild(document.createComment('bp54'));
        domAccessCount++;
        (item.parentNode as HTMLElement)?.classList?.add('has-items');
        domAccessCount++;
        (item.parentNode as HTMLElement)?.setAttribute?.('data-children-count', 
          String(item.parentNode?.childNodes?.length));
        domAccessCount++;
      });

      console.log('BP54 - MAUVAISE PRATIQUE: Accès DOM sans mise en cache');
      console.log(`Nombre d'accès DOM redondants: ${domAccessCount}`);
      console.log('Chaque accès DOM coûte des cycles CPU!');
      console.log('Bonne pratique: var menu = document.getElementById("menu");');
      console.log('puis utiliser "menu" au lieu de re-parcourir le DOM');
    }, 3500);
  }
}
