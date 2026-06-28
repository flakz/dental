// ponytail: image manifest. Single source of truth for which photo goes where.
// Drop more files in src/../public/images, add a line here, reference via the key.

export interface SiteImage {
  file: string;
  alt: string;
  credit: string;
}

export const images = {
  // Hero candidates, full-bleed, premium
  hero: {
    goldenRetriever: { file: 'J-street-UtrE5DcgEyg.webp', alt: 'A golden retriever outdoors, mouth open, tongue out', credit: 'Jamie Street / Unsplash' },
    beagleSnow:     { file: 'A-blake-Y-b79Mg0O-4.webp',     alt: 'A beagle puppy in the snow looking at the camera', credit: 'Anna Blake / Unsplash' },
    germanShepherd: { file: 'G-bobadilla-KY2lF_aUcxc.webp',  alt: 'A german shepherd puppy lying on grass', credit: 'Grace Anne Bobadilla / Unsplash' },
    goldenPortrait: { file: 'MF-gFcfg3sUCtU.webp',          alt: 'A golden retriever bathed in sunlight, close up', credit: 'Mauro Fossati / Unsplash' },
    dogAndCat:      { file: 'pet-collage.webp',             alt: 'A dog and a siamese cat together, both looking at the camera', credit: 'Freepik' },
  },

  // Service imagery
  grooming:   { file: 'GJ-PB5TbRmioms.webp',     alt: 'A yorkshire terrier wrapped in a towel after grooming', credit: 'Grafi Jeremiah / Unsplash' },
  boarding:   { file: 'E-delputte-fRO_Qkw3BC4.webp', alt: 'An orange kitten resting on a soft towel', credit: 'Eduard Delputte / Unsplash' },
  sitting:    { file: 'M-bvp--Dq4NnsTbvw.webp',     alt: 'A beagle puppy sitting on a couch', credit: 'Max / Unsplash' },
  training:   { file: 'HL-bDBTq8gOjoI.webp',        alt: 'A border collie puppy looking up attentively', credit: 'Helena Lopes / Unsplash' },
  walking:    { file: 'AB-oSCZmJYc2N0.webp',        alt: 'A young labrador-type dog on a sandy beach', credit: 'Alfonso Betancourt / Unsplash' },
  freshFood:  { file: 'M-d-c-du8kFo_I3nM.webp',     alt: 'A golden retriever puppy sitting on a soft surface', credit: 'Minh D. C. / Unsplash' },
  taxi:       { file: 'Swello-4dx_nESysxM.webp',    alt: 'A small dog sitting on a light sofa', credit: 'Swello / Unsplash' },
  funeral:    { file: 'F-haff-Igm-HNiq_-E.webp',     alt: 'An orange cat lying on bare earth', credit: 'Fady Haff / Unsplash' },

  // Decorative
  kitten:     { file: 'puppy-one.jpeg',             alt: 'A cute puppy sitting on the floor', credit: 'PawSide' },
  team:       { file: 'puppy-two.jpeg',             alt: 'Another cute puppy looking at the camera', credit: 'PawSide' },
  puppyThree: { file: 'puppy-three.jpeg',           alt: 'A puppy enjoying outdoor time', credit: 'PawSide' },
} as const;
