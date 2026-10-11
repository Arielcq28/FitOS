import Icon from "./Icon";

type AppHeaderProps = {
  onOpenProfile: () => void;
  onOpenToday: () => void;
};

export default function AppHeader({
  onOpenProfile,
  onOpenToday,
}: AppHeaderProps) {
  return (
    <header className="topbar">
      <a
        className="brand"
        href="#"
        onClick={(event) => {
          event.preventDefault();
          onOpenToday();
        }}
        aria-label="Form home"
      >
        FITOS<span>●</span>
      </a>
      <div className="session-label">
        <span>WEEK 06</span>
        <strong>SPRING STRENGTH</strong>
      </div>
      <button
        className="profile-button"
        aria-label="Open profile"
        onClick={onOpenProfile}
      >
        <span>AC</span>
        <Icon name="chevron" size={15} />
      </button>
    </header>
  );
}
