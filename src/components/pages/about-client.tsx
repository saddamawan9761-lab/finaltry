'use client'

import Image from 'next/image'
import { useApp } from '@/context/AppContext'

const PARTNER_LOGOS = ['partner-1.png', 'partner-2.png', 'partner-3.png', 'partner-4.png', 'partner-5.png', 'partner-6.png']

export function AboutClient() {
  const { lang, isRTL } = useApp()
  const isAr = lang === 'ar'

  const content = isAr
    ? {
        label: 'من نحن',
        heroTitle1: 'OUR CAR 3M',
        heroTitle2: 'وكيل معتمد لتظليل وحماية الزجاج',
        heroDesc:
          'منذ 2006، تُعد OUR CAR 3M الوجهة الرائدة في الإمارات لتظليل السيارات المعتمد من RTA، وفيلم حماية الطلاء (PPF)، والطلاء السيراميكي، وحلول الحماية المتقدمة. مع 9 فروع استراتيجية وخدمة أكثر من 78,000 مركبة، نقدم حماية معتمدة وقانونية وطويلة الأمد تناسب مناخ الشرق الأوسط القاسي.',
        storyLabel: 'قصتنا',
        storyTitle1: 'وضعنا المعيار',
        storyTitle2: 'منذ قرابة عقدين',
        story1:
          'بدأت OUR CAR 3M في عام 2006 من موقع واحد داخل ابن بطوطة مول. في ذلك الوقت، كان السوق مليئًا بالأفلام منخفضة الجودة التي تتلاشى بسرعة وتوفر عزلًا حراريًا ضعيفًا.',
        story2:
          'دخلنا السوق كوكيل معتمد رسمي من 3M، وقدمنا أفلامًا مختبرة مخبريًا ومدعومة بمعايير السلامة العالمية.',
        story3:
          'واليوم ما زلنا شركة تُدار مباشرة من المُلّاك، ما يضمن إشراف القيادة على الجودة والمعايير الفنية والرؤية طويلة المدى للتميز في جميع أنحاء الإمارات.',
        shopLabel: 'ظلّل أثناء التسوق',
        shopTitle1: 'تظليل السيارات في دبي وأبوظبي',
        shopTitle2: 'جاهز خلال 55 دقيقة',
        shopDesc:
          'تم تصميم نموذج "ظلّل أثناء التسوق" لراحتك. اركن سيارتك في مناطق التركيب المخصصة والمتحكم في غبارها، واستمتع بوقتك في المول، ثم عُد إلى سيارة محمية بالكامل خلال حوالي 55 دقيقة.',
        branches: 'مواقع الفروع',
        dubai:
          'دبي: مول الإمارات، دبي مول، دبي مارينا مول، برجمان مول، ديرة سيتي سنتر، مردف سيتي سنتر، سيركل مول JVC، وابن بطوطة مول.',
        abudhabi: 'أبوظبي: الوحدة مول.',
        rtaLabel: 'الالتزام بـ RTA',
        rtaTitle1: 'تظليل معتمد من RTA',
        rtaTitle2: 'قانوني 100% وآمن',
        rtaDesc:
          'جميع التركيبات في OUR CAR 3M تلتزم بشكل صارم بأنظمة هيئة الطرق والمواصلات في الإمارات. إذا كنت تبحث عن "هل تظليل 3M قانوني في دبي؟" أو "ما قانون تظليل 50% في الإمارات؟" فنحن نقدم لك الإجابات والحلول المتوافقة.',
        rta1: 'التوافق القانوني: نوفر درجة التظليل المسموح بها من RTA وهي 50% لسيارات الركاب.',
        rta2: 'تنوع الدرجات: اختر بين 30% أو 50% أو 70% حسب الخصوصية والعزل الحراري المطلوب.',
        rta3: 'سلامة معتمدة: وضوح رؤية ممتاز لقيادة الليل مع حجب 99% من الأشعة فوق البنفسجية الضارة.',
        awardLabel: 'الاعتماد والجوائز',
        awardTitle1: 'وكيل رسمي معتمد من',
        awardTitle2: '3M وجائزة التميز 2018',
        awardDesc:
          'لسنا مجرد منفذين للتركيب، بل مُطبقون معتمدون. في 2018 حصلنا على جائزة التميز من 3M تقديرًا لالتزامنا بالأصالة والدقة والجودة.',
        award1: 'الأصالة: نستخدم فقط منتجات وأفلام نوافذ 3M الأصلية.',
        award2: 'الدقة: يتم قص كل فيلم يدويًا وتركيبه بواسطة أكثر من 60 فنيًا معتمدًا، وكثير منهم بخبرة تتجاوز 19 عامًا.',
        award3: 'الجودة: الالتزام بمعايير 3M الفنية العالمية لكل مركبة.',
        premiumLabel: 'حماية فاخرة',
        premiumTitle1: '+78,000 مركبة',
        premiumTitle2: 'وما زال العدد في ازدياد',
        premiumDesc:
          'من السيارات اليومية إلى أفخم الطرازات الرائدة عالميًا، نحن الخيار الموثوق لمُلّاك السيارات الفاخرة وقادة الشركات.',
        brands: 'العلامات التي نخدمها يوميًا',
        brands1:
          'فاخرة وأداء عالٍ: Rolls-Royce Cullinan، Bentley Bentayga، Porsche Cayenne، Mercedes-Benz S-Class، BMW 7 Series، Audi Q8، وLexus LS.',
        brands2: 'المفضلة في الإمارات: Nissan Patrol، Toyota Land Cruiser، وRange Rover.',
        beyondLabel: 'ما بعد السيارات',
        beyondTitle1: 'الحماية للطريق',
        beyondTitle2: 'والمنزل والمكتب والبحر',
        b1: '3M Paint Protection Film (PPF): حماية ذاتية الالتئام ضد تطاير الحصى وأضرار الرمال.',
        b2: 'Ceramic Coating: حماية طاردة للماء ولمعان عميق للمقصورة والهيكل الخارجي.',
        b3: 'تظليل سكني وتجاري: تقليل حرارة موفر للطاقة للفلل والمكاتب.',
        b4: 'تظليل بحري: حلول متخصصة للحرارة والوهج لليخوت.',
        warrantyTitle: 'نظام ضمان رقمي حديث',
        w1: '1. كل خدمة تشمل ضمانًا مكتوبًا.',
        w2: '2. يتم ربط سجل الخدمة برقم اللوحة.',
        w3: '3. يمكنك زيارة أي فرع من فروعنا الـ9 بعد سنوات وسنسترجع السجلات فورًا دون أوراق.',
        whyTitle: 'لماذا تختار OUR CAR 3M؟',
        c1: '• تأسست في 2006: ما يقارب 20 عامًا من الريادة في سوق الإمارات.',
        c2: '• وكيل معتمد رسمي من 3M: ضمان منتجات أصلية.',
        c3: '• معتمد من RTA: التزام قانوني كامل (حتى حد 50%).',
        c4: '• خدمة 55 دقيقة: تظليل احترافي أثناء التسوق.',
        c5: '• تقييم 4.5 نجوم: ثقة آلاف العملاء الأفراد والشركات.',
        closing: 'لم ندخل السوق للمنافسة على السعر - دخلنا لرفع المعيار.',
        partners: 'شركاؤنا من الشركات',
      }
    : {
        label: 'About Us',
        heroTitle1: '3M OUR CAR',
        heroTitle2: 'Authorized 3M Window Tinting & Protection',
        heroDesc:
          'Since 2006, 3M OUR CAR has been the UAE’s premier destination for RTA-approved car tinting, Paint Protection Film (PPF), ceramic coating, and advanced automotive protection. With 9 strategic branches and 78,000+ vehicles serviced, we deliver certified, legal, and long-lasting protection tailored for the extreme Middle Eastern climate.',
        storyLabel: 'Our Story',
        storyTitle1: 'Setting the Standard',
        storyTitle2: 'for Nearly Two Decades',
        story1:
          '3M OUR CAR began in 2006 with a single location inside Ibn Battuta Mall. At the time, the market was flooded with low-grade films that faded quickly and offered poor heat rejection.',
        story2:
          'We entered as an Official 3M Authorized Dealer, introducing laboratory-tested films backed by global safety standards.',
        story3:
          'Today, we remain an owner-operated company. This ensures that our leadership stays directly involved in quality control, technical standards, and our long-term vision for excellence across the UAE.',
        shopLabel: 'Tint While You Shop',
        shopTitle1: 'Car Tinting in Dubai & Abu Dhabi',
        shopTitle2: 'Ready in 55 Minutes',
        shopDesc:
          'Our "Tint While You Shop" model was built for your convenience. Simply park in our dedicated, dust-controlled installation bays, enjoy your time at the mall, and return to a fully protected vehicle in approximately 55 minutes.',
        branches: 'Branch Locations',
        dubai:
          'Dubai: Mall of the Emirates, Dubai Mall, Dubai Marina Mall, BurJuman Mall, Deira City Centre, Mirdif City Centre, Circle Mall JVC, and Ibn Battuta Mall.',
        abudhabi: 'Abu Dhabi: Al Wahda Mall.',
        rtaLabel: 'RTA Compliance',
        rtaTitle1: 'RTA-Approved Tinting',
        rtaTitle2: '100% Legal & Safe',
        rtaDesc:
          'All installations at 3M OUR CAR strictly follow UAE RTA regulations. If you are searching for "Is 3M tint legal in Dubai?" or "What is the 50% tint law in UAE?", we provide the clear answers and compliant solutions you need.',
        rta1: 'Legal Compliance: We offer the RTA-allowed 50% tint darkness for passenger vehicles.',
        rta2: 'Shade Variety: Choose from 30%, 50%, or 70% shades based on your privacy and heat rejection needs.',
        rta3: 'Certified Safety: Our films ensure maximum visibility for night driving while blocking 99% of harmful UV rays.',
        awardLabel: 'Recognition',
        awardTitle1: 'Official 3M Dealer &',
        awardTitle2: '2018 Excellence Award Winner',
        awardDesc:
          "We aren't just installers; we are certified applicators. In 2018, we received the 3M Excellence Award, a prestigious recognition of our commitment.",
        award1: 'Authenticity: We use only genuine 3M window films and products.',
        award2: 'Precision: Every film is hand-cut and installed by our 60+ certified technicians, many of whom have over 19 years of experience.',
        award3: "Quality: Adherence to 3M's global technical standards for every single vehicle.",
        premiumLabel: 'Premium Protection',
        premiumTitle1: '78,000+ Vehicles',
        premiumTitle2: 'and Counting',
        premiumDesc:
          "From daily drivers to the world's most prestigious flagship models, we are the trusted choice for luxury owners and corporate leaders.",
        brands: 'Brands We Service Daily',
        brands1:
          'Luxury & Performance: Rolls-Royce Cullinan, Bentley Bentayga, Porsche Cayenne, Mercedes-Benz S-Class, BMW 7 Series, Audi Q8, and Lexus LS.',
        brands2: 'UAE Favorites: Nissan Patrol, Toyota Land Cruiser, and Range Rover.',
        beyondLabel: 'Beyond Automotive',
        beyondTitle1: 'Protection for Road,',
        beyondTitle2: 'Home, Office & Marine',
        b1: '3M Paint Protection Film (PPF): Self-healing protection against stone chips and sand damage.',
        b2: 'Ceramic Coating: Hydrophobic, deep-gloss protection for interiors and exteriors.',
        b3: 'Residential & Commercial Tinting: Energy-efficient heat reduction for villas and offices.',
        b4: 'Marine Tinting: Specialized heat and glare solutions for yachts.',
        warrantyTitle: 'A Modern Warranty System',
        w1: '1. Every service includes a written warranty.',
        w2: '2. Your service history is linked to your Plate Number.',
        w3: '3. Visit any of our 9 branches years later; we can retrieve your records instantly without physical documents.',
        whyTitle: 'Why Choose 3M OUR CAR?',
        c1: '• Established 2006: Nearly 20 years of UAE market leadership.',
        c2: '• Official 3M Authorized Dealer: Guaranteed genuine products.',
        c3: '• RTA Approved: Guaranteed legal compliance (up to 50% limit).',
        c4: '• 55-Minute Service: Professional tinting while you shop.',
        c5: '• 4.5-Star Rated: Trusted by thousands of individual and corporate clients.',
        closing: "We didn't enter the market to compete on price - we entered to raise the standard.",
        partners: 'Corporate Partners',
      }

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <section
        className="relative min-h-[72svh] flex items-end pb-16 overflow-hidden pt-24 px-6"
        style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#1a0005 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 30px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{content.label}</p>
          <h1 className="font-heading leading-none tracking-wide on-dark-title" style={{ fontSize: 'clamp(2.4rem,7vw,5.2rem)' }}>
            <span style={{ color: 'var(--red)', fontWeight: 800 }}>3M</span> {isAr ? 'OUR CAR' : 'OUR CAR'}
            <br />
            {content.heroTitle2}
          </h1>
          <p className="text-sm font-light leading-relaxed max-w-4xl mt-6 on-dark-soft">{content.heroDesc}</p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{content.storyLabel}</p>
            <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(1.9rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
              {content.storyTitle1}
              <br />
              {content.storyTitle2}
            </h2>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{content.story1}</p>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{content.story2}</p>
            <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{content.story3}</p>
          </div>
          <div className="border overflow-hidden" style={{ borderColor: 'var(--border)', background: '#ffffff' }}>
            <div className="relative w-full" style={{ aspectRatio: '16 / 10' }}>
              <Image src="/images/proof/certificate-automotive-window-films-ppf.jpg" alt="Official 3M certification" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" quality={100} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="border overflow-hidden" style={{ borderColor: 'var(--border)', background: '#ffffff' }}>
            <div className="relative w-full" style={{ aspectRatio: '16 / 10' }}>
              <Image src="/images/proof/award-excellence.jpg" alt="3M Excellence Award" fill className="object-contain" sizes="(min-width: 1024px) 45vw, 100vw" quality={100} />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{content.shopLabel}</p>
            <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(1.9rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
              {content.shopTitle1}
              <br />
              {content.shopTitle2}
            </h2>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{content.shopDesc}</p>
            <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-main)' }}>{content.branches}</p>
            <p className="text-sm font-light leading-relaxed mb-2" style={{ color: 'var(--text-muted)' }}>{content.dubai}</p>
            <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{content.abudhabi}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{content.rtaLabel}</p>
            <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'var(--text-main)' }}>
              {content.rtaTitle1}
              <br />
              {content.rtaTitle2}
            </h2>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{content.rtaDesc}</p>
            <ul className="space-y-3 text-sm font-light" style={{ color: 'var(--text-muted)' }}>
              <li>• {content.rta1}</li>
              <li>• {content.rta2}</li>
              <li>• {content.rta3}</li>
            </ul>
          </div>
          <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{content.awardLabel}</p>
            <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'var(--text-main)' }}>
              {content.awardTitle1}
              <br />
              {content.awardTitle2}
            </h2>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{content.awardDesc}</p>
            <ul className="space-y-3 text-sm font-light" style={{ color: 'var(--text-muted)' }}>
              <li>• {content.award1}</li>
              <li>• {content.award2}</li>
              <li>• {content.award3}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{content.premiumLabel}</p>
          <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(1.9rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {content.premiumTitle1}
            <br />
            {content.premiumTitle2}
          </h2>
          <p className="text-sm font-light leading-relaxed mb-6 max-w-4xl" style={{ color: 'var(--text-muted)' }}>{content.premiumDesc}</p>
          <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-main)' }}>{content.brands}</p>
          <ul className="space-y-2 text-sm font-light mb-8" style={{ color: 'var(--text-muted)' }}>
            <li>• {content.brands1}</li>
            <li>• {content.brands2}</li>
          </ul>

          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>{content.beyondLabel}</p>
          <h2 className="font-heading leading-none tracking-wide mb-8" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {content.beyondTitle1}
            <br />
            {content.beyondTitle2}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[content.b1, content.b2, content.b3, content.b4].map((item) => (
              <div key={item} className="border p-6 text-sm font-light leading-relaxed" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
                {item}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderInlineStart: '4px solid var(--red)' }}>
              <h3 className="font-heading text-3xl tracking-wide mb-3" style={{ color: 'var(--text-main)' }}>{content.warrantyTitle}</h3>
              <ol className="space-y-2 text-sm font-light" style={{ color: 'var(--text-muted)' }}>
                <li>{content.w1}</li>
                <li>{content.w2}</li>
                <li>{content.w3}</li>
              </ol>
            </div>
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <h3 className="font-heading text-3xl tracking-wide mb-3" style={{ color: 'var(--text-main)' }}>{content.whyTitle}</h3>
              <ul className="space-y-2 text-sm font-light" style={{ color: 'var(--text-muted)' }}>
                <li>{content.c1}</li>
                <li>{content.c2}</li>
                <li>{content.c3}</li>
                <li>{content.c4}</li>
                <li>{content.c5}</li>
              </ul>
              <p className="mt-5 text-sm font-semibold" style={{ color: 'var(--text-main)' }}>{content.closing}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-5" style={{ color: 'var(--red)' }}>{content.partners}</p>
          <div className="border p-6" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <style>{`
              .partner-marquee { overflow: hidden; position: relative; width: 100%; }
              .partner-track {
                display: flex; align-items: center; gap: 1rem; width: max-content;
                animation: partnerScroll 26s linear infinite;
              }
              .partner-marquee:hover .partner-track { animation-play-state: paused; }
              @keyframes partnerScroll {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
            `}</style>
            <div className="partner-marquee py-2">
              <div className="partner-track">
                {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, idx) => (
                  <div
                    key={`${logo}-${idx}`}
                    className="border p-2 shrink-0"
                    style={{ borderColor: 'var(--border)', background: '#ffffff', width: 'clamp(220px, 24vw, 320px)' }}
                  >
                    <div className="relative w-full h-28 md:h-32">
                      <Image src={`/images/partners/${logo}`} alt={`Partner logo ${idx + 1}`} fill className="object-contain" sizes="320px" quality={100} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

