import type { User } from "../../models/member.model.ts";

export const profiles: User[] = [
  {
    member: {
      id: "00428",
      initials: "AM",
      fullName: "Alex Morgan",
      isActive: true,
      memberSince: "2025-01-08T00:00:00.000Z",
      trainingSince: "2015-01-08T00:00:00.000Z",
      level: 8,
      xp: { current: 1040, max: 2200 },
    },
    personalDetails: {
      fullName: "Alex Morgan",
      dateOfBirth: "1994-03-18T00:00:00.000Z",
      email: "alex.morgan@example.com",
      phone: "+1 202 555 0147",
      location: "Portland, OR",
      memberSince: "2025-01-08T00:00:00.000Z",
    },
    fitness: {
      height: { value: 172, unit: "CM" },
      bodyWeight: { value: 68.5, unit: "KG" },
      experience: { value: 2, unit: "YRS" },
      weeklyGoal: { value: 3, unit: "DAYS" },
      primaryGoal: "Build strength & improve mobility",
      trainingPreference: "Strength training · Free weights",
      trainerNotes:
        "Prioritize hip mobility before lower-body sessions. Left knee cleared for full training.",
    },
    currentProgram: {
      name: "Climbing Strength",
      sessionsPerWeek: 3,
      level: "Intermediate",
      currentWeek: 6,
      totalWeeks: 12,
      startDate: "2026-04-07T00:00:00.000Z",
      endDate: "2026-12-29T00:00:00.000Z",
    },
    trainer: {
      name: "Jordan Davis",
      initials: "JD",
      specialty: "Strength & conditioning",
    },
    profileCompletion: {
      percent: 92,
      nextStep: "Add an emergency contact to complete your profile.",
    },
    badgeSummary: {
      total: 8,
      earned: 5,
    },
  },
  {
    member: {
      id: "00429",
      initials: "RG",
      fullName: "Ronaldinho Gaúcho",
      isActive: true,
      memberSince: "2025-06-14T00:00:00.000Z",
      trainingSince: "1988-02-01T00:00:00.000Z",
      level: 14,
      xp: { current: 3120, max: 3600 },
    },
    personalDetails: {
      fullName: "Ronaldo de Assis Moreira",
      dateOfBirth: "1980-03-21T00:00:00.000Z",
      email: "ronaldinho@example.com",
      phone: "+55 51 5550 0110",
      location: "Porto Alegre, Brazil",
      memberSince: "2025-06-14T00:00:00.000Z",
    },
    fitness: {
      height: { value: 181, unit: "CM" },
      bodyWeight: { value: 82.0, unit: "KG" },
      experience: { value: 38, unit: "YRS" },
      weeklyGoal: { value: 4, unit: "DAYS" },
      primaryGoal: "Maintain agility & first-touch sharpness",
      trainingPreference: "Plyometrics · Ball work · Futsal",
      trainerNotes:
        "Keep the elástico drills but cap sprint volume. Monitor right hamstring after back-to-back sessions.",
    },
    currentProgram: {
      name: "Joga Bonito Agility",
      sessionsPerWeek: 4,
      level: "Advanced",
      currentWeek: 10,
      totalWeeks: 12,
      startDate: "2026-09-07T00:00:00.000Z",
      endDate: "2026-11-30T00:00:00.000Z",
    },
    trainer: {
      name: "Marta Oliveira",
      initials: "MO",
      specialty: "Speed & agility",
    },
    profileCompletion: {
      percent: 85,
      nextStep: "Upload a profile photo to complete your profile.",
    },
    badgeSummary: {
      total: 8,
      earned: 7,
    },
  },
];
