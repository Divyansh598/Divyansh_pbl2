import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const links = [
    { to: '/', label: 'Home', exact: true },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/debate', label: 'Debate Arena' },
    { to: '/scores', label: 'Scorecards' },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-1.5 no-underline group">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-black">
            PV
          </div>
          <span className="text-lg font-extrabold tracking-tight text-text-primary">
            Public<span className="text-primary">Verdict</span>
          </span>
        </NavLink>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-150 no-underline ${
                  isActive
                    ? 'bg-surface-secondary text-text-primary'
                    : 'text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/submit"
            className={({ isActive }) =>
              `px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-150 no-underline ml-1 ${
                isActive
                  ? 'bg-primary-dark text-white'
                  : 'bg-primary text-white hover:bg-primary-dark'
              }`
            }
          >
            + Submit Evidence
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
