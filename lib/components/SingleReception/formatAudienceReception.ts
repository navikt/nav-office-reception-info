import { AudienceReception, OpeningHours as OpeningHoursProps } from '../../utils/types.ts';
import { formatAddress } from '../../utils/utils.ts';

type OpeningHoursBuckets = {
    regular: OpeningHoursProps[];
    exceptions: OpeningHoursProps[];
};

type FormattedAudienceReception = {
    address: string;
    adkomstbeskrivelse: string; // TODO optional lagt til i xp-frontend? Eller var den optional før og så endra jeg det?
    openingHours: OpeningHoursProps[];
    openingHoursExceptions: OpeningHoursProps[];
};

const dagArr: string[] = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'];

export const formatAudienceReception = (audienceReception: AudienceReception): FormattedAudienceReception => {
    const aapningstider = audienceReception.aapningstider.reduce<OpeningHoursBuckets>(
        (acc, elem) => {
            if (elem.dato) {
                acc.exceptions.push(elem);
            } else {
                acc.regular.push(elem);
            }
            return acc;
        },
        {
            regular: [],
            exceptions: [],
        }
    );

    return {
        address: formatAddress(audienceReception.besoeksadresse, true),
        openingHoursExceptions: aapningstider.exceptions,
        openingHours: aapningstider.regular.sort((a, b) => dagArr.indexOf(a.dag) - dagArr.indexOf(b.dag)),
        adkomstbeskrivelse: audienceReception.adkomstbeskrivelse,
    };
};
