import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import SideBar from '@/components/layouts/Sidebar';
import ContextProvider from '@/contexts/ContextProvider';
import LayoutStoreProvider from '@/contexts/LayoutStoreContext';
import LoadingContextProvider from '@/contexts/LoadingContext';
import { Box, CssBaseline, StyledEngineProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

// Create a client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
      </head> */}
      <body className={`${cormorant_upright.variable} antialiased`}>
        <QueryClientProvider client={queryClient}>
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
                        <Footer />
                      </Box>
                    </Box>
                  </StyledEngineProvider>
                </LoadingContextProvider>
              </ContextProvider>
            </AppRouterCacheProvider>
          </LayoutStoreProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
