'use client'
// src/components/pages/car-detailing-client.tsx

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useApp } from '@/context/AppContext'
import { COMPANY, MALL_LOCATIONS } from '@/lib/constants'

const content = {
  en: {
    hero: {
      label: 'Official 3M™ Partner Since 2006',
      title1: 'PREMIUM CAR',
      title2: 'DETAILING',
      title3: 'UAE',
      subtitle: 'Deep Cleaning · Steam Sanitization · Showroom Finish',
      desc: "Your car deserves to look, feel, and smell brand new — no matter how harsh the UAE climate gets. At 3M OUR CAR, we deliver professional car detailing across Dubai and Abu Dhabi, restoring your vehicle to a showroom-fresh condition while eliminating 99.99% of germs, bacteria, and odors.",
      searches: 'car detailing Dubai · interior car cleaning Dubai · steam car wash Dubai · car detailing near me',
      cta1: 'Book Professional Car Detailing Now',
      cta2: 'Get a Free Quote on WhatsApp',
    },
    intro: {
      label: 'The UAE Detailing Challenge',
      title: "EXPERIENCE THE BEST CAR\nDETAILING IN UAE",
      subtitle: 'Deep Cleaning, Germ Removal & Showroom Shine',
      desc: "Dubai's heat, humidity, sand, and daily driving conditions can quickly make your car interior feel dull, dirty, and unhygienic. Dust, food particles, bacteria, and odors settle deep into carpets, seats, and AC vents — while the exterior loses its shine due to UV exposure and road contaminants.",
      solution: "Our detailing experts at 3M OUR CAR use industrial-grade steam machines, high-pressure extractors, and premium detailing products to restore your vehicle inside and out.",
      cta: 'Get a Free Quote on WhatsApp',
    },
    trust: {
      label: 'Why UAE Drivers Trust Us',
      title: '20+ YEARS OF AUTOMOTIVE\nAPPEARANCE CARE',
      desc: 'With over 20 years of experience, we are one of the UAE\'s most established names in automotive appearance care.',
      services: [
        'Car Detailing', 'Car Polishing', 'Steam Cleaning', 'Car Sanitization',
        'Interior Restoration', 'Odor Removal', 'Leather Seat Cleaning', 'Upholstery Shampooing',
      ],
      points: [
        { icon: '🔬', title: 'Industrial Steam Machines', desc: 'Kills 99.99% of germs, bacteria and mold' },
        { icon: '💧', title: 'High-Pressure Extractors', desc: 'Deep-cleans carpets and upholstery thoroughly' },
        { icon: '🏅', title: '20+ Years Experience', desc: 'Trusted by thousands of UAE drivers since 2006' },
        { icon: '✅', title: 'Certified Technicians', desc: 'Consistent, professional results every time' },
      ],
    },
    services: {
      label: 'Our Detailing Services',
      title: 'PROFESSIONAL CAR DETAILING\nSERVICES ACROSS UAE',
      interior: {
        title: 'Deep Interior Car Detailing',
        subtitle: 'Steam Cleaning, Sanitization & Odor Removal',
        desc: "Your car interior collects dust, bacteria, food particles, pet hair, and allergens — especially in UAE's climate. Our interior car detailing service restores freshness, eliminates odors, and sanitizes every surface.",
        includes: [
          'Steam cleaning AC vents & upholstery',
          'AC smell removal (kills mold, bacteria & odors)',
          'High-pressure steam extraction for stains & spills',
          'Wet vacuuming of carpets & upholstery',
          'Leather seat cleaning & conditioning',
          'Dashboard polishing & UV protection',
          'Interior sanitization (kills 99.99% germs)',
        ],
      },
      exterior: {
        title: 'Exterior Car Detailing',
        subtitle: 'Shine, Protection & Paint Enhancement',
        desc: "UAE's sun and sand can dull your car's paint. Our exterior detailing service restores gloss, removes contaminants, and protects your paint from UV damage.",
        includes: [
          'Foam wash & decontamination',
          'Tar, sap, bug & lime removal',
          'Rim & tyre treatment',
          'Waxing & paint enhancement',
          'Protective sealant application',
        ],
        searches: ['car polishing Dubai', 'car scratch removal Dubai', 'paint enhancement Dubai'],
      },
    },
    packages: {
      label: 'Detailing Packages',
      title: 'CAR DETAILING PACKAGES\nAT 3M OUR CAR',
      items: [
        {
          title: 'Basic Detailing',
          tag: 'MAINTENANCE',
          ideal: 'Ideal for weekly or bi-weekly maintenance',
          includes: [
            'Exterior wash',
            'Interior vacuum',
            'Dashboard cleaning',
            'Rim & tyre shine',
          ],
          highlight: false,
        },
        {
          title: 'Full Interior + Exterior',
          tag: 'MOST POPULAR',
          ideal: 'Perfect for families, pet owners, and daily drivers',
          includes: [
            'Full interior steam cleaning',
            'AC vent sanitization',
            'Stain & odor removal',
            'Exterior decontamination',
            'Waxing & paint enhancement',
          ],
          highlight: true,
        },
        {
          title: 'Premium Deep Cleaning',
          tag: 'COMPLETE RESTORATION',
          ideal: 'For cars with heavy stains, odors, or long-term buildup',
          includes: [
            'Complete interior restoration',
            'Leather treatment',
            'High-pressure extraction',
            'Exterior polishing',
            'Protective sealant',
          ],
          highlight: false,
        },
      ],
    },
    whyRegular: {
      label: 'Why Regular Detailing Matters',
      title: 'WHY REGULAR CAR DETAILING\nIS ESSENTIAL IN THE UAE',
      points: [
        { num: '01', icon: '🛡️', title: 'Preventative Maintenance', desc: 'Detailing prevents long-term damage and keeps all surfaces protected from UAE conditions.' },
        { num: '02', icon: '💰', title: 'Higher Resale Value', desc: 'A clean interior and glossy exterior significantly increase your car\'s resale value.' },
        { num: '03', icon: '🦠', title: 'Allergy & Germ Reduction', desc: 'Steam cleaning eliminates up to 99.99% of bacteria, mold, and allergens from your cabin.' },
        { num: '04', icon: '✨', title: 'Brand-New Feel', desc: 'A professionally detailed car feels fresh, clean, and enjoyable to drive every day.' },
      ],
    },
    neglect: {
      label: 'The Cost of Skipping',
      title: 'WHAT HAPPENS IF YOU\nSKIP DETAILING?',
      points: [
        { icon: '🦠', text: 'Bacteria and mold build up in AC vents' },
        { icon: '🔴', text: 'Stains become permanent and impossible to remove' },
        { icon: '🌿', text: 'Leather cracks, fades, and deteriorates rapidly' },
        { icon: '☀️', text: 'Paint loses its gloss and begins to oxidize' },
        { icon: '👃', text: 'Odors become deeply embedded and harder to remove' },
        { icon: '📉', text: 'Resale value drops significantly' },
      ],
    },
    duration: {
      label: 'How Long It Takes',
      title: 'FAST TURNAROUND —\nEVEN AT THE MALL',
      time: '1.5–4 HRS',
      note: 'Interior + exterior detailing depending on package and vehicle size',
      frequency: {
        title: 'Recommended Frequency in UAE',
        desc: 'In UAE conditions, we recommend detailing every 2–3 months due to sand, heat, humidity, and daily road contaminants.',
      },
    },
    mobile: {
      label: 'Mobile Service',
      title: 'MOBILE CAR DETAILING\nANYWHERE IN UAE',
      desc: "Prefer to stay at home? Our professional mobile detailing team comes to you — anywhere in Dubai or Abu Dhabi. Same industrial equipment, same certified technicians, same showroom results.",
      locations: ['Your Home or Villa', 'Your Office', 'Apartment Parking', 'Any Location in Dubai or Abu Dhabi'],
      cta: 'Book Mobile Detailing on WhatsApp',
    },
    whyUs: {
      label: 'Our Advantages',
      title: 'WHY CHOOSE 3M OUR CAR\nFOR CAR DETAILING?',
      points: [
        '20+ Years of Experience',
        'Certified Detailing Specialists',
        'Industrial Steam Sanitization (99.99% Germs Killed)',
        'Premium Products & Equipment',
        'Fast Turnaround Times',
        'Guaranteed Satisfaction',
        'Mobile Car Detailing Available',
        'Trusted by Thousands of UAE Drivers',
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'FREQUENTLY ASKED\nQUESTIONS',
      items: [
        { q: 'How much does car detailing cost in Dubai?', a: 'Prices depend on vehicle size and detailing level. We offer Basic, Full, and Premium packages. WhatsApp us for the best current pricing and package details.' },
        { q: 'How long does full car detailing take?', a: 'Interior + exterior detailing typically takes 1.5 to 4 hours depending on the package selected and the current condition of your vehicle.' },
        { q: 'Is steam cleaning safe for my car interior?', a: 'Yes. Steam cleaning is chemical-free and kills 99.99% of germs, bacteria, and mold. It is completely safe for all interior surfaces including leather, fabric, and plastics.' },
        { q: 'Do you offer mobile car detailing?', a: 'Yes — we offer doorstep detailing anywhere in Dubai & Abu Dhabi. Our mobile team brings full professional equipment to your home, office, or parking area.' },
        { q: 'How often should I detail my car in the UAE?', a: 'In UAE conditions, we recommend detailing every 2–3 months. The sand, heat, and humidity accelerate the buildup of contaminants inside and outside the vehicle.' },
        { q: 'Does detailing increase resale value?', a: 'Absolutely. A clean, well-maintained interior and glossy exterior significantly increase your car\'s resale value and help it sell faster.' },
        { q: 'Can detailing remove bad odors from my car?', a: 'Yes — our steam sanitization and odor removal treatment eliminates odors at the source, including smoke, food, pet, and AC mold smells.' },
      ],
    },
    finalCta: {
      title: "READY TO MAKE YOUR CAR\nLOOK & FEEL BRAND NEW?",
      desc: 'Your car deserves premium care — and so do you. Book professional car detailing in Dubai & Abu Dhabi today.',
      cta1: 'Book Now — Get a Showroom Finish on WhatsApp',
      cta2: 'WhatsApp Us for Prices',
      cta3: 'Book at a Mall Location',
    },
    related: {
      label: 'Complete Car Care',
      title: 'COMPLETE YOUR CAR\'S\nCARE & PROTECTION',
      items: [
        { slug: 'window-tinting', icon: '🪟', title: '3M™ Window Tinting', desc: 'Block 97% heat & 99.9% UV rays. In 55 minutes while you shop.' },
        { slug: 'ppf', icon: '🛡️', title: 'Paint Protection Film (PPF)', desc: 'Protect your freshly detailed exterior with 3M™ Scotchgard PPF.' },
        { slug: 'ceramic-coating', icon: '✨', title: 'Ceramic Coating', desc: 'Seal your detail with UltraShield Pro for years of hydrophobic protection.' },
        { slug: 'car-polishing', icon: '💎', title: 'Car Polishing', desc: 'Take the exterior further with professional 3M™ paint correction.' },
      ],
    },
  },

  ar: {
    hero: {
      label: 'شريك 3M™ الرسمي منذ 2006',
      title1: 'تفصيل السيارة',
      title2: 'الاحترافي',
      title3: 'الإمارات',
      subtitle: 'تنظيف عميق · تعقيم بالبخار · تشطيب كالصالة',
      desc: 'سيارتك تستحق أن تبدو وتُحسَّ وتشتمّ كالجديدة تماماً — مهما كانت قسوة مناخ الإمارات. في 3M OUR CAR، نقدم تفصيلاً احترافياً للسيارات في دبي وأبوظبي، يعيد سيارتك إلى حالة طازجة كالصالة مع القضاء على 99.99% من الجراثيم والبكتيريا والروائح.',
      searches: 'تفصيل سيارة دبي · تنظيف داخلي للسيارة دبي · غسيل بخار دبي · تفصيل سيارة بالقرب مني',
      cta1: 'احجز تفصيل سيارة احترافي الآن',
      cta2: 'احصل على عرض سعر مجاني عبر واتساب',
    },
    intro: {
      label: 'تحدي التفصيل في الإمارات',
      title: 'اختبر أفضل تفصيل سيارات\nفي الإمارات',
      subtitle: 'تنظيف عميق وإزالة الجراثيم وتشطيب كالصالة',
      desc: 'حرارة دبي والرطوبة والرمال وظروف القيادة اليومية تجعل داخل سيارتك يبدو باهتاً وقذراً وغير صحي بسرعة. الغبار وجزيئات الطعام والبكتيريا والروائح تستقر عمقاً في السجاد والمقاعد وفتحات التكييف — بينما يفقد الخارج بريقه بسبب تعرضه للأشعة فوق البنفسجية وملوثات الطرق.',
      solution: 'يستخدم خبراء التفصيل لدينا في 3M OUR CAR آلات بخار صناعية وضخات ضغط عالٍ ومنتجات تفصيل متميزة لاستعادة مظهر سيارتك من الداخل والخارج.',
      cta: 'احصل على عرض سعر مجاني عبر واتساب',
    },
    trust: {
      label: 'لماذا يثق سائقو الإمارات بنا',
      title: 'أكثر من 20 عاماً في\nرعاية مظهر السيارات',
      desc: 'بخبرة تتجاوز 20 عاماً، نحن من أكثر الأسماء الراسخة في رعاية مظهر السيارات في الإمارات.',
      services: [
        'تفصيل السيارات', 'تلميع السيارات', 'التنظيف بالبخار', 'تعقيم السيارات',
        'ترميم الداخل', 'إزالة الروائح', 'تنظيف مقاعد الجلد', 'غسيل المقاعد القماشية',
      ],
      points: [
        { icon: '🔬', title: 'آلات بخار صناعية', desc: 'تقضي على 99.99% من الجراثيم والبكتيريا والعفن' },
        { icon: '💧', title: 'ضخات ضغط عالٍ', desc: 'تنظيف عميق للسجاد والمقاعد بشكل شامل' },
        { icon: '🏅', title: 'أكثر من 20 عاماً من الخبرة', desc: 'موثوق من آلاف سائقي الإمارات منذ 2006' },
        { icon: '✅', title: 'فنيون معتمدون', desc: 'نتائج احترافية ومتسقة في كل مرة' },
      ],
    },
    services: {
      label: 'خدمات التفصيل لدينا',
      title: 'خدمات تفصيل السيارات\nالاحترافية في الإمارات',
      interior: {
        title: 'التفصيل الداخلي العميق',
        subtitle: 'تنظيف بالبخار وتعقيم وإزالة الروائح',
        desc: 'يجمع داخل سيارتك الغبار والبكتيريا وجزيئات الطعام وشعر الحيوانات الأليفة ومسببات الحساسية — خاصة في مناخ الإمارات. خدمة التفصيل الداخلي لدينا تستعيد النضارة وتُزيل الروائح وتعقّم كل سطح.',
        includes: [
          'تنظيف فتحات التكييف والمقاعد بالبخار',
          'إزالة رائحة التكييف (يقضي على العفن والبكتيريا والروائح)',
          'استخراج البقع بالبخار عالي الضغط',
          'تفريغ السجاد والمقاعد بالمكنسة الرطبة',
          'تنظيف مقاعد الجلد وصيانتها',
          'تلميع لوحة القيادة وحمايتها من UV',
          'تعقيم الداخل (يقضي على 99.99% من الجراثيم)',
        ],
      },
      exterior: {
        title: 'التفصيل الخارجي',
        subtitle: 'اللمعان والحماية وتعزيز الطلاء',
        desc: 'شمس الإمارات والرمال تُبهت طلاء سيارتك. خدمة التفصيل الخارجي لدينا تستعيد اللمعان وتزيل الملوثات وتحمي طلاءك من أضرار الأشعة فوق البنفسجية.',
        includes: [
          'غسيل رغوي وإزالة التلوث',
          'إزالة القطران والعصارة والحشرات والكلس',
          'معالجة الجنوط والإطارات',
          'التشميع وتعزيز الطلاء',
          'تطبيق سيلانت واقٍ',
        ],
        searches: ['تلميع سيارة دبي', 'إزالة خدوش السيارة دبي', 'تعزيز الطلاء دبي'],
      },
    },
    packages: {
      label: 'باقات التفصيل',
      title: 'باقات تفصيل السيارات\nفي 3M OUR CAR',
      items: [
        {
          title: 'باقة التفصيل الأساسية',
          tag: 'صيانة دورية',
          ideal: 'مثالية للصيانة الأسبوعية أو كل أسبوعين',
          includes: [
            'غسيل خارجي',
            'شفط داخلي',
            'تنظيف لوحة القيادة',
            'تلميع الجنوط والإطارات',
          ],
          highlight: false,
        },
        {
          title: 'تفصيل داخلي + خارجي كامل',
          tag: 'الأكثر طلباً',
          ideal: 'مثالية للعائلات وأصحاب الحيوانات الأليفة والسائقين اليوميين',
          includes: [
            'تنظيف داخلي كامل بالبخار',
            'تعقيم فتحات التكييف',
            'إزالة البقع والروائح',
            'إزالة التلوث الخارجي',
            'تشميع وتعزيز الطلاء',
          ],
          highlight: true,
        },
        {
          title: 'باقة التنظيف العميق المتميزة',
          tag: 'ترميم كامل',
          ideal: 'للسيارات ذات البقع الشديدة أو الروائح أو التراكمات طويلة الأمد',
          includes: [
            'ترميم داخلي كامل',
            'علاج الجلد',
            'استخراج بضغط عالٍ',
            'تلميع خارجي',
            'سيلانت واقٍ',
          ],
          highlight: false,
        },
      ],
    },
    whyRegular: {
      label: 'أهمية التفصيل المنتظم',
      title: 'لماذا التفصيل المنتظم\nضروري في الإمارات؟',
      points: [
        { num: '01', icon: '🛡️', title: 'صيانة وقائية', desc: 'التفصيل يمنع الأضرار طويلة الأمد ويحافظ على حماية جميع الأسطح من ظروف الإمارات.' },
        { num: '02', icon: '💰', title: 'قيمة إعادة بيع أعلى', desc: 'الداخل النظيف والخارج اللامع يرفعان قيمة إعادة البيع بشكل ملحوظ.' },
        { num: '03', icon: '🦠', title: 'تقليل الحساسية والجراثيم', desc: 'التنظيف بالبخار يقضي على ما يصل إلى 99.99% من البكتيريا والعفن ومسببات الحساسية.' },
        { num: '04', icon: '✨', title: 'إحساس بالجِدّة', desc: 'السيارة المُفصَّلة احترافياً تبدو نظيفة ومنعشة ويُستمتع بقيادتها كل يوم.' },
      ],
    },
    neglect: {
      label: 'تكلفة الإهمال',
      title: 'ماذا يحدث إذا\nأهملت التفصيل؟',
      points: [
        { icon: '🦠', text: 'تراكم البكتيريا والعفن في فتحات التكييف' },
        { icon: '🔴', text: 'تصبح البقع دائمة ويستحيل إزالتها' },
        { icon: '🌿', text: 'يتشقق الجلد ويبهت ويتدهور بسرعة' },
        { icon: '☀️', text: 'يفقد الطلاء بريقه ويبدأ بالأكسدة' },
        { icon: '👃', text: 'تترسخ الروائح بعمق ويصعب إزالتها' },
        { icon: '📉', text: 'تنخفض قيمة إعادة البيع بشكل ملحوظ' },
      ],
    },
    duration: {
      label: 'الوقت المستغرق',
      title: 'خدمة سريعة —\nحتى في المول',
      time: '١.٥–٤ ساعات',
      note: 'تفصيل داخلي + خارجي حسب الباقة وحجم السيارة',
      frequency: {
        title: 'التكرار الموصى به في الإمارات',
        desc: 'في ظروف الإمارات، نوصي بالتفصيل كل 2–3 أشهر بسبب الرمال والحرارة والرطوبة وملوثات الطرق اليومية.',
      },
    },
    mobile: {
      label: 'الخدمة المتنقلة',
      title: 'تفصيل متنقل في\nأي مكان بالإمارات',
      desc: 'تفضّل البقاء في المنزل؟ فريق التفصيل المتنقل المحترف لدينا يأتي إليك — في أي مكان بدبي أو أبوظبي. نفس المعدات الصناعية، نفس الفنيين المعتمدين، نفس نتائج الصالة.',
      locations: ['منزلك أو فيلتك', 'مكتبك', 'موقف الشقة', 'أي موقع في دبي أو أبوظبي'],
      cta: 'احجز التفصيل المتنقل عبر واتساب',
    },
    whyUs: {
      label: 'مميزاتنا',
      title: 'لماذا تختار 3M OUR CAR\nلتفصيل سيارتك؟',
      points: [
        'أكثر من 20 عاماً من الخبرة',
        'متخصصون معتمدون في التفصيل',
        'تعقيم بخار صناعي (99.99% من الجراثيم)',
        'منتجات ومعدات متميزة',
        'أوقات تسليم سريعة',
        'ضمان الرضا',
        'تفصيل متنقل متاح',
        'موثوق من آلاف سائقي الإمارات',
      ],
    },
    faq: {
      label: 'الأسئلة الشائعة',
      title: 'الأسئلة\nالشائعة',
      items: [
        { q: 'كم تبلغ تكلفة تفصيل السيارة في دبي؟', a: 'تعتمد الأسعار على حجم السيارة ومستوى التفصيل. نقدم باقات أساسية وكاملة ومتميزة. راسلنا على واتساب للحصول على أفضل التسعيرات الحالية.' },
        { q: 'كم يستغرق التفصيل الكامل للسيارة؟', a: 'يستغرق التفصيل الداخلي والخارجي عادةً من 1.5 إلى 4 ساعات اعتماداً على الباقة المختارة والحالة الراهنة للسيارة.' },
        { q: 'هل التنظيف بالبخار آمن لداخل سيارتي؟', a: 'نعم. التنظيف بالبخار خالٍ من المواد الكيميائية ويقضي على 99.99% من الجراثيم والبكتيريا والعفن. آمن تماماً لجميع الأسطح الداخلية بما في ذلك الجلد والقماش والبلاستيك.' },
        { q: 'هل تقدمون تفصيلاً متنقلاً؟', a: 'نعم — نقدم التفصيل على الباب في أي مكان بدبي وأبوظبي. فريقنا المتنقل يجلب المعدات المتخصصة الكاملة إلى منزلك أو مكتبك أو موقف سيارتك.' },
        { q: 'كم مرة يجب تفصيل سيارتي في الإمارات؟', a: 'في ظروف الإمارات، نوصي بالتفصيل كل 2–3 أشهر. الرمال والحرارة والرطوبة تسرّع تراكم الملوثات داخل وخارج السيارة.' },
        { q: 'هل التفصيل يرفع قيمة إعادة البيع؟', a: 'بالتأكيد. الداخل النظيف المعتنى به والخارج اللامع يرفعان قيمة إعادة بيع سيارتك بشكل ملحوظ ويساعدان على بيعها بشكل أسرع.' },
        { q: 'هل يمكن إزالة الروائح الكريهة من سيارتي؟', a: 'نعم — معالجة التعقيم وإزالة الروائح لدينا تقضي على الروائح من المصدر، بما في ذلك روائح الدخان والطعام والحيوانات الأليفة وعفن التكييف.' },
      ],
    },
    finalCta: {
      title: 'مستعد لجعل سيارتك تبدو\nوتُحسَّ كالجديدة؟',
      desc: 'سيارتك تستحق رعاية متميزة — وأنت كذلك. احجز تفصيل سيارة احترافي في دبي وأبوظبي اليوم.',
      cta1: 'احجز الآن — احصل على تشطيب كالصالة عبر واتساب',
      cta2: 'راسلنا على واتساب للأسعار',
      cta3: 'احجز في موقع قريب منك',
    },
    related: {
      label: 'رعاية السيارة الكاملة',
      title: 'أكمل رعاية وحماية\nسيارتك',
      items: [
        { slug: 'window-tinting', icon: '🪟', title: 'تظليل زجاج 3M™', desc: 'احجب 97% من الحرارة و99.9% من الأشعة فوق البنفسجية. التركيب في 55 دقيقة.' },
        { slug: 'ppf', icon: '🛡️', title: 'فيلم حماية الطلاء PPF', desc: 'احمِ خارج سيارتك المُفصَّل حديثاً بـ PPF سكوتشغارد™ من 3M.' },
        { slug: 'ceramic-coating', icon: '✨', title: 'الطلاء السيراميكي', desc: 'اختم تفصيلك بـ UltraShield Pro لسنوات من الحماية المائية.' },
        { slug: 'car-polishing', icon: '💎', title: 'تلميع السيارة', desc: 'ارتقِ بالخارج أكثر مع تصحيح الطلاء الاحترافي من 3M.' },
      ],
    },
  },
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function WAButton({ label, large = false }: { label: string; large?: boolean }) {
  const { lang } = useApp()
  const msg = encodeURIComponent(
    lang === 'ar'
      ? 'مرحباً! أود الاستفسار عن خدمة تفصيل السيارة.'
      : 'Hello! I would like to book a car detailing service.'
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
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
    </div>
  )
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export function CarDetailingClient() {
  const { lang } = useApp()
  const isAr = lang === 'ar'
  const c = isAr ? content.ar : content.en
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-16"
        style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#1a0a00 60%,var(--bg-page) 100%)' }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 20px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border" style={{ background: 'rgba(200,16,46,0.12)', borderColor: 'rgba(200,16,46,0.3)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--red)' }} />
                <span className="text-xs font-semibold tracking-[2px] uppercase" style={{ color: 'var(--red)' }}>{c.hero.label}</span>
              </div>
              <h1 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', color: 'var(--text-main)' }}>
                {c.hero.title1}<br />
                <span style={{ color: 'var(--red)' }}>{c.hero.title2}</span><br />
                {c.hero.title3}
              </h1>
              <p className="font-heading text-xl mb-4 tracking-wide" style={{ color: 'var(--text-muted)' }}>{c.hero.subtitle}</p>
              <p className="text-sm font-light leading-relaxed mb-4 max-w-lg" style={{ color: 'var(--text-muted)' }}>{c.hero.desc}</p>
              <p className="text-xs font-light italic mb-8" style={{ color: 'var(--text-muted)' }}>{c.hero.searches}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="text-xs font-semibold tracking-widest uppercase px-7 py-4 transition-colors"
                  style={{ background: 'var(--red)', color: 'white' }}>{c.hero.cta1}</Link>
                <WAButton label={c.hero.cta2} />
              </div>
            </div>
            {/* Hero image — detailing-1 large portrait-like crop */}
            <CoverImg src="/images/detailing/detailing-1.jpg" alt="Professional car detailing Dubai luxury car" ratio="4/5" />
          </div>
        </div>
      </section>

      {/* ── 2 IMAGES STRIP ────────────────────────────────────────────────── */}
      <section className="py-4 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4">
          <CoverImg src="/images/detailing/detailing-2.jpg" alt="Interior steam cleaning car Dubai" />
          <CoverImg src="/images/detailing/detailing-3.jpg" alt="Car detailing steam sanitization UAE" />
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.intro.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-2" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.intro.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <p className="font-heading text-xl mb-6" style={{ color: 'var(--red)' }}>{c.intro.subtitle}</p>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{c.intro.desc}</p>
            <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--red)', borderLeft: '4px solid var(--red)' }}>
              <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>{c.intro.solution}</p>
              <WAButton label={c.intro.cta} />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST ─────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.trust.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-6" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.trust.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <p className="text-sm font-light mb-8" style={{ color: 'var(--text-muted)' }}>{c.trust.desc}</p>
          {/* Service tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {c.trust.services.map(s => (
              <span key={s} className="text-xs font-medium px-4 py-2 border"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg-card)' }}>{s}</span>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.trust.points.map(p => (
              <div key={p.title} className="border p-6" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="text-3xl mb-4">{p.icon}</div>
                <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-main)' }}>{p.title}</div>
                <div className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETAILING SERVICES ────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.services.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-12" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.services.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Interior */}
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderTop: '3px solid var(--red)' }}>
              <div className="text-4xl mb-4">🏠</div>
              <div className="font-heading text-2xl tracking-wide mb-1" style={{ color: 'var(--text-main)' }}>{c.services.interior.title}</div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>{c.services.interior.subtitle}</div>
              <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>{c.services.interior.desc}</p>
              <div className="space-y-2">
                {c.services.interior.includes.map(item => (
                  <div key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--red)' }} className="flex-shrink-0 mt-0.5">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Exterior */}
            <div>
              <div className="border p-8 mb-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderTop: '3px solid var(--border)' }}>
                <div className="text-4xl mb-4">🚗</div>
                <div className="font-heading text-2xl tracking-wide mb-1" style={{ color: 'var(--text-main)' }}>{c.services.exterior.title}</div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>{c.services.exterior.subtitle}</div>
                <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>{c.services.exterior.desc}</p>
                <div className="space-y-2 mb-5">
                  {c.services.exterior.includes.map(item => (
                    <div key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--text-muted)' }} className="flex-shrink-0 mt-0.5">✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              {/* Book CTA */}
              <WAButton label={isAr ? 'احجز تفصيل داخلي + خارجي كامل ← واتساب' : 'Book Full Interior + Exterior Detailing → WhatsApp'} />
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE 4 FULL WIDTH ────────────────────────────────────────────── */}
      <div className="w-full">
        <CoverImg src="/images/detailing/detailing-4.jpg" alt="Professional car detailing Dubai before after" ratio="21/9" />
      </div>

      {/* ── PACKAGES ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.packages.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-12" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.packages.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {c.packages.items.map((pkg) => (
              <div key={pkg.title} className="border p-8 relative"
                style={{ background: 'var(--bg-card)', borderColor: pkg.highlight ? 'var(--red)' : 'var(--border)', borderTop: pkg.highlight ? '3px solid var(--red)' : '1px solid var(--border)' }}>
                {pkg.highlight && (
                  <div className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1"
                    style={{ background: 'var(--red)', color: 'white' }}>{pkg.tag}</div>
                )}
                {!pkg.highlight && (
                  <div className="text-[10px] font-semibold tracking-widest uppercase mb-4 px-3 py-1 border inline-block"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg-mid)' }}>{pkg.tag}</div>
                )}
                <div className="font-heading text-2xl tracking-wide mb-3 mt-2" style={{ color: 'var(--text-main)' }}>{pkg.title}</div>
                <p className="text-xs font-light italic mb-5" style={{ color: 'var(--text-muted)' }}>{pkg.ideal}</p>
                <div className="space-y-2">
                  {pkg.includes.map(item => (
                    <div key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <span style={{ color: pkg.highlight ? 'var(--red)' : 'var(--text-muted)' }} className="flex-shrink-0 mt-0.5">✓</span> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <WAButton label={isAr ? 'احجز هذه الباقة' : 'Book This Package'} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY REGULAR ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.whyRegular.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.whyRegular.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.whyRegular.points.map(p => (
              <div key={p.num} className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="font-heading text-5xl leading-none mb-3" style={{ color: 'var(--red)', opacity: 0.5 }}>{p.num}</div>
                <div className="text-3xl mb-4">{p.icon}</div>
                <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-main)' }}>{p.title}</div>
                <div className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEGLECT WARNING ───────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.neglect.label}</p>
            <h2 className="font-heading leading-none tracking-wide mb-8" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
              {c.neglect.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
            </h2>
            <div className="space-y-3">
              {c.neglect.points.map(p => (
                <div key={p.text} className="flex items-center gap-4 border px-5 py-4"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderLeft: '3px solid var(--red)' }}>
                  <span className="text-xl flex-shrink-0">{p.icon}</span>
                  <span className="text-sm font-light" style={{ color: 'var(--text-muted)' }}>{p.text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Duration + Frequency */}
          <div className="space-y-5">
            <div className="border p-10 text-center" style={{ background: 'var(--red)' }}>
              <p className="text-xs font-semibold tracking-[3px] uppercase mb-3 text-white/70">{c.duration.label}</p>
              <div className="font-heading text-white/15 leading-none select-none" style={{ fontSize: 'clamp(5rem,12vw,9rem)' }}>
                {isAr ? '٤–١.٥' : '1.5-4'}
              </div>
              <div className="font-heading text-3xl text-white tracking-widest -mt-4 relative z-10">
                {isAr ? 'ساعات' : 'HOURS'}
              </div>
              <div className="text-white/60 text-sm mt-2 font-light">{c.duration.note}</div>
            </div>
            <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="text-sm font-semibold mb-2" style={{ color: 'var(--text-main)' }}>{c.duration.frequency.title}</div>
              <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{c.duration.frequency.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE 5 ───────────────────────────────────────────────────────── */}
      <section className="py-4 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <CoverImg src="/images/detailing/detailing-5.jpg" alt="Car detailing mall Dubai showroom finish" />
        </div>
      </section>

      {/* ── MOBILE SERVICE ────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.mobile.label}</p>
            <h2 className="font-heading leading-none tracking-wide mb-6" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
              {c.mobile.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
            </h2>
            <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>{c.mobile.desc}</p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {c.mobile.locations.map(l => (
                <div key={l} className="flex items-center gap-3 border px-4 py-3" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <div className="w-2 h-2 flex-shrink-0" style={{ background: 'var(--red)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--text-main)' }}>{l}</span>
                </div>
              ))}
            </div>
            <WAButton label={c.mobile.cta} />
          </div>
          {/* Locations grid */}
          <div className="grid grid-cols-2 gap-3">
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
          <WAButton label={isAr ? 'احجز موعد تفصيلك ← واتساب' : 'Book Your Detailing Appointment → WhatsApp'} />
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

      {/* ── IMAGE 6 BEFORE RELATED ────────────────────────────────────────── */}
      <section className="py-4 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <CoverImg src="/images/detailing/detailing-6.jpg" alt="Car detailing result showroom finish UAE" ratio="21/9" />
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
