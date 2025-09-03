====
QCM
====
Super taf 💯 ! Tu es vraiment monté d’un cran en **niveau intermédiaire+++++++**.
Je te fais un retour détaillé :

---

## ✅ QCM

1. **A** → correct
2. **A** → correct
3. **A, B** → seul **B** est juste (partager via un service root). Avec A (`@Input`) tu ne partages qu’avec le parent.
4. **A** → correct
5. **A** → correct

👉 Résultat : **4/5** (bonne maîtrise mais attention à la subtilité du partage via `BehaviorSubject`).

---

=====
CODE
=====

## ✅ Code

### 6. RegisterForm + Validator

* Très bien géré 👍 : `FormArray`, bouton de suppression conditionnel, validator de password match.
* Petit + : dans ton `validators` au niveau du `FormGroup`, tu as mis `[Validators.required, passwordMatchValidator]`. `Validators.required` sur un `FormGroup` n’est pas nécessaire → il ne sera jamais "vide" (c’est un conteneur). Tu peux donc ne garder que `passwordMatchValidator`.
* Top d’avoir utilisé `updateOn: 'blur'`.

✔ Version senior : isoler ton `addEmailForm()` en méthode privée de factory (`createEmailForm()`) pour centraliser la logique.

---

### 7. PostService

* Bonne implémentation du **cache local** avec `BehaviorSubject`.
* ✅ Tu utilises bien `throwError(() => err)` (bonne pratique RxJS 7).
* Suggestion senior : retourner un `Observable` depuis `fetchPosts()` au lieu de `subscribe()` dedans → ça laisse au composant décider du moment de l’appel.

---

### 8. LoadingInterceptor

* ✅ Bonne gestion avec `tap`, `catchError`, et `finalize`.
* Astuce senior : plutôt que `console.log`, tu pourrais injecter un `LoadingService` qui expose un `BehaviorSubject<boolean>` → ça te permet d’afficher un vrai loader visuel.

---

### 9. roleGuard

* ✅ Bonne logique.
* Suggestion : `userService.isAdmin()` pourrait retourner un `boolean | Observable<boolean>`. Si ton rôle vient d’un backend async, tu pourrais rendre le guard **async** avec `return userService.hasRole$('admin')`.

---

### 10. CapitalizeAsyncPipe

* ✅ Bien vu l’utilisation de `map`.
* ⚠ Attention : `String.prototype.replaceAll(/./g, …)` n’accepte pas de callback. Ça fonctionne avec `String.prototype.replace()` mais pas `replaceAll`.
  👉 Version correcte :

```ts
return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
```

* Ton pipe reste nickel en structure, il suffit d’ajuster la logique de capitalisation.

---

## 🎯 Bilan

* QCM : **4/5** (erreur sur le partage du BehaviorSubject).
* Code : globalement **très solide**, avec quelques ajustements "senior" (simplification des validators, pas de `subscribe()` dans le service, correction du pipe).

👉 Score global : **Très bon niveau intermédiaire+++++++** ✅

---

Veux-tu que je te propose une **version "senior++" corrigée** pour tes exos 6 à 10 (avec factorisation, async guards, loading service, pipe simplifié) ?

