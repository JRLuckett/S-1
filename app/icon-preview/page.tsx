'use client';
import {
  DiagnoseIcon, BuildIcon, OperateIcon,
  ProductMarketFitIcon, SiloedTechStackIcon, LackOfPredictabilityIcon, PrematureHiringIcon, PipelineGenerationIcon,
  FourEssentialQuestionsIcon, ValueFrameworkIcon, DealQualificationIcon, ChampionBuildingIcon, WinningTheStageIcon, BusinessValueAnalysisIcon,
  PartnerEcosystemIcon, RecruitingIcon, EnablementIcon,
  FoundationIcon, ExecuteAndScaleIcon,
  RevenueGrowthIcon, FundraiseProbabilityIcon, TeamPerformanceIcon, ProductAdoptionIcon, CompetitiveMoatIcon, HealthyScalingIcon, ExitPotentialIcon,
  GtmPlanningIcon, SalesExecutionIcon, TechStackIcon, DemandGenerationIcon, ValueSuccessIcon, PartnersIcon, TalentIcon,
} from '../../components/icons/S1Icons';

const groups = [
  {
    title: 'Discipline Wheel — 60px Detail',
    container: 'none',
    defaultSize: 60,
    icons: [
      { name: 'GTM / Planning', Icon: GtmPlanningIcon },
      { name: 'Sales Execution', Icon: SalesExecutionIcon },
      { name: 'Tech Stack', Icon: TechStackIcon },
      { name: 'Demand Generation', Icon: DemandGenerationIcon },
      { name: 'Value / Success', Icon: ValueSuccessIcon },
      { name: 'Partners', Icon: PartnersIcon },
      { name: 'Talent', Icon: TalentIcon },
    ],
  },
  {
    title: 'Operational Phases',
    container: 'none',
    icons: [
      { name: 'Diagnose', Icon: DiagnoseIcon },
      { name: 'Build', Icon: BuildIcon },
      { name: 'Operate', Icon: OperateIcon },
    ],
  },
  {
    title: 'Chain Reaction',
    container: 'none',
    icons: [
      { name: 'Product Market Fit', Icon: ProductMarketFitIcon },
      { name: 'Siloed Tech Stack', Icon: SiloedTechStackIcon },
      { name: 'Lack of Predictability', Icon: LackOfPredictabilityIcon },
      { name: 'Premature Hiring', Icon: PrematureHiringIcon },
      { name: 'Pipeline Generation', Icon: PipelineGenerationIcon },
    ],
  },
  {
    title: 'Six Pillars — Diamond Container',
    container: 'diamond',
    icons: [
      { name: 'Four Essential Questions', Icon: FourEssentialQuestionsIcon },
      { name: 'Value Framework', Icon: ValueFrameworkIcon },
      { name: 'Deal Qualification', Icon: DealQualificationIcon },
      { name: 'Champion Building', Icon: ChampionBuildingIcon },
      { name: 'Winning the Stage', Icon: WinningTheStageIcon },
      { name: 'Business Value Analysis', Icon: BusinessValueAnalysisIcon },
    ],
  },
  {
    title: 'Organizational — Circle Container',
    container: 'circle',
    icons: [
      { name: 'Partner Ecosystem', Icon: PartnerEcosystemIcon },
      { name: 'Recruiting', Icon: RecruitingIcon },
      { name: 'Enablement', Icon: EnablementIcon },
    ],
  },
  {
    title: 'Strategic Framework',
    container: 'none',
    icons: [
      { name: 'Foundation', Icon: FoundationIcon },
      { name: 'Execute & Scale', Icon: ExecuteAndScaleIcon },
    ],
  },
  {
    title: 'Business Impact — Circle Container',
    container: 'circle',
    icons: [
      { name: 'Revenue Growth', Icon: RevenueGrowthIcon },
      { name: 'Fundraise Probability', Icon: FundraiseProbabilityIcon },
      { name: 'Team Performance', Icon: TeamPerformanceIcon },
      { name: 'Product Adoption', Icon: ProductAdoptionIcon },
      { name: 'Competitive Moat', Icon: CompetitiveMoatIcon },
      { name: 'Healthy Scaling', Icon: HealthyScalingIcon },
      { name: 'Exit Potential', Icon: ExitPotentialIcon },
    ],
  },
];

const sizes = [24, 48, 96];

export default function IconPreview() {
  return (
    <main style={{ background: '#0F0F0F', minHeight: '100vh', padding: '40px 24px', fontFamily: 'Outfit, Inter, sans-serif' }}>
      <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 700, marginBottom: 8 }}>S-1 Icon System Preview</h1>
      <p style={{ color: '#888', fontSize: 14, marginBottom: 48 }}>26 custom icons · currentColor · viewBox 24×24 · 2px strokes</p>

      {groups.map(group => (
        <section key={group.title} style={{ marginBottom: 64 }}>
          <h2 style={{ color: '#C93A2A', fontSize: 16, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 12 }}>
            {group.title}
          </h2>

          {group.icons.map(({ name, Icon }) => {
            const displaySizes = (group as any).defaultSize ? [60, 96, 120] : sizes;
            return (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 32, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <span style={{ color: '#999', fontSize: 12, width: 180, flexShrink: 0 }}>{name}</span>

              {/* White on dark */}
              {displaySizes.map(s => (
                <div key={`w${s}`} style={{ color: '#fff', width: s, height: s, flexShrink: 0 }}>
                  <Icon size={s} />
                </div>
              ))}

              {/* Red on dark */}
              <div style={{ color: '#C93A2A', width: 60, height: 60, flexShrink: 0 }}>
                <Icon size={60} />
              </div>

              {/* Black on white */}
              <div style={{ background: '#fff', borderRadius: 6, padding: 6, width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <div style={{ color: '#111' }}>
                  <Icon size={60} />
                </div>
              </div>
            </div>
          )})}
        </section>
      ))}
    </main>
  );
}
