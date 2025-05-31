# Bilskadeportalen Customer

A modern web application built with Next.js for managing vehicle damage claims and customer interactions.

## Features

- Modern UI with Tailwind CSS
- Form handling with React Hook Form and Zod validation
- File uploads with React Dropzone
- Digital signature support
- Email integration with Resend
- Database integration with Supabase
- Motion animations for enhanced UX

## Tech Stack

- **Framework:** Next.js 15.3.2
- **UI Library:** React 19
- **Styling:** Tailwind CSS
- **Form Handling:** React Hook Form + Zod
- **Database:** Supabase
- **Email:** Resend
- **File Upload:** React Dropzone
- **Digital Signatures:** React Signature Canvas
- **Animations:** Motion

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- Supabase account and project
- Resend API key

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd bilskadeportalen-customer
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Project Structure

```
├── app/              # Next.js app directory
├── public/           # Static assets
├── utils/            # Utility functions
├── components/       # React components
└── styles/          # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For support, please contact [your-email@example.com]
