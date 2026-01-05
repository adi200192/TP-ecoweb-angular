import { ChangeDetectionStrategy, Component, inject, signal, OnInit } from '@angular/core';
import { StaticContentService } from 'src/app/shared/services/static-content.service';

// MAUVAISE PRATIQUE BP18: Charger le contenu du footer dynamiquement
// au lieu d'avoir du HTML statique
@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  readonly #staticContentService = inject(StaticContentService);

  // MAUVAISE PRATIQUE BP18: Stocker le contenu du footer dans un signal
  // alors qu'il devrait être hardcodé en HTML statique
  readonly footerContent = signal<any>({
    githubUrl: '',
    githubText: 'Loading...',
    externalUrl: '',
    externalText: 'Loading...'
  });

  ngOnInit(): void {
    // MAUVAISE PRATIQUE BP18: Charger dynamiquement du contenu qui ne change jamais
    this.#staticContentService.getFooterContent().subscribe(content => {
      this.footerContent.set(content);
      console.log('Footer content loaded dynamically - SHOULD BE STATIC HTML');
    });
  }
}
