import { WizardStepData, StepOption } from './types';

export const STEPS: WizardStepData[] = [
  {
    id: 1,
    title: "누구를 위한 안내인가요?",
    subtitle: "가이드를 필요로 하는 대상을 선택해주세요.",
    key: 'target',
    options: [
      { id: 'student', label: '학생 (본인/친구)', icon: '🎒', description: '학교폭력을 겪고 있거나 목격한 학생' },
      { id: 'parent', label: '학부모 (보호자)', icon: '👨‍👩‍👧‍👦', description: '자녀의 문제를 해결하고 싶은 보호자' },
      { id: 'teacher', label: '교사 (학교 관계자)', icon: '🏫', description: '사안을 접수하고 지도해야 하는 선생님' },
    ]
  },
  {
    id: 2,
    title: "현재 어떤 입장인가요?",
    subtitle: "사건에서 본인의 위치를 알려주세요.",
    key: 'position',
    options: [
      { id: 'victim', label: '피해를 입었어요', icon: '😢', description: '보호와 도움이 필요한 상황' },
      { id: 'perpetrator', label: '가해 지목을 받았어요', icon: '🤔', description: '사안에 연루되어 조사를 앞둔 상황' },
      { id: 'witness', label: '목격했어요', icon: '👀', description: '친구를 돕고 싶거나 신고를 고민 중' },
    ]
  },
  {
    id: 3,
    title: "어떤 유형의 폭력인가요?",
    subtitle: "가장 주된 피해 유형을 선택해주세요.",
    key: 'violenceType',
    options: [
      { id: 'physical', label: '신체 폭력', icon: '👊', description: '때리기, 밀치기, 감금 등' },
      { id: 'verbal', label: '언어 폭력', icon: '🤬', description: '욕설, 협박, 모욕 등' },
      { id: 'cyber', label: '사이버 폭력', icon: '📱', description: 'SNS 괴롭힘, 저격글, 와이파이 셔틀' },
      { id: 'bullying', label: '따돌림', icon: '😞', description: '집단적 무시, 소외시키기' },
      { id: 'sexual', label: '성폭력', icon: '🚫', description: '성희롱, 성추행, 불법촬영 등' },
      { id: 'extortion', label: '금품 갈취', icon: '💰', description: '돈이나 물건을 빼앗는 행위' },
    ]
  },
  {
    id: 4,
    title: "현재 진행 상황은?",
    subtitle: "사건 처리가 어디까지 진행되었나요?",
    key: 'status',
    options: [
      { id: 'pre-report', label: '신고 전 (고민 중)', icon: '💭', description: '아직 학교나 경찰에 알리지 않음' },
      { id: 'investigation', label: '신고 접수/조사 중', icon: '📝', description: '전담기구 조사 또는 학폭위 대기' },
      { id: 'post-decision', label: '조치 결정 후', icon: '⚖️', description: '결과가 나왔으나 불복하거나 이행 단계' },
    ]
  }
];

export const TEACHER_POSITION_OPTIONS: StepOption[] = [
  { id: 'victim', label: '피해 학생 보호/지원', icon: '🛡️', description: '긴급조치, 상담 연계, 분리 요청 등' },
  { id: 'perpetrator', label: '가해 학생 선도/지도', icon: '📝', description: '확인서 작성, 생활 지도, 특별교육' },
  { id: 'witness', label: '사안 처리 절차 (행정)', icon: '📂', description: '접수 보고, 전담기구 운영, 심의위 요청' },
];