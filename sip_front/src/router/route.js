// starter kit

import SafecareDashBoard from "../component/common/safecare/safecareDashboard";
import SafecareLocation from "../component/common/safecare/safecareLocation";
import SafecareOverallStatus from "../component/common/safecare/safecareOverallStatus";
import QrLocation from "../component/common/qr/qrLocation";
import QrOverallStatus from "../component/common/qr/qrOverallStatus";
import HealthLocation from "../component/common/health/healthLocation";
import HealthOverallStatus from "../component/common/health/healthOverallStatus";
import MindLocation from "../component/common/mind/mindLocation";
import MindOverallStatus from "../component/common/mind/mindOverallStatus";
import MindEmotional from "../component/common/mind/mindEmotional";
import MindAdaptation from "../component/common/mind/mindAdaptation";
import MindInterpersonal from "../component/common/mind/mindInterpersonal";
import MindSocialOrientation from "../component/common/mind/mindSocialOrientation";
import MindGeneralOpinion from "../component/common/mind/mindGeneralOpinion";
import CallChanel from "../component/common/call/callChanel";
import CallHistory from "../component/common/call/callHistory";

export const routes = [
  { path: "/safecare/dashboard", Component: SafecareDashBoard },
  { path: "/safecare/location", Component: SafecareLocation },
  { path: "/safecare/overallstatus", Component: SafecareOverallStatus },

  { path: "/mind/location", Component: MindLocation },
  { path: "/mind/overallstatus", Component: MindOverallStatus },
  { path: "/mind/emotional", Component: MindEmotional },
  { path: "/mind/adaptation", Component: MindAdaptation },
  { path: "/mind/interpersonal", Component: MindInterpersonal },
  { path: "/mind/socialorientation", Component: MindSocialOrientation },
  { path: "/mind/generalopinion", Component: MindGeneralOpinion },

  { path: "/health/location", Component: HealthLocation },
  { path: "/health/overallstatus", Component: HealthOverallStatus },
  { path: "/qr/location", Component: QrLocation },
  { path: "/qr/overallstatus", Component: QrOverallStatus },

  { path: "/call/chanel", Component: CallChanel },
  { path: "/call/history", Component: CallHistory }
];
