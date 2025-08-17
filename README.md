# Bilskadeportalen Customer

Next.js app for submitting and handling vehicle damage claims.

## Highlights

- Modern multi-step wizards for damage claims (glass and key)
- Form validation with React Hook Form + Zod
- File uploads (e.g., photos of damage)
- Digital signature capture
- Transactional emails via Resend
- Supabase for data/auth integration
- Smooth animations with Motion

## Tech stack

- **Framework:** Next.js 15 / React 19
- **Styling:** Tailwind CSS v4
- **Forms & validation:** React Hook Form + Zod
- **Storage & auth:** Supabase (`@supabase/ssr`, `@supabase/supabase-js`)
- **Email:** Resend + React Email
- **Uploads & signature:** React Dropzone, React Signature Canvas
- **Animations:** Motion

## Key flows

- **Glass claim (`/ny-skada/glas`)**: Select company, proceed through steps (`Step1`–`Step4`) with validation (`validationSchema.js`), upload photos, sign, and submit. On success, an email is sent using the server action in `app/actions/send-email.js` with the React Email template in `emails/send-email.jsx`.
- **Key claim (`/ny-skada/nyckel`)**: Mirrors the glass flow with its own multi-step wizard and validation.

## Notes

- Uses Supabase (data/auth) and Resend (email).
- Private project.
