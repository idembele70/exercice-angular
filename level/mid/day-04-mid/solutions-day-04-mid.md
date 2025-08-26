Parfait, t’as joué le jeu 👌 Voyons les corrections :

---

## ✅ Corrections QCM

**1. Dans Angular, quand utiliser `ChangeDetectionStrategy.OnPush` ?**
👉 Bonne réponse : **D (A et C)**

* A : ✅ Oui, OnPush ne déclenche la détection que si les `@Input` changent ou via des événements.
* B : ❌ Faux, `setTimeout` ou `setInterval` seuls ne déclenchent pas OnPush.
* C : ✅ Exact, ça améliore les perfs car Angular ne scanne pas tout le composant à chaque cycle.
  ➡️ **Ta réponse : D → Correct** 🎯

---

**2. Que fait `AsyncPipe` ?**
👉 Bonne réponse : **A**

* A : ✅ Il s’abonne/désabonne automatiquement aux `Observable` et `Promise`.
* B : ❌ Faux, il ne transforme pas un `Subject`.
* C : ❌ Faux, il ne convertit pas en tableau.
* D : ❌ Faux, il ne propage pas les erreurs.
  ➡️ **Ta réponse : A → Correct** 🎯

---

**3. Différence entre `RouterModule.forRoot()` et `RouterModule.forChild()` ?**
👉 Bonne réponse : **D (A et B)**

* A : ✅ `forRoot()` configure le router principal (une seule fois dans l’app).
* B : ✅ `forChild()` est utilisé dans les modules enfants (feature modules, lazy loading).
* C : ❌ Faux, ils ne sont pas identiques.
  ➡️ **Ta réponse : D → Correct** 🎯

---

**4. Différence entre `FormControl` et `FormBuilder` ?**
👉 Bonne réponse : **D (A et B)**

* A : ✅ `FormControl` = représente un champ unique avec ses validators.
* B : ✅ `FormBuilder` = factory qui simplifie la création de `FormGroup` / `FormArray`.
* C : ❌ Faux, FormBuilder n’a pas vocation à remplacer FormControl.
  ➡️ **Ta réponse : D → Correct** 🎯

---

**5. Différence `BehaviorSubject` vs `ReplaySubject` ?**
👉 Bonne réponse : **D (A et B)**

* A : ✅ `BehaviorSubject` garde et émet la dernière valeur aux nouveaux abonnés.
* B : ✅ `ReplaySubject` rejoue un nombre configurable de valeurs passées.
* C : ❌ Faux, BehaviorSubject **doit** avoir une valeur initiale.
  ➡️ **Ta réponse : A, B → Correct** 🎯

---

## 📊 Résultat

* 1. ✅
* 2. ✅
* 3. ✅
* 4. ✅
* 5. ✅

👉 **Score : 5/5 → 100%** 🏆🔥

Tu as géré à fond 💯.
Tu veux que je te propose maintenant la **correction détaillée des exercices de code (6 → 10)**, avec la version "senior" en bonus comme on fait d’hab ?

=====
CODE
=====
Super boulot 👏 tu as fait les exos sérieusement ! Je vais corriger et donner du feedback point par point (junior++ vs version plus "senior").

---

## ✅ Correction & Feedback

### **Exercice 6 – UserService**

👉 Ton code est bon 👍

* ✅ Tu utilises `inject(HttpClient)` (nouvelle API Angular → top)
* ✅ `new URL(...).href` pour construire l’URL = clean.
* ❌ `catchError` renvoie `throw err` → ce n’est pas la meilleure pratique. Il faut renvoyer `throwError(() => err)` pour être RxJS compliant.

💡 **Version améliorée :**

```ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../../../models/mid/day-04/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/';
  private readonly http = inject(HttpClient);

  getUsers$(): Observable<User[]> {
    const url = new URL('users', this.baseUrl).href;
    return this.http.get<User[]>(url).pipe(
      catchError(err => throwError(() => err))
    );
  }
}
```

---

### **Exercice 7 – Auth Guard & AuthService**

👉 Ton code est propre ✅

* ✅ Guard avec `inject(AuthService)` et `inject(Router)` → moderne.
* ✅ SessionStorage bien géré.
* ❌ Attention : `router.navigate(['login'])` dans un guard peut créer une boucle si mal configuré. Souvent on préfère `return router.parseUrl('/login')`.

💡 **Guard amélioré :**

```ts
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn()
    ? true
    : router.parseUrl('/login');
};
```

---

### **Exercice 8 – Directive Highlight**

👉 Nickel 👌

* ✅ Tu utilises `Renderer2` → safe et Angular-friendly.
* ⚠️ Par contre, `ngAfterViewInit` est inutile, tu peux appliquer le style dès `ngOnInit` ou dans `ngOnChanges` si la couleur change dynamiquement.

💡 **Version optimisée :**

```ts
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input({ required: true }) appHighlight = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.appHighlight);
  }
}
```

---

### **Exercice 9 – FormArray (TodoForm)**

👉 Très bon niveau 👏

* ✅ Tu utilises `FormArray` + `FormBuilder`.
* ✅ Validation inline.
* ⚠️ Petite erreur : `styleUrl` → doit être `styleUrls`.

💡 **Amélioration :**

```ts
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  constructor(private fb: FormBuilder) {}

  readonly form = this.fb.nonNullable.group({
    tasks: this.fb.array([])
  });

  get tasks(): FormArray {
    return this.form.get('tasks') as FormArray;
  }

  addTask() {
    const taskForm = this.fb.nonNullable.group({
      task: ['', [Validators.required, Validators.minLength(3)]]
    });
    this.tasks.push(taskForm);
  }
}
```

---

### **Exercice 10 – Pipe customFilter**

👉 Bien pensé 👏

* ✅ Tu gères la recherche insensible à la casse.
* ❌ Signature inversée → `transform(users: User[], value: string)` est plus logique (Angular applique d’abord la collection).
* ❌ Tu crées une variable `filtered` inutile.

💡 **Version optimisée :**

```ts
@Pipe({ name: 'customFilter', pure: true })
export class CustomFilterPipe implements PipeTransform {
  transform(users: User[], search: string): User[] {
    if (!users?.length) return [];
    if (!search) return users;

    const term = search.toLowerCase();
    return users.filter(user =>
      `${user.id} ${user.name.toLowerCase()}`.includes(term)
    );
  }
}
```

---

## 📊 Bilan général

* Exo 6 : 8.5/10 (RxJS `throwError`)
* Exo 7 : 9/10 (guard → `parseUrl`)
* Exo 8 : 9/10 (ngOnChanges mieux que AfterViewInit)
* Exo 9 : 9.5/10 (styleUrl typo)
* Exo 10 : 8/10 (signature Pipe + petit refactor)

👉 **Score global : \~ 9/10 → très bon niveau intermédiaire déjà 🚀**

---

Veux-tu que je t’écrive la **correction HTML** pour l’exo 9 (todo form) en mode plus “senior”, avec affichage des erreurs et un bouton “remove task” ?

