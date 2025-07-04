import React from 'react';
import { Reception } from '../../dist/main.js';
import '../../dist/style.css';

const mockReception = [
    {
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
    },
];

function App() {
    return <Reception receptions={mockReception} language="no" officeType="office" />;
}

export default App;
