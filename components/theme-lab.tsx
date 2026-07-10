"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sliders,
  RefreshCw,
  Check,
  Sparkles,
  Layout,
  ShieldAlert,
  Cpu,
  Heart,
  Layers,
  Terminal as TermIcon,
  Play,
} from "lucide-react";

interface ThemePreset {
  name: string;
  hue: string; // HSL Hue
  rgb: string; // RGB string for alpha values
  accentClass: string;
}

const presets: ThemePreset[] = [
  {
    name: "Hyper Blue",
    hue: "217 91% 60%",
    rgb: "59, 130, 246",
    accentClass: "from-blue-500 to-indigo-600",
  },
  {
    name: "Cyber Purple",
    hue: "270 91% 65%",
    rgb: "168, 85, 247",
    accentClass: "from-purple-500 to-pink-600",
  },
  {
    name: "Neon Emerald",
    hue: "150 90% 50%",
    rgb: "16, 185, 129",
    accentClass: "from-emerald-400 to-teal-600",
  },
  {
    name: "Laser Cyan",
    hue: "185 95% 48%",
    rgb: "6, 182, 212",
    accentClass: "from-cyan-400 to-blue-600",
  },
  {
    name: "Neon Rose",
    hue: "330 95% 60%",
    rgb: "244, 63, 94",
    accentClass: "from-rose-500 to-pink-600",
  },
  {
    name: "Amber Fire",
    hue: "30 95% 55%",
    rgb: "245, 158, 11",
    accentClass: "from-amber-500 to-orange-600",
  },
  {
    name: "Synthwave",
    hue: "295 90% 55%",
    rgb: "217, 70, 239",
    accentClass: "from-fuchsia-500 to-violet-700",
  },
];

export default function ThemeLab() {
  const [selectedPreset, setSelectedPreset] = useState<ThemePreset>(presets[0]);
  const [radiusMultiplier, setRadiusMultiplier] = useState(1); // multiplier for radius
  const [glassBlur, setGlassBlur] = useState(12); // blur in px
  const [glowStrength, setGlowStrength] = useState(80); // 0-100%
  const [gridOpacity, setGridOpacity] = useState(6); // 0-15%
  const [hoverScale, setHoverScale] = useState(1.03); // 1.00 to 1.10
  const [isAppliedGlobally, setIsAppliedGlobally] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Tab control in preview sandbox
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "components" | "terminal"
  >("dashboard");

  // Interactive Terminal Compiler state
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "// UI compiler ready. Click 'Trigger Compile' to run diagnostics.",
  ]);
  const [isCompiling, setIsCompiling] = useState(false);

  // Reset theme configuration to defaults
  const handleReset = () => {
    setSelectedPreset(presets[0]);
    setRadiusMultiplier(1);
    setGlassBlur(12);
    setGlowStrength(80);
    setGridOpacity(6);
    setHoverScale(1.03);

    if (isAppliedGlobally) {
      applyThemeToDocument(presets[0], 1, 12, 80, 6);
      showToast("Theme settings reset to default!");
    }
  };

  // Show a temporary toast message
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Inject CSS properties into the documentElement
  const applyThemeToDocument = (
    preset: ThemePreset,
    radius: number,
    blur: number,
    glow: number,
    grid: number,
  ) => {
    const root = document.documentElement;
    root.style.setProperty("--custom-accent", preset.hue);
    root.style.setProperty("--custom-accent-rgb", preset.rgb);
    root.style.setProperty("--radius", `${0.75 * radius}rem`);
    root.style.setProperty("--glass-blur", `${blur}px`);
    root.style.setProperty("--custom-glow-opacity", `${glow / 100}`);
    root.style.setProperty("--bg-grid-opacity", `${grid / 100}`);
  };

  // Sync state if global theme is active
  useEffect(() => {
    if (isAppliedGlobally) {
      applyThemeToDocument(
        selectedPreset,
        radiusMultiplier,
        glassBlur,
        glowStrength,
        gridOpacity,
      );
    } else {
      const root = document.documentElement;
      root.style.removeProperty("--custom-accent");
      root.style.removeProperty("--custom-accent-rgb");
      root.style.removeProperty("--radius");
      root.style.removeProperty("--glass-blur");
      root.style.removeProperty("--custom-glow-opacity");
      root.style.removeProperty("--bg-grid-opacity");
    }
  }, [
    selectedPreset,
    radiusMultiplier,
    glassBlur,
    glowStrength,
    gridOpacity,
    isAppliedGlobally,
  ]);

  const toggleGlobalTheme = () => {
    setIsAppliedGlobally(!isAppliedGlobally);
    if (!isAppliedGlobally) {
      showToast(`Global Theme Enabled: ${selectedPreset.name}!`);
    } else {
      showToast("Global Theme disabled. Reverted to default style.");
    }
  };

  // Simulate terminal compile logging
  const runTerminalCompile = () => {
    if (isCompiling) return;
    setIsCompiling(true);
    setTerminalLogs([
      "[system] Starting compile cycle...",
      "[system] Resolving dependency graph...",
    ]);

    const logSteps = [
      `[theme-lab] Loading preset metadata: "${selectedPreset.name}"`,
      `[compiler] Recalculating CSS properties (hue: ${selectedPreset.hue})`,
      `[engine] Applying glassmorphic blur filters: ${glassBlur}px`,
      `[physics] Adjusting container border radius: ${(12 * radiusMultiplier).toFixed(0)}px`,
      `[renderer] Injected glow shadows with opacity: ${(glowStrength / 100).toFixed(2)}`,
      `[diagnostics] Grid opacity calibrated to: ${(gridOpacity / 100).toFixed(2)}`,
      `[analytics] Hover velocity multiplier: ${hoverScale.toFixed(2)}x`,
      `[success] UI Bundle compiled successfully in 740ms!`,
    ];

    logSteps.forEach((step, idx) => {
      setTimeout(
        () => {
          setTerminalLogs((prev) => [...prev, step]);
          if (idx === logSteps.length - 1) {
            setIsCompiling(false);
          }
        },
        (idx + 1) * 450,
      );
    });
  };

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 relative z-10 overflow-hidden">
      {/* Background ambient decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-slate-900/40 pointer-events-none blur-3xl z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              className="fixed bottom-8 right-8 bg-slate-950 border border-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 z-50 pointer-events-auto"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
            >
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-semibold font-mono">
                {toastMessage}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-900/30 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            <Sliders className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">
              Theme Sandbox
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-100 to-slate-350 bg-clip-text text-transparent tracking-tight">
            UI Theme Laboratory
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Customize my frontend configuration in real-time. Apply presets,
            modify physics settings, toggle sandbox previews, and see the entire
            site adapt dynamically!
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 lg:p-8 bg-slate-950/80 border border-slate-900 rounded-3xl backdrop-blur-xl relative overflow-hidden group shadow-2xl">
            {/* Ambient inner glow */}
            <div
              className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none transition-colors duration-500"
              style={{ backgroundColor: `rgb(${selectedPreset.rgb})` }}
            />

            <div className="space-y-8">
              {/* Presets */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Color Presets
                  </span>
                  <button
                    onClick={handleReset}
                    className="text-[10px] text-slate-500 hover:text-white flex items-center gap-1 transition-colors font-mono"
                  >
                    <RefreshCw className="w-3 h-3" /> Reset
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {presets.map((preset) => {
                    const isSelected = selectedPreset.name === preset.name;
                    return (
                      <button
                        key={preset.name}
                        onClick={() => setSelectedPreset(preset)}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all relative overflow-hidden group/btn ${
                          isSelected
                            ? "bg-slate-900 border-slate-800 text-white"
                            : "bg-slate-950/40 border-slate-900 hover:border-slate-800 text-slate-500 hover:text-slate-350"
                        }`}
                      >
                        {/* Selected Indicator Dot */}
                        {isSelected && (
                          <div
                            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full shadow-lg"
                            style={{
                              backgroundColor: `rgb(${preset.rgb})`,
                              boxShadow: `0 0 8px rgb(${preset.rgb})`,
                            }}
                          />
                        )}
                        {/* Dot indicator */}
                        <div
                          className="w-4 h-4 rounded-full border border-white/10"
                          style={{ backgroundColor: `rgb(${preset.rgb})` }}
                        />
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                          {preset.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
                  <Layout className="w-3.5 h-3.5" /> Styling Sliders
                </span>

                {/* Border Radius Multiplier */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold text-slate-500">
                    <span>Container Roundness</span>
                    <span className="text-slate-355 font-mono">
                      {(12 * radiusMultiplier).toFixed(0)}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2.5"
                    step="0.25"
                    value={radiusMultiplier}
                    onChange={(e) =>
                      setRadiusMultiplier(parseFloat(e.target.value))
                    }
                    className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-600">
                    <span>Sharp (0px)</span>
                    <span>Standard (12px)</span>
                    <span>Pill (30px)</span>
                  </div>
                </div>

                {/* Glass Blur Strength */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold text-slate-500">
                    <span>Backdrop Glass Blur</span>
                    <span className="text-slate-355 font-mono">
                      {glassBlur}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="24"
                    step="2"
                    value={glassBlur}
                    onChange={(e) => setGlassBlur(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-600">
                    <span>Solid (0px)</span>
                    <span>Standard (12px)</span>
                    <span>High (24px)</span>
                  </div>
                </div>

                {/* Ambient Glow Strength */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold text-slate-500">
                    <span>Card Neon Glow</span>
                    <span className="text-slate-355 font-mono">
                      {glowStrength}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    value={glowStrength}
                    onChange={(e) => setGlowStrength(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-600">
                    <span>Muted (0%)</span>
                    <span>Saturated (100%)</span>
                  </div>
                </div>

                {/* Background Grid Pattern Opacity */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold text-slate-500">
                    <span>Background Canvas Grid</span>
                    <span className="text-slate-355 font-mono">
                      {(gridOpacity / 100).toFixed(2)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={gridOpacity}
                    onChange={(e) => setGridOpacity(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-600">
                    <span>Hidden (0%)</span>
                    <span>Visible (15%)</span>
                  </div>
                </div>

                {/* Physics: Hover Scale */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold text-slate-500">
                    <span>Interactive Hover Scale</span>
                    <span className="text-slate-355 font-mono">
                      {hoverScale.toFixed(2)}x
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1.00"
                    max="1.10"
                    step="0.01"
                    value={hoverScale}
                    onChange={(e) => setHoverScale(parseFloat(e.target.value))}
                    className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-600">
                    <span>Flat (1.00x)</span>
                    <span>Standard (1.03x)</span>
                    <span>Dynamic (1.10x)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="mt-8 pt-6 border-t border-slate-900/60 space-y-4">
              <button
                onClick={toggleGlobalTheme}
                style={{
                  background: isAppliedGlobally
                    ? "rgba(239, 68, 68, 0.12)"
                    : `linear-gradient(to right, rgb(${selectedPreset.rgb}), rgba(${selectedPreset.rgb}, 0.8))`,
                }}
                className={`w-full py-4 rounded-2xl text-xs font-bold font-mono tracking-widest uppercase transition-all duration-300 shadow-lg text-white hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 ${
                  isAppliedGlobally
                    ? "border border-red-500/20 hover:bg-red-500/20"
                    : ""
                }`}
              >
                {isAppliedGlobally ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" /> Disable
                    Global Override
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" /> Apply to Whole Website
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Sandbox Preview Mockup */}
          <div className="lg:col-span-7 flex flex-col bg-slate-950/30 rounded-3xl border border-slate-900 overflow-hidden relative shadow-inner p-1">
            {/* Tech grid background with slider opacity */}
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none transition-opacity duration-300"
              style={{ opacity: gridOpacity / 100 }}
            />

            {/* Mock Dashboard Window Header with Navigation Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-slate-950/70 border-b border-slate-900/60 backdrop-blur-md relative z-10 gap-3">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                {/* Mode Tabs */}
                <div className="flex bg-slate-900/60 p-0.5 rounded-lg border border-slate-800/40">
                  {(["dashboard", "components", "terminal"] as const).map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-1 text-[10px] font-bold font-mono uppercase rounded-md transition-all ${
                          activeTab === tab
                            ? "bg-slate-850 text-white shadow-sm"
                            : "text-slate-500 hover:text-slate-350"
                        }`}
                      >
                        {tab}
                      </button>
                    ),
                  )}
                </div>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full font-bold font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 animate-pulse w-fit self-end sm:self-auto">
                LIVE SYNC
              </span>
            </div>

            {/* Dashboard Content Container */}
            <div className="flex-1 p-6 space-y-6 relative z-10 overflow-y-auto">
              <AnimatePresence mode="wait">
                {activeTab === "dashboard" && (
                  <motion.div
                    key="dashboard"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* Top Analytical Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Metric 1 */}
                      <motion.div
                        className="p-5 flex flex-col justify-between relative overflow-hidden transition-all duration-300"
                        style={{
                          backgroundColor: `rgba(15, 23, 42, 0.45)`,
                          backdropFilter: `blur(${glassBlur}px)`,
                          borderRadius: `${1.25 * radiusMultiplier}rem`,
                          borderWidth: "1px",
                          borderColor: `rgba(${selectedPreset.rgb}, 0.15)`,
                          boxShadow:
                            glowStrength > 0
                              ? `0 10px 30px -10px rgba(${selectedPreset.rgb}, ${0.05 * (glowStrength / 100)})`
                              : "none",
                        }}
                        whileHover={{ scale: hoverScale, y: -4 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold font-mono text-slate-550 uppercase tracking-wider">
                            LCP Core Speed
                          </span>
                          <Cpu
                            className="w-4 h-4"
                            style={{ color: `rgb(${selectedPreset.rgb})` }}
                          />
                        </div>
                        <div className="mt-4">
                          <span className="text-3xl font-extrabold text-white font-mono">
                            0.82s
                          </span>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md text-emerald-400 bg-emerald-500/10">
                              -0.24s gain
                            </span>
                            <span className="text-[9px] text-slate-550 font-mono">
                              VS baseline
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Metric 2 */}
                      <motion.div
                        className="p-5 flex flex-col justify-between relative overflow-hidden transition-all duration-300"
                        style={{
                          backgroundColor: `rgba(15, 23, 42, 0.45)`,
                          backdropFilter: `blur(${glassBlur}px)`,
                          borderRadius: `${1.25 * radiusMultiplier}rem`,
                          borderWidth: "1px",
                          borderColor: `rgba(${selectedPreset.rgb}, 0.15)`,
                          boxShadow:
                            glowStrength > 0
                              ? `0 10px 30px -10px rgba(${selectedPreset.rgb}, ${0.05 * (glowStrength / 100)})`
                              : "none",
                        }}
                        whileHover={{ scale: hoverScale, y: -4 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold font-mono text-slate-555 uppercase tracking-wider">
                            Glow Strength
                          </span>
                          <Heart
                            className="w-4 h-4 animate-bounce"
                            style={{ color: `rgb(${selectedPreset.rgb})` }}
                          />
                        </div>
                        <div className="mt-4">
                          <span className="text-3xl font-extrabold text-white font-mono">
                            {glowStrength}%
                          </span>
                          <div className="w-full bg-slate-900 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${glowStrength}%`,
                                backgroundColor: `rgb(${selectedPreset.rgb})`,
                                boxShadow: `0 0 10px rgb(${selectedPreset.rgb})`,
                              }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* GPU Render & Performance Stats */}
                    <div
                      className="p-5 relative overflow-hidden transition-all duration-305 grid grid-cols-2 sm:grid-cols-4 gap-4"
                      style={{
                        backgroundColor: `rgba(15, 23, 42, 0.45)`,
                        backdropFilter: `blur(${glassBlur}px)`,
                        borderRadius: `${1.25 * radiusMultiplier}rem`,
                        borderWidth: "1px",
                        borderColor: `rgba(${selectedPreset.rgb}, 0.12)`,
                        boxShadow:
                          glowStrength > 0
                            ? `0 8px 24px -10px rgba(${selectedPreset.rgb}, ${0.04 * (glowStrength / 100)})`
                            : "none",
                      }}
                    >
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-slate-500 font-mono uppercase">GPU Render</span>
                        <span className="text-xs font-bold text-emerald-400 font-mono mt-1.5 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                          60 FPS
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-slate-500 font-mono uppercase">Paint Time</span>
                        <span className="text-xs font-bold text-white font-mono mt-1.5">
                          {(1.2 + (glassBlur * 0.08) + (radiusMultiplier * 0.1)).toFixed(1)}ms
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-slate-500 font-mono uppercase">Memory Heap</span>
                        <span className="text-xs font-bold text-white font-mono mt-1.5">18.4 MB</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-slate-500 font-mono uppercase">Glow Nodes</span>
                        <span className="text-xs font-bold text-white font-mono mt-1.5">
                          {glowStrength * 12 + 820}
                        </span>
                      </div>
                    </div>

                    {/* Large Component Mockup */}
                    <div
                      className="p-6 transition-all duration-305 relative"
                      style={{
                        backgroundColor: `rgba(15, 23, 42, 0.35)`,
                        backdropFilter: `blur(${glassBlur}px)`,
                        borderRadius: `${1.5 * radiusMultiplier}rem`,
                        borderWidth: "1px",
                        borderColor: `rgba(${selectedPreset.rgb}, 0.15)`,
                        boxShadow:
                          glowStrength > 0
                            ? `0 15px 40px -12px rgba(${selectedPreset.rgb}, ${0.08 * (glowStrength / 100)})`
                            : "none",
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-900/60 mb-5">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                            style={{
                              background: `linear-gradient(to bottom right, rgb(${selectedPreset.rgb}), rgba(${selectedPreset.rgb}, 0.5))`,
                            }}
                          >
                            <Layers className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white leading-none">
                              Modular Framework Adapter
                            </h4>
                            <span className="text-[10px] font-mono text-slate-500 leading-none">
                              Status: Ready to deploy
                            </span>
                          </div>
                        </div>

                        {/* Action Button mock */}
                        <button
                          style={{
                            borderRadius: `${0.75 * radiusMultiplier}rem`,
                            background: `rgb(${selectedPreset.rgb})`,
                          }}
                          className="px-4 py-2 text-[10px] font-mono font-bold text-white shadow-md transition-all hover:brightness-110 active:scale-95"
                        >
                          Deploy Stack
                        </button>
                      </div>

                      {/* Code Editor block inside mockup */}
                      <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-900 font-mono text-[11px] text-slate-400 leading-relaxed overflow-x-auto select-none">
                        <p>
                          <span className="text-pink-500">const</span>{" "}
                          <span className="text-blue-400">themeConfig</span> =
                          &#123;
                        </p>
                        <p className="pl-4">
                          accent:{" "}
                          <span className="text-emerald-450">
                            "{selectedPreset.name}"
                          </span>
                          ,
                        </p>
                        <p className="pl-4">
                          radiusMultiplier:{" "}
                          <span className="text-amber-500">
                            {radiusMultiplier}
                          </span>
                          ,
                        </p>
                        <p className="pl-4">
                          glassBlur:{" "}
                          <span className="text-amber-500">{glassBlur}px</span>,
                        </p>
                        <p className="pl-4">
                          glowIntensity:{" "}
                          <span className="text-amber-500">
                            {glowStrength / 100}
                          </span>
                          ,
                        </p>
                        <p className="pl-4">
                          bgGridOpacity:{" "}
                          <span className="text-amber-500">
                            {gridOpacity / 100}
                          </span>
                          ,
                        </p>
                        <p className="pl-4">
                          hoverScale:{" "}
                          <span className="text-amber-500">{hoverScale}</span>
                        </p>
                        <p>&#125;;</p>
                        <p className="mt-2 text-slate-500">
                          // Adjust sliders on the left to see config adapt
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "components" && (
                  <motion.div
                    key="components"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div
                      className="p-6 transition-all duration-300 relative space-y-6"
                      style={{
                        backgroundColor: `rgba(15, 23, 42, 0.35)`,
                        backdropFilter: `blur(${glassBlur}px)`,
                        borderRadius: `${1.5 * radiusMultiplier}rem`,
                        borderWidth: "1px",
                        borderColor: `rgba(${selectedPreset.rgb}, 0.15)`,
                        boxShadow:
                          glowStrength > 0
                            ? `0 15px 40px -12px rgba(${selectedPreset.rgb}, ${0.08 * (glowStrength / 100)})`
                            : "none",
                      }}
                    >
                      {/* Interactive Form Field */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                          Configurable Text Input
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Type to test container values..."
                            className="w-full bg-slate-955/70 border text-xs text-white px-4 py-3 outline-none focus:ring-1 transition-all"
                            style={{
                              borderRadius: `${0.75 * radiusMultiplier}rem`,
                              borderColor: `rgba(${selectedPreset.rgb}, 0.25)`,
                            }}
                          />
                        </div>
                      </div>

                      {/* Interactive Badges */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-505 uppercase block">
                          Responsive Tech Tags
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "TypeScript",
                            "Framer Motion",
                            "Tailwind CSS",
                            "Next.js",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-slate-900/60 border text-xs font-semibold text-slate-350 font-mono"
                              style={{
                                borderRadius: `${0.5 * radiusMultiplier}rem`,
                                borderColor: `rgba(${selectedPreset.rgb}, 0.15)`,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Button styles demonstration */}
                      <div className="space-y-3 pt-2">
                        <label className="text-[10px] font-mono font-bold text-slate-505 uppercase block">
                          Button Elements
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* Accent Fill Button */}
                          <motion.button
                            style={{
                              borderRadius: `${0.75 * radiusMultiplier}rem`,
                              background: `linear-gradient(135deg, rgb(${selectedPreset.rgb}) 0%, rgba(${selectedPreset.rgb}, 0.85) 100%)`,
                              boxShadow:
                                glowStrength > 0
                                  ? `0 8px 20px -6px rgba(${selectedPreset.rgb}, ${0.4 * (glowStrength / 100)})`
                                  : "none",
                            }}
                            className="w-full py-3 text-xs font-bold font-mono text-white shadow-md transition-all"
                            whileHover={{ scale: hoverScale }}
                          >
                            Accent Primary
                          </motion.button>

                          {/* Accent Border Button */}
                          <motion.button
                            style={{
                              borderRadius: `${0.75 * radiusMultiplier}rem`,
                              borderColor: `rgb(${selectedPreset.rgb})`,
                              color: `rgb(${selectedPreset.rgb})`,
                            }}
                            className="w-full py-3 text-xs font-bold font-mono border bg-transparent hover:bg-slate-900/10 transition-colors"
                            whileHover={{ scale: hoverScale }}
                          >
                            Accent Outline
                          </motion.button>
                        </div>
                      </div>

                      {/* Live Card Component Preview */}
                      <div className="space-y-2 pt-4 border-t border-slate-900/60">
                        <label className="text-[10px] font-mono font-bold text-slate-505 uppercase block">
                          Live Card Component Preview
                        </label>
                        <div
                          className="p-4 flex items-center gap-4 transition-all duration-300"
                          style={{
                            backgroundColor: `rgba(15, 23, 42, 0.4)`,
                            borderRadius: `${1.25 * radiusMultiplier}rem`,
                            border: `1px solid rgba(${selectedPreset.rgb}, 0.15)`,
                          }}
                        >
                          <div
                            className="w-10 h-10 shrink-0 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-xs text-white"
                            style={{
                              borderColor: `rgba(${selectedPreset.rgb}, 0.3)`,
                            }}
                          >
                            UP
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="text-xs font-bold text-white truncate">Uttam Patra</h5>
                            <p className="text-[10px] text-slate-500 truncate mt-0.5">Frontend Developer & Architect</p>
                            <div className="flex gap-1.5 items-center mt-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              <span className="text-[8px] text-emerald-400 font-mono font-bold uppercase leading-none">Available for contracts</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "terminal" && (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="bg-slate-955 rounded-2xl border border-slate-900 overflow-hidden flex flex-col">
                      {/* Terminal bar */}
                      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/60 border-b border-slate-900">
                        <div className="flex items-center gap-2">
                          <TermIcon className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                            compiler.log
                          </span>
                        </div>
                        <button
                          onClick={runTerminalCompile}
                          disabled={isCompiling}
                          className="px-2.5 py-1 text-[9px] font-bold font-mono text-emerald-400 hover:text-emerald-350 bg-emerald-500/10 rounded-md border border-emerald-500/20 flex items-center gap-1 transition-all disabled:opacity-50"
                        >
                          <Play className="w-2.5 h-2.5 fill-current" /> Trigger
                          Compile
                        </button>
                      </div>

                      {/* Log Area */}
                      <div className="p-5 font-mono text-xs text-slate-350 min-h-[340px] max-h-[420px] overflow-y-auto space-y-1.5 select-all">
                        {terminalLogs.map((log, index) => {
                          let colorClass = "text-slate-400";
                          if (log.startsWith("[success]"))
                            colorClass = "text-emerald-400";
                          if (log.startsWith("[system]"))
                            colorClass = "text-slate-500";
                          if (log.startsWith("[compiler]"))
                            colorClass = "text-blue-400";
                          if (log.startsWith("//"))
                            colorClass = "text-slate-600";

                          return (
                            <div key={index} className={colorClass}>
                              {log}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
