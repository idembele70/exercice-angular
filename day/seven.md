Parfait ! Voici un **nouveau set** Angular **niveau junior++++** → tu touches presque le niveau intermédiaire.
Toujours 5 QCM + 5 exos de code, avec des cas plus réalistes : accès au DOM, gestion du cycle de vie, flux RxJS combinés, modules standalone + route, etc.

---

## 🧠 QCM (1 à 5) – Junior++++

**1.** Quel est le rôle de `ChangeDetectionStrategy.OnPush` dans un composant Angular ?

A. Il active manuellement la détection de changements
B. Il ne déclenche la détection que sur `@Input()` modifié par référence ou événement
C. Il empêche les événements de DOM de déclencher la détection
D. Il force le composant à être recalculé à chaque détection de changement

---

**2.** Dans quel cas `Renderer2` est-il préférable à `ElementRef.nativeElement` pour manipuler le DOM ?

A. Pour modifier le DOM dans une app web uniquement
B. Pour interagir directement avec le DOM du navigateur
C. Pour garantir la compatibilité avec des plateformes comme NativeScript ou SSR
D. Pour ajouter des styles inline

---

**3.** Que renvoie l’opérateur `combineLatest([a$, b$])` dans RxJS ?

A. Le dernier élément émis par chaque observable une seule fois
B. Tous les éléments émis par les deux observables en liste
C. Un tableau des dernières valeurs de chaque observable dès que l’un d’eux émet
D. Une valeur uniquement quand les deux observables complètent

---

**4.** À quoi sert la propriété `pathMatch: 'full'` dans un objet `Route` ?

A. À rediriger toutes les routes partiellement correspondantes
B. À matcher seulement l’URL complète du chemin
C. À éviter les erreurs 404
D. À matcher toutes les routes enfants du chemin courant

---

**5.** Laquelle des affirmations est **fausse** concernant `ngOnDestroy()` ?

A. Il est appelé quand le composant est détruit
B. C’est le bon endroit pour se désabonner des observables
C. Il est appelé à chaque fois que le composant reçoit un nouvel `@Input()`
D. Il peut être utilisé pour nettoyer des timers ou listeners DOM

---

## 💻 Exercices Code (6 à 10)

---

**6. Composant `search-box` avec `debounceTime`**
Créer un composant `SearchBoxComponent` qui :

* contient un champ texte `<input>`
* émet la valeur entrée après 500ms sans saisie (`debounceTime(500)`)
* expose un `@Output() search = new EventEmitter<string>()`

---

**7. Directive `appAutoFocus`**
Créer une directive `appAutoFocus` qui applique automatiquement le focus à l’élément dès qu’il est affiché.
Exemple :

```html
<input appAutoFocus>
```

---

**8. Composant avec accès DOM via `ViewChild`**
Créer un composant `ScrollToTopComponent` avec :

* un `div` de contenu scrollable
* un bouton "Scroll to Top" qui fait un scroll vers le haut de la `div`

---

**9. Pipe `formatDateFrench`**
Créer un pipe standalone `formatDateFrench` qui formate une date en `"jj/mm/aaaa"`
Exemple : `2025-07-29` → `29/07/2025`

---

**10. Routing avec composant standalone**
Configurer une route dans un app Angular qui charge un composant `DashboardComponent` standalone, uniquement quand l’URL est `/dashboard`.

---

👉 Dis-moi tes réponses pour les QCM + colle-moi ton code pour les exos (6 à 10)
Je corrigerai tout avec feedback + note comme avant 💪

=============
CORRIGÉ
=============
Merci pour tes réponses ! Voici la **correction complète** avec **note, feedback et version “senior”** pour chaque partie.

---

## ✅ Correction QCM (1 à 5)

**1. D (ta réponse) → ❌ Mauvaise réponse**
✅ Réponse correcte : **B**
`ChangeDetectionStrategy.OnPush` signifie que la détection de changement ne s’exécute que si :

* un `@Input()` change par **référence**
* un **événement** déclenche le `detectChanges()`

---

**2. C → ✅ Bonne réponse**
👍 `Renderer2` est utilisé pour garantir une abstraction compatible avec les environnements non-DOM (SSR, NativeScript…).

---

**3. C → ✅ Bonne réponse**
💡 `combineLatest([a$, b$])` émet un tableau `[a, b]` dès que chaque observable a émis **au moins une fois**, puis à chaque nouvelle émission.

---

**4. B → ✅ Bonne réponse**
✅ `pathMatch: 'full'` est nécessaire dans les redirections pour matcher **l’URL entière** (souvent dans `{ path: '', redirectTo: 'home', pathMatch: 'full' }`).

---

**5. C → ✅ Bonne réponse**
❗️`ngOnDestroy()` n’est **pas appelé** à chaque changement d’`@Input()`. Il ne s’exécute qu’une fois, juste avant que le composant soit retiré du DOM.

---

🧠 **Note QCM : 4 / 5**
Bravo ! Très bon niveau. Tu as bien cerné les subtilités Angular, attention à ne pas surévaluer `ngOnDestroy`.

---

## 🔧 Correction des Exercices de Code (6 à 10)

---

### **6. SearchBoxComponent**

🟢 Ton code fonctionne et est propre. Utilisation parfaite de `FormControl`, `debounceTime` et `EventEmitter`.

✅ **Note : 10 / 10**
💡 *Version senior (refactoring)* :

```ts
@Output() readonly search = new EventEmitter<string>();

private readonly valueChanges$ = this.searchControl.valueChanges.pipe(
  debounceTime(500),
  distinctUntilChanged()
);

ngOnInit() {
  this.valueChanges$.subscribe(value => this.search.emit(value));
}
```

> ✅ On sépare les flux pour plus de lisibilité, bonne pratique !

---

### **7. appAutoFocus directive**

🟢 Code correct. Utilisation parfaite de `ElementRef` et `AfterViewInit`.

✅ **Note : 10 / 10**
💡 *Version senior* : ajoute une vérification de plateforme pour SSR :

```ts
constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

ngAfterViewInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    this.el.nativeElement.focus();
  }
}
```

---

### **8. ScrollToTopComponent**

🟢 Fonctionnel ! Utilisation de `ViewChild` propre.

✅ **Note : 10 / 10**
💡 *Version senior* : pense à utiliser `ElementRef<HTMLElement>` pour plus de clarté :

```ts
@ViewChild('scrollable') private readonly scrollable!: ElementRef<HTMLElement>;
```

---

### **9. Pipe `formatDateFrench`**

🟢 Pipe très bien fait, simple et clair.

✅ **Note : 10 / 10**
💡 *Version senior avec sécurité* :

```ts
if (!(value instanceof Date)) return value;
return value.toLocaleDateString('fr-FR');
```

> Cela évite un crash si `value` n’est pas un objet `Date`.

---

### **10. Routing standalone**

🟢 OK, le composant est bien déclaré standalone, importé dynamiquement, et la route est correcte.

✅ **Note : 10 / 10**

💡 *Ajout possible : lazy loading via import()*

```ts
{
  path: 'dashboard',
  loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
}
```

---

## 🎯 Bilan final

| QCM | Exos  | Total     |
| --- | ----- | --------- |
| 4/5 | 50/50 | **54/55** |

🔥 **EXCELLENT niveau junior++++ confirmé**
Tu commences à avoir de vrais réflexes de développeur Angular intermédiaire (RxJS, accès DOM, composants autonomes, bonnes pratiques de routing).

---

Souhaites-tu une série **niveau intermédiaire (junior+++ → intermédiaire)** pour commencer à t’évaluer à l'étape suivante ?
