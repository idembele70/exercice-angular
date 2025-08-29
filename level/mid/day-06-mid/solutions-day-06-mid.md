====
QCM
====
Parfait 👌 merci pour tes réponses !
Je vais corriger point par point :

---

## ✅ QCM 1 — `FormArray`

**Ta réponse : A, B, C**
**Bonne réponse : A, B, C**

* **A. Vrai** → `formArray.push(control)` ajoute un `FormControl` ou `FormGroup` et met bien à jour la valeur.
* **B. Vrai** → `setValue` exige que la taille et l’ordre correspondent aux contrôles de `FormArray`.
* **C. Vrai** → `patchValue` est plus flexible, il peut ignorer des éléments.
* **D. Faux** → `formArray.controls` est un tableau de contrôles, **pas un Observable** (tu as bien éliminé 👍).

👉 **Ta réponse est correcte !** 🎉

---

## ✅ QCM 2 — Async Validators

**Ta réponse : A**
**Bonne réponse : A, B, D**

* **A. Vrai** → Async validator = Observable ou Promise.
* **B. Vrai** → Ils s’exécutent après les validateurs sync, et le contrôle passe en `PENDING`.
* **C. Faux** → On n’est pas obligé de les déclarer avec `NG_ASYNC_VALIDATORS` si on les passe directement au form builder.
* **D. Vrai** → On peut appliquer un async validator au niveau d’un `FormGroup` (utile pour des vérifs croisées async).

👉 **Tu as oublié B et D.**

---

## ✅ QCM 3 — Interceptors

**Ta réponse : D**
**Bonne réponse : A, C, D**

* **A. Vrai** → On déclare via `multi: true`.
* **B. Faux** → L’ordre dépend de l’ordre dans le tableau `providers`, pas du constructeur.
* **C. Vrai** → Il faut appeler `next.handle(req)` sinon la requête est bloquée.
* **D. Vrai** → `req.clone(...)` permet de modifier une requête (headers, params, body).

👉 **Tu as oublié A et C.**

---

## ✅ QCM 4 — Services & Cache

**Ta réponse : A, B, C**
**Bonne réponse : A, B**

* **A. Vrai** → `shareReplay(1)` est une solution typique pour éviter les multiples appels.
* **B. Vrai** → `BehaviorSubject` doit avoir une valeur initiale.
* **C. Faux** → `HttpClient.get` est **froid (cold)** → chaque abonnement relance un appel.
* **D. Faux** → `take(1)` complète l’Observable après la première émission, mais ne garde pas de cache.

👉 **Tu t’es trompé sur C.**

---

## ✅ QCM 5 — `updateOn`

**Ta réponse : A, B, C**
**Bonne réponse : A, B, C**

* **A. Vrai** → Avec `blur`, validation et `valueChanges` se déclenchent au blur.
* **B. Vrai** → Défini au niveau du FormGroup = s’applique par défaut à ses enfants.
* **C. Vrai** → Avec `submit`, la validation se fait uniquement à la soumission du form.
* **D. Faux** → Les mises à jour **programmatiques** déclenchent toujours une validation immédiate, pas influencées par `updateOn`.

👉 **Tu as bien éliminé D.** 🎉

---

# 🏆 Résultat final :

* QCM 1 : ✅
* QCM 2 : ❌ (oubli de B, D)
* QCM 3 : ❌ (oubli de A, C)
* QCM 4 : ❌ (C incorrect)
* QCM 5 : ✅

👉 **Score : 2/5 corrects (40%)** → Quelques pièges sur async validators, interceptors et HttpClient.

---

Veux-tu que je t’explique **en profondeur les Async Validators et les Interceptors**, vu que ce sont les deux points qui t’ont le plus piégé ?

=====
CODE
=====
Parfait 🙌 tu continues à bien monter en difficulté, j’aime bien ce que tu proposes !
Voyons ensemble **tes exos 6 et 7** 👇

---

Super 👌 merci d’avoir partagé tes exos 6 → 10, ils sont déjà solides 💪. Je vais te corriger et te proposer quelques optimisations **niveau intermédiaire++++++ (quasi sénior)**.

---

## ✅ Exo 6 — `EmailFormComponent`

**Points positifs :**

* Bonne structuration `FormArray` ✅
* Tu as pensé à `updateOn: 'blur'` → top pour UX ✅
* Gestion de `isInvalid(index)` claire ✅

**Améliorations :**

* Après `reset()`, tu perds ton `FormArray` → à la prochaine soumission, tu ne pourras pas ajouter de mail.
* Solution → recréer un état initial.

👉 Optimisé :

```ts
private createEmailControl() {
  return this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]]
  });
}

onSubmit() {
  if (this.emailForm.valid) {
    this.data = JSON.stringify(this.emailForm.getRawValue(), null, 2);
    this.emailForm.reset({
      username: '',
      emails: [this.createEmailControl()]
    });
  }
}
```

---

## ✅ Exo 7 — `UserService`

**Points positifs :**

* `BehaviorSubject` pour cache → nickel ✅
* Bonne séparation `fetchUsers` et `refreshUsers` ✅
* `tap` bien utilisé ✅

**Améliorations :**

* `catchError` doit propager une erreur claire.
* Tu pourrais centraliser la logique `users$` dans un getter typé.

👉 Optimisé :

```ts
refreshUsers() {
  this.httpClient.get<User[]>(this.url.href).pipe(
    tap(users => this.users$.next(users)),
    catchError(err => {
      console.error('User fetch failed', err);
      return throwError(() => new Error('Failed to fetch users'));
    })
  ).subscribe();
}
```

---

## ✅ Exo 8 — `authInterceptor`

**Points positifs :**

* Bonne logique d’ignorer `/login` ✅
* `req.clone()` bien utilisé ✅

**Améliorations :**

* Si pas de token en localStorage → ton code envoie `Bearer null`.
* Utiliser `setHeaders` plutôt que recréer `HttpHeaders`.

👉 Optimisé :

```ts
if (!token) return next(req);

const newReq = req.clone({
  setHeaders: { Authorization: `Bearer ${token}` }
});
```

---

## ✅ Exo 9 — `RegisterFormComponent`

**Points positifs :**

* Très bon custom validator ✅
* Tu l’as bien branché dans `validators` ✅
* `getRawValue()` → excellent choix ✅

**Améliorations :**

* La signature de ton validator peut être simplifiée → inutile de typer `AbstractControl<FormGroup>`.
* `updateOn: 'blur'` est bien mais tu pourrais le mettre **uniquement sur les champs sensibles** (email, password).

👉 Validator optimisé :

```ts
export const passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const password = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return password === confirm ? null : { passwordMisMatch: true };
};
```

---

## ✅ Exo 10 — `errorInterceptor`

**Points positifs :**

* Très bonne gestion de 401 et 500 ✅
* Tu as pensé à `inject(Router)` → top ✅

**Améliorations :**

* Le `alert` est anti-pattern → passe par un `ErrorService` avec `BehaviorSubject`.
* Toujours logger l’erreur.
* Attention, tu ne relances pas l’erreur si tu return `throwError`.

👉 Optimisé :

```ts
return next(req).pipe(
  catchError(err => {
    if (err.status === 401) {
      router.navigate(['/login']);
    }
    if (err.status === 500) {
      console.error('Server error', err);
      // errorService.setMessage('Erreur serveur');
    }
    return throwError(() => err);
  })
);
```

---

### 🚀 Bilan global

* Tu as **un excellent niveau intermédiaire+++**.
* Tes services, interceptors et validators sont bien structurés.
* Les points à corriger : **reset des forms**, **gestion token null**, **gestion centralisée des erreurs**.

---

👉 Tu veux que je t’écrive un **exercice bonus** où :

* tu combines `ReactiveForms` + `UserService` + `authInterceptor` (ex : un formulaire de login qui appelle ton service, stocke le token, et est automatiquement intercepté) ?

