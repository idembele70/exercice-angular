Parfait Ibrahim 😎 Voici ta **2e série spéciale Angular junior** : 5 QCM + 5 exos de code **(sans réponses, à toi de jouer ensuite)**.

---

## 🧠 Partie 1 : QCM

### QCM 1

**Quelles affirmations sont vraies à propos des modules Angular ?**
A. Un module peut contenir des composants, des directives et des pipes
B. Un composant ne peut appartenir qu’à un seul module
C. Les modules ne servent que pour le lazy loading
D. `CommonModule` est nécessaire pour utiliser `*ngIf` et `*ngFor`

---

### QCM 2

**Comment Angular détecte-t-il les changements de données ?**
A. En utilisant un polling régulier
B. Grâce au système de Zone.js
C. Via une boucle `setInterval()`
D. Par l'utilisation d'observables uniquement

---

### QCM 3

**À quoi sert `ngOnDestroy()` ?**
A. À initialiser un composant
B. À nettoyer les abonnements ou timers
C. À rendre un service inutilisable
D. À supprimer un élément du DOM

---

### QCM 4

**Quelle syntaxe est correcte pour lier une propriété dans le HTML d’un composant ?**
A. `{ title }`
B. `{{ title }}`
C. `[title]`
D. `*title`

---

### QCM 5

**Quelle instruction permet d’effectuer une requête HTTP dans un service Angular ?**
A. `HttpClientModule.get()`
B. `HttpService.fetch()`
C. `HttpClient.get()`
D. `this.http.fetch()`

---

## 💻 Partie 2 : Exercices de code

### Exo 1

**Crée une directive `appAutoFocus` qui applique automatiquement le focus sur l’élément à son affichage.**

---

### Exo 2

**Écris un composant `user-card` qui reçoit un objet `User` via `@Input()` et l’affiche (nom, email).**

---

### Exo 3

**Crée un pipe `truncate` qui raccourcit un texte à une longueur donnée (passée en paramètre).**

---

### Exo 4

**Crée un composant `login-form` avec deux champs (email, mot de passe), un bouton, et un event `@Output()` qui transmet les infos du formulaire au parent.**

---

### Exo 5

**Crée un `LoadingSpinnerComponent` (standalone) qui affiche une animation de chargement (du texte ou CSS simple), et affiche ce composant via `*ngIf="isLoading"` dans un autre composant.**

---

🟢 Prends ton temps pour répondre, ensuite je corrige comme tout à l’heure. Let’s go !

=============
CORRIGÉ
=============
Top boulot encore une fois, Ibrahim ! T'as bien enchaîné. Voici le **retour complet** sur cette 2e série — QCM + exos — avec corrections et suggestions.

---

## ✅ Partie 1 – QCM

1. **A et D** – ✅ Correct
   ✔️ Un module peut contenir des composants, directives, pipes
   ✔️ `CommonModule` est requis pour `*ngIf`, `*ngFor`

2. **B** – ✅ Correct
   ✔️ Angular utilise **Zone.js** pour détecter les changements de contexte.

3. **B** – ✅ Correct
   ✔️ `ngOnDestroy()` est parfait pour libérer des ressources (unsubscribe, timers...).

4. **B** – ✅ Correct
   ✔️ Interpolation avec `{{ title }}` est la bonne syntaxe.

5. **C** – ✅ Correct
   ✔️ La méthode correcte pour une requête HTTP est `HttpClient.get()`.

**🟢 Score : 5/5 – Parfait !**

---

## 💻 Partie 2 – Code

### Exo 1 – `appAutoFocus` ❌

Tu as bien commencé, mais :

* Tu as mis `@HostListener('')`, ce qui est vide et ne déclenchera rien.
* Ici, il ne faut **pas** utiliser `@HostListener`. Il suffit d’appeler `.focus()` dans `ngAfterViewInit()`.

Corrigé :

```ts
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
```

---

### Exo 2 – `UserCardComponent` ✅

✔️ Bien joué. L’objet `User` est bien reçu et affiché.

✅ Props :

* Interface bien utilisée
* `@Input()` bien placé

💡 Juste pense au `styleUrls` au lieu de `styleUrl`.

---

### Exo 3 – `TruncatePipe` ✅

✔️ Fonctionne comme attendu !

💡 Suggestion d'amélioration : `substring()` est plus lisible ici que `split().slice().join('')`.

```ts
return value.substring(0, length) + '...';
```

---

### Exo 4 – `LoginFormComponent` ✅

✔️ Très bon travail ! Architecture propre, usage correct de `NgForm`, `@Output()`, `EventEmitter`.

✅ Props :

* Formulaire réactif avec validation
* Emission vers le parent OK
* Code clair et typé

💡 Juste :

* `output` est importé mais inutilisé — tu peux le retirer.
* `styleUrl` → `styleUrls` (toujours ce détail Angular)

---

### Exo 5 – `LoadingSpinnerComponent` ✅

✔️ Fonctionne très bien, bon usage de `*ngIf`.

✅ Props :

* Composant isolé et réutilisable
* CSS loader simple mais efficace

💡 Tu peux même aller plus loin et utiliser `@Input() isLoading` pour le rendre plus configurable.

---

## 🧾 Bilan final

| Partie        | Résultat                                      |
| ------------- | --------------------------------------------- |
| QCM           | ✅ 5/5                                         |
| Code          | ✅ Très bon (juste 1 erreur dans la directive) |
| Niveau global | 🔥 Toujours prêt pour un entretien junior+    |

---

Si tu veux monter un peu en niveau (ex. Angular avec RxJS, services HTTP simulés, guards, reactive forms, etc.), je peux te proposer une **3e série un peu plus avancée** 👀

Tu veux ?
