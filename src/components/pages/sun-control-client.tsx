'use client'
// src/components/pages/sun-control-client.tsx

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useApp } from '@/context/AppContext'
import { COMPANY, MALL_LOCATIONS } from '@/lib/constants'
import { SplitMediaSection } from '@/components/ui/SplitMediaSection'

const content = {
  en: {
    hero: {
      label: 'Official 3M™ Dealer Since 2006',
      title1: '3M™ SUN CONTROL',
      title2: 'WINDOW FILM',
      title3: 'UAE',
      subtitle: 'Homes · Villas · Offices · Commercial Buildings',
      desc: 'Enjoy natural light without the heat, glare, or UV damage. 3M OUR CAR, the UAE\'s leading 3M-certified dealer since 2006, provides premium 3M window film solutions for homes, villas, offices, and commercial buildings.',
      searches: '3M sun control film Dubai · residential window tinting Dubai · commercial window tinting Abu Dhabi · heat control window film UAE',
      cta1: 'Book Home or Office Window Tinting Now',
      cta2: 'Get a Free On-Site Assessment on WhatsApp',
    },
    problems: {
      label: 'The UAE Challenge',
      title: 'WHY UAE HOMES & OFFICES\nNEED 3M SUN CONTROL FILM',
      desc: "The UAE's intense sunlight brings challenges that affect comfort, health, and energy costs every single day.",
      items: [
        { icon: '🌡️', title: 'Excessive Indoor Heat', desc: 'Windows act as heat traps — making rooms unbearably hot' },
        { icon: '💸', title: 'High AC Bills', desc: 'More heat gain means AC works harder — costing you more' },
        { icon: '🛋️', title: 'UV Damage to Interiors', desc: 'Furniture, flooring, and decor fade and deteriorate faster' },
        { icon: '💻', title: 'Annoying Screen Glare', desc: 'Harsh sunlight makes TVs and monitors unusable' },
        { icon: '🔆', title: 'UV Skin Exposure', desc: 'Indoor UV exposure affects skin health over time' },
      ],
      solution: 'Our UV protection window film and UV blocking window film solutions help you enjoy natural light while staying fully protected.',
    },
    why: {
      label: 'Why Choose 3M OUR CAR',
      title: 'OFFICIAL 3M™ DEALER SINCE 2006 —\nTHE UAE\'S MOST TRUSTED',
      desc: 'For nearly 20 years, 3M OUR CAR has been the UAE\'s trusted provider of genuine 3M window film products.',
      points: [
        { icon: '🏅', stat: '20+', label: 'Years Experience', desc: 'Trusted since 2006' },
        { icon: '🌡️', stat: '78%', label: 'Heat Rejection', desc: 'Maximum solar heat blocked' },
        { icon: '🔆', stat: '99.9%', label: 'UV Protection', desc: 'Blocks harmful UV rays' },
        { icon: '⚡', stat: '↓', label: 'Energy Savings', desc: 'Significant AC load reduction' },
      ],
      features: [
        'Genuine 3M™ Sun Control Films',
        'Up to 78% heat rejection',
        'Up to 99.9% UV protection',
        'Energy savings with reduced AC load',
        'Non-reflective, elegant appearance',
        'Long-term manufacturer warranty',
        'Professional, bubble-free installation',
      ],
      cta: 'Get a Free On-Site Assessment on WhatsApp',
    },
    residential: {
      label: 'For Your Home',
      title: 'RESIDENTIAL WINDOW TINTING —\nPROTECT YOUR HOME & FAMILY',
      benefits: [
        {
          icon: '❄️',
          title: 'Reduce Heat & Lower Electricity Bills',
          desc: '3M Sun Control Films help reduce heat from windows, keeping your villa cooler and lowering AC usage — especially during peak UAE summers.',
        },
        {
          icon: '🛋️',
          title: 'Prevent Fading & Interior Damage',
          desc: 'Our films block 99.9% of UV rays, protecting curtains, fabrics, wooden flooring, carpets, rugs, artwork, photos, and leather furniture.',
        },
        {
          icon: '💻',
          title: 'Reduce Glare Without Darkening',
          desc: 'Enjoy TV, laptops, and screens without harsh sunlight intruding into your living space.',
        },
        {
          icon: '👨‍👩‍👧', 
          title: 'Protect Your Family Indoors',
          desc: 'Daily UV exposure can affect skin health. Our UV protection window film keeps your family safe inside your home.',
        },
      ],
      cta: 'Book Home Tinting on WhatsApp',
    },
    commercial: {
      label: 'For Your Business',
      title: 'COMMERCIAL WINDOW TINTING —\nDUBAI & ABU DHABI',
      benefits: [
        {
          icon: '💸',
          title: 'Lower Cooling Costs',
          desc: 'Offices and buildings in the UAE face extreme heat gain. Our films provide lower AC load, reduced electricity bills, and more comfortable workspaces.',
        },
        {
          icon: '📊',
          title: 'Improve Productivity',
          desc: 'Reduced glare means better screen visibility, fewer distractions, and a more comfortable working environment for your team.',
        },
        {
          icon: '🏢',
          title: 'Maintain Modern Clear Appearance',
          desc: "3M films enhance your building's professional look without darkening the glass — maintaining the open, airy feel of modern offices.",
        },
      ],
      cta: 'Book Office Tinting on WhatsApp',
    },
    beforeAfter: {
      label: 'The Difference',
      title: 'SEE THE DIFFERENCE —\nBEFORE & AFTER',
      before: 'Before — Without 3M Sun Control Film',
      after: 'After — With 3M Sun Control Film',
      desc: 'The same room, the same window. The only difference is 3M Sun Control Film — blocking heat, eliminating glare, and protecting everything inside.',
    },
    filmOptions: {
      label: '3M Film Series',
      title: '3M™ SUN CONTROL\nFILM OPTIONS',
      subtitle: 'Choose the right film for your space',
      items: [
        {
          name: 'Prestige Series',
          tag: 'PREMIUM',
          tagColor: 'red',
          subtitle: 'Premium Heat Rejection',
          desc: 'Crystal-clear film that blocks heat without changing the look of your glass. The premium choice for luxury villas and residences.',
          specs: [
            { label: 'Visible Light', value: 'Up to 70%' },
            { label: 'Heat Rejection', value: 'Up to 60%' },
            { label: 'Reflectivity', value: 'Very Low' },
          ],
          ideal: 'Ideal for luxury villas',
          highlight: true,
        },
        {
          name: 'Ceramic Series',
          tag: 'CLARITY',
          tagColor: 'neutral',
          subtitle: 'Nano-Ceramic Clarity',
          desc: 'Advanced ceramic technology for outstanding optical clarity and superior heat performance. Perfect for modern homes and offices.',
          specs: [
            { label: 'Visible Light', value: 'Up to 50%' },
            { label: 'Heat Rejection', value: 'Up to 59%' },
            { label: 'Clarity', value: 'Excellent' },
          ],
          ideal: 'Perfect for modern homes & offices',
          highlight: false,
        },
        {
          name: 'Night Vision Series',
          tag: 'PRIVACY',
          tagColor: 'neutral',
          subtitle: 'Privacy + Heat Control',
          desc: 'Maximum heat rejection and glare reduction with enhanced daytime privacy. Ideal for street-facing and exposed windows.',
          specs: [
            { label: 'Visible Light', value: 'Up to 35%' },
            { label: 'Heat Rejection', value: 'Up to 71%' },
            { label: 'Privacy', value: 'Enhanced' },
          ],
          ideal: 'Ideal for street-facing windows',
          highlight: false,
        },
      ],
    },
    energy: {
      label: 'Energy Efficiency',
      title: 'ENERGY SAVING WINDOW FILM\nFOR UAE HOMES & OFFICES',
      desc: 'Our films significantly reduce heat gain, helping you cut electricity bills and improve indoor comfort. This makes them one of the most effective energy saving window film solutions in the UAE.',
      stats: [
        { num: '78%', label: 'Max Heat Rejection' },
        { num: '99.9%', label: 'UV Blocked' },
        { num: '↓60%', label: 'AC Load Reduced' },
        { num: '1–3', label: 'Hours Installation' },
      ],
    },
    whyUs: {
      label: 'Our Advantages',
      title: 'WHY CUSTOMERS CHOOSE\n3M OUR CAR',
      points: [
        'Official 3M™ Window Film Installers',
        '20 Years of Experience',
        'Professional On-Site Installation',
        'Heat Rejection Up to 78%',
        'UV Protection Up to 99.9%',
        'Elegant, Non-Reflective Appearance',
        'Long-Term Warranty',
        'Fast, Clean & Hassle-Free Service',
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'FREQUENTLY ASKED\nQUESTIONS',
      items: [
        { q: 'How much heat does 3M Sun Control Film block?', a: 'Up to 78% of solar heat, depending on the film type selected. The Night Vision Series offers the highest heat rejection at 71%, while the Prestige Series provides 60% with maximum clarity.' },
        { q: 'Will it make my home dark?', a: 'No. 3M films are specifically engineered to allow generous natural light while reducing heat and glare. The Prestige Series allows up to 70% of visible light through.' },
        { q: 'Will it change the appearance of my villa?', a: 'The Prestige and Ceramic Series films maintain a completely clear, elegant look. They are virtually undetectable while providing maximum protection.' },
        { q: 'How long does installation take?', a: 'Most homes and offices take 1–3 hours depending on the number of windows and access conditions. Our professional team works cleanly and efficiently.' },
        { q: 'Does it reduce electricity bills?', a: 'Yes — by significantly reducing heat gain through windows, your AC runs less frequently, directly lowering your electricity consumption.' },
        { q: 'Do you offer on-site assessments?', a: 'Yes — we offer free on-site assessments for homes, villas, and commercial properties. Our specialist will recommend the right film for your specific windows and needs.' },
        { q: 'Is 3M window film removable?', a: 'Yes. 3M window films can be professionally removed without damaging the glass when needed.' },
      ],
    },
    finalCta: {
      title: 'READY TO KEEP YOUR HOME\nOR OFFICE COOLER?',
      desc: 'Enjoy natural light without heat, glare, or UV damage. Choose the UAE\'s most trusted 3M-certified experts — 3M OUR CAR.',
      cta1: 'Book Now — Home or Office Tinting on WhatsApp',
      cta2: 'WhatsApp Us for Instant Booking',
      cta3: 'Find Your Nearest Location',
    },
    related: {
      label: 'More Window Film Solutions',
      title: 'EXPLORE OUR OTHER\nWINDOW FILM SOLUTIONS',
      items: [
        { href: '/residential/safety-security', icon: '🔒', title: 'Safety & Security Films', desc: 'Hold shattered glass together — protect against break-ins, storms, and accidents.' },
        { href: '/residential/decorative', icon: '🎨', title: 'Decorative Window Films', desc: 'Frosted, patterned, and branded films for privacy and aesthetics.' },
        { href: '/marine/sun-control', icon: '⛵', title: 'Marine Sun Control Films', desc: '3M marine-grade sun control for yachts and vessels.' },
        { href: '/automotive/window-tinting', icon: '🪟', title: 'Automotive Window Tinting', desc: '3M car tinting in 55 minutes at 9 mall locations.' },
      ],
    },
  },

  ar: {
    hero: {
      label: 'وكيل 3M™ الرسمي منذ 2006',
      title1: 'فيلم 3M™ للتحكم',
      title2: 'بأشعة الشمس',
      title3: 'الإمارات',
      subtitle: 'المنازل · الفيلات · المكاتب · المباني التجارية',
      desc: 'استمتع بالضوء الطبيعي دون حرارة أو وهج أو أضرار الأشعة فوق البنفسجية. 3M OUR CAR، الوكيل المعتمد الرائد من 3M™ في الإمارات منذ 2006، يوفر حلول أفلام 3M™ المتميزة للمنازل والفيلات والمكاتب والمباني التجارية.',
      searches: 'فيلم 3M للتحكم بالشمس دبي · تظليل نوافذ منازل دبي · تظليل تجاري أبوظبي · فيلم تحكم حراري الإمارات',
      cta1: 'احجز تظليل نوافذ منزلك أو مكتبك الآن',
      cta2: 'احصل على تقييم مجاني في الموقع عبر واتساب',
    },
    problems: {
      label: 'تحدي الإمارات',
      title: 'لماذا تحتاج منازل ومكاتب الإمارات\nلفيلم 3M للتحكم بالشمس',
      desc: 'أشعة الشمس الحارقة في الإمارات تجلب تحديات تؤثر على الراحة والصحة وتكاليف الطاقة كل يوم.',
      items: [
        { icon: '🌡️', title: 'حرارة داخلية مفرطة', desc: 'النوافذ تعمل كمصائد للحرارة — تجعل الغرف لا تُطاق' },
        { icon: '💸', title: 'فواتير مكيف هواء مرتفعة', desc: 'المزيد من الحرارة يعني عمل المكيف بجهد أكبر — تكلفة أعلى' },
        { icon: '🛋️', title: 'أضرار UV للمقتنيات الداخلية', desc: 'الأثاث والأرضيات والديكور تبهت وتتدهور بشكل أسرع' },
        { icon: '💻', title: 'وهج مزعج على الشاشات', desc: 'ضوء الشمس القوي يجعل التلفاز والشاشات غير قابلة للاستخدام' },
        { icon: '🔆', title: 'تعرض للأشعة UV داخل المنزل', desc: 'التعرض للأشعة فوق البنفسجية داخل المنزل يؤثر على صحة الجلد مع مرور الوقت' },
      ],
      solution: 'حلولنا من أفلام حماية UV وأفلام حجب UV تتيح لك الاستمتاع بالضوء الطبيعي مع البقاء محمياً بالكامل.',
    },
    why: {
      label: 'لماذا تختار 3M OUR CAR',
      title: 'وكيل رسمي من 3M™ منذ 2006 —\nالأكثر موثوقية في الإمارات',
      desc: 'لما يقارب 20 عاماً، كانت 3M OUR CAR المزود الموثوق لمنتجات أفلام 3M™ الأصلية في الإمارات.',
      points: [
        { icon: '🏅', stat: '20+', label: 'عاماً من الخبرة', desc: 'موثوق منذ 2006' },
        { icon: '🌡️', stat: '78%', label: 'رفض الحرارة', desc: 'أقصى حجب للحرارة الشمسية' },
        { icon: '🔆', stat: '99.9%', label: 'حماية UV', desc: 'يحجب الأشعة الضارة' },
        { icon: '⚡', stat: '↓', label: 'توفير طاقة', desc: 'تخفيض ملحوظ لحمل المكيف' },
      ],
      features: [
        'أفلام 3M™ الأصلية للتحكم بالشمس',
        'رفض حراري يصل إلى 78%',
        'حماية UV تصل إلى 99.9%',
        'توفير طاقة مع تخفيض حمل المكيف',
        'مظهر أنيق غير عاكس',
        'ضمان المصنّع طويل الأمد',
        'تركيب احترافي خالٍ من الفقاعات',
      ],
      cta: 'احصل على تقييم مجاني في الموقع عبر واتساب',
    },
    residential: {
      label: 'لمنزلك',
      title: 'تظليل نوافذ سكني —\nاحمِ منزلك وعائلتك',
      benefits: [
        {
          icon: '❄️',
          title: 'قلل الحرارة وخفّض فاتورة الكهرباء',
          desc: 'أفلام 3M للتحكم بالشمس تساعد على تقليل الحرارة القادمة من النوافذ، إبقاء فيلتك أبرد وتخفيض استهلاك المكيف — خاصة خلال ذروة صيف الإمارات.',
        },
        {
          icon: '🛋️',
          title: 'امنع البهتان وأضرار الداخل',
          desc: 'أفلامنا تحجب 99.9% من الأشعة فوق البنفسجية، تحمي الستائر والأقمشة والأرضيات الخشبية والسجاد والبسط والأعمال الفنية والصور وأثاث الجلد.',
        },
        {
          icon: '💻',
          title: 'قلل الوهج دون إظلام المنزل',
          desc: 'استمتع بمشاهدة التلفاز واستخدام اللابتوب والشاشات دون أن يتطفل الضوء الحارق على مساحة معيشتك.',
        },
        {
          icon: '👨‍👩‍👧',
          title: 'احمِ عائلتك داخل المنزل',
          desc: 'التعرض اليومي للأشعة فوق البنفسجية يؤثر على صحة الجلد. فيلم حماية UV لدينا يحافظ على سلامة عائلتك داخل المنزل.',
        },
      ],
      cta: 'احجز تظليل المنزل عبر واتساب',
    },
    commercial: {
      label: 'لعملك',
      title: 'تظليل نوافذ تجاري —\nدبي وأبوظبي',
      benefits: [
        {
          icon: '💸',
          title: 'خفّض تكاليف التبريد',
          desc: 'المكاتب والمباني في الإمارات تواجه اكتساباً حرارياً هائلاً. أفلامنا توفر تخفيض حمل المكيف وتقليل فواتير الكهرباء وبيئات عمل أكثر راحة.',
        },
        {
          icon: '📊',
          title: 'حسّن الإنتاجية',
          desc: 'تقليل الوهج يعني رؤية أفضل للشاشات وتشتيت أقل وبيئة عمل أكثر راحة لفريقك.',
        },
        {
          icon: '🏢',
          title: 'حافظ على المظهر الحديث الشفاف',
          desc: 'أفلام 3M تعزز المظهر المهني لمبناك دون إظلام الزجاج — مع الحفاظ على الإحساس المفتوح والمنعش للمكاتب الحديثة.',
        },
      ],
      cta: 'احجز تظليل المكتب عبر واتساب',
    },
    beforeAfter: {
      label: 'الفرق',
      title: 'شاهد الفرق —\nقبل وبعد',
      before: 'قبل — بدون فيلم 3M للتحكم بالشمس',
      after: 'بعد — مع فيلم 3M للتحكم بالشمس',
      desc: 'نفس الغرفة، نفس النافذة. الفرق الوحيد هو فيلم 3M للتحكم بالشمس — يحجب الحرارة ويُزيل الوهج ويحمي كل شيء بالداخل.',
    },
    filmOptions: {
      label: 'سلاسل أفلام 3M',
      title: 'خيارات فيلم 3M™\nللتحكم بالشمس',
      subtitle: 'اختر الفيلم المناسب لمساحتك',
      items: [
        {
          name: 'سلسلة بريستيج',
          tag: 'فاخر',
          tagColor: 'red',
          subtitle: 'رفض حراري متميز',
          desc: 'فيلم شفاف بلوري يحجب الحرارة دون تغيير مظهر زجاجك. الخيار المتميز للفيلات الفاخرة والمساكن الراقية.',
          specs: [
            { label: 'الضوء المرئي', value: 'حتى 70%' },
            { label: 'رفض الحرارة', value: 'حتى 60%' },
            { label: 'الانعكاسية', value: 'منخفضة جداً' },
          ],
          ideal: 'مثالي للفيلات الفاخرة',
          highlight: true,
        },
        {
          name: 'سلسلة سيراميك',
          tag: 'وضوح',
          tagColor: 'neutral',
          subtitle: 'وضوح نانو سيراميكي',
          desc: 'تقنية سيراميك متقدمة لوضوح بصري استثنائي وأداء حراري متفوق. مثالية للمنازل والمكاتب الحديثة.',
          specs: [
            { label: 'الضوء المرئي', value: 'حتى 50%' },
            { label: 'رفض الحرارة', value: 'حتى 59%' },
            { label: 'الوضوح', value: 'ممتاز' },
          ],
          ideal: 'مثالي للمنازل والمكاتب الحديثة',
          highlight: false,
        },
        {
          name: 'سلسلة نايت فيجن',
          tag: 'خصوصية',
          tagColor: 'neutral',
          subtitle: 'خصوصية + تحكم حراري',
          desc: 'أقصى رفض للحرارة وتخفيض للوهج مع خصوصية نهارية معززة. مثالي للنوافذ المواجهة للشارع.',
          specs: [
            { label: 'الضوء المرئي', value: 'حتى 35%' },
            { label: 'رفض الحرارة', value: 'حتى 71%' },
            { label: 'الخصوصية', value: 'معززة' },
          ],
          ideal: 'مثالي للنوافذ المواجهة للشارع',
          highlight: false,
        },
      ],
    },
    energy: {
      label: 'كفاءة الطاقة',
      title: 'فيلم نوافذ موفر للطاقة\nللمنازل والمكاتب في الإمارات',
      desc: 'أفلامنا تقلل بشكل ملحوظ من الاكتساب الحراري، تساعدك على تخفيض فواتير الكهرباء وتحسين الراحة الداخلية. مما يجعلها من أكثر حلول توفير الطاقة فعالية في الإمارات.',
      stats: [
        { num: '78%', label: 'أقصى رفض حراري' },
        { num: '99.9%', label: 'الأشعة UV محجوبة' },
        { num: '↓60%', label: 'تخفيض حمل المكيف' },
        { num: '1–3', label: 'ساعات تركيب' },
      ],
    },
    whyUs: {
      label: 'مميزاتنا',
      title: 'لماذا يختار العملاء\n3M OUR CAR',
      points: [
        'مركّبون رسميون لأفلام نوافذ 3M™',
        '20 عاماً من الخبرة',
        'تركيب احترافي في الموقع',
        'رفض حراري يصل إلى 78%',
        'حماية UV تصل إلى 99.9%',
        'مظهر أنيق غير عاكس',
        'ضمان طويل الأمد',
        'خدمة سريعة ونظيفة وخالية من المتاعب',
      ],
    },
    faq: {
      label: 'الأسئلة الشائعة',
      title: 'الأسئلة\nالشائعة',
      items: [
        { q: 'كم نسبة الحرارة التي يحجبها فيلم 3M للتحكم بالشمس؟', a: 'يصل إلى 78% من الحرارة الشمسية، اعتماداً على نوع الفيلم المختار. سلسلة نايت فيجن توفر أعلى رفض حراري بنسبة 71%، بينما توفر سلسلة بريستيج 60% مع أقصى وضوح.' },
        { q: 'هل سيُظلم المنزل؟', a: 'لا. أفلام 3M مصممة خصيصاً للسماح بضوء طبيعي سخي مع تقليل الحرارة والوهج. سلسلة بريستيج تسمح بمرور ما يصل إلى 70% من الضوء المرئي.' },
        { q: 'هل سيغيّر مظهر الفيلة؟', a: 'سلاسل بريستيج والسيراميك تحافظ على مظهر شفاف وأنيق تماماً. غير قابلة للكشف عملياً مع توفير أقصى حماية.' },
        { q: 'كم يستغرق التركيب؟', a: 'معظم المنازل والمكاتب تستغرق من 1 إلى 3 ساعات حسب عدد النوافذ وظروف الوصول. فريقنا المحترف يعمل بنظافة وكفاءة.' },
        { q: 'هل يقلل فواتير الكهرباء؟', a: 'نعم — عن طريق تقليل الاكتساب الحراري من النوافذ بشكل ملحوظ، يعمل مكيفك بتكرار أقل، مما يخفض مباشرة استهلاكك من الكهرباء.' },
        { q: 'هل تقدمون تقييمات في الموقع؟', a: 'نعم — نقدم تقييمات مجانية في الموقع للمنازل والفيلات والمباني التجارية. سيوصي متخصصنا بالفيلم المناسب لنوافذك واحتياجاتك المحددة.' },
        { q: 'هل يمكن إزالة فيلم نافذة 3M؟', a: 'نعم. يمكن إزالة أفلام نوافذ 3M باحترافية دون إتلاف الزجاج عند الحاجة.' },
      ],
    },
    finalCta: {
      title: 'مستعد لإبقاء منزلك\nأو مكتبك أكثر برودة؟',
      desc: 'استمتع بالضوء الطبيعي دون حرارة أو وهج أو أضرار UV. اختر خبراء 3M المعتمدين الأكثر موثوقية في الإمارات — 3M OUR CAR.',
      cta1: 'احجز الآن — تظليل المنزل أو المكتب عبر واتساب',
      cta2: 'راسلنا على واتساب للحجز الفوري',
      cta3: 'أقرب موقع إليك',
    },
    related: {
      label: 'المزيد من حلول الأفلام',
      title: 'استكشف حلول أفلام\nالنوافذ الأخرى لدينا',
      items: [
        { href: '/residential/safety-security', icon: '🔒', title: 'أفلام الأمان والحماية', desc: 'تثبّت الزجاج المتكسر — تحمي من السطو والعواصف والحوادث.' },
        { href: '/residential/decorative', icon: '🎨', title: 'الأفلام الزخرفية', desc: 'أفلام مصنفرة ومنقوشة وبالعلامات التجارية للخصوصية والجمالية.' },
        { href: '/marine/sun-control', icon: '⛵', title: 'أفلام التحكم بالشمس البحرية', desc: 'تحكم بالشمس من 3M بجودة بحرية لليخوت والقوارب.' },
        { href: '/automotive/window-tinting', icon: '🪟', title: 'تظليل زجاج السيارات', desc: 'تظليل سيارة 3M في 55 دقيقة في 9 مواقع بالمراكز التجارية.' },
      ],
    },
  },
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function WAButton({ label, large = false }: { label: string; large?: boolean }) {
  const { lang } = useApp()
  const msg = encodeURIComponent(
    lang === 'ar'
      ? 'مرحباً! أود الاستفسار عن فيلم 3M للتحكم بالشمس للمنازل والمكاتب.'
      : 'Hello! I would like to enquire about 3M Sun Control Window Film for my home or office.'
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

function CoverImg({ src, alt, ratio = '16/9' }: { src: string; alt: string; ratio?: string }) {
  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: ratio }}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.30)' }} />
    </div>
  )
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export function SunControlClient() {
  const { lang } = useApp()
  const isAr = lang === 'ar'
  const c = isAr ? content.ar : content.en
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-16"
        style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#0a1a0f 60%,var(--bg-page) 100%)' }}>
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
                className="text-sm font-light leading-relaxed mb-4 max-w-lg"
                style={{ color: 'rgba(255,255,255,0.82)', textShadow: '0 2px 14px rgba(0,0,0,0.45)' }}
              >
                {c.hero.desc}
              </p>
              <p
                className="text-xs font-light italic mb-8"
                style={{ color: 'rgba(255,255,255,0.78)', textShadow: '0 2px 12px rgba(0,0,0,0.45)' }}
              >
                {c.hero.searches}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="text-xs font-semibold tracking-widest uppercase px-7 py-4 transition-colors"
                  style={{ background: 'var(--red)', color: 'white' }}>{c.hero.cta1}</Link>
                <WAButton label={c.hero.cta2} />
              </div>
            </div>
            {/* Hero image — sun-control-1 */}
            <CoverImg src="/images/residential/sun-control-1.jpg" alt="3M sun control window film Dubai villa" ratio="4/3" />
          </div>
        </div>
      </section>

      <SplitMediaSection
        label={isAr ? 'معرض المشاريع' : 'Project Gallery'}
        title={isAr ? 'تركيب فعلي في\nفلل ومنازل' : 'REAL INSTALLATIONS\nIN HOMES & VILLAS'}
        description={isAr ? 'صور من مشاريع فعلية توضّح جودة تركيب أفلام التحكم الشمسي 3M.' : 'Real project visuals highlighting the quality of 3M sun control film installation.'}
        mediaItems={[
          { src: '/images/residential/sun-control-2.jpg', alt: '3M window film residential UAE' },
          { src: '/images/residential/sun-control-3.jpg', alt: 'Sun control film villa Dubai' },
        ]}
        autoPlayMs={2200}
      />

      {/* ── PROBLEMS ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.problems.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.problems.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <p className="text-sm font-light mb-10 max-w-2xl" style={{ color: 'var(--text-muted)' }}>{c.problems.desc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {c.problems.items.map(item => (
              <div key={item.title} className="border p-6 text-center" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-main)' }}>{item.title}</div>
                <div className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--red)', borderLeft: '4px solid var(--red)' }}>
            <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{c.problems.solution}</p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.why.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.why.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <p className="text-sm font-light mb-10 max-w-xl" style={{ color: 'var(--text-muted)' }}>{c.why.desc}</p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {c.why.points.map(p => (
              <div key={p.label} className="border p-6 text-center" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="text-3xl mb-2">{p.icon}</div>
                <div className="font-heading text-4xl mb-1" style={{ color: 'var(--red)' }}>{p.stat}</div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--text-main)' }}>{p.label}</div>
                <div className="text-[11px] font-light" style={{ color: 'var(--text-muted)' }}>{p.desc}</div>
              </div>
            ))}
          </div>
          {/* Features */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="flex flex-wrap gap-2">
              {c.why.features.map(f => (
                <span key={f} className="text-xs font-medium px-4 py-2 border"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-main)', background: 'var(--bg-card)' }}>✓ {f}</span>
              ))}
            </div>
            <div>
              <WAButton label={c.why.cta} />
            </div>
          </div>
        </div>
      </section>

      {/* ── RESIDENTIAL BENEFITS ──────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.residential.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.residential.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {c.residential.benefits.map(b => (
                <div key={b.title} className="border p-6 flex gap-5 items-start" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <span className="text-3xl flex-shrink-0">{b.icon}</span>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-main)' }}>{b.title}</div>
                    <div className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{b.desc}</div>
                  </div>
                </div>
              ))}
              <WAButton label={c.residential.cta} />
            </div>
            <div className="border" style={{ borderColor: 'var(--border)' }}>
              <CoverImg src="/images/residential/sun-control-4.jpg" alt="3M sun control film installed on villa window UAE" ratio="16/9" />
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMERCIAL BENEFITS ───────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.commercial.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.commercial.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {c.commercial.benefits.map(b => (
                <div key={b.title} className="border p-6 flex gap-5 items-start" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <span className="text-3xl flex-shrink-0">{b.icon}</span>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-main)' }}>{b.title}</div>
                    <div className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{b.desc}</div>
                  </div>
                </div>
              ))}
              <WAButton label={c.commercial.cta} />
            </div>
            <div className="border" style={{ borderColor: 'var(--border)' }}>
              <CoverImg src="/images/residential/sun-control-5.jpg" alt="Commercial window film office building Dubai" ratio="16/9" />
            </div>
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER ────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.beforeAfter.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.beforeAfter.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <p className="text-sm font-light mb-10 max-w-2xl" style={{ color: 'var(--text-muted)' }}>{c.beforeAfter.desc}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Before */}
            <div>
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/images/residential/sun-control-before.jpg"
                  alt="Before 3M sun control film"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.15)' }} />
                <div className="absolute bottom-4 left-4 px-4 py-2 border" style={{ background: 'rgba(10,10,10,0.85)', borderColor: 'var(--border)' }}>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                    {c.beforeAfter.before}
                  </span>
                </div>
              </div>
            </div>
            {/* After */}
            <div>
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/images/residential/sun-control-after.jpg"
                  alt="After 3M sun control film installed"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.15)' }} />
                <div className="absolute bottom-4 left-4 px-4 py-2 border" style={{ background: 'rgba(200,16,46,0.9)', borderColor: 'var(--red)' }}>
                  <span className="text-xs font-bold tracking-widest uppercase text-white">
                    {c.beforeAfter.after}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILM OPTIONS ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.filmOptions.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-3" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.filmOptions.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <p className="text-sm font-light mb-10" style={{ color: 'var(--text-muted)' }}>{c.filmOptions.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-5">
            {c.filmOptions.items.map(film => (
              <div key={film.name} className="border p-8"
                style={{ background: 'var(--bg-card)', borderColor: film.highlight ? 'var(--red)' : 'var(--border)', borderTop: film.highlight ? '3px solid var(--red)' : '1px solid var(--border)' }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="font-heading text-2xl tracking-wide" style={{ color: 'var(--text-main)' }}>{film.name}</div>
                  <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1"
                    style={{ background: film.tagColor === 'red' ? 'var(--red)' : 'var(--bg-mid)', color: film.tagColor === 'red' ? 'white' : 'var(--text-muted)', border: film.tagColor !== 'red' ? '1px solid var(--border)' : 'none' }}>
                    {film.tag}
                  </span>
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>{film.subtitle}</div>
                <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>{film.desc}</p>
                <div className="space-y-2 mb-5">
                  {film.specs.map(s => (
                    <div key={s.label} className="flex justify-between items-center py-2 border-b" style={{ borderColor: 'var(--border)' }}>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
                      <span className="text-xs font-semibold" style={{ color: 'var(--red)' }}>{s.value}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs font-medium px-3 py-2 border" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg-mid)' }}>
                  ✓ {film.ideal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENERGY + sun-control-6 ────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.energy.label}</p>
            <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
              {c.energy.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
            </h2>
            <p className="text-sm font-light leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>{c.energy.desc}</p>
            <div className="grid grid-cols-2 gap-4">
              {c.energy.stats.map(s => (
                <div key={s.label} className="border p-6 text-center" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <div className="font-heading text-4xl mb-2" style={{ color: 'var(--red)' }}>{s.num}</div>
                  <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="border" style={{ borderColor: 'var(--border)' }}>
            <CoverImg src="/images/residential/sun-control-6.jpg" alt="Energy saving window film UAE building" ratio="16/9" />
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{isAr ? 'أين نحن' : 'Find Us'}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {isAr ? 'أقرب موقع إليك\nفي دبي وأبوظبي' : 'WINDOW TINTING NEAR YOU\nDUBAI & ABU DHABI'}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {c.whyUs.points.map(p => (
              <div key={p} className="flex items-start gap-3 border border-white/20 bg-white/10 px-5 py-4">
                <span className="text-white font-bold flex-shrink-0 mt-0.5">✓</span>
                <span className="text-sm text-white font-light leading-relaxed">{p}</span>
              </div>
            ))}
          </div>
          <WAButton label={isAr ? 'احجز تظليل المنزل أو المكتب ← واتساب' : 'Book Home or Office Tinting → WhatsApp'} />
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

      {/* ── RELATED ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.related.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.related.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.related.items.map(s => (
              <Link key={s.href} href={s.href}
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
