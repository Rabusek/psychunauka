export interface Section {
  id: string;
  title: string;
  content: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  sections: Section[];
}

export const chapters: Chapter[] = [
  {
    id: "chapter-1",
    number: 1,
    title: "Czym i jak zajmuje się psychologia społeczna",
    sections: [
      {
        id: "1-1",
        title: "1.1 Definicja i przedmiot psychologii społecznej",
        content: `**Psychologia społeczna** zajmuje się szeroko pojętym wpływem społecznym - w jaki sposób to, co robią, czują i myślą jedni ludzie, wpływa na to, co robią, czują i myślą inni.

## Człowiek jako istota ultraspołeczna

- Wszystko ważne robimy z innymi ludźmi
- Związki z ludźmi są źródłem większości emocji
- **Wykluczenie społeczne jest dosłownie bolesne** (aktywizują się te same obszary mózgu co przy bólu fizycznym)
- Ludzie o dobrych kontaktach społecznych są szczęśliwsi, bogatsi, zdrowsi i żyją dłużej

## Hipoteza wielkości mózgu (Robin Dunbar)

- Wielkość mózgu u naczelnych koreluje z wielkością typowej grupy społecznej
- **Typowa wielkość grupy u ludzi: około 150 osób** (liczba Dunbara)
- Duży mózg potrzebny do śledzenia relacji społecznych (przy 150 członkach = 22 350 możliwych relacji)`
      },
      {
        id: "1-2",
        title: "1.2 Podstawowe podejścia teoretyczne",
        content: `## 1.2.1 Perspektywa poznawcza

- Zachowanie zależy od procesów przetwarzania informacji
- Kluczowe: jak człowiek **interpretuje** bieżącą sytuację
- Ludzie działają w świecie przez siebie skonstruowanym (zinterpretowanym)
- Ważna jest niedawność użycia struktury wiedzy (**prymowanie**)
- Wieloznaczność sytuacji społecznych - nawet atak fizyczny może być interpretowany jako "kłótnia kochanków"

## 1.2.2 Perspektywa motywacyjna

- Koncentruje się na pobudkach działania
- Ludzie maksymalizują zyski, minimalizują straty
- **Najsilniejszy motyw pozafizjologiczny:** dążenie do wysokiej samooceny
- Inne motywy: potrzeba więzi społecznych, bezpieczeństwa, kontroli, władzy
- **Transfer pobudzenia emocjonalnego** - pobudzenie z poprzedniej sytuacji "przelewa się" na nową

### Przykład badania (Lewicka, 2008):
- *ZN:* narodowość badanych (Polacy we Wrocławiu vs Ukraińcy we Lwowie)
- *ZZ:* szacowany odsetek przedwojennych mieszkańców różnych narodowości
- *Wynik:* obie grupy przeceniały odsetek własnej narodowości - przejaw motywu samooceny

## 1.2.3 Perspektywa teorii uczenia się

**Warunkowanie klasyczne (Pawłow):**
- Uczenie się znaczenia pierwotnie obojętnego bodźca przez skojarzenie z bodźcem znaczącym
- Przykład: lampka → mięso → pies ślini się na sam widok lampki

**Warunkowanie sprawcze:**
- Uczenie się przez konsekwencje zachowania
- Nagradzane reakcje stają się nawykami

**Uczenie przez obserwację:**
- Dzieci uczą się zachowań obserwując innych i konsekwencje ich działań

## 1.2.4 Perspektywa społeczno-kulturowa

- Człowiek jest wytworem socjalizacji w konkretnej grupie/kulturze
- Różne kultury mają odmienne wartości, normy i wzorce postępowania

**Kultury indywidualistyczne vs kolektywistyczne:**
- *Indywidualistyczne (Zachód):* dobro jednostki > dobro grupy
- *Kolektywistyczne (Azja):* dobro grupy > dobro jednostki

## 1.2.5 Perspektywa ewolucjonistyczna

- Zachowania są efektem doboru naturalnego
- Przetrwały te wzorce, które zwiększały szansę reprodukcji
- Wyjaśnia uniwersalne wzorce zachowań (np. zazdrość seksualna, preferencje partnerów)`
      },
      {
        id: "1-3",
        title: "1.3 Eksperyment i logika badań",
        content: `## Eksperyment - podstawowa metoda

**Definicja:** Sytuacja, w której badacz:
1. Manipuluje **zmienną niezależną** (przyczyną)
2. Mierzy **zmienną zależną** (skutek)
3. Kontroluje zmienne zakłócające

### Kluczowe pojęcia:
- **Zmienna niezależna (ZN):** czynnik manipulowany przez badacza (przyczyna)
- **Zmienna zależna (ZZ):** mierzona reakcja badanych (skutek)
- **Losowy przydział do warunków:** eliminuje wpływ cech indywidualnych
- **Warunek kontrolny:** grupa porównawcza bez manipulacji

## Klasyczny eksperyment Aronson i Mills (1959) - uzasadnianie wysiłku

- *ZN:* wielkość wysiłku włożonego w dostanie się do grupy (duży/mały/żaden)
- *ZZ:* ocena atrakcyjności nudnej dyskusji grupowej
- *Procedura:* Kobiety musiały (lub nie) czytać sprośne teksty, by zostać dopuszczone do "grupy dyskusyjnej"
- *Wynik:* Im większy wysiłek włożony, tym bardziej pozytywna ocena nudnej dyskusji
- *Interpretacja:* **Dysonans poznawczy** - uzasadniamy poniesione koszty

## Logika programu badawczego

**Trafność wewnętrzna:** Czy manipulacja rzeczywiście spowodowała zmianę ZZ?
- Zagrożenia: zmienne zakłócające, efekt eksperymentatora

**Trafność zewnętrzna:** Czy wyniki można uogólnić poza laboratorium?
- Generalizacja na inne osoby, sytuacje, kultury

**Replikacja:** Powtórzenie badania dla weryfikacji wyników
- *Replikacja bezpośrednia:* identyczna procedura
- *Replikacja konceptualna:* ta sama hipoteza, inna metoda`
      },
      {
        id: "1-4",
        title: "1.4 Pozostałe metody badawcze",
        content: `## 1.4.1 Obserwacja

- Systematyczne notowanie zachowań
- Obserwacja uczestnicząca vs nieuczestnicząca
- Obserwacja jawna vs ukryta

### Badania międzykulturowe (David Buss):
- *Metoda:* Ankiety w 37 kulturach (ponad 10 000 osób)
- *Wyniki uniwersalne:*
  - **Kobiety cenią:** zasoby materialne, ambicję, status, starszy wiek partnera
  - **Mężczyźni cenią:** urodę fizyczną, młodość partnerki
- *Interpretacja ewolucjonistyczna:* Różnice wynikają z odmiennych strategii reprodukcyjnych

## 1.4.2 Badania korelacyjne

- Badają związki między zmiennymi bez manipulacji
- ⚠️ **Korelacja ≠ przyczynowość!**
- Problem "trzeciej zmiennej"

### Przykład:
Korelacja między oglądaniem przemocy w TV a agresją dzieci:
- a) TV → agresja
- b) Agresja → preferencja dla TV z przemocą
- c) Trzecia zmienna (np. styl wychowania) → oba

## 1.4.3 Neuroobrazowanie

- fMRI, EEG, PET
- Badanie aktywności mózgu podczas procesów społecznych
- **Neuronauka społeczna** - nowa dziedzina

## 1.5 Triangulacja metodologiczna

- Różne metody mają różne słabości
- Zgodność wyników z różnych metod zwiększa pewność wniosków

### Problem WEIRD:
*Western, Educated, Industrialized, Rich, Democratic* - większość badań na nietypowej populacji`
      }
    ]
  },
  {
    id: "chapter-11",
    number: 11,
    title: "Wpływ społeczny",
    sections: [
      {
        id: "11-1",
        title: "11.1 Przejawy wpływu społecznego",
        content: `## 11.1.1 Naśladownictwo

- Automatyczne kopiowanie zachowań innych
- **Efekt kameleona** - nieświadome naśladowanie gestów, mimiki rozmówcy

### Efekt Wertera (zaraźliwość samobójstw):
- Po nagłośnionym samobójstwie celebryty wzrasta liczba samobójstw
- Im więcej dni relacjonowania, tym większa fala naśladowcza
- Naśladowcy podobni do "oryginalnego" samobójcy pod względem płci i wieku
- Dowód na **społeczny dowód słuszności**

## 11.1.2 Konformizm

### Klasyczne badania Solomona Ascha (1955):
- *ZN:* jednomyślna opinia grupy (błędna vs zgodna z rzeczywistością)
- *ZZ:* odpowiedzi badanego na proste zadanie percepcyjne
- *Procedura:* Badany w grupie pozorantów; pozoranci jednomyślnie podają błędną odpowiedź
- *Wynik:* **75% badanych uległo przynajmniej raz**; średnio 37% błędnych odpowiedzi
- *Warunek kontrolny:* bez grupy - tylko 1% błędów

### Wyznaczniki konformizmu:
1. **Jednomyślność grupy** - nawet jeden sprzymierzeniec drastycznie redukuje konformizm
2. **Wielkość grupy** - wzrost do ok. 5 osób, potem plateau
3. **Niejednoznaczność zadania** - im trudniejsze, tym większy konformizm
4. **Publiczność odpowiedzi** - prywatne odpowiedzi = mniej konformizmu
5. **Status i kompetencje grupy**
6. **Kultura** - wyższy konformizm w kulturach kolektywistycznych

### Dwa rodzaje wpływu społecznego:
- **Wpływ informacyjny:** grupa jako źródło informacji o rzeczywistości
- **Wpływ normatywny:** pragnienie akceptacji przez grupę`
      },
      {
        id: "11-2",
        title: "11.1.3 Posłuszeństwo autorytetom",
        content: `## Klasyczne badania Stanleya Milgrama (1963, 1974)

### Procedura:
- Badany = "nauczyciel" ma karać "ucznia" (pozorant) za błędy szokami elektrycznymi
- Szoki rosły od 15V do **450V** ("Niebezpieczeństwo! Ciężki szok!")
- "Uczeń" symulował ból, krzyki, prośby o przerwanie
- Eksperymentator nalegał: *"To absolutnie konieczne, aby pan kontynuował"*

### Wyniki:
- ⚠️ **65% badanych doszło do maksymalnego szoku 450V!**
- Bez nacisku autorytetu tylko 10% przekroczyło 150V

### Zmienne modyfikujące:

| Warunek | % ulegających |
|---------|---------------|
| Standardowa procedura | **65%** |
| Eksperyment poza Yale | 48% |
| Nauczyciel widzi ucznia z bliska | 40% |
| Nauczyciel przytrzymuje rękę ucznia | 30% |
| Brak nadzoru eksperymentatora | 21% |
| Polecenia zwykłej osoby | 20% |
| Dwie osoby odmawiają | 10% |
| Nauczyciel sam wybiera natężenie | 3% |
| Dwa autorytety - sprzeczne polecenia | **0%** |

### Uniformy i tytuły jako oznaki autorytetu:

**Badanie Hofling (1966) - pielęgniarki:**
- Telefoniczne polecenie "doktora Smitha" podania podwójnej dawki leku
- *Wynik:* 21 z 22 pielęgniarek posłusznie poszło podać lek
- Mimo naruszenia dawki, regulaminu i procedur

**Badanie Bickmana (1974) - uniform:**
- Cywil - 50% uległości
- Mundur strażnika - niemal **100%** uległości`
      },
      {
        id: "11-3",
        title: "11.2 Mechanizmy wywierania wpływu (Cialdini)",
        content: `## 11.2.1 Zaangażowanie

### Trzy procesy zaangażowania:

**1. Podwyższona dostępność psychiczna:**
- Badanie Sherman (1980): pytanie "czy zgodziłbyś się kwestować?" → 7x więcej zgód później

**2. Uzasadnianie wysiłku (dysonans poznawczy):**
- Im więcej wysiłku włożono, tym bardziej ceni się efekt
- Wyjaśnia: inicjacje, otrzęsiny, "falę" w wojsku

**3. Pułapka utopionych kosztów:**
- Kontynuacja stratnego działania, by "odzyskać" inwestycje
- Przykład: Siedzenie do końca nudnego filmu, bo bilet był drogi

## 11.2.2 Społeczny dowód słuszności

**Badanie datków (Reingen, 1982):**
- Bez listy poprzednich ofiarodawców - 25% daje datek
- Z listą - **43%** daje datek

**Przypadek Jonestown (1978):**
- 910 osób popełniło zbiorowe samobójstwo
- Izolacja = inni jako jedyne kryterium słuszności

## 11.2.3 Lubienie

Czynniki nasilające lubienie i uleganie:
- Atrakcyjność fizyczna
- Podobieństwo (nawet powierzchowne)
- Komplementy
- Kontakt i współpraca

## 11.2.4 Wzajemność

**Norma wzajemności** - jedna z najpowszechniejszych norm kulturowych

**Badanie Regan (1971):**
- Pozorant kupił badanemu colę → 2x więcej losów kupowanych
- Nawet nielubiani pozoranci zyskiwali przez wzajemność

## 11.2.5 Niedostępność

**Zasada:** Im coś rzadsze/trudniej dostępne, tym cenniejsze

**Reaktancja psychiczna (Brehm):**
- Zagrożenie wolności wyboru wzmaga pragnienie zagrożonej opcji
- "Zakazany owoc"`
      },
      {
        id: "11-4",
        title: "11.3 Techniki manipulacji społecznych",
        content: `## 11.3.1 Stopa w drzwiach (foot-in-the-door)

**Zasada:** Mała prośba → zgoda → duża prośba

**Badanie Freedman i Fraser (1966):**
- *ZN:* wcześniejsza mała prośba (naklejka w oknie) vs brak
- *ZZ:* zgoda na postawienie wielkiego billboardu w ogródku
- *Wynik:* Bez wcześniejszej prośby - 17%; po małej prośbie - **55%**

## 11.3.2 Drzwiami w twarz (door-in-the-face)

**Zasada:** Duża prośba → odmowa → mniejsza prośba (właściwa)

**Badanie Cialdini (1975):**
- Najpierw prośba o 2-letnią opiekę nad przestępcą → odmowa → prośba o 2-godzinną wycieczkę
- *Wynik:* 17% (kontrola) vs **50%** (po odmowie dużej prośby)
- *Mechanizm:* Wzajemność ustępstw + kontrast

## 11.3.3 Niska piłka (low-ball)

**Zasada:** Korzystna oferta → zgoda → "wycofanie" korzyści → podtrzymanie zgody

**Badanie Cialdini (1978):**
- Niska piłka: 56% zgód, 53% przybyło o 7:00
- Kontrola: 31% zgód, 24% przybyło

## 11.3.4 "A to nie wszystko" (that's-not-all)

**Zasada:** Oferta → zanim odmowa → "gratis" lub obniżka

**Badanie Burger (1986):**
- Technika "a to nie wszystko" - **2x więcej** kupujących

## 11.4 Obrona przed wpływem

### Asertywność:
- Umiejętność odmawiania bez agresji
- Wyrażanie własnych potrzeb

### Przerwanie automatyzmów:
- Świadomość technik manipulacji
- Pytanie *"dlaczego właściwie mam się zgodzić?"*
- Rozpoznawanie własnych emocji jako sygnałów manipulacji`
      }
    ]
  },
  {
    id: "chapter-14",
    number: 14,
    title: "Prospołeczność",
    sections: [
      {
        id: "14-1",
        title: "14.1 Teorie prospołeczności",
        content: `## 14.1.1 Teoria doboru krewniaczego (Hamilton, 1964)

**Dostosowanie łączne (inclusive fitness):**
- Pomagamy tym, którzy dzielą nasze geny
- **Wzór Hamiltona:** rB > C
  - r = stopień pokrewieństwa genetycznego
  - B = korzyść dla biorcy
  - C = koszt dla dawcy

### Badanie Burnstein, Crandall i Kitayama (1994):
- *ZN1:* Stopień pokrewieństwa
- *ZN2:* Powaga sytuacji (życie lub śmierć vs codzienna)
- *Wyniki:*
  - Większa pomoc bliższym krewnym
  - W sytuacjach "życie lub śmierć" pokrewieństwo jeszcze ważniejsze
  - Większa pomoc młodszym (wyższy potencjał reprodukcyjny)

### Badanie nad opiekuńczością dziadków (Euler i Weitzel, 1996):
- *Najbardziej opiekuńcza:* **matka matki** (100% pewność pokrewieństwa)
- *Najmniej opiekuńczy:* **ojciec ojca** (niepewność w obu pokoleniach)
- *Interpretacja:* Ewolucyjny problem niepewności ojcostwa

## 14.1.2 Teoria altruizmu wzajemnego (Trivers, 1971)

**Zasada:** Pomaganie opłaca się, jeśli jest odwzajemniane

### Rola wdzięczności (Bartlett i DeSteno, 2006):
- Większa pomoc dobroczyńcy (reguła wzajemności)
- Wdzięczność nasilała też pomoc nieznajomemu (transfer emocji)

### Rola reputacji (Piazza i Bering, 2008):
- Większa hojność gdy grozi plotkowanie`
      },
      {
        id: "14-2",
        title: "14.2 Wyznaczniki pomagania",
        content: `## 14.2.1 Efekt biernego przechodnia (bystander effect)

### Klasyczne badanie Darley i Latané (1968) - "napad padaczki":
- *ZN:* Liczba świadków (sam vs 2 osoby vs 6 osób)
- *ZZ:* Odsetek pomagających i czas reakcji

| Liczba świadków | % pomogło | Średni czas |
|-----------------|-----------|-------------|
| Sam | **85%** | 52 sek. |
| 2 osoby | 62% | 93 sek. |
| 6 osób | **31%** | 166 sek. |

### Mechanizmy:
1. **Rozproszenie odpowiedzialności** - "ktoś inny pomoże"
2. **Niewiedza wielu** (pluralistic ignorance) - "skoro nikt nie reaguje, pewnie wszystko OK"
3. **Lęk przed oceną** - strach przed blamażem

## 14.2.2 Biorca pomocy

Czynniki zwiększające szansę otrzymania pomocy:
- Brak winy za swoją sytuację
- Bycie lubianym
- Podobieństwo do pomagającego
- Przynależność do grupy własnej ("my")

### Anegdota o szanghajskich Żydach (1941):
- Rabin odpowiedział Japończykom: *"Jesteśmy Azjatami, tak jak wy"*
- Ustanowienie wspólnego "my" - uratowanie diaspory

## 14.2.3 Dawca pomocy

**Czy istnieje "osobowość altruistyczna"?**
- Odpowiedź: raczej **NIE**
- Czynniki sytuacyjne ważniejsze niż osobowościowe

### Cechy nasilające pomaganie:
- Ugodowość
- Empatia (nawykowa)
- Bezpieczny styl przywiązania`
      },
      {
        id: "14-3",
        title: "14.2.4 Empatia i współczucie",
        content: `## Model empatii-altruizmu (Batson)

**Empatia** = współodczuwanie z osobą w potrzebie

### Badanie Batson et al. (1981):
- *ZN1:* Empatia (wysoka vs niska)
- *ZN2:* Łatwość ucieczki (można wyjść vs trzeba zostać)
- *ZZ:* Pomaganie (zamiana z "uczennicą" otrzymującą szoki)

| Empatia | Łatwa ucieczka | Trudna ucieczka |
|---------|----------------|-----------------|
| Niska | 18% | 64% |
| Wysoka | **91%** | **83%** |

**Interpretacja:** Prawdziwy altruizm istnieje (przy wysokiej empatii)

## Dwie motywacje pomagania (Karyłowski, 1982)

1. **Endocentryczna** - pomagam by poprawić WŁASNE samopoczucie
   - *"byłabym z siebie dumna"*, *"miałabym wyrzuty sumienia"*

2. **Egzocentryczna** - pomagam by poprawić samopoczucie INNYCH
   - *"ona może zabłądzić"*, *"jest zmęczona"*

### Źródła obu motywacji:
- **Egzocentryczna:** rodzice zwracający uwagę na konsekwencje dla INNYCH
- **Endocentryczna:** rodzice zwracający uwagę na konsekwencje dla SIEBIE

## Rola emocji

### Poczucie winy i pomaganie (Regan, 1972):
- Po wzbudzeniu winy - **4x więcej pomocy**

### Wstyd vs poczucie winy:
- Poczucie winy → nasilenie pomagania
- Wstyd → NIE nasila pomagania (skupia na sobie)`
      },
      {
        id: "14-4",
        title: "14.3 Wolontariat i reakcje na pomoc",
        content: `## 14.3 Wolontariat

### Funkcjonalne podejście (Clary i Snyder)

**Sześć funkcji motywujących wolontariat:**
1. **Wartości** - wyrażanie ważnych wartości osobistych
2. **Wiedza** - zdobywanie nowych umiejętności
3. **Społeczna** - nawiązywanie kontaktów
4. **Kariera** - budowanie CV, referencji
5. **Ochrona ego** - radzenie sobie z własnymi problemami
6. **Wzmocnienie** - podnoszenie samooceny

**Kluczowe odkrycie:**
Trwałość wolontariatu zależy od dopasowania funkcji do oferowanych korzyści

---

## 14.4 Reakcje na pomoc

**Paradoks:** Pomoc nie zawsze jest mile widziana

### Kiedy pomoc jest nieprzyjemna?
- Gdy zagraża samoocenie biorcy
- Gdy sugeruje niekompetencję
- Gdy tworzy zależność
- Gdy pochodzi od osoby o podobnym statusie

### Model zagrożenia samooceny:
- **Pomoc wspierająca** → wdzięczność, pozytywny afekt
- **Pomoc zagrażająca** → negatywne emocje, unikanie pomocy

---

## Tabela zbiorcza kluczowych eksperymentów

| Badanie | ZN | ZZ | Główny wynik |
|---------|----|----|--------------|
| Asch (1955) | Opinia grupy | Odpowiedzi | 75% uległo |
| Milgram (1963) | Polecenia autorytetu | Natężenie szoków | 65% do 450V |
| Darley i Latané (1968) | Liczba świadków | Pomaganie | Sam: 85%, 6 osób: 31% |
| Freedman i Fraser (1966) | Mała prośba | Zgoda na dużą | 17% vs 55% |
| Batson (1981) | Empatia × ucieczka | Pomaganie | Wysoka empatia = pomoc |`
      }
    ]
  }
];

export const glossary = [
  { term: "Zmienna niezależna (ZN)", definition: "Czynnik manipulowany przez badacza; domniemana przyczyna" },
  { term: "Zmienna zależna (ZZ)", definition: "Mierzona reakcja; domniemany skutek" },
  { term: "Konformizm", definition: "Zmiana zachowania/opinii pod wpływem grupy" },
  { term: "Wpływ informacyjny", definition: "Uleganie bo inni są źródłem wiedzy o rzeczywistości" },
  { term: "Wpływ normatywny", definition: "Uleganie by zyskać akceptację grupy" },
  { term: "Rozproszenie odpowiedzialności", definition: "Im więcej świadków, tym mniejsze poczucie osobistej odpowiedzialności" },
  { term: "Niewiedza wielu", definition: "Wszyscy patrzą na siebie i nikt nie reaguje = 'nic się nie dzieje'" },
  { term: "Empatia", definition: "Współodczuwanie emocji z inną osobą" },
  { term: "Dostosowanie łączne", definition: "Sukces reprodukcyjny jednostki + krewnych dzielących geny" },
  { term: "Altruizm wzajemny", definition: "Pomaganie opłacalne bo odwzajemniane" },
];
