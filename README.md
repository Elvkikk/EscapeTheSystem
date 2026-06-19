# Escape the System

Ett React-baserat escape room-spel där du navigerar genom en övergiven AI-forskningsanläggning kallad **Project NEXUS**, löser pussel och samlar föremål för att fly.

## Om spelet

Du är instängd i Project NEXUS, en övergiven AI-forskningsanläggning. Ditt mål är att navigera genom olika rum, lösa pussel genom att använda rätt föremål från ditt inventarium, och slutligen fly från anläggningen.

Spelet presenterar ett kedjeklarat pusselsystem där varje rum ger dig ett föremål som behövs för att lösa nästa rum:

1. **Server Room** → Samla Access Code
2. **Security Room** → Samla Security Keycard
3. **Archives** → Samla Maintenance Key
4. **Reactor Room** → Samla Admin Credentials
5. **Vault** → Samla Master Override Key
6. **Exit Node** → Fly!

## Teknikstack

- **React** (v19.2.6) - UI-bibliotek
- **React Router** (v7.17.0) - Klientside routing
- **TypeScript** - Typsäker utveckling
- **Vite** - Build-verktyg och utvecklingsserver
- **ESLint** - Kodkvalitet
- **Context API** - State management för inventarium

## Projektstruktur

```
src/
├── components/
│   ├── Layout.tsx              # Huvudlayout med navigering
│   └── inventory.tsx            # Inventarium-komponent
├── context/
│   ├── inventoryContextValue.ts # Context-definition och custom hook
│   └── inventoryProvider.tsx    # Context provider med state-logik
├── pages/
│   ├── Home.tsx                # Startsida / spelintroduktion
│   ├── RoomPage.tsx            # Huvudspelskomponent för rum
│   ├── Victory.tsx             # Vinstskärm
│   └── NotFound.tsx            # 404-sida
├── data/
│   ├── rooms.json              # Rumdefinitioner
│   └── items.json              # Föremålsdefinitioner
├── App.tsx                      # Huvudapp med routing-setup
└── main.tsx                     # React entry point
```

## Komma igång

### Förutsättningar

- Node.js (v16 eller högre)
- npm eller yarn

### Installation

1. Klona repositoriet:
```bash
git clone <repository-url>
cd EscapeTheSystem
```

2. Installera beroenden:
```bash
npm install
```

### Köra projektet

**Utvecklingsläge:**
```bash
npm run dev
```
Appen öppnas på `http://localhost:5173`

**Bygga för produktion:**
```bash
npm run build
```

**Förhandsgranska produktion:**
```bash
npm run preview
```

**Lint kod:**
```bash
npm run lint
```

## Implementerade funktioner

### G-krav (Grundläggande krav) ✅

- ✅ **React Router Setup** - Fullständig routing med BrowserRouter och dynamiska routes
- ✅ **Startsida** - Introduktionssida på `/` med spelinstruktioner
- ✅ **Navigering** - Link-baserad navigering till olika rum
- ✅ **Dynamisk rumkomponent** - En enda RoomPage-komponent hanterar alla rum via URL-parametrar (`/rooms/:roomPath`)
- ✅ **Context API** - Inventarium-state hanteras globalt via Context (createContext + useContext)
- ✅ **Pussellogi** - Att klicka på rätt föremål löser rum och lägger till belöningsföremål i inventariet
- ✅ **Rumstillstånd** - Rum visar olika bilder och text baserat på löst/olöst status
- ✅ **Persistent state** - Lösta rum förblir lösta när man navigerar bort och tillbaka (härledd från inventariet)
- ✅ **Kodstruktur** - Välorganiserade komponenter och felfri körning

### VG-krav (Väl godkänt krav) ✅

- ✅ **useNavigate()** - Meningsfull navigering:
  - Vinstskärmnavigering när Exit Node löses
  - Omdirigering till hem på ogiltiga routes (404-hantering)
  - Nästa rum-navigationsknappar
  
- ✅ **useSearchParams()** - Ledtrådsystem med URL-frågarparametrar:
  - Klicka på "Visa ledtråd" / "Dölj ledtråd" för att växla ledtrådsvisning
  - Ledtrådar lagras i URL som `?hint=true`
  - Direktlänkar till rum med ledtrådar redan synliga
  
- ✅ **Kodkvalitet**:
  - Tydlig komponentuppdelning
  - TypeScript för typsäkerhet
  - Föremål och rum jämförs på `id` istället för objektreferens
  - Korrekt felhantering och validering

## Spelmeknik

### Inventariumsystem

- **Startföremål**: UV Light (behövs för att lösa Server Room)
- **Context-hantering**: Inventariet lagras i Context och är tillgängligt från vilken komponent som helst
- **Föremålspersistans**: Föremål förblir i inventariet under hela spelsessionen
- **Dublettvarnare**: Du kan inte samla samma föremål två gånger

### Pussellösning

1. Navigera till ett rum
2. Se rummets olösta tillstånd med instruktioner
3. Klicka på ett föremål från inventariet för att försöka lösa det
4. Om rätt, löses rummet och du får ett nytt föremål
5. Rummet växlar till löst tillstånd med ny bild och instruktioner

### Ledtrådsystem

- Varje rum har en ledtråd tillgänglig via "Visa ledtråd"-knappen
- Ledtrådar togglas genom URL-frågarparametrar
- Dela ledtrådar direkt genom att skicka länkar med `?hint=true`

## Filbeskrivningar

### Kärnfiler

- **App.tsx** - Routes-konfiguration med:
  - Startsida (`/`)
  - Rum-sida med dynamisk sökväg (`/rooms/:roomPath`)
  - Vinstskärm (`/victory`)
  - Catch-all 404-route (`*`)

- **inventoryProvider.tsx** - Context provider hanterar:
  - Initial inventarium-state (börjar med UV Light)
  - `addItem()` - Lägger till föremål om inte redan samlat
  - `resetInventory()` - Återställer till starttillstånd
  - Dublettvarnlogi

- **inventoryContextValue.ts** - Context-setup med:
  - `InventoryContext` - Context-objekt
  - `useInventory()` - Custom hook med felhantering

- **RoomPage.tsx** - Huvudspellogi:
  - Läser rum-id från URL-parametrar
  - Visar rätt bild/text baserat på löst tillstånd
  - Hanterar pussellösningslogik
  - Visar ledtråd när frågarparameter är true
  - Navigering till nästa rum eller vinst

## Datafiler

### rooms.json

Varje rum innehåller:
- `id` - Rumsnummer
- `roomPath` - URL-vänlig sökväg (t.ex. "server-room")
- `roomName` - Visningsnamn
- `unsolvedInstruction` / `solvedInstruction` - Pusseltekst
- `unsolvedImage` / `solvedImage` - Visuella tillgångar
- `itemToSolve` - Föremåls-ID som behövs för att lösa
- `itemToAdd` - Föremåls-ID man får efter lösning (null för sista rummet)
- `hint` - Hjälpsam ledtråd

### items.json

Varje föremål innehåller:
- `id` - Unikt ID
- `item` - Visningsnamn
- `description` - Föremålsbeskrivning
- `image` - Bildsökväg

## Webbläsarstöd

- Moderna webbläsare med ES6-stöd
- Utvecklat och testat med senaste versioner av Chrome/Firefox/Safari/Edge

## Anteckningar

- Spelet följer en linjär progressionskedja - varje rums belöning behövs för nästa
- Exit Node (slutrummet) använder lokal state eftersom det inte har något belöningsföremål
- Inventariet är den enda sanningskällan för rumkompletteringsstatus (ingen separat löst-rum-state)
- Alla bilder lagras i `public/`-mappen

## Uppgiftskrav uppfyllda

Detta projekt byggdes för att uppfylla uppgiften "Escape the System" med omfattande implementering av både G-krav och VG-krav med hjälp av React Router och Context API för state management.
