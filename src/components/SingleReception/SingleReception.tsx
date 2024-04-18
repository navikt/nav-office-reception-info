import { BodyShort, Heading } from '@navikt/ds-react';
import { ClockFillIcon, InformationSquareFillIcon, HouseFillIcon } from '@navikt/aksel-icons';
import { translator } from '../../utils/translations.ts';
import { AudienceReception, Language } from '../../utils/types.ts';
import { OpeningHours } from '../OpeningHours/OpeningHours.tsx';
import { formatAudienceReception } from './formatAudienceReception.ts';
import { getFutureOpeningExceptions } from './futureOpeningHoursExceptions.ts';

import style from './SingleReception.module.scss';

interface SingleReceptionProps extends AudienceReception {
    language: Language;
}

export const SingleReception = (props: SingleReceptionProps) => {
    const { language } = props;
    const getLabel = translator('office', language);

    const { address, adkomstbeskrivelse, openingHours, openingHoursExceptions, addressExtra } = formatAudienceReception(props);
    const futureOpeningHoursExceptions = getFutureOpeningExceptions(openingHoursExceptions);

    const hasOpeningHours = openingHours.length > 0 || futureOpeningHoursExceptions.length > 0;
    const openingHoursHeading = props.officeType === 'HMS' ? getLabel('openingHours') : getLabel('openingHoursWithoutAppointment');

    return (
        <div className={style.singleReception}>
            <Heading level="3" size="medium" spacing className={style.heading}>
                <HouseFillIcon aria-hidden="true" className={`${style.headingIcon} ${style.iconPlace}`} />
                {getLabel('address')}
            </Heading>
            <section className={style.address}>
                {addressExtra && <BodyShort className={style.addressExtra}>{addressExtra}</BodyShort>}
                <BodyShort className={style.addressLine}>{address}</BodyShort>
                {adkomstbeskrivelse && (
                    <BodyShort className={style.addressLine} size="small">
                        {adkomstbeskrivelse}
                    </BodyShort>
                )}
            </section>

            {openingHours.length > 0 && (
                <>
                    <Heading level="3" size="medium" spacing className={style.heading}>
                        <ClockFillIcon aria-hidden="true" className={`${style.headingIcon} ${style.iconClock}`} />
                        {openingHoursHeading}
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
            {hasOpeningHours && props.officeType !== 'HMS' && (
                <div className={style.appointmentBookingInfo}>
                    <InformationSquareFillIcon className={style.iconInfo} aria-hidden="true" />
                    {getLabel('youCanMakeAppointment')}
                </div>
            )}
        </div>
    );
};
