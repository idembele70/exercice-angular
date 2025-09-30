====
QCM
====
Parfait 🙌 tu as bien joué, voyons ça point par point.

---

# ✅ Correction du QCM

### **Q1. Concernant les services Angular et l’injection de dépendances :**

👉 Ta réponse : **B, D**
✔️ **Bonne réponse : B, D**

* **A. Faux** → Avec `providedIn: 'root'`, plus besoin de déclarer dans `providers`.
* **B. Vrai** → `providedIn: 'root'` rend dispo partout.
* **C. Faux** → `inject()` fonctionne dans guards depuis Angular 14+.
* **D. Vrai** → Un service peut être injecté dans un pipe custom (ex : pour traduire).

---

### **Q2. À propos des Guards :**

👉 Ta réponse : **A, B, D**
✔️ **Bonne réponse : A, B, D**

* **A. Vrai** → Retour `boolean | UrlTree`.
* **B. Vrai** → Peut être `Promise` ou `Observable`.
* **C. Faux** → `CanActivateChild` doit être explicitement appliqué sur la config de route enfant.
* **D. Vrai** → Retourner `false` annule la navigation.

---

### **Q3. Sur les Interceptors HTTP :**

👉 Ta réponse : **C, D**
✔️ **Bonne réponse : A, C, D**

* **A. Vrai** → Un interceptor doit implémenter `HttpInterceptor`.
* **B. Faux** → On peut transformer **requête et réponse** (via `next.handle(req).pipe(map(...))`).
* **C. Vrai** → Ordre d’exécution = ordre de fourniture dans `providers`.
* **D. Vrai** → Ajouter headers est un cas classique.

⚠️ Tu as oublié **A**.

---

### **Q4. Concernant les Résolveurs Angular :**

👉 Ta réponse : **A, B**
✔️ **Bonne réponse : A, B**

* **A. Vrai** → Implémente `Resolve<T>`.
* **B. Vrai** → Peut retourner valeur sync, `Promise` ou `Observable`.
* **C. Faux** → Il s’exécute **avant** que le composant soit affiché (il bloque la route).
* **D. Faux** → Si ça échoue, on peut gérer avec `catchError` ou dans le resolver même (pas guard).

---

### **Q5. Sur les Validators personnalisés :**

👉 Ta réponse : **A, B, C**
✔️ **Bonne réponse : A, B, C**

* **A. Vrai** → Implémentation classique avec `ValidatorFn`.
* **B. Vrai** → Async validators retournent `Promise | Observable<ValidationErrors | null>`.
* **C. Vrai** → Plusieurs validators peuvent être combinés.
* **D. Faux** → Un validator custom peut accéder à d’autres contrôles (`group.get('...')`).

---

# 📊 Bilan

* Q1 → ✅
* Q2 → ✅
* Q3 → ❌ (oubli de A)
* Q4 → ✅
* Q5 → ✅

👉 **Score final : 4/5** (très solide 💪, juste un petit loupé sur Q3).

---

Veux-tu que je te montre maintenant **les corrections / codes complets des 5 exercices** (avec bonnes pratiques, niveau entretien), ou tu veux d’abord refaire Q3 en profondeur (interceptors) pour être sûr que tu maîtrises ?

=====
CODE
=====

