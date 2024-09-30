import Footer from '@/components/layouts/Footer';
import SideBar from '@/components/layouts/Sidebar';
import { Box } from '@mui/material';
import type { Metadata } from 'next';
import { cormorant_upright } from './fonts/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Nomad Truong.',
    template: 'Nomad | %s',
  },
  description: "This is Nomad's page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant_upright.variable} antialiased`}>
        <Box className="flex w-full">
          <SideBar open={true} />
          <Box className="flex w-full flex-auto flex-col items-center justify-end">
            <Box>{children}</Box>
            <Footer />
          </Box>
        </Box>
      </body>
    </html>
  );
}
