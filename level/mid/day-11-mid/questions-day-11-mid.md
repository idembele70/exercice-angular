Parfait 👌 tu veux un **set complet** qui couvre tous les points clés d’Angular niveau **intermédiaire+++++** (composants, directives, guards, resolvers, etc.).
Voici un nouveau set **5 QCM + 5 exercices de code**, conçu pour un entraînement **type entretien** :

---

# 📝 QCM (5)

### **Q1. Concernant les services Angular et l’injection de dépendances :**

A. Un service doit obligatoirement être déclaré dans `providers` d’un module.
B. `providedIn: 'root'` permet de rendre le service disponible dans toute l’application.
C. Un service injecté via `inject()` dans Angular 14+ ne peut pas être utilisé dans un guard.
D. Les services Angular peuvent être injectés dans un pipe custom.

---

### **Q2. À propos des Guards (canActivate, canDeactivate, etc.) :**

A. Un guard peut retourner un `boolean` ou un `UrlTree`.
B. Les guards supportent le retour d’un `Promise<boolean>` ou `Observable<boolean>`.
C. `CanActivateChild` s’applique automatiquement à toutes les routes enfants.
D. Si un guard retourne `false`, la navigation est annulée.

---

### **Q3. Sur les Interceptors HTTP :**

A. Un interceptor doit implémenter l’interface `HttpInterceptor`.
B. Les interceptors peuvent transformer la requête mais pas la réponse.
C. Les interceptors s’exécutent dans l’ordre où ils sont fournis.
D. Un interceptor peut ajouter des headers à une requête sortante.

---

### **Q4. Concernant les Résolveurs Angular (Resolvers) :**

A. Un resolver doit implémenter `Resolve<T>`.
B. Un resolver peut retourner une valeur synchrone ou un `Promise`/`Observable`.
C. Le resolver s’exécute après que le composant est affiché.
D. Si le resolver échoue, on peut rediriger l’utilisateur via un guard.

---

### **Q5. Sur les Validators personnalisés :**

A. Un validator custom doit implémenter l’interface `ValidatorFn`.
B. Les `AsyncValidatorFn` doivent retourner un `Promise<ValidationErrors | null>` ou `Observable<ValidationErrors | null>`.
C. On peut appliquer plusieurs validators synchrones et asynchrones sur un même champ.
D. Les validators custom ne peuvent pas accéder à d’autres contrôles du formGroup.

---

# 💻 Exercices de code (5)

### **Exercice 6 — Component + Pipe**

Crée un composant `UserListComponent` qui affiche une liste d’utilisateurs récupérés via un service.

* Utilise un `UserService` qui expose `getUsers()` (Observable).
* Ajoute un pipe `capitalizeName` qui met en majuscule la première lettre de chaque prénom.
* Le template doit afficher : `{{ user.firstName | capitalizeName }} {{ user.lastName | uppercase }}`.

---

### **Exercice 7 — Directive**

Crée une directive `HoverClassDirective` qui :

* ajoute une classe CSS (passée en `@Input()`) quand la souris survole l’élément,
* supprime la classe quand la souris quitte l’élément.

👉 Exemple d’utilisation :

```html
<p appHoverClass="highlight">Survole-moi pour voir le style</p>
```

---

### **Exercice 8 — Guard + Resolver + Routing**

* Crée une route `/profile/:id` qui utilise :

  * un **guard** `AuthGuard` (bloque si non connecté),
  * un **resolver** `UserResolver` qui charge les infos de l’utilisateur via l’API avant d’afficher `ProfileComponent`.
* Le `ProfileComponent` récupère l’utilisateur résolu via `ActivatedRoute.data`.

---

### **Exercice 9 — HTTP Request + Interceptor + Interface**

* Crée une interface `Post { id: number; title: string; body: string; }`.
* Implémente un `PostService` avec une méthode `getPosts()` qui fait un `HttpClient.get<Post[]>`.
* Crée un interceptor `AuthInterceptor` qui ajoute un header `Authorization: Bearer <token>` à chaque requête sortante.
* Crée un composant `PostListComponent` qui affiche la liste des posts.

---

### **Exercice 10 — Reactive Form + Validator**

* Crée un formulaire `RegisterComponent` avec `email`, `password`, `confirmPassword`.
* Ajoute un **validator custom** `passwordMatchValidator` (comme dans ton exo précédent).
* Ajoute un **validator async** `uniqueEmailValidator` qui simule un appel serveur et rejette si l’email existe déjà.
* Affiche dynamiquement les messages d’erreurs sous chaque champ.

---

# ✅ Concepts couverts :

1. **Component** → exo 6, 8, 9, 10
2. **Directive** → exo 7
3. **Guard** → exo 8
4. **HTTP request** → exo 9
5. **Interface** → exo 9
6. **Interceptor** → exo 9
7. **Module** → implicitement (importer HttpClientModule, RouterModule, ReactiveFormsModule)
8. **Pipe** → exo 6
9. **Routing** → exo 8
10. **Resolver** → exo 8
11. **Service** → exo 6, 9, 10
12. **Validator** → exo 10

---

👉 Tu veux que je commence par **te donner les corrections détaillées du QCM (réponses + explications)** avant de coder les exercices, ou tu préfères directement que je code les 5 exos avec les bonnes pratiques ?

