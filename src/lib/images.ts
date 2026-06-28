// ponytail: image manifest — dental demo. All placeholder text until real dental photos arrive.
// Drop actual files in /public and update the file paths below.

export interface SiteImage {
  file: string;
  alt: string;
  credit: string;
}

// ponytail: temporary placeholder until real dental images are provided.
// All images point to generic placeholder.webp — user will replace.
const PLACEHOLDER = 'placeholder.webp'

export const images = {
  hero: {
    clinic:     { file: PLACEHOLDER, alt: 'Microsmiles Dental Clinic reception area — modern, clean, welcoming', credit: 'Microsmiles Dental' },
    dentist:    { file: PLACEHOLDER, alt: 'A dentist examining a patient in a modern dental chair', credit: 'Microsmiles Dental' },
    smile:      { file: PLACEHOLDER, alt: 'A close-up of a healthy, beautiful smile after treatment', credit: 'Microsmiles Dental' },
    family:     { file: PLACEHOLDER, alt: 'A happy child at the dentist, comfortable and smiling', credit: 'Microsmiles Dental' },
    team:           { file: PLACEHOLDER, alt: 'The Microsmiles dental team in scrubs, ready to help', credit: 'Microsmiles Dental' },
    goldenPortrait: { file: PLACEHOLDER, alt: 'Microsmiles dental clinic — modern and welcoming', credit: 'Microsmiles Dental' },
  },

  // Service imagery — one per service category
  // ponytail: replace file paths when real images arrive
  rootCanal:              { file: PLACEHOLDER, alt: 'Root canal treatment — microscopic view of a treated tooth', credit: 'Microsmiles Dental' },
  scaling:                { file: PLACEHOLDER, alt: 'Professional tooth scaling and cleaning procedure', credit: 'Microsmiles Dental' },
  implant:                { file: PLACEHOLDER, alt: 'Dental implant procedure with titanium post', credit: 'Microsmiles Dental' },
  crown:                  { file: PLACEHOLDER, alt: 'A custom ceramic dental crown', credit: 'Microsmiles Dental' },
  whitening:              { file: PLACEHOLDER, alt: 'In-office teeth whitening procedure', credit: 'Microsmiles Dental' },
  braces:                 { file: PLACEHOLDER, alt: 'Orthodontic braces on a patient', credit: 'Microsmiles Dental' },
  invisalign:             { file: PLACEHOLDER, alt: 'Invisalign clear aligners', credit: 'Microsmiles Dental' },
  veneer:                 { file: PLACEHOLDER, alt: 'Dental veneers — before and after smile transformation', credit: 'Microsmiles Dental' },
  kids:                   { file: PLACEHOLDER, alt: 'Child-friendly dental clinic room with colourful decor', credit: 'Microsmiles Dental' },
  surgery:                { file: PLACEHOLDER, alt: 'Laser gum surgery equipment and setup', credit: 'Microsmiles Dental' },
  smileDesign:            { file: PLACEHOLDER, alt: 'Digital smile design software showing a smile preview', credit: 'Microsmiles Dental' },

  // Decorative
  kitten:                 { file: PLACEHOLDER, alt: 'Microsmiles dental clinic — general view', credit: 'Microsmiles Dental' },
  clinicInterior:         { file: PLACEHOLDER, alt: 'Microsmiles clinic interior — modern dental chairs', credit: 'Microsmiles Dental' },
  consultation:           { file: PLACEHOLDER, alt: 'Dental consultation with a doctor explaining treatment', credit: 'Microsmiles Dental' },
  tour:                   { file: PLACEHOLDER, alt: 'Virtual clinic tour — treatment room', credit: 'Microsmiles Dental' },
} as const;
