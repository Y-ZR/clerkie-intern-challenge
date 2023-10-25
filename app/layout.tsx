import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react';
import Header from './components/Header/header';
import SideBar from './components/Sidebar/sidebar';

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: ReactNode 
}

const RootLayout: FC<LayoutProps> = ({ children }) => { 
  return (
    <html>
      <body style={{ margin: 0 }}>
        <main className={inter.className}>
          <SideBar />
          <Header />
          <section>
            <div style={{ marginLeft: '250px', 
                          height: 'calc(100vh - 80px)' }}>
              {children}
            </div>
          </section>      
        </main>
      </body>
    </html>
  );
}

export default RootLayout;