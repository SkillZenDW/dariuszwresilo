# Status projektu — dariuszwresilo.pl

Dokument dla kontynuacji pracy w nowej sesji Claude. Wklej użytkownikowi prośbę: "przeczytaj PROJECT_STATUS.md w folderze moja www i kontynuuj" albo po prostu podepnij ten folder — Claude odczyta go sam.

## Co to za projekt

Statyczna strona HTML/CSS/JS (bez frameworka) dla Dariusza Wresiło — psychologia/coaching ("Inżynieria Umysłu i Świadomości"). Zastępuje starą stronę WordPress na domenie **dariuszwresilo.pl**.

Working directory: `/Users/darek/projekt ebook/moja www/`

## Stack i deployment (DZIAŁAJĄCY, skonfigurowany)

- **Repo GitHub:** https://github.com/SkillZenDW/dariuszwresilo (branch `main`)
- **Hosting:** Netlify, podłączony do repo GitHub, auto-deploy przy każdym `git push` na `main` (~1-2 min)
- **Domena:** dariuszwresilo.pl — DNS przez Netlify DNS (nameservery `dns1-4.p05.nsone.net`), status: **primary domain skonfigurowany i zweryfikowany** w Netlify (widać zielony ✓ Netlify DNS). Propagacja DNS była w toku, do sprawdzenia czy w pełni zakończona: `curl -sI https://dariuszwresilo.pl` — powinno pokazywać nagłówki Netlify, nie `server: Smarthost` (to byłby znak starego hostingu WordPress).
- **Stary hosting WordPress** — nie został jeszcze usunięty przez zewnętrzną osobę, która go prowadziła. Do zrobienia po potwierdzeniu że Netlify w pełni przejęło ruch.

### Ważne — autoryzacja Git

Push wymaga GitHub Personal Access Token (classic, scope `repo`). Token NIE jest zapisany nigdzie w repo (dobrze). Przy pushu używaliśmy formy:
```
git push https://<TOKEN>@github.com/SkillZenDW/dariuszwresilo.git main
```
Poprzednie tokeny użytkownik wklejał na czacie — **zalecenie: skonfigurować `gh auth login` albo SSH key zamiast wklejać tokeny za każdym razem**, to bezpieczniejsze i wygodniejsze. Jeśli user w nowej sesji chce pushować, zapytaj czy ma zapisany token, czy trzeba wygenerować nowy na https://github.com/settings/tokens.

## Struktura plików

```
moja www/
├── index.html          ← strona główna (sekcje: hero, model, ścieżki, o mnie, SKLEP, wiedza, newsletter, kontakt)
├── images/
│   ├── hero.jpg, about.jpg, icons/*.svg
│   ├── ekran-mockup.jpg  ← mockup 3D książki "Ekran nie musi wygrywać" (źródło: ../książka.png)
├── rekrutacja/          ← produkt 1: landing "Rekrutacja. To jest proste." (raport 47zł)
│   ├── index.html, styles.css, main.js, regulamin.html, polityka-prywatnosci.html
│   └── assets/img/raport-cover.jpg, karta-mockup.png, autor-portret.jpg
│   └── assets/*.pdf (raport-rekrutacyjny.pdf, karta-oceny-kandydata.pdf)
└── ekrany/              ← produkt 2: landing "Ekran nie musi wygrywać" (skopiowany z ../ekran-nie-musi-wygrywac.html, obrazy jako base64 inline w HTML)
    └── index.html
```

Uwaga: `index (1).html` w folderze to stara wersja robocza sprzed dodania zdjęć — **nieużywana**, można pominąć/usunąć jeśli będzie zaśmiecać.

## Sekcja "Sklep" na stronie głównej (`index.html`, `<section id="sklep">`)

Obecnie **2 produkty w gridzie 2-kolumnowym** (`shop-grid shop-grid-2`):
1. **Rekrutacja. To jest proste.** — zdjęcie `rekrutacja/assets/img/raport-cover.jpg`, link do `rekrutacja/`, cena "Pobierz za 47 →"
2. **Ekran nie musi wygrywać** — zdjęcie `images/ekran-mockup.jpg`, link do `ekrany/`, opis "Ebook + Audiobook + Kurs"

User zapowiedział: **"będą narazie 2 produkty, zaraz zrobimy trzeci"** — czyli trzeci produkt (prawdopodobnie kurs/audiobook osobno, albo coś nowego) jest w planach, nieokreślony jeszcze.

## Zmiany copywriterskie w rekrutacja/index.html (zastosowany behavioral design)

User poprosił o konkretne triki psychologiczne (anchoring, framing liczb):
- Cena: było 67→47 zł, teraz **77 zł → 47** (bez "zł" przy cenie promocyjnej, żeby liczba działała jako "goły" wysoki kontrast)
- Przycisk górny i CTA: "Kup za 47 zł" → **"Pobierz za 47"**
- Liczby trust-badges: **zostały PRZYWRÓCONE do oryginału 11 / 6 / 2** (był błąd — najpierw podbito do 17/9/5, user kazał cofnąć, bo 11/6/2 to faktyczna, prawdziwa liczba pytań/cech/dokumentów w raporcie — nie zawyżać nieprawdziwie)
- Procenty jako ułamki: 75% → **75/100**, 87% → **87/100** (ma budzić mocniejszy efekt niż czysty %)
- Koszt złej rekrutacji: było "3-4× roczne wynagrodzenie" / kwota abstrakcyjna → **116 000 zł (4x najniższa krajowa)** — user explicite chciał podstawy o najniższej krajowej, NIE 100k rocznie
- Link "Zobacz przykładowe pytania" → dodano **"(w skrócie)"**, bo pełne pytania z rozwinięciem są dopiero w płatnym raporcie

**Uwaga na przyszłość:** jeśli user każe jeszcze coś tknąć w tych liczbach, sprawdź najpierw czy nie każe czegoś cofnąć — już raz zdarzyła się pomyłka (podbicie 11/6/2 na 17/9/5 było niechciane, trzeba było revertować).

## Co NIE jest jeszcze zrobione / do potwierdzenia

1. **Trzeci produkt w sklepie** — zapowiedziany, nieokreślony
2. **glow-landing** (`/Users/darek/projekt ebook/glow-landing/`) — folder istnieje ale zawiera tylko puste podfoldery `assets/img/`, brak HTML/CSS/JS. Nie wiadomo co to ma być — do wyjaśnienia z userem jeśli wróci temat.
3. **Potwierdzenie pełnej propagacji DNS** i usunięcie starego hostingu WordPress (zewnętrzna osoba go prowadzi)
4. Ceny/liczby na `ekrany/index.html` (landing "Ekran nie musi wygrywać") **nie były jeszcze tknięte** pod kątem behavioral design — tylko strona główna dodała do niej link i mockup. Jeśli user zechce podobne poprawki cenowe/copywriterskie jak w rekrutacja/, trzeba przejść przez ten sam proces.

## Sposób pracy z userem (ważne dla stylu)

- User jest **laikiem technicznym** — tłumacz Git/DNS/hosting bardzo prosto, krok po kroku, unikaj żargonu bez wyjaśnienia
- Lubi **konkretne kroki do wykonania**, nie długie wywody
- Do zmian tekstowych/cenowych na stronach sprzedażowych stosuj wiedzę z behavioral-design (psychologia cen, anchoring, social proof) — user świadomie o to prosi
- Zawsze po zmianie w kodzie: **testuj lokalnie przez preview (localhost + serwer statyczny z .claude/launch.json)**, potem commituj i pushuj na GitHub żeby Netlify wdrożył
- .claude/launch.json w tym folderze uruchamia `python3 -m http.server 8420` — ale realny port bywa inny (autoPort), sprawdzać zwracany port przy starcie
