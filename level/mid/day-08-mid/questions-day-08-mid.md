Parfait 👍 Je vais te préparer une **série de 10 exercices Angular niveau intermédiaire+++** :

* **5 QCM** (multi-choix) pour tester ta compréhension théorique et pratique.
* **5 exercices de code** pour pratiquer des cas concrets qu’on retrouve souvent en entretien.

---

## 📌 Partie 1 : QCM (5 questions)

### QCM 1 – Change Detection

Quel est l’effet principal du `ChangeDetectionStrategy.OnPush` dans un composant Angular ?
A. Angular vérifie les changements à chaque `setTimeout` ou `setInterval`.
B. Angular ne détecte les changements que si l’`Input` du composant change ou si un `Observable` émet.
C. Angular exécute toujours la détection de changement sur tout le DOM.
D. Cela empêche complètement Angular de détecter les changements.

---

### QCM 2 – RxJS et AsyncPipe

Pourquoi est-il préférable d’utiliser `AsyncPipe` dans un template plutôt que de s’abonner manuellement (`subscribe`) dans le composant ?
A. Parce qu’`AsyncPipe` détruit automatiquement la souscription.
B. Parce qu’`AsyncPipe` rend le code plus lisible.
C. Parce qu’`AsyncPipe` évite les problèmes de fuite mémoire.
D. Toutes les réponses ci-dessus.

---

### QCM 3 – Modules et Lazy Loading

Quelle est la bonne pratique pour configurer le **Lazy Loading** dans Angular ?
A. Déclarer les routes dans `AppModule`.
B. Utiliser `loadChildren` avec une importation dynamique.
C. Ajouter le module dans `imports` du `AppModule`.
D. Charger manuellement les modules avec `NgModuleFactoryLoader`.

---

### QCM 4 – Services et Injection de dépendances

Quelle est la différence principale entre `providedIn: 'root'` et l’ajout du service dans la propriété `providers` d’un module ?
A. `providedIn: 'root'` rend le service singleton dans toute l’app.
B. `providers` dans un module crée une nouvelle instance dans chaque lazy module.
C. `providedIn: 'root'` permet le tree-shaking (suppression si non utilisé).
D. Toutes les réponses ci-dessus.

---

### QCM 5 – Performance et optimisation

Quelle pratique optimise le mieux les performances dans une liste Angular affichée avec `*ngFor` ?
A. Utiliser `[trackBy]` avec une fonction unique d’identification.
B. Utiliser `ChangeDetectionStrategy.OnPush`.
C. Utiliser des `Observables` + `AsyncPipe`.
D. Toutes les réponses ci-dessus.

---

## 📌 Partie 2 : Exercices de code (5 exercices)

### Exercice 1 – Gestion des Observables

Crée un composant Angular qui :

* Consomme un `BehaviorSubject<number>` initialisé à 0.
* Affiche la valeur en temps réel avec `AsyncPipe`.
* Ajoute deux boutons : **Increment** et **Decrement** qui modifient la valeur.

---

### Exercice 2 – Lazy Loading

Mets en place un **module Lazy Loaded** nommé `AdminModule` avec une route `/admin`.

* Le module doit avoir un composant `DashboardComponent`.
* L’accès doit être protégé par un `AuthGuard`.

---

### Exercice 3 – Pipe personnalisé

Crée un `Pipe` personnalisé `truncate` qui :

* Tronque un texte après **N caractères**.
* Exemple : `"Angular is awesome"` avec N=7 → `"Angular..."`.
* Utilise-le dans un template avec `[value | truncate:7]`.

---

### Exercice 4 – Directive personnalisée

Crée une directive `HighlightDirective` qui :

* Change la couleur du texte en jaune au survol.
* Remet la couleur initiale quand la souris sort.

---

### Exercice 5 – Formulaire Réactif avancé

Crée un **formulaire réactif** avec :

* Champs : `email`, `password`, `confirmPassword`.
* Validateurs : email valide, password >= 8 caractères, confirmPassword doit correspondre.
* Affiche un message d’erreur dynamique sous chaque champ.

---

👉 Si tu veux, je peux ensuite te donner les **corrections détaillées** (avec explications + version "senior" optimisée) pour t’entraîner comme en entretien.

Veux-tu que je corrige **seulement les QCM d’abord**, ou bien je prépare aussi directement les **solutions de code** ?

