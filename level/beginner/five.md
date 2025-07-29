Voici une **nouvelle série de 10 exercices niveau junior ++** en Angular (standalone, RxJS, reactive forms, communication composants, pipes, services, etc.), avec 5 **QCM** et 5 **exercices de code**.

---

### 🧠 QCM (1 à 5)

**1.** Que retourne cette expression dans un template Angular ?

```ts
{{ null ?? 'default' }}
```

A. `null`
B. `undefined`
C. `'default'`
D. Une erreur

---

**2.** Lequel de ces imports est requis pour utiliser `*ngIf` dans un composant standalone ?
A. `ReactiveFormsModule`
B. `NgIf`
C. `CommonModule`
D. `NgForOf`

---

**3.** Dans un formulaire réactif, à quoi sert `updateOn: 'blur'` ?
A. À valider uniquement après soumission
B. À déclencher les changements lors du blur
C. À bloquer la mise à jour du champ
D. À empêcher la validation

---

**4.** Quel décorateur est nécessaire pour qu’un champ d’un service soit lisible mais pas modifiable directement ?
A. `@Readonly()`
B. `private`
C. `readonly`
D. `@Injectable()`

---

**5.** Quel est l’objectif d’un resolver Angular ?
A. Gérer les erreurs de navigation
B. Précharger les données avant d’afficher une route
C. Déclencher un `CanActivate`
D. Gérer la session utilisateur

---

### 🧪 Exercices Code (6 à 10)

---

**6.**
Créer un composant `hello-user` qui prend un `@Input() name` et affiche :

```
Hello, [NAME]!
```

Si `name` est vide, afficher à la place :

```
Hello, anonymous!
```

---

**7.**
Créer un `color-box` avec une couleur passée en `@Input()` (ex: `red`, `green`) qui change dynamiquement la couleur de fond du `div`.

💡 Bonus : utiliser `[style.backgroundColor]`

---

**8.**
Créer un pipe `truncate` qui coupe un texte à N caractères et ajoute "..." s’il est trop long.

Exemple :

```html
<p>{{ 'Hello Angular world' | truncate:10 }}</p>
<!-- affiche : Hello Angu... -->
```

---

**9.**
Créer un service `ThemeService` avec une méthode `toggleTheme()` qui alterne entre `'light'` et `'dark'`.

Le thème actuel doit être observable via une méthode `getTheme$() : Observable<string>`.

---

**10.**
Créer un formulaire réactif `EmailFormComponent` avec un champ `email` requis et un bouton `Envoyer`.
Lors du submit, afficher l’email saisi dans la console et réinitialiser le champ.

---

Quand tu auras fini, donne-moi tes 5 réponses QCM + les 5 exos de code, et je corrigerai avec des feedbacks + notes comme d’hab 🧩
Tu veux que je te mette les fichiers `.html`/`.ts` à remplir pour chaque exo comme la dernière fois ?
