/**
 * S-1 Ventures — Custom Icon System
 *
 * Design principles:
 * - 24px native viewBox, 2px strokes
 * - currentColor for all strokes/fills (color controlled by parent CSS)
 * - Dual-mode: outlined containers + solid fills
 * - Shared containers per group:
 *     Six Pillars → diamond (rotated square)
 *     Business Impact → circle boundary
 *     Organizational → circle boundary
 */

import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

const defaults = {
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  fill: 'none',
};

/* ═══════════════════════════════════════════════
   GROUP A — Operational Phases (no container)
   ═══════════════════════════════════════════════ */

/** Diagnostic scope with pulse line running through it */
export function DiagnoseIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Scope circle */}
      <circle cx="11" cy="11" r="8" {...defaults} />
      {/* Pulse/heartbeat line through the scope */}
      <polyline points="3,11 7,11 9,7 11,15 13,9 15,11 19,11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Handle */}
      <line x1="17" y1="17" x2="22" y2="22" {...defaults} />
      {/* Center measurement dot */}
      <circle cx="11" cy="11" r="1.5" fill="currentColor" />
    </svg>
  );
}

/** Two L-bracket pieces assembling together */
export function BuildIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Left L-bracket — filled */}
      <path d="M3,4 L3,20 L12,20 L12,15 L8,15 L8,4 Z" fill="currentColor" opacity="0.3" />
      <path d="M3,4 L3,20 L12,20 L12,15 L8,15 L8,4 Z" {...defaults} />
      {/* Right L-bracket — outlined, offset */}
      <path d="M21,20 L21,4 L12,4 L12,9 L16,9 L16,20 Z" {...defaults} />
    </svg>
  );
}

/** Circular motion arrow with gear notch */
export function OperateIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* 3/4 arc */}
      <path d="M12 3 A9 9 0 1 1 3 12" {...defaults} />
      {/* Arrow tip */}
      <polyline points="3,7 3,12 8,12" {...defaults} />
      {/* Center dot — filled */}
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   GROUP B — Chain Reaction / Problems (no container)
   ═══════════════════════════════════════════════ */

/** Two puzzle pieces with visible gap — almost fitting */
export function ProductMarketFitIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Left piece — filled (product) */}
      <path d="M3,5 L10,5 L10,9 C8,9 8,12 10,12 L10,19 L3,19 Z" fill="currentColor" opacity="0.3" />
      <path d="M3,5 L10,5 L10,9 C8,9 8,12 10,12 L10,19 L3,19 Z" {...defaults} />
      {/* Right piece — outlined (market), offset with gap */}
      <path d="M13,5 L21,5 L21,19 L13,19 L13,15 C15,15 15,12 13,12 L13,5 Z" {...defaults} />
    </svg>
  );
}

/** Three disconnected vertical rectangles with different fill levels */
export function SiloedTechStackIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Stack 1 — outlined, 70% filled */}
      <rect x="2" y="4" width="5" height="16" {...defaults} rx="1" />
      <rect x="2" y="10" width="5" height="10" fill="currentColor" rx="0 0 1 1" />
      {/* Stack 2 — outlined, 40% filled */}
      <rect x="9.5" y="4" width="5" height="16" {...defaults} rx="1" />
      <rect x="9.5" y="14" width="5" height="6" fill="currentColor" rx="0 0 1 1" />
      {/* Stack 3 — outlined, 20% filled */}
      <rect x="17" y="4" width="5" height="16" {...defaults} rx="1" />
      <rect x="17" y="17" width="5" height="3" fill="currentColor" rx="0 0 1 1" />
    </svg>
  );
}

/** Chart frame with line going erratic — no pattern to predict */
export function LackOfPredictabilityIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Chart frame */}
      <path d="M3,3 L3,21 L21,21" {...defaults} />
      {/* Stable portion */}
      <path d="M5,15 L9,15" {...defaults} />
      {/* Erratic zigzag portion */}
      <polyline points="9,15 11,8 13,18 15,6 17,16 19,10" {...defaults} />
      {/* Filled area beneath stable part */}
      <rect x="5" y="15" width="4" height="6" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

/** Staircase with unfinished steps — person placed at top too early */
export function PrematureHiringIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Built steps — solid */}
      <path d="M2,21 L2,16 L8,16 L8,11" {...defaults} />
      {/* Filled area beneath built steps */}
      <path d="M2,21 L2,16 L8,16 L8,11 L8,21 Z" fill="currentColor" opacity="0.2" />
      {/* Unbuilt steps — dashed */}
      <path d="M8,11 L14,11 L14,6 L20,6" {...defaults} strokeDasharray="3 2" />
      {/* Person placed prematurely at the top */}
      <circle cx="20" cy="3" r="2.5" fill="currentColor" />
    </svg>
  );
}

/** Funnel with qualified dots below */
export function PipelineGenerationIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Funnel body */}
      <path d="M3,3 L21,3 L14,12 L14,18 L10,18 L10,12 Z" {...defaults} />
      {/* Fill inside funnel top */}
      <rect x="6" y="3" width="12" height="4" fill="currentColor" opacity="0.3" />
      {/* Qualified pipeline dots */}
      <circle cx="12" cy="20" r="1.5" fill="currentColor" />
      <circle cx="8" cy="21" r="1" fill="currentColor" />
      <circle cx="16" cy="21" r="1" fill="currentColor" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   GROUP C — Six Pillars (diamond container)
   ═══════════════════════════════════════════════ */

/** Shared diamond container for all pillar icons */
function DiamondWrap({ children, size, className }: IconProps & { children: React.ReactNode }) {
  return (
    <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Diamond container */}
      <rect x="4.5" y="4.5" width="15" height="15" rx="1" transform="rotate(45 12 12)" stroke="currentColor" strokeWidth="1" />
      {children}
    </svg>
  );
}

/** Four dots at vertices + four quadrant dividers */
export function FourEssentialQuestionsIcon({ size = 24, className }: IconProps) {
  return (
    <DiamondWrap size={size} className={className}>
      {/* Cross dividing into 4 quadrants */}
      <line x1="12" y1="7" x2="12" y2="17" stroke="currentColor" strokeWidth="1" />
      <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1" />
      {/* Four dots — one per quadrant */}
      <circle cx="9.5" cy="9.5" r="1.2" fill="currentColor" />
      <circle cx="14.5" cy="9.5" r="1.2" fill="currentColor" />
      <circle cx="9.5" cy="14.5" r="1.2" fill="currentColor" />
      <circle cx="14.5" cy="14.5" r="1.2" fill="currentColor" />
    </DiamondWrap>
  );
}

/** Ascending pyramid tiers — structured value, bottom heavy */
export function ValueFrameworkIcon({ size = 24, className }: IconProps) {
  return (
    <DiamondWrap size={size} className={className}>
      {/* Bottom tier — widest, filled */}
      <rect x="7" y="15" width="10" height="2.5" fill="currentColor" rx="0.5" />
      {/* Middle tier — medium */}
      <rect x="8.5" y="11.5" width="7" height="2.5" fill="currentColor" opacity="0.5" rx="0.5" />
      {/* Top tier — narrowest, outlined */}
      <rect x="10" y="8" width="4" height="2.5" stroke="currentColor" strokeWidth="1.2" rx="0.5" />
      {/* Apex marker */}
      <circle cx="12" cy="6.5" r="1" fill="currentColor" />
    </DiamondWrap>
  );
}

/** Inverted funnel with stage gate lines */
export function DealQualificationIcon({ size = 24, className }: IconProps) {
  return (
    <DiamondWrap size={size} className={className}>
      {/* Narrowing gate shape */}
      <path d="M8,8 L16,8 L14,16 L10,16 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Stage gate lines */}
      <line x1="8.5" y1="10.5" x2="15.5" y2="10.5" stroke="currentColor" strokeWidth="1" />
      <line x1="9.5" y1="13" x2="14.5" y2="13" stroke="currentColor" strokeWidth="1" />
      {/* Bottom section filled (qualified) */}
      <rect x="10.5" y="13.5" width="3" height="2.5" fill="currentColor" rx="0.5" />
    </DiamondWrap>
  );
}

/** Shield with upward flag inside */
export function ChampionBuildingIcon({ size = 24, className }: IconProps) {
  return (
    <DiamondWrap size={size} className={className}>
      {/* Shield shape */}
      <path d="M12,7 L16,9 L16,14 L12,17 L8,14 L8,9 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Upward element inside shield — flag pole + filled flag */}
      <line x1="12" y1="16" x2="12" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12,9 L15,10.5 L12,12" fill="currentColor" />
    </DiamondWrap>
  );
}

/** Progress bar with stage gates and partial fill */
export function WinningTheStageIcon({ size = 24, className }: IconProps) {
  return (
    <DiamondWrap size={size} className={className}>
      {/* Progress track */}
      <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Gate marks */}
      <line x1="10" y1="9.5" x2="10" y2="14.5" stroke="currentColor" strokeWidth="1" />
      <line x1="14" y1="9.5" x2="14" y2="14.5" stroke="currentColor" strokeWidth="1" />
      {/* Filled progress (up to second gate) */}
      <rect x="7" y="11" width="7" height="2" fill="currentColor" rx="0.5" />
      {/* Checkmark at second gate */}
      <polyline points="13,9 14,10.5 16,8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </DiamondWrap>
  );
}

/** Equals sign with derived value bar below */
export function BusinessValueAnalysisIcon({ size = 24, className }: IconProps) {
  return (
    <DiamondWrap size={size} className={className}>
      {/* Equals sign */}
      <line x1="9" y1="10" x2="15" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Result bar below — filled */}
      <rect x="9" y="15" width="6" height="2" fill="currentColor" rx="0.5" />
      {/* Small upward indicator */}
      <polyline points="10.5,8.5 12,7 13.5,8.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </DiamondWrap>
  );
}

/* ═══════════════════════════════════════════════
   GROUP D — Organizational (circle container)
   ═══════════════════════════════════════════════ */

/** Three dots in triangle + center dot — organism pattern */
export function PartnerEcosystemIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Circle container */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      {/* Three outer nodes — dot-rod pattern */}
      <circle cx="12" cy="6" r="2" fill="currentColor" />
      <circle cx="7" cy="16" r="2" fill="currentColor" />
      <circle cx="17" cy="16" r="2" fill="currentColor" />
      {/* Connection rods */}
      <line x1="12" y1="8" x2="8.5" y2="14.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="8" x2="15.5" y2="14.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="9" y1="16" x2="15" y2="16" stroke="currentColor" strokeWidth="1.5" />
      {/* Center node */}
      <circle cx="12" cy="13" r="1.5" fill="currentColor" />
    </svg>
  );
}

/** Person with diamond overlay on torso */
export function RecruitingIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Circle container */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      {/* Person — head */}
      <circle cx="12" cy="7.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      {/* Person — shoulders */}
      <path d="M6,19 C6,14 8.5,12 12,12 C15.5,12 18,14 18,19" stroke="currentColor" strokeWidth="1.5" />
      {/* Diamond overlay on torso — filled */}
      <rect x="9.5" y="12.5" width="5" height="5" rx="0.5" transform="rotate(45 12 15)" fill="currentColor" />
    </svg>
  );
}

/** Open book with upward arrow from spine */
export function EnablementIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Circle container */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      {/* Left page — filled */}
      <path d="M12,8 L6,9 L6,18 L12,17 Z" fill="currentColor" />
      {/* Right page — outlined */}
      <path d="M12,8 L18,9 L18,18 L12,17 Z" stroke="currentColor" strokeWidth="1.2" />
      {/* Upward arrow from spine */}
      <line x1="12" y1="8" x2="12" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="10,6.5 12,5 14,6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   GROUP E — Strategic Framework (no container)
   ═══════════════════════════════════════════════ */

/** Solid base with structure rising — clean architectural block */
export function FoundationIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Base — filled with opacity */}
      <rect x="2" y="17" width="20" height="5" fill="currentColor" opacity="0.25" />
      <rect x="2" y="17" width="20" height="5" {...defaults} />
      {/* Two pillars rising from base */}
      <rect x="5" y="7" width="5" height="10" {...defaults} />
      <rect x="14" y="7" width="5" height="10" {...defaults} />
      {/* Crossbeam */}
      <line x1="4" y1="7" x2="20" y2="7" {...defaults} />
    </svg>
  );
}

/** Stepped staircase with filled area beneath */
export function ExecuteAndScaleIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Staircase + filled area beneath */}
      <path d="M3,20 L3,16 L9,16 L9,11 L15,11 L15,6 L21,6 L21,20 Z" fill="currentColor" opacity="0.2" />
      <path d="M3,20 L3,16 L9,16 L9,11 L15,11 L15,6 L21,6 L21,20" {...defaults} />
      {/* Arrow at top */}
      <polyline points="18,4 21,6 18,8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Base line */}
      <line x1="2" y1="20" x2="22" y2="20" {...defaults} />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   GROUP F — Business Impact (circle container)
   ═══════════════════════════════════════════════ */

/** Ascending trend line with filled area beneath */
export function RevenueGrowthIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      {/* Filled area beneath trend */}
      <path d="M5,17 L9,14 L13,15 L19,7 L19,17 Z" fill="currentColor" opacity="0.25" />
      {/* Trend line */}
      <polyline points="5,17 9,14 13,15 19,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Peak dot */}
      <circle cx="19" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );
}

/** Vertical bar with upward chevron */
export function FundraiseProbabilityIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      {/* Vertical bar — partially filled */}
      <rect x="10" y="10" width="4" height="8" stroke="currentColor" strokeWidth="1.5" rx="0.5" />
      <rect x="10" y="13" width="4" height="5" fill="currentColor" rx="0 0 0.5 0.5" />
      {/* Upward chevron */}
      <polyline points="9,8 12,5 15,8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Three ascending bars with head-dots */
export function TeamPerformanceIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      {/* Bar 1 */}
      <rect x="5.5" y="14" width="3" height="5" fill="currentColor" rx="0.5" />
      <circle cx="7" cy="12" r="1.2" fill="currentColor" />
      {/* Bar 2 */}
      <rect x="10.5" y="11" width="3" height="8" fill="currentColor" rx="0.5" />
      <circle cx="12" cy="9" r="1.2" fill="currentColor" />
      {/* Bar 3 */}
      <rect x="15.5" y="8" width="3" height="11" fill="currentColor" rx="0.5" />
      <circle cx="17" cy="6" r="1.2" fill="currentColor" />
    </svg>
  );
}

/** Cursor clicking a product shape — clean interaction */
export function ProductAdoptionIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      {/* Product shape — filled with opacity */}
      <rect x="7" y="6" width="10" height="8" fill="currentColor" opacity="0.2" rx="1.5" />
      <rect x="7" y="6" width="10" height="8" stroke="currentColor" strokeWidth="1.5" rx="1.5" />
      {/* Cursor / click indicator */}
      <path d="M12,16 L12,10 L16,13 Z" fill="currentColor" />
    </svg>
  );
}

/** Crenellation turret — castle wall defense */
export function CompetitiveMoatIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      {/* Wall — filled */}
      <rect x="5" y="12" width="14" height="7" fill="currentColor" rx="0.5" />
      {/* Crenellation — alternating blocks */}
      <rect x="5" y="9" width="3" height="3" fill="currentColor" />
      <rect x="10.5" y="9" width="3" height="3" fill="currentColor" />
      <rect x="16" y="9" width="3" height="3" fill="currentColor" />
    </svg>
  );
}

/** Concentric circles with budding dots — organism pattern */
export function HealthyScalingIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      {/* Inner filled circle */}
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      {/* Middle ring */}
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" />
      {/* Budding dots on outer ring — organism motif */}
      <circle cx="12" cy="5" r="1.5" fill="currentColor" />
      <circle cx="18" cy="14.5" r="1.5" fill="currentColor" />
      <circle cx="6" cy="14.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

/** Doorway with outward arrow */
export function ExitPotentialIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      {/* Doorway — arch + sides */}
      <path d="M8,19 L8,9 A4,4 0 0,1 16,9 L16,19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bottom fill */}
      <rect x="8" y="14" width="8" height="5" fill="currentColor" />
      {/* Outward arrow */}
      <line x1="12" y1="14" x2="12" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="10,10 12,8 14,10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   GROUP G — Discipline Wheel Icons (60px, more detail)
   ═══════════════════════════════════════════════ */

/** Roadmap grid with waypoints — strategic planning */
export function GtmPlanningIcon({ size = 60, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Grid lines */}
      <line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="2" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="8" y1="2" x2="8" y2="22" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="16" y1="2" x2="16" y2="22" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      {/* Route path */}
      <polyline points="4,20 8,16 8,8 16,8 16,4 20,4" {...defaults} />
      {/* Filled area beneath route */}
      <path d="M4,20 L8,16 L8,8 L16,8 L16,4 L20,4 L20,20 Z" fill="currentColor" opacity="0.1" />
      {/* Waypoint dots */}
      <circle cx="4" cy="20" r="1.5" fill="currentColor" />
      <circle cx="8" cy="16" r="1.5" fill="currentColor" />
      <circle cx="8" cy="8" r="1.5" fill="currentColor" />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" />
      <circle cx="16" cy="4" r="1.5" fill="currentColor" />
      {/* Destination marker */}
      <circle cx="20" cy="4" r="2" {...defaults} />
      <circle cx="20" cy="4" r="0.8" fill="currentColor" />
    </svg>
  );
}

/** Three forward chevrons with progressive fill — execution momentum */
export function SalesExecutionIcon({ size = 60, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Chevron 1 — lightest */}
      <polyline points="3,4 9,12 3,20" {...defaults} />
      <path d="M3,4 L9,12 L3,20 Z" fill="currentColor" opacity="0.1" />
      {/* Chevron 2 — medium */}
      <polyline points="9,4 15,12 9,20" {...defaults} />
      <path d="M9,4 L15,12 L9,20 Z" fill="currentColor" opacity="0.2" />
      {/* Chevron 3 — boldest */}
      <polyline points="15,4 21,12 15,20" {...defaults} />
      <path d="M15,4 L21,12 L15,20 Z" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

/** 2x2 grid of connected squares — integrated tools */
export function TechStackIcon({ size = 60, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Top-left square */}
      <rect x="2" y="2" width="8" height="8" fill="currentColor" opacity="0.15" rx="1" />
      <rect x="2" y="2" width="8" height="8" {...defaults} rx="1" />
      {/* Top-right square */}
      <rect x="14" y="2" width="8" height="8" {...defaults} rx="1" />
      {/* Bottom-left square */}
      <rect x="2" y="14" width="8" height="8" {...defaults} rx="1" />
      {/* Bottom-right square — filled */}
      <rect x="14" y="14" width="8" height="8" fill="currentColor" opacity="0.15" rx="1" />
      <rect x="14" y="14" width="8" height="8" {...defaults} rx="1" />
      {/* Connection lines */}
      <line x1="10" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth="1.5" />
      <line x1="10" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="10" x2="6" y2="14" stroke="currentColor" strokeWidth="1.5" />
      <line x1="18" y1="10" x2="18" y2="14" stroke="currentColor" strokeWidth="1.5" />
      {/* Center connection dot */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

/** Broadcast source with radiating signal arcs — generating demand */
export function DemandGenerationIcon({ size = 60, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Signal source — filled triangle */}
      <path d="M2,20 L12,4 L22,20 Z" fill="currentColor" opacity="0.15" />
      <path d="M2,20 L12,4 L22,20 Z" {...defaults} />
      {/* Radiating arcs */}
      <path d="M6,14 A7,7 0 0,1 18,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M8,17 A5,5 0 0,1 16,17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Center dot */}
      <circle cx="12" cy="14" r="2" fill="currentColor" />
    </svg>
  );
}

/** Upward arrow breaking through a ceiling — achieving value */
export function ValueSuccessIcon({ size = 60, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Ceiling bar */}
      <line x1="2" y1="10" x2="10" y2="10" {...defaults} />
      <line x1="14" y1="10" x2="22" y2="10" {...defaults} />
      {/* Arrow shaft rising through the gap */}
      <line x1="12" y1="22" x2="12" y2="4" {...defaults} />
      {/* Arrow head */}
      <polyline points="8,8 12,4 16,8" {...defaults} />
      {/* Base platform — filled */}
      <rect x="6" y="18" width="12" height="4" fill="currentColor" opacity="0.2" />
      <rect x="6" y="18" width="12" height="4" {...defaults} />
    </svg>
  );
}

/** Two overlapping circles with connection — partnership */
export function PartnersIcon({ size = 60, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Left circle */}
      <circle cx="9" cy="10" r="6" {...defaults} />
      {/* Right circle */}
      <circle cx="15" cy="10" r="6" {...defaults} />
      {/* Overlap fill */}
      <path d="M12,5.5 A6,6 0 0,1 12,14.5 A6,6 0 0,1 12,5.5" fill="currentColor" opacity="0.2" />
      {/* Connection handshake in overlap */}
      <path d="M10,10 L12,8 L14,10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10,10 L12,12 L14,10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Foundation line */}
      <line x1="3" y1="19" x2="21" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Support stems */}
      <line x1="9" y1="16" x2="9" y2="19" stroke="currentColor" strokeWidth="1.5" />
      <line x1="15" y1="16" x2="15" y2="19" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Org chart with highlighted performer — finding talent */
export function TalentIcon({ size = 60, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Top person — highlighted (the talent) */}
      <circle cx="12" cy="4" r="2.5" fill="currentColor" opacity="0.25" />
      <circle cx="12" cy="4" r="2.5" {...defaults} />
      {/* Connector lines down */}
      <line x1="12" y1="6.5" x2="12" y2="10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="10" x2="6" y2="13" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="10" x2="18" y2="13" stroke="currentColor" strokeWidth="1.5" />
      {/* Left person */}
      <circle cx="6" cy="15" r="2" {...defaults} />
      {/* Right person */}
      <circle cx="18" cy="15" r="2" {...defaults} />
      {/* Bottom row connectors */}
      <line x1="6" y1="17" x2="6" y2="19" stroke="currentColor" strokeWidth="1" />
      <line x1="18" y1="17" x2="18" y2="19" stroke="currentColor" strokeWidth="1" />
      {/* Bottom row people */}
      <circle cx="3" cy="20.5" r="1.5" {...defaults} strokeWidth="1.5" />
      <circle cx="9" cy="20.5" r="1.5" {...defaults} strokeWidth="1.5" />
      <circle cx="15" cy="20.5" r="1.5" {...defaults} strokeWidth="1.5" />
      <circle cx="21" cy="20.5" r="1.5" {...defaults} strokeWidth="1.5" />
      <line x1="6" y1="19" x2="3" y2="20.5" stroke="currentColor" strokeWidth="1" />
      <line x1="6" y1="19" x2="9" y2="20.5" stroke="currentColor" strokeWidth="1" />
      <line x1="18" y1="19" x2="15" y2="20.5" stroke="currentColor" strokeWidth="1" />
      <line x1="18" y1="19" x2="21" y2="20.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
