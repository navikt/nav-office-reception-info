import { BodyLong } from '@navikt/ds-react';
import { AudienceReception } from '../../utils/types.ts';
import { SingleReception } from '../SingleReception/SingleReception.tsx';
import { translator } from '../../utils/translations.ts';

import style from './Reception.module.scss';

type Props = {
    receptions: AudienceReception[];
    language: string;
};

const validateLanguage = (lang: string): 'no' | 'nn' | 'en' => {
    return ['no', 'nn', 'en'].includes(lang) ? (lang as 'no' | 'nn' | 'en') : 'no';
};

export const Reception = ({ receptions, language }: Props) => {
    const languageValidated = validateLanguage(language);
    const getOfficeTranslations = translator('office', languageValidated);

    if (!receptions || receptions.length === 0) {
        return null;
    }

    if (receptions.length === 1) {
        return (
            <div className={style.singleTab}>
                <SingleReception {...receptions[0]} language={languageValidated} />
            </div>
        );
    }

    return (
        <>
            <BodyLong className={style.chooseBetweenOffices}>{getOfficeTranslations('chooseBetweenOffices')}</BodyLong>
        </>
    );
};
