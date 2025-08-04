Voici une **nouvelle série de 10 exercices Angular niveau junior+++** pour te challenger 👇
(5 QCM + 5 exercices de code – sans réponses pour l’instant)

---

## ✅ QCM (1 à 5)

### **1. Que permet l’option `standalone: true` dans un décorateur `@Component` ?**

A. Elle rend le composant injectable dans un service
B. Elle rend le composant compatible uniquement avec Angular Elements
C. Elle permet de l'utiliser sans l'ajouter à un `NgModule`
D. Elle désactive l’injection de dépendances

---

### **2. Quel lifecycle hook est déclenché quand un composant reçoit de nouvelles valeurs dans un `@Input()` ?**

A. `ngOnInit`
B. `ngAfterViewInit`
C. `ngOnChanges`
D. `ngDoCheck`

---

### **3. Que fait le décorateur `@Injectable({ providedIn: 'root' })` ?**

A. Rend le service uniquement disponible dans `AppModule`
B. Crée une instance différente à chaque injection
C. Rend le service globalement accessible à toute l’app
D. Empêche la création multiple du service

---

### **4. Que renvoie un `FormControl.valueChanges` ?**

A. Une Promise
B. Une Observable
C. Un EventEmitter
D. Une Fonction

---

### **5. Quelle est la différence entre `ViewChild` et `ContentChild` ?**

A. `ViewChild` accède aux enfants projetés
B. `ContentChild` accède aux enfants définis dans le template
C. `ViewChild` accède au DOM projeté
D. `ViewChild` accède à un élément du composant lui-même

---

## 💻 Exercices de code (6 à 10)

### **6. Compteur avec un pas dynamique (`step`)**

Crée un composant `step-counter.component.ts` avec :

* un `@Input() step: number`
* un bouton pour incrémenter `count` par `step`
* un affichage du résultat (`Clicked X times`)

---

### **7. Composant parent → enfant avec `@Input()` dynamique**

Fais un composant `badge.component.ts` qui affiche :
📛 `"Hello <username>"`
Et un composant parent qui lui passe dynamiquement `username` depuis un champ texte (`<input>`).

---

### **8. Pipe `reverse`**

Écris une pipe `ReversePipe` qui inverse une chaîne de caractères.
Exemple : `"Angular"` → `"ralugnA"`

---

### **9. Service de gestion de panier (`CartService`)**

Crée un service avec :

* une méthode `addItem(item: string)`
* une méthode `getItems$()` (en `Observable<string[]>`)
* un `BehaviorSubject` privé

---

### **10. Formulaire de contact avec message requis**

Crée un composant `contact-form.component.ts` avec :

* un champ `message` obligatoire
* un bouton `Submit` désactivé si invalide
* une soumission qui affiche le message dans la console, puis réinitialise le champ

---

🟢 Dès que tu m’envoies tes réponses (QCM + code), je corrige tout avec feedback + refacto senior si utile !

Prêt ? 💪

=============
CORRIGÉ
=============
Parfait Ibrahim ! Voici ta **correction complète** avec ✅/❌, explication, et suggestions *niveau senior* où c’est pertinent.
Tu es clairement à l’aise avec Angular – tu es sur du **junior très solide** 💪

---

## ✅ Partie QCM

### **1. C ✅**

> `standalone: true` permet d’utiliser un composant/directive/pipe **sans le déclarer dans un NgModule**.

---

### **2. C ✅**

**D ❌**

> `ngOnChanges` est bien appelé à chaque changement de valeur d’un `@Input()`.

`ngDoCheck` sert à implémenter une détection manuelle si Angular ne suffit pas (cas avancé).

---

### **3. C ✅**

> `providedIn: 'root'` rend le service globalement disponible dans toute l’app (lazy modules compris).

---

### **4. B ✅**

> `valueChanges` renvoie bien un `Observable`, utile pour suivre l’évolution du champ.

---

### **5. A ✅**, **B ✅**

> ✔️ Bonne compréhension ici :

* `ViewChild` cible une **référence dans le template** du composant
* `ContentChild` cible une **projection via `ng-content`**

---

### ✅ **QCM : 9/10**

Excellent ! Tu maîtrises bien les concepts fondamentaux.

---

## 💻 Partie Exercice

---

### **6. Step Counter ✅**

**Ton code :**

* Très propre, bonne séparation logique
* Petite correction nécessaire ici : tu incrémentes toujours de 1 (`count += 1`) → ce n’est pas *step* ❌

```ts
onIncrement() {
  this.count += this.step; // ✅
}
```

💡 **Version senior** (optionnel) :

* `step` ne devrait pas être `0` par défaut (risque de clic inutile)

```ts
@Input({ required: true }) step = 1;
```

✅ **Note : 8.5/10**

---

### **7. Input dynamique + binding bi-directionnel ✅**

🟢 Points positifs :

* Bien joué pour l’utilisation de `input.required<string>()`
* Utilisation de `ngModel` propre et claire

💡 **Version senior** :

* Évite `|| 'anonymous'` dans le template, mieux vaut l’avoir en fallback via un `getter` propre dans `BadgeChildComponent` :

```ts
get name(): string {
  return this.username() || 'anonymous';
}
```

✅ **Note : 9/10**

---

### **8. Pipe `reverse` ✅**

Parfait, rien à dire. Clean, fonctionnelle, réutilisable.

💡 Tu pourrais aussi gérer un `null/undefined` par sécurité :

```ts
transform(value?: string): string {
  return value ? value.split('').reverse().join('') : '';
}
```

✅ **Note : 10/10**

---

### **9. CartService ✅**

🟠 Petite erreur : `.next()` est fait avec `items`, qui est **référence mutée** du tableau original → pas safe

**À éviter :**

```ts
const items = this.#items$.value;
items.push(item); // ❌ mutation directe
this.#items$.next(items);
```

✅ **Version senior :**

```ts
addItem(item: string) {
  const current = this.#items$.value;
  this.#items$.next([...current, item]); // copie avec ajout
}
```

✅ **Note : 8/10**

---

### **10. Formulaire de contact ✅**

🟢 Très bien :

* `Validators.required`
* `reset()`
* Bouton désactivé si invalide

💡 Bonus senior :

* `nonNullable.group({})` => tu peux virer le `FormControl()` :

```ts
form = this.formBuilder.nonNullable.group({
  message: ['', Validators.required]
});
```

✅ **Note : 9/10**

---

## 🎯 Résumé final

| Partie   | Score         |
| -------- | ------------- |
| QCM      | **9/10**      |
| Code     | **44.5/50**   |
| 🔥 Total | **53.5 / 60** |

---

### 💡 Reco senior

* ⚠️ Attention aux mutations (cf `BehaviorSubject`)
* Favorise toujours des `getter` et des fallback côté TS plutôt que dans le template
* Continue à bien utiliser `standalone`, `inject()`, `input.required()` → tu tires très bien parti d’Angular 16+

---

Tu veux un autre set QCM + code ? Ou un niveau un peu plus élevé (junior++ / intermédiaire) ?
