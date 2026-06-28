// ponytail: image manifest — dental demo. Single source of truth for which photo goes where.
// Drop more files in /public, add a line here, reference via the key.

export interface SiteImage {
  file: string;
  alt: string;
  credit: string;
}

// ponytail: temporary placeholder until real dental images are provided.
// Replace PLACEHOLDER paths when real images arrive.
const PLACEHOLDER = 'placeholder.webp'

export const images = {
  hero: {
    clinic:     { file: 'hero-dental.webp', alt: 'Modern dental clinic interior with dental chair and equipment', credit: 'Benyamin Bohlouli / Unsplash' },
    dentist:    { file: 'service-root-canal.webp', alt: 'A woman getting her teeth checked by a dentist', credit: 'SoyBreno / Unsplash' },
    smile:      { file: 'service-smile.webp', alt: 'A happy woman with a beautiful smile', credit: 'Lesly Juarez / Unsplash' },
    family:     { file: PLACEHOLDER, alt: 'A happy child at the dentist, comfortable and smiling', credit: 'Microsmiles Dental' },
    team:       { file: PLACEHOLDER, alt: 'The Microsmiles dental team in scrubs, ready to help', credit: 'Microsmiles Dental' },
    goldenPortrait: { file: 'hero-dental.webp', alt: 'Modern dental clinic interior with dental chair and equipment', credit: 'Benyamin Bohlouli / Unsplash' },
  },

  // Service imagery
  rootCanal:  { file: 'service-root-canal.webp', alt: 'A woman getting her teeth checked by a dentist', credit: 'SoyBreno / Unsplash' },
  scaling:    { file: PLACEHOLDER, alt: 'Professional tooth scaling and cleaning procedure', credit: 'Microsmiles Dental' },
  implant:    { file: 'service-implant.webp', alt: 'Dental chair and equipment in a modern clinic', credit: 'Atikah Akhtar / Unsplash' },
  crown:      { file: PLACEHOLDER, alt: 'A custom ceramic dental crown', credit: 'Microsmiles Dental' },
  whitening:  { file: PLACEHOLDER, alt: 'In-office teeth whitening procedure', credit: 'Microsmiles Dental' },
  braces:     { file: PLACEHOLDER, alt: 'Orthodontic braces on a patient', credit: 'Microsmiles Dental' },
  veneer:     { file: PLACEHOLDER, alt: 'Dental veneers before and after smile transformation', credit: 'Microsmiles Dental' },
  kids:       { file: 'service-kids.webp', alt: 'A child at the dentist for a checkup', credit: 'lafayett zapata montero / Unsplash' },
  surgery:    { file: PLACEHOLDER, alt: 'Laser gum surgery equipment and setup', credit: 'Microsmiles Dental' },
  smileDesign:{ file: PLACEHOLDER, alt: 'Digital smile design software showing a smile preview', credit: 'Microsmiles Dental' },

  // Decorative
  kitten:          { file: 'hero-dental.webp', alt: 'Modern dental clinic interior', credit: 'Benyamin Bohlouli / Unsplash' },
  clinicInterior:  { file: 'clinic-reception.webp', alt: 'Dental clinic reception area with modern design', credit: 'Harold Hisona / Unsplash' },
  consultation:    { file: 'service-root-canal.webp', alt: 'Dental consultation with a doctor', credit: 'SoyBreno / Unsplash' },
  tour:            { file: 'clinic-reception.webp', alt: 'Dental clinic reception area', credit: 'Harold Hisona / Unsplash' },

    // --- Slug-based service image aliases - 30 unique images ---
  'root-canal-therapy':              { file: 'service-root-canal.webp', alt: 'Root canal treatment under microscope', credit: 'SoyBreno / Unsplash' },
  'repeat-root-canal-therapy':       { file: 'service-microscope.webp', alt: 'Microscopic root canal retreatment', credit: 'Elena Mozhvilo / Unsplash' },
  'surgical-root-canal-therapy':     { file: 'service-xray-panoramic.webp', alt: 'Surgical root canal x-ray assessment', credit: 'Quang Tri NGUYEN / Unsplash' },
  'tooth-scaling-cleaning':          { file: 'service-scaling.webp', alt: 'Professional tooth scaling and cleaning', credit: 'Ozkan Guner / Unsplash' },
  'contact-free-stain-removal':      { file: 'service-stain-removal.webp', alt: 'Contact-free stain removal treatment', credit: 'Unsplash' },
  'wisdom-tooth-management':         { file: 'service-wisdom-tooth.webp', alt: 'Wisdom tooth evaluation and management', credit: 'Unsplash' },
  'bioceramic-fillings':             { file: 'service-bioceramic-fillings.webp', alt: 'Bioceramic dental filling materials', credit: 'Unsplash' },
  'caps-dental-crowns':              { file: 'service-crown-lab.webp', alt: 'Custom dental crown fabrication', credit: 'Elena Mozhvilo / Unsplash' },
  'dental-bridges':                  { file: 'service-bridge.webp', alt: 'Dental bridge for missing teeth replacement', credit: 'Elena Mozhvilo / Unsplash' },
  'dental-implants':                 { file: 'service-implant-surgery.webp', alt: 'Dental implant surgical placement', credit: 'Atikah Akhtar / Unsplash' },
  'full-mouth-rehabilitation':       { file: 'service-full-mouth-rehab.webp', alt: 'Full mouth dental rehabilitation', credit: 'Unsplash' },
  'teeth-whitening':                 { file: 'service-smile.webp', alt: 'Professional teeth whitening treatment', credit: 'Lesly Juarez / Unsplash' },
  'smile-designing':                 { file: 'service-smile-design.webp', alt: 'Digital smile design and makeover', credit: 'Lesly Juarez / Unsplash' },
  'broken-tooth-management':         { file: 'service-broken-tooth.webp', alt: 'Broken tooth emergency restoration', credit: 'Elena Mozhvilo / Unsplash' },
  'dental-veneers':                  { file: 'service-veneers.webp', alt: 'Custom dental veneers placement', credit: 'Lesly Juarez / Unsplash' },
  'gaps-crowding-correction':        { file: 'service-gap-crowding.webp', alt: 'Gaps and crowding orthodontic correction', credit: 'Unsplash' },
  'non-microscope-dentistry':        { file: 'hero-dental.webp', alt: 'Modern dental clinic environment', credit: 'Benyamin Bohlouli / Unsplash' },
  'tooth-extraction':                { file: 'service-tooth-extraction.webp', alt: 'Gentle tooth extraction procedure', credit: 'Unsplash' },
  'laser-gum-surgery':               { file: 'service-sedation.webp', alt: 'Laser gum surgery treatment', credit: 'Diana Polekhina / Unsplash' },
  'orthodontics-braces':             { file: 'service-braces-ceramic.webp', alt: 'Ceramic orthodontic braces treatment', credit: 'Diana Polekhina / Unsplash' },
  'invisalign':                      { file: 'service-retainer.webp', alt: 'Invisalign clear aligner system', credit: 'Diana Polekhina / Unsplash' },
  'sleep-dentistry':                 { file: 'service-sleep-dentistry.webp', alt: 'Sleep dentistry sedation options', credit: 'Unsplash' },
  'tooth-colored-fillings-kids':     { file: 'service-kids.webp', alt: 'Tooth colored filling for children', credit: 'lafayett zapata montero / Unsplash' },
  'zirconia-crowns-kids':            { file: 'service-zirconia-crowns-kids.webp', alt: 'Zirconia crown for children teeth', credit: 'Unsplash' },
  'childrens-root-canal':            { file: 'service-pediatric-exam.webp', alt: "Children's root canal pulp therapy", credit: 'Unsplash' },
  'preventive-dentistry-kids':       { file: 'service-preventive-kids.webp', alt: 'Preventive dentistry for children', credit: 'Unsplash' },
  'face-jaw-correction-kids':        { file: 'service-face-jaw-correction.webp', alt: 'Face and jaw correction for children', credit: 'Unsplash' },
  'orthodontics-kids':               { file: 'service-braces.webp', alt: 'Orthodontic braces for children', credit: 'Ozkan Guner / Unsplash' },
  'aligners-kids-invisalign-first':  { file: 'service-aligners-kids.webp', alt: 'Invisalign aligners for children', credit: 'Unsplash' },
  'sleep-dentistry-kids':            { file: 'service-sedation-kids.webp', alt: 'Sleep dentistry for anxious children', credit: 'Diana Polekhina / Unsplash' },
} as const;
