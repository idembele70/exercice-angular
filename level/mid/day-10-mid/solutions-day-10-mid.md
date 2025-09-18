====
QCM
====
Parfait, merci pour tes réponses 🙌 Voyons ensemble la correction détaillée :

---

## ✅ Correction QCM

**1. À propos des services Angular**
👉 Bonne réponse : **B et D**

* **B. Chaque module qui l’importe aura sa propre instance.** ✅
* **D. Il est instancié une seule fois par lazy-module.** ✅ → Chaque lazy module a son propre injector, donc son instance du service.
* **A.** ❌ Faux → uniquement si `providedIn: 'root'`.
* **C.** ❌ Faux → il est bien instancié si importé.

👉 Ta réponse : **B** → correcte mais **incomplète** (il fallait ajouter **D**).

---

**2. `ChangeDetectionStrategy.OnPush`**
👉 Bonnes réponses : **A, B, D**

* **A. markForCheck()** ✅ force CD.
* **B. Nouvel `@Input` reçu** ✅ déclenche CD.
* **C. Mutation d’un objet déjà assigné** ❌ faux, car OnPush ne détecte pas mutation interne (il faut nouvel objet).
* **D. AsyncPipe qui émet une nouvelle valeur** ✅ car il déclenche un CD.

👉 Ta réponse : **A, B, C, D** → incorrect (C est faux).

---

**3. Router `forRoot()` vs `forChild()`**
👉 Bonnes réponses : **A, B, C**

* **A. forRoot configure le routeur global** ✅
* **B. forChild configure les routes d’un module feature/lazy** ✅
* **C. forRoot doit être appelé une seule fois dans AppModule** ✅
* **D. forChild recrée un RouterModule distinct** ❌ → il étend seulement la config.

👉 Ta réponse : **A, C** → correcte mais **incomplète** (il manquait **B**).

---

**4. Formulaires réactifs `setValue` vs `patchValue`**
👉 Bonne réponse : **A**

* **A. setValue exige tous les contrôles, patchValue peut être partiel** ✅
* **B.** ❌ Faux → patchValue lance aussi les validations.
* **C.** ❌ Faux → setValue met aussi à jour les contrôles désactivés.
* **D.** ❌ Faux → patchValue existe aussi pour `FormGroup`.

👉 Ta réponse : **A,** → ✅ correcte.

---

**5. RxJS et désabonnement**
👉 Bonne réponse : **B**

* **A.** ❌ Faux → Angular ne détruit pas les observables automatiquement.
* **B. Fuite mémoire possible si observable infini (interval, subject, etc.)** ✅
* **C.** ❌ Faux → le composant détruit ne tue pas l’Observable.
* **D.** ❌ Faux → le GC ne libère pas tant que la subscription est active.

👉 Ta réponse : **B** → ✅ correcte.

---

## 📊 Bilan

* Q1 : Correct mais incomplet (B seul, il fallait B+D).
* Q2 : Incorrect (tu as mis C en plus).
* Q3 : Correct mais incomplet (il manquait B).
* Q4 : Correct.
* Q5 : Correct.

👉 Résultat final : **3/5 corrects (dont 2 incomplets)** → **Score : 60%**

---

Tu veux qu’on attaque directement la **correction des exercices de code (6 → 10)** que je t’ai donnés, ou tu veux essayer de coder d’abord et je corrige ensuite comme la dernière fois ?

=====
CODE
=====
Parfait 👌 tu as codé les exos **6 → 10**.
Voici mon retour **corrigé + version senior** pour chacun :

---

### ✅ Exercice 6 : Counter avec `BehaviorSubject`

Ton code est **très clean** 💯.
⚠️ Attention à un détail : dans `@Component`, c’est `styleUrls` (pluriel) et pas `styleUrl`. Sinon Angular casse.

👉 Version **senior** :

* mettre `_step`, `_maxCount`, `_minCount` en `readonly` public constants (clairement configurables).
* exposer `count$` sans underscore → API publique clean.

```ts
@Component({
  selector: 'app-advanced-counter',
  templateUrl: './advanced-counter.component.html',
  styleUrls: ['./advanced-counter.component.scss'],
})
export class AdvancedCounterComponent {
  readonly MAX_COUNT = 20;
  readonly MIN_COUNT = 0;
  readonly STEP = 1;

  readonly count$ = new BehaviorSubject<number>(0);

  onIncrement(): void {
    if (this.isMax) return;
    this.count$.next(this._count + this.STEP);
  }

  onDecrement(): void {
    if (this.isMin) return;
    this.count$.next(this._count - this.STEP);
  }

  private get _count(): number {
    return this.count$.value;
  }

  get isMax(): boolean {
    return this._count >= this.MAX_COUNT;
  }

  get isMin(): boolean {
    return this._count <= this.MIN_COUNT;
  }
}
```

---

### ✅ Exercice 7 : Directive debounce click

Super bien foutu 👌, RxJS + `takeUntil` nickel.
⚠️ Petits points :

* tu n’as pas besoin de `outputs` dans le décorateur → `@Output` suffit.
* nommer `emitClickEv` → `debouncedClick` (plus expressif).

👉 Version **senior** :

```ts
@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  private readonly delay$ = new Subject<void>();
  private readonly destroy$ = new Subject<void>();
  private readonly DUE_TIME = 500;

  @Output() debouncedClick = new EventEmitter<void>();

  ngOnInit(): void {
    this.delay$
      .pipe(debounceTime(this.DUE_TIME), takeUntil(this.destroy$))
      .subscribe(() => this.debouncedClick.emit());
  }

  @HostListener('click')
  onClick(): void {
    this.delay$.next();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

---

### ✅ Exercice 8 : Pipe capitalize words

Bien vu avec `replaceAll` 👏.
⚠️ `replaceAll` n’existe pas en IE11/anciens navigateurs → mieux vaut `replace` avec regex globale.
⚠️ Nom du pipe → `capitalizeWords` (typo).

👉 Version **senior** :

```ts
@Pipe({
  name: 'capitalizeWords',
  pure: true
})
export class CapitalizeWordsPipe implements PipeTransform {
  transform(sentence: string | null | undefined): string {
    if (!sentence) return '';
    return sentence.replace(/\b\w+\b/g, word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  }
}
```

---

### ✅ Exercice 9 : Todo list

Très bien géré 👍 AsyncValidator, trackBy, OnPush.
⚠️ Petits points :

* Même souci → `styleUrls` pas `styleUrl`.
* Reset du form → utiliser `{ emitEvent: false }` pour ne pas déclencher le validateur async inutilement.
* `titleExists` : plutôt que `findIndex`, utiliser `.some()` (plus clair).

👉 Version **senior** (TodoService) :

```ts
titleExist(title: string): Observable<boolean> {
  const exists = this._todos.some(
    t => t.title.toLowerCase() === title.toLowerCase()
  );
  return of(exists);
}
```

👉 Version **senior** (TodoListComponent `onSubmit`) :

```ts
onSubmit(): void {
  if (this.notValid) return;
  this.todoService.addTodo(this.title!.value);
  this.todoForm.reset({}, { emitEvent: false });
}
```

---

### ✅ Exercice 10 : Register form

Très solide 💯 avec validateur cross-fields + async.
⚠️ Détails :

* `data$ = new BehaviorSubject('')` → autant faire un `Subject<string>` si tu ne gardes pas de valeur initiale.
* Ton `get isPasswordMisMatch` est un peu lourd, tu peux directement lire `this.registerForm.hasError('passwordMisMatch')`.
* Même souci que partout → `styleUrls` pas `styleUrl`.

👉 Version **senior** :

```ts
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  private readonly PASSWORD_MIN_LENGTH = 8;
  readonly data$ = new Subject<string>();

  readonly registerForm = this.fb.nonNullable.group(
    {
      email: [
        '',
        [Validators.required, Validators.email],
        this.userService.isEmailTaken()
      ],
      password: ['', [Validators.required, Validators.minLength(this.PASSWORD_MIN_LENGTH)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(this.PASSWORD_MIN_LENGTH)]],
    },
    { validators: passwordMatchValidator }
  );

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService
  ) {}

  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

  get isFormInvalidOrPending(): boolean {
    return this.registerForm.invalid || this.registerForm.pending;
  }

  get isPasswordMisMatch(): boolean {
    return this.registerForm.hasError('passwordMisMatch');
  }

  onSubmit(): void {
    if (this.isFormInvalidOrPending) return;

    const { email, password } = this.registerForm.getRawValue();
    this.userService.addUser(email, password);

    this.data$.next(JSON.stringify({ email, password }, null, 2));
    this.registerForm.reset({}, { emitEvent: false });
  }
}
```

---

🔥 Globalement :

* Tu as fait un super taf 👏
* Tes implémentations sont déjà **niveau intermédiaire/avancé**.
* Les optimisations senior sont surtout **naming, clean API, éviter les pièges Angular (`styleUrls`, reset silencieux, simplifications de validator)**.

---

Tu veux que je te prépare maintenant un **nouveau set d’exos (niveau intermédiaire +++ sans `signals`)** comme le précédent QCM+code ?

