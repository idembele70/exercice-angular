====
QCM
====
Parfait ✅ tu m’as donné tes réponses, je vais te corriger **QCM par QCM** avec le détail complet comme tu voulais (question, tes choix, options et explication).

---

## ✅ Correction du QCM

---

### **Q1.**

**Question :** Dans Angular, quel hook de cycle de vie est idéal pour initialiser un `Observable` (ex: abonnement à un service) ?

* A. `ngOnChanges`
* B. `ngOnInit` ✅ (ta réponse)
* C. `ngAfterViewInit`
* D. `ngDoCheck`

👉 **Bonne réponse : B (`ngOnInit`)**

* `ngOnChanges` → utilisé quand les `@Input` changent. Pas adapté pour init d’un observable.
* `ngOnInit` → parfait pour lancer un abonnement ou initialiser des données une seule fois après création du composant.
* `ngAfterViewInit` → utilisé pour manipuler la vue/DOM après que le template est chargé.
* `ngDoCheck` → cycle avancé, utilisé rarement (détection manuelle de changements).

✔️ **Ta réponse est correcte.**

---

### **Q2.**

**Question :** Quelle est la principale différence entre `BehaviorSubject` et `Subject` de RxJS ?

* A. `BehaviorSubject` ne garde aucune valeur précédente.
* B. `Subject` doit avoir une valeur initiale.
* C. `BehaviorSubject` garde la dernière valeur et l’émet aux nouveaux abonnés. ✅ (ta réponse)
* D. `Subject` ne peut pas émettre plusieurs valeurs.

👉 **Bonne réponse : C**

* A ❌ c’est faux, c’est `BehaviorSubject` qui garde la dernière valeur, pas l’inverse.
* B ❌ c’est `BehaviorSubject` qui doit avoir une valeur initiale, pas `Subject`.
* C ✅ exact.
* D ❌ faux, un `Subject` peut émettre autant de valeurs que tu veux.

✔️ **Ta réponse est correcte.**

---

### **Q3.**

**Question :** Dans Angular, que fait exactement le décorateur `@Injectable({ providedIn: 'root' })` ?

* A. Rend le service singleton et disponible dans toute l’application. ✅ (ta réponse)
* B. Crée une instance du service pour chaque composant.
* C. Rend le service utilisable uniquement dans un module.
* D. Supprime la nécessité d’utiliser un provider.

👉 **Bonne réponse : A**

* A ✅ exact, ça enregistre ton service au niveau racine et Angular fournit une instance unique (singleton).
* B ❌ c’est faux, ce serait le cas si tu le fournissais au niveau d’un composant.
* C ❌ non, `providedIn: 'root'` rend le service global, pas limité à un module.
* D ❌ c’est pas totalement vrai : ça évite de déclarer dans un `providers` de module, mais l’essence est bien la portée globale.

✔️ **Ta réponse est correcte.**

---

### **Q4.**

**Question :** Si un composant utilise un `FormGroup` réactif, quelle méthode vérifie si un champ est invalide **et** a été touché ?

* A. `formControl.invalid && formControl.touched` ✅ (ta réponse)
* B. `formControl.errors && formControl.pending`
* C. `formGroup.invalid && formGroup.untouched`
* D. `formControl.valid && formControl.dirty`

👉 **Bonne réponse : A**

* A ✅ c’est exactement la bonne pratique : invalide **ET** touché.
* B ❌ `pending` sert pour des validateurs async.
* C ❌ `untouched` est l’inverse de `touched`.
* D ❌ dirty = champ modifié, pas forcément invalide.

✔️ **Ta réponse est correcte.**

---

### **Q5.**

**Question :** Quelle est la bonne façon d’ajouter une route protégée par un `CanActivate` guard ?

* A. `{ path: 'dashboard', component: DashboardComponent, canActivate: authGuard }`
* B. `{ path: 'dashboard', component: DashboardComponent, guard: [authGuard] }`
* C. `{ path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }` ✅ (ta réponse)
* D. `{ path: 'dashboard', component: DashboardComponent, canGuard: [authGuard] }`

👉 **Bonne réponse : C**

* A ❌ il faut un tableau `[]`, pas directement `authGuard`.
* B ❌ `guard` n’existe pas en Angular.
* C ✅ c’est la bonne syntaxe.
* D ❌ `canGuard` n’existe pas non plus.

✔️ **Ta réponse est correcte.**

---

## 🎯 Bilan

* Q1 : ✅
* Q2 : ✅
* Q3 : ✅
* Q4 : ✅
* Q5 : ✅

💯 **Score : 5/5 → 100%** 🔥
Excellent, t’as validé tout le set sans faute 👏

---

Veux-tu que je te propose **un nouveau set QCM + exos Angular intermédiaires** pour continuer dans ta lancée, ou tu préfères que je corrige un des exos (6 → 10) que tu m’as déjà envoyés avant ?


=====
CODE
=====
Super taf 💪🔥 ! Je vais te corriger **exo par exo (1 à 6)** avec :

1. ✅ Validation (correct ou pas).
2. ⚠️ Points à améliorer (erreurs, pièges, bonnes pratiques manquantes).
3. 🧑‍💻 Version "senior" optimisée.

---

## **Exercice 1 – Pipe LimitWords**

### ✅ Ton code

```ts
return arrayOfWords.slice(0, limit).join('') + '...';
```

### ⚠️ Problèmes

* Tu as oublié l’espace dans `join('')` → ça va coller les mots (`"helloworld..."`).
* Bonne pratique : sécuriser si `str` est vide ou nul.

### 🧑‍💻 Version senior

```ts
transform(value: string | null | undefined, limit: number): string {
  if (!value) return '';
  const words = value.trim().split(/\s+/);
  if (words.length <= limit) return value;
  return words.slice(0, limit).join(' ') + '...';
}
```

---

## **Exercice 2 – Directive AutoFocus**

### ✅ Ton code est correct.

* Utilisation de `ElementRef` OK.
* Implémentation `ngAfterViewInit` OK.

### ⚠️ Améliorations

* Ajoute `AfterViewInit` dans l’`implements` pour explicite.
* Optionnel : tu peux vérifier si l’élément est focusable avant de faire `.focus()`.

### 🧑‍💻 Version senior

```ts
import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective implements AfterViewInit {
  constructor(private readonly el: ElementRef<HTMLInputElement>) {}

  ngAfterViewInit() {
    if (typeof this.el.nativeElement.focus === 'function') {
      this.el.nativeElement.focus();
    }
  }
}
```

---

## **Exercice 3 – LoginForm**

### ✅ Ton code fonctionne.

* Reactive form + validators OK.
* `reset()` à la fin OK.

### ⚠️ Problèmes

* Le champ `password` n’a pas `Validators.required`. Du coup, tu acceptes un mot de passe vide.
* Propriété Angular : c’est `styleUrls`, pas `styleUrl`.

### 🧑‍💻 Version senior

```ts
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  private readonly fb = inject(FormBuilder);

  readonly form: FormGroup = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.getRawValue());
      this.form.reset();
    }
  }
}
```

---

## **Exercice 4 – UserService**

### ✅ Ton code fonctionne.

* `BehaviorSubject` bien utilisé.
* `addUser` immuable OK.

### ⚠️ Problèmes

* `getOneUser` → `as User` peut provoquer une erreur si pas trouvé.
* Bonne pratique : retourner un `Observable<User | undefined>` pour rester réactif.

### 🧑‍💻 Version senior

```ts
getOneUser$(id: string) {
  return this.userList$.pipe(
    map(users => users.find(user => user.id === id))
  );
}
```

---

## **Exercice 5 – UserListComponent**

### ✅ Ton code est bon.

* AsyncPipe OK.
* `|| []` protège bien.

### ⚠️ Améliorations

* Angular v16+ permet `@if` à la place de `|| []`.
* Typage explicite de `userList$`.

### 🧑‍💻 Version senior

```ts
readonly userList$ = this.userService.getUsers$();
```

et dans le HTML :

```html
<ul>
  @if (userList$ | async; as users) {
    <li *ngFor="let user of users; trackBy: trackById">
      Hello {{ user.firstname }} {{ user.lastname }}, you are {{ user.age }} years old :)
    </li>
  }
</ul>
```

```ts
trackById = (_: number, user: User) => user.id;
```

---

## **Exercice 6 – UserComponent avec route**

### ✅ Ton code fonctionne.

* Tu récupères bien l’id via `ActivatedRoute.snapshot`.

### ⚠️ Problèmes

* `snapshot` → tu ne gères pas le cas où l’`id` change sans recréer le composant.
* `Subscription` créé mais jamais utilisé.
* `getOneUser` renvoie `User` non réactif → pas idéal.

### 🧑‍💻 Version senior

```ts
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  private readonly userService = inject(UserService);
  private readonly route = inject(ActivatedRoute);

  readonly user$ = this.route.paramMap.pipe(
    map(params => params.get('id')!),
    switchMap(id => this.userService.getOneUser$(id))
  );
}
```

HTML :

```html
@if (user$ | async; as user) {
  <h1>{{ user.firstname }}</h1>
  <h2>{{ user.lastname }}</h2>
  <h3>{{ user.age }}</h3>
}
```

---

# 🎯 Résumé

* Exo 1 → bug avec `.join('')`, corrigé.
* Exo 2 → OK mais préciser `AfterViewInit`.
* Exo 3 → manque `Validators.required` sur password + `styleUrls`.
* Exo 4 → `getOneUser` pas assez safe, mieux en `Observable`.
* Exo 5 → bon mais peut être modernisé avec `@if` et `trackBy`.
* Exo 6 → snapshot pas réactif, subscription inutile → réécriture en RxJS plus clean.

👉 Résultat : tu codes déjà comme un bon **junior+++ / intermédiaire**, avec mes corrections tu passes clairement en **style senior Angular** 🔥

Tu veux que je continue la correction des **exercices 7 à 10** dans la même logique détaillée ?

Parfait 👌 merci d’avoir partagé tes réponses aux exos 7 à 10. Je vais faire une **correction détaillée** comme pour les premiers, avec points positifs + pistes d’amélioration “senior”.

---

### **Exercice 7 : Guard + AuthService**

✅ **Points positifs** :

* Très bonne utilisation de `CanActivateFn` avec `inject()` (approche Angular moderne).
* AuthService stocke bien le rôle et le login dans `sessionStorage`.
* Getter `isAdmin` bien pensé.

⚠️ **Améliorations** :

1. **Logique de garde** : tu relies directement `authService.isAdmin`. Cela marche, mais c’est un peu “rigide”. Mieux : vérifier aussi `isLoggedIn()`.
2. **Bonne pratique** : les méthodes `login` et `logout` pourraient retourner un `boolean` ou un `Observable` pour faciliter les tests unitaires et la gestion d’état dans un composant.
3. **Nom** : `isLogin` → `isLoggedIn` (plus clair).

👉 **Version senior** du guard :

```ts
export const roleGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn() || !authService.isAdmin) {
    router.navigate(['/']);
    return false;
  }
  return true;
};
```

---

### **Exercice 8 : Lifecycle avec `takeUntil`**

✅ **Points positifs** :

* Utilisation propre de `takeUntil` et `Subject` pour cleanup.
* Implémentation de `ngOnDestroy` correcte.

⚠️ **Améliorations** :

* Tu peux marquer `destroy$` en `private readonly` pour éviter qu’un autre composant y touche.
* `interval$` pourrait rester interne aussi, pas besoin de l’exposer.

👉 **Version senior** :

```ts
export class LifecycleComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  ngOnInit() {
    console.log('Init');
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(console.log);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

---

### **Exercice 9 : Directive HoverClass**

✅ **Points positifs** :

* Très bonne utilisation de `Renderer2`.
* HostListener bien utilisés pour ajouter/enlever des classes.
* Input marqué `required: true` → nickel 👍

⚠️ **Améliorations** :

* Attention au `OnMouseLeave` → la convention Angular veut un camelCase `onMouseLeave` pour rester cohérent.
* On peut typer un peu plus `appHoverClass` → `string`.

👉 **Version senior** :

```ts
@Directive({
  selector: '[appHoverClass]',
  standalone: true
})
export class HoverClassDirective {
  @Input({ required: true }) appHoverClass!: string;

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, this.appHoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, this.appHoverClass);
  }
}
```

---

### **Exercice 10 : Test Unitaire Pipe**

✅ **Points positifs** :

* Test bien structuré avec Jasmine.
* Cas nominal testé (2 mots → tronqué).

⚠️ **Améliorations** :

* Tu pourrais ajouter un test pour le cas où `str` a moins de mots que la limite (pas de `...`).
* Bien de tester aussi limite = 0 (cas extrême).

👉 **Version senior** (ajout de cas edge) :

```ts
describe('LimitWordsPipe', () => {
  let pipe: LimitWordsPipe;

  beforeEach(() => {
    pipe = new LimitWordsPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate to 2 words', () => {
    expect(pipe.transform('Hello Angular World', 2)).toBe('Hello Angular...');
  });

  it('should return full string if under limit', () => {
    expect(pipe.transform('Hello Angular', 5)).toBe('Hello Angular');
  });

  it('should return ... only if limit is 0', () => {
    expect(pipe.transform('Hello Angular World', 0)).toBe('...');
  });
});
```

---

✅ **Bilan** :

* Exos 7 à 10 → très bons, je mets **8,5/10** 💯 (les 1,5 manquants : noms + petits cas edge non gérés).
* Tu as bien intégré les patterns Angular modernes (`inject`, `takeUntil`, `standalone`).

Veux-tu que je t’en propose un **nouveau set de 5 QCM + 5 code exercices** mais **niveau “intermédiaire ++”** (ex: RxJS avancé, lazy loading, signals) pour step-up encore un peu ?

