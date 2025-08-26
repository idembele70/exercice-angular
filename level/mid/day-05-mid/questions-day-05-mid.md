Parfait ! Je te propose un set complet de **10 exercices niveau intermédiaire+++** pour Angular, avec un mélange de **5 QCM** et **5 exercices de code**, orientés sur le cœur d’Angular (forms, directives, services, RxJS, routing, guards, pipes).

---

## ===== QCM =====

**1.** Quelle est la différence principale entre `ngOnInit` et `constructor` dans un composant Angular ?
A. `ngOnInit` est appelé après l’injection des dépendances et l’initialisation des inputs, `constructor` juste après l’injection.
B. `constructor` n’est jamais appelé.
C. `ngOnInit` ne peut pas accéder aux inputs.
D. `constructor` est appelé après le rendu du composant.

**2.** Dans un `FormArray`, comment accède-t-on à un `FormControl` spécifique dans le template ?
A. `formArray.controls[i]`
B. `form.controls[i]`
C. `formArray.get(i)`
D. `form.get('controlName')`

**3.** Quelle affirmation sur les Observables et AsyncPipe est correcte ?
A. AsyncPipe se désabonne automatiquement à la destruction du composant.
B. AsyncPipe doit être unsubscribed manuellement.
C. AsyncPipe ne peut pas gérer plusieurs Observables.
D. AsyncPipe convertit toujours un Observable en Promise.

**4.** Lorsqu’on crée un `CanActivate` guard, que renvoie la fonction ?
A. Toujours `true`.
B. `boolean` ou `UrlTree`.
C. `Observable<boolean>` seulement.
D. `void`.

**5.** Quelle option décrit correctement une directive structurelle personnalisée (`*appIf`) ?
A. Elle peut ajouter ou supprimer des éléments du DOM.
B. Elle peut modifier le style inline uniquement.
C. Elle ne peut pas manipuler le DOM.
D. Elle ne peut être utilisée que sur `<div>`.

---

## ===== CODE =====

**6. Formulaire réactif + validation**

* Crée un formulaire avec les champs : `firstName`, `lastName`, `email` et `password`.
* Validation :

  * `firstName` et `lastName` : requis et min 2 caractères
  * `email` : email valide
  * `password` : min 6 caractères
* Affiche un message d’erreur sous chaque champ si invalid et touched.
* Affiche le JSON du formulaire soumis dans un `<pre>` en dessous.

---

**7. Service Angular avec RxJS**

* Crée un service `ProductService` qui expose un Observable `products$`.
* Initialise-le avec un `BehaviorSubject<Product[]>` avec 2 produits au départ.
* Ajoute les méthodes :

  * `addProduct(product: Product)`
  * `removeProduct(id: number)`
  * `getProducts$(): Observable<Product[]>`

---

**8. Directive personnalisée HoverColor**

* Directive `[appHoverColor]` qui prend une couleur en Input.
* Lors du `mouseenter`, applique la couleur au texte.
* Lors du `mouseleave`, revient à la couleur initiale.

---

**9. FormArray dynamique (tâches à faire)**

* Crée un composant `TaskFormComponent` avec :

  * `FormArray` `tasks`
  * Chaque tâche a un `FormControl` `title` (min 3 caractères)
* Bouton pour ajouter une tâche et bouton pour supprimer une tâche.
* Affiche toutes les tâches sous le formulaire.

---

**10. Pipe custom pour filtrer**

* Crée un Pipe `FilterByAgePipe` qui filtre une liste d’`User` par un âge minimum donné.
* Signature : `transform(users: User[], minAge: number): User[]`
* Retourne la liste filtrée.

---

Si tu veux, je peux te faire **une correction complète et détaillée version senior** pour ces 10 exercices, avec code prêt à copier-coller + explications.

Veux‑tu que je fasse ça maintenant ?

