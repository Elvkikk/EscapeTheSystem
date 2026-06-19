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

- **React**
- **React Router** 
- **TypeScript** 
- **Vite** 
- **ESLint** - Kodkvalitet
- **Context API** - State management för inventarium

## Projektstruktur

```
src/
├── components/
│   ├── Layout.tsx             
│   └── inventory.tsx            
├── context/
│   ├── inventoryContextValue.ts 
│   └── inventoryProvider.tsx    
├── pages/
│   ├── Home.tsx                
│   ├── RoomPage.tsx            
│   ├── Victory.tsx             
│   └── NotFound.tsx            
├── data/
│   ├── rooms.json              
│   └── items.json              
├── App.tsx                      
└── main.tsx                     
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
Appen öppnas på `localhost`

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
