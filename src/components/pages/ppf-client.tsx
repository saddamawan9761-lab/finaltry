'use client'
// src/components/pages/ppf-client.tsx

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useApp } from '@/context/AppContext'
import { COMPANY, MALL_LOCATIONS } from '@/lib/constants'
import { MediaCarousel } from '@/components/ui/MediaCarousel'

const content = {
  en: {
    hero: {
      label: 'Official 3M™ Partner Since 2006',
      title1: '3M™ SCOTCHGARD™ PAINT',
      title2: 'PROTECTION FILM',
      title3: 'PRO SERIES — UAE',
      subtitle: 'Glossy & Matte PPF for Luxury Cars',
      desc: "Driving in the UAE exposes your luxury car to harsh conditions — sand abrasion, stone chips, UV heat, humidity, and constant road debris. Even the most well-maintained vehicle can lose its shine and value without proper protection. 3M OUR CAR installs 3M™ Scotchgard™ Paint Protection Film Pro Series in dust-free studios across Dubai and Abu Dhabi.",
      cars: 'BMW · Nissan Patrol · Land Cruiser · Tesla · Range Rover · Lamborghini · Bentley · Porsche · Mercedes',
      cta1: 'Get a Free PPF Consultation on WhatsApp',
      cta2: 'Book PPF Now',
    },
    trust: {
      label: 'Why UAE Luxury Car Owners Trust Us',
      title: 'OFFICIAL 3M™ INSTALLERS WITH\n20 YEARS OF PROVEN EXPERTISE',
      desc: "For nearly two decades, 3M OUR CAR has been one of the UAE's longest-standing official 3M automotive film partners. We install only genuine 3M™ Scotchgard™ Pro Series PPF, backed by 3M's global warranty. Our 3M-certified technicians work inside dust-controlled studios — essential for luxury vehicles.",
      areas: 'Dubai Marina · Palm Jumeirah · JVC · Al Barsha · Downtown Dubai · Yas Island · Saadiyat Island',
    },
    finishes: {
      label: 'Choose Your Finish',
      title: 'GLOSSY & MATTE 3M™ PPF —\nCHOOSE YOUR STYLE',
      glossy: {
        title: 'Glossy PPF',
        subtitle: 'High-Gloss Finish',
        desc: 'Perfect for owners who want a factory-fresh shine without altering the original paint.',
        points: [
          'Enhances shine and depth',
          'Virtually invisible',
          'Looks like factory clear coat',
          'Ideal for BMW, Mercedes, Lexus, Range Rover, Nissan Patrol, Land Cruiser',
        ],
      },
      matte: {
        title: 'Matte PPF',
        subtitle: 'Stealth / Satin Finish',
        desc: 'Ideal for a bold, premium transformation that turns heads.',
        points: [
          'Converts glossy paint into matte',
          'Creates a stealth, satin aesthetic',
          'Popular for Tesla, Porsche, AMG, Lamborghini, Bentley',
          'Same protection level as glossy',
        ],
      },
      both: {
        title: 'Both Finishes Offer',
        points: ['Self-Healing', 'UV Resistance', 'Sand Abrasion Protection', 'Chemical Resistance', '10-Year Durability', 'Non-Yellowing Performance'],
      },
      cta: 'Book Glossy or Matte PPF Installation on WhatsApp',
    },
    why3m: {
      label: 'Engineered for UAE Climate',
      title: "WHY 3M™ PRO SERIES IS THE\nBEST PPF FOR UAE CARS",
      desc: "UAE's climate is extreme — high UV, intense heat, sandstorms, and highway debris. 3M™ Pro Series is engineered specifically for these conditions.",
      points: [
        { icon: '☀️', title: 'Superior UV Resistance', desc: 'Blocks harmful UV rays that cause paint fading and oxidation' },
        { icon: '🌪️', title: 'Sand Abrasion Protection', desc: 'Shields against UAE sandstorms and fine abrasive particles' },
        { icon: '🔥', title: 'Heat-Activated Self-Healing', desc: 'Minor scratches disappear in the UAE heat naturally' },
        { icon: '🌡️', title: 'High-Temp Adhesive Stability', desc: 'Adhesive stays bonded even in extreme UAE summer heat' },
        { icon: '🔍', title: 'Long-Term Clarity', desc: 'Crystal-clear film that stays optically clear for years' },
      ],
    },
    packages: {
      label: 'Our PPF Packages',
      title: 'PREMIUM PPF SERVICES IN\nDUBAI & ABU DHABI',
      items: [
        {
          title: 'Full-Body PPF',
          subtitle: 'Maximum Protection',
          tag: 'FULL CAR',
          finish: 'Available in Glossy or Matte',
          desc: 'Complete coverage for your entire vehicle. Perfect for Range Rover, BMW, Nissan Patrol, Land Cruiser, Tesla, Porsche, Lamborghini, Bentley, and supercars.',
          time: '2–3 Days',
        },
        {
          title: 'Full Front PPF',
          subtitle: 'Most Popular Package',
          tag: 'POPULAR',
          finish: 'Available in Glossy or Matte',
          desc: 'Protects the highest-impact areas on your vehicle against UAE highway debris.',
          areas: ['Front Bumper', 'Full Bonnet', 'Full Fenders', 'Headlights', 'Mirrors'],
          time: '1 Day',
        },
        {
          title: 'Matte Transformation PPF',
          subtitle: 'Stealth Look + Protection',
          tag: 'MATTE ONLY',
          finish: 'Matte Finish',
          desc: 'Converts your glossy paint to a stunning matte finish. UV-resistant and self-healing. Ideal for Tesla, AMG, Lamborghini, and premium SUVs.',
          time: '1–3 Days',
        },
        {
          title: 'Partial PPF',
          subtitle: 'Targeted Protection',
          tag: 'PARTIAL',
          finish: 'Available in Glossy or Matte',
          desc: 'Protects high-touch and most vulnerable areas of your vehicle.',
          areas: ['Door Edges', 'Door Cups', 'Rear Bumper Top', 'Rocker Panels', 'Luggage Loading Area'],
          time: '3–5 Hours',
        },
      ],
    },
    comparison: {
      label: 'Glossy vs Matte',
      title: 'GLOSSY PPF VS MATTE PPF —\nWHICH SHOULD YOU CHOOSE?',
      headers: ['Feature', 'Glossy PPF', 'Matte PPF'],
      rows: [
        { feature: 'Finish', glossy: 'High-gloss, paint-like shine', matte: 'Satin / matte stealth finish' },
        { feature: 'Best For', glossy: 'BMW, Mercedes, Lexus, Range Rover', matte: 'Tesla, Porsche, AMG, Lamborghini' },
        { feature: 'Protection Level', glossy: '⭐⭐⭐⭐⭐', matte: '⭐⭐⭐⭐⭐' },
        { feature: 'Self-Healing', glossy: 'Yes', matte: 'Yes' },
        { feature: 'UV Resistance', glossy: 'Excellent', matte: 'Excellent' },
        { feature: 'Scratch Resistance', glossy: 'High', matte: 'High' },
        { feature: 'Stone Chip Protection', glossy: 'Excellent', matte: 'Excellent' },
        { feature: 'Color Change', glossy: 'No', matte: 'Yes (gloss → matte)' },
        { feature: 'Maintenance', glossy: 'Easy', matte: 'Slightly more' },
      ],
      cta: 'Book Glossy or Matte PPF on WhatsApp',
    },
    timing: {
      label: 'Installation Time',
      title: 'HOW LONG DOES PPF\nINSTALLATION TAKE?',
      desc: 'PPF installation time depends on the size of the vehicle, the areas being protected, and the condition of the paint.',
      items: [
        { title: 'Small / Partial Areas', time: '3–5 Hours', areas: 'Door edges, door cups, rear bumper, rocker panels' },
        { title: 'Full Front PPF', time: '1 Full Day', areas: 'Front bumper, full bonnet, full fenders, headlights, mirrors' },
        { title: 'Full-Body PPF', time: '2–3 Days', areas: 'Entire vehicle — varies by size and paint complexity' },
      ],
      polishing: {
        title: 'Do We Need Polishing Before PPF?',
        desc: "Yes — if the paint has scratches, swirl marks, or imperfections, polishing is required before applying PPF. PPF locks in whatever is underneath, so the surface must be perfectly clean and smooth.",
        points: [
          'No polishing if the car is brand new',
          'Light polishing for minor swirls',
          'Full paint correction for older or imperfect paint',
        ],
      },
    },
    whyUs: {
      label: 'Our Advantages',
      title: 'WHY LUXURY CAR OWNERS\nCHOOSE 3M OUR CAR',
      points: [
        'Official 3M™ PPF Installers',
        '20 Years of Experience',
        'Dust-Free Installation Environment',
        'Perfect Edges & Precision Cutting',
        'Self-Healing 3M™ Technology',
        'Premium Customer Service',
        'Long-Term Warranty',
        'Mall-Based Convenience',
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'FREQUENTLY ASKED\nQUESTIONS',
      items: [
        { q: 'Is PPF worth it in Dubai?', a: "Yes. Dubai's sand, heat, and road debris make PPF essential for long-term paint protection. Without it, paint chips, fades, and loses resale value rapidly." },
        { q: 'Do you offer both Glossy and Matte PPF?', a: 'Yes — 3M™ Scotchgard Pro Series is available in both Glossy and Matte finishes at 3M OUR CAR.' },
        { q: 'How long does 3M™ Scotchgard PPF last?', a: 'Up to 10 years with proper care and maintenance.' },
        { q: 'Does PPF protect against stone chips?', a: "Yes — it's the best defense against stone chips and sand abrasion, especially on UAE highways." },
        { q: "Will PPF change my car's color?", a: "Glossy PPF does not change the color. Matte PPF transforms gloss paint into a premium satin finish." },
        { q: 'Can PPF be removed?', a: 'Yes — it can be safely removed without damaging the original paint underneath.' },
        { q: 'Do you offer mobile PPF installation?', a: 'No — PPF requires a controlled, dust-free environment. All installations are done at our studio locations.' },
        { q: 'How long does PPF installation take?', a: 'Small areas: 3–5 hours. Full front package: 1 full day. Full car: 2–3 days depending on vehicle size and paint condition.' },
      ],
    },
    finalCta: {
      title: 'READY TO PROTECT YOUR\nLUXURY CAR WITH 3M™ PPF?',
      desc: 'Your luxury car deserves the highest level of protection. Choose 3M OUR CAR, the UAE\'s most trusted 3M-certified PPF installers.',
      cta1: 'Book Now — Protect Your Paint on WhatsApp',
      cta2: 'Book at a Mall Location',
    },
    related: {
      label: 'Complete Protection',
      title: 'PAIR PPF WITH OUR\nOTHER SERVICES',
      items: [
        { slug: 'window-tinting', icon: '🪟', title: '3M™ Window Tinting', desc: 'Block 97% heat & 99.9% UV rays. Installed in 55 minutes.' },
        { slug: 'ceramic-coating', icon: '✨', title: 'Ceramic Coating', desc: 'Layer ceramic coating over PPF for the ultimate paint protection.' },
        { slug: 'car-polishing', icon: '💎', title: 'Car Polishing', desc: 'Required paint correction before PPF for older vehicles.' },
        { slug: 'car-detailing', icon: '🚗', title: 'Car Detailing', desc: 'Full interior & exterior detail — before or after PPF installation.' },
      ],
    },
  },

  ar: {
    hero: {
      label: 'شريك 3M™ الرسمي منذ 2006',
      title1: 'فيلم حماية الطلاء',
      title2: 'سكوتشغارد™ من 3M™',
      title3: 'برو سيريز — الإمارات',
      subtitle: 'PPF لامع ومطفي للسيارات الفاخرة',
      desc: 'القيادة في الإمارات تعرّض سيارتك الفاخرة لظروف قاسية — تآكل الرمال، رشقات الحجارة، حرارة الأشعة فوق البنفسجية، الرطوبة، وحطام الطرق. 3M OUR CAR تركّب فيلم حماية الطلاء 3M™ سكوتشغارد™ برو سيريز في استوديوهات خالية من الغبار بدبي وأبوظبي.',
      cars: 'BMW · نيسان باترول · لاند كروزر · تيسلا · رينج روفر · لامبورغيني · بنتلي · بورش · مرسيدس',
      cta1: 'احصل على استشارة PPF مجانية عبر واتساب',
      cta2: 'احجز PPF الآن',
    },
    trust: {
      label: 'لماذا يثق أصحاب السيارات الفاخرة بنا',
      title: 'مركّبون رسميون من 3M™ بخبرة\n20 عاماً مثبتة',
      desc: 'لما يقارب عقدين من الزمن، تُعدّ 3M OUR CAR من أقدم الشركاء الرسميين لأفلام 3M™ في الإمارات. نركّب فقط فيلم 3M™ سكوتشغارد™ برو سيريز الأصلي، مدعوماً بضمان 3M العالمي. فنيونا المعتمدون يعملون داخل استوديوهات مضبوطة خالية من الغبار.',
      areas: 'دبي مارينا · نخلة جميرا · JVC · البرشاء · وسط مدينة دبي · جزيرة ياس · جزيرة السعديات',
    },
    finishes: {
      label: 'اختر تشطيبك',
      title: 'PPF لامع ومطفي من 3M™ —\nاختر ما يناسب أسلوبك',
      glossy: {
        title: 'PPF لامع',
        subtitle: 'تشطيب عالي اللمعان',
        desc: 'مثالي لمن يرغب في لمعان مصنعي طازج دون تغيير اللون الأصلي.',
        points: [
          'يعزز اللمعان والعمق',
          'غير مرئي تقريباً',
          'يبدو مثل طلاء المصنع',
          'مثالي لـ BMW، مرسيدس، لكزس، رينج روفر، نيسان باترول، لاند كروزر',
        ],
      },
      matte: {
        title: 'PPF مطفي',
        subtitle: 'تشطيب ستيلث / ساتان',
        desc: 'مثالي لتحويل مميز وفاخر يلفت الأنظار.',
        points: [
          'يحوّل الطلاء اللامع إلى مطفي',
          'يُنشئ مظهر ستيلث ساتان أنيق',
          'شائع لتيسلا، بورش، AMG، لامبورغيني، بنتلي',
          'نفس مستوى الحماية كالـ PPF اللامع',
        ],
      },
      both: {
        title: 'كلا التشطيبين يوفران',
        points: ['شفاء ذاتي', 'مقاومة الأشعة فوق البنفسجية', 'حماية من تآكل الرمال', 'مقاومة كيميائية', 'متانة 10 سنوات', 'أداء غير مصفر'],
      },
      cta: 'احجز تركيب PPF لامع أو مطفي عبر واتساب',
    },
    why3m: {
      label: 'مصمم لمناخ الإمارات',
      title: 'لماذا 3M™ برو سيريز هو\nأفضل PPF لسيارات الإمارات',
      desc: 'مناخ الإمارات قاسٍ — أشعة UV عالية، حرارة شديدة، عواصف رملية، وحطام الطرق. 3M™ برو سيريز مصمم خصيصاً لهذه الظروف.',
      points: [
        { icon: '☀️', title: 'مقاومة UV فائقة', desc: 'يحجب الأشعة الضارة التي تسبب بهتان الطلاء وأكسدته' },
        { icon: '🌪️', title: 'حماية من تآكل الرمال', desc: 'يحمي من العواصف الرملية في الإمارات والجزيئات الكاشطة الدقيقة' },
        { icon: '🔥', title: 'شفاء ذاتي بالحرارة', desc: 'الخدوش البسيطة تختفي بفعل حرارة الإمارات بشكل طبيعي' },
        { icon: '🌡️', title: 'استقرار اللاصق في الحرارة العالية', desc: 'يبقى اللاصق ملتصقاً حتى في أشد صيف الإمارات حرارة' },
        { icon: '🔍', title: 'وضوح طويل الأمد', desc: 'فيلم شفاف يحافظ على وضوحه البصري لسنوات' },
      ],
    },
    packages: {
      label: 'باقاتنا',
      title: 'خدمات PPF المتميزة في\nدبي وأبوظبي',
      items: [
        {
          title: 'PPF كامل الجسم',
          subtitle: 'أقصى حماية',
          tag: 'كامل السيارة',
          finish: 'متوفر لامع أو مطفي',
          desc: 'تغطية كاملة لسيارتك بالكامل. مثالي لرينج روفر، BMW، نيسان باترول، لاند كروزر، تيسلا، بورش، لامبورغيني، بنتلي والسيارات الرياضية.',
          time: '2–3 أيام',
        },
        {
          title: 'PPF الجزء الأمامي الكامل',
          subtitle: 'الباقة الأكثر طلباً',
          tag: 'الأكثر طلباً',
          finish: 'متوفر لامع أو مطفي',
          desc: 'يحمي أكثر المناطق تعرضاً للضربات على سيارتك في طرق الإمارات.',
          areas: ['المصدة الأمامية', 'الغطاء كاملاً', 'الأجنحة كاملاً', 'المصابيح الأمامية', 'المرايا'],
          time: 'يوم واحد',
        },
        {
          title: 'PPF تحويل مطفي',
          subtitle: 'مظهر ستيلث + حماية',
          tag: 'مطفي فقط',
          finish: 'تشطيب مطفي',
          desc: 'يحوّل طلاءك اللامع إلى تشطيب مطفي رائع. مقاوم للأشعة فوق البنفسجية وذاتي الشفاء. مثالي لتيسلا، AMG، لامبورغيني والـ SUV المتميزة.',
          time: '1–3 أيام',
        },
        {
          title: 'PPF جزئي',
          subtitle: 'حماية مستهدفة',
          tag: 'جزئي',
          finish: 'متوفر لامع أو مطفي',
          desc: 'يحمي المناطق الأكثر تعرضاً واللمس في سيارتك.',
          areas: ['حواف الأبواب', 'مقابض الأبواب', 'أعلى المصدة الخلفية', 'الروكر بانل', 'منطقة تحميل الأمتعة'],
          time: '3–5 ساعات',
        },
      ],
    },
    comparison: {
      label: 'لامع مقابل مطفي',
      title: 'PPF لامع مقابل مطفي —\nأيهما تختار؟',
      headers: ['الميزة', 'PPF لامع', 'PPF مطفي'],
      rows: [
        { feature: 'التشطيب', glossy: 'لمعان عالٍ يشبه الطلاء الأصلي', matte: 'تشطيب ساتان / مطفي ستيلث' },
        { feature: 'الأنسب لـ', glossy: 'BMW، مرسيدس، لكزس، رينج روفر', matte: 'تيسلا، بورش، AMG، لامبورغيني' },
        { feature: 'مستوى الحماية', glossy: '⭐⭐⭐⭐⭐', matte: '⭐⭐⭐⭐⭐' },
        { feature: 'الشفاء الذاتي', glossy: 'نعم', matte: 'نعم' },
        { feature: 'مقاومة UV', glossy: 'ممتازة', matte: 'ممتازة' },
        { feature: 'مقاومة الخدش', glossy: 'عالية', matte: 'عالية' },
        { feature: 'حماية من رشقات الحجارة', glossy: 'ممتازة', matte: 'ممتازة' },
        { feature: 'تغيير اللون', glossy: 'لا', matte: 'نعم (لامع → مطفي)' },
        { feature: 'سهولة الصيانة', glossy: 'سهلة', matte: 'تحتاج اهتماماً أكثر قليلاً' },
      ],
      cta: 'احجز PPF لامع أو مطفي عبر واتساب',
    },
    timing: {
      label: 'مدة التركيب',
      title: 'كم يستغرق تركيب\nPPF؟',
      desc: 'تعتمد مدة تركيب PPF على حجم السيارة، المناطق المراد حمايتها، وحالة الطلاء.',
      items: [
        { title: 'مناطق صغيرة / جزئية', time: '3–5 ساعات', areas: 'حواف الأبواب، مقابض الأبواب، المصدة الخلفية، الروكر بانل' },
        { title: 'PPF الجزء الأمامي الكامل', time: 'يوم كامل', areas: 'المصدة الأمامية، الغطاء الكامل، الأجنحة، المصابيح، المرايا' },
        { title: 'PPF كامل الجسم', time: '2–3 أيام', areas: 'السيارة بأكملها — يتفاوت حسب الحجم وتعقيد الألواح' },
      ],
      polishing: {
        title: 'هل نحتاج تلميعاً قبل تركيب PPF؟',
        desc: 'نعم — إذا كان الطلاء يحتوي على خدوش أو حلقات أو عيوب، يجب التلميع قبل تطبيق PPF. الفيلم يثبّت ما هو تحته، لذا يجب أن يكون السطح نظيفاً وأملساً تماماً.',
        points: [
          'لا تلميع للسيارة الجديدة تماماً',
          'تلميع خفيف للحلقات البسيطة',
          'تصحيح كامل للطلاء للسيارات القديمة أو ذات الطلاء المعيب',
        ],
      },
    },
    whyUs: {
      label: 'مميزاتنا',
      title: 'لماذا يختار أصحاب\nالسيارات الفاخرة 3M OUR CAR',
      points: [
        'مركّبون رسميون لـ PPF من 3M™',
        '20 عاماً من الخبرة',
        'بيئة تركيب خالية من الغبار',
        'حواف مثالية وقطع دقيق',
        'تقنية الشفاء الذاتي من 3M™',
        'خدمة عملاء متميزة',
        'ضمان طويل الأمد',
        'راحة التركيب في المراكز التجارية',
      ],
    },
    faq: {
      label: 'الأسئلة الشائعة',
      title: 'الأسئلة\nالشائعة',
      items: [
        { q: 'هل PPF يستحق التكلفة في دبي؟', a: 'نعم. رمال دبي، حرارتها، وحطام طرقها تجعل PPF ضرورياً للحماية طويلة الأمد. بدونه، يتشقق الطلاء، يبهت، وتنخفض قيمة الإعادة بيع بسرعة.' },
        { q: 'هل تقدمون PPF لامعاً ومطفياً؟', a: 'نعم — 3M™ سكوتشغارد برو سيريز متوفر بتشطيبين لامع ومطفي في 3M OUR CAR.' },
        { q: 'كم يدوم فيلم PPF سكوتشغارد من 3M™؟', a: 'حتى 10 سنوات مع العناية والصيانة المناسبة.' },
        { q: 'هل PPF يحمي من رشقات الحجارة؟', a: 'نعم — إنه أفضل وسيلة دفاع ضد رشقات الحجارة وتآكل الرمال، خاصة في طرق الإمارات السريعة.' },
        { q: 'هل PPF سيغيّر لون سيارتي؟', a: 'الـ PPF اللامع لا يغيّر اللون. أما الـ PPF المطفي فيحوّل الطلاء اللامع إلى تشطيب ساتان متميز.' },
        { q: 'هل يمكن إزالة PPF؟', a: 'نعم — يمكن إزالته بأمان دون إتلاف الطلاء الأصلي تحته.' },
        { q: 'هل تقدمون تركيب PPF المتنقل؟', a: 'لا — يتطلب PPF بيئة خاضعة للتحكم وخالية من الغبار. جميع التركيبات تتم في استوديوهات مواقعنا.' },
        { q: 'كم يستغرق تركيب PPF؟', a: 'المناطق الصغيرة: 3–5 ساعات. الجزء الأمامي الكامل: يوم كامل. كامل السيارة: 2–3 أيام حسب الحجم وحالة الطلاء.' },
      ],
    },
    finalCta: {
      title: 'مستعد لحماية سيارتك\nالفاخرة بـ PPF من 3M™؟',
      desc: 'سيارتك الفاخرة تستحق أعلى مستوى من الحماية. اختر 3M OUR CAR، الشريك الأكثر موثوقية في الإمارات.',
      cta1: 'احجز الآن — احمِ طلاءك عبر واتساب',
      cta2: 'احجز في موقع قريب منك',
    },
    related: {
      label: 'حماية متكاملة',
      title: 'اقرن PPF مع\nخدماتنا الأخرى',
      items: [
        { slug: 'window-tinting', icon: '🪟', title: 'تظليل زجاج 3M™', desc: 'احجب 97% من الحرارة و99.9% من الأشعة فوق البنفسجية. التركيب في 55 دقيقة.' },
        { slug: 'ceramic-coating', icon: '✨', title: 'الطلاء السيراميكي', desc: 'أضف طبقة سيراميكية فوق PPF للحصول على الحماية القصوى للطلاء.' },
        { slug: 'car-polishing', icon: '💎', title: 'تلميع السيارة', desc: 'تصحيح الطلاء المطلوب قبل PPF للسيارات القديمة.' },
        { slug: 'car-detailing', icon: '🚗', title: 'تفصيل السيارة', desc: 'تفصيل كامل داخلي وخارجي — قبل أو بعد تركيب PPF.' },
      ],
    },
  },
}

// ─── WHATSAPP BUTTON ─────────────────────────────────────────────────────────
function WAButton({ label, large = false }: { label: string; large?: boolean }) {
  const { lang } = useApp()
  const msg = encodeURIComponent(
    lang === 'ar'
      ? 'مرحباً! أود الاستفسار عن خدمة فيلم حماية الطلاء PPF.'
      : 'Hello! I would like to get a consultation for Paint Protection Film (PPF).'
  )
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 font-semibold tracking-widest uppercase transition-colors ${large ? 'text-sm px-10 py-5' : 'text-xs px-7 py-4'}`}
      style={{ background: '#25D366', color: 'white' }}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  )
}

// ─── PORTRAIT VIDEO ───────────────────────────────────────────────────────────
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

// ─── IMAGE WITH OVERLAY ───────────────────────────────────────────────────────
function CoverImg({ src, alt, ratio = '16/9' }: { src: string; alt: string; ratio?: string }) {
  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: ratio }}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
    </div>
  )
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export function PPFClient() {
  const { lang } = useApp()
  const isAr = lang === 'ar'
  const c = isAr ? content.ar : content.en
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-16"
        style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#001a0a 60%,var(--bg-page) 100%)' }}>
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
                  fontSize: 'clamp(2.5rem,5.5vw,5rem)',
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
                className="text-xs font-medium tracking-wide mb-8 italic"
                style={{ color: 'rgba(255,255,255,0.78)', textShadow: '0 2px 12px rgba(0,0,0,0.45)' }}
              >
                {c.hero.cars}
              </p>
              <div className="flex flex-wrap gap-4">
                <WAButton label={c.hero.cta1} />
                <Link href="/contact" className="text-xs font-semibold tracking-widest uppercase px-7 py-4 border transition-colors"
                  style={{ background: 'var(--red)', color: 'white', borderColor: 'var(--red)' }}>{c.hero.cta2}</Link>
              </div>
            </div>
            <PortraitVideo src="/videos/ppf-hero.mp4" />
          </div>
        </div>
      </section>

      {/* ── TRUST + STUDIO VIDEO ──────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.trust.label}</p>
            <h2 className="font-heading leading-none tracking-wide mb-6" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
              {c.trust.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
            </h2>
            <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>{c.trust.desc}</p>
            <p className="text-xs font-medium italic" style={{ color: 'var(--text-muted)' }}>{c.trust.areas}</p>
          </div>
          <PortraitVideo src="/videos/ppf-studio.mp4" />
        </div>
      </section>

      {/* ── IMAGE GALLERY — first 6 images ───────────────────────────────── */}
      <section className="py-4 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <MediaCarousel
            items={[1, 2, 3, 4, 5, 6].map((i) => ({
              src: `/images/ppf/ppf-${i}.jpg`,
              alt: i === 1
                ? '3M PPF installation UAE luxury car'
                : i === 2
                  ? '3M Scotchgard PPF Dubai'
                  : `3M PPF UAE ${i}`,
            }))}
            aspectRatio="16/9"
            autoPlay
            intervalMs={2400}
            showThumbnails
          />
        </div>
      </section>

      {/* ── GLOSSY & MATTE FINISHES ───────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.finishes.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.finishes.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Glossy */}
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderTop: '3px solid var(--red)' }}>
              <div className="font-heading text-3xl tracking-wide mb-1" style={{ color: 'var(--text-main)' }}>{c.finishes.glossy.title}</div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>{c.finishes.glossy.subtitle}</div>
              <p className="text-sm font-light leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{c.finishes.glossy.desc}</p>
              <div className="space-y-2">
                {c.finishes.glossy.points.map(p => (
                  <div key={p} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--red)' }} className="mt-0.5 flex-shrink-0">✓</span> {p}
                  </div>
                ))}
              </div>
            </div>
            {/* Matte */}
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderTop: '3px solid #888' }}>
              <div className="font-heading text-3xl tracking-wide mb-1" style={{ color: 'var(--text-main)' }}>{c.finishes.matte.title}</div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>{c.finishes.matte.subtitle}</div>
              <p className="text-sm font-light leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{c.finishes.matte.desc}</p>
              <div className="space-y-2">
                {c.finishes.matte.points.map(p => (
                  <div key={p} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--text-muted)' }} className="mt-0.5 flex-shrink-0">✓</span> {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Both offer */}
          <div className="border p-6 mb-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>{c.finishes.both.title}</div>
            <div className="flex flex-wrap gap-3">
              {c.finishes.both.points.map(p => (
                <span key={p} className="text-xs font-medium px-4 py-2 border" style={{ borderColor: 'var(--red)', color: 'var(--red)', background: 'rgba(200,16,46,0.06)' }}>{p}</span>
              ))}
            </div>
          </div>
          <WAButton label={c.finishes.cta} />
        </div>
      </section>

      {/* ── IMAGE GALLERY — images 7-10 ───────────────────────────────────── */}
      <section className="py-4 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <MediaCarousel
            items={[7, 8, 9, 10].map((i) => ({
              src: `/images/ppf/ppf-${i}.jpg`,
              alt: `3M PPF UAE luxury car ${i}`,
            }))}
            aspectRatio="16/9"
            autoPlay
            intervalMs={2200}
          />
        </div>
      </section>

      {/* ── WHY 3M PRO SERIES ─────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.why3m.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.why3m.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <p className="text-sm font-light mb-10 max-w-2xl" style={{ color: 'var(--text-muted)' }}>{c.why3m.desc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {c.why3m.points.map(p => (
              <div key={p.title} className="border p-6" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="text-3xl mb-4">{p.icon}</div>
                <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-main)' }}>{p.title}</div>
                <div className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.packages.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.packages.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {c.packages.items.map((pkg, idx) => (
              <div key={pkg.title} className="border p-8 relative overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: idx === 1 ? 'var(--red)' : 'var(--border)' }}>
                {idx === 1 && <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--red)' }} />}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-heading text-2xl tracking-wide" style={{ color: 'var(--text-main)' }}>{pkg.title}</div>
                    <div className="text-xs font-light mt-1" style={{ color: 'var(--text-muted)' }}>{pkg.subtitle}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1" style={{ background: idx === 1 ? 'var(--red)' : 'var(--bg-mid)', color: idx === 1 ? 'white' : 'var(--text-muted)' }}>{pkg.tag}</span>
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 border" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>⏱ {pkg.time}</span>
                  </div>
                </div>
                <p className="text-xs font-medium mb-3 tracking-wide" style={{ color: 'var(--red)' }}>{pkg.finish}</p>
                <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{pkg.desc}</p>
                {'areas' in pkg && pkg.areas && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {pkg.areas.map((a: string) => (
                      <span key={a} className="text-[11px] font-medium px-3 py-1 border" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg-mid)' }}>{a}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ──────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.comparison.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.comparison.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {c.comparison.headers.map((h, i) => (
                    <th key={h} className="px-5 py-4 text-left text-xs font-semibold tracking-widest uppercase border-b"
                      style={{ background: i === 1 ? 'var(--red)' : 'var(--bg-card)', color: i === 1 ? 'white' : 'var(--text-muted)', borderColor: 'var(--border)' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.comparison.rows.map((row, ri) => (
                  <tr key={row.feature} style={{ background: ri % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-page)' }}>
                    <td className="px-5 py-3 text-xs font-semibold uppercase tracking-wide border-b" style={{ color: 'var(--text-main)', borderColor: 'var(--border)' }}>{row.feature}</td>
                    <td className="px-5 py-3 text-xs font-medium border-b" style={{ color: 'var(--red)', borderColor: 'var(--border)' }}>{row.glossy}</td>
                    <td className="px-5 py-3 text-xs font-light border-b" style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}>{row.matte}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8"><WAButton label={c.comparison.cta} /></div>
        </div>
      </section>

      {/* ── TIMING + POLISHING ────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.timing.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.timing.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <p className="text-sm font-light mb-10 max-w-2xl" style={{ color: 'var(--text-muted)' }}>{c.timing.desc}</p>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {c.timing.items.map(item => (
              <div key={item.title} className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="font-heading text-4xl mb-2" style={{ color: 'var(--red)' }}>{item.time}</div>
                <div className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--text-main)' }}>{item.title}</div>
                <div className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.areas}</div>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderLeft: '3px solid var(--red)' }}>
              <h3 className="font-heading text-2xl tracking-wide mb-3" style={{ color: 'var(--text-main)' }}>{c.timing.polishing.title}</h3>
              <p className="text-sm font-light leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{c.timing.polishing.desc}</p>
              <div className="space-y-2">
                {c.timing.polishing.points.map(p => (
                  <div key={p} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--red)' }} className="flex-shrink-0">✓</span> {p}
                  </div>
                ))}
              </div>
            </div>
            <CoverImg src="/images/ppf/ppf-11.jpg" alt="Technician inspecting paint before PPF installation" ratio="4/3" />
          </div>
        </div>
      </section>

      {/* ── LAST 2 IMAGES ─────────────────────────────────────────────────── */}
      <section className="py-4 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <MediaCarousel
            items={[
              { src: '/images/ppf/ppf-12.jpg', alt: '3M PPF mall installation Dubai' },
              { src: '/images/ppf/ppf-13.jpg', alt: '3M PPF luxury car UAE' },
            ]}
            aspectRatio="16/9"
            autoPlay
            intervalMs={2600}
          />
        </div>
      </section>

      {/* ── LOCATIONS ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{isAr ? 'أين نحن' : 'Find Us'}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {isAr ? 'مواقعنا في\nدبي وأبوظبي' : 'PPF INSTALLATION\nNEAR YOU'}
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
              <div key={idx} className="border overflow-hidden" style={{ borderColor: openFaq === idx ? 'var(--red)' : 'var(--border)', background: 'var(--bg-card)' }}>
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
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--red)' }}>{isAr ? 'اعرف أكثر ←' : 'Learn More →'}</span>
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
              <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
                {c.finalCta.title.split('\n').map((l, i) => (
                  <span key={i}>{i === 0 ? l : <><br /><span style={{ color: 'var(--red)' }}>{l}</span></>}</span>
                ))}
              </h2>
              <p className="text-sm font-light max-w-md mx-auto mb-10 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{c.finalCta.desc}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <WAButton label={c.finalCta.cta1} large />
                <Link href="/contact" className="text-xs font-semibold tracking-widest uppercase px-8 py-4 border transition-colors"
                  style={{ background: 'transparent', color: 'var(--text-main)', borderColor: 'var(--border)' }}>{c.finalCta.cta2}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
