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
      },
      {
        id: 'synonyms-9',
        label: 'Synonyms 9',
        subtitle: '632 one-liner based MCQs',
        dataVar: 'chapter_synonyms_9'
      },
      {
        id: 'synonyms-10',
        label: 'Synonyms 10',
        subtitle: '429 one-liner based MCQs',
        dataVar: 'chapter_synonyms_10'
      },
      {
        id: 'synonyms-11',
        label: 'Synonyms 11',
        subtitle: '1252 one-liner based MCQs',
        dataVar: 'chapter_synonyms_11'
      }
    ]
  },
  {
    id: 'sc-rules',
    label: 'SC Rules',
    icon: '📜',
    color: '#9a3412',
    colorLight: '#fdeee4',
    description: 'Supreme Court Rules, 2013 — orders, officers, advocates and practice.',
    chapters: [
      {
        id: 'chapter-1',
        label: 'Chapter 1',
        subtitle: '169 one-liner based MCQs',
        dataVar: 'chapter_sc_rules_1'
      },
      {
        id: 'chapter-2',
        label: 'Chapter 2',
        subtitle: '196 one-liner based MCQs',
        dataVar: 'chapter_sc_rules_2'
      },
      {
        id: 'chapter-3',
        label: 'Chapter 3',
        subtitle: '156 one-liner based MCQs',
        dataVar: 'chapter_sc_rules_3'
      },
      {
        id: 'chapter-4',
        label: 'Chapter 4',
        subtitle: '122 one-liner based MCQs',
        dataVar: 'chapter_sc_rules_4'
      },
      {
        id: 'chapter-5',
        label: 'Chapter 5',
        subtitle: '113 one-liner based MCQs',
        dataVar: 'chapter_sc_rules_5'
      },
      {
        id: 'chapter-6',
        label: 'Chapter 6',
        subtitle: '126 one-liner based MCQs',
        dataVar: 'chapter_sc_rules_6'
      },
      {
        id: 'chapter-7',
        label: 'Chapter 7',
        subtitle: '91 one-liner based MCQs',
        dataVar: 'chapter_sc_rules_7'
      },
      {
        id: 'chapter-8',
        label: 'Chapter 8',
        subtitle: '115 one-liner based MCQs',
        dataVar: 'chapter_sc_rules_8'
      },
      {
        id: 'chapter-9',
        label: 'Chapter 9',
        subtitle: '376 one-liner based MCQs',
        dataVar: 'chapter_sc_rules_9'
      }
    ]
  },
  {
    id: 'sci-jca',
    label: 'SCI JCA',
    icon: '⚖️',
    color: '#3730a3',
    colorLight: '#e0e7ff',
    description: 'Law practice for the Supreme Court Junior Court Assistant exam.',
    chapters: [
      {
        id: 'fundamental-rights',
        label: 'Fundamental Rights and Writs (Article 32)',
        subtitle: '4 MCQs',
        dataVar: 'chapter_sci_jca_fundamental_rights'
      },
      {
        id: 'constitutional-supreme-court',
        label: 'Supreme Court and Its Jurisdiction (Articles 124–147)',
        subtitle: '62 MCQs',
        dataVar: 'chapter_sci_jca_constitutional_supreme_court'
      },
      {
        id: 'constitutional-high-courts',
        label: 'High Courts and Subordinate Courts (Articles 214–237)',
        subtitle: '44 MCQs',
        dataVar: 'chapter_sci_jca_constitutional_high_courts'
      },
      {
        id: 'court-administration',
        label: 'Court Administration, Advocates and Filing (Orders I–VIII)',
        subtitle: '126 MCQs',
        dataVar: 'chapter_sci_jca_court_administration'
      },
      {
        id: 'court-practice',
        label: 'Court Practice, Petitions and Hearings (Orders IX–XVIII)',
        subtitle: '99 MCQs',
        dataVar: 'chapter_sci_jca_court_practice'
      },
      {
        id: 'civil-criminal-appeals',
        label: 'Civil and Criminal Appeals (Orders XIX–XX)',
        subtitle: '65 MCQs',
        dataVar: 'chapter_sci_jca_civil_criminal_appeals'
      },
      {
        id: 'civil-slp',
        label: 'Civil Special Leave Petitions (Order XXI)',
        subtitle: '60 MCQs',
        dataVar: 'chapter_sci_jca_civil_slp'
      },
      {
        id: 'criminal-slp-special-appeals',
        label: 'Criminal SLPs and Statutory Appeals (Orders XXII–XXIV)',
        subtitle: '78 MCQs',
        dataVar: 'chapter_sci_jca_criminal_slp_special_appeals'
      },
      {
        id: 'original-suits',
        label: 'Original Suits and Trial Procedure (Orders XXV–XXXVII)',
        subtitle: '86 MCQs',
        dataVar: 'chapter_sci_jca_original_suits'
      },
      {
        id: 'writ-petitions',
        label: 'Enforcement of Fundamental Rights (Order XXXVIII)',
        subtitle: '30 MCQs',
        dataVar: 'chapter_sci_jca_writ_petitions'
      },
      {
        id: 'transfers-references-elections',
        label: 'Transfers, References and Election Petitions (Orders XXXIX–XLVI)',
        subtitle: '95 MCQs',
        dataVar: 'chapter_sci_jca_transfers_references_elections'
      },
      {
        id: 'review-costs-service',
        label: 'Review, Curative Petitions, Costs and Procedure (Orders XLVII–LVII)',
        subtitle: '89 MCQs',
        dataVar: 'chapter_sci_jca_review_costs_service'
      },
      {
        id: 'staff-appointments',
        label: 'Staff Recruitment and Conditions of Service (Rules 1–10)',
        subtitle: '18 MCQs',
        dataVar: 'chapter_sci_jca_staff_appointments'
      },
      {
        id: 'staff-discipline',
        label: 'Penalties, Inquiries, Suspension and Appeals (Rules 11–23)',
        subtitle: '52 MCQs',
        dataVar: 'chapter_sci_jca_staff_discipline'
      },
      {
        id: 'staff-conduct',
        label: 'Staff Conduct, Politics, Gifts and Outside Work (Rules 24–33)',
        subtitle: '39 MCQs',
        dataVar: 'chapter_sci_jca_staff_conduct'
      },
      {
        id: 'staff-property-obligations',
        label: 'Property, Financial Dealings and Service Obligations (Rules 34–49)',
        subtitle: '59 MCQs',
        dataVar: 'chapter_sci_jca_staff_property_obligations'
      }
    ]
  }
];
