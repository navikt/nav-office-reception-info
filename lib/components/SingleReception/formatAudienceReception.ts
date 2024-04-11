import { AudienceReception, OpeningHours as OpeningHoursProps } from '../../utils/types.ts';
import { formatAddress } from '../../utils/utils.ts';

type OpeningHoursBuckets = {
    regular: OpeningHoursProps[];
    exceptions: OpeningHoursProps[];
};

type FormattedAudienceReception = {
    address: string;
    adkomstbeskrivelse?: string;
    openingHours: OpeningHoursProps[];
    openingHoursExceptions: OpeningHoursProps[];
};

const dagArr: OpeningHoursProps['dag'][] = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'] as const;

export const formatAudienceReception = (audienceReception: AudienceReception): FormattedAudienceReception => {
    const aapningstider = audienceReception.aapningstider?.reduce<OpeningHoursBuckets>(
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

    const openingHours = aapningstider?.regular || [];
    openingHours?.sort((a, b) => dagArr.indexOf(a.dag) - dagArr.indexOf(b.dag));

    return {
        address: formatAddress(audienceReception.besoeksadresse, true),
        openingHoursExceptions: aapningstider?.exceptions || [],
        openingHours,
        adkomstbeskrivelse: audienceReception.adkomstbeskrivelse,
    };
};
