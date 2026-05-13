import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>
        <div className="d-flex">
          <Sidebar />
          <main className="flex-grow-1 p-4" style={{ marginLeft: '260px' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
