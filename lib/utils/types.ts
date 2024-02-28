export type Address = {
    type?: 'stedsadresse' | 'postboksadresse';
    gatenavn?: string;
    husbokstav?: string;
    husnummer?: string;
    postboksanlegg?: string;
    postboksnummer?: string;
    postnummer?: string;
    poststed?: string;
};

export type LegacyOfficeAddress = {
    gatenavn: string;
    husbokstav?: string;
    husnummer: string;
    postboksanlegg?: string;
    postboksnummer?: string;
    postnummer: string;
    poststed: string;
    type: string;
};

export type OpeningHours = {
    dag?: 'Mandag' | 'Tirsdag' | 'Onsdag' | 'Torsdag' | 'Fredag';
    dato?: string;
    fra?: string;
    til?: string;
    kunTimeavtale?: string;
    kommentar?: string;
    stengt?: string;
};

export type AudienceReception = {
    stedsbeskrivelse?: string;
    aapningstider: OpeningHours[];
    besoeksadresse?: Address | LegacyOfficeAddress; //TODO sjekk om gir mening
    adkomstbeskrivelse?: string;
};

export type Language = 'no' | 'nn' | 'en';
