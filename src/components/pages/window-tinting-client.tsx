'use client'
// src/components/pages/window-tinting-client.tsx

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useApp } from '@/context/AppContext'
import { COMPANY, MALL_LOCATIONS } from '@/lib/constants'

// ─── CONTENT ─────────────────────────────────────────────────────────────────

const content = {
  en: {
    hero: {
      label: 'Official 3M™ Partner Since 2006',
      title1: '3M™ CAR WINDOW',
      title2: 'TINTING UAE',
      subtitle: 'Installed in 55 Minutes by Certified Experts',
      desc: 'Driving in the UAE means battling extreme heat, harsh UV rays, and intense glare. 3M OUR CAR delivers certified, fast, and guaranteed tinting across Dubai and Abu Dhabi — completed in just 55 minutes.',
      cta1: 'Get Instant Prices on WhatsApp',
      cta2: 'Book Tinting Now',
    },
    why: {
      label: 'Why Choose 3M OUR CAR',
      title: 'EXPERIENCE COOLER, SAFER &\nMORE STYLISH DRIVING',
      subtitle: "UAE's #1 3M™ Tinting Experts",
      intro: "Whether you're driving in Dubai traffic or commuting across Abu Dhabi highways, your car interior shouldn't feel like a furnace. Without proper tinting, the cabin overheats, your AC works harder, and your upholstery fades quickly.",
      benefits: [
        { icon: '❄️', title: 'Instant Cooling', desc: 'Feel the difference the moment you get in your car' },
        { icon: '🔆', title: 'Long-Term UV Protection', desc: 'Block 99.9% of UV rays — protect your skin and interior' },
        { icon: '✨', title: 'Premium Finish', desc: 'A sleek, stylish look that enhances your vehicle' },
        { icon: '🏅', title: 'Certified Technicians', desc: 'Every installation done by 3M-certified specialists' },
        { icon: '📅', title: '20 Years Experience', desc: 'Serving UAE drivers since 2006' },
        { icon: '⚖️', title: '100% RTA Legal', desc: 'All tint options fully compliant with UAE RTA regulations' },
      ],
    },
    crystalline: {
      label: 'Our Premium Technology',
      title: 'WHY 3M™ CRYSTALLINE IS THE\nBEST TINT FOR UAE WEATHER',
      points: [
        { icon: '🌡️', stat: '97%', title: 'Infrared Heat Rejection', desc: 'Instant cooling even after hours in the sun' },
        { icon: '📡', stat: '0', title: 'Signal Interference', desc: 'GPS, Salik, and mobile data work perfectly' },
        { icon: '🔆', stat: '99.9%', title: 'UV Protection', desc: 'Prevents cracking, fading, and sun damage' },
        { icon: '🌙', stat: '100%', title: 'Night Visibility', desc: 'Crystal-clear vision — privacy without compromising safety' },
        { icon: '🎨', stat: '∞', title: 'Color Stability', desc: 'Guaranteed not to bubble, fade, or turn purple' },
      ],
    },
    benefits: {
      label: 'Daily Benefits',
      title: '3M™ CAR WINDOW TINTING',
      subtitle: '"Sunglasses for Your Car"',
      intro: "3M™ tinting doesn't just cool your vehicle — it transforms your driving experience.",
      items: [
        { icon: '🌡️', title: 'Up to 97% IR Heat Rejection', desc: 'Dramatically reduces cabin temperature instantly' },
        { icon: '🔆', title: 'Blocks 99.9% UV Rays', desc: 'Protects skin and prevents interior fading' },
        { icon: '😎', title: 'Reduces Glare by up to 50%', desc: 'Safer driving — especially at sunrise and sunset' },
        { icon: '🔒', title: 'Enhanced Privacy', desc: 'See out clearly — others cannot see in' },
        { icon: '⛽', title: 'Improves Fuel Efficiency', desc: 'Less AC load means less fuel consumption' },
        { icon: '🛡️', title: 'Strengthens Glass', desc: 'Holds shattered glass together for added safety' },
      ],
    },
    comparison: {
      label: 'Film Comparison',
      title: '3M™ TINT SERIES COMPARED',
      subtitle: 'Choose the right film for your needs and budget',
      headers: ['Feature', '3M™ Crystalline', '3M™ Ceramic IR', '3M™ Color Stable', '3M™ FX ST'],
      rows: [
        { feature: 'Technology', vals: ['200+ layer nano-optical', 'Nano-ceramic IR absorbing', 'Nano-carbon + ceramic', 'Dyed charcoal'] },
        { feature: 'IR Heat Rejection', vals: ['Up to 97%', 'Up to 95%', 'Moderate', 'Basic'] },
        { feature: 'TSER', vals: ['Up to 71%', 'Up to 66%', 'Up to 57%', 'Up to 44%'] },
        { feature: 'Appearance', vals: ['Deep premium black', 'Neutral modern tone', 'Rich charcoal', 'Classic charcoal'] },
        { feature: 'Signal Interference', vals: ['None', 'None', 'None', 'None'] },
        { feature: 'Warranty', vals: ['5 Years', '5 Years', '5 Years', '2 Years'] },
      ],
      best: 0,
      cta: 'View 3M™ Tint Packages on WhatsApp',
    },
    mobile: {
      label: 'Doorstep Service',
      title: 'MOBILE CAR TINTING IN\nDUBAI & ABU DHABI',
      desc: 'Searching for mobile car tinting Dubai or mobile tinting Abu Dhabi? 3M OUR CAR brings certified 3M™ tinting directly to your home, office, or parking area. Enjoy professional installation without visiting a mall or workshop.',
      points: ['Your Home', 'Your Office', 'Your Parking Area'],
      cta: 'Book Mobile Tinting on WhatsApp',
    },
    locations: {
      label: 'Find Us',
      title: '9 MALL LOCATIONS ACROSS\nDUBAI & ABU DHABI',
      desc: "If you searched for car tinting near me, one of our locations is already close to you.",
      convenience: {
        title: 'TINT YOUR CAR WHILE YOU SHOP',
        desc: "Simply drop off your car and enjoy your time in the mall — shop, dine, or watch a movie. By the time you're done, your car will be fully tinted and ready to drive, professionally installed in just 55 minutes.",
      },
    },
    whyUs: {
      label: 'Our Advantages',
      title: 'WHY DRIVERS CHOOSE\n3M OUR CAR',
      points: [
        '20 Years of Experience',
        'Official 3M™ Partner',
        'Mall-Based Tinting — 9 Locations',
        'Tint Completed in 55 Minutes',
        'Premium Customer Service',
        'Long-Term Warranty (5 Years or 2 Years Based on Film)',
        '100% Legal RTA-Approved Tint Options',
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'FREQUENTLY ASKED\nQUESTIONS',
      items: [
        {
          q: 'How much does car window tinting cost in Dubai & Abu Dhabi?',
          a: 'Prices vary based on film type and vehicle size. Typically AED 600 to AED 3,000+, depending on your choice of 3M™ film. Contact us on WhatsApp for the best current offers.',
        },
        {
          q: 'What is the 3M™ car tinting price in UAE for 2026?',
          a: 'Typically AED 600 to AED 3,000+, depending on film type and vehicle size. WhatsApp us for an exact quote for your specific vehicle.',
        },
        {
          q: 'Is 3M™ tinting legal in the UAE?',
          a: 'Yes — we offer 100% RTA-legal tinting options. Our team will guide you to the right shade that complies with UAE regulations.',
        },
        {
          q: 'How much darkness is allowed by RTA?',
          a: 'Up to 50% darkness (VLT) is allowed by RTA for side and rear windows. Our team will advise you on the best compliant options.',
        },
        {
          q: 'How long does tinting take?',
          a: 'Most installations are completed in just 55 minutes — perfect for getting it done while you shop at any of our 9 mall locations.',
        },
        {
          q: 'Does 3M™ tint reduce heat?',
          a: 'Yes — the 3M™ Crystalline series offers up to 97% infrared heat rejection, making it the best tinting option for UAE weather.',
        },
        {
          q: 'Will tinting affect my GPS, Salik, or mobile signal?',
          a: 'No — all 3M™ films are non-metallic and cause zero signal interference with GPS, Salik, satellite radio, or mobile data.',
        },
        {
          q: 'Do you offer mobile tinting?',
          a: 'Yes — we offer mobile tinting anywhere in Dubai or Abu Dhabi. We come to your home, office, or parking area.',
        },
      ],
    },
    finalCta: {
      title: 'READY FOR A COOLER, SAFER\n& MORE STYLISH DRIVE?',
      desc: 'Get premium 3M™ tinting installed by certified experts with 20 years of experience.',
      cta1: 'Tint Your Car in 55 Minutes → WhatsApp NOW',
      cta2: 'WhatsApp Us for Prices',
      cta3: 'Book at a Mall Location',
    },
    related: {
      title: 'ADDITIONAL PREMIUM\nCAR CARE SERVICES',
      label: 'Enhance & Protect',
      items: [
        { slug: 'ppf', icon: '🛡️', title: 'Paint Protection Film (PPF)', desc: 'Invisible shield against stone chips, scratches and environmental damage.' },
        { slug: 'ceramic-coating', icon: '✨', title: 'Ceramic Coating', desc: 'Long-lasting shine and hydrophobic nano-ceramic protection.' },
        { slug: 'car-detailing', icon: '🚗', title: 'Professional Car Detailing', desc: 'Interior and exterior detailing for a pristine, like-new finish.' },
        { slug: 'car-polishing', icon: '💎', title: 'Professional Car Polishing', desc: 'Paint correction and machine polishing to restore showroom shine.' },
      ],
    },
  },

  ar: {
    hero: {
      label: 'شريك 3M™ الرسمي منذ 2006',
      title1: 'تظليل زجاج السيارة',
      title2: '3M™ في الإمارات',
      subtitle: 'التركيب في 55 دقيقة بواسطة خبراء معتمدين',
      desc: 'القيادة في الإمارات تعني مواجهة حرارة شديدة وأشعة فوق بنفسجية قاسية وضوء ساطع. 3M OUR CAR تقدم تظليلاً معتمداً وسريعاً ومضموناً في دبي وأبوظبي — يكتمل في 55 دقيقة فقط.',
      cta1: 'احصل على أسعار فورية عبر واتساب',
      cta2: 'احجز التظليل الآن',
    },
    why: {
      label: 'لماذا تختار 3M OUR CAR',
      title: 'اختبر القيادة الأكثر برودة\nوأماناً وأناقة',
      subtitle: 'خبراء التظليل 3M™ الأوائل في الإمارات',
      intro: 'سواء كنت تقود في زحام دبي أو تتنقل عبر طرق أبوظبي، لا ينبغي أن يتحول مقصورة سيارتك إلى فرن. بدون التظليل المناسب، ترتفع الحرارة، ويعمل مكيفك بجهد أكبر، ويتلف مقود سيارتك بسرعة.',
      benefits: [
        { icon: '❄️', title: 'تبريد فوري', desc: 'اشعر بالفرق فور دخولك السيارة' },
        { icon: '🔆', title: 'حماية UV طويلة الأمد', desc: 'يحجب 99.9% من الأشعة فوق البنفسجية — يحمي بشرتك ومقصورتك' },
        { icon: '✨', title: 'لمسة فاخرة', desc: 'مظهر أنيق يعزز جماليات سيارتك' },
        { icon: '🏅', title: 'فنيون معتمدون', desc: 'كل تركيب يتم بواسطة متخصصين معتمدين من 3M' },
        { icon: '📅', title: '20 عاماً من الخبرة', desc: 'نخدم سائقي الإمارات منذ 2006' },
        { icon: '⚖️', title: '100% قانوني وفق هيئة الطرق', desc: 'جميع خيارات التظليل متوافقة مع اشتراطات RTA الإماراتية' },
      ],
    },
    crystalline: {
      label: 'تقنيتنا المتميزة',
      title: 'لماذا 3M™ كريستالين هو\nأفضل تظليل لطقس الإمارات',
      points: [
        { icon: '🌡️', stat: '97%', title: 'رفض الأشعة تحت الحمراء', desc: 'تبريد فوري حتى بعد ساعات تحت الشمس' },
        { icon: '📡', stat: '0', title: 'تداخل في الإشارات', desc: 'GPS وسالك والبيانات تعمل بشكل مثالي' },
        { icon: '🔆', stat: '99.9%', title: 'حماية UV', desc: 'يمنع التشقق والبهتان وأضرار الشمس' },
        { icon: '🌙', stat: '100%', title: 'رؤية ليلية', desc: 'وضوح كريستالي — خصوصية دون المساس بالأمان' },
        { icon: '🎨', stat: '∞', title: 'ثبات اللون', desc: 'مضمون عدم الفقاعات أو البهتان أو التحول للأرجواني' },
      ],
    },
    benefits: {
      label: 'المزايا اليومية',
      title: 'تظليل زجاج السيارة 3M™',
      subtitle: '"نظارة شمسية لسيارتك"',
      intro: 'تظليل 3M™ لا يبرد سيارتك فحسب — بل يحوّل تجربة القيادة بالكامل.',
      items: [
        { icon: '🌡️', title: 'رفض حراري يصل إلى 97%', desc: 'يخفض درجة حرارة المقصورة بشكل ملحوظ وفوري' },
        { icon: '🔆', title: 'يحجب 99.9% من الأشعة UV', desc: 'يحمي البشرة ويمنع بهتان المقصورة الداخلية' },
        { icon: '😎', title: 'يقلل الوهج بنسبة 50%', desc: 'قيادة أكثر أماناً — خاصة عند الشروق والغروب' },
        { icon: '🔒', title: 'خصوصية معززة', desc: 'ترى بوضوح من الداخل — الآخرون لا يرونك' },
        { icon: '⛽', title: 'تحسين استهلاك الوقود', desc: 'تقليل حمل المكيف يعني استهلاك وقود أقل' },
        { icon: '🛡️', title: 'تقوية الزجاج', desc: 'يثبت الزجاج المتكسر في مكانه لمزيد من الأمان' },
      ],
    },
    comparison: {
      label: 'مقارنة الأفلام',
      title: 'مقارنة سلاسل 3M™',
      subtitle: 'اختر الفيلم المناسب لاحتياجاتك وميزانيتك',
      headers: ['الميزة', '3M™ كريستالين', '3M™ سيراميك IR', '3M™ كولور ستيبل', '3M™ FX ST'],
      rows: [
        { feature: 'التقنية', vals: ['200+ طبقة نانو بصرية', 'سيراميك نانو ماص للأشعة تحت الحمراء', 'نانو كربون + سيراميك', 'فحم مصبوغ'] },
        { feature: 'رفض الأشعة تحت الحمراء', vals: ['حتى 97%', 'حتى 95%', 'متوسط', 'أساسي'] },
        { feature: 'TSER', vals: ['حتى 71%', 'حتى 66%', 'حتى 57%', 'حتى 44%'] },
        { feature: 'المظهر', vals: ['أسود فاخر عميق', 'نبرة حديثة محايدة', 'فحمي غني', 'فحمي كلاسيكي'] },
        { feature: 'التداخل مع الإشارات', vals: ['لا يوجد', 'لا يوجد', 'لا يوجد', 'لا يوجد'] },
        { feature: 'الضمان', vals: ['5 سنوات', '5 سنوات', '5 سنوات', 'سنتان'] },
      ],
      best: 0,
      cta: 'عرض باقات التظليل 3M™ على واتساب',
    },
    mobile: {
      label: 'خدمة على بابك',
      title: 'تظليل متنقل في\nدبي وأبوظبي',
      desc: 'تبحث عن تظليل متنقل في دبي أو أبوظبي؟ 3M OUR CAR تجلب تظليل 3M™ المعتمد مباشرة إلى منزلك أو مكتبك أو موقف سيارتك. استمتع بتركيب احترافي دون زيارة مول أو ورشة.',
      points: ['منزلك', 'مكتبك', 'موقف سيارتك'],
      cta: 'احجز التظليل المتنقل عبر واتساب',
    },
    locations: {
      label: 'أين نحن',
      title: '9 مواقع في المراكز التجارية\nبدبي وأبوظبي',
      desc: 'إذا بحثت عن تظليل سيارة بالقرب مني، فأحد مواقعنا قريب منك بالفعل.',
      convenience: {
        title: 'ظلّل سيارتك بينما تتسوق',
        desc: 'ببساطة أسلّم سيارتك واستمتع بوقتك في المول — تسوق، أو تناول الطعام، أو شاهد فيلماً. بحلول الوقت الذي تنتهي فيه، ستكون سيارتك مظللة بالكامل وجاهزة للقيادة، مركّبة احترافياً في 55 دقيقة فقط.',
      },
    },
    whyUs: {
      label: 'مميزاتنا',
      title: 'لماذا يختار السائقون\n3M OUR CAR',
      points: [
        '20 عاماً من الخبرة',
        'شريك رسمي معتمد من 3M™',
        'تظليل في المراكز التجارية — 9 مواقع',
        'اكتمال التظليل في 55 دقيقة',
        'خدمة عملاء متميزة',
        'ضمان طويل الأمد (5 سنوات أو سنتان حسب نوع الفيلم)',
        'خيارات تظليل 100% قانونية معتمدة من هيئة الطرق',
      ],
    },
    faq: {
      label: 'الأسئلة الشائعة',
      title: 'الأسئلة\nالشائعة',
      items: [
        {
          q: 'كم تبلغ تكلفة تظليل نوافذ السيارة في دبي وأبوظبي؟',
          a: 'تتفاوت الأسعار بحسب نوع الفيلم وحجم السيارة. عادةً من 600 إلى أكثر من 3,000 درهم. تواصل معنا عبر واتساب للحصول على أفضل العروض.',
        },
        {
          q: 'ما هو سعر تظليل 3M™ في الإمارات لعام 2026؟',
          a: 'عادةً من 600 إلى أكثر من 3,000 درهم حسب نوع الفيلم وحجم السيارة. راسلنا على واتساب للحصول على عرض سعر دقيق لسيارتك.',
        },
        {
          q: 'هل تظليل 3M™ قانوني في الإمارات؟',
          a: 'نعم — نقدم خيارات تظليل متوافقة 100% مع اشتراطات هيئة الطرق والمواصلات. فريقنا سيرشدك إلى الدرجة الصحيحة المتوافقة مع اللوائح.',
        },
        {
          q: 'ما هو الحد الأقصى لدرجة التظليل المسموح به من هيئة الطرق؟',
          a: 'تسمح هيئة الطرق بدرجة تعتيم تصل إلى 50% للنوافذ الجانبية والخلفية. فريقنا سيساعدك في اختيار أفضل الخيارات المتوافقة.',
        },
        {
          q: 'كم يستغرق تركيب التظليل؟',
          a: 'تكتمل معظم عمليات التركيب في 55 دقيقة فقط — مثالي للقيام به أثناء تسوقك في أي من مواقعنا التسعة.',
        },
        {
          q: 'هل يقلل تظليل 3M™ من الحرارة؟',
          a: 'نعم — يوفر 3M™ كريستالين رفضاً للأشعة تحت الحمراء يصل إلى 97%، مما يجعله أفضل خيار تظليل لطقس الإمارات.',
        },
        {
          q: 'هل يؤثر التظليل على GPS أو سالك أو إشارة الجوال؟',
          a: 'لا — جميع أفلام 3M™ غير معدنية ولا تتسبب في أي تداخل مع GPS أو سالك أو الراديو الفضائي أو بيانات الجوال.',
        },
        {
          q: 'هل تقدمون خدمة التظليل المتنقل؟',
          a: 'نعم — نقدم التظليل المتنقل في أي مكان بدبي أو أبوظبي. نأتي إليك في منزلك أو مكتبك أو موقف سيارتك.',
        },
      ],
    },
    finalCta: {
      title: 'مستعد لقيادة أكثر برودة\nوأماناً وأناقة؟',
      desc: 'احصل على تظليل 3M™ الفاخر المركّب بواسطة خبراء معتمدين بخبرة 20 عاماً.',
      cta1: 'ظلّل سيارتك في 55 دقيقة ← واتساب الآن',
      cta2: 'راسلنا على واتساب للأسعار',
      cta3: 'احجز في موقع قريب منك',
    },
    related: {
      title: 'خدمات رعاية\nالسيارة الإضافية',
      label: 'عزّز وحمِّ',
      items: [
        { slug: 'ppf', icon: '🛡️', title: 'فيلم حماية الطلاء (PPF)', desc: 'درع شفاف ضد رشقات الحجارة والخدوش والأضرار البيئية.' },
        { slug: 'ceramic-coating', icon: '✨', title: 'الطلاء السيراميكي', desc: 'لمعان دائم وحماية نانو سيراميكية مائية.' },
        { slug: 'car-detailing', icon: '🚗', title: 'تفصيل احترافي للسيارة', desc: 'تفصيل داخلي وخارجي كامل لمظهر نظيف كالجديد.' },
        { slug: 'car-polishing', icon: '💎', title: 'تلميع احترافي للسيارة', desc: 'تصحيح الطلاء وتلميع آلي لاستعادة اللمعان كما في الصالة.' },
      ],
    },
  },
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export function WindowTintingClient() {
  const { lang } = useApp()
  const isAr = lang === 'ar'
  const c = isAr ? content.ar : content.en
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const waMsg = encodeURIComponent(
    isAr
      ? 'مرحباً! أود الاستفسار عن أسعار تظليل زجاج السيارة 3M™.'
      : 'Hello! I would like to get prices for 3M™ car window tinting.'
  )
  const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${waMsg}`

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[100svh] flex items-center overflow-hidden pt-16"
        style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#1a0005 60%,var(--bg-page) 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 20px)', backgroundSize: '20px 20px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border" style={{ background: 'rgba(200,16,46,0.12)', borderColor: 'rgba(200,16,46,0.3)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--red)' }} />
                <span className="text-xs font-semibold tracking-[2px] uppercase" style={{ color: 'var(--red)' }}>{c.hero.label}</span>
              </div>

              <h1 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', color: 'var(--text-main)' }}>
                {c.hero.title1}<br />
                <span style={{ color: 'var(--red)' }}>{c.hero.title2}</span>
              </h1>

              <p className="font-heading text-2xl mb-4 tracking-wide" style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem,2vw,1.4rem)' }}>
                {c.hero.subtitle}
              </p>

              <p className="text-sm font-light leading-relaxed mb-8 max-w-lg" style={{ color: 'var(--text-muted)' }}>
                {c.hero.desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase px-6 py-4 transition-colors"
                  style={{ background: '#25D366', color: 'white' }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {c.hero.cta1}
                </a>
                <Link href="/contact" className="text-xs font-semibold tracking-widest uppercase px-6 py-4 transition-colors border" style={{ background: 'var(--red)', color: 'white', borderColor: 'var(--red)' }}>
                  {c.hero.cta2}
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div
                className="relative border overflow-hidden"
                style={{
                  width: '100%',
                  maxWidth: '360px',
                  aspectRatio: '9/16',
                  borderColor: 'var(--border)',
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/videos/tinting-hero.mp4"
                />
                <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: 'var(--red)' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.why.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-2" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--text-main)' }}>
            {c.why.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
          </h2>
          <p className="font-heading text-2xl mb-4" style={{ color: 'var(--red)' }}>{c.why.subtitle}</p>
          <p className="text-sm font-light leading-relaxed max-w-2xl mb-12" style={{ color: 'var(--text-muted)' }}>{c.why.intro}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {c.why.benefits.map((b) => (
              <div key={b.title} className="border p-6" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="text-3xl mb-4">{b.icon}</div>
                <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-main)' }}>{b.title}</div>
                <div className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-6" style={{ color: 'var(--text-muted)' }}>
            {isAr ? 'صور التظليل' : 'Tinting Gallery'}
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {[1, 2].map((i) => (
              <div key={i} className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <Image src={`/images/tinting/tinting-${i}.jpg`} alt={`3M window tinting UAE ${i}`} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <Image src={`/images/tinting/tinting-${i}.jpg`} alt={`3M window tinting UAE ${i}`} fill className="object-cover" sizes="(min-width: 768px) 33vw, 50vw" />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRYSTALLINE HIGHLIGHTS ────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.crystalline.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-12" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--text-main)' }}>
            {c.crystalline.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {c.crystalline.points.map((p) => (
              <div key={p.title} className="border p-6 text-center" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="text-3xl mb-3">{p.icon}</div>
                <div className="font-heading text-4xl mb-2" style={{ color: 'var(--red)' }}>{p.stat}</div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-main)' }}>{p.title}</div>
                <div className="text-[11px] font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DAILY BENEFITS ────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.benefits.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-1" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--text-main)' }}>
            {c.benefits.title}
          </h2>
          <p className="font-heading text-2xl mb-4" style={{ color: 'var(--red)' }}>{c.benefits.subtitle}</p>
          <p className="text-sm font-light leading-relaxed max-w-2xl mb-12" style={{ color: 'var(--text-muted)' }}>{c.benefits.intro}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {c.benefits.items.map((b) => (
              <div key={b.title} className="border p-6 flex gap-4 items-start" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="text-2xl flex-shrink-0">{b.icon}</div>
                <div>
                  <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-main)' }}>{b.title}</div>
                  <div className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden" style={{ aspectRatio: '16/6' }}>
            <Image
              src="/images/tinting/tinting-before-after.jpg"
              alt="3M window tinting before and after heat comparison"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ──────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.comparison.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-3" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--text-main)' }}>
            {c.comparison.title}
          </h2>
          <p className="text-sm font-light mb-10" style={{ color: 'var(--text-muted)' }}>{c.comparison.subtitle}</p>

          <div className="relative overflow-hidden mb-8" style={{ aspectRatio: '16/4' }}>
            <Image
              src="/images/tinting/tinting-shade-samples.jpg"
              alt="3M window tint shade comparison samples"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  {c.comparison.headers.map((h, i) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-xs font-semibold tracking-widest uppercase border-b"
                      style={{
                        background: i === c.comparison.best + 1 ? 'var(--red)' : 'var(--bg-card)',
                        color: i === c.comparison.best + 1 ? 'white' : 'var(--text-muted)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      {h}
                      {i === c.comparison.best + 1 && (
                        <span className="block text-[9px] tracking-widest mt-0.5 font-normal opacity-80">
                          {isAr ? '★ الأفضل للإمارات' : '★ Best for UAE'}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.comparison.rows.map((row, ri) => (
                  <tr key={row.feature} style={{ background: ri % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-page)' }}>
                    <td className="px-4 py-3 text-xs font-semibold uppercase tracking-wide border-b" style={{ color: 'var(--text-main)', borderColor: 'var(--border)' }}>
                      {row.feature}
                    </td>
                    {row.vals.map((val, vi) => (
                      <td
                        key={vi}
                        className="px-4 py-3 text-xs font-light border-b"
                        style={{
                          color: vi === c.comparison.best ? 'var(--red)' : 'var(--text-muted)',
                          borderColor: 'var(--border)',
                          fontWeight: vi === c.comparison.best ? 600 : 300,
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-colors"
              style={{ background: '#25D366', color: 'white' }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              {c.comparison.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ── MOBILE TINTING ────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.mobile.label}</p>
            <h2 className="font-heading leading-none tracking-wide mb-6" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--text-main)' }}>
              {c.mobile.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
            </h2>
            <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>{c.mobile.desc}</p>
            <div className="space-y-3 mb-8">
              {c.mobile.points.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <div className="w-2 h-2 flex-shrink-0" style={{ background: 'var(--red)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--text-main)' }}>{p}</span>
                </div>
              ))}
            </div>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase px-8 py-4"
              style={{ background: '#25D366', color: 'white' }}>
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              {c.mobile.cta}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image src={`/images/tinting/tinting-mobile-${i}.jpg`} alt={`3M mobile tinting service Dubai ${i}`} fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.locations.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--text-main)' }}>
            {c.locations.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
          </h2>
          <p className="text-sm font-light mb-10" style={{ color: 'var(--text-muted)' }}>{c.locations.desc}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
            {MALL_LOCATIONS.map((loc) => (
              <a
                key={loc.name}
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border px-4 py-3 flex items-center gap-3 transition-all group"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--red)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <div className="w-2 h-2 flex-shrink-0" style={{ background: 'var(--red)' }} />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-main)' }}>
                    {isAr ? loc.nameAr : loc.name}
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                    {isAr ? loc.cityAr : loc.city}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Convenience callout */}
          <div className="border p-10 relative overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--red)', borderLeftWidth: '4px' }}>
            <h3 className="font-heading text-3xl tracking-wide mb-3" style={{ color: 'var(--text-main)' }}>
              {c.locations.convenience.title}
            </h3>
            <p className="text-sm font-light leading-relaxed max-w-3xl" style={{ color: 'var(--text-muted)' }}>
              {c.locations.convenience.desc}
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--red)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3 text-white/70">{c.whyUs.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10 text-white" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
            {c.whyUs.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {c.whyUs.points.map((p) => (
              <div key={p} className="flex items-start gap-3 bg-white/10 border border-white/20 px-5 py-4">
                <span className="text-white font-bold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-sm text-white font-light leading-relaxed">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.faq.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-12" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--text-main)' }}>
            {c.faq.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
          </h2>
          <div className="space-y-2">
            {c.faq.items.map((item, idx) => (
              <div key={idx} className="border overflow-hidden" style={{ borderColor: openFaq === idx ? 'var(--red)' : 'var(--border)', background: 'var(--bg-card)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  <span className="text-sm font-semibold pr-4" style={{ color: 'var(--text-main)' }}>{item.q}</span>
                  <span
                    className="text-lg flex-shrink-0 transition-transform duration-200 font-light"
                    style={{ color: 'var(--red)', transform: openFaq === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >+</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 border-t" style={{ borderColor: 'var(--border)' }}>
                    <p className="text-sm font-light leading-relaxed pt-4" style={{ color: 'var(--text-muted)' }}>{item.a}</p>
                    {idx === 0 && (
                      <a href={waUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-xs font-semibold tracking-widest uppercase px-4 py-2"
                        style={{ background: '#25D366', color: 'white' }}>
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        {isAr ? 'راسلنا على واتساب' : 'WhatsApp Us'}
                      </a>
                    )}
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
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--text-main)' }}>
            {c.related.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.related.items.map((s) => (
              <Link
                key={s.slug}
                href={`/automotive/${s.slug}`}
                className="group border p-6 hover:-translate-y-1 transition-all duration-200 relative overflow-hidden"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
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
                {c.finalCta.title.split('\n').map((line, i) => (
                  <span key={i}>{i === 0 ? line : <><br /><span style={{ color: 'var(--red)' }}>{line}</span></>}</span>
                ))}
              </h2>
              <p className="text-sm font-light max-w-md mx-auto mb-10 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {c.finalCta.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={waUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase px-8 py-4"
                  style={{ background: '#25D366', color: 'white' }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  {c.finalCta.cta1}
                </a>
                <Link href="/contact"
                  className="text-xs font-semibold tracking-widest uppercase px-8 py-4 border transition-colors"
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
