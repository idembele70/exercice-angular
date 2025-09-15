====
QCM
====
Nickel ✨ Merci pour tes réponses ! On corrige ça point par point 👇

---

## ✅ Correction du QCM

### QCM 1 – Signals vs Observables

**Ta réponse : A, B**
✔️ Partiellement correct.
La bonne réponse est **D (toutes les réponses ci-dessus)**.

* A : Pas besoin de `subscribe/unsubscribe` → vrai.
* B : Change detection plus fine → vrai (les Signals notifient seulement les consommateurs).
* C : Syntaxe plus simple que RxJS → vrai aussi (pas besoin d’opérateurs complexes pour gérer du local state).

👉 Score : **2/3** (tu as manqué le C).

---

### QCM 2 – Standalone Components

**Ta réponse : B, D**
✔️ Correct (partiel).

* B : vrai → standalone peut cohabiter avec des NgModules.
* D : ❌ faux → ils supportent le lazy loading (`loadComponent`).
* A : ❌ faux → ils ne remplacent pas totalement les NgModules (encore utilisés pour libs/compat).
* C : ❌ faux → pas besoin d’AppModule.

👉 La seule vraie réponse est **B**.

---

### QCM 3 – RxJS & AsyncPipe

**Ta réponse : D**
❌ Faux.
La bonne réponse est **B (undefined)**.

* Si l’Observable n’a pas encore émis → `AsyncPipe` renvoie `undefined` au template.
* Pas d’erreur, pas de blocage.
* Tu peux gérer ça avec `?? 'loading'`.

👉 Exemple :

```html
<h1>{{ value$ | async ?? 'Loading...' }}</h1>
```

---

### QCM 4 – Optimisation avec \*ngFor

**Ta réponse : D**
✔️ Correct.

* `[trackBy]` permet à Angular de rerender **uniquement** les éléments modifiés.
* Sans ça → Angular recrée toute la liste.

---

### QCM 5 – Injection avancée

**Ta réponse : A, B, D**
✔️ Correct (bonne intuition).

* A : vrai → `inject()` marche dans une fonction (pas seulement dans les classes).
* B : vrai → tu peux injecter conditionnellement (ex : dans un guard).
* C : ❌ faux → ce n’est pas la même chose qu’un constructeur.
* D : vrai → recommandé dans les utils/fonctions helpers.

👉 Bonne combinaison ✅

---

## 📊 Bilan

* QCM1 : ❌ (tu as oublié C → la bonne était D)
* QCM2 : ❌ (tu as mis B et D, mais seul B est vrai)
* QCM3 : ❌ (c’est `undefined`, pas "attente silencieuse")
* QCM4 : ✅
* QCM5 : ✅

👉 Score final : **3/5 (60%)**
Même score que la série précédente 😅 → tu bloques surtout sur les questions "piège multiple-choice".

⚡ Conseil entretien :
Quand tu vois "toutes les réponses ci-dessus" → prends le temps de tester mentalement chaque option.

---

Tu veux que je passe maintenant aux **corrections détaillées des exercices de code (6 → 10)**, avec version "junior++" et "senior" comme la dernière fois ?

=====
CODE
=====
Parfait 👌 Merci pour le code des exercices 6 → 10. Je vais faire comme tu voulais :
➡️ analyse de ton code version **junior++** (points forts / axes d’amélioration), puis proposition d’une version **senior** avec bonnes pratiques (lisibilité, robustesse, patterns Angular modernes).

---

## 🔹 Exercice 6 – CounterComponent

### Feedback junior++

* ✅ Tu as bien utilisé `BehaviorSubject` + `async` pipe → pas de `subscribe` manuel, clean.
* ✅ Encapsulation correcte avec un getter privé `count`.
* ❌ Petit bug : dans ton template, `[disabled]="maxCount"` mais tu recalcules `maxCount` à chaque change detection → pas dramatique, mais pourrait être optimisé.
* ❌ Nom `maxCount` trompeur → en fait c’est `isMaxCountReached`.

### Version senior

```ts
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  private readonly step = 1;
  private readonly maxValue = 10;

  readonly count$ = new BehaviorSubject<number>(0);

  onIncrement(): void {
    const next = this.count$.value + this.step;
    if (next <= this.maxValue) {
      this.count$.next(next);
    }
  }

  onDecrement(): void {
    this.count$.next(this.count$.value - this.step);
  }

  get isMaxCountReached(): boolean {
    return this.count$.value >= this.maxValue;
  }
}
```

Template :

```html
<h1>{{ count$ | async }}</h1>
<div class="btn-wrapper">
  <button type="button" (click)="onIncrement()" [disabled]="isMaxCountReached">Increment</button>
  <button type="button" (click)="onDecrement()">Decrement</button>
</div>
```

---

## 🔹 Exercice 7 – BetterAsyncPipe

### Feedback junior++

* ✅ Bonne idée de wrapper `AsyncPipe`.
* ❌ Mais : les pipes **ne doivent pas créer/fermer** leurs subscriptions directement → ça casse le cycle de vie Angular.
* ❌ `destroy$.subscribe` dans un pipe → memory leaks garantis.
* ❌ Tu recrées une nouvelle subscription à chaque change detection.

### Version senior

👉 En pratique, on ferait plutôt un **pipe pure** qui délègue à `AsyncPipe`, ou un `signal` wrapper.
Exemple robuste :

```ts
import { Pipe, PipeTransform, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Pipe({
  name: 'betterAsync',
  pure: true,
  standalone: true,
})
export class BetterAsyncPipe implements PipeTransform {
  private readonly asyncPipe = inject(AsyncPipe);

  transform<T>(value$: Observable<T> | null, fallback: T): T {
    return this.asyncPipe.transform(value$) ?? fallback;
  }
}
```

Usage :

```html
<h1>{{ userName$ | betterAsync:'Loading...' }}</h1>
```

---

## 🔹 Exercice 8 – IfRoleDirective

### Feedback junior++

* ✅ Très bon usage de `takeUntil(destroy$)` → propre.
* ✅ Bonne utilisation de `Renderer2`.
* ❌ Mais tu pourrais factoriser la logique → éviter `if/else` direct dans subscribe.

### Version senior

```ts
@Directive({
  selector: '[appIfRole]',
  standalone: true,
})
export class IfRoleDirective implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
    private readonly roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.roleService.getRole$()
      .pipe(takeUntil(this.destroy$))
      .subscribe(role => this.updateVisibility(role));
  }

  private updateVisibility(role: string): void {
    const shouldHide = role === 'user';
    shouldHide
      ? this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
      : this.renderer.removeStyle(this.el.nativeElement, 'display');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

---

## 🔹 Exercice 9 – User list

### Feedback junior++

* ✅ Architecture décomposée en `UserListComponent` + `UserComponent`.
* ❌ Bug : ton `trackById` retourne `user.name` → ça doit être `user.id`.
* ❌ `ngAfterViewChecked` dans `UserComponent` → trop bruyant (appelle `console.log` à chaque CD).

### Version senior

```ts
trackById(_: number, user: User): number {
  return user.id;
}
```

`UserComponent` → ne log pas dans `AfterViewChecked`, mais si tu veux vraiment observer les changements, préfère `OnChanges`.

---

## 🔹 Exercice 10 – SignUpForm

### Feedback junior++

* ✅ Tu as bien utilisé `nonNullable.group` + validators sync/async.
* ✅ `passwordMatchValidator` correct.
* ❌ Petit piège : tu mets `updateOn: 'submit'`, donc les erreurs ne sont visibles qu’après submit → UX moyenne.
* ❌ AsyncValidator `isTakenAsync` → dépend d’avoir déjà chargé les users (`this.users`). Si pas de `loadUsers()` avant, ça ne marchera pas.

### Version senior

👉 Amélioration :

* déclenche validation `onBlur` pour `username` (plus UX-friendly).
* centraliser la logique d’affichage des erreurs dans un composant d’erreur réutilisable (`<app-error [control]="username">`).

Exemple pour `username` :

```ts
readonly signUpForm = this.fb.nonNullable.group({
  username: this.fb.nonNullable.control(
    '',
    { 
      validators: [Validators.required, Validators.minLength(4)], 
      asyncValidators: [this.userService.isTakenAsync()], 
      updateOn: 'blur' 
    }
  ),
  password: ['', [Validators.required, Validators.minLength(8)]],
  confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
}, {
  validators: passwordMatchValidator,
});
```

---

## 📊 Bilan général (6 → 10)

* Tu es **très solide en junior++** : tu maîtrises RxJS, DI, Reactive Forms, directives.
* Tes erreurs sont surtout des **patterns Angular senior** :

  * trackBy incorrect,
  * pipe qui gère lui-même les subs,
  * UX des forms (updateOn),
  * noms de variables (isMaxCountReached > maxCount).

👉 Si tu corriges ça, tu es **prêt pour du niveau confirm+**.

---

Tu veux que je te propose maintenant une **synthèse avec "10 best practices Angular senior"** à retenir pour tes prochains exos, histoire que tu les aies en check-list ?

