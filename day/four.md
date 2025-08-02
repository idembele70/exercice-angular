Parfait Ibrahim 👨🏽‍💻 ! Voici **10 nouveaux exercices Angular niveau junior+++** comme demandé :

* **5 QCM** pour consolider les bases
* **5 exos de code** avec une montée progressive
* Tous notés de **1 à 10** (notation à la fin)

---

## 🧠 QCM (Exos 1 à 5)

### **Exo 1 – Interpolation Angular**

```ts
@Component({
  selector: 'app-hello',
  template: `<h1>Hello {{ name }}</h1>`
})
export class HelloComponent {
  name = 'Ibrahim';
}
```

**Question** : que s’affiche-t-il dans le navigateur ?

A. Hello
B. Hello {{ name }}
C. Hello Ibrahim
D. {{ name }}

---

### **Exo 2 – Directives structurelles**

**Quel est le rôle de `*ngIf` ?**

A. Répéter un élément plusieurs fois
B. Appliquer un style conditionnel
C. Afficher un élément si une condition est vraie
D. Modifier le DOM à la compilation

---

### **Exo 3 – Reactive FormControl**

Quel est le bon moyen d’écouter les changements d’un `FormControl` ?

A. `form.valueChanges.subscribe(...)`
B. `form.onChange(...)`
C. `form.changed.subscribe(...)`
D. `form.subscribe(...)`

---

### **Exo 4 – Dependency Injection**

Quelle est la façon Angular de récupérer un service dans un composant ?

A. `new MyService()`
B. `@Inject(MyService)`
C. En injectant via le constructeur
D. Avec `getService(MyService)`

---

### **Exo 5 – Routing**

À quoi sert `pathMatch: 'full'` dans une route vide ?

A. À faire matcher tous les chemins
B. À activer la route par défaut uniquement si l’URL est vide
C. À faire une redirection partielle
D. À utiliser `RouterLink` dynamiquement

---

## 🧑🏽‍💻 Exos Code (Exos 6 à 10)

### **Exo 6 – Créer un bouton avec compteur**

Créer un composant `ClickCounterComponent` qui affiche :

```
Clicked 0 times
```

Et chaque clic sur le bouton `+1` augmente le compteur.

---

### **Exo 7 – Input/Output simple**

Créer deux composants :

* `ParentComponent`
* `ChildComponent` qui reçoit un `@Input() title` et émet un `@Output() clicked`

Le parent affiche le titre reçu et affiche `"Clicked"` dans la console quand le bouton du child est cliqué.

---

### **Exo 8 – Reactive Form avec 1 champ**

Créer un composant `UsernameFormComponent` avec :

* Un champ `username`
* Une validation `required`
* Le bouton est désactivé si le champ est vide

---

### **Exo 9 – Pipe personnalisé**

Créer un `CapitalizePipe` qui transforme `"hello world"` en `"Hello World"`

---

### **Exo 10 – Service et injection**

Créer un `TimerService` qui expose un `BehaviorSubject<number>` pour suivre le temps écoulé.
Créer un composant qui s’abonne à ce timer et affiche la valeur mise à jour toutes les secondes.

---

## 📊 Notation (sur 10)

| Exercice | Type                | Note |
| -------- | ------------------- | ---- |
| QCM 1    | Facile              | 1    |
| QCM 2    | Facile              | 1    |
| QCM 3    | Moyen               | 2    |
| QCM 4    | Moyen               | 2    |
| QCM 5    | Moyen+              | 3    |
| Exo 6    | Facile              | 2    |
| Exo 7    | Moyen               | 3    |
| Exo 8    | Moyen               | 3    |
| Exo 9    | Moyen+              | 4    |
| Exo 10   | Dur (pour junior++) | 5    |

---

Si tu veux que je te corrige tes réponses ou que je te montre **la solution complète de l’exo que tu veux**, dis-moi juste le numéro 👇
