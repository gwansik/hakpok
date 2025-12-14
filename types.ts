export type TargetGroup = 'student' | 'parent' | 'teacher';
export type PositionType = 'victim' | 'perpetrator' | 'witness';
export type ViolenceType = 'physical' | 'verbal' | 'cyber' | 'bullying' | 'sexual' | 'extortion';
export type ProcessStatus = 'pre-report' | 'investigation' | 'post-decision';

export interface UserSelection {
  target: TargetGroup | null;
  position: PositionType | null;
  violenceType: ViolenceType | null;
  status: ProcessStatus | null;
}

export interface GuideContent {
  title: string;
  summary: string;
  actions: string[];
  legalBasis: string;
  contacts: { name: string; phone: string; desc?: string }[];
}

export interface StepOption {
  id: string;
  label: string;
  icon?: string;
  description?: string;
}

export interface WizardStepData {
  id: number;
  title: string;
  subtitle: string;
  key: keyof UserSelection;
  options: StepOption[];
}