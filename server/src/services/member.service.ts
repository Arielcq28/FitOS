import type { Fitness, Member, User } from "../models/member.model.ts";
import { profiles } from "./database/member.ts";

export function findMemberById(id: string): User | null {
  return profiles.find((profile) => profile.member.id === id) || null;
}
