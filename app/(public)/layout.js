import Header from './components/Header';
import Footer from './components/Footer';

export default function PublicLayout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='container flex-1  my-16'>{children}</main>
            <Footer />
        </div>
    );
}
