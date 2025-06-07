'use server';

import ClaimNotificationEmail from '@/emails/send-email';
import { Resend } from 'resend';

export async function sendEmail(to, registrationNumber, claimType, companyName) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
        from: 'Bilskadeportalen <noreply@bilskadeportalen.com>',
        to: to,
        subject: 'Ny skadeanmälan',
        react: <ClaimNotificationEmail registrationNumber={registrationNumber} claimType={claimType} companyName={companyName} />,
    });
}
