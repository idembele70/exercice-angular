Parfait 👍 je vais te préparer un **nouveau set Angular niveau intermédiaire+++++++++**, toujours **sans `signal`** (compatible Angular < v16), avec **5 QCM** + **5 exercices de code**.
C’est du niveau entretien avancé (state, RxJS, DI, routing, forms, directives/pipes custom).

---

## 📝 QCM (5 questions)

**1. À propos des services Angular :**
Que se passe-t-il si on fournit un service uniquement dans un module feature (et pas en `providedIn: 'root'`) ?
A. Il est global et partagé par toute l’application.
B. Chaque module qui l’importe aura sa propre instance.
C. Il n’est pas instancié du tout.
D. Il est instancié une seule fois par lazy-module.

---

**2. Concernant `ChangeDetectionStrategy.OnPush` :**
Quels déclencheurs de détection sont corrects ?
A. L’appel explicite à `markForCheck`.
B. Un nouvel `@Input` reçu.
C. La mutation d’un objet déjà assigné à un `@Input`.
D. Un `Observable` résolu via `AsyncPipe`.

---

**3. Concernant le router Angular :**
Quelle différence entre `forRoot()` et `forChild()` ?
A. `forRoot()` déclare les routes de base et configure le routeur global.
B. `forChild()` configure les routes d’un module lazy-loaded.
C. `forRoot()` doit être appelé une seule fois dans `AppModule`.
D. `forChild()` recrée un `RouterModule` distinct par module.

---

**4. Formulaires réactifs :**
Quelle est la différence principale entre `setValue()` et `patchValue()` sur un `FormGroup` ?
A. `setValue` nécessite tous les contrôles, `patchValue` peut être partiel.
B. `patchValue` lance moins de validations.
C. `setValue` ne met pas à jour les `FormControl` désactivés.
D. `patchValue` est disponible uniquement dans `FormArray`.

---

**5. Concernant RxJS dans Angular :**
Que se passe-t-il si on oublie de désabonner un `subscribe()` dans un composant non standalone ?
A. Rien, Angular détruit toujours les observables.
B. Fuite mémoire possible si observable infini (ex: `interval`).
C. L’observable s’auto-détruit quand le composant est détruit.
D. Le GC nettoie immédiatement sans fuite.

---

---

## 💻 Exercices de code (5 exos)

**6. Counter avancé avec RxJS**
Créer un composant `AdvancedCounterComponent` avec :

* Un `BehaviorSubject<number>` comme state du compteur.
* Deux boutons **increment/decrement**.
* Une règle : le compteur ne peut pas descendre sous 0, ni dépasser 20.
* Un getter `isMax` et `isMin` pour gérer l’état des boutons.

---

**7. Directive `appDebounceClick`**
Créer une directive qui :

* Écoute `(click)` sur un bouton.
* N’émet l’événement qu’une fois toutes les X millisecondes (input configurable).
* Utilise `Subject` + `debounceTime` pour filtrer.

---

**8. Pipe `capitalizeWords`**
Créer un pipe pur `capitalizeWords` qui transforme une phrase :

```txt
"bonjour angular developer" → "Bonjour Angular Developer"
```

---

**9. Service `TodoService` avec RxJS**

* Créer un service qui stocke une liste de `Todo` (id, title, done).
* Utiliser un `BehaviorSubject<Todo[]>`.
* Fournir des méthodes : `addTodo`, `toggleTodo`, `getTodos$`.
* L’utiliser dans un `TodoListComponent` avec `AsyncPipe`.

---

**10. Formulaire avec async validator**
Créer un `RegisterFormComponent` :

* Champs : `email`, `password`, `confirmPassword`.
* Validation : `email` unique via un validator asynchrone (service `UserService.isEmailTaken(email)`).
* Validation custom : `password` et `confirmPassword` doivent matcher.
* Afficher les erreurs sous chaque champ.

---

👉 Ce set est costaud : ça mélange **RxJS, routing, DI, directives, pipes, forms, OnPush**.
Tu veux que je commence par te donner **les corrigés des QCM** (comme la fois dernière) avant de passer aux exos de code, ou tu préfères d’abord coder les exos et je corrige ensuite ?

