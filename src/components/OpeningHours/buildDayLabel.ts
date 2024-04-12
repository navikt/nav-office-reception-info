import { Translations } from '../../utils/default';
import { translator } from '../../utils/translations.ts';
import { Language, OpeningHours as OpeningHoursProps } from '../../utils/types.ts';
import { formatDate } from '../../utils/utils.ts';

type LegacyOfficeOpeningHoursProps = {
    id: number;
    dag?: 'Mandag' | 'Tirsdag' | 'Onsdag' | 'Torsdag' | 'Fredag';
    dato?: string;
    fra?: string;
    til?: string;
    kommentar?: string;
    stengt?: string;
    isoDate?: string;
};

type LegacyDayNames = NonNullable<LegacyOfficeOpeningHoursProps['dag']>;
type TranslationDayNameKeys = keyof Translations['dateTime']['weekDayNames'];

const dayNameKey: Record<LegacyDayNames, TranslationDayNameKeys> = {
    Mandag: 'mon',
    Tirsdag: 'tue',
    Onsdag: 'wed',
    Torsdag: 'thu',
    Fredag: 'fri',
} as const;

// If includes dato, show this rather than day (for special opening hours)
export const buildDayLabel = (opening: OpeningHoursProps, language: Language): string => {
    const weekdayNames = translator('dateTime', language)('weekDayNames');

    const { dato, dag } = opening;

    // If includes dato, show this rather than day (for special opening hours)
    if (dato) {
        return formatDate({
            datetime: dato,
            language,
            short: true,
            year: true,
        });
    }

    return dag ? weekdayNames[dayNameKey[dag]] : ''; // Fallback to empty string to avoid showing "undefined"
};
