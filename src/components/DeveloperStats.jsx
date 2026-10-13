import { useState } from 'react';
import { GitCommit, GitPullRequest, Code2, Flame, Award, Calendar } from 'lucide-react';

export default function DeveloperStats() {
  const [activeTab, setActiveTab] = useState('activity');
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate 52 weeks x 7 days simulated contribution matrix
  // 52 columns x 7 rows
  const weeks = 40; // 40 weeks visible nicely on standard screens
  const days = 7;
  const contributionGrid = [];

  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < days; d++) {
      // Deterministic realistic activity level: 0 to 4
      const rand = Math.sin(w * 13 + d * 7) * 0.5 + 0.5;
      let level = 0;
      if (rand > 0.75) level = 4;
      else if (rand > 0.55) level = 3;
      else if (rand > 0.35) level = 2;
      else if (rand > 0.15) level = 1;

      const count = level === 4 ? 8 : level === 3 ? 5 : level === 2 ? 3 : level === 1 ? 1 : 0;
      week.push({ week: w, day: d, level, count });
    }
    contributionGrid.push(week);
  }

  const statCards = [
    {
      label: 'Total Commits',
      val: '480+',
      icon: GitCommit,
      sub: 'Across all repos in 2024-2027',
    },
    {
      label: 'Production Repos',
      val: '12+',
      icon: Code2,
      sub: 'Public & private projects',
    },
    {
      label: 'Longest Streak',
      val: '28 Days',
      icon: Flame,
      sub: 'Consistent daily shipping',
    },
    {
      label: 'Clean Code Score',
      val: '99.4%',
      icon: Award,
      sub: 'Semantic & test-verified',
    },
  ];

  const languages = [
    { name: 'JavaScript / ES6+', pct: 54, color: '#ffffff' },
    { name: 'React.js Ecosystem', pct: 26, color: '#d4d4d8' },
    { name: 'Node.js & Express', pct: 14, color: '#a1a1aa' },
    { name: 'C++ & Foundation', pct: 6, color: '#71717a' },
  ];

  return (
    <section className="relative py-36 md:py-48 bg-black border-t border-white/10 overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-20">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
              TELEMETRY // GITHUB VELOCITY
            </span>
            <div className="h-px w-24 bg-white/20" />
          </div>

          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
            REAL-TIME CRAFT ANALYTICS
          </span>
        </div>

        {/* 4 Metric Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14">
          {statCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="glass-card rounded-2xl border border-white/10 bg-neutral-950 p-7 sm:p-8 flex flex-col justify-between transition-all hover:border-white/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                    {card.label}
                  </span>
                  <div className="w-9 h-9 rounded-xl border border-white/10 bg-neutral-900 flex items-center justify-center text-white">
                    <Icon size={16} />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {card.val}
                  </h3>
                  <p className="font-mono text-[11px] text-neutral-400 mt-2">
                    {card.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dashboard Tabs & Panels */}
        <div className="glass-card rounded-2xl border border-white/15 bg-neutral-950 p-8 sm:p-12">
          {/* Tabs bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 mb-8">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('activity')}
                className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all ${
                  activeTab === 'activity'
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-400 hover:text-white bg-neutral-900'
                }`}
                data-cursor-hover
              >
                GitHub Heatmap
              </button>
              <button
                onClick={() => setActiveTab('stack')}
                className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all ${
                  activeTab === 'stack'
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-400 hover:text-white bg-neutral-900'
                }`}
                data-cursor-hover
              >
                Language Metrics
              </button>
            </div>

            <div className="font-mono text-xs text-neutral-400 flex items-center gap-2">
              <Calendar size={13} className="text-white" />
              <span>Sync Status: ACTIVE // 2027</span>
            </div>
          </div>

          {/* Tab 1: Contribution Heatmap */}
          {activeTab === 'activity' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-lg font-bold text-white">
                    Annual GitHub Commit Volume
                  </h4>
                  <p className="font-mono text-xs text-neutral-400">
                    Hover over cells to inspect commit concentration
                  </p>
                </div>

                {/* Legend */}
                <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-neutral-400">
                  <span>Less</span>
                  <div className="w-3 h-3 rounded-sm bg-neutral-900 border border-white/10" />
                  <div className="w-3 h-3 rounded-sm bg-neutral-700" />
                  <div className="w-3 h-3 rounded-sm bg-neutral-400" />
                  <div className="w-3 h-3 rounded-sm bg-white" />
                  <span>More</span>
                </div>
              </div>

              {/* Scrollable Heatmap Grid */}
              <div className="overflow-x-auto pb-4 pt-2">
                <div className="flex gap-[3px] min-w-max">
                  {contributionGrid.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[3px]">
                      {week.map((cell, dIdx) => {
                        const bgClass =
                          cell.level === 4
                            ? 'bg-white'
                            : cell.level === 3
                            ? 'bg-neutral-400'
                            : cell.level === 2
                            ? 'bg-neutral-600'
                            : cell.level === 1
                            ? 'bg-neutral-800'
                            : 'bg-neutral-900/60';

                        return (
                          <div
                            key={dIdx}
                            onMouseEnter={() =>
                              setHoveredCell(`Week ${cell.week + 1}: ${cell.count} commits`)
                            }
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`w-3 h-3 rounded-[2px] transition-transform hover:scale-150 cursor-pointer ${bgClass}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <div className="font-mono text-xs text-neutral-400 flex items-center justify-between pt-2 border-t border-white/5">
                <span>
                  {hoveredCell || 'Continuous development & open source pipeline'}
                </span>
                <span className="text-white">Active in @vikasrajput302</span>
              </div>
            </div>
          )}

          {/* Tab 2: Language Distribution */}
          {activeTab === 'stack' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-heading text-lg font-bold text-white mb-1">
                  Codebase Language Density
                </h4>
                <p className="font-mono text-xs text-neutral-400">
                  Calculated across production and learning repositories
                </p>
              </div>

              {/* Stack Multi-bar */}
              <div className="h-4 w-full rounded-full overflow-hidden flex bg-neutral-900 border border-white/10">
                {languages.map((l) => (
                  <div
                    key={l.name}
                    style={{ width: `${l.pct}%`, backgroundColor: l.color }}
                    title={`${l.name}: ${l.pct}%`}
                    className="h-full"
                  />
                ))}
              </div>

              {/* Legend List */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {languages.map((l) => (
                  <div
                    key={l.name}
                    className="p-4 rounded-xl border border-white/10 bg-neutral-900/70"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: l.color }}
                      />
                      <span className="font-mono text-xs text-white truncate">
                        {l.name}
                      </span>
                    </div>
                    <p className="font-heading text-2xl font-bold text-white">
                      {l.pct}%
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
