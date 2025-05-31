import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ScrollToTop from './components/ScrollToTop';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Bilskadeportalen',
    description: 'Anmäl din skada direkt online och låt oss ta hand om det. Enkel, snabb och effektiv service.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ScrollToTop />
                {children}
            </body>
        </html>
    );
}
