import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendCustomerConfirmationEmail({ email, firstName, lastName, claimId, damageType }) {
    try {
        await resend.emails.send({
            from: 'Bilskadeportalen <noreply@bilskadeportalen.se>',
            to: email,
            subject: 'Bekräftelse på din skadeanmälan',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #ff3b3f;">Tack för din anmälan!</h1>
                    <p>Hej ${firstName} ${lastName},</p>
                    <p>Vi har tagit emot din anmälan om ${damageType === 'glas' ? 'glasskada' : 'nyckelskada'}.</p>
                    <p>Din anmälan har registrerats med nummer: <strong>${claimId}</strong></p>
                    <p>Verkstaden kommer att kontakta dig inom kort för att boka in en tid för reparation.</p>
                    <p>Om du har några frågor, tveka inte att kontakta oss.</p>
                    <p>Med vänliga hälsningar,<br>Bilskadeportalen</p>
                </div>
            `,
        });
    } catch (error) {
        console.error('Failed to send customer confirmation email:', error);
    }
}

export async function sendWorkshopNotification({ workshopEmail, workshopName, claimData, damageType }) {
    try {
        await resend.emails.send({
            from: 'Bilskadeportalen <noreply@bilskadeportalen.se>',
            to: workshopEmail,
            subject: 'Ny skadeanmälan',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #ff3b3f;">Ny skadeanmälan</h1>
                    <p>Hej ${workshopName},</p>
                    <p>En ny ${damageType === 'glas' ? 'glasskada' : 'nyckelskada'} har anmälts till er verkstad.</p>
                    <h2>Kunduppgifter:</h2>
                    <ul>
                        <li>Namn: ${claimData.firstname} ${claimData.lastname}</li>
                        <li>Registreringsnummer: ${claimData.registrationnumber}</li>
                        <li>Telefon: ${claimData.phone}</li>
                        <li>E-post: ${claimData.email}</li>
                    </ul>
                    <h2>Skadeuppgifter:</h2>
                    <ul>
                        <li>Försäkringsbolag: ${claimData.insurancecompany}</li>
                        <li>Skadedatum: ${claimData.date}</li>
                        <li>Beskrivning: ${claimData.description}</li>
                    </ul>
                    <p>Vänligen kontakta kunden så snart som möjligt för att boka in en tid för reparation.</p>
                    <p>Med vänliga hälsningar,<br>Bilskadeportalen</p>
                </div>
            `,
        });
    } catch (error) {
        console.error('Failed to send workshop notification:', error);
    }
}
