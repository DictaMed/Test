export const View = {
  HOME: 'HOME',
  NORMAL_MODE: 'NORMAL_MODE',
  TEST_MODE: 'TEST_MODE',
  HOW_IT_WORKS: 'HOW_IT_WORKS',
  FAQ: 'FAQ',
  CONTACT: 'CONTACT',
};

export const RecordingStatus = {
  IDLE: 'IDLE',
  RECORDING: 'RECORDING',
  PAUSED: 'PAUSED',
  STOPPED: 'STOPPED',
};

export const SectionId = {
  DEMOGRAPHICS: 'DEMOGRAPHICS',
  HISTORY: 'HISTORY',
  EXAMINATION: 'EXAMINATION',
  COMPLEMENTARY: 'COMPLEMENTARY',
};

export const SECTION_DETAILS = {
  [SectionId.DEMOGRAPHICS]: { 
    title: 'Partie 1',
    testModeDetails: {
      title: '🩺 Données Cliniques',
      parameters: ['Âge', 'sexe', 'BMI', 'tabac']
    }
  },
  [SectionId.HISTORY]: { 
    title: 'Partie 2',
    testModeDetails: {
      title: 'Antécédents',
      parameters: ['HTA', 'DT2', 'dyslipidémie', 'AVC']
    }
  },
  [SectionId.EXAMINATION]: { 
    title: 'Partie 3' 
  },
  [SectionId.COMPLEMENTARY]: { 
    title: 'Partie 4',
    testModeDetails: {
      title: 'Biologie',
      parameters: ['Hémoglobine', 'globules blancs', 'plaquettes', 'urée', 'créatinine', 'ionogramme (potassium, sodium, chlore)']
    }
  },
};
