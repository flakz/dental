export interface TeamMember {
  name: string
  credentials: string
  role: string
  slug: string
}

export const team: TeamMember[] = [
  { name: "Dr. Praveen", credentials: "MDS (Edin, UK)", role: "Micro Endodontist (Clinical Director)", slug: "praveen" },
  { name: "Dr. Rajesh", credentials: "MDS, PhD", role: "Chief Pediatric Dentist (Managing Director)", slug: "rajesh" },
  { name: "Dr. Annie Sylvea V", credentials: "MDS", role: "Micro Endodontist", slug: "annie-sylvea" },
  { name: "Dr. C R", credentials: "MDS", role: "Orthodontist", slug: "cr" },
  { name: "Dr. Divya Subramanian", credentials: "MDS", role: "Prosthodontist", slug: "divya-subramanian" },
  { name: "Dr. S", credentials: "MDS", role: "Orthodontist", slug: "s" },
  { name: "Dr. Divya M", credentials: "MDS", role: "Kids Dentist", slug: "divya-m" },
  { name: "Dr. Aishwarya Raju", credentials: "MDS", role: "Clinical Head", slug: "aishwarya-raju" },
  { name: "Dr. Suvetha", credentials: "MDS", role: "Kids Dentist", slug: "suvetha" },
  { name: "Dr. Ida", credentials: "MDS", role: "Prosthodontist", slug: "ida" },
  { name: "Dr. Swetha", credentials: "MDS", role: "Orthodontist", slug: "swetha" },
]

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug)
}
