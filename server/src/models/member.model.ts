/** ISO 8601 date string, e.g. "2025-01-08T00:00:00.000Z" */
export type ISODateString = string;

export interface Measurement<U extends string> {
  value: number;
  unit: U;
}

export type HeightUnit = "CM" | "IN";
export type WeightUnit = "KG" | "LB";
export type ExperienceUnit = "YRS" | "MOS";
export type GoalUnit = "DAYS";

export interface Member {
  id: string;
  initials: string;
  fullName: string;
  isActive: boolean;
  memberSince: ISODateString;
  trainingSince: ISODateString;
  level: number;
  xp: {
    current: number;
    max: number;
  };
}

export interface PersonalDetails {
  fullName: string;
  dateOfBirth: ISODateString;
  email: string;
  phone: string;
  location: string;
  memberSince: ISODateString;
}

export interface Fitness {
  height: Measurement<HeightUnit>;
  bodyWeight: Measurement<WeightUnit>;
  experience: Measurement<ExperienceUnit>;
  weeklyGoal: Measurement<GoalUnit>;
  primaryGoal: string;
  trainingPreference: string;
  trainerNotes: string;
}

export interface CurrentProgram {
  name: string;
  sessionsPerWeek: number;
  level: string; // e.g. "Beginner" | "Intermediate" | "Advanced"
  currentWeek: number;
  totalWeeks: number;
  startDate: ISODateString;
  endDate: ISODateString;
}

export interface Trainer {
  name: string;
  initials: string;
  specialty: string;
}

export interface ProfileCompletion {
  percent: number;
  nextStep: string;
}

export interface BadgeSummary {
  total: number;
  earned: number;
}

export interface User {
  member: Member;
  personalDetails: PersonalDetails;
  fitness: Fitness;
  currentProgram: CurrentProgram;
  trainer: Trainer;
  profileCompletion: ProfileCompletion;
  badgeSummary: BadgeSummary;
}
