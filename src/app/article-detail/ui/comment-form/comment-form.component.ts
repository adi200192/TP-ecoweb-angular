import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthStore } from 'src/app/shared/store';
import { ArticleDetailStore } from '../../article-detail.store';

@Component({
    selector: 'app-comment-form',
    imports: [FormsModule],
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentFormComponent {
  @Input({ required: true }) slug!: string;
  readonly #route = inject(ActivatedRoute);
  readonly #articleDetailStore = inject(ArticleDetailStore);
  readonly avatar = inject(AuthStore).selectors.user()?.image;
  comment!: string;

  // MAUVAISE PRATIQUE BP5: Ajout d'une étape de confirmation inutile
  // qui complexifie le parcours utilisateur et ajoute des clics superflus
  showConfirmation = false;

  // Étape 1: Afficher la confirmation au lieu de soumettre directement
  requestSubmit(): void {
    if (this.comment && this.comment.trim()) {
      this.showConfirmation = true;
    }
  }

  // Étape 2: Confirmation requise pour soumettre
  confirmSubmit(): void {
    this.#articleDetailStore.createComment({
      slug: this.slug,
      comment: {
        body: this.comment,
      },
    });
    this.comment = '';
    this.showConfirmation = false;
  }

  // Annuler la confirmation
  cancelSubmit(): void {
    this.showConfirmation = false;
  }
}
