# Office Reception Info

Pakke for å vise informasjon om publikumsmottak. Satt opp med Vite i ["library mode"](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)

<img width="640" alt="image" src="https://github.com/navikt/nav-office-reception-info/assets/71373910/4f416dd6-4621-4ce1-82d5-2c5a173bd635">

## Lokal utvikling:

### For testing i nav-enonicxp-frontend:

```
npm link ../nav-enonicxp-frontend/node_modules/react
```

### For testing i personopplysninger:

```
npm link ../personopplysninger/node_modules/react
```

(npm link må kjøres på ny hver gang etter npm install)

```
npm run build
```

### I konsument-app (nav-enonicxp-frontend, personopplysninger, etc.):
```
npm link nav-office-reception-info
```

## Henvendelser

Spørsmål knyttet til koden eller prosjektet kan rettes mot https://github.com/orgs/navikt/teams/personbruker

### For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #team-personbruker




