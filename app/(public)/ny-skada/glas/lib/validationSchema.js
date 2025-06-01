import { z } from 'zod';

// Swedish registration number format (3 letters, 3 numbers)
const registrationNumberRegex = /^[A-Za-z]{3}\d{2}[A-Za-z0-9]$/;

// Swedish personal number format (YYYYMMDD-XXXX or YYYYMMDDXXXX)
const personalNumberRegex = /^\d{6}[-]?\d{4}$/;

// Swedish phone number format (optional country code, 9 digits)
const phoneNumberRegex = /^(\+46|0)?[1-9]\d{8}$/;

export const formSchema = z.object({
    // Step 1
    registrationnumber: z
        .string()
        .min(1, 'Registreringsnummer krävs')
        .max(6, 'Registreringsnummer får inte vara längre än 6 tecken')
        .regex(registrationNumberRegex, 'Ogiltigt registreringsnummer (ex: ABC123 eller ABC12A)'),
    firstname: z.string().min(1, 'Förnamn krävs').max(50, 'Förnamn får inte vara längre än 50 tecken'),
    lastname: z.string().min(1, 'Efternamn krävs').max(50, 'Efternamn får inte vara längre än 50 tecken'),
    email: z.string().min(1, 'E-post krävs').email('Ogiltig e-postadress'),
    phone: z.string().min(1, 'Telefonnummer krävs').regex(phoneNumberRegex, 'Ogiltigt telefonnummer'),
    personalnum: z
        .string()
        .min(1, 'Person-/Organisationsnummer krävs')
        .regex(personalNumberRegex, 'Ogiltigt person-/organisationsnummer (YYMMDD-XXXX)'),
    vat: z.string().min(1, 'Välj om du är momspliktig'),

    // Step 2
    insurancecompany: z.string().min(1, 'Försäkringsbolag krävs'),
    odometer: z.string().min(1, 'Mätarställning krävs').regex(/^\d+$/, 'Mätarställning måste vara ett nummer'),
    date: z
        .string()
        .min(1, 'Skadedatum krävs')
        .refine((date) => {
            const selectedDate = new Date(date);
            const today = new Date();
            const oneYearAgo = new Date();
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
            return selectedDate <= today && selectedDate >= oneYearAgo;
        }, 'Skadedatum måste vara inom det senaste året'),
    location: z.string().min(1, 'Skadeplats krävs'),
    damagetype: z.string().min(1, 'Skademoment krävs'),
    damagecause: z.string().min(1, 'Skadeorsak krävs'),
    damagedwindow: z.string().min(1, 'Skadad ruta krävs'),
    description: z.string().min(1, 'Skadebeskrivning krävs').max(150, 'Skadebeskrivning får inte vara längre än 150 tecken'),

    // Step 3
    images: z
        .array(
            z.object({
                id: z.string(),
                file: z.instanceof(File),
            })
        )
        .min(4, 'Du måste ladda upp 4 bilder')
        .refine((files) => files.every(({ file }) => file.size <= 10 * 1024 * 1024), 'Varje bild får inte vara större än 10MB')
        .refine(
            (files) =>
                files.every(({ file }) => {
                    return ['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/x-adobe-dng'].includes(file.type);
                }),
            'Endast JPG, PNG, WEBP, DNG filer är tillåtna'
        ),

    // Step 4
    signature: z.string().min(1, 'Namnförtydligande krävs'),
});
