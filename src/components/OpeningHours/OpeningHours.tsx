import { translator } from '../../utils/translations';
import { Language, OpeningHours as OpeningHoursProps } from '../../utils/types';
import { Table } from '@navikt/ds-react';
import { buildDayLabel } from './buildDayLabel';

import styles from './OpeningHours.module.scss';

type Props = {
    openingHours: OpeningHoursProps[];
    language: Language;
};

export const OpeningHours = ({ openingHours, language }: Props) => {
    const getOfficeTranslations = translator('office', language);
    const getDateTimeTranslations = translator('dateTime', language);

    const closedLabel = getOfficeTranslations('closed');
    const appointmentOnlyLabel = getOfficeTranslations('appointmentOnly');
    const dayLabel = getDateTimeTranslations('day');
    const timeLabel = getDateTimeTranslations('time');

    const normalizeTimeLabel = (time: string): string => {
        if (!time) {
            return '';
        }
        return time.replace(':', '.');
    };

    const buildOpeningInformation = (opening: OpeningHoursProps): string => {
        if (opening.kunTimeavtale === 'true') {
            return appointmentOnlyLabel;
        }

        if (opening.fra && opening.til) {
            return `${normalizeTimeLabel(opening.fra)}–${normalizeTimeLabel(opening.til)}`;
        }

        return closedLabel;
    };

    return (
        <Table>
            <Table.Header className={styles.srOnly}>
                <Table.Row>
                    <Table.HeaderCell scope="col">{dayLabel}</Table.HeaderCell>
                    <Table.HeaderCell scope="col">{timeLabel}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {openingHours.map((opening, index) => {
                    const dayInformation = buildDayLabel(opening, language);

                    return (
                        <Table.Row shadeOnHover={false} key={index}>
                            <Table.HeaderCell className="dayInformation">{dayInformation}</Table.HeaderCell>
                            <Table.DataCell className="openingInformation">{buildOpeningInformation(opening)}</Table.DataCell>
                        </Table.Row>
                    );
                })}
            </Table.Body>
        </Table>
    );
};
