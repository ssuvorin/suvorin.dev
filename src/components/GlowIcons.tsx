import React from 'react';

export function GlowChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <defs>
        <radialGradient id="glow-chat" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#CBFF4D" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#CBFF4D" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="20" fill="url(#glow-chat)" />
      <rect x="14" y="16" width="20" height="12" rx="6" fill="#CBFF4D" fillOpacity="0.9" />
      <rect x="18" y="22" width="12" height="2" rx="1" fill="#222" />
      <rect x="18" y="26" width="8" height="2" rx="1" fill="#222" />
    </svg>
  );
}

export function GlowLightningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <defs>
        <radialGradient id="glow-lightning" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6AE3FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6AE3FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="20" fill="url(#glow-lightning)" />
      <polygon points="24,12 20,26 26,26 22,36 32,22 26,22 30,12" fill="#6AE3FF" filter="url(#shadow)" />
    </svg>
  );
}

export function GlowBrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <defs>
        <radialGradient id="glow-brain" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A259FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#A259FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="20" fill="url(#glow-brain)" />
      <ellipse cx="24" cy="24" rx="10" ry="8" fill="#A259FF" fillOpacity="0.9" />
      <ellipse cx="20" cy="24" rx="2" ry="3" fill="#fff" fillOpacity="0.7" />
      <ellipse cx="28" cy="24" rx="2" ry="3" fill="#fff" fillOpacity="0.7" />
    </svg>
  );
}

export function GlowSupportIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <defs>
        <radialGradient id="glow-support" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="20" fill="url(#glow-support)" />
      <circle cx="24" cy="22" r="6" fill="#FF6B6B" fillOpacity="0.9" />
      <ellipse cx="24" cy="32" rx="8" ry="4" fill="#FF6B6B" fillOpacity="0.7" />
    </svg>
  );
}
