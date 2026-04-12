import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import DebateArena from './pages/DebateArena';
import Scorecards from './pages/Scorecards';
import SubmitEvidence from './pages/SubmitEvidence';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/debate" element={<DebateArena />} />
        <Route path="/scores" element={<Scorecards />} />
        <Route path="/submit" element={<SubmitEvidence />} />
      </Routes>
    </Layout>
  );
}
