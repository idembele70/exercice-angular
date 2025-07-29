Parfait 👍 Voici un **nouveau set** de 10 questions (5 QCM + 5 exos de code) en **Angular niveau junior++/intermédiaire**.

---

## **📌 QCM (5 questions)**

**1.** Dans Angular, quelle est la différence principale entre `@ViewChild` et `@ContentChild` ?
A. `@ViewChild` cible un élément dans le template du composant, `@ContentChild` cible un élément inséré via `<ng-content>`
B. `@ContentChild` est plus rapide que `@ViewChild`
C. `@ViewChild` ne fonctionne que pour les directives
D. `@ContentChild` fonctionne uniquement avec les services injectés

---

**2.** Quelle méthode Angular appelle-t-on pour déclencher manuellement la détection de changements ?
A. `this.detect()`
B. `this.cd.detectChanges()`
C. `ChangeDetectorRef.detectChanges()`
D. `ApplicationRef.runChangeDetection()`

---

**3.** Dans Angular, quel hook est appelé **après** que tous les `@Input()` soient définis ?
A. `ngOnInit`
B. `ngAfterViewInit`
C. `ngOnChanges`
D. `ngAfterContentInit`

---

**4.** Quelle est la bonne syntaxe pour utiliser `async` pipe avec un `Observable` dans un template Angular ?
A. `{{ observable | async }}`
B. `{{ observable.async() }}`
C. `{{ async(observable) }}`
D. `{{ observable | asAsync }}`

---

**5.** En Angular, pourquoi utiliser `trackBy` dans un `*ngFor` ?
A. Pour empêcher l’itération d’un tableau
B. Pour améliorer les performances en évitant la recréation inutile d’éléments
C. Pour itérer en sens inverse
D. Pour rendre les éléments cliquables

---

## **💻 Exercices de code (5 exercices)**

---

**6.** Crée un **pipe Angular** nommé `truncate` qui coupe une chaîne de caractères à une longueur donnée et ajoute `...` si elle est trop longue.
**Exemple :** `"Hello World"` avec limite `5` → `"Hello..."`

---

**7.** Crée une **directive Angular** `appDebounceClick` qui empêche plusieurs clics rapides sur un bouton (délai de 1 seconde avant un nouveau clic autorisé).

---

**8.** Crée un **service Angular** `LocalStorageService` qui permet de :

* `setItem(key: string, value: any)` → stocker un objet JSON
* `getItem<T>(key: string): T | null` → récupérer un objet JSON
* `removeItem(key: string)` → supprimer l’élément

---

**9.** Crée un composant Angular `ToggleButtonComponent` avec un bouton qui change son texte entre `"ON"` et `"OFF"` à chaque clic.
⚡ Bonus : émettre un événement `@Output()` avec la valeur actuelle.

---

**10.** Crée un formulaire Angular **réactif** avec :

* `username` (obligatoire, minLength: 3)
* `age` (obligatoire, nombre ≥ 18)
  Afficher un message d’erreur sous chaque champ si invalide et désactiver le bouton "Submit" si le formulaire est invalide.

---

Veux-tu que je te fasse **les corrections complètes avec notation sur 10** comme pour le set précédent ?
Cela permettrait que tu voies aussi la version "senior" optimisée.

=============
CORRECTION
=============

