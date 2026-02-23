# Office Reception Info

Pakke for å vise informasjon om publikumsmottak. Satt opp med Vite i ["library mode"](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)

<img width="640" alt="image" src="https://github.com/navikt/nav-office-reception-info/assets/71373910/4f416dd6-4621-4ce1-82d5-2c5a173bd635">

## Lokal utvikling:

### Installere pnpm

Dette prosjektet bruker **pnpm** som package manager. Node.js kommer med Corepack som automatisk bruker riktig pnpm-versjon:

```bash
corepack enable
```

Corepack leser `packageManager`-feltet i `package.json` og installerer riktig versjon automatisk.

**Merk:** Når Corepack er aktivert, vil `pnpm`-kommandoer ikke fungere.

### Kjøre lokalt

```
pnpm install
pnpm run build
pnpm run dev
```

Ved endringer i selve pakken, kjør `pnpm run build` igjen for å se endringene i test-app på http://localhost:5173/

## Publiser ny versjon:

Bruk [GitHub Actions](https://github.com/navikt/nav-office-reception-info/actions), ikke [Release](https://github.com/navikt/nav-office-reception-info/releases).

## Henvendelser

Spørsmål knyttet til koden eller prosjektet kan rettes mot https://github.com/orgs/navikt/teams/navno

### For Nav-ansatte

Interne henvendelser kan sendes via Slack i kanalen #team-navno
