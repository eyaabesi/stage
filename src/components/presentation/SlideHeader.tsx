import React from 'react';

interface SlideHeaderProps {
  section: string;
  title: string;
  highlightWords?: string[];
  badge?: string;
  subtitle?: string;
}

export function SlideHeader({ section, title, highlightWords = [], badge, subtitle }: SlideHeaderProps) {
  // Render title with highlight words colored in teal
  const renderTitle = () => {
    if (!highlightWords || highlightWords.length === 0) {
      return <span>{title}</span>;
    }

    // Split title into tokens to preserve highlights
    const regex = new RegExp(`(${highlightWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    const parts = title.split(regex);

    return (
      <>
        {parts.map((part, index) => {
          const isHighlight = highlightWords.some(
            hw => hw.toLowerCase() === part.toLowerCase()
          );
          return isHighlight ? (
            <span key={index} className="text-px-teal font-extrabold">
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          );
        })}
      </>
    );
  };

  return (
    <div className="mb-6 flex items-start justify-between">
      <div>
        {/* Kicker Section Label */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-[2px] bg-px-teal rounded-full" />
          <span className="text-[11px] font-mono uppercase tracking-[0.15em] font-bold text-px-muted">
            {section}
          </span>
        </div>

        {/* Main Slide Title */}
        <h2 className="text-3xl md:text-[38px] font-extrabold text-px-navy tracking-tight leading-tight">
          {renderTitle()}
        </h2>

        {subtitle && (
          <p className="text-sm text-px-muted mt-1 font-normal max-w-2xl">{subtitle}</p>
        )}
      </div>

      {badge && (
        <div className="px-3 py-1 rounded-full bg-px-teal-lt text-px-teal-dk text-xs font-semibold border border-px-teal/20 tracking-wide shadow-sm">
          {badge}
        </div>
      )}
    </div>
  );
}
