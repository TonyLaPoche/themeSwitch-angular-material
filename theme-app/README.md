# 🎨 Angular Theme Magic with Angular Material 🧙‍♂️

Bienvenue dans Theme-App, le repo le plus stylé du monde Angular ! Ici, nous allons apprendre à jongler avec les thèmes comme un pro, grâce à Angular et Angular Material. Accroche-toi bien, ça va être fun ! 😄

## 🛠️ Étape 1 : Cloner le repository

D'abord, on commence par cloner ce magnifique repo. Parce que tout commence par un clone, non ?

```bash copy
git clone https://github.com/ton-utilisateur/theme-app.git
```

Ensuite, déplacez-vous dans le répertoire fraîchement cloné. On ne veut pas rester dehors, n'est-ce pas ?

```bash copy
cd ./theme-app
```

## 📦 Étape 2 : Installer les dépendances

Maintenant, il est temps de remplir notre app avec toutes ses dépendances. C'est comme garnir une pizza, mais pour les geeks.

## 📡 Étape 3 : Vérifier Angular

Assurez-vous d'avoir Angular installé dans votre environnement. Un petit `ng -v` vous le dira.

```bash copy
ng -v
```

## 🚀 Étape 4 : Lancer le serveur

C'est le moment de faire chauffer la machine et de lancer notre app. Le serveur va s'ouvrir automatiquement comme par magie !

```bash copy
ng serve --open
```

## 🎨 Étape 5 : Jouer avec les thèmes

Maintenant, amusez-vous en cliquant sur le bouton "Light" ou "Dark" dans le header pour voir les thèmes changer. Oui, c'est aussi simple que ça !

## 🔍 Étape 6 : Analyser le comportement des thèmes

Pour les plus curieux (et on sait que vous l'êtes 😉), ouvrez la console de votre navigateur et observez ce qui se passe dans le <head> du HTML lorsque vous cliquez sur les boutons de thème. Vous allez découvrir que...

### 🕵️‍♂️ Résultat :
Un fichier link stylesheet change dynamiquement grâce au lazyloading ! C'est super efficace et pertinent pour gérer plusieurs thèmes. 🎉

## 🎉🧩 Analysons le code

### 🗂️ Le fichier angular.json

Dans `angular.json`, nous avons une section sans l'attribut `styles` :

```bash copy
"styles": [
  "src/styles.scss",
  {
    "input": "src/sass/themes/_dark-theme.scss",
    "bundleName": "dark-theme",
    "inject": false
  },
  {
    "input": "src/sass/themes/_light-theme.scss",
    "bundleName": "light-theme",
    "inject": false
  }
]
```

#### 🤓 Que se passe-t-il ici ?
- **"src/styles.scss"** : Le fichier de styles global de l'application.
- **"input"** : Le chemin vers les fichiers de thème.
- **"bundleName"** : Le nom du bundle pour chaque thème.
- **"inject"** : Indique à Angular de ne pas injecter ces styles automatiquement. On le fera nous-mêmes, comme des grands !

#### 📂 Le dossier Sass
Dans le dossier Sass, il y a un sous-dossier theme contenant 4 fichiers :

 - _**_brand-palettes.scss**_
 - _**_dark-theme.scss**_
 - _**_light-theme.scss**_
 - _**_utils.scss**_

#### 🤔 Pourquoi ces noms de fichiers commencent-ils par un tiret du bas \`_` ?

Le tiret du bas \`_` indique que ce sont des fichiers partiels. Ils ne seront pas compilés directement en CSS mais seront inclus dans d'autres fichiers Sass. C'est un peu comme des pièces de Lego, prêtes à être assemblées !

## 🖌️ Exploration des palettes de couleurs

### 🎨 Le fichier _**brand-palette.scss**_

Ici, nous avons deux palettes de couleurs contenant chacune 20 déclinaisons. Ces palettes sont utilisées pour le thème d'Angular Material. Préparez-vous à un festival de couleurs !

```scss copy
@use '@angular/material' as mat;

$brand-green-palette: (
  50: #e0f2e9,
  100: #b3e2c8,
  200: #80d0a4,
  300: #4dbe80,
  400: #26b065,
  500: #00954a,
  600: #008a44,
  700: #007c3c,
  800: #006f34,
  900: #005a27,
  contrast: (
    50: mat.get-color-from-palette(mat.$blue-gray-palette, 900),
    100: mat.get-color-from-palette(mat.$blue-gray-palette, 900),
    200: mat.get-color-from-palette(mat.$blue-gray-palette, 900),
    300: mat.get-color-from-palette(mat.$blue-gray-palette, 900),
    400: mat.get-color-from-palette(mat.$blue-gray-palette, 900),
    500: white,
    600: white,
    700: white,
    800: white,
    900: white,
  )
);

$brand-brown-palette: (
  50: #f4e4e1,
  100: #e2bcb5,
  200: #cf9286,
  300: #bb6957,
  400: #aa4934,
  500: #99290b,
  600: #8a2409,
  700: #781e07,
  800: #671906,
  900: #4b1303,
  contrast: (
    50: mat.get-color-from-palette(mat.$blue-gray-palette, 900),
    100: mat.get-color-from-palette(mat.$blue-gray-palette, 900),
    200: mat.get-color-from-palette(mat.$blue-gray-palette, 900),
    300: mat.get-color-from-palette(mat.$blue-gray-palette, 900),
    400: mat.get-color-from-palette(mat.$blue-gray-palette, 900),
    500: white,
    600: white,
    700: white,
    800: white,
    900: white,
  )
);
```

### 🌒 Le fichier dark-theme.scss
Ce fichier implémente le thème sombre. Préparez-vous à entrer dans le côté obscur !

```scss copy
@use '@angular/material' as mat;
@use './brand-palette';
@use "./utils";

@include mat.core();

$theme-color-config: (
  primary: mat.define-palette(brand-palette.$brand-brown-palette, 700, 400, 900),
  accent: mat.define-palette(brand-palette.$brand-green-palette, 700, 400, 900),
);

$brand-theme: mat.define-dark-theme(utils.with-core-config($theme-color-config));

html {
  @include mat.all-component-themes($brand-theme);
}
```

### 🌞 Le fichier light-theme.scss

Et voici le thème clair, pour ceux qui préfèrent la lumière !
```scss copy
@use '@angular/material' as mat;
@use './brand-palette';
@use "./utils";

$theme-color-config: (
        primary: mat.define-palette(brand-palette.$brand-green-palette, 700, 400, 900),
        accent: mat.define-palette(brand-palette.$brand-brown-palette, 700, 400, 900),
);

$brand-theme: mat.define-light-theme(utils.with-core-config($theme-color-config));

html {
  @include mat.all-component-themes($brand-theme);
}
```

### 🛠️ Le fichier utils.scss

Ce fichier contient des méthodes utiles pour notre configuration de thème. C'est le héros méconnu de notre app !

```scss copy
@use '@angular/material' as mat;
@use 'sass:map';

@function with-core-config($color-config) {
  @return (
          color: $color-config,
          typography: mat.define-typography-config(
                  $font-family: 'Roboto',
          ),
          density: 0
  );
}

@function patch-color-config($theme, $colors-to-patch: ()) {
  @return map.deep-merge($theme, (
          color: $colors-to-patch
  ));
}
```
#### 🧐 Explications détaillées :
- **with-core-config :** Cette fonction crée une configuration de thème de base en incluant les couleurs, la typographie et la densité. C'est comme préparer une base solide avant de peindre une maison.
- **patch-color-config :** Cette fonction permet de fusionner les configurations de couleur personnalisées avec le thème existant. Parfait pour ajouter une touche finale sans tout casser !

## ⚙️ Le Service de Changement de Thème

Dans notre dossier app/core/services, vous trouverez un sous-dossier intitulé themes contenant le fichier switch-themes.service.ts. Ce service est le cerveau derrière le changement de thème dynamique. Voici le code en question :

```ts copy
import { Injectable } from '@angular/core';
import { fromEvent, map, merge, Observable, shareReplay, startWith, Subject, tap } from "rxjs";

export type Theme = 'light' | 'dark';
export type ThemeUrl = `${Theme}-theme.css`;

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  #preferenceQuery = matchMedia('(prefers-color-scheme: light)');

  #themeSwitcher$ = new Subject<Theme>();
  #userEnvThemePreference = fromEvent<MediaQueryList>(this.#preferenceQuery, 'change').pipe(
    startWith(this.#preferenceQuery),
    map(resolvePreferredTheme),
  );

  theme$: Observable<Theme> = merge(this.#userEnvThemePreference, this.#themeSwitcher$).pipe(
    tap(theme => loadTheme(getThemeLinkElement(), theme)),
    shareReplay()
  );

  switchTheme(theme: Theme): void {
    localStorage.setItem('theme', theme);
    this.#themeSwitcher$.next(theme);
  }
}

function resolvePreferredTheme(query: MediaQueryList): Theme {
  const preferredTheme = localStorage.getItem('theme') as Theme;
  if (preferredTheme) {
    return preferredTheme;
  }
  return query.matches ? 'light' : 'dark';
}

function getThemeLinkElement() {
  const existingLinkEl = document.head.querySelector<HTMLLinkElement>('#app-theme');
  if (existingLinkEl) {
    return existingLinkEl;
  }
  const linkEl = document.createElement('link');
  linkEl.rel = 'stylesheet';
  linkEl.id = 'app-theme';
  document.head.querySelector('link[rel="stylesheet"]:last-of-type')?.after(linkEl);
  return linkEl;
}

function loadTheme(linkEl: HTMLLinkElement, theme: Theme) {
  linkEl.href = resolveThemeUrl(theme);
}

function resolveThemeUrl(theme: Theme): ThemeUrl {
  return `${theme}-theme.css`;
}

```

### 🕵️ Explication détaillée

#### Importations et Types :

 - Nous importons plusieurs fonctions et classes depuis `rxjs` pour gérer les événements et les observables.
 - Nous définissons deux types : `Theme`, qui peut être soit 'light' soit 'dark', et `ThemeUrl`, qui est une chaîne de caractères correspondant à `${Theme}-theme.css`.

#### Classe ThemesService :

 - **Injection** : Le service est injectable et sera disponible dans toute l'application `(providedIn: 'root')`.
 - **Préférence de l'utilisateur** : Utilise `matchMedia` pour vérifier la préférence de thème de l'utilisateur (clair ou sombre).
 - **Sujet de changement de thème** : Un `Subject` pour émettre des changements de thème.
 - **Préférence de thème environnemental de l'utilisateur** : Utilise `fromEvent` pour écouter les changements de préférence de thème et démarre avec la préférence actuelle.
 - **Observable `theme$`** : Combine les préférences de thème de l'utilisateur et les changements de thème émis par l'application, puis charge dynamiquement le thème approprié. `shareReplay` permet de réutiliser la dernière valeur émise pour les nouveaux abonnés.

#### Méthodes du Service :

 - **switchTheme** : Change le thème en stockant la préférence dans `localStorage` et en émettant le nouveau thème.
   
#### Fonctions Utilitaires :

 - **resolvePreferredTheme** : Détermine le thème préféré à partir de localStorage ou de la préférence du navigateur.
 - **getThemeLinkElement** : Récupère ou crée un élément `<link>` pour appliquer le thème.
 - **loadTheme** : Charge le fichier CSS correspondant au thème choisi.
 - **resolveThemeUrl** : Génère l'URL du fichier CSS du thème.

---

### **🎉 Ça y est ! Vous savez tout sur la magie du changement de thème dans notre application Angular. Grâce à ce service, vous pouvez basculer entre un thème clair et un thème sombre en toute simplicité.**
