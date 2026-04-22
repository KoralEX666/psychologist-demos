# 🚀 DEPLOY COMMANDS - Kopiuj & Wklej

---

## 📦 KROK 1: Sprawdź Node.js

```bash
node --version && npm --version
```

**Jeśli błąd** → zainstaluj:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs
```

---

## 🔧 KROK 2: Zainstaluj Vercel CLI

```bash
npm install -g vercel
```

---

## 🔐 KROK 3: Zaloguj się do Vercel

```bash
vercel login
```

*Wybierz "Email" lub "GitHub" w promptcie*

---

## 🚀 KROK 4: Deploy

```bash
cd /root/.openclaw/workspace/psychologist-demos && vercel --prod
```

*Pierwszy deploy:*
- `Set up and deploy?` → **Y**
- `Which scope?` → **Enter** (domyślny)
- `Link to existing project?` → **N**
- `Project name?` → **psychologist-demos** (Enter)
- `In which directory is your code?` → **.** (Enter)
- `Want to override settings?` → **N**

---

## 📋 KROK 5: Zapisz URL

Po deployu zobaczysz:
```
🔍  Inspect: https://vercel.com/...
✅  Production: https://psychologist-demos-xxxx.vercel.app
```

**Zapisz ten URL!** 👆

---

## 🎯 GOTOWE LINKI DO LEADÓW

Podstaw URL z kroku 5:

```
https://psychologist-demos-xxxx.vercel.app/demo/urszula-slawska-gestalt
https://psychologist-demos-xxxx.vercel.app/demo/psychoterapia-lakeside
https://psychologist-demos-xxxx.vercel.app/demo/karolina-lipinska-miekki-fotel
```

---

## 📱 WYŚLIJ SMS (od razu po deployu)

**Do Urszuli Ślawskiej (601 289 565):**

```
Dzień dobry! Nazywam się [IMIĘ] i jestem studentem psychologii.

Stworzę darmową stronę www dla Pani gabinetu w zamian za podpisanie kwitów od praktyk studenckich.

Przygotowałem personalizowane DEMO pokazujące jak mogłaby wyglądać strona:
https://psychologist-demos-xxxx.vercel.app/demo/urszula-slawska-gestalt

Czy byłaby Pani zainteresowana taką współpracą?

Pozdrawiam serdecznie!
[IMIĘ]
```

---

## 📧 WYŚLIJ EMAIL

**Do Lakeside (gabinet@psychoterapia-lakeside.pl):**

Temat: `Strona www dla Psychoterapia Lakeside - propozycja współpracy`

```
Dzień dobry,

Nazywam się [IMIĘ] i jestem studentem psychologii.

Piszę z nietypową propozycją:

🎁 Darmowa strona www dla Pani gabinetu w zamian za podpisanie kwitów od praktyk studenckich.

Przygotowałem personalizowane DEMO pokazujące jak mogłaby wyglądać strona:
👉 https://psychologist-demos-xxxx.vercel.app/demo/psychoterapia-lakeside

Co otrzymują Państwo:
✅ Profesjonalna strona landing page
✅ Formularz kontaktowy
✅ Sekcja "O mnie" + oferta
✅ Responsywność (mobile/desktop)
✅ Hosting + domena (pierwszy rok)

W zamian potrzebuję:
📄 Podpisania kwitów od praktyk (ok. [X] godzin)

Czy byliby Państwo zainteresowani taką współpracą?

Pozdrawiam serdecznie,
[IMIĘ]
[Twój telefon]
```

---

## 🔄 REDEPLOY (jak coś zmienisz)

```bash
cd /root/.openclaw/workspace/psychologist-demos && vercel --prod
```

---

## 📊 PODGLĄD LISTY WSZYSTKICH LEADÓW

```
https://psychologist-demos-xxxx.vercel.app/
```

---

**Powodzenia! 🎯**
