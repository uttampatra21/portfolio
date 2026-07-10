"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sliders, RefreshCw, Check, Sparkles, Layout, ShieldAlert, Cpu, Heart, Layers } from "lucide-react"

interface ThemePreset {
  name: string
  hue: string // HSL Hue
  rgb: string // RGB string for alpha values
  accentClass: string
}

const presets: ThemePreset[] = [
  { name: "Hyper Blue", hue: "217 91% 60%", rgb: "59, 130, 246", accentClass: "from-blue-500 to-indigo-650" },
  { name: "Cyber Purple", hue: "270 91% 65%", rgb: "168, 85, 247", accentClass: "from-purple-500 to-pink-600" },
  { name: "Neon Emerald", hue: "150 90% 50%", rgb: "16, 185, 129", accentClass: "from-emerald-400 to-teal-600" },
  { name: "Neon Rose", hue: "330 95% 60%", rgb: "244, 63, 94", accentClass: "from-rose-500 to-pink-600" },
  { name: "Amber Fire", hue: "30 95% 55%", rgb: "245, 158, 11", accentClass: "from-amber-500 to-orange-600" },
]

export default function ThemeLab() {
  const [selectedPreset, setSelectedPreset] = useState<ThemePreset>(presets[0])
  const [radiusMultiplier, setRadiusMultiplier] = useState(1) // multiplier for radius
  const [glassBlur, setGlassBlur] = useState(12) // blur in px
  const [glowStrength, setGlowStrength] = useState(80) // 0-100%
  const [gridOpacity, setGridOpacity] = useState(6) // 0-15%
  const [isAppliedGlobally, setIsAppliedGlobally] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Reset theme configuration to defaults
  const handleReset = () => {
    setSelectedPreset(presets[0])
    setRadiusMultiplier(1)
    setGlassBlur(12)
    setGlowStrength(80)
    setGridOpacity(6)
    
    if (isAppliedGlobally) {
      applyThemeToDocument(presets[0], 1, 12, 80, 6)
      showToast("Theme settings reset to default!")
    }
  }

  // Show a temporary toast message
  const showToast = (message: string) => {
    setToastMessage(message)
    setTimeout(() => setToastMessage(null), 3000)
  }

  // Inject CSS properties into the documentElement
  const applyThemeToDocument = (
    preset: ThemePreset,
    radius: number,
    blur: number,
    glow: number,
    grid: number
  ) => {
    const root = document.documentElement
    // Set custom accent color (hsl)
    root.style.setProperty("--custom-accent", preset.hue)
    root.style.setProperty("--custom-accent-rgb", preset.rgb)
    // Set border radius based on multiplier (base radius is 12px / 0.75rem)
    root.style.setProperty("--radius", `${0.75 * radius}rem`)
    // Set glass blur
    root.style.setProperty("--glass-blur", `${blur}px`)
    // Set glow shadow opacity
    root.style.setProperty("--custom-glow-opacity", `${glow / 100}`)
    // Set background grid opacity
    root.style.setProperty("--bg-grid-opacity", `${grid / 100}`)
  }

  // Sync state if global theme is active
  useEffect(() => {
    if (isAppliedGlobally) {
      applyThemeToDocument(selectedPreset, radiusMultiplier, glassBlur, glowStrength, gridOpacity)
    } else {
      // Clear properties when disabled to revert to stylesheet defaults
      const root = document.documentElement
      root.style.removeProperty("--custom-accent")
      root.style.removeProperty("--custom-accent-rgb")
      root.style.removeProperty("--radius")
      root.style.removeProperty("--glass-blur")
      root.style.removeProperty("--custom-glow-opacity")
      root.style.removeProperty("--bg-grid-opacity")
    }
  }, [selectedPreset, radiusMultiplier, glassBlur, glowStrength, gridOpacity, isAppliedGlobally])

  const toggleGlobalTheme = () => {
    setIsAppliedGlobally(!isAppliedGlobally)
    if (!isAppliedGlobally) {
      showToast(`Global Theme Enabled: ${selectedPreset.name}!`)
    } else {
      showToast("Global Theme disabled. Reverted to default style.")
    }
  }

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 relative z-10 overflow-hidden">
      {/* Background ambient decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-slate-900/40 pointer-events-none blur-3xl z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              className="fixed bottom-8 right-8 bg-slate-900 border border-slate-800 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 z-50 pointer-events-auto"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
            >
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-semibold font-mono">{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 dark:bg-purple-400/10 rounded-full border border-purple-200/30 dark:border-purple-800/30 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            <Sliders className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400 animate-pulse" />
            <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest font-mono">
              Interactive Component
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 dark:from-white dark:via-purple-100 dark:to-white bg-clip-text text-transparent tracking-tight">
            UI Theme Laboratory
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Customize my frontend architecture config in real-time. Drag sliders to adjust variables, apply presets, and see how the sandbox (or the entire portfolio) updates!
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
                    <Sparkles className="w-3.5 h-3.5" /> Accent Presets
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
                    const isSelected = selectedPreset.name === preset.name
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
                              boxShadow: `0 0 8px rgb(${preset.rgb})` 
                            }}
                          />
                        )}
                        {/* Dot indicator */}
                        <div 
                          className="w-4 h-4 rounded-full border border-white/10" 
                          style={{ backgroundColor: `rgb(${preset.rgb})` }}
                        />
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider">{preset.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
                  <Layout className="w-3.5 h-3.5" /> Structure & Glow
                </span>

                {/* Border Radius Multiplier */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold text-slate-500">
                    <span>Border Radius</span>
                    <span className="text-slate-300">{(12 * radiusMultiplier).toFixed(0)}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2.5"
                    step="0.25"
                    value={radiusMultiplier}
                    onChange={(e) => setRadiusMultiplier(parseFloat(e.target.value))}
                    className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-purple-500"
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
                    <span>Glass Backdrop Blur</span>
                    <span className="text-slate-300">{glassBlur}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="24"
                    step="2"
                    value={glassBlur}
                    onChange={(e) => setGlassBlur(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-600">
                    <span>Solid (0px)</span>
                    <span>Blurry (12px)</span>
                    <span>Frosty (24px)</span>
                  </div>
                </div>

                {/* Ambient Glow Strength */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold text-slate-500">
                    <span>Neon Glow Strength</span>
                    <span className="text-slate-300">{glowStrength}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    value={glowStrength}
                    onChange={(e) => setGlowStrength(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-600">
                    <span>Muted (0%)</span>
                    <span>Cyberpunk (100%)</span>
                  </div>
                </div>

                {/* Background Grid Pattern Opacity */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold text-slate-500">
                    <span>Background Grid Opacity</span>
                    <span className="text-slate-300">{(gridOpacity / 100).toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={gridOpacity}
                    onChange={(e) => setGridOpacity(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-600">
                    <span>Hidden (0%)</span>
                    <span>Tech Grid (15%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="mt-8 pt-6 border-t border-slate-900/60 space-y-4">
              <div className="flex items-start gap-3 p-3 bg-slate-950 border border-slate-900/50 rounded-2xl">
                <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-[10px] leading-relaxed text-slate-500 font-mono">
                  Enabling global mode propagates these values to the root CSS custom properties. It dynamically overrides elements across the navbar, buttons, and card containers.
                </p>
              </div>

              <button
                onClick={toggleGlobalTheme}
                style={{ 
                  background: isAppliedGlobally 
                    ? "rgba(220, 38, 38, 0.15)"
                    : `linear-gradient(to right, rgb(${selectedPreset.rgb}), rgba(${selectedPreset.rgb}, 0.8))` 
                }}
                className={`w-full py-4 rounded-2xl text-xs font-bold font-mono tracking-widest uppercase transition-all duration-300 shadow-lg text-white hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 ${
                  isAppliedGlobally
                    ? "border border-red-500/20 hover:bg-red-500/20"
                    : ""
                }`}
              >
                {isAppliedGlobally ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" /> Disable Global Override
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
            
            {/* Mock Dashboard Window Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-950/70 border-b border-slate-900/60 backdrop-blur-md relative z-10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                preview_panel.config
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full font-bold font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 animate-pulse">
                LIVE SYNC
              </span>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 p-6 space-y-6 relative z-10 overflow-y-auto max-h-[550px]">
              
              {/* Top Analytical Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Metric 1 */}
                <div 
                  className="p-5 flex flex-col justify-between relative overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: `rgba(15, 23, 42, 0.45)`,
                    backdropFilter: `blur(${glassBlur}px)`,
                    borderRadius: `${1.25 * radiusMultiplier}rem`,
                    borderWidth: "1px",
                    borderColor: `rgba(${selectedPreset.rgb}, 0.15)`,
                    boxShadow: glowStrength > 0 
                      ? `0 10px 30px -10px rgba(${selectedPreset.rgb}, ${0.05 * (glowStrength / 100)})` 
                      : "none"
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-wider">LCP Core Speed</span>
                    <Cpu className="w-4 h-4" style={{ color: `rgb(${selectedPreset.rgb})` }} />
                  </div>
                  <div className="mt-4">
                    <span className="text-3xl font-extrabold text-white font-mono">0.82s</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md text-emerald-400 bg-emerald-500/10">-0.24s gain</span>
                      <span className="text-[9px] text-slate-500 font-mono">VS baseline</span>
                    </div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div 
                  className="p-5 flex flex-col justify-between relative overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: `rgba(15, 23, 42, 0.45)`,
                    backdropFilter: `blur(${glassBlur}px)`,
                    borderRadius: `${1.25 * radiusMultiplier}rem`,
                    borderWidth: "1px",
                    borderColor: `rgba(${selectedPreset.rgb}, 0.15)`,
                    boxShadow: glowStrength > 0 
                      ? `0 10px 30px -10px rgba(${selectedPreset.rgb}, ${0.05 * (glowStrength / 100)})` 
                      : "none"
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-wider">Glow Strength</span>
                    <Heart className="w-4 h-4 animate-bounce" style={{ color: `rgb(${selectedPreset.rgb})` }} />
                  </div>
                  <div className="mt-4">
                    <span className="text-3xl font-extrabold text-white font-mono">{glowStrength}%</span>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: `${glowStrength}%`, 
                          backgroundColor: `rgb(${selectedPreset.rgb})`,
                          boxShadow: `0 0 10px rgb(${selectedPreset.rgb})` 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Large Component Mockup */}
              <div 
                className="p-6 transition-all duration-300 relative"
                style={{
                  backgroundColor: `rgba(15, 23, 42, 0.35)`,
                  backdropFilter: `blur(${glassBlur}px)`,
                  borderRadius: `${1.5 * radiusMultiplier}rem`,
                  borderWidth: "1px",
                  borderColor: `rgba(${selectedPreset.rgb}, 0.15)`,
                  boxShadow: glowStrength > 0 
                    ? `0 15px 40px -12px rgba(${selectedPreset.rgb}, ${0.08 * (glowStrength / 100)})` 
                    : "none"
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-900/60 mb-5">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                      style={{ 
                        background: `linear-gradient(to bottom right, rgb(${selectedPreset.rgb}), rgba(${selectedPreset.rgb}, 0.5))`
                      }}
                    >
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-none">Modular Framework Adapter</h4>
                      <span className="text-[10px] font-mono text-slate-500 leading-none">Status: Ready to deploy</span>
                    </div>
                  </div>
                  
                  {/* Action Button mock */}
                  <button 
                    style={{ 
                      borderRadius: `${0.75 * radiusMultiplier}rem`,
                      background: `rgb(${selectedPreset.rgb})`
                    }}
                    className="px-4 py-2 text-[10px] font-mono font-bold text-white shadow-md transition-all hover:brightness-110 active:scale-95"
                  >
                    Deploy Stack
                  </button>
                </div>

                {/* Code Editor block inside mockup */}
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-900 font-mono text-[11px] text-slate-450 leading-relaxed overflow-x-auto select-none">
                  <p><span className="text-pink-500">const</span> <span className="text-blue-400">themeConfig</span> = &#123;</p>
                  <p className="pl-4">accent: <span className="text-emerald-400">"{selectedPreset.name}"</span>,</p>
                  <p className="pl-4">radiusMultiplier: <span className="text-amber-500">{radiusMultiplier}</span>,</p>
                  <p className="pl-4">glassBlur: <span className="text-amber-500">{glassBlur}px</span>,</p>
                  <p className="pl-4">glowIntensity: <span className="text-amber-500">{glowStrength / 100}</span>,</p>
                  <p className="pl-4">bgGridOpacity: <span className="text-amber-500">{gridOpacity / 100}</span></p>
                  <p>&#125;;</p>
                  <p className="mt-2 text-slate-500">// Adjust sliders on the left to see config adapt</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
