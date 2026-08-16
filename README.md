# NortIT

Statyczna strona firmowa NortIT zbudowana w Next.js 15, React 19, TypeScript, Tailwind CSS i GSAP.

## Uruchomienie lokalne

Projekt korzysta z pnpm:

```bash
pnpm install
pnpm dev
```

Strona będzie dostępna pod adresem `http://localhost:3000`.

## Weryfikacja i budowanie

```bash
pnpm exec tsc --noEmit
pnpm build
```

Gotowa statyczna wersja trafia do katalogu `out/`.

## Publikacja

Zmiany wypchnięte na gałąź `main` są automatycznie budowane i publikowane przez GitHub Actions w GitHub Pages. Konfiguracja wdrożenia znajduje się w `.github/workflows/deploy-pages.yml`.

Docelowy adres strony to `https://www.nortit.pl`. Wspólne dane firmy, takie jak telefon, e-mail i obszar działania, znajdują się w `lib/site.ts`.

## Formularz kontaktowy

Formularz korzysta z EmailJS i po prawidłowym wysłaniu przekierowuje użytkownika na `/dziekujemy/`. Identyfikatory usługi i szablonów znajdują się w `components/contact-form.tsx`.

Po każdej zmianie konfiguracji EmailJS należy sprawdzić:

- wysłanie wiadomości ze strony,
- dostarczenie zgłoszenia na skrzynkę NortIT,
- automatyczne potwierdzenie dla klienta,
- ograniczenie użycia formularza do domeny `nortit.pl`,
- działanie zabezpieczeń antyspamowych.

## Najważniejsze katalogi

- `app/` — podstrony, metadane, mapa strony i style,
- `components/` — aktywne komponenty interfejsu,
- `lib/` — wspólne dane strony,
- `public/` — obrazy używane przez stronę,
- `assets/README.md` — manifest wygenerowanych grafik.
