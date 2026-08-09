# NortIT

Przenośna, statyczna strona firmowa zbudowana w Next.js 15, React, TypeScript, Tailwind CSS i Framer Motion.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Gotowa paczka na dowolny hosting

```bash
npm run build
```

Po zakończeniu gotowa strona znajduje się w katalogu `out`. Zawartość tego katalogu można przesłać przez FTP na zwykły hosting albo wdrożyć w Cloudflare Pages, GitHub Pages, Netlify lub Vercel.

## Zmiana domeny

Ustaw zmienną `NEXT_PUBLIC_SITE_URL` podczas budowania, na przykład:

```bash
NEXT_PUBLIC_SITE_URL=https://twojadomena.pl npm run build
```

Bez tej zmiennej używany jest tymczasowy adres `https://nortit.pl`. Numer telefonu, adres e-mail i pozostałe dane kontaktowe znajdują się w `lib/site.ts`.

## Formularz

Formularz wysyła zgłoszenia na adres `kontakt.nortit@gmail.com` przez usługę FormSubmit. Przy pierwszym testowym zgłoszeniu FormSubmit wyśle wiadomość aktywacyjną na ten adres. Kliknij link w wiadomości, aby uruchomić dostarczanie kolejnych zgłoszeń.

Po uruchomieniu własnej domeny formularz można przepiąć na firmową skrzynkę lub własny endpoint bez przebudowy strony.
