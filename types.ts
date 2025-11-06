export enum View {
  HOME = 'HOME',
  NORMAL_MODE = 'NORMAL_MODE',
  TEST_MODE = 'TEST_MODE',
  HOW_IT_WORKS = 'HOW_IT_WORKS',
  FAQ = 'FAQ',
  CONTACT = 'CONTACT',
}

export enum RecordingStatus {
  IDLE = 'IDLE',
  RECORDING = 'RECORDING',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
}

export enum SectionId {
  DEMOGRAPHICS = 'DEMOGRAPHICS',
  HISTORY = 'HISTORY',
  EXAMINATION = 'EXAMINATION',
  COMPLEMENTARY = 'COMPLEMENTARY',
}

export type SectionData = {
  id: SectionId;
  title: string;
  audioBlob: Blob | null;
  audioUrl: string | null;
  transcribedText: string | null;
  status: 'pending' | 'transcribing' | 'transcribed' | 'error';
};

export type AudioFormat = 'audio/wav' | 'audio/webm;codecs=opus' | 'audio/mp4';

export const SECTION_DETAILS: Record<SectionId, { title: string; testModeDetails?: { title: string; parameters: string[] } }> = {
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