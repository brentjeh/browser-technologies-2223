# Browser Technologies Read.Me

# Inhoudsopgave
1.  [Inleiding](#inleiding)
2.  [De Drie Layers](#de-drie-layers)
3.  [Functional Layer](#functional-layer)
4.  [Usable Layer](#usable-layer)
5.  [Enhanced Layer](#enhanced-layer)
6.  [Flow Schema](#flow-schema)
7.  [Testen](#testen)
8.  [Feature Tests](#feature-tests)
9.  [Browsers waar ik mee getest heb](#browser-tests)
10.  [Screenreader Test](#screenreader-test)
11.  [Conclusie](#conclusie)

# Inleiding <a name="inleiding"></a>
Dit vak bestaat uit twee opdrachten. Een daarvan is een introductieopdracht, en de ander, waarin ik in deze Read.me op in ga, is de eindopdracht. Voor deze opdracht ga ik een interactieve toepassing ontwerpen. Ik zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de core functionaliteit te zien, horen en/of voelen krijgen.

Ik kreeg de keuze tussen 6 user stories. Ik heb voor de eerste user story gekozen: Enquete over de minor Web Design and Development. De vereisten voor de enquete waren dat de student zijn gegevens kan invullen (naam en studentnummer), dat de student per vak kan zien welke docenten het vak gaven, welke weken waarin het vak werd gegeven, een beoordeling op schaal van 1 tot 10 van lesstof (hoe moeilijk is het), uitleg (hoe duidelijk is het uitgelegd) en eigen inzicht (hoe goed snap je het). Het formulier moet ook valideren of de gebruiker alle input-fields heeft ingevult, en zo niet, moet het formulier duidelijke foutmeldingen aangeven. Daarnaast moet de student verder kunnen gaan waar hij is gebleven als hij het formulier aflsuit. Het formulier moet aangeven waar je bent in het formulier, en je moet terug kunnen gaan naar vorige vragen. Je mag geen zictbare radio buttons gebruiken en het formulier moet een light mode en een dark mode optie hebben.

## Leerdoelen
- Ik leer wat Progressive enhancement is en hoe ik dit kan toepassen.
- Ik leer Browser Technologies te onderzoeken, testen en implementeren als enhancement.
- Ik leer hoe ik Feature Detection doe en wat ik kan doen als een 'feature' niet werkt of wordt ondersteund.

# De Drie Layers <a name="de-drie-layers"></a>

## Functional Layer <a name="functional-layer"></a>
In de functional layer wilde ik me compleet focussen op de core functionaliteit van de user story. Iedereen moet de enquete in kunnen vullen, ongeacht van browser. Daarom moest het formulier werken zonder styling of JavaScript. Dit kan met HTML elementen zoals text-inputs, radio buttons, fieldsets en submit buttons. Browsers zoals Lynx kunnen alleen HTML lezen, dus ik wilde de enquete ook toegankelijk maken voor mensen die deze browser gebruiken (ik kom hier later in de read.me op terug).

Hieronder heb ik de functional layer geschetst:

<img src="/img-readme/functional-layer.jpg" width=500>

Hieronder heb ik de functional layer uitgewerkt:

<img src="/img-readme/functional-layer-uitgewerkt.png" width=500px>

## Usable Layer <a name="usable-layer"></a>
In de usable layer wilde ik me focussen op het toevoegen van usability. Hier komt ook het design principe progressive enhancement van pas. De basis functie van de enquete is present, maar hoe meer er mogelijkheid voor is, hoe meer features er toegevoegd kunnen worden. In de usable layer heb ik vooral gelet op het toevoegen van white space tussen verschillende elementen, visual hierarchy om belangrijke elementen meer aandacht te geven (denk aan titels groter maken dan de labels), hover en active states van bijvoorbeeld radio buttons of knoppen, etc. Voornamelijk CSS.

Hieronder heb ik de usable layer geschetst:

<img src="/img-readme/usable-layer.jpg" width=500>

Hieronder heb ik de usable layer uitgewerkt:

<img src="/img-readme/usable-layer-uitgewerkt.png" width=500>

## Enhanced Layer <a name="enhanced-layer"></a>
In de enhanced layer wilde ik me focussen op wat de enquete aangenaam maakt om de te gebruiken. Wederom komt hier het design principe progressive enhancement van pas. Ik heb in deze layer een optie toegevoegd om te zien hoe ver je bent in het formulier aan de hand van stappen, een optie om terug te gaan naar de vorige stap in het formulier en om naar de volgende stap in het formulier te gaan en een validatie waarbij de enquete inline aangeeft wanneer een student niet elke input field heeft ingevult.

Hieronder heb ik de enhanced layer geschetst:

<img src="/img-readme/enhanced-layer.jpg" width=500>

Hieronder heb ik de enhanced layer uitgewerkt:

<img src="/img-readme/enhanced-layer-uitgewerkt.png" width=500px>

# Flow Schema <a name="flow-schema"></a>

<img src="/img-readme/flow-schema/flow-schema.jpg" width=1000>

# Testen <a name="testen"></a>

## Feature Tests <a name="feature-tests"></a>

### Feature detection
In web development verwijst 'feature detection' naar een techniek waarbij je controleert of een bepaalde functie of mogelijkheid beschikbaar is in de browser van een gebruiker voordat je erop vertrouwt of er gebruik van maakt. Het is een manier om te bepalen of een bepaalde web-API, methode of eigenschap wordt ondersteund door de browser die de website of webtoepassing gebruikt.

Het belangrijkste doel van feature detection in web development is het leveren van fallback-opties of alternatieve code wanneer een bepaalde functie niet wordt ondersteund. Hierdoor kun je een betere gebruikerservaring bieden, ongeacht de mogelijkheden van de gebruikte browser.

### De features die ik heb onderzocht <a name="feature-research"></a>

- Light en dark mode
  Light en dark mode werken aan de hand van variabelen. Zodra er op de 'dark-mode' knop gedrukt wordt, wordt een functie in JavaScript aangeroepen die een class toevoegt aan de     body. Deze class overschrijd de :root, waardoor de kleuren variabelen veranderen naar dat van de 'dark'mode' class. 
- Validatie aan de hand van JavaScript
  Validatie werkt door de error-messages te weergeven alleen wanneer een van de radio buttons niet geselecteerd zijn.
- Progress bar aan de hand van JavaScript
  Progress bar werkt door aan dezelfde functie als waarin de validatie plaatsvind een simpele 'progress.style.width = "278.4px";' regel staat, die elke keer wanneer de gebruiker     op de 'volgende' knop klikt geactiveerd wordt, en de progress bar hiermee langer wordt. De 'terug' knop geeft vanzelfsprekend hetzelfde effect, alleen dan andersom.
- 'Volgende' en 'terug' knop
  Volgende en terug knop werken door de vorige of volgende stap in het formulier te verbergen/weergeven.
- LocalStorage

## Browsers waar ik mee getest heb <a name="browser-tests"></a>

### Desktop
- Google Chrome (Desktop)
- Firefox (Desktop)
- Edge (Desktop)
- Safari iOS (Mobile)
- Samsung Internet (Mobile)
- Lynx (Desktop)

### Google Chrome
- [x] Light en dark mode
- [x] Validatie
- [x] Progress bar
- [x] 'Volgende' en 'terug' knop
- [x] LocalStorage

Alles werkt op Google Chrome.

### Firefox
- [x] Light en dark mode
- [x] Validatie
- [x] Progress bar
- [x] 'Volgende' en 'terug' knop
- [x] LocalStorage

Alles werkt op Google Chrome.

### Edge
- [x] Light en dark mode
- [x] Validatie
- [x] Progress bar
- [x] 'Volgende' en 'terug' knop
- [x] LocalStorage

Alles werkt op Google Chrome.

### Safari iOS
- [x] Light en dark mode
- [x] Validatie
- [x] Progress bar
- [x] 'Volgende' en 'terug' knop
- [x] LocalStorage

De progress-bar loopt een beetje uit het scherm. Verder werkt de app zoals het hoort.

<img src="/img-readme/safari-darkmode.jpg" width=250> <img src="/img-readme/safari-validatie.jpg" width=250> <img src="/img-readme/safari-lightmode.jpg" width=250>

### Samsung Internet
- [ ] Light en dark mode
- [ ] Validatie
- [ ] Progress bar
- [ ] 'Volgende' en 'terug' knop
- [ ] LocalStorage

Ik heb Samsung Internet helaas niet kunnen testen. Daarom heb ik apart onderzoek gedaan naar welke functies die mijn features werkend maken ondersteund worden door Samsung Internet.
- Light en dark mode
  Dit werkt aan de hand van :root en een JavaScript code die de innerHTML van de :root veranderd. Beide :root en innerHTML werken.
- Validatie aan de hand van JavaScript
  Dit werkt aan de hand van JavaScript code die controleert of alle radio buttons geselecteerd zijn. Als alle radio buttons geselecteerd zijn, kan de gebruiker verder naar de       volgende stap door de 'volgende' knop te klikken. Zo niet, zal er een foutmelding worden weergegeven. De code is niet heel bijzonder en gebruikt de meest basic JavaScript, dus     alles werkt. De 'volgende' knop activeert een stuk code die dus valideert of de radio buttons geselecteerd zijn of niet. 
- Progress bar aan de hand van JavaScript
  De JavaScript code voor de progress bar is even simpel als dat voor de validatie. Als de gebruiker op de 'volgende' knop klikt, wordt er code geactiveert dat styling van de       progress bar aanpast, en dus de progress bar langer maakt.
- 'Volgende' en 'terug' knop
  Deze knoppen voeren code uit die ik hiervoor al uit heb gelegd.
- LocalStorage
  LocalStorage lijkt gewoon te werken volgens caniuse.com: https://caniuse.com/?search=localstorage. Alhoewel ik nog niet zeker weet of dit ook daadwerkelijk gaat werken op         Samsung Internet, aangezien het al eerder in andere browsers niet werkte.

### Lynx
- [ ] Light en dark mode
- [ ] Validatie
- [ ] Progress bar
- [ ] 'Volgende' en 'terug' knop
- [ ] LocalStorage

Zoals verwacht werkt geen enkele feature in Lynx. Dit omdat Lynx alleen HTML kan lezen, waardoor de core-functionaliteit - het kunnen invullen en submitten van de form - wel werkt, maar alle features in de usable en enhanced layer niet werken.

## Screenreader Test <a name="screenreader-test"></a>
Als laatst heb ik een screenreader test gedaan. Ik merkte al snel dat de screenreader over veel kopjes heen ging, waardoor het formulier niet duidelijk was voor een screenreader gebruiker. Om dit op te lossen heb ik aria-labels toegevoegd.

# Conclusie <a name="conclusie"></a>
De core-functionaliteit - het het kunnen invullen en submitten van de form - werkt overal. Als je het territorium van de usable layer betreed, werkt de core-functionaliteit nog steeds. De usable layer maakt het alleen makkelijker voor de gebruiker om door het formulier te navigeren aan de hand van betere visuele hiërarchie, betere contrast, white space toevoegen, etc. Nog een stapje hoger bevindt zich de enhanced layer. Hierin wil ik het voornamelijk aangenamer maken voor de gebruiker om door het formulier te navigeren. Hier komen vooral de features kijken waarbij JavaScript nodig was, zoals de light en dark mode, validatie, een progress bar, een 'terug' en 'volgende' knop en localStorage.
