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
