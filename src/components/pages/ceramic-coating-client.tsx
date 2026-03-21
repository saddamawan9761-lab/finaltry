'use client'
// src/components/pages/ceramic-coating-client.tsx

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useApp } from '@/context/AppContext'
import { COMPANY, MALL_LOCATIONS } from '@/lib/constants'
import { SplitMediaSection } from '@/components/ui/SplitMediaSection'

const content = {
  en: {
    hero: {
      label: 'Official 3M™ Partner Since 2006',
      title1: 'ULTRASHIELD PRO',
      title2: 'NANO CERAMIC',
      title3: 'COATING UAE',
      subtitle: 'Engineered for UAE Extreme Climate',
      desc: "Your car deserves protection that can survive the UAE's extreme heat, UV rays, humidity, and sand. At 3M OUR CAR, our UltraShield Pro Nano Ceramic Coating is engineered specifically for the UAE climate — giving your vehicle long-lasting gloss, protection, and durability.",
      cta1: 'Book Your Ceramic Coating Appointment',
      cta2: 'Get Free Consultation on WhatsApp',
    },
    transform: {
      label: 'The Problem',
      title: "TRANSFORM YOUR CAR'S PAINT WITH\nULTRASHIELD PRO",
      problems: [
        { icon: '☀️', text: 'Fading and oxidation from intense UAE sun' },
        { icon: '🌀', text: 'Swirl marks and micro-scratches from daily washing' },
        { icon: '💧', text: 'Loss of gloss and depth over time' },
        { icon: '🔅', text: 'Clear coat deterioration in harsh conditions' },
      ],
      solution: "UltraShield Pro forms a durable, high-gloss protective layer that shields your paint from daily wear — whether you visit our mall-based branches or choose our doorstep ceramic coating service.",
      cta: 'Get a Free Ceramic Coating Consultation on WhatsApp',
    },
    why: {
      label: 'Why Choose 3M OUR CAR',
      title: 'OFFICIAL 3M™ PARTNERS +\nCERAMIC COATING SPECIALISTS',
      points: [
        {
          title: 'Official 3M™ Partners Since 2006',
          desc: 'We combine world-class 3M technology with our advanced UltraShield Pro Nano Ceramic Coating — built for high-UV, high-heat environments like the UAE.',
        },
        {
          title: 'Two Decades of Proven Expertise',
          desc: "We've protected thousands of vehicles across Dubai and Abu Dhabi — from daily drivers to luxury supercars.",
        },
        {
          title: 'Mall-Based Convenience',
          desc: 'Drop your car → Shop → Return to a fully protected, glossy vehicle. Our mall-based model makes premium ceramic coating effortless.',
        },
        {
          title: 'Doorstep Ceramic Coating',
          desc: 'Prefer convenience? Our mobile team brings professional equipment directly to your villa, apartment, or office.',
        },
      ],
    },
    services: {
      label: 'Our Services',
      title: 'ULTRASHIELD PRO NANO\nCERAMIC COATING SERVICES',
      items: [
        {
          num: '01',
          icon: '🛡️',
          title: 'Long-Lasting Paint Protection',
          duration: 'Up to 3 Years',
          desc: 'UltraShield Pro forms a semi-permanent bond that protects against UV fading, oxidation, sand abrasion, bird droppings, water spots, and chemical stains. Your car stays cleaner, shinier, and better protected — every day.',
          tags: ['UV Fading', 'Oxidation', 'Sand Abrasion', 'Bird Droppings', 'Water Spots', 'Chemical Stains'],
        },
        {
          num: '02',
          icon: '✨',
          title: 'Deep Gloss Enhancement',
          duration: 'Instant Results',
          desc: 'Expect rich, mirror-like gloss, a smooth glass-like finish, and a premium luxury appearance. Perfect for black, white, metallic, and pearl paint finishes.',
          tags: ['Mirror-Like Gloss', 'Glass-Like Finish', 'Premium Appearance', 'All Paint Types'],
        },
        {
          num: '03',
          icon: '💧',
          title: 'Hydrophobic Protection',
          duration: 'Permanent Repellency',
          desc: 'The nano-ceramic layer instantly repels water, dust, and dirt — reducing washing frequency and keeping your car cleaner for longer.',
          tags: ['Water Repellent', 'Dust Resistant', 'Dirt Repellent', 'Self-Cleaning Effect'],
        },
        {
          num: '04',
          icon: '💪',
          title: 'Scratch Resistance',
          duration: 'Daily Protection',
          desc: 'UltraShield Pro reduces micro-scratches, swirl marks, sand abrasion, and clear coat wear. Ideal for cars parked outdoors or driven daily.',
          tags: ['Micro-Scratch Reduction', 'Swirl Mark Resistance', 'Sand Abrasion Guard', 'Clear Coat Protection'],
        },
        {
          num: '05',
          icon: '🏠',
          title: 'Doorstep Ceramic Coating',
          duration: 'At Your Location',
          desc: 'Our mobile team delivers the full ceramic coating experience at your location — villas, apartments, offices, or private parking areas.',
          tags: ['Villas', 'Apartments', 'Offices', 'Private Parking'],
        },
      ],
    },
    duration: {
      label: 'Service Duration',
      title: 'HOW LONG DOES CERAMIC\nCOATING TAKE?',
      time: '~9 HOURS',
      desc: "A complete ceramic coating service takes approximately 9 hours. We never rush the process — precision ensures long-lasting results.",
      factors: [
        { label: 'Paint Condition', desc: 'Pre-coating inspection' },
        { label: 'Paint Correction', desc: 'Polishing if required' },
        { label: 'Vehicle Size', desc: 'Sedan vs SUV vs supercar' },
        { label: 'Layers Applied', desc: 'More layers = more time' },
      ],
    },
    whyUAE: {
      label: 'UAE Essential',
      title: 'WHY CERAMIC COATING IS\nESSENTIAL IN THE UAE',
      points: [
        { icon: '☀️', title: 'Extreme UV Protection', desc: "UAE sun is among the harshest in the world — ceramic coating is the strongest UV shield available for your paint" },
        { icon: '🌪️', title: 'Sand & Dust Shield', desc: 'Desert sand micro-scratches paint daily — the ceramic layer absorbs and deflects these impacts' },
        { icon: '🧹', title: 'Easier Washing', desc: 'The hydrophobic surface sheds dust and dirt — your car needs washing far less frequently' },
        { icon: '💰', title: 'Enhanced Resale Value', desc: 'A car with ceramic-coated, preserved paint commands significantly higher resale prices' },
        { icon: '📅', title: 'Long-Term Cost Savings', desc: 'One ceramic coating lasts years — far cheaper than repainting or correcting oxidized paint' },
      ],
    },
    doorstep: {
      label: 'Mobile Service',
      title: 'DOORSTEP CERAMIC COATING\nACROSS THE UAE',
      desc: 'Prefer to stay home? Our professional mobile team brings the full UltraShield Pro ceramic coating experience directly to you — anywhere in Dubai or Abu Dhabi.',
      locations: ['Villas & Townhouses', 'Apartments & Residences', 'Office Buildings', 'Private Parking Areas'],
      cta: 'Book Doorstep Ceramic Coating on WhatsApp',
    },
    whyUs: {
      label: 'Our Advantages',
      title: 'WHY CUSTOMERS CHOOSE\n3M OUR CAR',
      points: [
        'UltraShield Pro Nano Ceramic Coating',
        '20 Years of Experience',
        'Mall-Based Convenience',
        'Doorstep Ceramic Coating Available',
        'Certified Professional Technicians',
        'Dust-Free Application Environment',
        '~9 Hour Complete Service',
        'Premium Customer Care',
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'FREQUENTLY ASKED\nQUESTIONS',
      items: [
        { q: 'How long does ceramic coating take?', a: 'Around 9 hours, depending on paint condition and preparation required. We never rush the process.' },
        { q: 'Does ceramic coating prevent scratches?', a: 'It significantly reduces micro-scratches and swirl marks, but does not make paint fully scratch-proof. For maximum protection, we recommend combining ceramic coating with PPF.' },
        { q: 'How long does ceramic coating last?', a: 'Up to 3 years with proper maintenance and regular washing.' },
        { q: 'Is ceramic coating better than waxing?', a: 'Yes — ceramic coating lasts up to 3 years, while wax typically lasts only a few weeks. Ceramic coating also provides far superior UV and hydrophobic protection.' },
        { q: 'Do you offer mobile ceramic coating?', a: 'Yes, we provide doorstep ceramic coating across the UAE. Our mobile team comes to your villa, apartment, office, or parking area.' },
        { q: 'Is UltraShield Pro suitable for UAE heat?', a: "Absolutely. UltraShield Pro is engineered specifically for high-temperature, high-UV environments like the UAE — it's designed to outperform in extreme conditions." },
        { q: 'Should I polish before ceramic coating?', a: 'Yes — if the paint has any swirl marks or imperfections, polishing is recommended first. The ceramic coating will lock in whatever surface it is applied to, so it must be perfect.' },
      ],
    },
    finalCta: {
      title: 'READY TO PROTECT YOUR CAR\nWITH ULTRASHIELD PRO?',
      desc: 'Your car deserves long-lasting shine and protection. Book your ceramic coating service with 3M OUR CAR today.',
      cta1: 'Book Now — Protect Your Paint on WhatsApp',
      cta2: 'WhatsApp Us for Instant Booking',
      cta3: 'Book at a Mall Location',
    },
    related: {
      label: 'Complete Protection',
      title: 'PAIR CERAMIC COATING WITH\nOUR OTHER SERVICES',
      items: [
        { slug: 'window-tinting', icon: '🪟', title: '3M™ Window Tinting', desc: 'Block 97% heat & 99.9% UV. Installed in 55 minutes while you shop.' },
        { slug: 'ppf', icon: '🛡️', title: 'Paint Protection Film (PPF)', desc: 'Combine PPF with ceramic coating for the ultimate paint protection system.' },
        { slug: 'car-polishing', icon: '💎', title: 'Car Polishing', desc: 'Essential paint correction before ceramic coating — for a flawless base.' },
        { slug: 'car-detailing', icon: '🚗', title: 'Car Detailing', desc: 'Full interior & exterior detail — the perfect complement to ceramic coating.' },
      ],
    },
  },

  ar: {
    hero: {
      label: 'شريك 3M™ الرسمي منذ 2006',
      title1: 'الطلاء السيراميكي',
      title2: 'النانوي المتقدم',
      title3: 'UltraShield Pro',
      subtitle: 'مصمم لمناخ الإمارات القاسي',
      desc: 'سيارتك تستحق حماية تتحمل الحرارة الشديدة في الإمارات والأشعة فوق البنفسجية والرطوبة والرمال. في 3M OUR CAR، يُعدّ طلاؤنا السيراميكي النانوي UltraShield Pro مصمماً خصيصاً لمناخ الإمارات — يمنح سيارتك لمعاناً طويل الأمد وحماية متينة.',
      cta1: 'احجز موعد الطلاء السيراميكي',
      cta2: 'احصل على استشارة مجانية عبر واتساب',
    },
    transform: {
      label: 'المشكلة',
      title: 'حوّل طلاء سيارتك مع\nUltraShield Pro',
      problems: [
        { icon: '☀️', text: 'البهتان والأكسدة من شمس الإمارات الحارقة' },
        { icon: '🌀', text: 'حلقات الدوامة والخدوش الدقيقة من الغسيل اليومي' },
        { icon: '💧', text: 'فقدان اللمعان والعمق مع مرور الوقت' },
        { icon: '🔅', text: 'تلف الكليركوت في الظروف القاسية' },
      ],
      solution: 'يُشكّل UltraShield Pro طبقة واقية متينة عالية اللمعان تحمي طلاءك من التآكل اليومي — سواء زرت فروعنا في المراكز التجارية أو اخترت خدمة الطلاء السيراميكي على بابك.',
      cta: 'احصل على استشارة مجانية للطلاء السيراميكي عبر واتساب',
    },
    why: {
      label: 'لماذا تختار 3M OUR CAR',
      title: 'شركاء رسميون من 3M™ +\nمتخصصون في الطلاء السيراميكي',
      points: [
        {
          title: 'شركاء رسميون من 3M™ منذ 2006',
          desc: 'نجمع تقنية 3M العالمية المتطورة مع طلاؤنا السيراميكي النانوي UltraShield Pro — المصمم لبيئات الأشعة UV العالية والحرارة الشديدة كالإمارات.',
        },
        {
          title: 'عقدان من الخبرة المثبتة',
          desc: 'حمينا آلاف السيارات في دبي وأبوظبي — من السيارات اليومية إلى السيارات الرياضية الفاخرة.',
        },
        {
          title: 'راحة المراكز التجارية',
          desc: 'أسلّم سيارتك → تسوّق → عد إلى سيارة محمية كاملاً وتلمع. نموذج المراكز التجارية لدينا يجعل الطلاء السيراميكي الفاخر أمراً سهلاً.',
        },
        {
          title: 'الطلاء السيراميكي على بابك',
          desc: 'تفضّل الراحة؟ فريقنا المتنقل يجلب المعدات المتخصصة مباشرة إلى فيلتك أو شقتك أو مكتبك.',
        },
      ],
    },
    services: {
      label: 'خدماتنا',
      title: 'خدمات الطلاء السيراميكي\nالنانوي UltraShield Pro',
      items: [
        {
          num: '01',
          icon: '🛡️',
          title: 'حماية طويلة الأمد للطلاء',
          duration: 'حتى 3 سنوات',
          desc: 'يُشكّل UltraShield Pro رابطاً شبه دائم يحمي من بهتان UV والأكسدة وتآكل الرمال وفضلات الطيور وبقع المياه والبقع الكيميائية. سيارتك تبقى أنظف وأكثر لمعاناً وأفضل حمايةً — كل يوم.',
          tags: ['بهتان UV', 'الأكسدة', 'تآكل الرمال', 'فضلات الطيور', 'بقع المياه', 'البقع الكيميائية'],
        },
        {
          num: '02',
          icon: '✨',
          title: 'تعزيز اللمعان العميق',
          duration: 'نتائج فورية',
          desc: 'توقع لمعاناً غنياً كالمرآة، وتشطيباً أملساً كالزجاج، ومظهراً فاخراً متميزاً. مثالي للطلاء الأسود والأبيض والمعدني واللؤلؤي.',
          tags: ['لمعان كالمرآة', 'تشطيب كالزجاج', 'مظهر فاخر', 'جميع أنواع الطلاء'],
        },
        {
          num: '03',
          icon: '💧',
          title: 'الحماية المائية',
          duration: 'طرد دائم',
          desc: 'الطبقة السيراميكية النانوية تطرد الماء والغبار والأوساخ فوراً — تقلل من تكرار الغسيل وتبقي سيارتك أنظف لفترة أطول.',
          tags: ['طرد الماء', 'مقاومة الغبار', 'طرد الأوساخ', 'تأثير التنظيف الذاتي'],
        },
        {
          num: '04',
          icon: '💪',
          title: 'مقاومة الخدوش',
          duration: 'حماية يومية',
          desc: 'يقلل UltraShield Pro الخدوش الدقيقة وحلقات الدوامة وتآكل الرمال وتآكل الكليركوت. مثالي للسيارات المركونة خارجاً أو المستخدمة يومياً.',
          tags: ['تقليل الخدوش الدقيقة', 'مقاومة حلقات الدوامة', 'درع ضد الرمال', 'حماية الكليركوت'],
        },
        {
          num: '05',
          icon: '🏠',
          title: 'الطلاء السيراميكي على بابك',
          duration: 'في موقعك',
          desc: 'فريقنا المتنقل يجلب تجربة الطلاء السيراميكي الكاملة إلى موقعك — فيلات وشقق ومكاتب ومواقف سيارات خاصة.',
          tags: ['الفيلات', 'الشقق', 'المكاتب', 'مواقف خاصة'],
        },
      ],
    },
    duration: {
      label: 'مدة الخدمة',
      title: 'كم يستغرق الطلاء\nالسيراميكي؟',
      time: '~٩ ساعات',
      desc: 'تستغرق عملية الطلاء السيراميكي الكاملة ما يقارب 9 ساعات. نحن لا نتسرع أبداً — الدقة تضمن نتائج طويلة الأمد.',
      factors: [
        { label: 'حالة الطلاء', desc: 'فحص ما قبل الطلاء' },
        { label: 'تصحيح الطلاء', desc: 'التلميع إذا لزم الأمر' },
        { label: 'حجم السيارة', desc: 'سيدان مقابل SUV مقابل سوبركار' },
        { label: 'عدد الطبقات', desc: 'طبقات أكثر = وقت أطول' },
      ],
    },
    whyUAE: {
      label: 'ضروري في الإمارات',
      title: 'لماذا الطلاء السيراميكي\nضروري في الإمارات؟',
      points: [
        { icon: '☀️', title: 'حماية من الأشعة UV الشديدة', desc: 'شمس الإمارات من أقسى الشمس في العالم — الطلاء السيراميكي هو أقوى درع UV متاح لطلاءك' },
        { icon: '🌪️', title: 'درع ضد الرمال والغبار', desc: 'رمال الصحراء تخدش الطلاء يومياً — الطبقة السيراميكية تمتص وتصرف هذه التأثيرات' },
        { icon: '🧹', title: 'سهولة الغسيل', desc: 'السطح المائي يطرد الغبار والأوساخ — سيارتك تحتاج غسيلاً أقل بكثير' },
        { icon: '💰', title: 'قيمة إعادة بيع معززة', desc: 'السيارة ذات الطلاء المحمي بالسيراميك تُباع بأسعار أعلى بشكل ملحوظ' },
        { icon: '📅', title: 'توفير تكاليف طويل الأمد', desc: 'طلاء سيراميكي واحد يدوم سنوات — أرخص بكثير من إعادة الطلاء أو تصحيح الأكسدة' },
      ],
    },
    doorstep: {
      label: 'الخدمة المتنقلة',
      title: 'الطلاء السيراميكي على\nبابك في الإمارات',
      desc: 'تفضّل البقاء في المنزل؟ فريقنا المتنقل المحترف يجلب تجربة الطلاء السيراميكي UltraShield Pro الكاملة إليك مباشرة — في أي مكان بدبي أو أبوظبي.',
      locations: ['الفيلات والتاون هاوس', 'الشقق والمساكن', 'مباني المكاتب', 'مواقف السيارات الخاصة'],
      cta: 'احجز الطلاء السيراميكي على بابك عبر واتساب',
    },
    whyUs: {
      label: 'مميزاتنا',
      title: 'لماذا يختار العملاء\n3M OUR CAR',
      points: [
        'الطلاء السيراميكي النانوي UltraShield Pro',
        '20 عاماً من الخبرة',
        'راحة المراكز التجارية',
        'طلاء سيراميكي على بابك متاح',
        'فنيون محترفون معتمدون',
        'بيئة تطبيق خالية من الغبار',
        'خدمة كاملة ~9 ساعات',
        'رعاية عملاء متميزة',
      ],
    },
    faq: {
      label: 'الأسئلة الشائعة',
      title: 'الأسئلة\nالشائعة',
      items: [
        { q: 'كم يستغرق الطلاء السيراميكي؟', a: 'ما يقارب 9 ساعات، اعتماداً على حالة الطلاء والتحضير المطلوب. نحن لا نتسرع أبداً.' },
        { q: 'هل يمنع الطلاء السيراميكي الخدوش؟', a: 'يقلل بشكل ملحوظ من الخدوش الدقيقة وحلقات الدوامة، لكنه لا يجعل الطلاء محصناً تماماً من الخدوش. للحماية القصوى، نوصي بالجمع بين الطلاء السيراميكي وفيلم PPF.' },
        { q: 'كم يدوم الطلاء السيراميكي؟', a: 'حتى 3 سنوات مع الصيانة والغسيل المنتظم.' },
        { q: 'هل الطلاء السيراميكي أفضل من الشمع؟', a: 'نعم — يدوم الطلاء السيراميكي حتى 3 سنوات، بينما يدوم الشمع أسابيع فقط. يوفر الطلاء السيراميكي أيضاً حماية UV ومائية أفضل بكثير.' },
        { q: 'هل تقدمون الطلاء السيراميكي المتنقل؟', a: 'نعم، نقدم الطلاء السيراميكي على الباب في جميع أنحاء الإمارات. فريقنا يأتي إلى فيلتك أو شقتك أو مكتبك أو موقف سيارتك.' },
        { q: 'هل UltraShield Pro مناسب لحرارة الإمارات؟', a: 'بالتأكيد. UltraShield Pro مصمم خصيصاً لبيئات درجات الحرارة العالية والأشعة UV الشديدة كالإمارات.' },
        { q: 'هل يجب التلميع قبل الطلاء السيراميكي؟', a: 'نعم — إذا كان الطلاء يحتوي على حلقات دوامة أو عيوب، يُوصى بالتلميع أولاً. الطلاء السيراميكي سيثبّت ما هو تحته، لذا يجب أن يكون السطح مثالياً.' },
      ],
    },
    finalCta: {
      title: 'مستعد لحماية سيارتك\nبـ UltraShield Pro؟',
      desc: 'سيارتك تستحق بريقاً وحماية طويلة الأمد. احجز خدمة الطلاء السيراميكي مع 3M OUR CAR اليوم.',
      cta1: 'احجز الآن — احمِ طلاءك عبر واتساب',
      cta2: 'راسلنا على واتساب للحجز الفوري',
      cta3: 'احجز في موقع قريب منك',
    },
    related: {
      label: 'حماية متكاملة',
      title: 'اقرن الطلاء السيراميكي\nمع خدماتنا الأخرى',
      items: [
        { slug: 'window-tinting', icon: '🪟', title: 'تظليل زجاج 3M™', desc: 'احجب 97% من الحرارة و99.9% من الأشعة فوق البنفسجية. التركيب في 55 دقيقة.' },
        { slug: 'ppf', icon: '🛡️', title: 'فيلم حماية الطلاء PPF', desc: 'ادمج PPF مع الطلاء السيراميكي للحصول على أقصى نظام لحماية الطلاء.' },
        { slug: 'car-polishing', icon: '💎', title: 'تلميع السيارة', desc: 'تصحيح الطلاء الضروري قبل الطلاء السيراميكي — لقاعدة مثالية.' },
        { slug: 'car-detailing', icon: '🚗', title: 'تفصيل السيارة', desc: 'تفصيل كامل داخلي وخارجي — المكمل المثالي للطلاء السيراميكي.' },
      ],
    },
  },
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function WAButton({ label, large = false }: { label: string; large?: boolean }) {
  const { lang } = useApp()
  const msg = encodeURIComponent(
    lang === 'ar'
      ? 'مرحباً! أود الاستفسار عن خدمة الطلاء السيراميكي UltraShield Pro.'
      : 'Hello! I would like to book a UltraShield Pro Ceramic Coating service.'
  )
  return (
    <a href={`https://wa.me/${COMPANY.whatsapp}?text=${msg}`} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 font-semibold tracking-widest uppercase transition-colors ${large ? 'text-sm px-10 py-5' : 'text-xs px-7 py-4'}`}
      style={{ background: '#25D366', color: 'white' }}>
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  )
}

function PortraitVideo({ src }: { src: string }) {
  return (
    <div className="flex justify-center">
      <div className="relative overflow-hidden border" style={{ width: '100%', maxWidth: '340px', aspectRatio: '9/16', borderColor: 'var(--border)' }}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src={src} />
        <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: 'var(--red)' }} />
      </div>
    </div>
  )
}

function LandscapeVideo({ src }: { src: string }) {
  return (
    <div className="relative overflow-hidden w-full" style={{ aspectRatio: '16/9' }}>
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src={src} />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
    </div>
  )
}

function CoverImg({ src, alt, ratio = '16/9' }: { src: string; alt: string; ratio?: string }) {
  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: ratio }}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
    </div>
  )
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export function CeramicCoatingClient() {
  const { lang } = useApp()
  const isAr = lang === 'ar'
  const c = isAr ? content.ar : content.en
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-16"
        style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#0a1a0a 60%,var(--bg-page) 100%)' }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 20px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border" style={{ background: 'rgba(200,16,46,0.12)', borderColor: 'rgba(200,16,46,0.3)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--red)' }} />
                <span className="text-xs font-semibold tracking-[2px] uppercase" style={{ color: 'var(--red)' }}>{c.hero.label}</span>
              </div>
              <h1
                className="font-heading leading-none tracking-wide mb-4"
                style={{
                  fontSize: 'clamp(2.8rem,6vw,5.5rem)',
                  color: 'white',
                  textShadow: '0 2px 18px rgba(0,0,0,0.55)',
                }}
              >
                {c.hero.title1}<br />
                <span style={{ color: 'var(--red)' }}>{c.hero.title2}</span><br />
                {c.hero.title3}
              </h1>
              <p
                className="font-heading text-xl mb-4 tracking-wide"
                style={{ color: 'rgba(255,255,255,0.88)', textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}
              >
                {c.hero.subtitle}
              </p>
              <p
                className="text-sm font-light leading-relaxed mb-8 max-w-lg"
                style={{ color: 'rgba(255,255,255,0.82)', textShadow: '0 2px 14px rgba(0,0,0,0.45)' }}
              >
                {c.hero.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="text-xs font-semibold tracking-widest uppercase px-7 py-4 transition-colors"
                  style={{ background: 'var(--red)', color: 'white' }}>{c.hero.cta1}</Link>
                <WAButton label={c.hero.cta2} />
              </div>
            </div>
            <PortraitVideo src="/videos/ceramic-hero.mp4" />
          </div>
        </div>
      </section>

      <SplitMediaSection
        label={isAr ? 'معرض السيراميك' : 'Ceramic Gallery'}
        title={isAr ? 'نتائج حقيقية\nبلمعان احترافي' : 'REAL CERAMIC\nFINISH RESULTS'}
        description={isAr ? 'عرض بصري يوضح جودة التطبيق ولمعان UltraShield Pro على مختلف فئات السيارات.' : 'A visual showcase of real UltraShield Pro applications with high-gloss professional finish.'}
        mediaItems={[1, 2, 3, 4].map((i) => ({
          src: `/images/ceramic/ceramic-${i}.jpg`,
          alt: `Ceramic coating UAE ${i}`,
        }))}
        autoPlayMs={2200}
      />

      {/* ── TRANSFORM SECTION ─────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.transform.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.transform.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--text-muted)' }}>
                {isAr ? 'ما تواجهه بدون حماية:' : 'Without protection, UAE causes:'}
              </p>
              <div className="space-y-3 mb-8">
                {c.transform.problems.map(p => (
                  <div key={p.text} className="flex items-center gap-4 border px-5 py-4"
                    style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                    <span className="text-2xl flex-shrink-0">{p.icon}</span>
                    <span className="text-sm font-light" style={{ color: 'var(--text-muted)' }}>{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--red)', borderLeft: '4px solid var(--red)' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>
                {isAr ? 'الحل: UltraShield Pro' : 'The Solution: UltraShield Pro'}
              </p>
              <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>{c.transform.solution}</p>
              <WAButton label={c.transform.cta} />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.why.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.why.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {c.why.points.map((p, i) => (
              <div key={p.title} className="border p-8"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderTop: i < 2 ? '3px solid var(--red)' : '1px solid var(--border)' }}>
                <div className="font-heading text-xl tracking-wide mb-3" style={{ color: 'var(--text-main)' }}>{p.title}</div>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LANDSCAPE VIDEO (contained cinematic card) ───────────────────── */}
      <section className="py-16 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-4">
            <p className="text-[10px] font-bold tracking-[3px] uppercase" style={{ color: 'var(--red)' }}>
              {isAr ? 'فيديو العملية' : 'Process Video'}
            </p>
          </div>
          <div className="border overflow-hidden" style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
            <LandscapeVideo src="/videos/ceramic-process.mp4" />
          </div>
          <p className="text-xs font-light mt-3" style={{ color: 'var(--text-muted)' }}>
            {isAr ? 'عرض سريع لمراحل التطبيق الاحترافي.' : 'A quick look at our professional application workflow.'}
          </p>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.services.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-12" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.services.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.services.items.map((svc, idx) => (
              <div key={svc.title} className={`border p-8 ${idx === 0 ? 'lg:col-span-1' : ''}`}
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderTop: idx === 0 ? '3px solid var(--red)' : '1px solid var(--border)' }}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{svc.icon}</span>
                  <div className="text-right">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1"
                      style={{ background: 'var(--bg-mid)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                      {svc.num}
                    </span>
                  </div>
                </div>
                <div className="font-heading text-2xl tracking-wide mb-1" style={{ color: 'var(--text-main)' }}>{svc.title}</div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>{svc.duration}</div>
                <p className="text-sm font-light leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-medium px-3 py-1 border"
                      style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg-page)' }}>✓ {tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DURATION ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.duration.label}</p>
            <h2 className="font-heading leading-none tracking-wide mb-6" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
              {c.duration.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
            </h2>
            <p className="text-sm font-light leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>{c.duration.desc}</p>
            <div className="grid grid-cols-2 gap-4">
              {c.duration.factors.map(f => (
                <div key={f.label} className="border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-main)' }}>{f.label}</div>
                  <div className="text-xs font-light" style={{ color: 'var(--text-muted)' }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="border p-12 text-center" style={{ background: 'var(--red)' }}>
            <div className="font-heading text-white/15 leading-none select-none" style={{ fontSize: 'clamp(7rem,14vw,11rem)' }}>
              {isAr ? '٩' : '9'}
            </div>
            <div className="font-heading text-4xl text-white tracking-widest -mt-4 relative z-10">
              {isAr ? 'ساعات' : 'HOURS'}
            </div>
            <div className="text-white/60 text-sm mt-3 font-light">
              {isAr ? 'خدمة كاملة — دون تسرع' : 'Complete service — never rushed'}
            </div>
            <div className="mt-8">
              <WAButton label={isAr ? 'احجز الآن ← واتساب' : 'Book Now → WhatsApp'} />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY UAE ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.whyUAE.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.whyUAE.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {c.whyUAE.points.map(p => (
              <div key={p.title} className="border p-6 text-center" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="text-4xl mb-4">{p.icon}</div>
                <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-main)' }}>{p.title}</div>
                <div className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOORSTEP SERVICE ──────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.doorstep.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-6" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.doorstep.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
            <div>
              <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>{c.doorstep.desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {c.doorstep.locations.map(l => (
                  <div key={l} className="flex items-center gap-3 border px-4 py-3" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                    <div className="w-2 h-2 flex-shrink-0" style={{ background: 'var(--red)' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--text-main)' }}>{l}</span>
                  </div>
                ))}
              </div>
              <WAButton label={c.doorstep.cta} />
            </div>
            <div>
              <h3 className="font-heading leading-none tracking-wide mb-3" style={{ fontSize: 'clamp(1.6rem,3vw,2.3rem)', color: 'var(--text-main)' }}>
                {isAr ? 'خدمة منزلية بنفس الجودة' : 'DOORSTEP SERVICE,\nSAME PREMIUM QUALITY'}
              </h3>
              <p className="text-sm font-light leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                {isAr ? 'تركيب احترافي على باب منزلك مع نفس الأدوات والمستوى المستخدم في الاستوديو.' : 'Professional doorstep ceramic application with the same tools and standards used in our studio.'}
              </p>
              <div className="border" style={{ borderColor: 'var(--border)' }}>
                <CoverImg src="/images/ceramic/ceramic-doorstep-1.jpg" alt="Doorstep ceramic coating service Dubai" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{isAr ? 'أين نحن' : 'Find Us'}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {isAr ? 'أقرب موقع إليك\nفي دبي وأبوظبي' : 'CERAMIC COATING NEAR YOU\nDUBAI & ABU DHABI'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {MALL_LOCATIONS.map(loc => (
              <a key={loc.name} href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                className="border px-4 py-3 flex items-center gap-3 transition-all"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--red)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
                <div className="w-2 h-2 flex-shrink-0" style={{ background: 'var(--red)' }} />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-main)' }}>{isAr ? loc.nameAr : loc.name}</div>
                  <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{isAr ? loc.cityAr : loc.city}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--red)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3 text-white/70">{c.whyUs.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10 text-white" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
            {c.whyUs.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {c.whyUs.points.map(p => (
              <div key={p} className="flex items-start gap-3 border border-white/20 bg-white/10 px-5 py-4">
                <span className="text-white font-bold flex-shrink-0 mt-0.5">✓</span>
                <span className="text-sm text-white font-light leading-relaxed">{p}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <WAButton label={isAr ? 'احجز خدمة الطلاء السيراميكي ← واتساب' : 'Book Your Ceramic Coating Service → WhatsApp'} />
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.faq.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-12" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.faq.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="space-y-2">
            {c.faq.items.map((item, idx) => (
              <div key={idx} className="border overflow-hidden"
                style={{ borderColor: openFaq === idx ? 'var(--red)' : 'var(--border)', background: 'var(--bg-card)' }}>
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                  <span className="text-sm font-semibold pr-4" style={{ color: 'var(--text-main)' }}>{item.q}</span>
                  <span className="text-lg flex-shrink-0 font-light transition-transform duration-200"
                    style={{ color: 'var(--red)', transform: openFaq === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 border-t" style={{ borderColor: 'var(--border)' }}>
                    <p className="text-sm font-light leading-relaxed pt-4" style={{ color: 'var(--text-muted)' }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.related.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.related.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.related.items.map(s => (
              <Link key={s.slug} href={`/automotive/${s.slug}`}
                className="group border p-6 hover:-translate-y-1 transition-all duration-200 relative overflow-hidden"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" style={{ background: 'var(--red)' }} />
                <div className="text-3xl mb-4">{s.icon}</div>
                <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-main)' }}>{s.title}</div>
                <div className="text-xs font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{s.desc}</div>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--red)' }}>
                  {isAr ? 'اعرف أكثر ←' : 'Learn More →'}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="border p-16 relative overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(200,16,46,0.06),transparent)' }} />
            <div className="relative z-10">
              <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--text-main)' }}>
                {c.finalCta.title.split('\n').map((l, i) => (
                  <span key={i}>{i === 0 ? l : <><br /><span style={{ color: 'var(--red)' }}>{l}</span></>}</span>
                ))}
              </h2>
              <p className="text-sm font-light max-w-md mx-auto mb-10 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{c.finalCta.desc}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <WAButton label={c.finalCta.cta1} large />
                <WAButton label={c.finalCta.cta2} />
                <Link href="/contact" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 border transition-colors"
                  style={{ background: 'transparent', color: 'var(--text-main)', borderColor: 'var(--border)' }}>
                  {c.finalCta.cta3}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
