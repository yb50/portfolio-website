import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppShell from './components/layout/AppShell'
import HomePage from './app/routes/HomePage'
import ProjectsPage from './app/routes/ProjectsPage';
import ProjectDetailPage from './app/routes/ProjectDetailPage';
import AboutPage from './app/routes/AboutPage';
import ContactPage from './app/routes/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}