export const COMPANY_INFO = {
  name: 'Zimmermann Dienstleistungen',
  phone: '+49 123 456 7890',
  email: 'info@zimmermann-dienste.de',
  address: {
    street: 'Baustraße 123',
    city: '12345 Musterstadt',
    country: 'Deutschland'
  },
  openingHours: {
    weekdays: '8:00 - 17:00',
    saturday: '9:00 - 14:00',
    sunday: 'Geschlossen'
  },
  social: {
    facebook: '#',
    instagram: '#',
  }
};

export const SERVICES = [
  {
    id: 'abbruch',
    title: 'Abbrucharbeiten',
    description: 'Professioneller und sicherer Abbruch von Gebäuden und Strukturen aller Art, mit fachgerechter Entsorgung.',
    fullDescription: `
      Unsere Abbrucharbeiten umfassen den sicheren und fachgerechten Abbruch von Gebäuden jeder Größe. 
      Von einzelnen Wänden bis hin zu kompletten Industriegebäuden - wir sorgen für eine saubere und 
      effiziente Durchführung aller Abbrucharbeiten. Dabei legen wir großen Wert auf Sicherheit und 
      umweltgerechte Entsorgung.
    `,
    features: [
      'Komplettabbruch von Gebäuden',
      'Teilabbruch und Entkernung',
      'Industrieabbruch',
      'Fachgerechte Schadstoffsanierung',
      'Umweltgerechte Entsorgung',
      'Moderne Maschinen und Ausrüstung'
    ]
  },
  {
    id: 'aushub',
    title: 'Aushubarbeiten',
    description: 'Präzise Aushubarbeiten für Fundamente, Keller, Pools und andere Bauprojekte mit modernen Maschinen.',
    fullDescription: `
      Mit modernster Technik und erfahrenen Fachkräften führen wir Aushubarbeiten für verschiedenste 
      Projekte durch. Ob Baugruben für Häuser, Ausschachtungen für Pools oder großflächige 
      Geländemodellierungen - wir sorgen für präzise Ergebnisse bei allen Erdarbeiten.
    `,
    features: [
      'Baugruben für Wohn- und Gewerbebauten',
      'Keller- und Fundamentaushub',
      'Poolgrabungen',
      'Kanalbau und Verlegegräben',
      'Großflächige Geländemodellierung',
      'Bodenaustausch und -verbesserung'
    ]
  },
  {
    id: 'transport',
    title: 'Transportdienste',
    description: 'Zuverlässiger Transport von Baumaterialien, Aushub und Abbruchmaterial mit eigener Fahrzeugflotte.',
    fullDescription: `
      Mit unserer eigenen Fahrzeugflotte bieten wir zuverlässige Transportlösungen für verschiedenste Materialien. 
      Vom Bodenaushub über Bauschutt bis hin zu Baumaterialien - wir sorgen für einen pünktlichen und 
      effizienten Transport zu und von Ihrer Baustelle.
    `,
    features: [
      'Transport von Baumaterialien',
      'Abfuhr von Bodenaushub',
      'Entsorgung von Bauschutt',
      'Container-Service',
      'Schnelle und zuverlässige Lieferung',
      'Professionelle Logistik'
    ]
  },
  {
    id: 'gartenbau',
    title: 'Gartenbau',
    description: 'Gestaltung und Pflege von Gärten, Grünanlagen und Außenbereichen, von der Planung bis zur Umsetzung.',
    fullDescription: `
      Unser Gartenbauservice umfasst die professionelle Gestaltung und Pflege von Gärten und Grünanlagen. 
      Von der ersten Planung bis zur vollständigen Umsetzung - wir erschaffen grüne Oasen für private und 
      gewerbliche Kunden.
    `,
    features: [
      'Gartenplanung und -gestaltung',
      'Pflanzarbeiten und Rasenneuanlage',
      'Bewässerungssysteme',
      'Teich- und Wasserspielanlagen',
      'Pflege und Instandhaltung',
      'Baumfällarbeiten und Gehölzschnitt'
    ]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Gebäudeabbruch Altstadt',
    category: 'abbruch',
    description: 'Kompletter Abbruch eines historischen Gebäudes in der Altstadt mit besonderem Fokus auf Sicherheit und Umweltschutz.',
    client: 'Stadt Musterstadt',
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 2,
    title: 'Baugrube für Mehrfamilienhaus',
    category: 'aushub',
    description: 'Aushub einer großen Baugrube für ein Mehrfamilienhaus mit sechs Wohneinheiten und Tiefgarage.',
    client: 'Müller Immobilien GmbH',
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/6474049/pexels-photo-6474049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 3,
    title: 'Parkgestaltung Stadt Muster',
    category: 'gartenbau',
    description: 'Neugestaltung des Stadtparks mit barrierefreien Wegen, Spielplatz und umfangreichen Pflanzarbeiten.',
    client: 'Stadt Musterstadt',
    year: 2022,
    imageUrl: 'https://images.pexels.com/photos/589/garden-green-trees-park.jpg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 4,
    title: 'Material Transport Großbaustelle',
    category: 'transport',
    description: 'Logistische Koordination und Transport von Baumaterialien für ein großes Gewerbebauprojekt.',
    client: 'Schmidt Bau AG',
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 5,
    title: 'Industriegebäude Rückbau',
    category: 'abbruch',
    description: 'Kompletter Rückbau eines ehemaligen Industriegebäudes mit fachgerechter Schadstoffsanierung.',
    client: 'Industrie Park GmbH',
    year: 2022,
    imageUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 6,
    title: 'Privatgarten Neugestaltung',
    category: 'gartenbau',
    description: 'Komplette Neugestaltung eines 800m² großen Privatgartens mit Terrasse, Teich und umfangreichen Pflanzarbeiten.',
    client: 'Familie Becker',
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Michael Schmidt',
    position: 'Privatkunde',
    text: 'Das Team von Zimmermann Dienstleistungen hat unseren Garten komplett umgestaltet. Die Arbeit wurde schnell, sauber und sehr professionell ausgeführt. Wir sind mehr als zufrieden mit dem Ergebnis!',
    rating: 5
  },
  {
    id: 2,
    name: 'Laura Weber',
    position: 'Architektin',
    text: 'Als Architektin arbeite ich regelmäßig mit Zimmermann Dienstleistungen zusammen. Die Zuverlässigkeit und Qualität der Arbeit ist stets hervorragend. Ein Partner, auf den man sich verlassen kann.',
    rating: 5
  },
  {
    id: 3,
    name: 'Thomas Becker',
    position: 'Bauunternehmer',
    text: 'Für Aushub- und Transportarbeiten ist Zimmermann unser bevorzugter Partner. Termintreue, faire Preise und einwandfreie Ausführung zeichnen das Unternehmen aus.',
    rating: 4
  },
  {
    id: 4,
    name: 'Sabine Müller',
    position: 'Immobilienentwicklerin',
    text: 'Wir haben Zimmermann Dienstleistungen für mehrere Abbrucharbeiten engagiert und sind immer wieder beeindruckt von der Professionalität und Effizienz des Teams.',
    rating: 5
  }
];