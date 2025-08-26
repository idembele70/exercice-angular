Parfait 🚀 ! Voici un nouveau **set de 10 exercices Angular niveau intermédiaire+++** (5 QCM + 5 Code).
Ils sont faits pour te pousser un cran plus loin, sans entrer trop vite dans l’advanced (RxJS hardcore, state management global, etc.).

---

## 🔹 QCM (5)

**1.** Dans Angular, quand utiliser `ChangeDetectionStrategy.OnPush` sur un composant ?
A. Pour que le composant ne se mette à jour que si son `@Input()` change ou un `EventEmitter` s’exécute
B. Pour forcer la détection à chaque `setTimeout` ou `setInterval`
C. Pour améliorer les performances en limitant le cycle de détection du composant
D. A et C

---

**2.** Que fait `AsyncPipe` dans Angular ?
A. Souscrit automatiquement à un `Observable` ou `Promise` et gère la désinscription
B. Transforme un `Subject` en `BehaviorSubject`
C. Convertit un `Observable` en `Array`
D. Propage une erreur RxJS vers la console Angular

---

**3.** Quelle est la différence entre `RouterModule.forRoot()` et `RouterModule.forChild()` ?
A. `forRoot()` est utilisé uniquement dans le `AppRoutingModule` et configure le routeur principal
B. `forChild()` permet de déclarer des routes dans des modules enfants (lazy loading, feature modules)
C. Les deux sont identiques, seule la syntaxe change
D. A et B

---

**4.** Quelle est la différence entre `FormControl` et `FormBuilder` ?
A. `FormControl` représente une valeur unique avec ses validations
B. `FormBuilder` est une factory pour créer des `FormGroup` et `FormArray` plus facilement
C. `FormBuilder` remplace totalement `FormControl`
D. A et B

---

**5.** Quelle est la différence entre un `BehaviorSubject` et un `ReplaySubject` dans Angular (RxJS) ?
A. `BehaviorSubject` garde la dernière valeur et la renvoie aux nouveaux abonnés
B. `ReplaySubject` rejoue un nombre défini de valeurs passées pour les nouveaux abonnés
C. `BehaviorSubject` ne peut pas avoir de valeur initiale
D. A et B

---

## 🔹 Exercices de code (5)

**6. Service HTTP**
Crée un service `UserService` qui expose une méthode `getUsers()` retournant un `Observable<User[]>` depuis une API REST `https://jsonplaceholder.typicode.com/users`.
👉 Utilise `HttpClient` et gère les erreurs avec `catchError`.

---

**7. Guard**
Crée un guard `AuthGuard` qui bloque l’accès à une route si l’utilisateur n’est pas authentifié (`AuthService.isLoggedIn()` retourne `false`). Redirige-le sinon vers `/login`.

---

**8. Directive custom avec Input**
Crée une directive `appHighlight` qui change la couleur du texte de l’élément en fonction d’un `@Input() color: string`.
👉 Exemple : `<p appHighlight="red">Texte en rouge</p>`.

---

**9. Formulaire dynamique**
Crée un composant `TodoFormComponent` avec un `FormArray` qui permet d’ajouter dynamiquement plusieurs champs `task`.
👉 Chaque tâche doit avoir un minimum de 3 caractères, et un bouton "Add Task" doit permettre d’ajouter un champ.

---

**10. Pipe pur vs impure**
Crée un `CustomFilterPipe` qui filtre une liste d’objets `{ id: number, name: string }` selon une recherche texte.
👉 Fais-le d’abord en pipe pur, puis en pipe impure. Compare les comportements dans un template.

---

💡 Ce set mélange du **routing, services, guards, RxJS, directives, forms et pipes** → pile ce qu’on attend d’un niveau **intermédiaire+++**.

Veux-tu que je commence par te donner les corrections **QCM uniquement** (comme d’hab) une fois que tu m’as donné tes réponses, ou tu préfères attaquer directement le code aussi ?

