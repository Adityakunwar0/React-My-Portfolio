import { useState, useEffect, useRef } from "react";

const roles = [
  "Full Stack Developer",
  "·",
  "UI Engineer",
  "·",
  "Creative Coder",
  "·",
  "Full Stack Developer",
  "·",
  "UI Engineer",
  "·",
  "Creative Coder",
  "·",
];

export default function PortfolioLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    let current = 0;
    const tick = () => {
      const step = Math.random() * 3 + 0.5;
      current = Math.min(100, current + step);
      setProgress(Math.round(current));
      if (current < 100) {
        rafRef.current = setTimeout(tick, 30 + Math.random() * 60);
      } else {
        setTimeout(() => {
          setDone(true);
          onComplete?.();
        }, 600);
      }
    };
    const t = setTimeout(tick, 400);
    return () => {
      clearTimeout(t);
      clearTimeout(rafRef.current);
    };
  }, [onComplete]);

  if (done) return null;

  const statusMsg =
    progress < 33
      ? "Initializing..."
      : progress < 66
        ? "Loading assets..."
        : progress < 99
          ? "Almost there..."
          : "Ready!";

  return (
    <div style={s.screen}>
      <style>{css}</style>

      {/* Grain */}
      <div style={s.grain} />

      {/* Corner brackets */}
      <div
        style={{
          ...s.corner,
          top: 16,
          left: 16,
          borderTop: "1px solid #aaa",
          borderLeft: "1px solid #aaa",
        }}
        className="fade-corner"
      />
      <div
        style={{
          ...s.corner,
          top: 16,
          right: 16,
          borderTop: "1px solid #aaa",
          borderRight: "1px solid #aaa",
        }}
        className="fade-corner"
      />
      <div
        style={{
          ...s.corner,
          bottom: 16,
          left: 16,
          borderBottom: "1px solid #aaa",
          borderLeft: "1px solid #aaa",
        }}
        className="fade-corner"
      />
      <div
        style={{
          ...s.corner,
          bottom: 16,
          right: 16,
          borderBottom: "1px solid #aaa",
          borderRight: "1px solid #aaa",
        }}
        className="fade-corner"
      />

      {/* Scan line */}
      <div style={s.scanLine} />

      {/* Nav */}
      <nav style={s.nav}>
        <span style={s.logo} className="slide-down">
          Aditya Kunwar
        </span>
        <Visualizer />
      </nav>

      {/* Marquee */}
      <div style={s.marqueeWrap}>
        <div style={s.marqueeTrack}>
          {roles.map((role, i) => (
            <span
              key={i}
              style={{
                ...s.marqueeText,
                color: role === "·" ? "#7c5cbf" : "#1a1a1a",
              }}
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Pill */}
      <div style={s.pill} className="pill-in">
        <div style={s.dot} />
        <span style={s.pillLabel}>Loading</span>
        <div style={s.progressBox}>
          <span style={s.pctText}>{progress}%</span>
          <div style={s.barWrap}>
            <div style={{ ...s.barFill, height: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div style={s.statusBar} className="fade-in-delay">
        <span>
          <span style={s.statusDot} />
          {statusMsg}
        </span>
        <span>v2026.1</span>
      </div>
    </div>
  );
}

function Visualizer() {
  const heights = [10, 22, 14, 28, 8];
  return (
    <div style={s.visualizer} className="fade-in-delay">
      {heights.map((h, i) => (
        <div key={i} className="viz-bar" style={{ ...s.vizBar, height: h }} />
      ))}
    </div>
  );
}

const s = {
  screen: {
    position: "fixed",
    inset: 0,
    background: "#E8E6DF",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'DM Mono', monospace",
    zIndex: 9999,
  },
  grain: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
    backgroundSize: "200px 200px",
    pointerEvents: "none",
    zIndex: 1,
    opacity: 0.5,
  },
  corner: {
    position: "absolute",
    width: 16,
    height: 16,
    zIndex: 8,
  },
  scanLine: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 1,
    background:
      "linear-gradient(to right, transparent, rgba(124,92,191,0.4), transparent)",
    zIndex: 6,
    animation: "scan 3s ease-in-out infinite",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 36px",
    position: "relative",
    zIndex: 10,
  },
  logo: {
    fontSize: 18,
    fontWeight: 500,
    color: "#1a1a1a",
    letterSpacing: "-0.5px",
    fontFamily: "'DM Mono', monospace",
  },
  visualizer: {
    display: "flex",
    alignItems: "flex-end",
    gap: 3,
    height: 28,
  },
  vizBar: {
    width: 3,
    background: "#1a1a1a",
    borderRadius: 2,
    transformOrigin: "bottom",
  },
  marqueeWrap: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    zIndex: 5,
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
    maskImage:
      "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
  },
  marqueeTrack: {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    animation: "scroll 16s linear infinite",
  },
  marqueeText: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(52px, 10vw, 92px)",
    fontWeight: 400,
    letterSpacing: "1px",
    textTransform: "uppercase",
    paddingRight: 48,
    userSelect: "none",
  },
  pill: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 20,
    background: "#0f0f0f",
    borderRadius: 60,
    padding: "28px 36px",
    display: "flex",
    alignItems: "center",
    gap: 20,
    minWidth: 280,
    border: "1.5px solid #7c5cbf",
    boxShadow:
      "0 0 0 6px rgba(124,92,191,0.12), 0 0 40px rgba(124,92,191,0.15)",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#7c5cbf",
    flexShrink: 0,
    animation: "pulse 1.2s ease-in-out infinite",
  },
  pillLabel: {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: "3px",
    color: "#fff",
    textTransform: "uppercase",
    flex: 1,
    fontFamily: "'DM Mono', monospace",
  },
  progressBox: { display: "flex", alignItems: "center", gap: 8 },
  pctText: {
    fontSize: 14,
    fontWeight: 500,
    color: "#fff",
    minWidth: 40,
    textAlign: "right",
    fontFamily: "'DM Mono', monospace",
  },
  barWrap: {
    width: 12,
    height: 22,
    border: "1.5px solid #333",
    borderRadius: 3,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    background: "#1a1a1a",
  },
  barFill: {
    width: "100%",
    background: "#7c5cbf",
    transition: "height 0.2s ease",
  },
  statusBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 36px",
    fontSize: 10,
    letterSpacing: "2px",
    color: "#888",
    textTransform: "uppercase",
    position: "relative",
    zIndex: 10,
    borderTop: "1px solid rgba(0,0,0,0.08)",
  },
  statusDot: {
    display: "inline-block",
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#7c5cbf",
    marginRight: 6,
    verticalAlign: "middle",
    animation: "pulse 1.2s ease-in-out infinite",
  },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&display=swap');

  @keyframes scroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes barAnim { 0%,100%{transform:scaleY(0.3)} 50%{transform:scaleY(1)} }
  @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }
  @keyframes scan { 0%{top:10%} 50%{top:90%} 100%{top:10%} }
  @keyframes slideDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
  @keyframes pillIn { from{opacity:0;transform:translate(-50%,-48%) scale(0.9)} to{opacity:1;transform:translate(-50%,-50%) scale(1)} }
  @keyframes cornerFade { from{opacity:0} to{opacity:1} }

  .viz-bar { animation: barAnim 0.8s ease-in-out infinite alternate; }
  .viz-bar:nth-child(1){animation-delay:0.00s}
  .viz-bar:nth-child(2){animation-delay:0.10s}
  .viz-bar:nth-child(3){animation-delay:0.20s}
  .viz-bar:nth-child(4){animation-delay:0.15s}
  .viz-bar:nth-child(5){animation-delay:0.30s}

  .slide-down { animation: slideDown 0.5s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
  .fade-in-delay { animation: fadeUp 0.5s ease 0.5s both; }
  .pill-in { animation: pillIn 0.55s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
  .fade-corner { animation: cornerFade 0.5s ease 0.6s both; opacity: 0; }
`;
