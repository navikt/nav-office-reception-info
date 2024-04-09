import { BodyLong, Tabs } from '@navikt/ds-react';
import { AudienceReception } from '../../utils/types.ts';
import { SingleReception } from '../SingleReception/SingleReception.tsx';
import { translator } from '../../utils/translations.ts';

import style from './Reception.module.scss';
import { ClockDashedIcon, InboxDownIcon, PaperplaneIcon } from '@navikt/aksel-icons';

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
            <Tabs defaultValue="logg">
                <Tabs.List>
                    <Tabs.Tab value="logg" label="Logg" icon={<ClockDashedIcon title="historielogg" />} />
                    <Tabs.Tab value="inbox" label="Inbox" icon={<InboxDownIcon title="inbox" />} />
                    <Tabs.Tab value="sendt" label="Sendt" icon={<PaperplaneIcon title="sendt" />} />
                </Tabs.List>
                <Tabs.Panel value="logg" className="h-24 w-full bg-gray-50 p-4">
                    Logg-tab
                </Tabs.Panel>
                <Tabs.Panel value="inbox" className="h-24 w-full bg-gray-50 p-4">
                    Inbox-tab
                </Tabs.Panel>
                <Tabs.Panel value="sendt" className="h-24  w-full bg-gray-50 p-4">
                    Sendt-tab
                </Tabs.Panel>
            </Tabs>
        </>
    );
};
