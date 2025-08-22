Parfait 🚀 on va rester focus sur le **cœur d’Angular (intermédiaire)** comme tu veux, avec :

* **5 QCM** (sur directives, services, RxJS, routing, lifecycle hooks, etc.)
* **9 exos pratiques Angular pur** (pipes, directives, forms, routing, services, RxJS, guards, components)
* **1 seul exo tests unitaires** (pour ne pas perdre l’habitude mais sans te charger).

---

## 📝 QCM (1 bonne réponse par question)

**Q1.** Dans Angular, quel hook de cycle de vie est idéal pour initialiser un `Observable` (ex: abonnement à un service) ?
A. `ngOnChanges`
B. `ngOnInit`
C. `ngAfterViewInit`
D. `ngDoCheck`

---

**Q2.** Quelle est la principale différence entre `BehaviorSubject` et `Subject` de RxJS ?
A. `BehaviorSubject` ne garde aucune valeur précédente.
B. `Subject` doit avoir une valeur initiale.
C. `BehaviorSubject` garde la dernière valeur et l’émet aux nouveaux abonnés.
D. `Subject` ne peut pas émettre plusieurs valeurs.

---

**Q3.** Dans Angular, que fait exactement le décorateur `@Injectable({ providedIn: 'root' })` ?
A. Rend le service singleton et disponible dans toute l’application.
B. Crée une instance du service pour chaque composant.
C. Rend le service utilisable uniquement dans un module.
D. Supprime la nécessité d’utiliser un provider.

---

**Q4.** Si un composant utilise un `FormGroup` réactif, quelle méthode vérifie si un champ est invalide **et** a été touché ?
A. `formControl.invalid && formControl.touched`
B. `formControl.errors && formControl.pending`
C. `formGroup.invalid && formGroup.untouched`
D. `formControl.valid && formControl.dirty`

---

**Q5.** Quelle est la bonne façon d’ajouter une route protégée par un `CanActivate` guard ?
A. `{ path: 'dashboard', component: DashboardComponent, canActivate: authGuard }`
B. `{ path: 'dashboard', component: DashboardComponent, guard: [authGuard] }`
C. `{ path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }`
D. `{ path: 'dashboard', component: DashboardComponent, canGuard: [authGuard] }`

---

---

## 💻 Exercices pratiques

### Exo 1. (Pipe)

Crée un `LimitWordsPipe` qui tronque une phrase à **N mots max** (et ajoute `...` si ça dépasse).

---

### Exo 2. (Directive)

Crée une directive `[appAutoFocus]` qui focus automatiquement un input quand il est affiché.

---

### Exo 3. (Reactive Forms)

Formulaire réactif avec :

* `email` obligatoire + pattern email
* `password` min 8 caractères
* bouton désactivé si invalide

---

### Exo 4. (Service + RxJS)

Crée un `UserService` avec un `BehaviorSubject<User[]>` et une méthode `addUser(user: User)` qui met à jour la liste en live.

---

### Exo 5. (Async Pipe)

Crée un composant `user-list` qui affiche en temps réel les utilisateurs venant de ton `UserService`.

---

### Exo 6. (Routing)

Ajoute une route `/profile/:id` qui affiche les infos d’un utilisateur récupérées via `ActivatedRoute`.

---

### Exo 7. (Guard)

Implémente un `RoleGuard` qui autorise la navigation seulement si l’utilisateur a le rôle `"admin"`.

---

### Exo 8. (Lifecycle)

Crée un composant qui :

* fait un `console.log('Init')` dans `ngOnInit`
* souscrit à un `interval(1000)` dans `ngOnInit`
* nettoie l’abonnement dans `ngOnDestroy`

---

### Exo 9. (Directive avancée)

Crée une directive `[appHoverClass]` qui prend en entrée une classe CSS et l’applique seulement au survol.

---

### Exo 10. (Tests unitaires — unique exo test ✅)

Écris un test Jasmine/Karma pour vérifier que ton `LimitWordsPipe` tronque bien `"Hello Angular World"` en `"Hello Angular..."` si la limite est `2`.

---

👉 Veux-tu que je corrige direct tes réponses au **QCM** une fois que tu m’enverras tes choix comme d’hab (format complet question + explication) ?

