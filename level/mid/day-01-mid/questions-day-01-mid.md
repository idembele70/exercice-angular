Parfait 🚀 ! Je vais te préparer **10 nouveaux exercices Angular niveau intermédiaire**, moitié QCM et moitié code, pour que tu continues à progresser au-dessus du niveau junior+++.

---

# 🔹 **5 QCM – Niveau Intermédiaire**

### **QCM 1 : Reactive Forms**

Dans Angular, que retourne la méthode `formGroup.get('controlName')` ?

A. Un `FormControl` ou `null`
B. Toujours un `FormControl`, jamais `null`
C. Un `AbstractControl` ou `null`
D. Un objet `FormGroup`

---

### **QCM 2 : Change Detection**

Avec `ChangeDetectionStrategy.OnPush`, le composant **ne se mettra pas à jour automatiquement** dans quel cas ?

A. Si un `@Input` reçoit une nouvelle référence
B. Si un `@Input` change de valeur primitive
C. Si un `setTimeout` modifie une variable interne
D. Si un `Observable` lié avec `async` pipe émet une nouvelle valeur

---

### **QCM 3 : Services & Injection**

Quelle est la meilleure façon de fournir un service disponible uniquement dans un module spécifique ?

A. `providedIn: 'root'` dans le service
B. Ajouter le service dans le `providers` du module
C. Ajouter le service dans le `declarations` du module
D. Utiliser `inject()` directement dans un composant

---

### **QCM 4 : RxJS**

Quelle est la différence principale entre `switchMap` et `mergeMap` ?

A. `switchMap` annule l’observable précédent quand un nouveau arrive, `mergeMap` non
B. `mergeMap` est plus rapide que `switchMap`
C. `switchMap` ne fonctionne qu’avec `HttpClient`
D. `mergeMap` conserve uniquement le dernier observable

---

### **QCM 5 : Routing avancé**

Que fait l’option `{ relativeTo: this.route }` dans le service `Router` ?

A. Force une navigation vers la racine `/`
B. Définit que la navigation est relative à l’URL actuelle
C. Ignore les paramètres de l’URL courante
D. Recharge entièrement l’application

---

---

# 🔹 **5 Exercices de Code – Niveau Intermédiaire**

### **Exercice 6 : FormArray dynamique**

Crée un composant Angular qui permet d’ajouter plusieurs adresses email dynamiquement (FormArray).
👉 Chaque email doit être validé avec `Validators.email`.

---

### **Exercice 7 : Async Pipe**

Crée un composant qui affiche une liste d’articles récupérés depuis un `ArticleService.getArticles$()`.
👉 Utilise `async` pipe dans le template sans `subscribe` manuel.

---

### **Exercice 8 : Route Guard**

Implémente un `AuthGuard` qui empêche l’accès à une route si l’utilisateur n’est pas connecté (observable `isLoggedIn$`).
👉 Redirige vers `/login` sinon.

---

### **Exercice 9 : Directive personnalisée**

Crée une directive `[appHighlight]` qui met en **gras et bleu** le texte d’un élément HTML au `mouseover` et le remet normal au `mouseout`.

---

### **Exercice 10 : Pipe personnalisé + Test**

Écris un `CapitalizePipe` qui met en majuscule la première lettre de chaque mot.
👉 Écris également un test Jasmine pour vérifier que `"hello world"` devient `"Hello World"`.

---

👉 Veux-tu que je corrige et explique les **QCM en détail** (comme avant avec chaque option vraie/fausse) avant de passer aux exos de code ?

