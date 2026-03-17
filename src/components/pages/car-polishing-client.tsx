'use client'
// src/components/pages/car-polishing-client.tsx

import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/context/AppContext'
import { COMPANY, MALL_LOCATIONS } from '@/lib/constants'

const content = {
  en: {
    hero: {
      label: 'Official 3M™ Partner Since 2006',
      title1: 'PREMIUM 3M™',
      title2: 'CAR POLISHING',
      title3: 'UAE',
      subtitle: 'Professional Paint Restoration',
      desc: "UAE weather is harsh on your paint. Intense UV heat, sand abrasion, humidity, dust, and bird droppings slowly damage your clear coat — leaving your car dull, oxidized, and lifeless. 3M OUR CAR brings your paint back to life with premium 3M™ polishing engineered specifically for UAE conditions.",
      note: 'This is not basic buffing — it\'s professional paint revival using authentic 3M™ compounds, polishes, and protective waxes.',
      searches: 'car polishing Dubai · car polishing Abu Dhabi · 3M polishing Dubai · car polishing near me',
      cta1: 'Book Your Polishing Appointment on WhatsApp',
      cta2: 'Book Now',
    },
    trust: {
      label: 'Why UAE Car Owners Trust Us',
      title: 'OFFICIAL 3M™ PARTNERS WITH\n20 YEARS OF PROVEN EXPERTISE',
      desc: "For nearly two decades, 3M OUR CAR has been one of the UAE's longest-standing official 3M™ automotive care partners — restoring thousands of luxury vehicles across Dubai, Abu Dhabi, and the wider UAE.",
      cars: 'Mercedes · BMW · Porsche · Range Rover · Lexus · Tesla & more',
      points: [
        { icon: '🏅', title: '20+ Years in Operation', desc: 'Trusted since 2006' },
        { icon: '🔬', title: '3M-Certified Technicians', desc: 'Trained polishing specialists' },
        { icon: '🏠', title: 'Dust-Free Polishing Bays', desc: 'Controlled indoor environment' },
        { icon: '📸', title: 'Before/After Proof', desc: 'Available in-studio' },
        { icon: '✅', title: 'Authentic 3M™ Products Only', desc: 'No cheap alternatives ever' },
        { icon: '🎯', title: 'Zero Swirl Marks', desc: 'Flawless finish guaranteed' },
      ],
      guarantee: [
        'Zero swirl marks',
        'Zero holograms',
        'Zero paint burn',
        'A flawless, glossy finish',
        'Safe polishing for all paint types',
      ],
      tag: 'Professional paint restoration — not basic buffing.',
    },
    services: {
      label: 'Our Polishing Services',
      title: 'PREMIUM CAR POLISHING\n& DETAILING SERVICES',
      items: [
        {
          icon: '💎',
          title: 'Deep Exterior Polishing',
          subtitle: 'Remove Scratches, Swirl Marks & Oxidation',
          desc: 'We safely eliminate light scratches, swirl marks, oxidation, water spots, sand abrasion, and surface dullness. Your paint regains its depth, clarity, and smoothness.',
          removes: ['Light Scratches', 'Swirl Marks', 'Oxidation', 'Water Spots', 'Sand Abrasion', 'Surface Dullness'],
        },
        {
          icon: '🧲',
          title: 'Clay Bar Treatment',
          subtitle: 'Remove Embedded Contamination',
          desc: 'Creates a perfectly smooth surface for maximum gloss and long-lasting shine by removing all embedded surface contamination.',
          removes: ['Tar', 'Tree Sap', 'Industrial Fallout', 'Embedded Dirt'],
        },
        {
          icon: '✨',
          title: '3M™ Waxing',
          subtitle: 'Long-Lasting Shine & UV Protection',
          desc: 'Essential for cars exposed to UAE\'s intense climate. Locks in the polish and adds a durable protective layer.',
          removes: ['UV Fading Protection', 'Hydrophobic Protection', 'Enhanced Gloss', 'Sand & Dust Shield'],
        },
        {
          icon: '💡',
          title: 'Headlight Restoration',
          subtitle: 'Improve Visibility & Safety',
          desc: 'Faded headlights can reduce visibility by up to 80%. Our restoration process removes oxidation and restores full clarity and brightness.',
          removes: ['Oxidation Removal', 'Clarity Restored', 'Night Visibility', 'Safety Enhanced'],
        },
        {
          icon: '♨️',
          title: 'Steam Wash & Deep Cleaning',
          subtitle: 'Hospital-Grade Deep Clean',
          desc: 'High-temperature steam removes dirt, grime, and bacteria without damaging paint or clear coat — ideal for UAE\'s dusty environment.',
          removes: ['Deep Dirt Removal', 'Bacteria Eliminated', 'Paint Safe', 'UAE Dust Ready'],
        },
      ],
    },
    duration: {
      label: 'Service Duration',
      title: 'HOW LONG DOES CAR\nPOLISHING TAKE?',
      desc: 'A full 3M OUR CAR polishing and detailing service takes 4 to 6 hours, depending on paint condition, oxidation level, number of scratches, treatments required, and vehicle size.',
      time: '4–6 HOURS',
      stages: ['Steam Wash', 'Clay Bar', 'Compounding', 'Polishing', 'Waxing'],
      note: 'Every stage is completed with precision — we don\'t rush your shine.',
      factors: [
        { label: 'Paint Condition', desc: 'More oxidation = more time' },
        { label: 'Scratch Depth', desc: 'Deeper marks need more stages' },
        { label: 'Vehicle Size', desc: 'Sedan vs SUV vs luxury' },
        { label: 'Extra Treatments', desc: 'Clay bar, headlight, etc.' },
      ],
    },
    whyUAE: {
      label: 'UAE Essentials',
      title: 'WHY CAR POLISHING IS\nESSENTIAL IN THE UAE',
      points: [
        { num: '01', title: 'Protects Against UV Damage', desc: 'UAE sun degrades clear coat faster than anywhere else in the world' },
        { num: '02', title: 'Removes Sand Abrasion', desc: 'Desert sand micro-scratches your paint surface every day' },
        { num: '03', title: 'Enhances Resale Value', desc: 'A polished car commands a significantly higher resale price' },
        { num: '04', title: 'Prevents Long-Term Paint Damage', desc: 'Regular polishing stops small issues before they become expensive repairs' },
        { num: '05', title: 'Makes Your Car Look Brand New', desc: 'Restore the showroom shine you fell in love with on day one' },
      ],
    },
    convenience: {
      label: 'Mall-Based Service',
      title: 'POLISH YOUR CAR WHILE\nYOU SHOP',
      desc: 'Your time is valuable — and with 3M OUR CAR, you never have to wait at a workshop again. Drop your car at one of our mall locations, enjoy your day, and return to a fully restored, showroom-shine vehicle.',
      enjoy: ['Shop for groceries or fashion', 'Have lunch or dinner with friends', 'Watch a movie', 'Relax at the mall'],
      subtitle: 'Perfect for Busy Lifestyles',
      subdesc: 'Whether you\'re visiting the mall for 30 minutes or several hours, our team works efficiently in a controlled, dust-free indoor bay to deliver flawless results.',
      cta: 'Polish Your Car While You Shop → WhatsApp',
    },
    whyUs: {
      label: 'Our Advantages',
      title: 'WHY CUSTOMERS CHOOSE\n3M OUR CAR',
      points: [
        'Official 3M™ Polishing Products',
        '20 Years of Experience',
        'Mall-Based Convenience',
        'Professional Certified Technicians',
        'Safe, Controlled Environment',
        '4–6 Hour Complete Service',
        'Premium Customer Care',
      ],
      riskFree: {
        title: 'Risk-Free Experience',
        points: [
          'Satisfaction guarantee',
          '3M product authenticity assurance',
          "Polishing quality promise — we don't stop until your shine is perfect",
        ],
      },
    },
    faq: {
      label: 'FAQ',
      title: 'FREQUENTLY ASKED\nQUESTIONS',
      items: [
        { q: 'How long does car polishing take?', a: '4 to 6 hours depending on paint condition and required treatments. We work efficiently without rushing any stage.' },
        { q: 'Does polishing remove scratches?', a: 'Yes — light scratches, swirl marks, and oxidation are removed through our multi-stage professional polishing process using authentic 3M™ products.' },
        { q: 'Is 3M™ polishing safe for my paint?', a: 'Absolutely. 3M™ products are engineered to restore shine without damaging the clear coat. Our certified technicians ensure zero paint burn and zero holograms.' },
        { q: 'How often should I polish my car in Dubai?', a: 'Every 3–6 months, depending on sun exposure and parking conditions. Cars parked outdoors in Dubai need more frequent polishing due to UV and sand exposure.' },
        { q: 'Do you offer mobile polishing?', a: 'Yes — doorstep polishing is available in Dubai & Abu Dhabi. We bring our professional equipment directly to your home, office, or parking area.' },
        { q: 'Should I polish before applying PPF or ceramic coating?', a: 'Yes — polishing before PPF or ceramic coating is essential. It corrects any existing defects so the protective layer seals in a perfect surface.' },
        { q: 'What 3M™ products do you use?', a: 'We use only authentic 3M™ compounds, polishes, and waxes — no substitutes. This guarantees consistent, professional results on every vehicle.' },
      ],
    },
    finalCta: {
      title: 'READY TO RESTORE YOUR\nCAR\'S SHINE?',
      desc: 'Your car deserves to look its best — every single day. Bring back the gloss, depth, and clarity with 3M OUR CAR.',
      cta1: 'Book Now — Restore Your Shine on WhatsApp',
      cta2: 'WhatsApp Us for Instant Booking',
      cta3: 'Book at a Mall Location',
    },
    related: {
      label: 'Complete Car Care',
      title: 'COMPLETE YOUR CAR\'S\nPROTECTION',
      items: [
        { slug: 'window-tinting', icon: '🪟', title: '3M™ Window Tinting', desc: 'Block 97% heat & 99.9% UV. Installed in 55 minutes while you shop.' },
        { slug: 'ppf', icon: '🛡️', title: 'Paint Protection Film (PPF)', desc: 'Lock in your freshly polished paint with 3M™ Scotchgard PPF protection.' },
        { slug: 'ceramic-coating', icon: '✨', title: 'Ceramic Coating', desc: 'Apply ceramic coating after polishing for years of hydrophobic protection.' },
        { slug: 'car-detailing', icon: '🚗', title: 'Car Detailing', desc: 'Full interior & exterior detail — the perfect complement to polishing.' },
      ],
    },
  },

  ar: {
    hero: {
      label: 'شريك 3M™ الرسمي منذ 2006',
      title1: 'تلميع السيارات',
      title2: 'الاحترافي 3M™',
      title3: 'الإمارات',
      subtitle: 'ترميم الطلاء الاحترافي',
      desc: 'طقس الإمارات قاسٍ على طلاء سيارتك. الأشعة فوق البنفسجية الشديدة، تآكل الرمال، الرطوبة، الغبار، وفضلات الطيور تتلف طبقة الكليركوت ببطء — تاركةً سيارتك باهتة، متأكسدة، وفاقدة لحيويتها. 3M OUR CAR تُعيد الحياة لطلاءك بتلميع 3M™ المتميز المصمم خصيصاً لظروف الإمارات.',
      note: 'هذا ليس مجرد بفرة عادية — إنه ترميم احترافي للطلاء باستخدام مركبات 3M™ الأصلية والملمعات والشمعات الواقية.',
      searches: 'تلميع سيارة دبي · تلميع سيارة أبوظبي · تلميع 3M دبي · تلميع سيارة بالقرب مني',
      cta1: 'احجز موعد تلميع سيارتك عبر واتساب',
      cta2: 'احجز الآن',
    },
    trust: {
      label: 'لماذا يثق أصحاب السيارات بنا',
      title: 'شركاء رسميون من 3M™ بخبرة\n20 عاماً مثبتة',
      desc: 'لما يقارب عقدين من الزمن، تُعدّ 3M OUR CAR من أقدم الشركاء الرسميين لرعاية السيارات من 3M™ في الإمارات — حيث رممنا آلاف السيارات الفاخرة في دبي وأبوظبي وسائر أنحاء الإمارات.',
      cars: 'مرسيدس · BMW · بورش · رينج روفر · لكزس · تيسلا والمزيد',
      points: [
        { icon: '🏅', title: 'أكثر من 20 عاماً', desc: 'موثوق منذ 2006' },
        { icon: '🔬', title: 'فنيون معتمدون من 3M', desc: 'متخصصون مدرّبون في التلميع' },
        { icon: '🏠', title: 'أحواض تلميع خالية من الغبار', desc: 'بيئة داخلية مضبوطة' },
        { icon: '📸', title: 'إثبات قبل/بعد', desc: 'متاح في الاستوديو' },
        { icon: '✅', title: 'منتجات 3M™ الأصلية فقط', desc: 'لا بدائل رخيصة أبداً' },
        { icon: '🎯', title: 'صفر حلقات دوامة', desc: 'تشطيب لا تشوبه شائبة' },
      ],
      guarantee: [
        'صفر حلقات دوامة',
        'صفر هولوغرام',
        'صفر حرق للطلاء',
        'تشطيب لامع لا تشوبه شائبة',
        'تلميع آمن لجميع أنواع الطلاء',
      ],
      tag: 'ترميم احترافي للطلاء — وليس مجرد بفرة عادية.',
    },
    services: {
      label: 'خدمات التلميع لدينا',
      title: 'خدمات تلميع وتفصيل\nالسيارات المتميزة',
      items: [
        {
          icon: '💎',
          title: 'التلميع الخارجي العميق',
          subtitle: 'إزالة الخدوش وحلقات الدوامة والأكسدة',
          desc: 'نزيل بأمان الخدوش الخفيفة وحلقات الدوامة والأكسدة وبقع المياه وتآكل الرمال والبهتان السطحي. يستعيد طلاءك عمقه ووضوحه ونعومته.',
          removes: ['الخدوش الخفيفة', 'حلقات الدوامة', 'الأكسدة', 'بقع المياه', 'تآكل الرمال', 'البهتان السطحي'],
        },
        {
          icon: '🧲',
          title: 'معالجة كلاي بار',
          subtitle: 'إزالة التلوث المتداخل',
          desc: 'ينشئ سطحاً أملساً تماماً لأقصى لمعان وبريق طويل الأمد بإزالة جميع التلوثات السطحية المتداخلة.',
          removes: ['القطران', 'عصارة الأشجار', 'السقوط الصناعي', 'الأوساخ المتداخلة'],
        },
        {
          icon: '✨',
          title: 'تشميع 3M™',
          subtitle: 'بريق طويل الأمد وحماية UV',
          desc: 'ضروري للسيارات المعرضة لمناخ الإمارات الشديد. يثبّت التلميع ويضيف طبقة حماية متينة.',
          removes: ['حماية من بهتان UV', 'حماية مائية', 'لمعان معزز', 'درع ضد الرمال والغبار'],
        },
        {
          icon: '💡',
          title: 'ترميم المصابيح الأمامية',
          subtitle: 'تحسين الرؤية والسلامة',
          desc: 'المصابيح الباهتة يمكن أن تقلل الرؤية بنسبة تصل إلى 80%. يزيل عمليتنا الأكسدة ويستعيد الوضوح الكامل.',
          removes: ['إزالة الأكسدة', 'استعادة الوضوح', 'رؤية ليلية', 'سلامة معززة'],
        },
        {
          icon: '♨️',
          title: 'غسيل البخار والتنظيف العميق',
          subtitle: 'تنظيف عميق بدرجة عالية',
          desc: 'البخار عالي الحرارة يزيل الأوساخ والشحوم والبكتيريا دون إتلاف الطلاء أو الكليركوت — مثالي لبيئة الإمارات الغبارية.',
          removes: ['إزالة الأوساخ العميقة', 'القضاء على البكتيريا', 'آمن للطلاء', 'مناسب لغبار الإمارات'],
        },
      ],
    },
    duration: {
      label: 'مدة الخدمة',
      title: 'كم يستغرق تلميع\nالسيارة؟',
      desc: 'تستغرق خدمة التلميع والتفصيل الكاملة من 3M OUR CAR من 4 إلى 6 ساعات، اعتماداً على حالة الطلاء، مستوى الأكسدة، عدد الخدوش، المعالجات المطلوبة، وحجم السيارة.',
      time: '4–6 ساعات',
      stages: ['غسيل البخار', 'كلاي بار', 'الكومباوند', 'التلميع', 'التشميع'],
      note: 'كل مرحلة تُنجز بدقة — نحن لا نتسرع في إعادة بريق سيارتك.',
      factors: [
        { label: 'حالة الطلاء', desc: 'الأكسدة الأكثر = وقت أطول' },
        { label: 'عمق الخدوش', desc: 'العلامات الأعمق تحتاج مراحل أكثر' },
        { label: 'حجم السيارة', desc: 'سيدان مقابل SUV مقابل فاخرة' },
        { label: 'المعالجات الإضافية', desc: 'كلاي بار، مصابيح، وغيرها' },
      ],
    },
    whyUAE: {
      label: 'ضروريات الإمارات',
      title: 'لماذا التلميع ضروري\nفي الإمارات؟',
      points: [
        { num: '01', title: 'يحمي من أضرار الأشعة فوق البنفسجية', desc: 'شمس الإمارات تتلف الكليركوت أسرع من أي مكان آخر في العالم' },
        { num: '02', title: 'يزيل تآكل الرمال', desc: 'رمال الصحراء تخدش سطح طلاء سيارتك كل يوم' },
        { num: '03', title: 'يعزز قيمة الإعادة', desc: 'السيارة المُلمَّعة تُباع بسعر أعلى بشكل ملحوظ' },
        { num: '04', title: 'يمنع تلف الطلاء الطويل الأمد', desc: 'التلميع المنتظم يوقف المشاكل الصغيرة قبل أن تصبح إصلاحات مكلفة' },
        { num: '05', title: 'يجعل سيارتك تبدو كالجديدة', desc: 'استعد لمعان الصالة الذي أُعجبت به يوم الشراء' },
      ],
    },
    convenience: {
      label: 'خدمة المراكز التجارية',
      title: 'لمّع سيارتك بينما\nتتسوق',
      desc: 'وقتك ثمين — ومع 3M OUR CAR، لن تضطر أبداً إلى الانتظار في ورشة مرة أخرى. أسلّم سيارتك في أحد مواقعنا في المراكز التجارية، استمتع بيومك، وعد إلى سيارة مرممة بالكامل تلمع كالصالة.',
      enjoy: ['تسوق للبقالة أو الأزياء', 'تناول الغداء أو العشاء مع الأصدقاء', 'شاهد فيلماً', 'استرخِ في المول'],
      subtitle: 'مثالي لأصحاب الأنماط الحياتية المزدحمة',
      subdesc: 'سواء كنت تزور المول لمدة 30 دقيقة أو عدة ساعات، يعمل فريقنا بكفاءة في حوض داخلي مضبوط وخالٍ من الغبار لتحقيق نتائج لا تشوبها شائبة.',
      cta: 'لمّع سيارتك بينما تتسوق ← واتساب',
    },
    whyUs: {
      label: 'مميزاتنا',
      title: 'لماذا يختار العملاء\n3M OUR CAR',
      points: [
        'منتجات تلميع 3M™ الرسمية',
        '20 عاماً من الخبرة',
        'راحة المراكز التجارية',
        'فنيون محترفون معتمدون',
        'بيئة آمنة ومضبوطة',
        'خدمة تلميع كاملة 4–6 ساعات',
        'رعاية عملاء متميزة',
      ],
      riskFree: {
        title: 'تجربة بدون مخاطرة',
        points: [
          'ضمان الرضا',
          'ضمان أصالة منتجات 3M',
          'وعد جودة التلميع — لن نتوقف حتى يكمل بريق سيارتك',
        ],
      },
    },
    faq: {
      label: 'الأسئلة الشائعة',
      title: 'الأسئلة\nالشائعة',
      items: [
        { q: 'كم يستغرق تلميع السيارة؟', a: 'من 4 إلى 6 ساعات اعتماداً على حالة الطلاء والمعالجات المطلوبة. نعمل بكفاءة دون التسرع في أي مرحلة.' },
        { q: 'هل يزيل التلميع الخدوش؟', a: 'نعم — الخدوش الخفيفة وحلقات الدوامة والأكسدة تُزال من خلال عملية التلميع متعددة المراحل باستخدام منتجات 3M™ الأصلية.' },
        { q: 'هل تلميع 3M™ آمن لطلاء سيارتي؟', a: 'بالتأكيد. منتجات 3M™ مصممة لاستعادة البريق دون الإضرار بالكليركوت. فنيونا المعتمدون يضمنون صفر حرق للطلاء وصفر هولوغرام.' },
        { q: 'كم مرة يجب تلميع السيارة في دبي؟', a: 'كل 3–6 أشهر، اعتماداً على التعرض للشمس وظروف ركن السيارة. السيارات المركونة خارجاً في دبي تحتاج تلميعاً أكثر تكراراً بسبب الأشعة UV والرمال.' },
        { q: 'هل تقدمون التلميع المتنقل؟', a: 'نعم — التلميع على الباب متاح في دبي وأبوظبي. نجلب معداتنا المحترفة مباشرة إلى منزلك أو مكتبك أو موقف سيارتك.' },
        { q: 'هل يجب التلميع قبل PPF أو الطلاء السيراميكي؟', a: 'نعم — التلميع قبل PPF أو الطلاء السيراميكي ضروري. يُصحح العيوب الموجودة حتى تثبّت الطبقة الواقية سطحاً مثالياً.' },
        { q: 'ما منتجات 3M™ التي تستخدمونها؟', a: 'نستخدم فقط مركبات 3M™ الأصلية والملمعات والشمعات — لا بدائل. هذا يضمن نتائج احترافية ومتسقة على كل سيارة.' },
      ],
    },
    finalCta: {
      title: 'مستعد لاستعادة\nبريق سيارتك؟',
      desc: 'سيارتك تستحق أن تبدو في أفضل حالاتها — كل يوم. أعِد اللمعان والعمق والوضوح مع 3M OUR CAR.',
      cta1: 'احجز الآن — استعد بريقك عبر واتساب',
      cta2: 'راسلنا على واتساب للحجز الفوري',
      cta3: 'احجز في موقع قريب منك',
    },
    related: {
      label: 'رعاية السيارة الكاملة',
      title: 'أكمل حماية\nسيارتك',
      items: [
        { slug: 'window-tinting', icon: '🪟', title: 'تظليل زجاج 3M™', desc: 'احجب 97% من الحرارة و99.9% من الأشعة فوق البنفسجية. التركيب في 55 دقيقة.' },
        { slug: 'ppf', icon: '🛡️', title: 'فيلم حماية الطلاء PPF', desc: 'احمِ طلاءك المُلمَّع حديثاً بـ PPF سكوتشغارد™ من 3M.' },
        { slug: 'ceramic-coating', icon: '✨', title: 'الطلاء السيراميكي', desc: 'ضع الطلاء السيراميكي بعد التلميع لسنوات من الحماية المائية.' },
        { slug: 'car-detailing', icon: '🚗', title: 'تفصيل السيارة', desc: 'تفصيل كامل داخلي وخارجي — المكمل المثالي للتلميع.' },
      ],
    },
  },
}

// ─── WHATSAPP BUTTON ─────────────────────────────────────────────────────────
function WAButton({ label, large = false }: { label: string; large?: boolean }) {
  const { lang } = useApp()
  const msg = encodeURIComponent(
    lang === 'ar'
      ? 'مرحباً! أود الاستفسار عن خدمة تلميع السيارة.'
      : 'Hello! I would like to book a car polishing service.'
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

// ─── LANDSCAPE VIDEO ─────────────────────────────────────────────────────────
function LandscapeVideo({ src, overlay = true }: { src: string; overlay?: boolean }) {
  return (
    <div className="relative overflow-hidden w-full" style={{ aspectRatio: '16/9' }}>
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src={src} />
      {overlay && <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />}
    </div>
  )
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export function CarPolishingClient() {
  const { lang } = useApp()
  const isAr = lang === 'ar'
  const c = isAr ? content.ar : content.en
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-16"
        style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#0a0a1a 60%,var(--bg-page) 100%)' }}>
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
              <p className="text-sm font-medium mb-4 max-w-lg border-l-2 pl-4 italic" style={{ color: 'var(--text-main)', borderColor: 'var(--red)' }}>{c.hero.note}</p>
              <p className="text-xs font-light italic mb-8" style={{ color: 'var(--text-muted)' }}>{c.hero.searches}</p>
              <div className="flex flex-wrap gap-4">
                <WAButton label={c.hero.cta1} />
                <Link href="/contact" className="text-xs font-semibold tracking-widest uppercase px-7 py-4 transition-colors"
                  style={{ background: 'var(--red)', color: 'white' }}>{c.hero.cta2}</Link>
              </div>
            </div>
            <PortraitVideo src="/videos/polishing-hero.mp4" />
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.trust.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-6" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.trust.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <p className="text-sm font-light leading-relaxed mb-4 max-w-2xl" style={{ color: 'var(--text-muted)' }}>{c.trust.desc}</p>
          <p className="text-xs font-medium italic mb-10" style={{ color: 'var(--text-muted)' }}>{c.trust.cars}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {c.trust.points.map(p => (
              <div key={p.title} className="border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="text-2xl mb-3">{p.icon}</div>
                <div className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--text-main)' }}>{p.title}</div>
                <div className="text-xs font-light" style={{ color: 'var(--text-muted)' }}>{p.desc}</div>
              </div>
            ))}
          </div>
          <div className="border p-6" style={{ background: 'var(--bg-card)', borderColor: 'var(--red)', borderLeft: '3px solid var(--red)' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>{c.trust.tag}</p>
            <div className="flex flex-wrap gap-3">
              {c.trust.guarantee.map(g => (
                <span key={g} className="text-xs font-medium px-4 py-2 border" style={{ borderColor: 'var(--border)', color: 'var(--text-main)', background: 'var(--bg-mid)' }}>✓ {g}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LANDSCAPE VIDEO — full width ──────────────────────────────────── */}
      <div className="w-full">
        <LandscapeVideo src="/videos/polishing-process.mp4" />
      </div>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.services.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-12" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.services.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.services.items.map((svc, idx) => (
              <div key={svc.title} className={`border p-8 ${idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderTop: idx === 0 ? '3px solid var(--red)' : '1px solid var(--border)' }}>
                <div className="text-4xl mb-5">{svc.icon}</div>
                <div className="font-heading text-2xl tracking-wide mb-1" style={{ color: 'var(--text-main)' }}>{svc.title}</div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>{svc.subtitle}</div>
                <p className="text-sm font-light leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.removes.map(r => (
                    <span key={r} className="text-[11px] font-medium px-3 py-1 border" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg-mid)' }}>✓ {r}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DURATION ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.duration.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.duration.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <p className="text-sm font-light mb-10 max-w-2xl" style={{ color: 'var(--text-muted)' }}>{c.duration.desc}</p>

          {/* Big time display */}
          <div className="border p-10 mb-8 text-center" style={{ background: 'var(--red)' }}>
            <div className="font-heading text-white/20 leading-none select-none" style={{ fontSize: 'clamp(6rem,15vw,12rem)' }}>
              {isAr ? '٦–٤' : '4–6'}
            </div>
            <div className="font-heading text-3xl text-white tracking-widest -mt-6 relative z-10">
              {isAr ? 'ساعات' : 'HOURS'}
            </div>
            <div className="text-white/60 text-sm mt-3 font-light">{c.duration.note}</div>
          </div>

          {/* Stages */}
          <div className="flex flex-wrap gap-3 mb-10">
            {c.duration.stages.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <div className="border px-5 py-3 text-xs font-semibold tracking-widest uppercase" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-main)' }}>
                  <span style={{ color: 'var(--red)' }}>{String(i + 1).padStart(2, '0')} </span>{s}
                </div>
                {i < c.duration.stages.length - 1 && <span style={{ color: 'var(--text-muted)' }}>→</span>}
              </div>
            ))}
          </div>

          {/* Factors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.duration.factors.map(f => (
              <div key={f.label} className="border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-main)' }}>{f.label}</div>
                <div className="text-xs font-light" style={{ color: 'var(--text-muted)' }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY UAE ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.whyUAE.label}</p>
          <h2 className="font-heading leading-none tracking-wide mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {c.whyUAE.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <div className="space-y-3">
            {c.whyUAE.points.map(p => (
              <div key={p.num} className="border p-6 flex items-start gap-6 group hover:border-red-600 transition-colors"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--red)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
                <div className="font-heading text-4xl leading-none flex-shrink-0" style={{ color: 'var(--red)', opacity: 0.6 }}>{p.num}</div>
                <div>
                  <div className="text-base font-semibold mb-1" style={{ color: 'var(--text-main)' }}>{p.title}</div>
                  <div className="text-sm font-light" style={{ color: 'var(--text-muted)' }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONVENIENCE ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{c.convenience.label}</p>
            <h2 className="font-heading leading-none tracking-wide mb-6" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
              {c.convenience.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
            </h2>
            <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>{c.convenience.desc}</p>
            <div className="space-y-3 mb-6">
              {c.convenience.enjoy.map(e => (
                <div key={e} className="flex items-center gap-3">
                  <div className="w-2 h-2 flex-shrink-0" style={{ background: 'var(--red)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--text-main)' }}>{e}</span>
                </div>
              ))}
            </div>
            <div className="border p-5 mb-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderLeft: '3px solid var(--red)' }}>
              <div className="text-sm font-semibold mb-2" style={{ color: 'var(--text-main)' }}>{c.convenience.subtitle}</div>
              <div className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{c.convenience.subdesc}</div>
            </div>
            <WAButton label={c.convenience.cta} />
          </div>

          {/* Locations grid */}
          <div>
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
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--red)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3 text-white/70">{c.whyUs.label}</p>
            <h2 className="font-heading leading-none tracking-wide mb-10 text-white" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
              {c.whyUs.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
            </h2>
            <div className="space-y-2">
              {c.whyUs.points.map(p => (
                <div key={p} className="flex items-center gap-3 border border-white/20 bg-white/10 px-5 py-3">
                  <span className="text-white font-bold flex-shrink-0">✓</span>
                  <span className="text-sm text-white font-light">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-white/30 bg-white/10 p-8">
            <div className="text-white font-heading text-2xl tracking-wide mb-5">{c.whyUs.riskFree.title}</div>
            <div className="space-y-3">
              {c.whyUs.riskFree.points.map(p => (
                <div key={p} className="flex items-start gap-3">
                  <span className="text-white font-bold flex-shrink-0 mt-0.5">★</span>
                  <span className="text-sm text-white/85 font-light leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <WAButton label={isAr ? 'احجز خدمة التلميع ← واتساب' : 'Book Your Polishing Service → WhatsApp'} />
            </div>
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
