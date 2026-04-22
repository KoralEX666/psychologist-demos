# 🚀 DEPLOY INSTRUCTIONS - Psychologist Demo System

## ✅ FILES READY

Wszystkie pliki są gotowe w:
```
/root/.openclaw/workspace/psychologist-demos/
```

## 📋 KROKI DEPLOYU (5 minut)

### Krok 1: Zainstaluj Node.js (jeśli nie ma)

```bash
node --version
# Jeśli brak: curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs
```

### Krok 2: Zainstaluj Vercel CLI

```bash
npm install -g vercel
```

### Krok 3: Zaloguj się do Vercel

```bash
vercel login
# Wybierz "Continue with Email" lub GitHub
```

### Krok 4: Deploy

```bash
cd /root/.openclaw/workspace/psychologist-demos
vercel --prod
```

### Krok 5: Zapisz URL

Po deployu dostaniesz URL typu:
```
https://psychologist-demos-xxxx.vercel.app
```

**Zapisz ten URL!** Będzie używany w outreachu.

---

## 🎯 GOTOWE LINKI DO OUTREACHU

Po deployu każdy lead ma swój link:

| Lead | Demo URL |
|------|----------|
| Urszula Ślawska | `.../demo/urszula-slawska-gestalt` |
| Psychoterapia Lakeside | `.../demo/psychoterapia-lakeside` |
| Karolina Lipińska | `.../demo/karolina-lipinska-miekki-fotel` |
| Poradnia Synergia | `.../demo/poradnia-synergia` |
| ... | ... |

Pełna lista na: `.../` (landing page)

---

## 📱 OUTREACH - GOTOWCE

### SMS do Urszuli Ślawskiej (601 289 565)

```
Dzień dobry! Nazywam się [IMIĘ] i jestem studentem psychologii.

Stworzę darmową stronę www dla Pani gabinetu w zamian za podpisanie kwitów od praktyk studenckich.

Przygotowałem personalizowane DEMO pokazujące jak mogłaby wyglądać strona:
[DEMO_URL]/demo/urszula-slawska-gestalt

Czy byłaby Pani zainteresowana taką współpracą?

Pozdrawiam serdecznie!
[IMIĘ]
```

### Email do Lakeside (gabinet@psychoterapia-lakeside.pl)

```
Temat: Strona www dla Psychoterapia Lakeside - propozycja współpracy

Dzień dobry,

Nazywam się [IMIĘ] i jestem studentem psychologii.

Piszę z nietypową propozycją:

🎁 Darmowa strona www dla Pani gabinetu w zamian za podpisanie kwitów od praktyk studenckich.

Przygotowałem personalizowane DEMO pokazujące jak mogłaby wyglądać strona:
👉 [DEMO_URL]/demo/psychoterapia-lakeside

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

## 🎨 STYLE DEMO

Każdy lead dostaje jeden z 2 stylów:

1. **Warm & Safe** - ciepły, bezpieczny (beże, zielenie)
2. **Modern Clean** - nowoczesny, czysty (biel, niebieski)

Styl jest przypisany w `leads-db.json` na podstawie typu gabinetu.

---

## 📊 TRACKING

Po wysłaniu wiadomości:

1. Zaznacz w `leads-db.json`: `"contacted": true`
2. Zapisz odpowiedź: `"response": "interested" | "not-interested" | "no-response"`
3. Follow-up po 3 dniach jeśli brak odpowiedzi

---

## 🔄 NEXT STEPS

1. ✅ Deploy na Vercel
2. ✅ Wyślij do TOP 3 (Urszula, Lakeside, Karolina)
3. ⏳ Czekaj na odpowiedzi (2-3 dni)
4. ⏳ Follow-up do nieodpowiadających
5. ⏳ Rozszerz na kolejnych 10 (Priority 2)

---

*Good luck! 🚀*
