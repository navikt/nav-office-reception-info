export type Address = {
    type?: 'stedsadresse';
    postnummer?: string;
    poststed?: string;
    gatenavn?: string;
    husnummer?: string;
    husbokstav?: string;
};

export type OpeningHours = {
    dag?: 'Mandag' | 'Tirsdag' | 'Onsdag' | 'Torsdag' | 'Fredag';
    dato?: string;
    fra?: string;
    til?: string;
    kommentar?: string;
    stengt?: string;
    kunTimeavtale?: string;
};

export type AudienceReception = {
    stedsbeskrivelse?: string;
    aapningstider: OpeningHours[];
    besoeksadresse?: Address;
    adkomstbeskrivelse?: string;
    officeType: string;
};

export type Language = 'no' | 'nn' | 'en';
