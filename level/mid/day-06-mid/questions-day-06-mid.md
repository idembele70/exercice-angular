====
QCM
====
Tu as raison — j’ai zappé les QCM 😅. Voilà **5 QCM (multi-réponses possibles)** centrés sur **Reactive Forms / Services / Interceptors**.
👉 Indique “toutes les bonnes réponses” pour chaque question.

---

### QCM 1 — `FormArray`

Quelles affirmations sont vraies à propos de `FormArray` ?
A. `formArray.push(newControl)` ajoute un contrôle et met à jour la valeur du tableau
B. `formArray.setValue([...])` exige une correspondance **exacte** (taille & ordre) des contrôles
C. `formArray.patchValue([...])` tolère des éléments manquants
D. `formArray.controls` est un **Observable** émettant les contrôles

---

### QCM 2 — Validators asynchrones

Quelles propositions sont correctes concernant les **async validators** ?
A. Un async validator retourne un `Observable<ValidationErrors | null>` ou une `Promise<ValidationErrors | null>`
B. Il s’exécute **après** les validateurs synchrones et le statut passe par **`PENDING`**
C. Pour un validator **fonction** (non directive), il faut toujours le déclarer via `NG_ASYNC_VALIDATORS`
D. On peut attacher un async validator sur un **FormGroup** (validation transversale)

---

### QCM 3 — HTTP Interceptors

À propos des **interceptors** Angular :
A. Ils se déclarent via `providers: [{ provide: HTTP_INTERCEPTORS, useClass: X, multi: true }]`
B. Leur ordre d’exécution dépend de l’ordre des paramètres `constructor(...)` dans l’interceptor
C. Il faut appeler `next.handle(req)` (ou retourner une réponse) pour laisser la requête continuer
D. On modifie une requête en utilisant `req.clone({ setHeaders: {...} })`

---

### QCM 4 — Services & cache

À propos du **caching** des données dans un service :
A. Utiliser `shareReplay(1)` sur un `this.http.get(...)` permet d’éviter des appels répétés pour plusieurs abonnés
B. Un `BehaviorSubject` exige une **valeur initiale**
C. `HttpClient.get(...)` est **chaud (hot)** : plusieurs abonnements ne déclenchent pas de nouveaux appels
D. `take(1)` suffit pour mettre en cache les données pour toute l’appli

---

### QCM 5 — `updateOn` et Reactive Forms

Quelles affirmations sont vraies ?
A. Avec `updateOn: 'blur'`, la validation et `valueChanges` sont déclenchés au **blur** du champ
B. Défini au niveau du **FormGroup**, `updateOn` s’applique par défaut à ses descendants (sauf override local)
C. Avec `updateOn: 'submit'`, les validateurs ne s’exécutent qu’à la **soumission** du formulaire (via `ngSubmit`)
D. `updateOn` s’applique aussi aux mises à jour **programmatiques** (`setValue/patchValue`)

---

Dis-moi quand tu veux que je corrige tes réponses 😉

=====
CODE
=====
Parfait 🚀 ! Là on passe en **intermédiaire++++++** et on met le focus sur **Reactive Forms + Services + Interceptors** (le cœur d’Angular pour les applis pro).
Voici **5 exos de code** 👇

---

## 🔥 **Exercice 1 – Formulaire avec FormArray dynamique (emails multiples)**

Crée un composant `EmailFormComponent` :

* Le formulaire contient un champ `username` + un `FormArray` pour plusieurs adresses email.
* Chaque email doit être **obligatoire** et **valide** (`Validators.email`).
* Boutons pour **ajouter / supprimer** un email.
* Le formulaire affichera la liste en JSON quand on soumet.

---

## 🔥 **Exercice 2 – Service avec cache mémoire**

Crée un `UserService` qui :

* Appelle `GET https://jsonplaceholder.typicode.com/users` via `HttpClient`.
* Stocke les résultats dans un `BehaviorSubject<User[]>`.
* Si les données sont déjà présentes, ne fait **pas d’appel réseau** (sert les données depuis le cache).
* Ajoute une méthode `refreshUsers()` pour forcer un nouvel appel API.

---

## 🔥 **Exercice 3 – Interceptor de token**

Crée un `AuthInterceptor` qui :

* Récupère un `token` stocké dans `sessionStorage`.
* Ajoute ce `token` dans l’en-tête **Authorization: Bearer {token}** de chaque requête sortante.
* Ignore les appels qui vont vers `/login`.

⚡ Bonus : logge dans la console chaque requête interceptée.

---

## 🔥 **Exercice 4 – Formulaire avancé avec custom validator cross-field**

Crée un `RegisterFormComponent` :

* Champs : `password`, `confirmPassword`.
* Crée un **custom validator** qui vérifie que les 2 champs sont identiques.
* Affiche un message d’erreur si les mots de passe ne correspondent pas.
* À la soumission, affiche le résultat dans un `BehaviorSubject`.

---

## 🔥 **Exercice 5 – Service + Interceptor d’erreurs**

Crée un `PostService` + `ErrorInterceptor`.

* `PostService` appelle `GET https://jsonplaceholder.typicode.com/posts`.
* `ErrorInterceptor` :

  * Intercepte toutes les erreurs HTTP.
  * Si `status === 401`, redirige vers `/login`.
  * Si `status === 500`, affiche une alerte `"Erreur serveur"`.
  * Sinon, laisse passer l’erreur.
* Teste en appelant le `PostService` depuis un composant et en affichant les posts.

---

### 🎯 Objectif pédagogique

* **Reactive Forms** → gérer du **FormArray dynamique** + **cross-field validation**.
* **Services** → ajouter du **cache** pour éviter les appels redondants.
* **Interceptors** → gestion **token auth** + **erreurs globales**.
* Tu vas toucher les **patterns d’Angular pro** 👌

---

👉 Veux-tu que je t’écrive **une correction complète (code TS + HTML)** pour **l’exo 1 et 3** (forms dynamique + interceptor token), et je te laisse coder les autres pour t’entraîner ?

