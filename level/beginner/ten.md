Parfait 👍
Je vais te préparer **10 exercices Angular** niveau **junior++ / intermédiaire**, moitié QCM et moitié code, avec un focus sur les bonnes pratiques **senior** : typage strict, composants standalone, services, pipes, directives, Reactive Forms, Observables et optimisations.

---

## **Partie 1 — 5 QCM**

**Q1 — Observables & AsyncPipe**
Quelle affirmation est correcte concernant l’`AsyncPipe` dans Angular ?
A. Il s'abonne automatiquement à un Observable et se désabonne à la destruction du composant.
B. Il ne fonctionne qu’avec les `Promise`.
C. Il déclenche `ChangeDetection` uniquement si la valeur émise est différente.
D. Il force l’abonnement multiple à chaque détection de changement.

---

**Q2 — Injection de dépendance**
Dans Angular, quel décorateur permet d’injecter un service dans un constructeur sans le rendre disponible globalement ?
A. `@Injectable({ providedIn: 'root' })`
B. `@Injectable()`
C. `@Component()`
D. `@Inject()`

---

**Q3 — Formulaires réactifs**
Dans un formulaire réactif, que fait l’option `{ updateOn: 'blur' }` ?
A. Valide les champs uniquement au submit.
B. Met à jour la valeur et valide uniquement quand le champ perd le focus.
C. Met à jour uniquement après un délai de debounce.
D. Empêche toute validation.

---

**Q4 — Performance & ChangeDetection**
Quel est l’intérêt principal d’utiliser `ChangeDetectionStrategy.OnPush` ?
A. Réduire le nombre de cycles de détection en ne vérifiant que lorsque les entrées changent.
B. Forcer Angular à recalculer tous les bindings à chaque tick.
C. Optimiser uniquement les services.
D. Empêcher complètement la détection de changement.

---

**Q5 — Standalone Components**
Quel est un avantage des composants standalone introduits dans Angular 14+ ?
A. Ils n'ont pas besoin de module pour être utilisés.
B. Ils ne peuvent pas contenir de templates HTML.
C. Ils ne peuvent pas être testés.
D. Ils sont obligatoires pour tous les projets Angular.

---

## **Partie 2 — 5 Exercices de Code**

**Exo 6 — Custom Validator**
Crée un validateur personnalisé `passwordStrengthValidator` pour un formulaire réactif qui impose :

* Minimum 8 caractères
* Au moins 1 majuscule, 1 chiffre, 1 caractère spécial
* Retourne `{ weakPassword: true }` si invalide

---

**Exo 7 — SearchPipe**
Écris un `Pipe` standalone `SearchPipe` qui filtre un tableau d’objets `{ name: string }` selon une chaîne de recherche (case-insensitive).

---

**Exo 8 — LoaderDirective**
Crée une directive standalone `appLoader` qui :

* Affiche un texte "Loading..." à la place du contenu pendant un état de chargement
* Utilise un `@Input()` `isLoading: boolean`

---

**Exo 9 — HTTPService**
Écris un service `PostsService` qui :

* Utilise `HttpClient` pour récupérer la liste des posts depuis `https://jsonplaceholder.typicode.com/posts`
* Retourne un `Observable<Post[]>` typé
* Gère les erreurs avec `catchError` et retourne un tableau vide en fallback

---

**Exo 10 — Optimisation avec OnPush**
Crée un composant standalone `UserListComponent` qui :

* Utilise `ChangeDetectionStrategy.OnPush`
* Prend un `@Input()` `users: User[]`
* Affiche la liste des noms avec `*ngFor`
* Évite de recréer le tableau dans le template

---

Si tu veux, je peux **te corriger tes réponses et codes** après, avec **feedback + version senior** comme pour le set précédent.
Veux-tu que je commence directement avec la correction du QCM après que tu aies répondu ?


=============
CORRIGÉ
=============
Parfait ✅
Je vais reprendre **chaque QCM en entier**, rappeler **ta réponse**, lister **les options** et t’expliquer **pourquoi chaque option est vraie ou fausse**, puis valider ou corriger ta réponse.

---

### **Q1 — Observables & AsyncPipe**

> **Question** :
> Quelle affirmation est correcte concernant l’`AsyncPipe` dans Angular ?
> **Options :**
> A. Il s'abonne automatiquement à un Observable et se désabonne à la destruction du composant.
> B. Il ne fonctionne qu’avec les `Promise`.
> C. Il déclenche `ChangeDetection` uniquement si la valeur émise est différente.
> D. Il force l’abonnement multiple à chaque détection de changement.
> **Ta réponse :** A, C

**Analyse :**

* **A — VRAI ✅** → L’`AsyncPipe` gère automatiquement l’abonnement et le désabonnement à un `Observable` ou une `Promise`.
* **B — FAUX ❌** → Il fonctionne à la fois avec `Observable` **et** `Promise`.
* **C — FAUX ❌** → Il déclenche la détection à chaque nouvelle valeur émise, pas uniquement si elle est différente (pas de comparaison par défaut).
* **D — FAUX ❌** → Il ne ré-abonne pas à chaque cycle, Angular réutilise l'abonnement tant que la source est la même.

**Bonne réponse :** ✅ **A**
**Ta réponse :** Incorrecte (tu as ajouté C qui est faux).

---

### **Q2 — Injection de dépendance**

> **Question** :
> Dans Angular, quel décorateur permet d’injecter un service dans un constructeur sans le rendre disponible globalement ?
> **Options :**
> A. `@Injectable({ providedIn: 'root' })`
> B. `@Injectable()`
> C. `@Component()`
> D. `@Inject()`
> **Ta réponse :** B

**Analyse :**

* **A — FAUX ❌** → `providedIn: 'root'` le rend **disponible globalement**.
* **B — VRAI ✅** → `@Injectable()` sans `providedIn` signifie que le service doit être fourni explicitement dans un module ou un composant pour être injecté.
* **C — FAUX ❌** → `@Component()` est pour déclarer un composant, pas pour injecter un service.
* **D — FAUX ❌** → `@Inject()` sert à fournir un token spécifique à Angular DI, pas à définir la portée du service.

**Bonne réponse :** ✅ **B**
**Ta réponse :** Correcte.

---

### **Q3 — Formulaires réactifs**

> **Question** :
> Dans un formulaire réactif, que fait l’option `{ updateOn: 'blur' }` ?
> **Options :**
> A. Valide les champs uniquement au submit.
> B. Met à jour la valeur et valide uniquement quand le champ perd le focus.
> C. Met à jour uniquement après un délai de debounce.
> D. Empêche toute validation.
> **Ta réponse :** B

**Analyse :**

* **A — FAUX ❌** → Le submit n'est pas lié à `updateOn`.
* **B — VRAI ✅** → Exact, la mise à jour et la validation ne se font qu'au moment du `blur`.
* **C — FAUX ❌** → Le debounce est un autre mécanisme (par ex. `debounceTime` dans un Observable).
* **D — FAUX ❌** → Cela n’empêche pas la validation, ça modifie juste le moment où elle est déclenchée.

**Bonne réponse :** ✅ **B**
**Ta réponse :** Correcte.

---

### **Q4 — Performance & ChangeDetection**

> **Question** :
> Quel est l’intérêt principal d’utiliser `ChangeDetectionStrategy.OnPush` ?
> **Options :**
> A. Réduire le nombre de cycles de détection en ne vérifiant que lorsque les entrées changent.
> B. Forcer Angular à recalculer tous les bindings à chaque tick.
> C. Optimiser uniquement les services.
> D. Empêcher complètement la détection de changement.
> **Ta réponse :** A

**Analyse :**

* **A — VRAI ✅** → Avec `OnPush`, Angular ne vérifie un composant que si ses `@Input()` changent, un événement se produit ou un Observable émet.
* **B — FAUX ❌** → C'est le comportement par défaut (`Default`), pas `OnPush`.
* **C — FAUX ❌** → La détection de changement concerne les composants, pas les services.
* **D — FAUX ❌** → OnPush ne désactive pas totalement la détection.

**Bonne réponse :** ✅ **A**
**Ta réponse :** Correcte.

---

### **Q5 — Standalone Components**

> **Question** :
> Quel est un avantage des composants standalone introduits dans Angular 14+ ?
> **Options :**
> A. Ils n'ont pas besoin de module pour être utilisés.
> B. Ils ne peuvent pas contenir de templates HTML.
> C. Ils ne peuvent pas être testés.
> D. Ils sont obligatoires pour tous les projets Angular.
> **Ta réponse :** A

**Analyse :**

* **A — VRAI ✅** → C’est justement l’avantage : ils peuvent être utilisés sans `NgModule`.
* **B — FAUX ❌** → Ils peuvent avoir un template HTML comme tout composant.
* **C — FAUX ❌** → Ils sont testables de la même façon que les composants classiques.
* **D — FAUX ❌** → Ce n’est pas obligatoire, c’est une option.

**Bonne réponse :** ✅ **A**
**Ta réponse :** Correcte.

---

## **Résultat final :**

* Q1 ❌ (A, pas A+C)
* Q2 ✅
* Q3 ✅
* Q4 ✅
* Q5 ✅

**Score :** **4/5 → 80%** 🎯

---

Si tu veux, je peux maintenant passer à **la correction de tes exercices 6 à 10** avec **feedback + version senior**.
Veux-tu que je le fasse ?

Parfait, j’ai bien lu tes exos 6 à 10.
Voici ce que je te propose : on va faire **une correction détaillée niveau “senior”**, en relevant :

1. ✅ Ce qui est correct.
2. ⚠️ Ce qui pourrait poser problème en interview.
3. 💡 Les améliorations ou refactorings possibles.

---

## **Exercice 6 – Password Strength Validator**

### ✅ Points positifs

* Bonne séparation du validator custom dans un fichier dédié.
* Conditions bien lisibles (hasUppercaseChar, hasDigit, etc.).
* Utilisation correcte de `AbstractControl` et `ValidationErrors`.

### ⚠️ Problèmes

* Dans `this.fb.nonNullable.group`, les validators doivent être passés **dans un tableau** `[Validators.required, passwordStrengthValidator()]` et non séparés par des virgules, sinon Angular va ignorer le deuxième.
* `Validators.email` doit être combiné avec `Validators.required`, sinon un email vide est considéré comme valide.
* Le champ `password` est défini comme `type="text"`, ce qui n’est pas idéal pour un mot de passe (devrait être `type="password"`).

### 💡 Refactoring

```ts
readonly form = this.fb.nonNullable.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, passwordStrengthValidator()]]
});
```

---

## **Exercice 7 – Search Pipe**

### ✅ Points positifs

* Bonne gestion des cas `!searchTerm` et `!appareils.length`.
* Utilisation de `toLowerCase()` pour la recherche insensible à la casse.

### ⚠️ Problèmes

* Le type de retour est incohérent : tu déclares `Appareil[] | string`, mais tu retournes parfois `[]`, parfois `string`.
  → En Angular, les pipes doivent retourner **toujours le même type** pour éviter des erreurs dans le template.
* Le `.map(...).join(' ')` transforme le tableau en string, ce qui casse l’affichage si on s’attend à itérer dessus.
* `appareilsFiltered` devrait rester un tableau.

### 💡 Refactoring

```ts
transform(appareils: Appareil[], searchTerm: string): Appareil[] {
  if (!appareils?.length) return [];
  if (!searchTerm) return appareils;
  return appareils.filter(appareil =>
    appareil.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
```

---

## **Exercice 8 – Loader Directive**

### ✅ Points positifs

* Usage correct de `Renderer2` et `@Input`.
* Condition `if (this.isLoading)` bien placée.

### ⚠️ Problèmes

* Le loader ne se met pas à jour si `isLoading` change après `ngAfterViewInit`.
* `innerHTML` injecte du HTML brut → XSS possible. Mieux vaut manipuler le DOM avec `Renderer2`.

### 💡 Refactoring

```ts
ngOnChanges() {
  this.renderer.setProperty(this.el.nativeElement, 'textContent',
    this.isLoading ? 'Loading...' : ''
  );
}
```

---

## **Exercice 9 – Post Service**

### ✅ Points positifs

* Utilisation correcte d’`inject(HttpClient)` et `Observable<Post[]>`.
* Utilisation de `catchError` pour éviter un crash.

### ⚠️ Problèmes

* L’URL `"https://jsonPlaceholder.typicode.com/"` contient une majuscule incorrecte (`jsonplaceholder` en minuscule).
* `from([])` crée un observable qui émet chaque élément du tableau, pas un tableau entier.
  → Il faut utiliser `of([])`.

### 💡 Refactoring

```ts
return this.http.get<Post[]>(url).pipe(
  catchError(() => of([]))
);
```

---

## **Exercice 10 – User List**

### ✅ Points positifs

* Utilisation de `ChangeDetectionStrategy.OnPush`.
* Bon usage de `NgFor` et `@Input()`.

### ⚠️ Problèmes

* Dans le template, `*ngFor="let user of users;"` → le point-virgule est inutile.
* Si `users` est `null` ou `undefined`, Angular va planter.
  → Solution : `*ngFor="let user of users || []"`.

### 💡 Refactoring

```html
<li *ngFor="let user of users || []">
  First name: {{ user.firstName }}
</li>
```

---

Si tu veux, je peux te préparer **une version corrigée & optimisée complète** de tes exos 6 à 10 façon “réponse interview” pour que tu aies un dossier clean.
Tu veux que je te fasse ça ?

