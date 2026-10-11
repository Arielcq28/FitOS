import { useState } from "react";
import Icon, { type IconName } from "../components/Icon";
import { badges } from "../api/badges.ts";
import { profile as apiProfile } from "../api/profile.ts";
import {
  formatDate,
  weeksBetween,
  weeksSince,
  yearsBetween,
} from "../utilities/date.ts";
import ProgressBar from "../components/ProgressBar.tsx";

export default function ProfileView() {
  const [badgeFilter, setBadgeFilter] = useState<"all" | "earned">("all");
  const [profile, setMemberProfile] = useState(apiProfile);
  const visibleBadges = badges.filter(
    (badge) => badgeFilter === "all" || badge.earned,
  );

  return (
    <main className="profile-page">
      <section className="profile-hero">
        <div className="profile-identity">
          <div className="large-avatar">
            <span>{profile?.member.initials}</span>
            <i aria-label="Active member" />
          </div>
          <div>
            <p className="eyebrow">ATHLETE PROFILE · #{profile?.member.id}</p>
            <h1>{profile?.member.fullName}</h1>
            <p className="profile-subtitle">
              Building strength since{" "}
              {formatDate(profile?.personalDetails.memberSince, "MMMM YYYY")}
            </p>
          </div>
        </div>
        <div className="profile-level">
          <span>LEVEL</span>
          <strong>{profile?.member.level}</strong>
          <ProgressBar
            className="level-progress"
            label={`${profile?.member.xp.current} of ${profile?.member.xp.max} experience points`}
            max={profile?.member.xp.max}
            value={profile?.member.xp.current}
          />
          <small>
            {profile?.member.xp.current} / {profile?.member.xp.max} XP
          </small>
        </div>
      </section>

      <section className="profile-content">
        <div className="profile-main-grid">
          <div>
            <div className="profile-section-heading">
              <div>
                <p className="eyebrow">THE BASICS</p>
                <h2>Personal details</h2>
              </div>
              <button>Edit details</button>
            </div>

            <div className="details-table">
              <div>
                <span>FULL NAME</span>
                <strong>{profile?.personalDetails.fullName}</strong>
              </div>
              <div>
                <span>DATE OF BIRTH</span>
                <strong>
                  {formatDate(
                    profile?.personalDetails.dateOfBirth,
                    "MMM DD, YYYY",
                  )}
                  {/* March 18, 1994 */}
                </strong>
              </div>
              <div>
                <span>EMAIL</span>
                <strong>{profile?.personalDetails.email}</strong>
              </div>
              <div>
                <span>PHONE</span>
                <strong>{profile?.personalDetails.phone}</strong>
              </div>
              <div>
                <span>LOCATION</span>
                <strong>{profile?.personalDetails.location}</strong>
              </div>
              <div>
                <span>MEMBER SINCE</span>
                <strong>
                  {formatDate(
                    profile?.personalDetails.memberSince,
                    "MMMM DD, YYYY",
                  )}
                </strong>
              </div>
            </div>

            <div className="profile-section-heading training-heading">
              <div>
                <p className="eyebrow">TRAINING PROFILE</p>
                <h2>Fitness details</h2>
              </div>
            </div>

            <div className="body-stats">
              <div>
                <span>HEIGHT</span>
                <strong>
                  {profile?.fitness.height.value}
                  <small> CM</small>
                </strong>
              </div>
              <div>
                <span>BODY WEIGHT</span>
                <strong>
                  {profile?.fitness.bodyWeight.value}
                  <small> KG</small>
                </strong>
              </div>
              <div>
                <span>EXPERIENCE</span>
                <strong>
                  {yearsBetween(profile?.member.trainingSince)}
                  <small> YRS</small>
                </strong>
              </div>
              <div>
                <span>WEEKLY GOAL</span>
                <strong>
                  {profile?.fitness.weeklyGoal.value}
                  <small> DAYS</small>
                </strong>
              </div>
            </div>

            <div className="fitness-notes">
              <div>
                <span>PRIMARY GOAL</span>
                <strong>{profile?.fitness.primaryGoal}</strong>
              </div>
              <div>
                <span>TRAINING PREFERENCE</span>
                <strong>{profile?.fitness.trainingPreference}</strong>
              </div>
              <div>
                <span>TRAINER NOTES</span>
                <strong>{profile?.fitness.trainerNotes}</strong>
              </div>
            </div>
          </div>

          <aside className="profile-aside">
            <article className="current-program">
              <div className="card-kicker">
                <span>CURRENT PROGRAM</span>
                <span>
                  WEEK {profile?.currentProgram.currentWeek} /{" "}
                  {profile?.currentProgram.totalWeeks}
                </span>
              </div>
              <h3>{profile?.currentProgram.name}</h3>
              <p>
                {profile?.currentProgram.sessionsPerWeek} sessions per week ·{" "}
                {profile?.currentProgram.level}
              </p>
              <ProgressBar
                className="program-progress"
                label={`Week ${weeksSince(profile?.currentProgram.startDate)} of ${weeksBetween(profile?.currentProgram.startDate, profile?.currentProgram.endDate)}`}
                max={weeksBetween(
                  profile?.currentProgram.startDate,
                  profile?.currentProgram.endDate,
                )}
                value={weeksSince(profile?.currentProgram.startDate)}
              />
              <dl>
                <div>
                  <dt>Started</dt>
                  <dd>
                    {formatDate(profile?.currentProgram.startDate, "MMM DD")}
                  </dd>
                </div>
                <div>
                  <dt>Finishes</dt>
                  <dd>
                    {formatDate(profile?.currentProgram.endDate, "MMM DD")}
                  </dd>
                </div>
              </dl>
            </article>

            <article className="trainer-profile">
              <p className="eyebrow">YOUR TRAINER</p>
              <div>
                <span className="trainer-avatar">
                  {profile?.trainer.initials}
                </span>
                <div>
                  <h3>{profile?.trainer.name}</h3>
                  <p>{profile?.trainer.specialty}</p>
                </div>
              </div>
              <button>
                Send a message <Icon name="arrow" size={17} />
              </button>
            </article>

            <article className="readiness-card">
              <div className="card-kicker">
                <span>PROFILE COMPLETION</span>
                <span>{profile?.profileCompletion.percent}</span>
              </div>
              <div className="readiness-line">
                <i />
              </div>
              <p>{profile?.profileCompletion.nextStep}</p>
            </article>
          </aside>
        </div>

        <section className="badge-section">
          <div className="badge-section-header">
            <div>
              <p className="eyebrow">ACHIEVEMENT CASE</p>
              <h2>Your badges</h2>
              <p>
                Earn badges by showing up, staying consistent, and beating your
                best.
              </p>
            </div>
            <div className="badge-controls">
              <button
                className={badgeFilter === "all" ? "active" : ""}
                onClick={() => setBadgeFilter("all")}
              >
                All · 8
              </button>
              <button
                className={badgeFilter === "earned" ? "active" : ""}
                onClick={() => setBadgeFilter("earned")}
              >
                Earned · 5
              </button>
            </div>
          </div>

          <div className="badge-grid">
            {visibleBadges.map((badge) => (
              <article
                className={`badge-card ${badge.earned ? "" : "locked"}`}
                key={badge.name}
              >
                <div className={`badge-emblem ${badge.color}`}>
                  <div>
                    <Icon name={badge.icon} size={29} />
                  </div>
                </div>
                <span className="badge-status">
                  {badge.earned ? "EARNED" : "LOCKED"}
                </span>
                <h3>{badge.name}</h3>
                <p>{badge.detail}</p>
                <small>{badge.date}</small>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
