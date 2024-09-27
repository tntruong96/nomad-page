import type { Metadata } from 'next';
import './globals.css';
import { cormorant_upright } from './fonts/fonts';
import Footer from '@/components/layouts/Footer';
import SideBar from '@/components/layouts/Sidebar';
import { Box } from '@mui/material';

const drawerWidth = '20vw';

export const metadata: Metadata = {
  title: {
    default: 'Nomad.',
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
        <Box component={'div'} className="flex">
          <SideBar drawerWidth={drawerWidth} open={true} />
          <Box className="flex w-full flex-col items-center justify-center">
            <Box width={`calc(100% - ${drawerWidth})`}>{children}</Box>
            <Footer />
          </Box>
        </Box>
      </body>
    </html>
  );
}
