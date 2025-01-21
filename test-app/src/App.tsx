import React from 'react';
import { Reception } from '../../dist/nav-office-reception-info.js';
import '../../dist/style.css';

const mockReception = [
    {
        stedsbeskrivelse: 'NAV Oslo',
        aapningstider: [
            { dag: 'Mandag', fra: '09:00', til: '15:00' },
            { dag: 'Tirsdag', fra: '09:00', til: '15:00' },
            { dag: 'Onsdag', fra: '09:00', til: '15:00' },
            { dag: 'Torsdag', fra: '09:00', til: '15:00' },
            { dag: 'Fredag', fra: '09:00', til: '14:00' },
            // Special opening hours
            { dato: '2050-05-01', stengt: 'true', kommentar: 'Arbeidernes dag' },
            { dato: '2050-05-17', stengt: 'true', kommentar: 'Nasjonaldagen' },
            { dato: '2050-06-24', fra: '10:00', til: '14:00', kommentar: 'Sankthans' },
            { dato: '2050-12-24', stengt: 'true', kommentar: 'Julaften' },
            { dato: '2050-12-31', fra: '09:00', til: '12:00', kommentar: 'Nyttårsaften' },
            // Appointment only day
            { dato: '2024-05-16', kunTimeavtale: 'true', kommentar: 'Kun timeavtale' },
        ],
        besoeksadresse: {
            gatenavn: 'Storgata',
            husnummer: '1',
            postnummer: '0155',
            poststed: 'Oslo',
        },
        adkomstbeskrivelse: 'Inngang fra Storgata, 2. etasje',
        officeType: 'office',
    },
];

function App() {
    return <Reception receptions={mockReception} language="no" officeType="office" />;
}

export default App;
