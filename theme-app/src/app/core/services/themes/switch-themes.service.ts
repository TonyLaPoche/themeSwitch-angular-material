import {Injectable} from '@angular/core';
import {fromEvent, map, merge, Observable, shareReplay, startWith, Subject, tap} from "rxjs";

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
