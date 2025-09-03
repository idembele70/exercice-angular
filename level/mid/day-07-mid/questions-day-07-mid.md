Parfait 🚀 ! Voici une nouvelle **série de 10 exercices Angular niveau intermédiaire+++++++**, orientés **Reactive Forms, Services, Interceptors et Guards**, pour monter encore en gamme.

---

# 🔹 QCM (1–5)

**1.** Dans Angular, quel est l’avantage principal d’un `HttpInterceptor` ?
A. Il permet de modifier toutes les requêtes sortantes de manière centralisée
B. Il sert à créer des composants réutilisables
C. Il remplace les services `HttpClient`
D. Il n’est utilisé que pour la pagination

---

**2.** Quelle est la différence entre `FormGroup.reset()` et `FormGroup.setValue()` ?
A. `reset()` remet le form à son état initial, `setValue()` force tous les champs avec de nouvelles valeurs
B. Les deux font la même chose
C. `reset()` nécessite tous les champs, `setValue()` non
D. `reset()` supprime le form, `setValue()` ne le modifie pas

---

**3.** Comment peut-on partager un `BehaviorSubject` entre plusieurs composants ?
A. Avec un `@Input()`
B. En le déclarant dans un service injecté en `providedIn: 'root'`
C. En créant un nouveau `BehaviorSubject` par composant
D. Ce n’est pas possible

---

**4.** Quel est l’effet de `updateOn: 'blur'` dans une configuration de `FormControl` ?
A. Le contrôle se met à jour uniquement quand l’utilisateur sort du champ
B. Le contrôle ne se met jamais à jour
C. Le contrôle se met à jour à chaque touche tapée
D. Le contrôle se met à jour uniquement au submit

---

**5.** Dans Angular, quand utiliser un `CanActivateFn` ?
A. Pour protéger une route avant de l’activer
B. Pour transformer des données dans un template
C. Pour gérer des erreurs globales
D. Pour tester si une directive est bien appliquée

---

# 🔹 Code (6–10)

---

**6. Formulaire dynamique avec Validator personnalisé**
👉 Crée un `RegisterForm` qui contient :

* username (required, min 3)
* emails (FormArray, au moins 1 requis)
* password + confirmPassword (avec validator custom de match)

Au `submit`, affiche les données formatées dans un `<pre>`.

---

**7. Service avec cache intelligent**
👉 Crée un `PostService` qui :

* utilise `HttpClient` pour récupérer des posts (`https://jsonplaceholder.typicode.com/posts`)
* stocke les posts dans un `BehaviorSubject`
* ne refait pas l’appel si les données sont déjà présentes
* expose `getPosts$()` pour les composants

---

**8. Interceptor de `Loading Spinner`**
👉 Crée un `loadingInterceptor` qui :

* affiche `Loading...` dans la console au début d’une requête
* affiche `Done` à la fin
* gère correctement les cas d’erreur (via `finalize`)

---

**9. Guard d’authentification avancé**
👉 Crée un `roleGuard` :

* Vérifie si l’utilisateur est connecté ET possède le rôle `admin`
* Sinon redirige vers `/unauthorized`
* Utilise un `UserService` pour récupérer les infos

---

**10. Pipe asynchrone avec transformation**
👉 Crée un `CapitalizeAsyncPipe` :

* prend un `Observable<string>`
* transforme la chaîne en capitalisant la première lettre
* retournera toujours un `Observable<string>` utilisable avec `async`

---

⚡ Ces 10 exos te poussent à :

* **centraliser les requêtes HTTP** (services + interceptors)
* **gérer les formulaires avancés** (validators custom + arrays)
* **sécuriser les routes** (guards + rôles)
* **réutiliser la logique** avec `Pipe` et services

---

👉 Veux-tu que je te développe directement les **solutions complètes des exos 6 → 10** (comme les derniers que tu as partagés) ou tu préfères d’abord essayer de les coder et je corrige ensuite ?

