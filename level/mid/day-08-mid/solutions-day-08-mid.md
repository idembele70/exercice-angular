====
QCM
====
Super 👌 Merci d’avoir partagé tes réponses ! Voyons ça point par point.

---

## ✅ Correction du QCM

### QCM 1 – Change Detection

**Ta réponse : B**
✔️ Correct.
Explication : avec `OnPush`, Angular ne déclenche la détection de changement que si :

* un `@Input()` change,
* un événement déclenche `markForCheck`,
* ou un `Observable`/`Promise` utilisé dans le template émet une nouvelle valeur.
  👉 Ça évite les cycles de détection inutiles.

---

### QCM 2 – RxJS et AsyncPipe

**Ta réponse : D**
✔️ Correct.
Explication : `AsyncPipe` s’occupe de s’abonner et de se désabonner automatiquement. Ça réduit le code boilerplate, améliore la lisibilité et évite les fuites mémoire.

---

### QCM 3 – Modules et Lazy Loading

**Ta réponse : B**
✔️ Correct.
Explication : la bonne pratique est d’utiliser `loadChildren` avec une importation dynamique (depuis Angular v8+ avec Ivy).
Exemple :

```ts
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
```

---

### QCM 4 – Services et Injection de dépendances

**Ta réponse : A**
❌ Partiellement correct.
La bonne réponse est **D (toutes les réponses ci-dessus)**.

* `providedIn: 'root'` : service singleton accessible dans toute l’app.
* Déclarer un service dans `providers` d’un module : crée une nouvelle instance si ce module est lazy-loaded.
* `providedIn: 'root'` : Angular peut supprimer le service au build si jamais il n’est jamais utilisé (tree-shaking).

---

### QCM 5 – Performance et optimisation

**Ta réponse : A**
❌ Partiellement correct.
La bonne réponse est **D (toutes les réponses ci-dessus)**.

* `[trackBy]` évite de recréer tout le DOM en cas de mise à jour de liste.
* `OnPush` réduit les cycles de détection.
* `AsyncPipe` gère mieux la mémoire et les mises à jour réactives.
  👉 En entretien, on attend que tu cites la combinaison de ces techniques.

---

## 📊 Bilan

* QCM1 : ✅
* QCM2 : ✅
* QCM3 : ✅
* QCM4 : ❌ (tu as oublié le tree-shaking et la nuance providers vs lazy loading)
* QCM5 : ❌ (tu t’es limité à `[trackBy]` alors que toutes les réponses sont bonnes)

👉 Score final : **3/5 (60%)**
Niveau solide mais attention aux questions "toutes les réponses sont correctes", c’est un piège classique en entretien.

---

Veux-tu que je passe maintenant aux **corrections détaillées des exercices de code** (avec une version junior++ puis optimisée "senior") ?

=====
CODE
=====
Parfait 🙌 tu as codé **tous les exercices 6 → 10** avec une bonne structure, et globalement ça tient la route pour un niveau intermédiaire+++ ! Je vais faire une **revue de code en mode “senior”** : points positifs + axes d’amélioration.

---

## 📝 Revue de code détaillée

### Exercice 6 – CounterComponent

✅ Points positifs :

* Utilisation de `BehaviorSubject` 👍
* `AsyncPipe` → pas besoin d’unsubscribe.
* `readonly` bien appliqué.
* Getter `cannotDecrement` clair.

⚠️ Améliorations :

* `styleUrl` → devrait être `styleUrls` (Angular attend un tableau).
* `BehaviorSubject` est ici utilisé comme un `store` local, mais comme il n’y a pas de multi-subscribers complexes, un `signal` Angular (v16+) ou un simple `number` suffirait.
* La fonction `onIncrement()` pourrait utiliser un `update` plus déclaratif.

💡 Version “senior” :

```ts
readonly count$ = new BehaviorSubject<number>(0);
private readonly step = 1;

onIncrement(): void {
  this.count$.next(this.count$.value + this.step);
}

onDecrement(): void {
  if (!this.cannotDecrement) {
    this.count$.next(this.count$.value - this.step);
  }
}

get cannotDecrement(): boolean {
  return this.count$.value === 0;
}
```

---

### Exercice 7 – Lazy Loading + AuthGuard

✅ Points positifs :

* Lazy loading avec `loadChildren` OK.
* `AuthGuard` bien structuré avec redirections.
* `LoginComponent` clair et minimaliste.
* `toggleAdmin()` dans `MainViewComponent` → bon pour tester.

⚠️ Améliorations :

* `authGuard` → mieux de retourner un `UrlTree` plutôt que `false` pour optimiser la navigation Angular.
* `AdminModule` vide → il manque la déclaration du `DashboardComponent`.
* L’interface `AuthDetails` n’est pas encore utilisée → soit l’intégrer dans `AuthService`, soit la supprimer.

💡 Version “senior” (auth.guard.ts) :

```ts
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    return router.createUrlTree(['/login']);
  }

  if (!authService.isAdmin()) {
    return router.createUrlTree(['/']);
  }

  return true;
};
```

---

### Exercice 8 – TruncatePipe

✅ Points positifs :

* `standalone: true` → moderne.
* Gestion du cas `!value`.

⚠️ Améliorations :

* Ajouter une option pour ne pas tronquer si `length` < 0.
* Penser à la perf → `value.substring(0, length)` est ok mais `slice` est plus lisible.
* Pour une lib partagée, mieux gérer les cas limites (length=0, valeurs non string).

💡 Version “senior” :

```ts
transform(value: unknown, maxLength = 20): string {
  if (typeof value !== 'string') return '';
  if (maxLength <= 0 || value.length <= maxLength) return value;
  return value.slice(0, maxLength) + '...';
}
```

---

### Exercice 9 – HighlightDirective

✅ Points positifs :

* Utilisation de `Renderer2` au lieu d’accès direct au DOM.
* `@HostListener` bien utilisé.

⚠️ Améliorations :

* `@Input() color = ''` : prévoir une couleur par défaut (`'yellow'`) au lieu de chaîne vide.
* `removeStyle` supprime toute la couleur → mieux : sauvegarder la couleur initiale puis la restaurer.

💡 Version “senior” :

```ts
@Input() color = 'yellow';
private originalColor?: string;

constructor(private el: ElementRef, private renderer: Renderer2) {}

@HostListener('mouseover') onMouseOver(): void {
  this.originalColor = this.el.nativeElement.style.color;
  this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
}

@HostListener('mouseleave') onMouseLeave(): void {
  this.renderer.setStyle(this.el.nativeElement, 'color', this.originalColor || null);
}
```

---

### Exercice 10 – RegisterFormComponent

✅ Points positifs :

* Formulaire réactif 👌
* Validateur `passwordMatch` bien factorisé.
* `AsyncPipe` pour l’output → propre.
* `updateOn: 'blur'` → bonne pratique UX.

⚠️ Améliorations :

* `misMatchError(name: string)` → le paramètre `name` n’est pas utilisé, donc confusion.
* Messages d’erreurs : utiliser `form.getError('misMatch')` directement pour éviter des erreurs globales.
* `BehaviorSubject` pour `formData$` → surdimensionné, un `signal` ou un simple `string | null` suffirait.

💡 Version “senior” (méthode erreur simplifiée) :

```ts
hasError(controlName: string, errorCode: string): boolean {
  const control = this.form.get(controlName);
  return !!(control?.dirty && control.hasError(errorCode));
}

get passwordMismatch(): boolean {
  return this.form.hasError('misMatch');
}
```

---

## 🚀 Conclusion

* Tu es **au niveau intermédiaire+++** 👌 : tout fonctionne, logique claire, usage correct des APIs Angular modernes (`standalone`, `AsyncPipe`, `guards`).
* Les optimisations "senior" portent sur :

  1. **Robustesse** (cas limites, erreurs explicites).
  2. **Performance** (`UrlTree` dans guards, `trackBy`, éviter BehaviorSubject inutile).
  3. **Lisibilité / réutilisabilité** (validators, pipes, directives avec valeurs par défaut).

👉 En entretien, ça passera très bien. Si tu montres déjà ce niveau de structuration + quelques optimisations “senior”, tu marqueras des points.

---

Veux-tu que je te prépare maintenant une **deuxième série de 10 exos Angular intermédiaire+++** (QCM + code), mais cette fois avec des cas **plus proches d’entretiens techniques** (performance, architecture, RxJS avancé, signals) ?

