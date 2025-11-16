import { useState } from 'react';
import { BodyLong, Tabs } from '@navikt/ds-react';
import { AudienceReception } from '../../utils/types.ts';
import { SingleReception } from '../SingleReception/SingleReception.tsx';
import { translator } from '../../utils/translations.ts';

import style from './Reception.module.scss';

type Props = {
    receptions: AudienceReception[];
    language: string;
    officeType?: string;
};

const validateLanguage = (lang: string): 'no' | 'nn' | 'en' => {
    return ['no', 'nn', 'en'].includes(lang) ? (lang as 'no' | 'nn' | 'en') : 'no';
};

export const Reception = ({ receptions, language, officeType }: Props) => {
    const languageValidated = validateLanguage(language);
    const getOfficeTranslations = translator('office', languageValidated);

    const getLocation = (reception: AudienceReception) => {
        if (!reception) {
            return '(Ukjent sted)';
        }
        return reception.stedsbeskrivelse || reception.besoeksadresse?.poststed || '(Ukjent sted)';
    };

    const getIdFromLabel = (label: string) => {
        return label.replace(/\s/g, '-').toLowerCase();
    };

    const firstLocation = getLocation(receptions[0]);
    const [state, setState] = useState(getIdFromLabel(firstLocation));

    if (!receptions || receptions.length === 0) {
        return null;
    }

    if (receptions.length === 1) {
        return (
            <div className={style.singleTab}>
                <SingleReception {...receptions[0]} language={languageValidated} officeType={officeType} />
            </div>
        );
    }

    return (
        <div>
            <BodyLong className={style.chooseBetweenOffices}>{getOfficeTranslations('chooseBetweenOffices')}</BodyLong>
            <Tabs value={state} onChange={setState} className={style.officeTabs}>
                <Tabs.List>
                    {receptions.map((loc: AudienceReception, index) => {
                        const locationLabel = getLocation(loc);
                        return <Tabs.Tab key={index} value={getIdFromLabel(locationLabel)} label={locationLabel} />;
                    })}
                </Tabs.List>
                {receptions.map((loc: AudienceReception, index) => {
                    const locationLabel = getLocation(loc);
                    return (
                        <Tabs.Panel key={index} value={getIdFromLabel(locationLabel)} className={style.singleTab}>
                            <SingleReception {...loc} language={languageValidated} officeType={officeType} />
                        </Tabs.Panel>
                    );
                })}
            </Tabs>
        </div>
    );
};
