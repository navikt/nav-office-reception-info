import { OpeningHours as OpeningHoursProps } from '../../utils/types.ts';

type OpeningHoursWithDato = Omit<OpeningHoursProps, 'dato'> & Required<Pick<OpeningHoursProps, 'dato'>>;

export const getFutureOpeningExceptions = (openingHoursExceptions: OpeningHoursProps[]) => {
    const todaysDate = new Date().toISOString().slice(0, 10);

    return openingHoursExceptions
        .filter((openingHours): openingHours is OpeningHoursWithDato => !!(openingHours.dato && openingHours.dato >= todaysDate))
        .sort((a, b) => {
            const dateA = new Date(a.dato).getTime();
            const dateB = new Date(b.dato).getTime();
            return dateA - dateB;
        });
};
