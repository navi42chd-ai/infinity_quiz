const SUBJECTS = [
  {
    id: 'ancient-history',
    label: 'Ancient History',
    icon: '🏺',
    color: '#f97316',
    colorLight: '#fff1e8',
    description: 'Build exam-ready command over India’s earliest past.',
    chapters: [
      {
        id: 'stone-age',
        label: 'Stone Age',
        subtitle: '242 one-liner based MCQs',
        dataVar: 'chapter_stone_age'
      },
      {
        id: 'indus-valley',
        label: 'Indus Valley Civilisation',
        subtitle: '331 one-liner based MCQs',
        dataVar: 'chapter_indus_valley'
      },
      {
        id: 'vedic-age',
        label: 'Vedic Age',
        subtitle: '160 one-liner based MCQs',
        dataVar: 'chapter_vedic_age'
      },
      {
        id: 'jainism-buddhism',
        label: 'Jainism and Buddhism',
        subtitle: '147 one-liner based MCQs',
        dataVar: 'chapter_jainism_buddhism'
      },
      {
        id: 'mahajanapadas',
        label: 'Mahajanapadas',
        subtitle: '68 one-liner based MCQs',
        dataVar: 'chapter_mahajanapadas'
      },
      {
        id: 'maurya-dynasty',
        label: 'Maurya Dynasty',
        subtitle: '126 one-liner based MCQs',
        dataVar: 'chapter_maurya_dynasty'
      },
      {
        id: 'post-maurya-period',
        label: 'Post-Maurya Period',
        subtitle: '88 one-liner based MCQs',
        dataVar: 'chapter_post_maurya_period'
      },
      {
        id: 'gupta-period',
        label: 'Gupta Period',
        subtitle: '85 one-liner based MCQs',
        dataVar: 'chapter_gupta_period'
      },
      {
        id: 'pushyabhuti-dynasty',
        label: 'Pushyabhuti Dynasty and Contemporary Kingdoms',
        subtitle: '89 one-liner based MCQs',
        dataVar: 'chapter_pushyabhuti_dynasty'
      },
      {
        id: 'sangam-age',
        label: 'Sangam Age',
        subtitle: '63 one-liner based MCQs',
        dataVar: 'chapter_sangam_age'
      },
      {
        id: 'tripartite-struggle',
        label: 'Tripartite Struggle',
        subtitle: '255 one-liner based MCQs',
        dataVar: 'chapter_tripartite_struggle'
      }
    ]
  },
  {
    id: 'medieval-history',
    label: 'Medieval History',
    icon: '🏰',
    color: '#6b3fa0',
    colorLight: '#f1e7fb',
    description: 'From Islamic invasions to the fall of the Delhi Sultanate.',
    chapters: [
      {
        id: 'delhi-sultanate',
        label: 'Delhi Sultanate',
        subtitle: '304 one-liner based MCQs',
        dataVar: 'chapter_delhi_sultanate'
      }
    ]
  },
  {
    id: 'modern-history',
    label: 'Modern History',
    icon: '⚓',
    color: '#c9973f',
    colorLight: '#faf1de',
    description: 'The arrival of European powers and their rise to dominance in India.',
    chapters: [
      {
        id: 'advent-of-europeans',
        label: 'Advent of Europeans',
        subtitle: '224 one-liner based MCQs',
        dataVar: 'chapter_advent_of_europeans'
      },
      {
        id: 'socio-religious-reforms',
        label: 'Socio Religious Reforms',
        subtitle: '191 one-liner based MCQs',
        dataVar: 'chapter_socio_religious_reforms'
      }
    ]
  },
  {
    id: 'supreme-court',
    label: 'Supreme Court',
    icon: '⚖️',
    color: '#1e3a8a',
    colorLight: '#e6ecfa',
    description: 'Constitutional provisions, appointments, jurisdiction and powers of the apex court.',
    chapters: [
      {
        id: 'provisions',
        label: 'Provisions',
        subtitle: '113 one-liner based MCQs',
        dataVar: 'chapter_sc_provisions'
      },
      {
        id: 'provisions-2',
        label: 'Provisions 2',
        subtitle: '151 one-liner based MCQs',
        dataVar: 'chapter_sc_provisions_2'
      }
    ]
  },
  {
    id: 'english',
    label: 'English',
    icon: '📖',
    color: '#0f766e',
    colorLight: '#e0f5f2',
    description: 'Idioms, phrases and vocabulary most asked in SSC exams.',
    chapters: [
      {
        id: 'idioms-1',
        label: 'Idioms 1',
        subtitle: '185 one-liner based MCQs',
        dataVar: 'chapter_idioms_1'
      },
      {
        id: 'idioms-2',
        label: 'Idioms 2',
        subtitle: '145 one-liner based MCQs',
        dataVar: 'chapter_idioms_2'
      },
      {
        id: 'idioms-3',
        label: 'Idioms 3',
        subtitle: '276 one-liner based MCQs',
        dataVar: 'chapter_idioms_3'
      },
      {
        id: 'idioms-4',
        label: 'Idioms 4',
        subtitle: '280 one-liner based MCQs',
        dataVar: 'chapter_idioms_4'
      },
      {
        id: 'idioms-5',
        label: 'Idioms 5',
        subtitle: '280 one-liner based MCQs',
        dataVar: 'chapter_idioms_5'
      },
      {
        id: 'idioms-6',
        label: 'Idioms 6',
        subtitle: '420 one-liner based MCQs',
        dataVar: 'chapter_idioms_6'
      },
      {
        id: 'synonyms-1',
        label: 'Synonyms 1',
        subtitle: '463 one-liner based MCQs',
        dataVar: 'chapter_synonyms_1'
      },
      {
        id: 'synonyms-2',
        label: 'Synonyms 2',
        subtitle: '187 one-liner based MCQs',
        dataVar: 'chapter_synonyms_2'
      },
      {
        id: 'synonyms-3',
        label: 'Synonyms 3',
        subtitle: '246 one-liner based MCQs',
        dataVar: 'chapter_synonyms_3'
      },
      {
        id: 'synonyms-4',
        label: 'Synonyms 4',
        subtitle: '265 one-liner based MCQs',
        dataVar: 'chapter_synonyms_4'
      },
      {
        id: 'synonyms-5',
        label: 'Synonyms 5',
        subtitle: '259 one-liner based MCQs',
        dataVar: 'chapter_synonyms_5'
      },
      {
        id: 'synonyms-6',
        label: 'Synonyms 6',
        subtitle: '391 one-liner based MCQs',
        dataVar: 'chapter_synonyms_6'
      },
      {
        id: 'synonyms-7',
        label: 'Synonyms 7',
        subtitle: '266 one-liner based MCQs',
        dataVar: 'chapter_synonyms_7'
      },
      {
        id: 'synonyms-8',
        label: 'Synonyms 8',
        subtitle: '348 one-liner based MCQs',
        dataVar: 'chapter_synonyms_8'
      }
    ]
  }
];
