import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import SideBar from '@/components/layouts/Sidebar';
import ContextProvider from '@/contexts/ContextProvider';
import { Box, CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
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
        <ContextProvider>
          <CssBaseline />
          <Header />
          <Box className="flex w-full">
            <SideBar open={true} />
            <Box className="flex w-full flex-auto flex-col items-center justify-end">
              <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
              <Footer />
            </Box>
          </Box>
        </ContextProvider>
      </body>
    </html>
  );
}
