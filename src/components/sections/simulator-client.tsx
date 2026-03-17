'use client'
// src/components/sections/SimulatorClient.tsx
// Full 3M UAE tint simulator — built natively using official 3M UAE image assets
// Images sourced from: https://www.3mae.ae/3M/en_AE/car-personalization-ae/resources/automotive-window-film-simulator/

import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/context/AppContext'

// ─── DATA ────────────────────────────────────────────────────────────────────

const SERIES = [
  {
    id: 'crystalline',
    name: 'Crystalline',
    nameAr: 'كريستالين',
    tagline: 'Ultimate clarity & maximum heat rejection',
    taglineAr: 'أقصى درجات الوضوح ورفض الحرارة',
    desc: '3M™ Crystalline Automotive Window Films feature a proprietary multilayer optical technology combining over 200 layers — thinner than a Post-it® Note. A clear film that rejects more heat than darker films.',
    descAr: 'تتميز أفلام 3M™ كريستالين بتقنية بصرية متعددة الطبقات تجمع أكثر من 200 طبقة — أرق من ورقة Post-it®. فيلم شفاف يرفض حرارة أكثر من الأفلام الداكنة.',
    learnMore: 'https://www.3mae.ae/3M/en_AE/p/d/b00016683/',
    shades: [
      {
        label: 'No Film',
        labelAr: 'بدون فيلم',
        vlt: '—',
        heat: '—',
        uv: '—',
        img1: 'https://www.3mae.ae/wps/wcm/connect/db9ee331-e57d-4f53-b62f-0a595d71219f/1/CrystallineAuto_NO_Film.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/db9ee331-e57d-4f53-b62f-0a595d71219f/2/CrystallineAuto_NO_Film.jpg?MOD=AJPERES',
      },
      {
        label: 'Crystalline 20',
        labelAr: 'كريستالين 20',
        vlt: '20%',
        heat: '97%',
        uv: '99.9%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/84b827a3-a114-4169-94e2-b08a834dedb3/1/CrystallineAuto_20.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/84b827a3-a114-4169-94e2-b08a834dedb3/2/CrystallineAuto_20.jpg?MOD=AJPERES',
      },
      {
        label: 'Crystalline 40',
        labelAr: 'كريستالين 40',
        vlt: '40%',
        heat: '97%',
        uv: '99.9%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/e6f04af6-a588-4f48-a561-9bd24354b573/1/CrystallineAuto_40.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/e6f04af6-a588-4f48-a561-9bd24354b573/2/CrystallineAuto_40.jpg?MOD=AJPERES',
      },
      {
        label: 'Crystalline 50',
        labelAr: 'كريستالين 50',
        vlt: '50%',
        heat: '97%',
        uv: '99.9%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/3fcef198-4678-4b41-a704-c78bada87c05/1/CrystallineAuto_50.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/3fcef198-4678-4b41-a704-c78bada87c05/2/CrystallineAuto_50.jpg?MOD=AJPERES',
      },
      {
        label: 'Crystalline 60',
        labelAr: 'كريستالين 60',
        vlt: '60%',
        heat: '96%',
        uv: '99.9%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/cd373b1c-33a3-4cb4-a640-1c7d5b482dce/1/CrystallineAuto_60.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/cd373b1c-33a3-4cb4-a640-1c7d5b482dce/2/CrystallineAuto_60.jpg?MOD=AJPERES',
      },
      {
        label: 'Crystalline 70',
        labelAr: 'كريستالين 70',
        vlt: '70%',
        heat: '60%',
        uv: '99.9%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/172ce452-464b-4225-b949-4c29577f41e0/1/CrystallineAuto_70.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/172ce452-464b-4225-b949-4c29577f41e0/2/CrystallineAuto_70.jpg?MOD=AJPERES',
      },
      {
        label: 'Crystalline 90',
        labelAr: 'كريستالين 90',
        vlt: '90%',
        heat: '40%',
        uv: '99.9%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/30c16f06-c50f-4331-8dc5-939476686744/1/CrystallineAuto_90.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/30c16f06-c50f-4331-8dc5-939476686744/2/CrystallineAuto_90.jpg?MOD=AJPERES',
      },
    ],
  },
  {
    id: 'ceramic',
    name: 'Ceramic IR',
    nameAr: 'سيراميك IR',
    tagline: 'Outstanding clarity & superior heat reduction',
    taglineAr: 'وضوح استثنائي وتقليل فائق للحرارة',
    desc: 'The new 3M™ Ceramic Series Films use advanced ceramics — not metals or dyes — so the film retains its color and appearance over time. Outstanding clarity and superior heat reduction that lasts for years.',
    descAr: 'تستخدم أفلام 3M™ السيراميك المتقدم — لا المعادن أو الأصباغ — مما يحافظ على لون الفيلم ومظهره مع مرور الوقت. وضوح استثنائي وتقليل فائق للحرارة يدوم سنوات.',
    learnMore: 'https://www.3mae.ae/3M/en_AE/p/d/b5005118130/',
    shades: [
      {
        label: 'Ceramic IR 30',
        labelAr: 'سيراميك IR 30',
        vlt: '30%',
        heat: '66%',
        uv: '99%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/3535e549-f1e9-4864-b7a5-a77b0c1f0750/1/CeramicAuto_30.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/3535e549-f1e9-4864-b7a5-a77b0c1f0750/2/CeramicAuto_30.jpg?MOD=AJPERES',
      },
      {
        label: 'Ceramic IR 40',
        labelAr: 'سيراميك IR 40',
        vlt: '40%',
        heat: '59%',
        uv: '99%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/90d5ae8f-99b0-4874-b965-d9e7791e35d5/1/CeramicAuto_40.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/90d5ae8f-99b0-4874-b965-d9e7791e35d5/2/CeramicAuto_40.jpg?MOD=AJPERES',
      },
      {
        label: 'Ceramic IR 50',
        labelAr: 'سيراميك IR 50',
        vlt: '50%',
        heat: '53%',
        uv: '99%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/0286372b-bc55-44ce-8ffa-95dd2dd4270f/1/CeramicAuto_50.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/0286372b-bc55-44ce-8ffa-95dd2dd4270f/2/CeramicAuto_50.jpg?MOD=AJPERES',
      },
    ],
  },
  {
    id: 'colorstable',
    name: 'Color Stable',
    nameAr: 'كولور ستيبل',
    tagline: 'Never turns purple — nano-carbon technology',
    taglineAr: 'لا يتحول للأرجواني — تقنية النانو كربون',
    desc: "3M Color Stable's appearance rivals tinted factory glass. It never turns purple and provides high heat rejection with no signal interference thanks to 3M's revolutionary nano-carbon polyester.",
    descAr: "مظهر 3M Color Stable يضاهي الزجاج المصنعي المظلل. لا يتحول للأرجواني ويوفر رفضاً عالياً للحرارة دون تداخل مع الإشارات بفضل تقنية النانو كربون الثورية من 3M.",
    learnMore: 'https://www.3mae.ae/3M/en_AE/p/d/b00016620/',
    shades: [
      {
        label: 'No Film',
        labelAr: 'بدون فيلم',
        vlt: '—',
        heat: '—',
        uv: '—',
        img1: 'https://www.3mae.ae/wps/wcm/connect/71663ab9-0591-4b9a-9aa0-0a0196b5f7e8/1/ColorStableAuto_No_Film.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/71663ab9-0591-4b9a-9aa0-0a0196b5f7e8/2/ColorStableAuto_No_Film.jpg?MOD=AJPERES',
      },
      {
        label: 'Color Stable 5',
        labelAr: 'كولور ستيبل 5',
        vlt: '5%',
        heat: '64%',
        uv: '99%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/4c27c567-102b-4ac4-8aa8-fdd21d43176e/1/ColorStableAuto_5.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/4c27c567-102b-4ac4-8aa8-fdd21d43176e/2/ColorStableAuto_5.jpg?MOD=AJPERES',
      },
      {
        label: 'Color Stable 20',
        labelAr: 'كولور ستيبل 20',
        vlt: '20%',
        heat: '60%',
        uv: '99%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/d4d3447d-bab6-4315-b9f8-a7304608a937/1/ColorStableAuto_20.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/d4d3447d-bab6-4315-b9f8-a7304608a937/2/ColorStableAuto_20.jpg?MOD=AJPERES',
      },
      {
        label: 'Color Stable 35',
        labelAr: 'كولور ستيبل 35',
        vlt: '35%',
        heat: '55%',
        uv: '99%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/632af893-e56d-4cae-a2f8-6c517cd99b3c/1/ColorStableAuto_35.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/632af893-e56d-4cae-a2f8-6c517cd99b3c/2/ColorStableAuto_35.jpg?MOD=AJPERES',
      },
      {
        label: 'Color Stable 50',
        labelAr: 'كولور ستيبل 50',
        vlt: '50%',
        heat: '48%',
        uv: '99%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/41e82279-e261-4c24-87e4-7a57fef88fa9/1/ColorStableAuto_50.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/41e82279-e261-4c24-87e4-7a57fef88fa9/2/ColorStableAuto_50.jpg?MOD=AJPERES',
      },
    ],
  },
  {
    id: 'fxst',
    name: 'FX ST',
    nameAr: 'FX ST',
    tagline: 'Great performance, no signal interference',
    taglineAr: 'أداء ممتاز، بدون تداخل في الإشارات',
    desc: 'FX ST delivers good looks and great performance keeping you cool and comfortable. Non-metalised film means zero interference with cell phone, satellite radio or GPS — up to 95% visible light blocked.',
    descAr: 'FX ST يقدم مظهراً رائعاً وأداءً ممتازاً يبقيك بارداً ومرتاحاً. الفيلم غير معدني يعني صفر تداخل مع الهاتف أو الراديو الفضائي أو GPS — يحجب حتى 95% من الضوء المرئي.',
    learnMore: 'https://www.3mae.ae/3M/en_AE/p/d/b5005059005/',
    shades: [
      {
        label: 'FX ST 5',
        labelAr: 'FX ST 5',
        vlt: '5%',
        heat: '53%',
        uv: '99%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/cdf74cf2-c394-4498-a56a-3adc6b31f087/1/FX_Premium_Auto_5.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/cdf74cf2-c394-4498-a56a-3adc6b31f087/2/FX_Premium_Auto_5.jpg?MOD=AJPERES',
      },
      {
        label: 'FX ST 20',
        labelAr: 'FX ST 20',
        vlt: '20%',
        heat: '50%',
        uv: '99%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/7984b417-dd90-4460-8bfd-e70c9cfb9e61/1/FX_Premium_Auto_15.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/7984b417-dd90-4460-8bfd-e70c9cfb9e61/2/FX_Premium_Auto_15.jpg?MOD=AJPERES',
      },
      {
        label: 'FX ST 35',
        labelAr: 'FX ST 35',
        vlt: '35%',
        heat: '46%',
        uv: '99%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/20299898-0985-41ba-a04c-9d7c8ac4ad72/1/FX_Premium_Auto_25.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/20299898-0985-41ba-a04c-9d7c8ac4ad72/2/FX_Premium_Auto_25.jpg?MOD=AJPERES',
      },
      {
        label: 'FX ST 40',
        labelAr: 'FX ST 40',
        vlt: '40%',
        heat: '43%',
        uv: '99%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/f8314e7d-c430-4dce-bdb6-e6fc2b27d40f/1/FX_Premium_Auto_30.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/f8314e7d-c430-4dce-bdb6-e6fc2b27d40f/2/FX_Premium_Auto_30.jpg?MOD=AJPERES',
      },
      {
        label: 'FX ST 50',
        labelAr: 'FX ST 50',
        vlt: '50%',
        heat: '38%',
        uv: '99%',
        img1: 'https://www.3mae.ae/wps/wcm/connect/4c13c698-1d12-40e5-b049-7d68932704ff/1/FX_Premium_Auto_35.jpg?MOD=AJPERES',
        img2: 'https://www.3mae.ae/wps/wcm/connect/4c13c698-1d12-40e5-b049-7d68932704ff/2/FX_Premium_Auto_35.jpg?MOD=AJPERES',
      },
    ],
  },
]

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export function SimulatorClient() {
  const { lang } = useApp()
  const isAr = lang === 'ar'

  const [activeSeries, setActiveSeries] = useState(0)
  const [activeShade, setActiveShade] = useState(0)
  // Toggle between exterior (img1) and interior (img2) view
  const [view, setView] = useState<'exterior' | 'interior'>('exterior')

  const series = SERIES[activeSeries]
  const shade = series.shades[activeShade]
  const currentImg = view === 'exterior' ? shade.img1 : shade.img2

  function handleSeriesChange(idx: number) {
    setActiveSeries(idx)
    setActiveShade(0)
    setView('exterior')
  }

  return (
    <>
      {/* Hero */}
      <div
        className="relative flex items-end pb-16 overflow-hidden pt-24"
        style={{ minHeight: '45vh', background: 'linear-gradient(135deg,var(--bg-page) 0%,#1a0005 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 30px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>
            {isAr ? 'جرّب قبل الشراء' : 'Visualize · Compare · Decide'}
          </p>
          <h1
            className="font-heading leading-none tracking-wide"
            style={{ fontSize: 'clamp(3rem,8vw,6rem)', color: 'var(--text-main)' }}
          >
            {isAr ? 'محاكي' : 'TINT'}<br />
            <span style={{ color: 'var(--red)' }}>{isAr ? 'التظليل' : 'SIMULATOR'}</span>
          </h1>
          <p className="text-sm font-light max-w-lg mt-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {isAr
              ? 'شاهد كيف ستبدو أفلام 3M المختلفة على سيارتك قبل التركيب. اختر السلسلة ودرجة التظليل لمعاينة المظهر الخارجي والداخلي.'
              : 'See exactly how different 3M window film series and shades look on a real vehicle — exterior and interior view — before you book.'}
          </p>
        </div>
      </div>

      {/* Simulator Body */}
      <section className="py-16 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">

          {/* Series Selector */}
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
              {isAr ? '01 — اختر السلسلة' : '01 — SELECT SERIES'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {SERIES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => handleSeriesChange(i)}
                  className="p-4 border text-left transition-all duration-200"
                  style={{
                    background: activeSeries === i ? 'var(--red)' : 'var(--bg-card)',
                    borderColor: activeSeries === i ? 'var(--red)' : 'var(--border)',
                    color: activeSeries === i ? 'white' : 'var(--text-main)',
                  }}
                >
                  <div className="font-heading text-xl tracking-wide leading-none">
                    {isAr ? s.nameAr : s.name}
                  </div>
                  <div
                    className="text-xs mt-1 font-light leading-tight"
                    style={{ color: activeSeries === i ? 'rgba(255,255,255,0.75)' : 'var(--text-muted)' }}
                  >
                    {isAr ? s.taglineAr : s.tagline}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main simulator area */}
          <div className="grid lg:grid-cols-[1fr_340px] gap-8">

            {/* Left — Image Viewer */}
            <div>
              {/* View toggle */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold tracking-[3px] uppercase" style={{ color: 'var(--text-muted)' }}>
                  {isAr ? '02 — المعاينة' : '02 — PREVIEW'}
                </p>
                <div className="flex gap-1">
                  {(['exterior', 'interior'] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => setView(v)}
                      className="text-xs font-semibold tracking-widest uppercase px-4 py-2 border transition-colors"
                      style={{
                        background: view === v ? 'var(--red)' : 'transparent',
                        borderColor: view === v ? 'var(--red)' : 'var(--border)',
                        color: view === v ? 'white' : 'var(--text-muted)',
                      }}
                    >
                      {v === 'exterior'
                        ? (isAr ? 'خارجي' : 'Exterior')
                        : (isAr ? 'داخلي' : 'Interior')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Car image */}
              <div
                className="relative w-full overflow-hidden border"
                style={{ aspectRatio: '16/9', background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={currentImg}
                  src={currentImg}
                  alt={`${isAr ? series.nameAr : series.name} — ${isAr ? shade.labelAr : shade.label}`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  style={{ opacity: 1 }}
                />

                {/* Shade badge overlay */}
                <div
                  className="absolute bottom-4 left-4 px-4 py-2 border"
                  style={{ background: 'rgba(10,10,10,0.85)', borderColor: 'var(--red)' }}
                >
                  <div className="font-heading text-xl tracking-wide" style={{ color: 'white' }}>
                    {isAr ? shade.labelAr : shade.label}
                  </div>
                  {shade.vlt !== '—' && (
                    <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      VLT {shade.vlt}
                    </div>
                  )}
                </div>

                {/* Series badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1"
                  style={{ background: 'var(--red)' }}
                >
                  <span className="text-xs font-bold tracking-widest uppercase text-white">
                    3M™ {isAr ? series.nameAr : series.name}
                  </span>
                </div>
              </div>

              {/* Shade strip selector */}
              <div className="mt-4">
                <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--text-muted)' }}>
                  {isAr ? '03 — درجة التظليل' : '03 — SELECT SHADE'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {series.shades.map((s, i) => (
                    <button
                      key={s.label}
                      onClick={() => { setActiveShade(i); setView('exterior') }}
                      className="px-4 py-2 border text-xs font-semibold tracking-wide uppercase transition-all"
                      style={{
                        background: activeShade === i ? 'var(--red)' : 'var(--bg-card)',
                        borderColor: activeShade === i ? 'var(--red)' : 'var(--border)',
                        color: activeShade === i ? 'white' : 'var(--text-muted)',
                      }}
                    >
                      {isAr ? s.labelAr : s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Info Panel */}
            <div className="flex flex-col gap-4">

              {/* Film stats */}
              <div className="border p-6" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="font-heading text-2xl tracking-wide mb-1" style={{ color: 'var(--text-main)' }}>
                  {isAr ? shade.labelAr : shade.label}
                </div>
                <div className="text-xs mb-5" style={{ color: 'var(--text-muted)' }}>
                  3M™ {isAr ? series.nameAr : series.name}
                </div>

                <div className="space-y-3">
                  {[
                    { label: isAr ? 'نقل الضوء المرئي' : 'Visible Light Transmission', value: shade.vlt, key: 'vlt' },
                    { label: isAr ? 'رفض الحرارة' : 'Total Solar Energy Rejected', value: shade.heat, key: 'heat' },
                    { label: isAr ? 'حجب الأشعة فوق البنفسجية' : 'UV Rejection', value: shade.uv, key: 'uv' },
                  ].map((stat) => (
                    <div key={stat.key}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
                        <span className="text-sm font-bold" style={{ color: stat.value === '—' ? 'var(--text-muted)' : 'var(--red)' }}>{stat.value}</span>
                      </div>
                      {stat.value !== '—' && (
                        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              background: 'var(--red)',
                              width: stat.value,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Series description */}
              <div className="border p-6" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--red)' }}>
                  {isAr ? 'عن هذه السلسلة' : 'About This Series'}
                </div>
                <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {isAr ? series.descAr : series.desc}
                </p>
                <a
                  href={series.learnMore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-xs font-semibold tracking-widest uppercase border-b pb-0.5 transition-colors"
                  style={{ color: 'var(--red)', borderColor: 'var(--red)' }}
                >
                  {isAr ? 'تعرف أكثر ←' : 'Learn More →'}
                </a>
              </div>

              {/* CTA */}
              <div className="border p-6" style={{ background: 'var(--red)', borderColor: 'var(--red)' }}>
                <div className="font-heading text-2xl tracking-wide text-white mb-2">
                  {isAr ? 'أعجبك ما رأيت؟' : 'LIKE WHAT YOU SEE?'}
                </div>
                <p className="text-xs text-white/75 font-light mb-5 leading-relaxed">
                  {isAr
                    ? 'احجز موعدك في أي من مواقعنا التسعة بالمراكز التجارية'
                    : 'Book at any of our 9 mall locations across Dubai & Abu Dhabi'}
                </p>
                <Link
                  href="/contact"
                  className="block text-center text-xs font-bold tracking-widest uppercase px-6 py-3 transition-colors"
                  style={{ background: 'white', color: 'var(--red)' }}
                >
                  {isAr ? 'احجز الآن' : 'Book This Film'}
                </Link>
              </div>

            </div>
          </div>

          {/* All series quick-compare strip */}
          <div className="mt-16 border-t pt-12" style={{ borderColor: 'var(--border)' }}>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-6" style={{ color: 'var(--text-muted)' }}>
              {isAr ? 'استعرض كل السلاسل' : 'BROWSE ALL SERIES'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SERIES.map((s, si) => (
                <div key={s.id} className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  {/* Preview thumb — first non "No Film" shade */}
                  <div
                    className="relative aspect-video cursor-pointer overflow-hidden"
                    onClick={() => handleSeriesChange(si)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.shades.find(sh => sh.label !== 'No Film')?.img1 ?? s.shades[0].img1}
                      alt={isAr ? s.nameAr : s.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.15)' }} />
                    <div className="absolute bottom-2 left-2">
                      <span className="text-xs font-bold text-white tracking-widest uppercase" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                        {isAr ? s.nameAr : s.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="text-xs font-light" style={{ color: 'var(--text-muted)' }}>
                      {s.shades.length} {isAr ? 'درجات' : 'shades'} · {isAr ? s.taglineAr.split('—')[0] : s.tagline.split('—')[0]}
                    </div>
                    <button
                      onClick={() => handleSeriesChange(si)}
                      className="mt-2 text-xs font-semibold tracking-widest uppercase transition-colors"
                      style={{ color: activeSeries === si ? 'var(--red)' : 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      {activeSeries === si
                        ? (isAr ? '← مختار' : '← Selected')
                        : (isAr ? 'استعرض ←' : 'Explore →')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-12 p-12 text-center border relative overflow-hidden"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(200,16,46,0.05),transparent)' }} />
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>
                {isAr ? 'الخطوة التالية' : 'Ready to Install?'}
              </p>
              <h2
                className="font-heading leading-none tracking-wide mb-4"
                style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'var(--text-main)' }}
              >
                {isAr ? 'احجز في 9 مواقع' : 'BOOK AT ANY OF OUR'}<br />
                <span style={{ color: 'var(--red)' }}>
                  {isAr ? 'بالمراكز التجارية' : '9 MALL LOCATIONS'}
                </span>
              </h2>
              <p className="text-sm font-light max-w-md mx-auto mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {isAr
                  ? 'يُركّب فنيونا المعتمدون من 3M اختيارك في 55 دقيقة فقط بينما تتسوق.'
                  : 'Our 3M certified technicians will install your chosen film in just 55 minutes while you shop.'}
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-colors"
                  style={{ background: 'var(--red)', color: 'white' }}
                >
                  {isAr ? 'احجز التظليل' : 'Book Tinting'}
                </Link>
                <Link
                  href="/contact?type=quote"
                  className="text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-colors border"
                  style={{ background: 'transparent', color: 'var(--text-main)', borderColor: 'var(--border)' }}
                >
                  {isAr ? 'احصل على عرض سعر' : 'Get Free Quote'}
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
