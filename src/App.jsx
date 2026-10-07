import { HashRouter, Routes, Route } from 'react-router-dom';
import { Providers } from '@/components/layout/providers';
import { Nav } from '@/components/layout/nav';
import { PageBackdrop } from '@/components/layout/page-backdrop';
import { SkipToContent } from '@/components/layout/skip-to-content';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import ProjectsPage from '@/pages/Projects';

function App() {
  return (
    <HashRouter>
      <Providers>
        <div className="min-h-screen bg-background font-sans text-foreground antialiased">
          <div className="site-frame site-frame--top" aria-hidden="true" />
          <div className="site-frame site-frame--left" aria-hidden="true" />
          <div className="site-frame site-frame--right" aria-hidden="true" />
          <svg
            className="site-corner site-corner--top-left"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="site-corner site-corner--top-right"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z"
              fill="currentColor"
            />
          </svg>
          <SkipToContent />
          <PageBackdrop />
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </Providers>
    </HashRouter>
  );
}

export default App;
