Parfait 💯 ! Voici un **nouveau set de 10 exercices Angular niveau intermédiaire++++++++** (toujours avec **5 QCM** + **5 exercices de code**).
Ce set est conçu pour aller **encore plus loin** → RxJS avancé, Signals, optimisation, bonnes pratiques d’architecture (comme en entretien).

---

# 📌 Partie 1 – QCM (5 questions)

### QCM 1 – Signals vs Observables

Depuis Angular 16, quel est l’avantage principal des **Signals** par rapport aux `BehaviorSubject` ?
A. Pas besoin de `subscribe/unsubscribe`.
B. Change detection plus fine et réactive.
C. Syntaxe plus simple que RxJS.
D. Toutes les réponses ci-dessus.

---

### QCM 2 – Standalone Components

Quelle est la bonne pratique avec les `standalone components` dans Angular 16+ ?
A. Ils remplacent complètement les NgModules.
B. On peut les combiner avec des NgModules si besoin.
C. Ils doivent obligatoirement être déclarés dans `AppModule`.
D. Ils ne supportent pas le lazy loading.

---

### QCM 3 – RxJS & AsyncPipe

Que se passe-t-il si on utilise `AsyncPipe` sur un `Subject` qui n’a pas encore émis de valeur ?
A. Angular affiche `null`.
B. Angular affiche `undefined`.
C. Angular plante avec une erreur.
D. Angular attend silencieusement.

---

### QCM 4 – Optimisation avec \*ngFor

Pourquoi `[trackBy]` améliore-t-il les performances d’un `*ngFor` ?
A. Il empêche Angular de recréer tous les DOM elements.
B. Il optimise le garbage collector.
C. Il réduit la taille du bundle final.
D. Il permet de re-render uniquement les éléments modifiés.

---

### QCM 5 – Injection avancée

Quelle est la différence entre `inject(MyService)` et `constructor(private s: MyService)` dans un composant standalone ?
A. `inject()` peut être utilisé en dehors d’une classe.
B. `inject()` permet une injection conditionnelle.
C. Les deux reviennent au même dans un composant.
D. `inject()` est recommandé pour les fonctions utilitaires.

---

# 📌 Partie 2 – Exercices de code (5 exercices)

### Exercice 6 – Counter avec Signals

Recode l’exercice du compteur, mais cette fois :

* Utilise les **Signals Angular (computed, effect)** au lieu de `BehaviorSubject`.
* Ajoute une règle : désactiver le bouton **Increment** si `count >= 10`.

---

### Exercice 7 – Custom AsyncPipe amélioré

Écris un `Pipe` personnalisé `betterAsync` qui :

* S’abonne à un `Observable`.
* Gère automatiquement la désinscription.
* Retourne une valeur par défaut (`'Loading...'`) tant que rien n’est émis.

---

### Exercice 8 – Directive structural

Crée une directive `*appIfRole="role"` qui :

* Affiche son contenu uniquement si l’utilisateur a le rôle donné (`'admin' | 'user'`).
* Récupère le rôle depuis un `RoleService` (ex: `getRole(): 'admin' | 'user'`).

---

### Exercice 9 – Optimisation d’une liste avec trackBy

Crée un composant `UserListComponent` qui :

* Affiche une liste d’utilisateurs `[ {id: 1, name: 'Alice'}, … ]`.
* Utilise `*ngFor` avec `trackBy` pour optimiser le rendu.
* Ajoute un bouton **Shuffle** qui mélange la liste → vérifier que seuls les éléments déplacés sont rerendus.

---

### Exercice 10 – Formulaire avec Async Validator

Crée un formulaire réactif `SignupForm` avec champs :

* `username` (obligatoire, min 4 char, unique vérifié par un **async validator** qui appelle un faux service `UserService.isTaken(username)` renvoyant un `Observable<boolean>`).
* `password` (min 8 chars).
* `confirmPassword` (doit matcher `password`).
  👉 Affiche des messages d’erreurs clairs dans le template.

---

🔥 Ce set pousse sur les points où beaucoup de devs intermédiaires se font challenger en entretien :

* RxJS vs Signals
* Standalone components & DI moderne
* Directives structurales
* Optimisation avec trackBy
* Async validators

---

Tu veux que je corrige **les QCM d’abord** (comme la dernière fois), ou tu veux que je prépare directement **les corrections de tous les exercices de code aussi** ?

