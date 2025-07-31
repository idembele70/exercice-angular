Parfait Ibrahim 👌 Voici une **3e série Angular – niveau junior+++**, avec un mix de concepts plus "pro" : reactive forms, RxJS de base, guards, routing, DI… Tout ça toujours sans réponse, tu me proposes et **je note chaque exo sur 10 ensuite**.

---

## 🧠 Partie 1 : QCM

### QCM 1

**Quelles instructions permettent de créer un formulaire réactif dans Angular ?**
A. Utiliser `FormBuilder` et `FormGroup`
B. Utiliser `ngModel`
C. Importer `ReactiveFormsModule`
D. Ajouter `FormsModule` dans `imports`

---

### QCM 2

**Quelle est la différence entre `Subject` et `BehaviorSubject` en RxJS ?**
A. `Subject` garde toujours la dernière valeur, `BehaviorSubject` non
B. `BehaviorSubject` garde une valeur initiale et la renvoie aux nouveaux abonnés
C. `Subject` est utilisé uniquement pour les formulaires
D. `Subject` est synchrone, `BehaviorSubject` est asynchrone

---

### QCM 3

**Pourquoi utiliser un `Resolver` dans Angular ?**
A. Pour résoudre les conflits de routes
B. Pour récupérer des données avant d’afficher une page
C. Pour gérer les erreurs de formulaire
D. Pour créer des composants dynamiquement

---

### QCM 4

**Que permet `HttpInterceptor` dans Angular ?**
A. Modifier les routes
B. Intercepter les appels HTTP pour les modifier ou logger
C. Créer une API locale
D. Stocker le token utilisateur dans le localStorage

---

### QCM 5

**Comment protège-t-on une route avec un `Guard` ?**
A. En ajoutant un `canActivate` dans la config de la route
B. En appelant `guard()` dans le composant
C. En utilisant `ngOnDestroy()`
D. En ajoutant `@Guard()` dans le module

---

## 💻 Partie 2 : Exercices de code

### Exo 1 – Reactive Form

**Crée un composant `RegisterFormComponent` (standalone) avec un `FormGroup` contenant `email`, `password`, `confirmPassword`, et affiche une erreur si les deux mots de passe ne correspondent pas.**

---

### Exo 2 – RxJS + Service

**Crée un service `SearchService` avec un `BehaviorSubject<string>` représentant un terme de recherche. Ajoute une méthode `setSearchTerm(term: string)` et une méthode `getSearchTerm()` retournant l’observable.**

---

### Exo 3 – Route Guard

**Crée un `AuthGuard` standalone qui bloque l’accès à une route si l’utilisateur n’est pas connecté (`isLoggedIn: false`) et redirige vers `/login`.**

---

### Exo 4 – Resolver

**Crée un `UserResolver` qui récupère un utilisateur via une méthode `getUser()` dans `UserService`, avant l’affichage de la route `/user/:id`.**

---

### Exo 5 – HttpInterceptor

**Crée un `TokenInterceptor` qui ajoute un header `Authorization: Bearer <token>` à toutes les requêtes HTTP sortantes, avec un token stocké dans un `AuthService`.**

---

Tu peux maintenant m’envoyer **tes réponses quand tu veux**, et je **note chaque exercice sur 10**, avec conseils d’amélioration.

🔥 Let’s go niveau junior confirmé !

============
CORRIGÉ
============
Excellent travail Ibrahim 💪 T'as vraiment bien géré ce niveau junior+++ ! Maintenant, comme demandé, voici :

---

## ✅ Correction des QCM – Noté sur 10

| QCM | Réponse donnée | Correction                                                                            | Note      |
| --- | -------------- | ------------------------------------------------------------------------------------- | --------- |
| 1   | C              | ✅ C est **nécessaire**, mais aussi A est correcte (FormBuilder, FormGroup) → ✅ A et C | **8/10**  |
| 2   | B              | ✅ Correct, `BehaviorSubject` garde une valeur initiale                                | **10/10** |
| 3   | B              | ✅ Correct, c’est pour pré-charger des données avant l’accès à une route               | **10/10** |
| 4   | B              | ✅ Correct, un HttpInterceptor intercepte toutes les requêtes sortantes                | **10/10** |
| 5   | A              | ✅ Correct, on utilise `canActivate` dans la définition des routes                     | **10/10** |

**🟢 Total QCM : 48 / 50 → Très bon 👏**

---

## 💻 Exercice 1 – RegisterFormComponent ✅ **Note : 9/10**

✔️ Reactive Form bien utilisé
✔️ Validation password OK
✔️ `@if` moderne bien vu

💡 **Refactor senior :**

```ts
export class RegisterFormComponent {
  readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(10)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder) {}

  get passwordsDoNotMatch(): boolean {
    const { password, confirmPassword } = this.form.value;
    return !!password && !!confirmPassword && password !== confirmPassword;
  }

  onSubmit(): void {
    if (this.form.valid && !this.passwordsDoNotMatch) {
      console.log(this.form.value);
    }
  }
}
```

✅ Utilisation de `FormBuilder`
✅ Pas de `FormControl<string | null>` inutiles, Angular 16 gère ça via typage générique

---

## 💻 Exercice 2 – SearchService ✅ **Note : 10/10**

Très propre, `BehaviorSubject` privé, trimming, observabilité. Rien à redire.

💡 Pour t’inspirer : tu peux aussi exposer `asObservable()` directement

```ts
readonly #term = new BehaviorSubject<string>('');

readonly searchTerm$ = this.#term.asObservable();

setSearchTerm(term: string) {
  this.#term.next(term.trim());
}
```

---

## 💻 Exercice 3 – AuthGuard ✅ **Note : 10/10**

✔️ Bonne implémentation avec `inject()` + `Router`
✔️ Retourne bien `true/false`

💡 En version “senior avec service auth” :

```ts
export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService); // Existant ou mocké

  if (!authService.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
```

---

## 💻 Exercice 4 – UserResolver ✅ **Note : 8/10**

✅ Bien compris le principe
⚠️ Petit souci : `getUser()` retourne une **valeur** synchronement, mais un Resolver **doit retourner un Observable** ou une `Promise`.

💡 Refactor senior :

```ts
getUser(index: number): Observable<User> {
  return this.#Users.asObservable().pipe(
    map(users => users[index])
  );
}
```

Et dans le `userResolver` :

```ts
export const userResolver: ResolveFn<Observable<User>> = (route) => {
  const userService = inject(UserService);
  return userService.getUser(+route.params['id']);
};
```

---

## 💻 Exercice 5 – TokenInterceptor ❌ **Note : 6/10**

⚠️ Ton `set()` sur `headers` est **immutable**, donc tu dois cloner la requête.
Sinon, ça ne modifie rien.

💡 Refactor senior :

```ts
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const cloned = req.clone({
    setHeaders: {
      Authorization: `Bearer my-token`,
    },
  });
  return next(cloned);
};
```

💡 Encore mieux avec `AuthService` injecté dynamiquement :

```ts
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  const cloned = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(cloned);
};
```

---

## 🧾 Résumé final

| Exercice         | Note /10 |
| ---------------- | -------- |
| Register Form    | 9        |
| SearchService    | 10       |
| AuthGuard        | 10       |
| UserResolver     | 8        |
| TokenInterceptor | 6        |

**💯 Partie code : 43 / 50**

---

## 🌟 Total général (QCM + Code) : **91 / 100**

T’es à un niveau **très solide pour un profil junior avancé**, vraiment. Continue comme ça !

Tu veux que je t’envoie une 4e série avec des exos autour de :

* Lazy loading
* Content projection
* Reactive form avancé
* Test de composants
* Injection multi-provider

Ou tu veux switcher sur autre chose (Node, RxJS, Playwright, etc.) ?
