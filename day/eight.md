Voici un **nouveau set Angular niveau junior++ / intermédiaire**
(🧠 un peu plus poussé sur RxJS, routing, testing et forms avancés)

---

## ✅ QCM (Questions 1 à 5)

### **1. Que se passe-t-il si vous utilisez `async` dans le template Angular comme `{{ observable$ | async }}` ?**

A. Cela annule la souscription automatiquement
B. Cela déclenche le `ngOnInit()` à chaque émission
C. Cela crée une nouvelle souscription à chaque détection de changement
D. Cela désabonne automatiquement à la destruction du composant

---

### **2. À quoi sert le décorateur `@HostBinding()` ?**

A. À lier une valeur à une propriété d’un élément DOM hôte
B. À injecter le parent du composant
C. À exposer une propriété publique dans l’injection de dépendance
D. À gérer les styles du composant enfant

---

### **3. Laquelle de ces options permet de "partager" un flux observable entre plusieurs abonnés sans le relancer ?**

A. `switchMap()`
B. `tap()`
C. `shareReplay()`
D. `concatMap()`

---

### **4. Dans un test Angular avec TestBed, pourquoi utiliser `fixture.detectChanges()` ?**

A. Pour lancer manuellement le cycle de vie complet du composant
B. Pour appliquer les modifications de DOM au niveau global
C. Pour injecter les dépendances dans le composant
D. Pour détecter si un `@Output()` a changé

---

### **5. Quelle affirmation est vraie à propos des `formArray` dans les Reactive Forms ?**

A. Un `FormArray` ne peut contenir que des `FormControl`
B. Un `FormArray` peut contenir des `FormGroup` ou des `FormControl`
C. Un `FormArray` est utilisé uniquement avec les `template-driven forms`
D. Il est impossible de supprimer dynamiquement un élément d’un `FormArray`

---

## 🧪 Exercices de code (6 à 10)

### **6. Création d’un `rating.component.ts` (standalone)**

Affiche une note sur 5 en étoiles (ex: `★★★☆☆`), avec un `@Input() rating: number`.
💡 Affiche `★` pour chaque point (jusqu’à 5), sinon `☆`.

---

### **7. Crée une directive `appHighlightOnHover`**

Survoler un élément applique un `background-color: yellow`, le survol quitte => couleur retirée.
💡 Utilise `@HostListener` et `@HostBinding`

---

### **8. Écris un `SortByPipe` (standalone)**

Pipe pour trier un tableau d’objets selon une propriété passée en paramètre :

```html
<li *ngFor="let user of users | sortBy:'age'">{{ user.name }}</li>
```

---

### **9. Service `LoggerService` avec injection conditionnelle**

Crée un service injectable `LoggerService` qui logge dans la console *seulement si* un `IS_DEV` booléen est injecté à `true`.
💡 Fournis via `useFactory`

---

### **10. `DynamicFormComponent` standalone**

Crée un composant standalone qui construit un formulaire à partir d’une structure comme :

```ts
fields = [
  { name: 'firstName', required: true },
  { name: 'email', required: false }
];
```

Il affiche dynamiquement un champ `formControlName` pour chaque entrée, avec validation.

---

Quand tu veux, envoie tes réponses.
Je te corrigerai avec notes, feedback + refacto niveau senior. 💪


=========
CORRIGÉ
=========
Excellent travail ! Tu avances très bien et tu maîtrises de plus en plus les concepts intermédiaires. Voici la **correction complète** avec **feedback + note + refacto senior** quand utile.

---

## ✅ QCM (1 à 5)

### **1. Réponse : C et D ✅**

✔️ `async` crée une souscription automatique dans le template
✔️ Angular s'occupe du désabonnement à la destruction du composant
✅ **Bonne réponse**
🟩 **Note : 1/1**

---

### **2. Réponse : A ✅**

✔️ `@HostBinding()` permet de lier une propriété à l’élément hôte (comme `class`, `style`, etc.)
✅ **Bonne réponse**
🟩 **Note : 1/1**

---

### **3. Réponse : C ✅**

✔️ `shareReplay()` partage la source et évite de réexécuter un flux froid (comme une requête HTTP)
✅ **Bonne réponse**
🟩 **Note : 1/1**

---

### **4. Réponse : A ❌ D ❌**

❌ D est fausse : `detectChanges()` n’a aucun lien avec `@Output()`
✅ A est vraie : elle déclenche manuellement la détection de changement
➡️ Tu aurais dû cocher uniquement **A**
🟧 **Note : 0.5/1**

---

### **5. Réponse : B ✅**

✔️ `FormArray` peut contenir des `FormGroup`, `FormControl`, ou même d'autres `FormArray`
✅ **Bonne réponse**
🟩 **Note : 1/1**

---

### 🧮 QCM total : **4.5 / 5**

---

## 🧪 Code (6 à 10)

---

### **6. RatingComponent**

✅ Fonctionnel, très bien encapsulé avec `@Input`
✅ Bonne gestion des bornes
✔️ Lisible, réutilisable
**🧠 Version senior :**

* Typage plus explicite
* Ajouter `ChangeDetectionStrategy.OnPush`

```ts
@Component({
  // ...
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

✅ **Note : 1/1**

---

### **7. HighlightOnHoverDirective**

✅ Fonctionne parfaitement
✔️ Bon usage de `@HostListener` et `@HostBinding`
🧠 **Version senior** :

* Utiliser `'transparent'` au lieu de `'white'`
* Initialiser `bgColor = ''` pour éviter `undefined`
* Ajouter `ChangeDetectionStrategy.OnPush` si utilisé dans un composant

✅ **Note : 1/1**

---

### **8. SortByPipe**

✅ Fonctionne et bien codé
✔️ Générique et lisible
🧠 **Version senior** :

* Ne pas trier *en place* (effet de bord), retourne une copie :

```ts
return [...users].sort((a, b) => +a[filter] - +b[filter]);
```

✅ **Note : 1/1**

---

### **9. LoggerService + Factory**

✅ Bonne séparation en `service` + `factory`
❌ Le `useFactory` n’est pas encore relié à un provider Angular
🧠 Il manque :

```ts
export const IS_DEV = new InjectionToken<boolean>('IS_DEV');

export const loggerProvider = {
  provide: LoggerService,
  useFactory: loggerServiceFactory,
  deps: [IS_DEV]
};
```

Puis dans `main.ts` ou module :

```ts
providers: [
  { provide: IS_DEV, useValue: true },
  loggerProvider
]
```

🟧 **Note : 0.5/1**
💡 Code très bien commencé, mais pas "branché"

---

### **10. DynamicFormComponent**

✅ Génération dynamique bien structurée
🧠 Quelques remarques senior :

* Ce code est faux :

```ts
readonly form = this.fb.nonNullable.group({
  ...this.fb.array(this.controls)
})
```

Tu ne peux pas déstructurer un `FormArray` comme un objet.

* `formArrayName="fields"` est mentionné dans le HTML, mais tu n’as pas déclaré `fields` comme un `FormArray` dans le `form`.

✔️ Voici une **version corrigée** :

```ts
readonly form = this.fb.group({
  fields: this.fb.array(
    this.fields.map(field =>
      this.fb.group({
        [field.name]: [
          '',
          field.required ? Validators.required : []
        ]
      })
    )
  )
});

get fieldsArray() {
  return this.form.get('fields') as FormArray;
}
```

✅ **Note : 0.5/1**

---

### 🧮 Code total : **4 / 5**

---

## 🏁 **Score final : 8.5 / 10 ✅**

Excellent niveau **junior++ / intermédiaire** !
Tu es très à l’aise avec :

* Les composants standalone
* Les `@Input`, `directives`, `pipes` custom
* L’architecture modulaire (👍)
* La logique de validation dynamique

---

## 🧠 Suggestions de montée en puissance

| Sujet                       | Idée d'exercice suivant              |
| --------------------------- | ------------------------------------ |
| `ControlValueAccessor`      | Créer un composant input custom      |
| `Router Guards`             | Protéger une page via un rôle        |
| `HttpClient` + interceptors | Ajouter un token JWT et logger       |
| `RxJS` avancé (`mergeMap`)  | Combiner deux requêtes HTTP          |
| `NgRx Signals` (optionnel)  | Migrer un service avec `signalStore` |

---

Souhaites-tu un **nouveau set** encore plus avancé (niveau intermédiaire++) ou tu veux approfondir un sujet particulier ?
