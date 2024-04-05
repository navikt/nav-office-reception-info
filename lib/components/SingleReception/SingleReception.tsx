import { BodyShort, Heading } from '@navikt/ds-react';
import { ClockFillIcon, InformationSquareFillIcon, HouseFillIcon } from '@navikt/aksel-icons';
import { translator } from '../../utils/translations.ts';
import { AudienceReception, Language } from '../../utils/types.ts';
import { OpeningHours } from '../OpeningHours/OpeningHours.tsx';
import { formatAudienceReception } from './formatAudienceReception.ts';

import style from './SingleReception.module.scss';

interface SingleReceptionProps extends AudienceReception {
    language: Language;
}

export const SingleReception = (props: SingleReceptionProps) => {
    const { language } = props;
    const getLabel = translator('office', language);

    const { address, adkomstbeskrivelse, openingHours, openingHoursExceptions } = formatAudienceReception(props);

    const todaysDate: string = new Date().toISOString().slice(0, 10);
    const futureOpeningHoursExceptions = openingHoursExceptions
        .filter((exception) => {
            const openingHoursExceptionDate: string = exception.dato;
            return openingHoursExceptionDate >= todaysDate;
        })
        .sort((a, b) => {
            const dateA = new Date(a.dato).getTime();
            const dateB = new Date(b.dato).getTime();
            return dateA - dateB;
        });

    return (
        <div className={style.singleReception}>
            <Heading level="3" size="medium" spacing className={style.heading}>
                <HouseFillIcon aria-hidden="true" className={`${style.headingIcon} ${style.iconPlace}`} />
                {getLabel('address')}
            </Heading>
            <section className={style.address}>
                <BodyShort className={style.addressLine}>{address}</BodyShort>
                <BodyShort className={style.addressLine} size="small">
                    {adkomstbeskrivelse}
                </BodyShort>
            </section>

            {openingHours.length > 0 && (
                <>
                    <Heading level="3" size="medium" spacing className={style.heading}>
                        <ClockFillIcon aria-hidden="true" className={`${style.headingIcon} ${style.iconClock}`} />
                        {getLabel('openingHoursWithoutAppointment')}
                    </Heading>
                    <OpeningHours openingHours={openingHours} language={language} />
                </>
            )}
            {futureOpeningHoursExceptions.length > 0 && (
                <>
                    <Heading level="3" size="medium" spacing>
                        {getLabel('specialOpeningHours')}
                    </Heading>
                    <OpeningHours openingHours={futureOpeningHoursExceptions} language={language} />
                </>
            )}
            <div className={style.appointmentBookingInfo}>
                <InformationSquareFillIcon className={style.iconInfo} aria-hidden="true" />
                {getLabel('youCanMakeAppointment')}
            </div>
        </div>
    );
};
