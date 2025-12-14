import { UserSelection, GuideContent } from '../types';

export const getGuideContent = (selection: UserSelection): GuideContent => {
  const { target, position, violenceType, status } = selection;

  // Default fallback
  const guide: GuideContent = {
    title: "맞춤형 행동 가이드",
    summary: "선택하신 상황에 맞는 기본적인 대처 방법을 안내해 드립니다.",
    actions: ["안전을 먼저 확보하세요.", "신뢰할 수 있는 사람에게 도움을 요청하세요."],
    legalBasis: "학교폭력예방 및 대책에 관한 법률",
    contacts: [
      { name: "학교폭력 신고센터", phone: "117", desc: "24시간 상담 및 신고" },
      { name: "청소년 전화", phone: "1388", desc: "심리 상담 및 위기 지원" }
    ]
  };

  if (!target || !position || !violenceType || !status) return guide;

  // --- Dynamic Content Logic ---

  // 1. Summary based on Position & Status
  if (position === 'victim') {
    if (status === 'pre-report') {
      guide.summary = "지금 가장 중요한 것은 '증거 확보'와 '심리적 안정'입니다. 혼자 끙끙 앓지 말고 알리는 용기가 필요합니다.";
    } else if (status === 'investigation') {
      guide.summary = "조사 과정에서 자신의 피해 사실을 일관되고 명확하게 진술하는 것이 핵심입니다.";
    } else {
      guide.summary = "결과에 대한 이의 제기 절차나, 심리적 회복을 위한 지원 제도를 활용할 수 있습니다.";
    }
  } else if (position === 'perpetrator') {
    guide.summary = "진심 어린 반성과 사과가 우선입니다. 자신의 행동에 대해 책임을 지는 태도가 중요합니다.";
  } else if (position === 'witness') {
    guide.summary = "방관자가 아닌 '방어자'가 되어주세요. 신고자의 익명성은 법적으로 보장됩니다.";
  } else if (target === 'teacher') {
    guide.summary = "학교폭력 사안 처리 가이드라인에 따른 '공정하고 신속한' 초기 대응이 필수적입니다.";
  }

  // 2. Action Steps Construction
  const actions: string[] = [];

  // Common Safety First
  if (position === 'victim' && violenceType === 'physical') {
    actions.push("즉시 병원을 방문하여 상해 진단서를 발급받으세요. (사건 관련성 언급 필수)");
    actions.push("상처 부위 사진을 날짜가 나오게 촬영해 두세요.");
  }

  // Type Specific Actions
  if (violenceType === 'cyber') {
    actions.push("대화 내용, SNS 게시글을 절대 삭제하지 말고 캡처(날짜, 시간 포함)하세요.");
    actions.push("가해자가 계정을 삭제하기 전에 URL 주소와 ID를 확보하세요.");
  } else if (violenceType === 'sexual') {
    actions.push("몸을 씻거나 옷을 갈아입지 말고 즉시 경찰(112)이나 해바라기센터에 도움을 요청하세요.");
    actions.push("2차 가해가 발생하지 않도록 비밀 유지를 학교에 강력히 요청하세요.");
  } else if (violenceType === 'extortion') {
    actions.push("송금 내역, 메시지 내용 등 금전 피해를 입증할 객관적 자료를 모으세요.");
  }

  // Status Specific Actions
  if (status === 'pre-report') {
    if (target === 'student') actions.push("담임 선생님, 상담 선생님(Wee클래스), 또는 부모님께 사실을 알리세요.");
    if (target === 'parent') actions.push("감정적인 대응을 자제하고 학교 측에 공식적인 사안 접수를 요청하세요.");
    if (target === 'teacher') actions.push("피해/가해 학생을 즉시 분리하고, 사안 접수 보고서를 작성하여 전담기구에 보고하세요.");
    if (position === 'witness') actions.push("117이나 학교폭력 신고함(어울림앱)을 통해 익명으로 제보할 수 있습니다.");
  } else if (status === 'investigation') {
    actions.push("확인서 작성 시 '언제, 어디서, 누가, 어떻게, 왜' 육하원칙에 따라 구체적으로 작성하세요.");
    if (position === 'victim') actions.push("가해 학생과의 분리 조치(긴급조치)를 학교장에게 요청할 수 있습니다.");
    if (target === 'parent') actions.push("학폭위 개최 전 '학교장 자체해결' 요건에 해당하는지 확인해보세요.");
  } else if (status === 'post-decision') {
    actions.push("조치 결과에 불복할 경우, 처분을 안 날로부터 90일 이내에 행정심판을 청구할 수 있습니다.");
    if (position === 'victim') actions.push("치료비 청구 등 민사 소송을 진행하려면 법률구조공단의 무료 자문을 받아보세요.");
  }

  guide.actions = actions;

  // 3. Legal Basis
  if (violenceType === 'sexual') {
    guide.legalBasis = "학교폭력예방 및 대책에 관한 법률, 아동·청소년의 성보호에 관한 법률";
  } else {
    guide.legalBasis = "학교폭력예방 및 대책에 관한 법률 제2조(학교폭력의 정의) 및 제17조(가해학생에 대한 조치)";
  }

  // 4. Contacts
  if (target === 'teacher') {
    guide.contacts.push({ name: "교육지원청 학교폭력지원센터", phone: "지역별 번호", desc: "사안 처리 컨설팅" });
  }
  if (violenceType === 'sexual') {
    guide.contacts.push({ name: "해바라기센터", phone: "1899-3075", desc: "성폭력 피해 통합 지원" });
  }
  if (violenceType === 'cyber') {
    guide.contacts.push({ name: "푸른나무재단", phone: "1588-9128", desc: "사이버폭력 및 학교폭력 상담" });
  }

  return guide;
};