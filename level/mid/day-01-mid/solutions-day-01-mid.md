====
QCM
====
Parfait 🙌 ! Tu veux la correction détaillée comme avant (question entière + ta réponse + explication pour chaque option). Voilà :

---

## ✅ **Correction du QCM Intermédiaire**

---

### **QCM 1 : Reactive Forms**

**Question :**
Dans Angular, que retourne la méthode `formGroup.get('controlName')` ?

* A. Un `FormControl` ou `null`
* B. Toujours un `FormControl`, jamais `null`
* C. Un `AbstractControl` ou `null`
* D. Un objet `FormGroup`

**Ta réponse :** A
**Bonne réponse :** ✅ C

**Explications :**

* **A. Faux** → Ça peut être un `FormControl`, mais aussi un `FormGroup` ou `FormArray`.
* **B. Faux** → Ça peut être `null` si le contrôle n’existe pas.
* **C. Vrai** → La méthode retourne un `AbstractControl | null`, qui peut représenter `FormControl`, `FormGroup` ou `FormArray`.
* **D. Faux** → Ça peut retourner un `FormGroup`, mais pas uniquement.

---

### **QCM 2 : Change Detection**

**Question :**
Avec `ChangeDetectionStrategy.OnPush`, le composant **ne se mettra pas à jour automatiquement** dans quel cas ?

* A. Si un `@Input` reçoit une nouvelle référence
* B. Si un `@Input` change de valeur primitive
* C. Si un `setTimeout` modifie une variable interne
* D. Si un `Observable` lié avec `async` pipe émet une nouvelle valeur

**Ta réponse :** C
**Bonne réponse :** ✅ C

**Explications :**

* **A. Faux** → Si une nouvelle référence est passée, Angular détecte le changement.
* **B. Faux** → Les primitives (string, number, boolean) déclenchent bien le changement.
* **C. Vrai** → Les modifications internes (hors `@Input`, `EventEmitter`, `async`) ne déclenchent pas la détection avec `OnPush`.
* **D. Faux** → L’`async` pipe déclenche bien la détection.

---

### **QCM 3 : Services & Injection**

**Question :**
Quelle est la meilleure façon de fournir un service disponible uniquement dans un module spécifique ?

* A. `providedIn: 'root'` dans le service
* B. Ajouter le service dans le `providers` du module
* C. Ajouter le service dans le `declarations` du module
* D. Utiliser `inject()` directement dans un composant

**Ta réponse :** B
**Bonne réponse :** ✅ B

**Explications :**

* **A. Faux** → `providedIn: 'root'` le rend global.
* **B. Vrai** → `providers` dans un module restreint la portée à ce module.
* **C. Faux** → `declarations` est réservé aux composants/directives/pipes.
* **D. Faux** → `inject()` dans un composant ne déclare pas le service, ça l’utilise seulement.

---

### **QCM 4 : RxJS**

**Question :**
Quelle est la différence principale entre `switchMap` et `mergeMap` ?

* A. `switchMap` annule l’observable précédent quand un nouveau arrive, `mergeMap` non
* B. `mergeMap` est plus rapide que `switchMap`
* C. `switchMap` ne fonctionne qu’avec `HttpClient`
* D. `mergeMap` conserve uniquement le dernier observable

**Ta réponse :** A
**Bonne réponse :** ✅ A

**Explications :**

* **A. Vrai** → `switchMap` annule l’observable précédent pour éviter les chevauchements, `mergeMap` garde tous les flux.
* **B. Faux** → Pas une question de vitesse, mais de gestion des flux.
* **C. Faux** → `switchMap` fonctionne avec tous les observables.
* **D. Faux** → C’est `switchMap` qui ne conserve que le dernier flux, pas `mergeMap`.

---

### **QCM 5 : Routing avancé**

**Question :**
Que fait l’option `{ relativeTo: this.route }` dans le service `Router` ?

* A. Force une navigation vers la racine `/`
* B. Définit que la navigation est relative à l’URL actuelle
* C. Ignore les paramètres de l’URL courante
* D. Recharge entièrement l’application

**Ta réponse :** B
**Bonne réponse :** ✅ B

**Explications :**

* **A. Faux** → Ça serait `navigateByUrl('/')`.
* **B. Vrai** → Ça permet de naviguer en fonction de la route active actuelle (utile dans des routes enfants).
* **C. Faux** → Les paramètres restent pris en compte.
* **D. Faux** → Angular Router ne recharge jamais toute l’app, sauf cas forcé.

---

## 📊 **Bilan**

* Q1 ❌ (bonne réponse : C)
* Q2 ✅
* Q3 ✅
* Q4 ✅
* Q5 ✅

👉 Score : **4 / 5 (80%)** – Très solide 👏, juste un petit piège sur `formGroup.get()` qui retourne un `AbstractControl`.

---

Veux-tu que je corrige tes **exos 6 à 10** (code) en mode "feedback junior vs senior" maintenant ?

=====
CODE
=====
Parfait 👌 merci d’avoir partagé toutes tes réponses !
Je vais te donner un **feedback niveau senior** sur chaque exo (6 → 10), avec les points forts ✅ et les petites améliorations possibles ⚡️.

---

## **6. FormArray dynamique**

✅ Points positifs :

* Bonne utilisation de `FormArray` + `FormBuilder`.
* Getter `inputFields` bien propre.
* Méthode `addInputField()` claire.

⚡️ Améliorations possibles :

1. **Type-safety** :
   Ton `FormArray` devrait être typé, par exemple :

   ```ts
   evForm = this.fb.nonNullable.group({
     inputFields: this.fb.array<FormGroup<{ email: FormControl<string> }>>([]),
   });
   ```

   → ça évite les `any`.

2. **Magic string** :
   Au lieu de `email`, crée une constante :

   ```ts
   const EMAIL_CONTROL = 'email';
   ```

   Et utilise-la partout → ça évite les fautes de frappe.

3. **UX** :
   Pense à rajouter un validateur de format email :

   ```ts
   email: ['', [Validators.required, Validators.email]],
   ```

---

## **7. Articles + AsyncPipe custom**

✅ Points positifs :

* Service avec `BehaviorSubject` → bien vu.
* Composant `MainView` très clean.
* Async pipe custom : intéressant pour l’exercice.

⚡️ Améliorations possibles :

1. **Conflit de nom** : tu appelles ton pipe `async`, mais Angular a déjà son propre `AsyncPipe`.
   👉 Ça peut créer de la confusion. Appelle-le par ex. `sync` ou `value`.

2. **Service : Observable vs BehaviorSubject**
   Actuellement, tu exposes directement un `BehaviorSubject`.
   Bonne pratique : exposer un `Observable` en lecture seule :

   ```ts
   private readonly articles$ = new BehaviorSubject<Article[]>([...] );
   getArticles$(): Observable<Article[]> {
     return this.articles$.asObservable();
   }
   ```

   → Comme ça, seul le service peut modifier la source.

3. **Template** :
   Si tu utilises le vrai `AsyncPipe`, tu peux écrire simplement :

   ```html
   <li *ngFor="let article of articles$ | async">
     {{ article.name }} - {{ article.price }}
   </li>
   ```

---

## **8. Auth Guard**

✅ Points positifs :

* Bon usage d’`inject` (nouvelle API Angular 15+).
* Redirection vers `/login` si non connecté.

⚡️ Améliorations possibles :

1. **Bonne pratique Angular** → Le guard devrait renvoyer `UrlTree` plutôt que `false` pour une meilleure compatibilité avec Angular Router. Exemple :

   ```ts
   if (!isLoggedIn) {
     return router.parseUrl('/login');
   }
   return true;
   ```

2. **AuthService** :
   Actuellement tu as `isLoggedIn$ = new BehaviorSubject(true);` → ça veut dire que l’utilisateur est toujours connecté au démarrage.
   👉 Par défaut, mets `false`.

---

## **9. Directive Highlight**

✅ Points positifs :

* Bonne utilisation de `HostListener`.
* `Renderer2` bien utilisé (meilleure pratique que `nativeElement.style`).

⚡️ Améliorations possibles :

1. **Flexibilité** :
   Permets de configurer la couleur via un `@Input()` :

   ```ts
   @Input() appHighlight = 'blue';
   ```

   Et applique cette valeur → ça rend la directive réutilisable.

2. **Accessibilité** :
   Tu pourrais rajouter un focus style aussi (`@HostListener('focus')`).

---

## **10. Capitalize Pipe**

✅ Points positifs :

* Regex bien utilisé pour capitaliser chaque mot.
* Tests unitaires présents 🎉.

⚡️ Améliorations possibles :

1. **Null safety** :
   Actuellement si tu passes `null` ou `undefined`, ça crashe.
   Corrige comme ça :

   ```ts
   transform(str: string | null | undefined): string {
     if (!str) return '';
     return str.replaceAll(/\w\S*/g, txt =>
       txt[0].toUpperCase() + txt.slice(1).toLowerCase()
     );
   }
   ```

2. **Tests** :
   Tu pourrais rajouter des cas :

   * chaîne vide
   * `null` ou `undefined`
   * mots avec majuscules déjà présentes

---

### 🎯 Bilan

* Tu es déjà **très clean (junior++/intermédiaire)**.
* Les améliorations sont surtout autour de **typage fort**, **bonne pratique Angular** (guards, services), et **robustesse** (null safety, input configurable).
* Niveau senior, on vise surtout : éviter les `any`, exposer seulement des `Observable`, utiliser des `UrlTree` en guard, et rendre le code réutilisable/testable.

---

👉 Veux-tu que je te propose une **version corrigée "senior" complète** de l’exercice **7 (service + pipe + component)** pour comparer directement ton code avec une version optimisée ?

