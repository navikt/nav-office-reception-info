import React from 'react';
import { Reception } from '../../dist/main.js';
import '../../dist/style.css';

const mockReception1 = {
    besoeksadresse: {
        gatenavn: 'Testgata',
        husnummer: '1',
        postnummer: '1234',
        poststed: 'Oslo',
    },
    adkomstbeskrivelse: 'Inngang fra Testgata, 2. etasje',
    aapningstider: [
        { dag: 'Mandag', fra: '09:00', til: '15:00' },
        { dag: 'Tirsdag', fra: '09:00', til: '15:00' },
        { dag: 'Onsdag', fra: '09:00', til: '15:00' },
        { dag: 'Torsdag', fra: '09:00', til: '15:00' },
        { dag: 'Fredag', fra: '09:00', til: '14:00' },

        // Spesielle åpningstider
        { dato: '2050-12-24', stengt: 'true' },
        { dato: '2050-12-31', fra: '09:00', til: '12:00' },
    ],
};

const mockReception2 = {
    besoeksadresse: {
        gatenavn: 'Testgata',
        husnummer: '2',
        postnummer: '5678',
        poststed: 'Drammen',
    },
    adkomstbeskrivelse: 'Inngang fra Testgata, 2. etasje',
    aapningstider: [
        { dag: 'Mandag', fra: '09:00', til: '15:00' },
        { dag: 'Tirsdag', fra: '09:00', til: '15:00' },
        { dag: 'Onsdag', fra: '09:00', til: '15:00' },
        { dag: 'Torsdag', fra: '09:00', til: '15:00' },
        { dag: 'Fredag', fra: '09:00', til: '14:00' },

        // Spesielle åpningstider
        { dato: '2050-12-24', stengt: 'true' },
        { dato: '2050-12-31', fra: '09:00', til: '12:00' },
    ],
};

function App() {
    return (
        <div>
            <Reception receptions={[mockReception1]} language="no" officeType="office" />
            <Reception receptions={[mockReception1, mockReception2]} language="no" officeType="office" />
        </div>
    );
}

export default App;
