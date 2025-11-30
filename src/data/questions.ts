export interface Question {
  id: number;
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctAnswer: 'a' | 'b' | 'c' | 'd';
  explanation: string;
  source: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Czym zajmuje się psychologia społeczna?",
    options: {
      a: "Wpływem innych na myśli, uczucia, zachowania",
      b: "Indywidualnymi zaburzeniami psychicznymi",
      c: "Wyłącznie komunikacją werbalną",
      d: "Wyłącznie terapią grupową"
    },
    correctAnswer: "a",
    explanation: "PS bada jak obecność innych (rzeczywista, wyobrażona, dorozumiana) wpływa na jednostkę. To podstawowa definicja tej dziedziny.",
    source: "Rozdz.1.1,s.17-19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Ile wynosi liczba Dunbara?",
    options: {
      a: "15",
      b: "50",
      c: "150",
      d: "500"
    },
    correctAnswer: "c",
    explanation: "Typowa wielkość grupy społecznej u ludzi ~150 osób (osobiste relacje). 150 osób = 22,350 relacji do śledzenia.",
    source: "Rozdz.1.1,s.18",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Dlaczego człowiek ma tak duży mózg?",
    options: {
      a: "Do zdobywania pożywienia",
      b: "Do budowania złożonych narzędzi",
      c: "Do polowania na duże zwierzęta",
      d: "Głównie do radzenia sobie z innymi ludźmi"
    },
    correctAnswer: "d",
    explanation: "Duży mózg (3x większy niż u małp) ewoluował głównie do radzenia sobie z innymi ludźmi, nie ze środowiskiem fizycznym.",
    source: "Rozdz.1.1,s.18",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Co to jest obecność dorozumiana innych?",
    options: {
      a: "Fizyczna obecność osób",
      b: "Myślenie \"co pomyślą ludzie\" wpływa na zachowanie",
      c: "Wyłącznie rodzina",
      d: "Wyłącznie znajomi z pracy"
    },
    correctAnswer: "b",
    explanation: "Nawet wyobrażona lub dorozumiana obecność innych (\"co pomyślą ludzie\") wpływa na zachowanie jednostki.",
    source: "Rozdz.1.1,s.17",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Jakie są fundamentalne motywy społeczne?",
    options: {
      a: "Władza, dominacja, kontrola",
      b: "Rywalizacja, status, prestiż",
      c: "Seks, pieniądze, sława",
      d: "Przynależność, kontrola, zrozumienie, samoocena, wsparcie"
    },
    correctAnswer: "d",
    explanation: "5 fundamentalnych motywów: Przynależność, Kontrola, Zrozumienie, Pozytywna samoocena, Wsparcie.",
    source: "Rozdz.1.1,s.19",
    category: "Wprowadzenie do psychologii",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Co zakłada podejście behawiorystyczne?",
    options: {
      a: "Koncentracja na nieświadomych procesach",
      b: "Koncentracja na obserwowalnych zachowaniach i uczeniu",
      c: "Wyłącznie emocje",
      d: "Wyłącznie procesy poznawcze"
    },
    correctAnswer: "b",
    explanation: "Behawioryzm koncentruje się na obserwowalnych zachowaniach, uczeniu przez warunkowanie, pomija procesy mentalne.",
    source: "Rozdz.1.2,s.19-20",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Czym są heurystyki w podejściu poznawczym?",
    options: {
      a: "Błędy poznawcze",
      b: "Procesy nieświadome",
      c: "Skróty myślowe",
      d: "Zaburzenia myślenia"
    },
    correctAnswer: "c",
    explanation: "Heurystyki to skróty myślowe (dostępności, reprezentatywności) – szybkie ale czasem błędne strategie poznawcze.",
    source: "Rozdz.1.2,s.20-22",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 8,
    question: "Co to jest heurystyka dostępności?",
    options: {
      a: "Ocenianie na podstawie łatwości przypomnienia",
      b: "Dostępność informacji w mediach",
      c: "Dostępność zasobów",
      d: "Analiza statystyczna"
    },
    correctAnswer: "a",
    explanation: "Heurystyka dostępności: ocenianie prawdopodobieństwa/częstości na podstawie łatwości przypomnienia przykładów.",
    source: "Rozdz.1.2,s.21",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "Co to jest heurystyka reprezentatywności?",
    options: {
      a: "Analiza polityczna",
      b: "Ocenianie na podstawie podobieństwa do prototypu",
      c: "Analiza matematyczna",
      d: "Procedura selekcji"
    },
    correctAnswer: "b",
    explanation: "Heurystyka reprezentatywności: ocenianie na podstawie podobieństwa do typowego przypadku/prototypu kategorii.",
    source: "Rozdz.1.2,s.21",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Co to jest fundamentalny błąd atrybucji?",
    options: {
      a: "Błąd w obliczeniach",
      b: "Błąd w pomiarze",
      c: "Przecenianie cech osobowości, niedocenianie sytuacji",
      d: "Błąd w metodologii"
    },
    correctAnswer: "c",
    explanation: "Fundamentalny błąd atrybucji: przecenianie wpływu cech osobowości, niedocenianie wpływu sytuacji przy wyjaśnianiu zachowań innych.",
    source: "Rozdz.1.2,s.21",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "Co to jest asymetria aktor-obserwator?",
    options: {
      a: "Różnice w percepcji teatralnej",
      b: "Różnice w obserwacji zjawisk",
      c: "Różnice w filmowaniu",
      d: "Swoje zachowanie tłumaczymy sytuacją, innych - cechami"
    },
    correctAnswer: "d",
    explanation: "Asymetria aktor-obserwator: własne zachowania tłumaczymy sytuacją, zachowania innych – cechami osobowości.",
    source: "Rozdz.1.2,s.21",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "Co bada podejście ewolucyjne?",
    options: {
      a: "Historię dinozaurów",
      b: "Zachowania jako adaptacje ewolucyjne zwiększające przeżycie i reprodukcję",
      c: "Wyłącznie zwierzęta",
      d: "Wyłącznie rośliny"
    },
    correctAnswer: "b",
    explanation: "Podejście ewolucyjne: mechanizmy psychologiczne jako adaptacje zwiększające szanse przeżycia i reprodukcji w przeszłości.",
    source: "Rozdz.1.2,s.22-24",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Co zakłada altruizm krewniacy?",
    options: {
      a: "Pomaganie wszystkim równo",
      b: "Pomaganie krewnym zwiększa przeżycie wspólnych genów",
      c: "Wyłącznie wsparcie finansowe",
      d: "Brak biologicznego podłoża"
    },
    correctAnswer: "b",
    explanation: "Dobór krewniacy (Hamilton): pomaganie krewnym zwiększa prawdopodobieństwo, że nasze geny przetrwają.",
    source: "Rozdz.1.2,s.23",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 14,
    question: "Co to jest kolektywizm?",
    options: {
      a: "System polityczny",
      b: "Ruch społeczny",
      c: "Kultura stawiająca dobro grupy ponad jednostką (Azja)",
      d: "Teoria ekonomiczna"
    },
    correctAnswer: "c",
    explanation: "Kolektywizm (Azja): harmonia grupowa, współzależność, cele kolektywne, dobro grupy ponad jednostką.",
    source: "Rozdz.1.2,s.23-24",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "Co to jest indywidualizm?",
    options: {
      a: "Kultura stawiająca jednostkę ponad grupą (Zachód)",
      b: "System edukacji",
      c: "Wyłącznie kultura chińska",
      d: "Przeciwieństwo altruizmu"
    },
    correctAnswer: "a",
    explanation: "Indywidualizm (Zachód): niezależność, autonomia, cele osobiste, dobro jednostki ponad grupą.",
    source: "Rozdz.1.2,s.23-24",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 16,
    question: "Kim był Kurt Lewin?",
    options: {
      a: "Psychoanalityk",
      b: "Ojciec psychologii społecznej, teoria pola B=f(P,E)",
      c: "Polityk",
      d: "Neurolog"
    },
    correctAnswer: "b",
    explanation: "Kurt Lewin – \"ojciec psychologii społecznej\", autor teorii pola, dynamika grupowa.",
    source: "Rozdz.1.2,s.25",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "Co oznacza wzór B = f(P, E)?",
    options: {
      a: "Business funkcja",
      b: "Biologia i fizyka",
      c: "Matematyka czysta",
      d: "Zachowanie = funkcja (Osoba, Środowisko)"
    },
    correctAnswer: "d",
    explanation: "B=f(P,E): Zachowanie (Behavior) jest funkcją Osoby (Person) i Środowiska (Environment).",
    source: "Rozdz.1.2,s.25",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "Co to jest zmienna niezależna (VI)?",
    options: {
      a: "Mierzona jako rezultat",
      b: "Manipulowana przez badacza",
      c: "Zmienna losowa",
      d: "Zmienna stała"
    },
    correctAnswer: "b",
    explanation: "Zmienna niezależna (VI): czynnik manipulowany przez badacza w eksperymencie, przypuszczalna przyczyna.",
    source: "Rozdz.1.3,s.27",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "Co to jest zmienna zależna (DV)?",
    options: {
      a: "Zmienna manipulowana",
      b: "Zmienna losowa",
      c: "Mierzona jako rezultat manipulacji",
      d: "Zmienna stała"
    },
    correctAnswer: "c",
    explanation: "Zmienna zależna (DV): wynik mierzony w eksperymencie, \"zależy\" od zmiennej niezależnej.",
    source: "Rozdz.1.3,s.27",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "Po co stosuje się randomizację?",
    options: {
      a: "Aby zwiększyć trafność zewnętrzną",
      b: "Aby zmniejszyć koszty badania",
      c: "Aby przyspieszyć rekrutację uczestników",
      d: "Aby zrównoważyć różnice indywidualne między grupami"
    },
    correctAnswer: "d",
    explanation: "Randomizacja (losowy przydział) zapewnia, że różnice między grupami wynikają z manipulacji VI, nie z wcześniejszych różnic.",
    source: "Rozdz.1.3,s.28",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 21,
    question: "Czym jest grupa kontrolna?",
    options: {
      a: "Grupa otrzymująca manipulację",
      b: "Wszystkie grupy razem",
      c: "Grupa nie otrzymująca manipulacji",
      d: "Grupa pilotażowa"
    },
    correctAnswer: "c",
    explanation: "Grupa kontrolna: nie otrzymuje manipulacji zmiennej niezależnej, punkt odniesienia dla porównania.",
    source: "Rozdz.1.3,s.27",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 22,
    question: "Czym jest grupa eksperymentalna?",
    options: {
      a: "Grupa nie otrzymująca manipulacji",
      b: "Grupa kontrolna",
      c: "Grupa placebo",
      d: "Otrzymuje manipulację zmiennej niezależnej"
    },
    correctAnswer: "d",
    explanation: "Grupa eksperymentalna: otrzymuje manipulację zmiennej niezależnej, porównywana z kontrolną.",
    source: "Rozdz.1.3,s.27",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 23,
    question: "Dlaczego korelacja ≠ przyczynowość?",
    options: {
      a: "Problem trzeciej zmiennej i kierunkowość",
      b: "Korelacja zawsze oznacza związek",
      c: "Występuje tylko w fizyce",
      d: "Brak różnicy między nimi"
    },
    correctAnswer: "a",
    explanation: "Korelacja ≠ przyczynowość: (1) trzecia zmienna może wpływać na obie, (2) nieznany kierunek związku.",
    source: "Rozdz.1.3,s.29",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 24,
    question: "Co to jest debriefing?",
    options: {
      a: "Procedura przed badaniem",
      b: "Wyjaśnienie celu i procedur PO zakończeniu badania",
      c: "Forma płatności",
      d: "Procedura rekrutacji"
    },
    correctAnswer: "b",
    explanation: "Debriefing: wyjaśnienie prawdziwego celu po badaniu, ujawnienie deception, odpowiedzi na pytania.",
    source: "Rozdz.1.4,s.34",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 25,
    question: "Co to jest deception?",
    options: {
      a: "Pełna prawda o badaniu",
      b: "Uczciwa procedura",
      c: "Ukrywanie celu badania lub podawanie fałszywych informacji",
      d: "Forma płatności"
    },
    correctAnswer: "c",
    explanation: "Deception: ukrywanie prawdziwego celu lub podawanie fałszywych informacji. Dopuszczalne gdy konieczne, nie szkodzi, pełny debriefing.",
    source: "Rozdz.1.4,s.33-34",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 26,
    question: "Kto może się wycofać z badania?",
    options: {
      a: "Nikt po rozpoczęciu",
      b: "Tylko badacz",
      c: "Tylko sponsor badania",
      d: "Każdy uczestnik w dowolnym momencie"
    },
    correctAnswer: "d",
    explanation: "Prawo do wycofania się: każdy uczestnik może przerwać udział w badaniu w dowolnym momencie bez konsekwencji.",
    source: "Rozdz.1.4,s.32-36",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 27,
    question: "Co to jest świadoma zgoda?",
    options: {
      a: "Nieświadoma decyzja",
      b: "Uczestnicy muszą wiedzieć, na co się zgadzają",
      c: "Zgoda wymuszona",
      d: "Procedura opcjonalna"
    },
    correctAnswer: "b",
    explanation: "Świadoma zgoda (informed consent): uczestnicy muszą rozumieć, na co się zgadzają przed udziałem w badaniu.",
    source: "Rozdz.1.4,s.32",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 28,
    question: "Co to jest sytuacjonizm?",
    options: {
      a: "Podkreślanie wyłącznie cech",
      b: "Podkreślanie dominacji sytuacji nad cechami osobowości",
      c: "Wyłącznie osobowość",
      d: "Ignorowanie kontekstu"
    },
    correctAnswer: "b",
    explanation: "Sytuacjonizm: podejście podkreślające, że sytuacja wpływa na zachowanie silniej niż cechy osobowości.",
    source: "Rozdz.1.5,s.36-37",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 29,
    question: "Co to jest silna sytuacja?",
    options: {
      a: "Sytuacja wymagająca siły fizycznej",
      b: "Środowisko o wysokim natężeniu dźwięku",
      c: "Wyraźne normy i oczekiwania, wszyscy zachowują się podobnie",
      d: "Sytuacja w siłowni"
    },
    correctAnswer: "c",
    explanation: "Silna sytuacja: wyraźne normy/oczekiwania, wszyscy zachowują się podobnie (ceremonia, egzamin, sąd).",
    source: "Rozdz.1.5,s.37-38",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 30,
    question: "Co to jest słaba sytuacja?",
    options: {
      a: "Sytuacja wymagająca słabej energii",
      b: "Brak jasnych norm, różnice osobowości bardziej widoczne",
      c: "Sytuacja niebezpieczna",
      d: "Sytuacja z niską temperaturą"
    },
    correctAnswer: "b",
    explanation: "Słaba sytuacja: brak jasnych norm, różnice osobowości bardziej widoczne (wolny czas w parku).",
    source: "Rozdz.1.5,s.37-38",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 31,
    question: "Kto przeprowadził Stanfordzki Eksperyment Więzienny?",
    options: {
      a: "Stanley Milgram",
      b: "Solomon Asch",
      c: "Philip Zimbardo",
      d: "Albert Bandura"
    },
    correctAnswer: "c",
    explanation: "Philip Zimbardo przeprowadził Stanfordzki Eksperyment Więzienny w 1971 roku na Stanford University.",
    source: "Rozdz.1.6,s.40",
    category: "Wprowadzenie do psychologii",
    difficulty: "medium"
  },
  {
    id: 32,
    question: "W którym roku był Stanfordzki Eksperyment Więzienny?",
    options: {
      a: "1961",
      b: "1971",
      c: "1981",
      d: "1991"
    },
    correctAnswer: "b",
    explanation: "Stanfordzki Eksperyment Więzienny przeprowadzono w 1971 roku w piwnicy budynku psychologii na Stanfordzie.",
    source: "Rozdz.1.6,s.40",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 33,
    question: "Gdzie odbył się Stanfordzki Eksperyment Więzienny?",
    options: {
      a: "Yale University",
      b: "Harvard University",
      c: "MIT",
      d: "Piwnica budynku psychologii Stanford University"
    },
    correctAnswer: "d",
    explanation: "Eksperyment odbył się w piwnicy budynku psychologii na Uniwersytecie Stanfordzkim, przerobionej na więzienie.",
    source: "Rozdz.1.6,s.40",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 34,
    question: "Ilu uczestników było w Stanfordzkim Eksperymencie?",
    options: {
      a: "12 studentów",
      b: "24 studentów",
      c: "48 studentów",
      d: "100 studentów"
    },
    correctAnswer: "b",
    explanation: "24 zdrowych psychicznie studentów płci męskiej, losowo przydzielonych do ról więźniów i strażników.",
    source: "Rozdz.1.6,s.40",
    category: "Wprowadzenie do psychologii",
    difficulty: "medium"
  },
  {
    id: 35,
    question: "Jakie role były w Stanfordzkim Eksperymencie?",
    options: {
      a: "Nauczyciele i uczniowie",
      b: "Lekarze i pacjenci",
      c: "Więźniowie i strażnicy",
      d: "Kierowcy i pasażerowie"
    },
    correctAnswer: "c",
    explanation: "Uczestnicy zostali LOSOWO przypisani do ról: więźniowie vs strażnicy w symulowanym więzieniu.",
    source: "Rozdz.1.6,s.40-41",
    category: "Wprowadzenie do psychologii",
    difficulty: "medium"
  },
  {
    id: 36,
    question: "Jak długo trwał Stanfordzki Eksperyment?",
    options: {
      a: "Planowany 2 tygodnie, przerwany po 6 dniach",
      b: "Pełne 2 tygodnie",
      c: "Tylko 1 dzień",
      d: "6 pełnych miesięcy"
    },
    correctAnswer: "a",
    explanation: "Planowane 2 tygodnie, ale przerwano po 6 dniach z powodu intensywnego dystresu i okrucieństwa.",
    source: "Rozdz.1.6,s.42",
    category: "Wprowadzenie do psychologii",
    difficulty: "medium"
  },
  {
    id: 37,
    question: "Dlaczego przerwano Stanfordzki Eksperyment?",
    options: {
      a: "Brak funduszy na kontynuację",
      b: "Koniec semestru akademickiego",
      c: "Strażnicy okrutni, więźniowie załamani psychicznie",
      d: "Niesprzyjająca pogoda"
    },
    correctAnswer: "c",
    explanation: "Przerwano bo strażnicy stali się coraz bardziej okrutni, więźniowie wykazywali poważny dystres psychiczny.",
    source: "Rozdz.1.6,s.42",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 38,
    question: "Co to jest deindywidualizacja?",
    options: {
      a: "Zwiększona świadomość siebie",
      b: "Wzmocniony indywidualizm",
      c: "Utrata świadomości siebie i odpowiedzialności w anonimowej sytuacji",
      d: "Wzrost samoświadomości"
    },
    correctAnswer: "c",
    explanation: "Deindywidualizacja: utrata świadomości siebie jako jednostki i poczucia odpowiedzialności, występuje w tłumie/anonimowych sytuacjach.",
    source: "Rozdz.1.6,s.41",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 39,
    question: "Jak wywołano deindywidualizację w Stanfordzkim Eksperymencie?",
    options: {
      a: "Brak jakichkolwiek procedur",
      b: "Wszystkie nazwiska publicznie ogłaszane",
      c: "Unikalne mundury dla każdego",
      d: "Uniformy dla strażników, numery zamiast imion dla więźniów"
    },
    correctAnswer: "d",
    explanation: "Strażnicy: uniformy, ciemne okulary (anonimowość). Więźniowie: numery zamiast imion, upokarzające \"sukienki\" (depersonalizacja).",
    source: "Rozdz.1.6,s.41",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 40,
    question: "Jaki jest główny wniosek ze Stanfordzkiego Eksperymentu?",
    options: {
      a: "Wszyscy ludzie są z natury źli",
      b: "Osobowość nie ma żadnego znaczenia",
      c: "Więzienia są dobrymi instytucjami",
      d: "Sytuacja i role mogą dramatycznie zmienić zachowanie normalnych ludzi"
    },
    correctAnswer: "d",
    explanation: "SIŁA SYTUACJI: normalni ludzie przyjmują destrukcyjne zachowania w określonych rolach. \"Dobrzy ludzie mogą czynić zło w złych systemach\".",
    source: "Rozdz.1.6,s.42-43",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 41,
    question: "Co to jest depersonalizacja?",
    options: {
      a: "Wzrost personalizacji",
      b: "Traktowanie innych jako obiektów, nie osób",
      c: "Proces humanizacji",
      d: "Wzrost empatii"
    },
    correctAnswer: "b",
    explanation: "Depersonalizacja: traktowanie innych jako obiektów/numerów, nie jako osób z emocjami i godnością.",
    source: "Rozdz.1.6,s.41",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 42,
    question: "Kto przekonał Zimbardo do przerwania eksperymentu?",
    options: {
      a: "Miejscowa policja",
      b: "Christina Maslach",
      c: "Rodzice uczestników",
      d: "Władze uniwersytetu"
    },
    correctAnswer: "b",
    explanation: "Christina Maslach (psycholog, późniejsza żona Zimbardo) przekonała go do przerwania eksperymentu.",
    source: "Rozdz.1.6,s.42",
    category: "Wprowadzenie do psychologii",
    difficulty: "medium"
  },
  {
    id: 43,
    question: "Co to jest \"Efekt Lucyfera\"?",
    options: {
      a: "Teoria o dobru uniwersalnym",
      b: "Koncepcja religijna",
      c: "Dobrzy ludzie mogą czynić zło w złych systemach",
      d: "Wyłącznie teoria literacka"
    },
    correctAnswer: "c",
    explanation: "\"Efekt Lucyfera\" (Zimbardo): dobrzy ludzie mogą czynić zło w złych systemach/sytuacjach, nie tylko \"źli\" ludzie są niebezpieczni.",
    source: "Rozdz.1.6,s.43",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 44,
    question: "Jakie problemy etyczne miał Stanfordzki Eksperyment?",
    options: {
      a: "Nie miał żadnych problemów",
      b: "Wyłącznie finansowe",
      c: "Wyłącznie prawne",
      d: "Dystres uczestników, Zimbardo jako badacz i \"naczelnik\" - konflikt ról"
    },
    correctAnswer: "d",
    explanation: "Problemy: poważny dystres uczestników, Zimbardo jako badacz I \"naczelnik więzienia\" (konflikt), niemożliwe do replikacji dziś.",
    source: "Rozdz.1.6,s.42-43",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 45,
    question: "Co wyjaśnia Stanfordzki Eksperyment?",
    options: {
      a: "Wyłącznie teorie abstrakcyjne",
      b: "Zachowania w prawdziwych więzieniach (Abu Ghraib), siłę ról społecznych",
      c: "Wyłącznie szczęście",
      d: "Mechanizmy gospodarki"
    },
    correctAnswer: "b",
    explanation: "Wyjaśnia zachowania w prawdziwych więzieniach (Abu Ghraib), potrzebę nadzoru władzy, znaczenie struktur instytucjonalnych.",
    source: "Rozdz.1.6,s.43",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 46,
    question: "Co to jest kontrowersja osoba vs sytuacja?",
    options: {
      a: "Spór o wzrost człowieka",
      b: "Czy zachowanie determinują cechy osobowości czy czynniki sytuacyjne",
      c: "Kontrowersja polityczna",
      d: "Nie ma takiej debaty"
    },
    correctAnswer: "b",
    explanation: "Debata: co bardziej determinuje zachowanie – stabilne cechy osobowości czy czynniki sytuacyjne?",
    source: "Rozdz.1.5,s.36-37",
    category: "Wprowadzenie do psychologii",
    difficulty: "medium"
  },
  {
    id: 47,
    question: "Co to jest interakcjonizm?",
    options: {
      a: "Wyłącznie cechy osobowości",
      b: "Interakcja osoby i sytuacji determinuje zachowanie",
      c: "Wyłącznie sytuacja",
      d: "Ignorowanie obu czynników"
    },
    correctAnswer: "b",
    explanation: "Interakcjonizm (konsensus współczesny): zachowanie wynika z interakcji cech osobowości i czynników sytuacyjnych.",
    source: "Rozdz.1.5,s.37",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 48,
    question: "Jak strażnicy zachowywali się w Stanfordzkim Eksperymencie?",
    options: {
      a: "Bardzo życzliwie",
      b: "Całkowicie obojętnie",
      c: "Stawali się okrutni i sadystyczni",
      d: "Całkowicie normalnie"
    },
    correctAnswer: "c",
    explanation: "Strażnicy szybko stali się okrutni, sadystyczni, stosowali upokarzające traktowanie mimo normalnej osobowości przed eksperymentem.",
    source: "Rozdz.1.6,s.41-42",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 50,
    question: "Co to jest gradacja zobowiązania?",
    options: {
      a: "System szkolny",
      b: "Nagła zmiana zachowania",
      c: "Stopniowe wchodzenie w rolę, małe kroki prowadzą do dużych zmian",
      d: "Brak zobowiązania"
    },
    correctAnswer: "c",
    explanation: "Gradacja zobowiązania: stopniowe wchodzenie w rolę (małe kroki), coraz trudniej się wycofać.",
    source: "Rozdz.1.6,s.41",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 51,
    question: "Co to jest normalizacja w kontekście Stanfordzkiego Eksperymentu?",
    options: {
      a: "Powrót do normalności",
      b: "Wyłącznie termin statystyczny",
      c: "Proces zdrowienia",
      d: "Okrucieństwo staje się \"normalne\" w danym kontekście"
    },
    correctAnswer: "d",
    explanation: "Normalizacja: okrucieństwo/destrukcyjne zachowania stają się \"normalne\", akceptowalne w danym systemie.",
    source: "Rozdz.1.6,s.41",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 52,
    question: "Czym są schematy poznawcze?",
    options: {
      a: "Chaotyczne myślenie",
      b: "Zorganizowane struktury wiedzy wpływające na percepcję",
      c: "Wyłącznie matematyka",
      d: "Losowe skojarzenia"
    },
    correctAnswer: "b",
    explanation: "Schematy poznawcze: zorganizowane struktury wiedzy o świecie, wpływają na percepcję, pamięć, myślenie.",
    source: "Rozdz.1.2,s.20-21",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 53,
    question: "Co to jest trafność wewnętrzna?",
    options: {
      a: "Trafność zewnętrzna",
      b: "Wyłącznie opis zjawiska",
      c: "Stopień kontroli zmiennych, pewność że VI wywołuje DV",
      d: "Brak znaczenia metodologicznego"
    },
    correctAnswer: "c",
    explanation: "Trafność wewnętrzna: stopień pewności, że obserwowane efekty wynikają z manipulacji VI, nie z innych czynników.",
    source: "Rozdz.1.3,s.29",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 54,
    question: "Co to jest trafność zewnętrzna?",
    options: {
      a: "Trafność wewnętrzna",
      b: "Wyłącznie środowisko laboratoryjne",
      c: "Możliwość uogólnienia wyników na inne osoby i sytuacje",
      d: "Brak zastosowania praktycznego"
    },
    correctAnswer: "c",
    explanation: "Trafność zewnętrzna: stopień możliwości uogólnienia wyników na inne osoby, miejsca, czasy niż badane.",
    source: "Rozdz.1.3,s.29-30",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 55,
    question: "Czym jest eksperyment terenowy?",
    options: {
      a: "Wyłącznie w laboratorium",
      b: "Wyłącznie ankiety",
      c: "Obserwacja bez manipulacji",
      d: "Badanie w naturalnym środowisku z manipulacją VI"
    },
    correctAnswer: "d",
    explanation: "Eksperyment terenowy: manipulacja VI i pomiar DV w naturalnym środowisku (wyższa trafność zewnętrzna, trudniejsza kontrola).",
    source: "Rozdz.1.3,s.26",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 56,
    question: "Czym jest eksperyment laboratoryjny?",
    options: {
      a: "Badania terenowe",
      b: "Badanie w skonstruowanych warunkach z wysoką kontrolą",
      c: "Wyłącznie obserwacja",
      d: "Wyłącznie ankiety"
    },
    correctAnswer: "b",
    explanation: "Eksperyment laboratoryjny: badanie w kontrolowanych warunkach laboratoryjnych (wysoka trafność wewnętrzna, niska zewnętrzna).",
    source: "Rozdz.1.3,s.26",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 57,
    question: "Co to są sędziowie kompetentni?",
    options: {
      a: "Sędziowie prawni",
      b: "Wyłącznie sędziowie sądowi",
      c: "Osoby kodujące zachowania, nie znające hipotez (unikanie stronniczości)",
      d: "Uczestnicy badania"
    },
    correctAnswer: "c",
    explanation: "Sędziowie kompetentni: osoby kodujące zachowania w badaniach, nie znające hipotez, przeszkolone, zapewniają obiektywność.",
    source: "Rozdz.1.3,s.28",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 58,
    question: "Co to jest efekt akceptacji społecznej?",
    options: {
      a: "Prawdziwe odpowiedzi",
      b: "Odpowiedzi społecznie pożądane zamiast prawdziwych w ankietach",
      c: "Odrzucenie społeczne",
      d: "Brak wpływu społecznego"
    },
    correctAnswer: "b",
    explanation: "Efekt akceptacji społecznej (social desirability): odpowiadanie jak \"powinno być\", nie jak \"jest\", problem ankiet.",
    source: "Rozdz.1.3,s.29",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 59,
    question: "Co to jest metoda obserwacyjna?",
    options: {
      a: "Wyłącznie eksperyment",
      b: "Systematyczne obserwowanie i kodowanie zachowań bez manipulacji",
      c: "Wyłącznie ankiety",
      d: "Wyłącznie wywiady"
    },
    correctAnswer: "b",
    explanation: "Metoda obserwacyjna: systematyczne obserwowanie zachowań (jawna/ukryta, uczestnicząca/nieuczestnicząca).",
    source: "Rozdz.1.3,s.28",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 60,
    question: "Co to jest obserwacja ukryta?",
    options: {
      a: "Obserwacja jawna",
      b: "Wyłącznie obserwacja otwarta",
      c: "Badani nie wiedzą, że są obserwowani",
      d: "Eksperyment kontrolowany"
    },
    correctAnswer: "c",
    explanation: "Obserwacja ukryta: badani nie wiedzą, że są obserwowani (naturalne zachowania, ale problemy etyczne).",
    source: "Rozdz.1.3,s.28",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 61,
    question: "Co to jest obserwacja jawna?",
    options: {
      a: "Obserwacja ukryta",
      b: "Badani wiedzą, że są obserwowani",
      c: "Eksperyment",
      d: "Ankieta"
    },
    correctAnswer: "b",
    explanation: "Obserwacja jawna: badani wiedzą o obserwacji (etycznie lepsza, ale może zmieniać zachowanie).",
    source: "Rozdz.1.3,s.28",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 62,
    question: "Dlaczego potrzebna jest replikacja badań?",
    options: {
      a: "Wyłącznie dla zabawy",
      b: "Pojedyncze badanie niewiarygodne, replikacja potwierdza prawidłowość",
      c: "Nie jest potrzebna",
      d: "Wyłącznie biurokracja"
    },
    correctAnswer: "b",
    explanation: "Replikacja (powtórzenie): pojedyncze badanie zawodne (błąd próby, przypadek), dopiero wielokrotne potwierdzenie przekonuje.",
    source: "Rozdz.1.3,s.26-32",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 63,
    question: "Co to jest moderator?",
    options: {
      a: "Przyczyna zjawiska",
      b: "Skutek zjawiska",
      c: "Wyłącznie rola w mediach",
      d: "Czynnik decydujący o kierunku lub sile zależności (kiedy działa)"
    },
    correctAnswer: "d",
    explanation: "Moderator: czynnik decydujący o kierunku/sile zależności. Odpowiada na pytanie \"KIEDY\" (w jakich warunkach) prawidłowość działa.",
    source: "Rozdz.1.3,s.30-31",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 64,
    question: "Co to jest mediator?",
    options: {
      a: "Wyłącznie moderator",
      b: "Proces pośredniczący między przyczyną a skutkiem (dlaczego działa)",
      c: "Wyłącznie negocjacje",
      d: "Brak znaczenia naukowego"
    },
    correctAnswer: "b",
    explanation: "Mediator: proces/stan psychiczny pośredniczący między VI a DV. Odpowiada na pytanie \"DLACZEGO\" prawidłowość występuje.",
    source: "Rozdz.1.3,s.31",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 65,
    question: "Po co eliminować alternatywne wyjaśnienia?",
    options: {
      a: "Nie trzeba tego robić",
      b: "By ustalić, która z możliwych przyczyn faktycznie wywołuje zjawisko",
      c: "Wyłącznie komplikacja",
      d: "Wyłącznie dla zabawy"
    },
    correctAnswer: "b",
    explanation: "Eliminacja alternatywnych wyjaśnień: konieczna gdy zjawisko ma wiele możliwych przyczyn – trzeba ustalić, która faktycznie działa.",
    source: "Rozdz.1.3,s.29",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 66,
    question: "Co to jest badanie archiwalne?",
    options: {
      a: "Tworzenie nowych danych",
      b: "Wyłącznie eksperyment",
      c: "Wyłącznie ankiety",
      d: "Analiza istniejących danych (dokumenty, media, statystyki)"
    },
    correctAnswer: "d",
    explanation: "Badanie archiwalne: analiza istniejących danych (dokumenty, media, statystyki publiczne), analiza treści.",
    source: "Rozdz.1.3,s.28",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 67,
    question: "Co to jest poufność danych?",
    options: {
      a: "Wszystkie dane publiczne",
      b: "Dane badanych są chronione, nikomu nieupoważnionemu niedostępne",
      c: "Wszystko całkowicie jawne",
      d: "Brak ochrony danych"
    },
    correctAnswer: "b",
    explanation: "Poufność i anonimowość: dane uczestników chronione, tożsamość nieujawniana, zasada etyczna.",
    source: "Rozdz.1.4,s.32-36",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 68,
    question: "Co to jest ochrona przed krzywdą?",
    options: {
      a: "Badania mogą szkodzić",
      b: "Wyłącznie ochrona fizyczna",
      c: "Badania nie mogą wyrządzać krzywdy fizycznej ani psychologicznej",
      d: "Ochrona nie jest ważna"
    },
    correctAnswer: "c",
    explanation: "Ochrona przed krzywdą: badania nie mogą wyrządzać krzywdy fizycznej ani psychologicznej uczestnikom.",
    source: "Rozdz.1.4,s.32",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 69,
    question: "Kiedy deception jest dopuszczalne?",
    options: {
      a: "Zawsze dopuszczalne",
      b: "Nigdy dopuszczalne",
      c: "Wyłącznie za pieniądze",
      d: "Gdy konieczne dla badania, nie szkodzi, pełny debriefing"
    },
    correctAnswer: "d",
    explanation: "Deception dopuszczalne gdy: (1) konieczne (znajomość celu zmieniłaby zachowanie), (2) nie wyrządza krzywdy, (3) pełny debriefing.",
    source: "Rozdz.1.4,s.33-34",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 70,
    question: "Co to jest rzetelność międzyoceniająca?",
    options: {
      a: "Ocena jednego oceniacza",
      b: "Ocena losowa",
      c: "Zgodność ocen między niezależnymi sędziami kompetentnymi",
      d: "Brak obiektywizmu"
    },
    correctAnswer: "c",
    explanation: "Rzetelność międzyoceniająca: stopień zgodności ocen między niezależnymi obserwatorami/sędziami, wskaźnik obiektywności.",
    source: "Rozdz.1.3,s.28",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 71,
    question: "Co to jest skala Likerta?",
    options: {
      a: "Wyłącznie tak/nie",
      b: "Skala odpowiedzi (np. 1-5, całkowicie się nie zgadzam - całkowicie się zgadzam)",
      c: "Wyłącznie liczby całkowite",
      d: "Termometr medyczny"
    },
    correctAnswer: "b",
    explanation: "Skala Likerta: skala odpowiedzi w ankietach (np. 1-7: całkowicie nie zgadzam się - całkowicie zgadzam się).",
    source: "Rozdz.1.3,s.29",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 72,
    question: "Czym różnią się pytania otwarte i zamknięte?",
    options: {
      a: "Niczym się nie różnią",
      b: "Wyłącznie długością",
      c: "Otwarte: swobodna odpowiedź, Zamknięte: wybór z opcji",
      d: "Nie ma różnicy"
    },
    correctAnswer: "c",
    explanation: "Pytania otwarte: swobodna odpowiedź (bogactwo danych, trudna analiza). Zamknięte: wybór z opcji (łatwa analiza, ograniczenie odpowiedzi).",
    source: "Rozdz.1.3,s.29",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 73,
    question: "Co to jest warunkowanie klasyczne?",
    options: {
      a: "Warunkowanie sprawcze",
      b: "Wyłącznie operanty",
      c: "Uczenie się znaczenia bodźca przez kojarzenie z innym bodźcem",
      d: "Brak naukowego znaczenia"
    },
    correctAnswer: "c",
    explanation: "Warunkowanie klasyczne (Pavlov): uczenie się znaczenia obojętnego bodźca przez systematyczne kojarzenie z bodźcem znaczącym.",
    source: "Rozdz.1.2,s.19-20",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 74,
    question: "Co to jest warunkowanie sprawcze?",
    options: {
      a: "Warunkowanie klasyczne",
      b: "Uczenie się przez konsekwencje zachowań (nagrody/kary)",
      c: "Wyłącznie Pavlov",
      d: "Nie działa u ludzi"
    },
    correctAnswer: "b",
    explanation: "Warunkowanie sprawcze (operant): uczenie się przez konsekwencje zachowań – nagradzane reakcje stają się nawykami.",
    source: "Rozdz.1.2,s.20",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 75,
    question: "Co to jest modelowanie według Bandury?",
    options: {
      a: "Wyłącznie moda",
      b: "Wyłącznie rzeźba",
      c: "Uczenie się przez obserwację zachowań innych i ich konsekwencji",
      d: "Brak naukowej wartości"
    },
    correctAnswer: "c",
    explanation: "Modelowanie (Bandura): świadome uczenie się przez obserwację zachowań innych i ich konsekwencji, teoria uczenia społecznego.",
    source: "Rozdz.1.2,s.20",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 76,
    question: "Co to jest efekt kameleona?",
    options: {
      a: "Badanie zwierząt",
      b: "Automatyczne, nieświadome kopiowanie zachowań innych (mimikra behawioralna)",
      c: "Zmiana koloru skóry",
      d: "Wyłącznie biologia"
    },
    correctAnswer: "b",
    explanation: "Efekt kameleona: automatyczne, często nieświadome naśladownictwo zachowań innych (gesty, postawa), buduje więzi.",
    source: "Rozdz.11.1,s.276",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 77,
    question: "Jakie są konsekwencje dużego mózgu u ludzi?",
    options: {
      a: "Brak konsekwencji",
      b: "Wyłącznie wyższa inteligencja",
      c: "Przedłużone dzieciństwo, bezradność niemowląt, system przywiązania",
      d: "Wyłącznie większa czaszka"
    },
    correctAnswer: "c",
    explanation: "Konsekwencje dużego mózgu: przedłużone dzieciństwo, bezradność niemowląt, system przywiązania dziecko-opiekun, miłość, monogamia.",
    source: "Rozdz.1.1,s.18-19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 78,
    question: "Co to jest motyw przynależności?",
    options: {
      a: "Potrzeba bycia akceptowanym przez innych, tworzenia więzi",
      b: "Wyłącznie praca zawodowa",
      c: "Wyłącznie pieniądze",
      d: "Izolacja społeczna"
    },
    correctAnswer: "a",
    explanation: "Motyw przynależności: fundamentalna potrzeba bycia akceptowanym, tworzenia i utrzymywania więzi społecznych.",
    source: "Rozdz.1.1,s.19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 79,
    question: "Co to jest motyw kontroli?",
    options: {
      a: "Chaos i nieprzewidywalność",
      b: "Wyłącznie polityka",
      c: "Potrzeba wpływania na otoczenie i wydarzenia",
      d: "Brak znaczenia psychologicznego"
    },
    correctAnswer: "c",
    explanation: "Motyw kontroli: fundamentalna potrzeba wpływania na otoczenie, przewidywania wydarzeń, unikania bezradności.",
    source: "Rozdz.1.1,s.19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 80,
    question: "Co to jest motyw zrozumienia?",
    options: {
      a: "Chaos i brak sensu",
      b: "Wyłącznie nauka akademicka",
      c: "Potrzeba spójnego obrazu świata, sensownego wyjaśnienia",
      d: "Nie jest ważny psychologicznie"
    },
    correctAnswer: "c",
    explanation: "Motyw zrozumienia: fundamentalna potrzeba posiadania spójnego, sensownego obrazu świata i zrozumienia przyczynowości.",
    source: "Rozdz.1.1,s.19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 81,
    question: "Co to jest motyw pozytywnej samooceny?",
    options: {
      a: "Niska samoocena",
      b: "Wyłącznie egoizm",
      c: "Potrzeba dobrego mniemania o sobie",
      d: "Brak znaczenia"
    },
    correctAnswer: "c",
    explanation: "Motyw pozytywnej samooceny: fundamentalna potrzeba utrzymywania dobrego mniemania o sobie, obrony przed zagrożeniami ego.",
    source: "Rozdz.1.1,s.19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 82,
    question: "Co to jest motyw wsparcia?",
    options: {
      a: "Całkowita samodzielność",
      b: "Wyłącznie słabość",
      c: "Potrzeba pomocy innych w trudnych sytuacjach",
      d: "Brak znaczenia"
    },
    correctAnswer: "c",
    explanation: "Motyw wsparcia: fundamentalna potrzeba otrzymywania pomocy i wsparcia od innych, szczególnie w trudnych sytuacjach.",
    source: "Rozdz.1.1,s.19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 83,
    question: "Czym jest altruizm wzajemny?",
    options: {
      a: "Wyłącznie rodzina",
      b: "Całkowicie bezinteresowne",
      c: "Pomaganie niespokrewnionym z oczekiwaniem przyszłej wzajemności",
      d: "Brak ewolucyjnego podłoża"
    },
    correctAnswer: "c",
    explanation: "Altruizm wzajemny: pomaganie niespokrewnionym z (często nieświadomym) oczekiwaniem przyszłej wzajemności, ewolucyjnie korzystny.",
    source: "Rozdz.1.2,s.23",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 84,
    question: "Co to jest transfer pobudzenia emocjonalnego?",
    options: {
      a: "Całkowity spokój",
      b: "Pobudzenie z poprzedniej sytuacji \"przelewa się\" na nową, wzmacniając reakcje",
      c: "Brak wpływu",
      d: "Wyłącznie fizjologia"
    },
    correctAnswer: "b",
    explanation: "Transfer pobudzenia: pobudzenie emocjonalne z poprzedniej sytuacji przypisywane bieżącej, wzmacnia reakcje (często nieadekwatnie).",
    source: "Rozdz.1.2,s.22",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 85,
    question: "Jakie są typy metody obserwacyjnej?",
    options: {
      a: "Wyłącznie jawna",
      b: "Jawna/ukryta, uczestnicząca/nieuczestnicząca, systematyczna/naturalistyczna",
      c: "Wyłącznie jedna",
      d: "Brak typów"
    },
    correctAnswer: "b",
    explanation: "Typy obserwacji: jawna vs ukryta, uczestnicząca vs nieuczestnicząca, systematyczna vs naturalistyczna.",
    source: "Rozdz.1.3,s.28",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 86,
    question: "Jak kultura wpływa na jednostkę?",
    options: {
      a: "Nie wpływa wcale",
      b: "Wyłącznie językowo",
      c: "Kultura kształtuje myśli, uczucia, zachowania przez normy i wartości",
      d: "Wpływ minimalny"
    },
    correctAnswer: "c",
    explanation: "Kultura kształtuje myśli, uczucia, zachowania jednostki przez normy, wartości, wzorce – socjalizacja w konkretnej kulturze.",
    source: "Rozdz.1.2,s.23-24",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 87,
    question: "Czym różnią się kultury indywidualistyczne i kolektywistyczne?",
    options: {
      a: "Niczym się nie różnią",
      b: "Indywidualizm: jednostka>grupa (Zachód), Kolektywizm: grupa>jednostka (Azja)",
      c: "Wyłącznie językiem",
      d: "Wyłącznie pogodą"
    },
    correctAnswer: "b",
    explanation: "Indywidualizm (Zachód): jednostka>grupa, autonomia, cele osobiste. Kolektywizm (Azja): grupa>jednostka, harmonia, cele kolektywne.",
    source: "Rozdz.1.2,s.23-24",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 88,
    question: "Jak różni się postrzeganie siebie w kulturach?",
    options: {
      a: "Tak samo wszędzie",
      b: "Indywidualiści: \"inni jak ja\", Kolektywiści: \"ja jak inni\"",
      c: "Nie ma różnic",
      d: "Wyłącznie losowo"
    },
    correctAnswer: "b",
    explanation: "Indywidualiści: uważają że inni są bardziej podobni do nich (Ja najważniejsze). Kolektywiści: widzą siebie podobnych do innych (grupa ważniejsza).",
    source: "Rozdz.1.2,s.24",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 89,
    question: "Co to jest prawidłowość probabilistyczna?",
    options: {
      a: "Pewność 100%",
      b: "Wyłącznie matematyka",
      c: "Zjawisko występuje z pewnym prawdopodobieństwem, nie zawsze",
      d: "Prawidłowość deterministyczna"
    },
    correctAnswer: "c",
    explanation: "Prawidłowość probabilistyczna: zjawisko występuje z pewnym prawdopodobieństwem, nie ze 100% pewnością (charakter praw psychologicznych).",
    source: "Rozdz.1.3,s.26",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 90,
    question: "Dlaczego pojedyncze badanie jest niewiarygodne?",
    options: {
      a: "Jest zawsze wiarygodne",
      b: "Błąd próby, zakłócenia metodologiczne, specyfika uczestników",
      c: "Jest zawsze perfekcyjne",
      d: "Nie wiadomo dlaczego"
    },
    correctAnswer: "b",
    explanation: "Pojedyncze badanie obarczone: błędem próby, zakłóceniami metodologicznymi, specyfiką uczestników/warunków – różne badania = różne błędy.",
    source: "Rozdz.1.3,s.26",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 91,
    question: "Co to jest efekt halo?",
    options: {
      a: "Zjawisko świetlne",
      b: "Wyłącznie religia",
      c: "Uogólnianie jednej cechy (np. atrakcyjność) na inne cechy",
      d: "Brak naukowego znaczenia"
    },
    correctAnswer: "c",
    explanation: "Efekt halo: uogólnianie jednej pozytywnej cechy (np. atrakcyjność fizyczna) na inne cechy (inteligencja, uczciwość).",
    source: "Rozdz.11.2,s.285",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 92,
    question: "Czym jest perspektywa motywacyjna?",
    options: {
      a: "Ignorowanie motywów",
      b: "Wyłącznie emocje",
      c: "Wyłącznie poznanie",
      d: "Koncentracja na pobudkach działania – jakie motywy kierują zachowaniem"
    },
    correctAnswer: "d",
    explanation: "Perspektywa motywacyjna: koncentracja na pobudkach działania, jakie motywy ludźmi kierują i skłaniają do działań.",
    source: "Rozdz.1.2,s.21-22",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 93,
    question: "Czym jest perspektywa społeczno-kulturowa?",
    options: {
      a: "Ignorowanie kultury",
      b: "Wyłącznie biologia",
      c: "Wyłącznie psychologia",
      d: "Człowiek jako wytwór socjalizacji w konkretnej kulturze i grupie"
    },
    correctAnswer: "d",
    explanation: "Perspektywa społeczno-kulturowa: człowiek jako wytwór socjalizacji w konkretnej grupie i kulturze, normy/wartości kształtują zachowanie.",
    source: "Rozdz.1.2,s.23-24",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 94,
    question: "Co to jest teoria uczenia społecznego?",
    options: {
      a: "Wyłącznie szkoła",
      b: "Wyłącznie czytanie",
      c: "Uczenie się przez obserwację innych (modelowanie Bandury)",
      d: "Brak znaczenia naukowego"
    },
    correctAnswer: "c",
    explanation: "Teoria uczenia społecznego (Bandura): ludzie uczą się zachowań obserwując innych i konsekwencje ich działań.",
    source: "Rozdz.1.2,s.20",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 95,
    question: "Dlaczego wielki mózg pojawił się przed kulturą?",
    options: {
      a: "Nie pojawił się wcześniej",
      b: "Wyłącznie przypadek",
      c: "Nie wiadomo dlaczego",
      d: "Mózg ewoluował do życia społecznego, kultura potem"
    },
    correctAnswer: "d",
    explanation: "Wielki mózg pojawił się na długo przed złożoną kulturą – ewoluował głównie do radzenia sobie z innymi ludźmi (życie grupowe).",
    source: "Rozdz.1.1,s.18",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 96,
    question: "Co to jest dynamika grupowa?",
    options: {
      a: "Wyłącznie fizyka",
      b: "Procesy zachodzące w grupach, interakcje członków (badania Lewina)",
      c: "Wyłącznie sport",
      d: "Brak naukowego znaczenia"
    },
    correctAnswer: "b",
    explanation: "Dynamika grupowa (Lewin): procesy zachodzące w grupach, wzajemne oddziaływanie członków, przywództwo, normy.",
    source: "Rozdz.1.2,s.25",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 97,
    question: "Po co stosuje się dodatkowe grupy kontrolne?",
    options: {
      a: "Wyłącznie komplikacja",
      b: "By wykluczyć alternatywne wyjaśnienia, zwiększyć kontrolę",
      c: "Nie są potrzebne",
      d: "Wyłącznie dla zabawy"
    },
    correctAnswer: "b",
    explanation: "Dodatkowe grupy kontrolne: wykluczają alternatywne wyjaśnienia, zwiększają pewność co do przyczyny efektu.",
    source: "Rozdz.1.3,s.27-28",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 98,
    question: "Co to jest seksualny dobór naturalny?",
    options: {
      a: "Wyłącznie przeżycie",
      b: "Całkowity przypadek",
      c: "Wyłącznie kultura",
      d: "Preferencje partnera ewoluowały zwiększając sukces reprodukcyjny"
    },
    correctAnswer: "d",
    explanation: "Seksualny dobór naturalny: preferencje dotyczące partnera ewoluowały bo zwiększały sukces reprodukcyjny (różnice płciowe).",
    source: "Rozdz.1.2,s.23",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 99,
    question: "Czym jest współpraca i kultura jako przedsięwzięcia ultraspoleczne?",
    options: {
      a: "Wyłącznie indywidualne",
      b: "Wyłącznie samotne",
      c: "Możliwe tylko razem z innymi lub przeciw innym",
      d: "Nie są społeczne"
    },
    correctAnswer: "c",
    explanation: "Współpraca i kultura to przedsięwzięcia ultraspoleczne – możliwe tylko razem z innymi albo przeciw innym.",
    source: "Rozdz.1.1,s.18-19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 100,
    question: "Co to jest analiza treści?",
    options: {
      a: "Ignorowanie treści",
      b: "Wyłącznie czytanie",
      c: "Systematyczna analiza komunikatów (media, dokumenty) w badaniach archiwalnych",
      d: "Brak naukowego znaczenia"
    },
    correctAnswer: "c",
    explanation: "Analiza treści: systematyczna, obiektywna analiza komunikatów (media, dokumenty, social media) w badaniach archiwalnych.",
    source: "Rozdz.1.3,s.28",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 101,
    question: "Dlaczego w Stanfordzkim Eksperymencie zastosowano losowy przydział?",
    options: {
      a: "Całkowity przypadek",
      b: "By różnice w zachowaniu wynikały z roli, nie z wcześniejszych różnic między uczestnikami",
      c: "Wyłącznie komplikacja",
      d: "Nie zastosowano tego"
    },
    correctAnswer: "b",
    explanation: "Losowy przydział zapewnił, że różnice w zachowaniu między strażnikami a więźniami wynikały z ROLI, nie z cech osobowości.",
    source: "Rozdz.1.6,s.40-41",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 102,
    question: "Co nosili strażnicy w Stanfordzkim Eksperymencie?",
    options: {
      a: "Zwykłe ubrania cywilne",
      b: "Upokarzające sukienki",
      c: "Uniformy, ciemne okulary, pałki",
      d: "Numery identyfikacyjne"
    },
    correctAnswer: "c",
    explanation: "Strażnicy: uniformy (władza), ciemne okulary (anonimowość, brak kontaktu wzrokowego), pałki (symbol siły).",
    source: "Rozdz.1.6,s.41",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 103,
    question: "Co nosili więźniowie w Stanfordzkim Eksperymencie?",
    options: {
      a: "Uniformy strażników",
      b: "Zwykłe ubrania cywilne",
      c: "Garnitury",
      d: "Upokarzające \"sukienki\", numery zamiast imion"
    },
    correctAnswer: "d",
    explanation: "Więźniowie: upokarzające \"sukienki\" (feminizacja, utrata męskości), numery zamiast imion (depersonalizacja).",
    source: "Rozdz.1.6,s.41",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 104,
    question: "Jaka była podwójna rola Zimbardo?",
    options: {
      a: "Wyłącznie badacz",
      b: "Wyłącznie obserwator",
      c: "Badacz I \"naczelnik więzienia\" - konflikt ról",
      d: "Wyłącznie uczestnik"
    },
    correctAnswer: "c",
    explanation: "Zimbardo był zarówno głównym badaczem JAK I \"naczelnikiem więzienia\" – konflikt ról, utrata obiektywizmu, problem etyczny.",
    source: "Rozdz.1.6,s.42",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 105,
    question: "Co pokazuje Stanfordzki Eksperyment o władzy ról?",
    options: {
      a: "Role nie wpływają wcale",
      b: "Wyłącznie osobowość decyduje",
      c: "Role społeczne determinują zachowania silniej niż osobowość",
      d: "Nie pokazuje niczego"
    },
    correctAnswer: "c",
    explanation: "WŁADZA RÓL: role społeczne (więzień, strażnik) determinują zachowania silniej niż wcześniejsza osobowość czy wartości.",
    source: "Rozdz.1.6,s.42-43",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 106,
    question: "Dlaczego Stanfordzki Eksperyment nie może być replikowany?",
    options: {
      a: "Może być swobodnie",
      b: "Brak funduszy badawczych",
      c: "Brak chętnych uczestników",
      d: "Problemy etyczne: zbyt duży dystres, niemożliwe do zaakceptowania dziś"
    },
    correctAnswer: "d",
    explanation: "Niemożliwy do replikacji z powodu problemów etycznych – zbyt duży dystres uczestników, współczesne standardy etyczne tego nie dopuszczają.",
    source: "Rozdz.1.6,s.42-43",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 107,
    question: "Co wyjaśnia Abu Ghraib Stanfordzki Eksperyment?",
    options: {
      a: "Nic konkretnego",
      b: "Wyłącznie teorię",
      c: "Tortury w Abu Ghraib: zwykli żołnierze w roli strażników stosują okrucieństwo (sytuacja/rola)",
      d: "Nie ma związku"
    },
    correctAnswer: "c",
    explanation: "Tortury w więzieniu Abu Ghraib (Irak): zwykli żołnierze amerykańscy w roli strażników – siła sytuacji/roli, nie \"źli ludzie\".",
    source: "Rozdz.1.6,s.43",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 108,
    question: "Co to znaczy \"tylko wykonywałem rozkazy\"?",
    options: {
      a: "Prawdziwe usprawiedliwienie",
      b: "Przeniesienie odpowiedzialności na autorytet (stan agentywny)",
      c: "Prawdziwa obrona prawna",
      d: "Nie ma znaczenia"
    },
    correctAnswer: "b",
    explanation: "\"Tylko wykonywałem rozkazy\": przeniesienie odpowiedzialności na autorytet, widzenie siebie jako agenta (stan agentywny Milgrama).",
    source: "Rozdz.11.1,s.280-281",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 109,
    question: "Co łączy Stanfordzki Eksperyment z Holokaustem?",
    options: {
      a: "Nic konkretnego",
      b: "Wyłącznie teoria",
      c: "Nie ma związku",
      d: "Pokazuje jak zwykli ludzie mogą czynić zło w określonych systemach/rolach"
    },
    correctAnswer: "d",
    explanation: "Oba pokazują jak zwykli, normalni ludzie mogą czynić zło w określonych systemach/rolach społecznych – siła sytuacji.",
    source: "Rozdz.1.6,s.43",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 110,
    question: "Po co stosuje się warunkowanie klasyczne u ludzi?",
    options: {
      a: "Nie stosuje się wcale",
      b: "Wyłącznie u zwierząt",
      c: "Uczymy się reakcji emocjonalnych (lęk u dentysty) przez kojarzenie",
      d: "Nie działa u ludzi"
    },
    correctAnswer: "c",
    explanation: "Warunkowanie klasyczne u ludzi: uczenie się reakcji emocjonalnych (lęk u dentysty – biały fartuch + ból).",
    source: "Rozdz.1.2,s.20",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 111,
    question: "Po co stosuje się warunkowanie sprawcze u ludzi?",
    options: {
      a: "Nie stosuje się wcale",
      b: "Wyłącznie teoria Pavlova",
      c: "Uczenie zachowań przez nagrody/kary (dziecko sprząta → pochwała)",
      d: "Nie działa u ludzi"
    },
    correctAnswer: "c",
    explanation: "Warunkowanie sprawcze u ludzi: uczenie zachowań przez konsekwencje – nagradzane zachowania powtarzane (dziecko sprząta → pochwała).",
    source: "Rozdz.1.2,s.20",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 112,
    question: "Jak dzieci uczą się agresji według Bandury?",
    options: {
      a: "Jest wrodzona",
      b: "Nie uczą się wcale",
      c: "Wyłącznie geny",
      d: "Obserwując agresję innych i jej konsekwencje (TV, rodzice, rówieśnicy)"
    },
    correctAnswer: "d",
    explanation: "Modelowanie (Bandura): dzieci uczą się agresji obserwując przemoc innych i jej konsekwencje (TV, filmy, rodzice, rówieśnicy).",
    source: "Rozdz.1.2,s.20",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 113,
    question: "Czy telewizja wpływa na agresję?",
    options: {
      a: "Nie wpływa wcale",
      b: "Wyłącznie pozytywnie",
      c: "Tak, dzieci/dorośli obserwują dziesiątki aktów przemocy dziennie - uczenie przez obserwację",
      d: "Nie wiadomo tego"
    },
    correctAnswer: "c",
    explanation: "Telewizja wpływa na agresję: dzieci/dorośli widują dziesiątki aktów przemocy dziennie – uczenie przez obserwację (modelowanie).",
    source: "Rozdz.1.2,s.20",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 114,
    question: "Co to jest norma społeczna?",
    options: {
      a: "Chaos społeczny",
      b: "Wyłącznie prawo",
      c: "Reguła określająca odpowiednie zachowanie w danej sytuacji/kulturze",
      d: "Brak znaczenia"
    },
    correctAnswer: "c",
    explanation: "Norma społeczna: reguła/standard określający co jest odpowiednie/akceptowalne w danej sytuacji, grupie, kulturze.",
    source: "Rozdz.1.2,s.23",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 115,
    question: "Jak normy wpływają na zachowanie?",
    options: {
      a: "Nie wpływają wcale",
      b: "Wyłącznie słabo",
      c: "Kształtują zachowanie, realizacja norm = szacunek i pozytywna samoocena",
      d: "Wpływają czasem"
    },
    correctAnswer: "c",
    explanation: "Normy kształtują zachowanie: ich realizacja = warunek szacunku otoczenia i pozytywnej samooceny (socjalizacja).",
    source: "Rozdz.1.2,s.23-24",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 116,
    question: "Co to jest socjalizacja?",
    options: {
      a: "Wyłącznie imprezy",
      b: "Wyłącznie dzieciństwo",
      c: "Proces stawania się członkiem kultury/grupy, przyswajanie norm i wartości",
      d: "Brak znaczenia"
    },
    correctAnswer: "c",
    explanation: "Socjalizacja: proces stawania się pełnym uczestnikiem kultury/grupy, przyswajanie norm, wartości, wzorców zachowania.",
    source: "Rozdz.1.2,s.23",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 117,
    question: "Czym różnią się subkultury?",
    options: {
      a: "Niczym się nie różnią",
      b: "Wyłącznie językiem",
      c: "Różne grupy w tej samej szerokiej kulturze mają odmienne normy i wartości",
      d: "Nie różnią się wcale"
    },
    correctAnswer: "c",
    explanation: "Subkultury: różne grupy/warstwy w tej samej szerokiej kulturze (kraj) mają odmienne wartości, normy, wzorce zachowania.",
    source: "Rozdz.1.2,s.23-24",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 118,
    question: "Co to są badania międzykulturowe?",
    options: {
      a: "Jedno państwo",
      b: "Wyłącznie język",
      c: "Wyłącznie turystyka",
      d: "Porównywanie osób z różnych kultur, test uniwersalności zjawisk"
    },
    correctAnswer: "d",
    explanation: "Badania międzykulturowe: porównywanie osób z różnych kultur, testowanie czy zjawiska są uniwersalne czy specyficzne kulturowo.",
    source: "Rozdz.1.2,s.24",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 119,
    question: "Co to są badania historyczne w PS?",
    options: {
      a: "Historia całego świata",
      b: "Wyłącznie archeologia",
      c: "Porównywanie tej samej kultury w różnych momentach historycznych",
      d: "Nie istnieją w PS"
    },
    correctAnswer: "c",
    explanation: "Badania historyczne: porównywanie osób z tej samej kultury badanych w różnych momentach – zmiany w czasie.",
    source: "Rozdz.1.2,s.24",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 120,
    question: "Czy cechy osobowości czy sytuacja?",
    options: {
      a: "Wyłącznie cechy",
      b: "Wyłącznie sytuacja",
      c: "Interakcja – oba czynniki wpływają na zachowanie",
      d: "Żadne z powyższych"
    },
    correctAnswer: "c",
    explanation: "Współczesny konsensus (interakcjonizm): zachowanie wynika z INTERAKCJI cech osobowości I czynników sytuacyjnych.",
    source: "Rozdz.1.5,s.37",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 121,
    question: "Kiedy cechy osobowości są bardziej widoczne?",
    options: {
      a: "W silnych sytuacjach",
      b: "Zawsze tak samo",
      c: "Nigdy nie są",
      d: "W słabych sytuacjach (brak jasnych norm)"
    },
    correctAnswer: "d",
    explanation: "Cechy osobowości bardziej widoczne w SŁABYCH sytuacjach (brak jasnych norm) – w silnych wszyscy zachowują się podobnie.",
    source: "Rozdz.1.5,s.37-38",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 122,
    question: "Przykład silnej sytuacji?",
    options: {
      a: "Park wypoczynkowy",
      b: "Ceremonia religijna, egzamin, sąd (wyraźne normy)",
      c: "Wolny czas",
      d: "Impreza prywatna"
    },
    correctAnswer: "b",
    explanation: "Silna sytuacja: ceremonia religijna, egzamin, sąd – wyraźne normy, wszyscy zachowują się podobnie (cechy słabo widoczne).",
    source: "Rozdz.1.5,s.37-38",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 123,
    question: "Przykład słabej sytuacji?",
    options: {
      a: "Sąd",
      b: "Egzamin",
      c: "Wolny czas w parku, nieokreślona sytuacja",
      d: "Ceremonia religijna"
    },
    correctAnswer: "c",
    explanation: "Słaba sytuacja: wolny czas w parku, nieokreślona sytuacja społeczna – brak jasnych norm, różnice osobowości widoczne.",
    source: "Rozdz.1.5,s.37-38",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 124,
    question: "Co psychologia społeczna podkreśla w kontrowersji osoba vs sytuacja?",
    options: {
      a: "Wyłącznie cechy",
      b: "Wyłącznie sytuację",
      c: "SIŁĘ SYTUACJI (często niedocenianą)",
      d: "Ignoruje tę debatę"
    },
    correctAnswer: "c",
    explanation: "Psychologia społeczna podkreśla SIŁĘ SYTUACJI – ludzie często niedoceniają jak bardzo sytuacja wpływa na zachowanie.",
    source: "Rozdz.1.5,s.36-37",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 125,
    question: "Czy można przewidzieć zachowanie z cech osobowości?",
    options: {
      a: "Zawsze łatwo",
      b: "Bardzo łatwo",
      c: "Niemożliwe",
      d: "Trudno - zachowanie zależy od interakcji cechy×sytuacja"
    },
    correctAnswer: "d",
    explanation: "Trudno przewidzieć zachowanie TYLKO z cech – zachowanie zależy od interakcji cecha × sytuacja (słabe korelacje cech z zachowaniem).",
    source: "Rozdz.1.5,s.36-37",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 126,
    question: "Co to jest efekt przesadnego uzasadnienia?",
    options: {
      a: "Więcej motywacji wewnętrznej",
      b: "Zewnętrzne nagrody osłabiają motywację wewnętrzną",
      c: "Brak tego efektu",
      d: "Wzmacnia motywację"
    },
    correctAnswer: "b",
    explanation: "Efekt przesadnego uzasadnienia: zewnętrzne nagrody (pieniądze) za ciekawą aktywność osłabiają motywację wewnętrzną (zainteresowanie).",
    source: "Rozdz.11.2,s.282",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 127,
    question: "Dlaczego małe nagrody silniej zmieniają postawy?",
    options: {
      a: "Nie zmieniają wcale",
      b: "Duże nagrody lepsze",
      c: "Słabe zewnętrzne uzasadnienie → silniejsza zmiana wewnętrzna (dysonans)",
      d: "Nie ma różnicy"
    },
    correctAnswer: "c",
    explanation: "Małe nagrody silniej zmieniają postawy: słabe zewnętrzne uzasadnienie → silniejsza zmiana wewnętrzna dla redukcji dysonansu.",
    source: "Rozdz.11.2,s.282",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 128,
    question: "Co to jest teoria samospostrzegania Bema?",
    options: {
      a: "Obserwujemy tylko siebie",
      b: "Wyłącznie innych obserwujemy",
      c: "Wnioskujemy o swoich postawach obserwując własne zachowania",
      d: "Brak naukowego znaczenia"
    },
    correctAnswer: "c",
    explanation: "Teoria samospostrzegania (Bem): wnioskujemy o swoich postawach/uczuciach obserwując własne zachowania (jak obserwator).",
    source: "Rozdz.1.2,s.21",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 129,
    question: "Jak postawy wpływają na zachowanie?",
    options: {
      a: "Zawsze bardzo silnie",
      b: "Wcale nie wpływają",
      c: "Wyłącznie czasem",
      d: "Słabo – często zachowanie nie wynika z postaw (sytuacja silniejsza)"
    },
    correctAnswer: "d",
    explanation: "Postawy SŁABO przewidują zachowanie – często sytuacja/normy wpływają silniej niż deklarowane postawy (rozbieżność).",
    source: "Rozdz.1.2,s.21",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 130,
    question: "Dlaczego nie zawsze postępujemy zgodnie z postawami?",
    options: {
      a: "Zawsze postępujemy",
      b: "Postawy nie istnieją",
      c: "Nie wiadomo dlaczego",
      d: "Sytuacja, normy społeczne, koszty zachowania wpływają silniej"
    },
    correctAnswer: "d",
    explanation: "Rozbieżność postawa-zachowanie: sytuacja, normy społeczne, koszty, nawyki wpływają silniej niż deklarowane postawy.",
    source: "Rozdz.1.2,s.21",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 131,
    question: "Co to jest błąd próby?",
    options: {
      a: "Nie ma tego błędu",
      b: "Każda próba nieco odbiega od populacji",
      c: "Próba zawsze reprezentatywna",
      d: "Wyłącznie matematyka"
    },
    correctAnswer: "b",
    explanation: "Błąd próby: każda próba (sample) nieco odbiega od populacji – losowe odchylenia, potrzeba replikacji.",
    source: "Rozdz.1.3,s.26",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 132,
    question: "Dlaczego Stanfordzki Eksperyment był tak szokujący?",
    options: {
      a: "Nie był szokujący",
      b: "Normalni, zdrowi studenci szybko stali się okrutni (strażnicy) lub załamani (więźniowie)",
      c: "Był oczekiwany",
      d: "Był nudny"
    },
    correctAnswer: "b",
    explanation: "Szok: normalni, zdrowi psychicznie studenci w 6 dni: strażnicy→okrutni sadyści, więźniowie→załamani, przygnębieni.",
    source: "Rozdz.1.6,s.42",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 133,
    question: "Co to jest system wzajemnego powiązania dziecko-opiekun?",
    options: {
      a: "Nie istnieje wcale",
      b: "Wyłącznie biologia",
      c: "System przywiązania zapewniający przeżycie bezradnego niemowlęcia",
      d: "Nie jest ważny"
    },
    correctAnswer: "c",
    explanation: "System przywiązania: wzajemne powiązanie emocjonalne dziecko-opiekun, niezbędne dla przeżycia bezradnego niemowlęcia.",
    source: "Rozdz.1.1,s.18-19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 134,
    question: "Dlaczego pojawił się u ludzi monogamia?",
    options: {
      a: "Wyłącznie kultura",
      b: "Całkowity przypadek",
      c: "Wyłącznie religia",
      d: "Duży mózg→długie dzieciństwo→potrzeba 2 rodziców do wychowania"
    },
    correctAnswer: "d",
    explanation: "Monogamia (z małą domieszką poligamii): duży mózg→przedłużone dzieciństwo→potrzeba 2 rodziców, miłość jako więź pary.",
    source: "Rozdz.1.1,s.18-19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 135,
    question: "Co to jest kultura jako przedsięwzięcie ultraspoleczne?",
    options: {
      a: "Wyłącznie indywidualna",
      b: "Całkowicie samotna",
      c: "Nie jest społeczna",
      d: "Kultura możliwa tylko w grupach, poprzez współpracę lub rywalizację"
    },
    correctAnswer: "d",
    explanation: "Kultura jako przedsięwzięcie ultraspoleczne: możliwa tylko w grupach, poprzez współpracę, komunikację, przekaz między pokoleniami.",
    source: "Rozdz.1.1,s.18-19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 136,
    question: "Dlaczego psychologia społeczna używa wielu małych teorii?",
    options: {
      a: "Chaos teoretyczny",
      b: "Lenistwo badaczy",
      c: "Brak jednej wszechogarniającej – wiele teorii małego/średniego zasięgu",
      d: "Całkowity przypadek"
    },
    correctAnswer: "c",
    explanation: "PS nie ma jednej wszechogarniającej teorii – wiele teorii małego/średniego zasięgu wyjaśniających konkretne zjawiska/klasy zachowań.",
    source: "Rozdz.1.2,s.19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 137,
    question: "Co stało się z wielkimi teoriami (psychoanaliza, behawioryzm)?",
    options: {
      a: "Nadal dominują",
      b: "Były spekulacjami na wyrost, dziś odrzucone jako wszechogarniające",
      c: "Są nadal aktualne",
      d: "Są nadal prawdziwe"
    },
    correctAnswer: "b",
    explanation: "Wielkie teorie (psychoanaliza, behawioryzm) jako wszechogarniające były spekulacjami na wyrost – dziś odrzucone, pozostały elementy.",
    source: "Rozdz.1.2,s.19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 138,
    question: "Czym różnią się perspektywy teoretyczne?",
    options: {
      a: "Niczym się nie różnią",
      b: "Są wzajemnie sprzeczne",
      c: "Są identyczne",
      d: "Różne założenia, pytania, sposoby wyjaśniania – uzupełniają się"
    },
    correctAnswer: "d",
    explanation: "Perspektywy teoretyczne mają różne założenia, pytania, sposoby wyjaśniania – często się UZUPEŁNIAJĄ (poznawcza+motywacyjna).",
    source: "Rozdz.1.2,s.19-25",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 139,
    question: "Co bardziej wyjaśnia \"dlaczego działa\"?",
    options: {
      a: "Moderator",
      b: "Zmienna zależna",
      c: "Zmienna kontrolna",
      d: "Mediator (proces pośredniczący)"
    },
    correctAnswer: "d",
    explanation: "MEDIATOR wyjaśnia \"DLACZEGO\" (mechanizm, proces pośredniczący). MODERATOR wyjaśnia \"KIEDY\" (warunki).",
    source: "Rozdz.1.3,s.30-31",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 140,
    question: "Co bardziej wyjaśnia \"kiedy działa\"?",
    options: {
      a: "Mediator",
      b: "Zmienna zależna",
      c: "Moderator (warunki brzegowe)",
      d: "Zmienna kontrolna"
    },
    correctAnswer: "c",
    explanation: "MODERATOR wyjaśnia \"KIEDY\" (warunki brzegowe, granice). MEDIATOR wyjaśnia \"DLACZEGO\" (mechanizm).",
    source: "Rozdz.1.3,s.30-31",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 141,
    question: "Co to jest płeć jako moderator?",
    options: {
      a: "Nie ma żadnej roli",
      b: "Wyłącznie biologia",
      c: "Nie dotyczy PS wcale",
      d: "Płeć często moderuje zależności (np. prowokacja→agresja silniej u mężczyzn)"
    },
    correctAnswer: "d",
    explanation: "Płeć jako moderator: wiele zależności PS różni się u kobiet i mężczyzn (np. prowokacja→agresja silniejsza u mężczyzn).",
    source: "Rozdz.1.3,s.30-31",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 142,
    question: "Co to jest natężenie podobieństwa jako moderator?",
    options: {
      a: "Nie wpływa wcale",
      b: "Zawsze tak samo",
      c: "Podobieństwo→lubienie tylko do pewnego punktu (ekstremalne podobieństwo nudzi)",
      d: "Nie ma zastosowania"
    },
    correctAnswer: "c",
    explanation: "Natężenie podobieństwa moderuje lubienie: umiarkowane podobieństwo→lubienie, ekstremalne podobieństwo→nuda (moderator nieliniowy).",
    source: "Rozdz.1.3,s.30",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 143,
    question: "Ile relacji społecznych w grupie 150 osób?",
    options: {
      a: "Tylko 150",
      b: "22,350 relacji",
      c: "300 relacji",
      d: "1000 relacji"
    },
    correctAnswer: "b",
    explanation: "W grupie 150 osób: 22,350 relacji między nimi (150!/((150-2)!×2!)) – ogromne wymagania dla mózgu.",
    source: "Rozdz.1.1,s.18",
    category: "Wprowadzenie do psychologii",
    difficulty: "medium"
  },
  {
    id: 144,
    question: "Dlaczego psy mają większe mózgi niż koty?",
    options: {
      a: "Całkowity przypadek",
      b: "Wyłącznie rozmiar ciała",
      c: "Nie mają większych",
      d: "Psy są gatunkiem społecznym (grupy), koty samotnikami"
    },
    correctAnswer: "d",
    explanation: "Psy mają większe mózgi (proporcjonalnie) niż koty bo psy = gatunek społeczny (grupy), koty = samotniki.",
    source: "Rozdz.1.1,s.18",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 145,
    question: "Co jest warunkiem funkcjonowania w grupie?",
    options: {
      a: "Wyłącznie siła fizyczna",
      b: "Wyłącznie inteligencja",
      c: "Rozpoznawanie relacji między członkami (kto czyim krewnym, przyjacielem, wrogiem)",
      d: "Nic specjalnego"
    },
    correctAnswer: "c",
    explanation: "Warunek funkcjonowania w grupie: rozpoznawanie relacji między członkami – kto czyim krewnym, przyjacielem, wrogiem.",
    source: "Rozdz.1.1,s.18",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 146,
    question: "Ile relacji w grupie 3 osób?",
    options: {
      a: "Tylko 3",
      b: "6 relacji",
      c: "9 relacji",
      d: "12 relacji"
    },
    correctAnswer: "b",
    explanation: "Grupa 3 osób: 6 relacji (3!/(3-2)! = 6) – łatwo zapamiętać.",
    source: "Rozdz.1.1,s.18",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 147,
    question: "Ile relacji w grupie 5 osób?",
    options: {
      a: "Tylko 5",
      b: "10 relacji",
      c: "20 relacji",
      d: "25 relacji"
    },
    correctAnswer: "c",
    explanation: "Grupa 5 osób: 20 relacji – już wyraźnie więcej, rosną wymagania poznawcze.",
    source: "Rozdz.1.1,s.18",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 148,
    question: "Ile wynosi kompania wojskowa?",
    options: {
      a: "Tylko 10 osób",
      b: "Około 1000 osób",
      c: "Około 50 osób",
      d: "Około 150 osób"
    },
    correctAnswer: "d",
    explanation: "Podstawowy pododdział (kompania) w większości armii świata: ~150 osób (liczba Dunbara).",
    source: "Rozdz.1.1,s.18",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 149,
    question: "Jak mózg radzi sobie z tysiącami relacji?",
    options: {
      a: "Pamięta wszystkie szczegóły",
      b: "Nie radzi sobie wcale",
      c: "Ignoruje większość",
      d: "Ma teorię pozwalającą odtworzyć wiele relacji z niewielkiej liczby"
    },
    correctAnswer: "d",
    explanation: "Mózg nie pamięta tysięcy relacji, ale ma TEORIĘ pozwalającą odtworzyć wiele relacji z niewielkiej liczby obserwacji.",
    source: "Rozdz.1.1,s.18",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 150,
    question: "Dlaczego mózg niemowlęcia rozwija się po urodzeniu?",
    options: {
      a: "Całkowity przypadek",
      b: "Słabość ewolucyjna",
      c: "Gdyby rozwinął się w łonie, niemożliwe byłoby urodzenie dziecka",
      d: "Nie wiadomo dlaczego"
    },
    correctAnswer: "c",
    explanation: "Mózg rozwija się głównie PO urodzeniu bo gdyby rozwinął się w łonie, głowa byłaby za duża – niemożliwe urodzenie.",
    source: "Rozdz.1.1,s.18-19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 151,
    question: "Co to jest matryca przyszłych relacji?",
    options: {
      a: "Film science fiction",
      b: "Wyłącznie matematyka",
      c: "System przywiązania dziecko-opiekun staje się wzorcem późniejszych relacji",
      d: "Brak naukowego znaczenia"
    },
    correctAnswer: "c",
    explanation: "System przywiązania dziecko-opiekun do pewnego stopnia staje się matrycą (wzorcem) przyszłych relacji społecznych dziecka.",
    source: "Rozdz.1.1,s.18-19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 152,
    question: "Czy monogamia u ludzi jest czysta?",
    options: {
      a: "Tak, całkowicie czysta",
      b: "Wyłącznie poligamia",
      c: "Monogamia z niewielką domieszką poligamii",
      d: "Nie istnieje wcale"
    },
    correctAnswer: "c",
    explanation: "Monogamia u ludzi: dominująca, ale z niewielką domieszką poligamii (biologiczne i kulturowe czynniki).",
    source: "Rozdz.1.1,s.18-19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 153,
    question: "Co to jest zdolność tworzenia sensu?",
    options: {
      a: "Wyłącznie siła fizyczna",
      b: "Wyłącznie nauka akademicka",
      c: "Specyficznie ludzka, możliwa tylko razem z innymi, kultura",
      d: "Brak naukowego znaczenia"
    },
    correctAnswer: "c",
    explanation: "Zdolność tworzenia sensu: specyficznie ludzka, ultraspoleczna – możliwa tylko razem z innymi/przeciw innym, kultura.",
    source: "Rozdz.1.1,s.18-19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 154,
    question: "Czym jest psychologia społeczna?",
    options: {
      a: "Wyłącznie psychologia kliniczna",
      b: "Wyłącznie badanie grup",
      c: "Wyłącznie komunikacja",
      d: "Nauka o społecznej naturze człowieka - uwarunkowaniach, przejawach, konsekwencjach"
    },
    correctAnswer: "d",
    explanation: "Psychologia społeczna: nauka o społecznej naturze człowieka – różnych jej uwarunkowaniach, przejawach i konsekwencjach.",
    source: "Rozdz.1.1,s.19",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 155,
    question: "Co to jest wzajemne wywieranie wpływu?",
    options: {
      a: "Wyłącznie jednostronne",
      b: "Brak wpływu",
      c: "Wyłącznie manipulacja",
      d: "Istota życia społecznego - jedni wpływają na drugich i odwrotnie"
    },
    correctAnswer: "d",
    explanation: "Wzajemne wywieranie wpływu: istota życia społecznego – to co robią/czują/myślą jedni wpływa na innych.",
    source: "Rozdz.1.1,s.17",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 156,
    question: "Kto jest praktykiem wpływu społecznego?",
    options: {
      a: "Wyłącznie psychologowie",
      b: "Wyłącznie manipulatorzy",
      c: "Nikt nie jest",
      d: "Każdy z nas - sprawca i obiekt licznych oddziaływań"
    },
    correctAnswer: "d",
    explanation: "Każdy z nas jest praktykiem wpływu społecznego – zarówno sprawcą jak i obiektem licznych oddziaływań.",
    source: "Rozdz.1.1,s.17",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 157,
    question: "Czym różni się wyjaśnianie od usprawiedliwiania?",
    options: {
      a: "Niczym się nie różni",
      b: "To samo",
      c: "Wyjaśnianie=zrozumienie przyczyn, Usprawiedliwianie=akceptacja zjawiska i przyczyn",
      d: "Nie ma różnicy"
    },
    correctAnswer: "c",
    explanation: "Wyjaśnianie = zrozumienie przyczyn (nauka). Usprawiedliwianie = akceptacja zjawiska i przyczyn (wykracza poza naukę).",
    source: "Rozdz.1.2,s.25-26",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 158,
    question: "Co psychologia wyjaśnia?",
    options: {
      a: "Konkretne jednostkowe zdarzenia",
      b: "Wszystko bez wyjątku",
      c: "Zjawiska danego typu (prawidłowości), nie konkretne zdarzenia",
      d: "Nic konkretnego"
    },
    correctAnswer: "c",
    explanation: "Psychologia wyjaśnia ZJAWISKA DANEGO TYPU (prawidłowości), nie konkretne jednostkowe zdarzenia.",
    source: "Rozdz.1.2,s.25-26",
    category: "Wprowadzenie do psychologii",
    difficulty: "easy"
  },
  {
    id: 159,
    question: "Co to jest nauka empiryczna?",
    options: {
      a: "Wyłącznie spekulacje",
      b: "Wyłącznie teoria",
      c: "Uznaje za prawdziwe prawidłowości potwierdzone badaniami empirycznymi",
      d: "Wyłącznie intuicja"
    },
    correctAnswer: "c",
    explanation: "Nauka empiryczna: za prawdziwe uznaje prawidłowości potwierdzone wynikami badań empirycznych (obserwacje, eksperymenty).",
    source: "Rozdz.1.3,s.26",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 160,
    question: "Dlaczego jednorazowe badanie nie wystarcza?",
    options: {
      a: "Zawsze wystarcza",
      b: "Wyłącznie biurokracja",
      c: "Ułomności badania + probabilistyczny charakter prawidłowości psychologicznych",
      d: "Całkowity przypadek"
    },
    correctAnswer: "c",
    explanation: "Jednorazowe badanie nie wystarcza: ułomności metodologiczne + probabilistyczny (nie deterministyczny) charakter prawidłowości psychologicznych.",
    source: "Rozdz.1.3,s.26",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 161,
    question: "Dlaczego prawidłowości PS są probabilistyczne?",
    options: {
      a: "Nie są probabilistyczne",
      b: "Wyłącznie słabe teorie",
      c: "Wiele prawidłowości działających równocześnie, granice obowiązywania, specyfika osób/warunków",
      d: "Całkowity przypadek"
    },
    correctAnswer: "c",
    explanation: "Probabilistyczne bo: (1) wiele prawidłowości równocześnie, (2) granice obowiązywania, (3) specyfika konkretnych osób/warunków.",
    source: "Rozdz.1.3,s.26",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 162,
    question: "Przykład granicy prawidłowości?",
    options: {
      a: "Nie ma granic",
      b: "Wyłącznie teoria",
      c: "Podobieństwo→lubienie przestaje działać przy ekstremalnym podobieństwie (nuda)",
      d: "Zawsze działa wszędzie"
    },
    correctAnswer: "c",
    explanation: "Przykład granicy: podobieństwo→lubienie działa do pewnego punktu, przy BARDZO dużym podobieństwie zanika (nuda).",
    source: "Rozdz.1.3,s.26",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 163,
    question: "Przykład konkurencji prawidłowości?",
    options: {
      a: "Nie ma konkurencji",
      b: "Wyłącznie jedna prawidłowość",
      c: "Lubienie zależy od podobieństwa ALE silniej od tego jak partner nas traktuje",
      d: "Nie konkurują nigdy"
    },
    correctAnswer: "c",
    explanation: "Konkurencja prawidłowości: lubienie zależy od podobieństwa, ALE SILNIEJ od tego jak osoba nas traktuje (która przeważy?).",
    source: "Rozdz.1.3,s.26",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 164,
    question: "Podstawa dowodzenia trafności twierdzeń w PS?",
    options: {
      a: "Pojedyncze badanie",
      b: "Wyłącznie intuicja",
      c: "Całe programy badawcze - serie badań różnymi metodami",
      d: "Wyłącznie spekulacje"
    },
    correctAnswer: "c",
    explanation: "Podstawa dowodzenia: CAŁE PROGRAMY BADAWCZE – serie badań różnymi metodami, na różnych próbach (nie pojedyncze badanie).",
    source: "Rozdz.1.3,s.26",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 165,
    question: "Co to jest manipulacja eksperymentalna?",
    options: {
      a: "Wyłącznie oszustwo",
      b: "Celowe wprowadzanie/niewprowadzanie przypuszczalnej przyczyny",
      c: "Wyłącznie negatywna",
      d: "Nieetyczna zawsze"
    },
    correctAnswer: "b",
    explanation: "Manipulacja eksperymentalna: celowe wprowadzanie przypuszczalnej przyczyny (VI) u części badanych, niewprowadzanie u innych.",
    source: "Rozdz.1.3,s.27",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 166,
    question: "Kto tworzy grupę eksperymentalną?",
    options: {
      a: "Grupa kontrolna",
      b: "Wszyscy uczestnicy",
      c: "Badani otrzymujący manipulację zmiennej niezależnej",
      d: "Nikt konkretny"
    },
    correctAnswer: "c",
    explanation: "Grupa eksperymentalna: badani OTRZYMUJĄCY manipulację zmiennej niezależnej (przypuszczalna przyczyna wprowadzona).",
    source: "Rozdz.1.3,s.27",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 167,
    question: "Kto tworzy grupę kontrolną?",
    options: {
      a: "Grupa eksperymentalna",
      b: "Wszyscy uczestnicy",
      c: "Badani NIE otrzymujący manipulacji zmiennej niezależnej",
      d: "Nikt konkretny"
    },
    correctAnswer: "c",
    explanation: "Grupa kontrolna: badani NIE otrzymujący manipulacji zmiennej niezależnej (przypuszczalna przyczyna nie wprowadzona).",
    source: "Rozdz.1.3,s.27",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 168,
    question: "Kiedy mamy do czynienia z eksperymentem?",
    options: {
      a: "Zawsze w badaniach",
      b: "Wyłącznie obserwacja",
      c: "Gdy istnieje przynajmniej 1 grupa kontrolna i 1 eksperymentalna",
      d: "Wyłącznie ankiety"
    },
    correctAnswer: "c",
    explanation: "Eksperyment: istnieje przynajmniej 1 grupa kontrolna I 1 eksperymentalna (zwykle więcej) – jest co porównywać.",
    source: "Rozdz.1.3,s.27",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 169,
    question: "Wyjątek od potrzeby grup kontrolnych?",
    options: {
      a: "Nie ma wyjątków",
      b: "Zawsze potrzebne",
      c: "Nigdy nie potrzebne",
      d: "Porównujemy tych samych osób przed i po manipulacji (każdy sam dla siebie kontrola)"
    },
    correctAnswer: "d",
    explanation: "Wyjątek: porównujemy tych samych osób PRZED (kontrola) i PO manipulacji (eksperyment) – każdy sam dla siebie kontrola.",
    source: "Rozdz.1.3,s.27",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 170,
    question: "Po co randomizacja?",
    options: {
      a: "Wyłącznie komplikacja",
      b: "Nie jest potrzebna",
      c: "By grupy różniły się TYLKO manipulacją VI, nie innymi cechami",
      d: "Wyłącznie tradycja"
    },
    correctAnswer: "c",
    explanation: "Randomizacja: zapewnia że grupy różnią się SYSTEMATYCZNIE tylko manipulacją VI, nie innymi cechami (wiek, osobowość).",
    source: "Rozdz.1.3,s.27-28",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 171,
    question: "Jak działa randomizacja?",
    options: {
      a: "Wybór celowy badacza",
      b: "Wyłącznie intuicja",
      c: "Losowe przypisanie badanych do grup (rzut monetą)",
      d: "Zawsze ten sam sposób"
    },
    correctAnswer: "c",
    explanation: "Randomizacja: LOSOWE przypisanie badanych do grup (np. rzut monetą: orzeł=eksperyment, reszka=kontrola).",
    source: "Rozdz.1.3,s.27",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 172,
    question: "Dlaczego badacz nie może używać intuicji przy przydziale?",
    options: {
      a: "Może swobodnie",
      b: "Intuicja jest dobra",
      c: "Nieświadomy błąd - ulegli do eksperymentu, nieulegli do kontroli (konfundacja)",
      d: "Nie ma problemu"
    },
    correctAnswer: "c",
    explanation: "Intuicja badacza grozi nieświadomym błędem: przydzielenie \"odpowiednich\" osób do grup (konfundacja VI z innymi cechami).",
    source: "Rozdz.1.3,s.27",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 173,
    question: "Co randomizacja zapewnia?",
    options: {
      a: "Eliminuje całkowicie różnice",
      b: "Perfekcyjną identyczność",
      c: "Różnice indywidualne nie znikają ALE nie nakładają się na manipulację (nie wypaczają obrazu)",
      d: "Całkowity chaos"
    },
    correctAnswer: "c",
    explanation: "Randomizacja: różnice indywidualne NIE ZNIKAJĄ, ale NIE NAKŁADAJĄ SIĘ systematycznie na manipulację – nie wypaczają wyników.",
    source: "Rozdz.1.3,s.27",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 174,
    question: "Co to jest konfundacja zmiennych?",
    options: {
      a: "Klarowność badania",
      b: "Pełna kontrola",
      c: "Zmienna niezależna spleciona z inną zmienną - nie wiadomo co wpływa",
      d: "Randomizacja doskonała"
    },
    correctAnswer: "c",
    explanation: "Konfundacja (confounding): zmienna niezależna spleciona z inną zmienną – nie wiadomo która wpływa na DV.",
    source: "Rozdz.1.3,s.27",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 175,
    question: "Po co wprowadza się dodatkowe grupy kontrolne?",
    options: {
      a: "Wyłącznie komplikacja",
      b: "Nie są potrzebne",
      c: "Wyłącznie tradycja",
      d: "Wykluczenie alternatywnych wyjaśnień (co NIE decyduje o zachowaniu)"
    },
    correctAnswer: "d",
    explanation: "Dodatkowe grupy kontrolne: wykluczanie alternatywnych wyjaśnień – pokazanie co NIE decyduje o zachowaniu badanych.",
    source: "Rozdz.1.3,s.27-28",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 176,
    question: "Co to jest kontrola w eksperymencie?",
    options: {
      a: "Chaos metodologiczny",
      b: "Zdolność badacza do określenia czynników wpływających na wyniki",
      c: "Eliminacja wszystkich uczestników",
      d: "Wyłącznie obserwacja"
    },
    correctAnswer: "b",
    explanation: "Kontrola: zdolność badacza do określenia czynników wpływających na wyniki – wskazanie przyczyn lub zablokowanie innych.",
    source: "Rozdz.1.3,s.29",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  },
  {
    id: 177,
    question: "Podstawowe sposoby kontroli?",
    options: {
      a: "Tylko jeden sposób",
      b: "Randomizacja + eliminacja alternatywnych wyjaśnień",
      c: "Wyłącznie randomizacja",
      d: "Wyłącznie intuicja"
    },
    correctAnswer: "b",
    explanation: "Podstawowe sposoby kontroli: (1) RANDOMIZACJA, (2) ELIMINACJA ALTERNATYWNYCH WYJAŚNIEŃ (dodatkowe grupy/warunki).",
    source: "Rozdz.1.3,s.29",
    category: "Wprowadzenie do psychologii",
    difficulty: "hard"
  }
];

// Export categories for filtering
export const categories = ["Wprowadzenie do psychologii"];

// Export book info
export const bookInfo = {
  title: "1000 PYTAŃ - PSYCHOLOGIA SPOŁECZNA",
  authors: "Wojciszke, B., Grzyb, T. (2024)",
  chapters: "Rozdziały: 1 (s.17-44), 11 (s.276-300), 14 (s.350-374)"
};
