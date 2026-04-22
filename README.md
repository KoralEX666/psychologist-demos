# 🎯 Psychologist Demo System

Personalizowane strony demo dla psychologów z Warszawy.

## 🚀 Quick Deploy

### Opcja 1: Vercel CLI (Najszybsza)

```bash
# Zainstaluj Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd /root/.openclaw/workspace/psychologist-demos
vercel --prod
```

### Opcja 2: Vercel Dashboard

1. Zaloguj się na [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import z GitHub (utwórz repo i pushnij ten folder)
4. Deploy automatyczny

### Opcja 3: GitHub + Vercel

```bash
# Inicjalizuj git
cd /root/.openclaw/workspace/psychologist-demos
git init
git add .
git commit -m "Initial commit - psychologist demos"

# Push do GitHub (utwórz repo first)
git remote add origin https://github.com/YOUR_USERNAME/psycholog-demos.git
git push -u origin main

# Podłącz Vercel do repo
```

---

## 📊 Struktura

```
psychologist-demos/
├── app/
│   ├── page.tsx              # Landing page z listą leadów
│   ├── layout.tsx            # Root layout
│   └── demo/[leadId]/
│       └── page.tsx          # Dynamiczna strona demo
├── lib/
│   └── templates.ts          # Konfiguracja stylów
├── leads-db.json             # Baza danych leadów
├── package.json
├── next.config.js
└── vercel.json
```

---

## 🎨 Style

### Warm & Safe
- Kolory: beże, zielenie, ciepłe brązy
- Font: Georgia (serif)
- Tone: "Bezpieczna przestrzeń"
- Target: 40+, terapia długoterminowa

### Modern Clean
- Kolory: biel, szarości, niebieski
- Font: Inter (sans-serif)
- Tone: "Profesjonalna pomoc"
- Target: 25-40, terapia krótkoterminowa

---

## 📋 Leads Database

Plik: `leads-db.json`

```json
{
  "leads": [
    {
      "id": "unique-slug",
      "name": "Imię Nazwisko",
      "businessName": "Nazwa gabinetu",
      "phone": "+48 XXX XXX XXX",
      "email": "email@example.com",
      "address": "Ulica, Miasto",
      "district": "Dzielnica",
      "reviews": 34,
      "website": "https://...",
      "style": "warm-safe",
      "priority": 1,
      "notes": "..."
    }
  ]
}
```

---

## 🔗 Demo URLs

Po deployu każdy lead ma unikalny link:

```
https://psycholog-demos.vercel.app/demo/[lead-id]

Przykłady:
- https://psycholog-demos.vercel.app/demo/urszula-slawska-gestalt
- https://psycholog-demos.vercel.app/demo/psychoterapia-lakeside
- https://psycholog-demos.vercel.app/demo/karolina-lipinska-miekki-fotel
```

---

## 📱 Outreach Template

### SMS
```
Dzień dobry! Jestem studentem psychologii.
Stworzę darmową stronę www w zamian za podpisanie kwitów od praktyk.

Przykładowa strona (DEMO dla Pani gabinetu):
https://psycholog-demos.vercel.app/demo/[lead-id]

Zainteresuje Pani? Pozdrawiam!
```

### Email
```
Temat: Strona www dla [Business Name] - propozycja współpracy

Dzień dobry,

Stworzę darmową stronę www dla Pani gabinetu w zamian za podpisanie kwitów od praktyk studenckich.

Przygotowałem personalizowane DEMO pokazujące jak mogłaby wyglądać strona:
👉 https://psycholog-demos.vercel.app/demo/[lead-id]

Co otrzymują Państwo:
✅ Profesjonalna strona landing page
✅ Formularz kontaktowy
✅ Sekcja "O mnie" + oferta
✅ Responsywność (mobile/desktop)
✅ Hosting + domena (pierwszy rok)

W zamian potrzebuję:
📄 Podpisania kwitów od praktyk (ok. [X] godzin)

Czy byliby Państwo zainteresowani taką współpracą?

Pozdrawiam,
[Imię]
[Telefon]
```

---

## 🛠️ Development

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build

# Start production
npm start
```

---

## 📊 Stats

- Total Leads: 30
- HOT (Priority 1): 3
- WARM (Priority 2): 7
- COLD (Priority 3): 20

Styles:
- Warm & Safe: 15
- Modern Clean: 15

---

*Built with Next.js + Vercel* 🚀
