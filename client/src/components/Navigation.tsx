import Icon, { type IconName } from "./Icon";
import type { ViewName } from "../types/navigation";

const navItems: { name: ViewName; icon: IconName }[] = [
  { name: "Today", icon: "home" },
  { name: "Schedule", icon: "calendar" },
  { name: "Progress", icon: "stats" },
  { name: "Profile", icon: "profile" },
];

type NavigationProps = {
  activeView: ViewName;
  onViewChange: (view: ViewName) => void;
};

export function Sidebar({ activeView, onViewChange }: NavigationProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-intro">
        <p>YOUR PROGRAM</p>
        <h2>
          Build strength.
          <br />
          Move better.
        </h2>
      </div>
      <nav className="side-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            className={activeView === item.name ? "active" : ""}
            key={item.name}
            onClick={() => onViewChange(item.name)}
          >
            <Icon name={item.icon} size={19} />
            {item.name}
            {item.name === "Today" && <span className="nav-dot" />}
          </button>
        ))}
      </nav>
      <div className="coach-card">
        <div className="coach-meta">
          <span className="coach-avatar">AQ</span>
          <div>
            <small>YOUR TRAINER</small>
            <strong>Adrian Quesada</strong>
          </div>
        </div>
        <button>
          Message <Icon name="arrow" size={16} />
        </button>
      </div>
    </aside>
  );
}

export function MobileNav({ activeView, onViewChange }: NavigationProps) {
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {navItems.map((item) => (
        <button
          className={activeView === item.name ? "active" : ""}
          key={item.name}
          onClick={() => onViewChange(item.name)}
        >
          <Icon name={item.icon} size={20} />
          <span>{item.name}</span>
        </button>
      ))}
    </nav>
  );
}
