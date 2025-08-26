====
QCM
====
Parfait, regardons ton QCM et corrigeons-le question par question.

---

### **1. Quelle est la différence principale entre `ngOnInit` et `constructor` dans un composant Angular ?**

* **Ta réponse : A ✅**
* **Options :**

  * A. `ngOnInit` est appelé après l’injection des dépendances et l’initialisation des inputs, `constructor` juste après l’injection.
  * B. `constructor` n’est jamais appelé.
  * C. `ngOnInit` ne peut pas accéder aux inputs.
  * D. `constructor` est appelé après le rendu du composant.

**Explication :**

* **Correct : A**. Le `constructor` sert uniquement à l’injection des dépendances et à initialiser des propriétés. Les `@Input` ne sont pas encore disponibles. `ngOnInit` est appelé juste après l’initialisation des inputs, donc on peut les utiliser en toute sécurité.
* B, C, D sont incorrectes pour les raisons évidentes (constructor est toujours appelé, ngOnInit peut accéder aux inputs, etc.)

✅ **Ta réponse est correcte.**

---

### **2. Dans un `FormArray`, comment accède-t-on à un `FormControl` spécifique dans le template ?**

* **Ta réponse : A ✅**
* **Options :**

  * A. `formArray.controls[i]`
  * B. `form.controls[i]`
  * C. `formArray.get(i)`
  * D. `form.get('controlName')`

**Explication :**

* **Correct : A**. `formArray.controls` est un tableau de `FormGroup` ou `FormControl`. Pour accéder à l’élément i‑ème, on utilise `controls[i]`.
* B et D sont incorrects car `form` ou `form.get()` ne permettent pas d’accéder directement à l’index d’un `FormArray`.
* C est incorrect : `get()` prend un chemin de contrôle (`'0.title'`) et non juste un index.

✅ **Ta réponse est correcte.**

---

### **3. Quelle affirmation sur les Observables et AsyncPipe est correcte ?**

* **Ta réponse : A ✅**
* **Options :**

  * A. AsyncPipe se désabonne automatiquement à la destruction du composant.
  * B. AsyncPipe doit être unsubscribed manuellement.
  * C. AsyncPipe ne peut pas gérer plusieurs Observables.
  * D. AsyncPipe convertit toujours un Observable en Promise.

**Explication :**

* **Correct : A**. L’AsyncPipe gère le désabonnement automatiquement, ce qui évite les fuites mémoire.
* B, C, D sont faux : AsyncPipe ne nécessite pas de désabonnement manuel, peut gérer plusieurs Observables en combinaison (via async pipe séparés) et ne convertit pas un Observable en Promise.

✅ **Ta réponse est correcte.**

---

### **4. Lorsqu’on crée un `CanActivate` guard, que renvoie la fonction ?**

* **Ta réponse : B ✅**
* **Options :**

  * A. Toujours `true`.
  * B. `boolean` ou `UrlTree`.
  * C. `Observable<boolean>` seulement.
  * D. `void`.

**Explication :**

* **Correct : B**. Un guard peut retourner `true`/`false` pour autoriser ou bloquer la navigation, ou un `UrlTree` pour rediriger.
* A, C, D sont faux : la fonction peut retourner un `boolean` ou un `UrlTree` et peut aussi être observable/promise mais le type de base reste `boolean | UrlTree`.

✅ **Ta réponse est correcte.**

---

### **5. Quelle option décrit correctement une directive structurelle personnalisée (`*appIf`) ?**

* **Ta réponse : A ✅**
* **Options :**

  * A. Elle peut ajouter ou supprimer des éléments du DOM.
  * B. Elle peut modifier le style inline uniquement.
  * C. Elle ne peut pas manipuler le DOM.
  * D. Elle ne peut être utilisée que sur `<div>`.

**Explication :**

* **Correct : A**. Une directive structurelle (`*`) manipule le DOM en ajoutant ou retirant des éléments.
* B est faux : elle ne se limite pas au style.
* C est faux : elle manipule bien le DOM.
* D est faux : elle peut s’appliquer à n’importe quel élément.

✅ **Ta réponse est correcte.**

---

### ✅ **Bilan du QCM**

* Nombre de réponses correctes : 5/5
* Score : **100%**

---

Si tu veux, on peut maintenant passer à la **correction des exercices de code 6 à 10** pour ce set.
Veux‑tu que je fasse ça ?

=====
CODE
=====

