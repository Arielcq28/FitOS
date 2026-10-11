import { useEffect, useState, type ReactNode } from "react";
import AppHeader from "./components/AppHeader.tsx";
import { MobileNav, Sidebar } from "./components/Navigation.tsx";
import type { ViewName } from "./types/navigation";
import ProfileView from "./screens/ProfileView.tsx";
// import ProgressView from "./views/ProgressView";
// import ScheduleView from "./views/ScheduleView";
// import TodayView from "./views/TodayView";

export default function App() {
  const [weights, setWeights] = useState<Record<number, string>>({ 1: "82.5" });
  const [savedIds, setSavedIds] = useState<number[]>([1]);
  const [activeView, setActiveView] = useState<ViewName>("Today");
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (!timerRunning) return;
    const interval = window.setInterval(() => {
      setTimerSeconds((current) => current + 1);
    }, 1000);
    return () => window.clearInterval(interval);
  }, [timerRunning]);

  const updateWeight = (id: number, value: string) => {
    setWeights((current) => ({ ...current, [id]: value }));
    setSavedIds((current) => current.filter((savedId) => savedId !== id));
  };

  const saveWeight = (id: number) => {
    if (!weights[id]) return;
    setSavedIds((current) =>
      current.includes(id) ? current : [...current, id],
    );
  };

  const views: Record<ViewName, ReactNode> = {
    // Today: (
    //   <TodayView
    //     weights={weights}
    //     savedIds={savedIds}
    //     timerSeconds={timerSeconds}
    //     timerRunning={timerRunning}
    //     onWeightChange={updateWeight}
    //     onSaveWeight={saveWeight}
    //     onResetTimer={() => {
    //       setTimerRunning(false);
    //       setTimerSeconds(0);
    //     }}
    //     onToggleTimer={() => setTimerRunning((current) => !current)}
    //   />
    // )
    // Schedule: <ScheduleView />,
    // Progress: <ProgressView />,
    Profile: <ProfileView />,
  };

  return (
    <div className="app-shell">
      <AppHeader
        onOpenProfile={() => setActiveView("Profile")}
        onOpenToday={() => setActiveView("Today")}
      />
      <div className="dashboard">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />
        {views[activeView]}
      </div>
      <MobileNav activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
}
