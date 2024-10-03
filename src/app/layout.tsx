import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import SideBar from '@/components/layouts/Sidebar';
import ReactQueryProvider from '@/components/ReactQueryProvider/ReactQueryProvider';
import ContextProvider from '@/contexts/ContextProvider';
import LayoutStoreProvider from '@/contexts/LayoutStoreContext';
import LoadingContextProvider from '@/contexts/LoadingContext';
import { Box, CssBaseline, StyledEngineProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant_upright.variable} antialiased`}>
        <ReactQueryProvider>
          <LayoutStoreProvider>
            <AppRouterCacheProvider>
              <ContextProvider>
                <InitColorSchemeScript attribute="class" />
                <LoadingContextProvider>
                  <StyledEngineProvider injectFirst>
                    <CssBaseline />
                    <Header />
                    <Box className="flex w-full">
                      <SideBar open={true} />
                      <Box className="flex w-full flex-auto flex-col items-center justify-end">
                        {children}
                      </Box>
                    </Box>
                    <Footer />
                  </StyledEngineProvider>
                </LoadingContextProvider>
              </ContextProvider>
            </AppRouterCacheProvider>
          </LayoutStoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
