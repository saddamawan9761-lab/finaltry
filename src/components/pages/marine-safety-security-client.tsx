'use client'
/**
 * Image placeholders — add files under public/images/marine/:
 * marine-safety-1.jpg … marine-safety-4.jpg — hero auto-slider (e.g. commercial vessel bridge, wide shots)
 * marine-safety-5.jpg — technician applying film on bridge window
 * marine-safety-6.jpg — clear film on ship bridge glass
 * marine-safety-7.jpg, marine-safety-8.jpg — solar vs clear comparison (auto-slider)
 * marine-safety-9.jpg — on-site installation / port (optional hero for locations section)
 */

import { useEffect, useMemo, useState, type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useApp } from '@/context/AppContext'
import { COMPANY } from '@/lib/constants'
import { getWhatsAppUrl } from '@/lib/utils'

type Slide = { src: string; alt: string }

function AutoSlider({ slides }: { slides: Slide[] }) {
  const [idx, setIdx] = useState(0)
  const total = slides.length
  const active = slides[idx]

  useEffect(() => {
    if (total <= 1) return
    const id = window.setInterval(() => setIdx((i) => (i + 1) % total), 1200)
    return () => window.clearInterval(id)
  }, [total])

  return (
    <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
        <Image key={active.src} src={active.src} alt={active.alt} fill className="object-cover" sizes="100vw" priority />
      </div>
      <div className="flex items-center justify-end px-4 py-3">
        <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }} aria-label="Slide position">
          {idx + 1} / {total}
        </div>
      </div>
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm font-light leading-relaxed">
          <span aria-hidden className="mt-1.5 w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--red)' }} />
          <span style={{ color: 'var(--text-muted)' }}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string
  title: ReactNode
  subtitle?: ReactNode
}) {
  return (
    <div className="max-w-3xl">
      {kicker && (
        <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>
          {kicker}
        </p>
      )}
      <h2 className="font-heading leading-none tracking-wide mb-3" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

function WhatsAppCta({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-flex items-center justify-center"
      style={{ background: '#25D366', color: 'white', borderRadius: '4px' }}
    >
      {label}
    </a>
  )
}

export function MarineSafetySecurityClient() {
  const { lang } = useApp()
  const isAr = lang === 'ar'

  const t = isAr
    ? {
        heroTitle: 'تركيب أفلام الأمان والحماية البحرية في دبي وأبوظبي',
        heroSubtitle: 'أفلام بحرية مضادة للتحطم وشمسية فاخرة لأقصى حماية للسفن',
        heroLead:
          'تواجه السفن في مياه الإمارات حرارة شديدة، وتعرضًا عاليًا للأشعة فوق البنفسجية، وتآكلًا من المياه المالحة، ومخاطر أمنية متزايدة. تقدم OUR CAR 3M، المزود الرائد لأفلام الأمان البحرية في الإمارات، حلول حماية معتمدة مصممة خصيصًا للبيئات البحرية القاسية.',
        heroBullets: [
          'الطقس القاسي والبحار الهائجة',
          'الصدمات المفاجئة أو التصادم',
          'الدخول القسري أو حماية زجاج مضادة للقرصنة',
          'الأشعة فوق البنفسجية والحرارة داخل المقصورات',
        ],
        heroFoot:
          'نفس الحماية المتقدمة الموثوقة في المنشآت عالية الأمان — الآن مُحسّنة للسفن في دبي وأبوظبي.',
        ctaQuote: 'احصل على عرض سعر لتركيب فيلم الأمان البحري',
        trustTitle: 'لماذا يثق مشغّلو البحر في OUR CAR 3M منذ 2006',
        trustLead:
          'كمُركّبين معتمدين لأفلام 3M البحرية للأمان، نجلب قرابة عقدين من الخبرة في تركيب أفلام النوافذ البحرية في دبي وأفلام مضادة للتحطم في أبوظبي. تلتزم تركيباتنا بمعايير دولية تشمل:',
        trustBullets: [
          'تقليل الأشعة فوق البنفسجية والحرارة للسفن',
          'مقاومة الصدمات',
          'متانة في بيئة المياه المالحة',
          'أداء فيلم أمان متوافق مع متطلبات IMO',
          'وضوح طويل الأمد وسلامة هيكلية',
        ],
        trustFoot: 'نخدم الأساطيل التجارية، ناقلات النفط، السفن السياحية، العبّارات، واليخوت الخاصة في:',
        trustLocations:
          'دبي مارينا • ميناء جبل علي • دبي هاربور • ياس مارينا • ميناء أبوظبي • جزيرة السعديات • أرصفة خاصة في أنحاء الإمارات',
        solutionsKicker: 'الحلول',
        solutionsTitle: 'أفلام الأمان والحماية البحرية',
        solutionsSubtitle: 'مصممة لبيئات بحرية قاسية — للوضوح والأمان والأداء طويل المدى.',
        clearTitle: 'فيلم بحر شفاف مضاد للتحطم',
        clearDesc:
          'مصمم لمناطق الملاحة التي تتطلب رؤية كاملة، يوفر حماية قوية لنوافذ السفن في الإمارات دون تغيير مظهر الزجاج.',
        clearBenefits: 'المزايا',
        clearBenefitItems: [
          'شفاف تمامًا لرؤية ملاحية غير معوقة',
          'متاح بعدة سماكات',
          'يحجب حتى 99% من الأشعة فوق البنفسجية',
          'يعزز الزجاج بتقوية بحرية',
          'يجعل الاقتحام والدخول القسري أصعب بكثير',
          'يمنع التحطم عند الصدمة أو التصادم',
        ],
        clearIdeal: 'مثالي لـ',
        clearIdealItems: ['سفن شحن', 'ناقلات نفط', 'بواخر سياحية', 'عبّارات ركاب', 'يخوت خاصة'],
        solarTitle: 'فيلم بحر شمسي مضاد للتحطم',
        solarDesc:
          'حل مزدوج الأداء يجمع رفض الحرارة والخصوصية وحماية التحطم — مثالي للراحة والأمان.',
        solarBenefits: 'المزايا',
        solarBenefitItems: [
          'رفض حراري ممتاز لمقصورات أكثر برودة',
          'خصوصية محسّنة من الخارج',
          'حماية من الأشعة فوق البنفسجية +99%',
          'أداء قوي مضاد للتحطم',
          'مثالي لتطبيقات الأفلام الشمسية البحرية في دبي',
          'راحة أفضل للطاقم والركاب',
        ],
        solarIdeal: 'مثالي لـ',
        solarIdealItems: ['المقصورات', 'أماكن إقامة الطاقم', 'صالات الركاب', 'غرف التحكم'],
        ctaSpecialist: 'تحدث مع أخصائي الأفلام البحرية',
        essentialKicker: 'الأهمية',
        essentialTitle: 'لماذا فيلم الأمان البحري ضروري في مياه الإمارات',
        essentialLead: 'مناخ الإمارات والظروف البحرية يجعلان تركيب فيلم الأمان البحرية ضرورة وليس رفاهية.',
        essentialAdvantages: 'مزايا رئيسية',
        essentialItems: [
          'زيادة الأمان أثناء العواصف أو البحار الهائجة أو الصدمات العرضية',
          'يؤخر الدخول القسري ويعزز الحماية ضد القرصنة',
          'يقلل الحمل الحراري واستهلاك التكييف',
          'يحمي المقصورات من بهتان الأشعة فوق البنفسجية',
          'يعزز الخصوصية في المناطق التشغيلية الحساسة',
          'يطيل عمر الزجاج البحري',
        ],
        onsiteKicker: 'التركيب',
        onsiteTitle: 'تركيب أفلام بحرية في الموقع عبر دبي وأبوظبي',
        onsiteLead: 'نوفر تركيبًا سريعًا واحترافيًا في الموانئ والمراسي وأحواض السفن والأرصفة الخاصة.',
        dubaiLocs: 'مواقع دبي',
        dubaiList: [
          'دبي مارينا',
          'ميناء جبل علي',
          'دبي هاربور',
          'نخلة جميرا',
          'ميناء أم سقيم',
          'مرسى جميرا 1',
        ],
        adLocs: 'مواقع أبوظبي',
        adList: ['ميناء أبوظبي', 'ياس مارينا', 'مرسى البطين', 'جزيرة السعديات', 'شاطئ الراحة'],
        ctaOnsite: 'احجز تركيب فيلم بحري في الموقع',
        whyTitle: 'لماذا يختار مشغّلو البحر OUR CAR 3M',
        whyItems: [
          '✔ مُركّبو أفلام 3M البحرية الرسميون',
          '✔ خدمة مشغّلي البحر في الإمارات منذ 2006',
          '✔ تركيب سريع ونظيف واحترافي',
          '✔ أفلام مضادة للتحطم وشمسية عالية الجودة',
          '✔ حماية مدعومة بالضمان',
          '✔ تركيب في الموقع في الموانئ والمراسي',
        ],
        faqTitle: 'الأسئلة الشائعة',
        faq: [
          {
            q: 'هل يؤثر فيلم الأمان البحري على الرؤية؟',
            a: 'لا. الأفلام الشفافة تحافظ على الوضوح البصري الكامل، مما يجعلها مثالية لنوافذ الجسر.',
          },
          {
            q: 'هل يمكن للفيلم الحماية من الدخول القسري أو محاولات القرصنة؟',
            a: 'نعم. لا يجعل الفيلم الزجاج غير قابل للكسر، لكن أفلامنا البحرية تؤخر الدخول القسري بشكل كبير وتمنع التحطم.',
          },
          {
            q: 'هل يقلل الفيلم الحرارة داخل السفينة؟',
            a: 'نعم. الأفلام الشمسية توفر تقليلًا قويًا للأشعة فوق البنفسجية والحرارة وتحسّن الراحة وتقلل استخدام التكييف.',
          },
          {
            q: 'هل يناسب فيلم الجسر؟',
            a: 'بالتأكيد. الفيلم الشفاف المضاد للتحطم مثالي لمناطق الملاحة التي تتطلب رؤية كاملة.',
          },
          {
            q: 'كم يستغرق التركيب؟',
            a: 'يمكن إنجاز معظم السفن خلال بضع ساعات، حسب الحجم وعدد النوافذ.',
          },
        ],
        finalTitle: 'احمِ سفينتك بفيلم أمان بحري معتمد',
        finalLead:
          'يستحق طاقمك وركابك وسفينتك أعلى مستوى من الحماية. تقدم OUR CAR 3M حلول أمان بحرية طويلة الأمد موثوقة من مشغّلي البحر في الإمارات لقرابة 20 عامًا.',
        ctaFinalQuote: 'اطلب عرض سعر لفيلم الأمان البحري',
        waBooking: 'واتساب للحجز السريع',
        backMarine: '← العودة إلى البحري',
        marineTinting: 'الخدمات البحرية',
      }
    : {
        heroTitle: 'Marine Safety & Security Window Film Installation in Dubai & Abu Dhabi',
        heroSubtitle: 'Premium Anti-Shatter & Solar Marine Films for Maximum Vessel Protection',
        heroLead:
          'Marine vessels in UAE waters face extreme heat, high UV exposure, saltwater corrosion, and increasing security risks. 3M OUR CAR, the leading provider of marine safety film UAE, delivers certified protection solutions engineered specifically for harsh marine environments.',
        heroBullets: [
          'Harsh weather and rough seas',
          'Sudden impact or collision',
          'Forced entry or anti-piracy glass protection',
          'UV and heat buildup inside cabins',
        ],
        heroFoot:
          'This is the same advanced protection trusted by high-security facilities—now optimized for marine vessels across Dubai and Abu Dhabi.',
        ctaQuote: 'Get a Marine Safety Film Installation Quote',
        trustTitle: 'Why Marine Operators Across the UAE Trust 3M OUR CAR Since 2006',
        trustLead:
          'As certified 3M marine safety film installers, we bring nearly two decades of expertise in marine window film installation Dubai and anti-shatter marine film Abu Dhabi. Our installations meet international standards for:',
        trustBullets: [
          'UV and heat reduction for vessels',
          'Impact resistance',
          'Saltwater durability',
          'IMO-compliant safety film performance',
          'Long-term clarity and structural integrity',
        ],
        trustFoot: 'We service commercial fleets, oil vessels, cruise liners, ferries, and private yachts across:',
        trustLocations:
          'Dubai Marina • Jebel Ali Port • Dubai Harbour • Yas Marina • Abu Dhabi Port • Saadiyat Island • Private docks across the UAE',
        solutionsKicker: 'Solutions',
        solutionsTitle: 'Marine Safety & Security Film Solutions',
        solutionsSubtitle: 'Engineered for extreme marine environments — built for clarity, safety, and long-term performance.',
        clearTitle: 'Clear Anti-Shatter Marine Film',
        clearDesc:
          'Designed for navigation areas requiring full visibility, this film provides powerful marine vessel window protection UAE without altering the appearance of the glass.',
        clearBenefits: 'Benefits',
        clearBenefitItems: [
          'Completely clear for unobstructed navigation',
          'Available in multiple thickness levels',
          'Blocks up to 99% of UV rays',
          'Reinforces glass with marine-grade window reinforcement',
          'Makes break-ins and forced entry significantly harder',
          'Prevents shattering during impact or collision',
        ],
        clearIdeal: 'Ideal For',
        clearIdealItems: ['Cargo ships', 'Oil vessels', 'Cruise liners', 'Passenger ferries', 'Private yachts'],
        solarTitle: 'Solar Anti-Shatter Marine Film',
        solarDesc:
          'A dual-performance solution combining heat rejection, privacy, and shatter protection—ideal for comfort and security.',
        solarBenefits: 'Benefits',
        solarBenefitItems: [
          'Superior heat rejection for cooler cabins',
          'Enhanced privacy from outside visibility',
          '99%+ UV protection',
          'Strong anti-shatter performance',
          'Ideal for marine solar film Dubai applications',
          'Improves comfort for crew and passengers',
        ],
        solarIdeal: 'Ideal For',
        solarIdealItems: ['Cabins', 'Crew quarters', 'Passenger lounges', 'Control rooms'],
        ctaSpecialist: 'Speak to a Marine Film Specialist',
        essentialKicker: 'Why It Matters',
        essentialTitle: 'Why Marine Safety Film Is Essential in UAE Waters',
        essentialLead:
          'The UAE’s climate and maritime conditions make marine security film installation a necessity—not a luxury.',
        essentialAdvantages: 'Key Advantages',
        essentialItems: [
          'Increased safety during storms, rough seas, or accidental impact',
          'Delays forced entry and enhances anti-piracy glass protection',
          'Reduces heat load and AC consumption',
          'Protects interiors from UV fading',
          'Enhances privacy for sensitive operational areas',
          'Extends the lifespan of marine glass',
        ],
        onsiteKicker: 'Installation',
        onsiteTitle: 'On-Site Marine Film Installation Across Dubai & Abu Dhabi',
        onsiteLead: 'We provide fast, professional on-site installation at ports, marinas, shipyards, and private docks.',
        dubaiLocs: 'Dubai Locations',
        dubaiList: [
          'Dubai Marina',
          'Jebel Ali Port',
          'Dubai Harbour',
          'Palm Jumeirah',
          'Umm Suqeim Harbour',
          'Jumeirah 1 Marina',
        ],
        adLocs: 'Abu Dhabi Locations',
        adList: ['Abu Dhabi Port', 'Yas Marina', 'Al Bateen Marina', 'Saadiyat Island', 'Al Raha Beach'],
        ctaOnsite: 'Book On-Site Marine Film Installation',
        whyTitle: 'Why Marine Operators Choose 3M OUR CAR',
        whyItems: [
          '✔ Official 3M Marine Film Installers',
          '✔ Serving UAE marine operators since 2006',
          '✔ Fast, clean, professional installation',
          '✔ High-grade anti-shatter & solar films',
          '✔ Warranty-backed protection',
          '✔ On-site installation at ports & marinas',
        ],
        faqTitle: 'Frequently Asked Questions',
        faq: [
          {
            q: 'Does marine safety film affect visibility?',
            a: 'No. Our clear films maintain full optical clarity, making them ideal for ship bridge window film applications.',
          },
          {
            q: 'Can safety film protect against forced entry or piracy attempts?',
            a: 'Yes. While no film makes glass unbreakable, our marine-grade films significantly delay forced entry and prevent shattering.',
          },
          {
            q: 'Does the film reduce heat inside the vessel?',
            a: 'Yes. Solar films provide powerful UV and heat reduction for vessels, improving comfort and reducing AC usage.',
          },
          {
            q: 'Is the film suitable for bridge windows?',
            a: 'Absolutely. Clear anti-shatter film is perfect for navigation areas requiring full visibility.',
          },
          {
            q: 'How long does installation take?',
            a: 'Most vessels can be completed within a few hours, depending on size and number of windows.',
          },
        ],
        finalTitle: 'Protect Your Vessel With Certified Marine-Grade Safety Film',
        finalLead:
          'Your crew, passengers, and vessel deserve the highest level of protection. 3M OUR CAR delivers IMO-compliant, long-lasting marine safety solutions trusted by UAE marine operators for nearly 20 years.',
        ctaFinalQuote: 'Request a Marine Safety Film Quote',
        waBooking: 'WhatsApp Us for Fast Booking',
        backMarine: '← Back to Marine',
        marineTinting: 'Marine Services',
      }

  const waUrl = useMemo(() => {
    const msg = isAr
      ? 'مرحباً! أود عرض سعر لتركيب فيلم أمان وحماية بحري (3M) لسفينتي في الإمارات.'
      : 'Hello! I would like a quote for 3M marine safety & security window film installation for my vessel in UAE.'
    return getWhatsAppUrl(COMPANY.whatsapp, msg)
  }, [isAr])

  const waFastUrl = useMemo(() => {
    const msg = isAr ? 'مرحباً! أود حجز سريع لتركيب فيلم أمان بحري.' : 'Hello! I would like fast booking for marine safety film installation.'
    return getWhatsAppUrl(COMPANY.whatsapp, msg)
  }, [isAr])

  const heroSlides: Slide[] = [
    { src: '/images/marine/marine-safety-1.jpg', alt: 'Large commercial vessel — bridge windows with marine safety film' },
    { src: '/images/marine/marine-safety-2.jpg', alt: 'Marine vessel exterior — safety window film UAE' },
    { src: '/images/marine/marine-safety-3.jpg', alt: 'Ship bridge — clear anti-shatter marine film' },
    { src: '/images/marine/marine-safety-4.jpg', alt: 'Marine safety film installation Dubai' },
  ]

  const comparisonSlides: Slide[] = [
    { src: '/images/marine/marine-safety-7.jpg', alt: 'Solar vs clear marine safety film comparison 1' },
    { src: '/images/marine/marine-safety-8.jpg', alt: 'Solar vs clear marine safety film comparison 2' },
  ]

  return (
    <>
      <section
        className="relative min-h-[100svh] flex items-center overflow-hidden pt-16"
        style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#001a2a 60%,var(--bg-page) 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 20px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <Link
            href="/marine"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-6 transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            {t.backMarine}
          </Link>
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-4" style={{ color: 'var(--red)' }}>
            {t.marineTinting}
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1
                className="font-heading leading-none tracking-wide mb-4 on-dark-title"
                style={{ fontSize: 'clamp(2.2rem,5vw,4.2rem)' }}
              >
                {t.heroTitle}
              </h1>
              <p className="text-sm font-semibold tracking-wide mb-6 on-dark-muted">{t.heroSubtitle}</p>

              <div className="lg:hidden mb-8">
                <AutoSlider slides={heroSlides} />
              </div>

              <p className="text-sm font-light leading-relaxed mb-6 on-dark-soft">{t.heroLead}</p>

              <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                  {isAr ? (
                    <>
                      تحوّل أفلام الأمان والحماية البحرية من الدرجة البحرية الزجاج العادي إلى زجاج بحري مقاوم للصدمات، مع متانة استثنائية ضد:
                    </>
                  ) : (
                    <>
                      Our marine-grade safety and security films transform standard glass into impact-resistant marine glass protection, offering unmatched durability against:
                    </>
                  )}
                </p>
                <BulletList items={t.heroBullets} />
                <p className="text-sm font-light leading-relaxed mt-5" style={{ color: 'var(--text-muted)' }}>
                  {t.heroFoot}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact?type=quote"
                  className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block"
                  style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}
                >
                  {t.ctaQuote}
                </Link>
                <WhatsAppCta href={waUrl} label={t.waBooking} />
              </div>
            </div>

            <div className="hidden lg:block">
              <AutoSlider slides={heroSlides} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="relative" style={{ aspectRatio: '16/10' }}>
              <Image
                src="/images/marine/marine-safety-5.jpg"
                alt="Technician applying marine safety film on ship bridge window"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
          <div>
            <SectionTitle title={t.trustTitle} />
            <p className="text-sm font-light leading-relaxed mt-6" style={{ color: 'var(--text-muted)' }}>
              {t.trustLead}
            </p>
            <BulletList items={t.trustBullets} />
            <p className="text-sm font-light leading-relaxed mt-6" style={{ color: 'var(--text-muted)' }}>
              {t.trustFoot}
            </p>
            <p className="text-sm font-medium mt-2" style={{ color: 'var(--text-main)' }}>
              {t.trustLocations}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?type=quote"
                className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block"
                style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}
              >
                {t.ctaQuote}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle kicker={t.solutionsKicker} title={t.solutionsTitle} subtitle={t.solutionsSubtitle} />

          <div className="grid lg:grid-cols-2 gap-8 mt-10 items-start">
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <h3 className="font-heading text-2xl tracking-wide mb-4" style={{ color: 'var(--text-main)' }}>
                {t.clearTitle}
              </h3>
              <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                {t.clearDesc}
              </p>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--red)' }}>
                {t.clearBenefits}
              </p>
              <BulletList items={t.clearBenefitItems} />
              <p className="text-xs font-semibold tracking-widest uppercase mt-6 mb-2" style={{ color: 'var(--red)' }}>
                {t.clearIdeal}
              </p>
              <p className="text-sm font-light" style={{ color: 'var(--text-muted)' }}>
                {t.clearIdealItems.join(' • ')}
              </p>
            </div>
            <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <div className="relative" style={{ aspectRatio: '16/10' }}>
                <Image
                  src="/images/marine/marine-safety-6.jpg"
                  alt="Clear anti-shatter marine film applied to ship bridge glass"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-10 items-start">
            <div className="order-2 lg:order-1">
              <AutoSlider slides={comparisonSlides} />
            </div>
            <div className="border p-8 order-1 lg:order-2" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <h3 className="font-heading text-2xl tracking-wide mb-4" style={{ color: 'var(--text-main)' }}>
                {t.solarTitle}
              </h3>
              <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                {t.solarDesc}
              </p>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--red)' }}>
                {t.solarBenefits}
              </p>
              <BulletList items={t.solarBenefitItems} />
              <p className="text-xs font-semibold tracking-widest uppercase mt-6 mb-2" style={{ color: 'var(--red)' }}>
                {t.solarIdeal}
              </p>
              <BulletList items={t.solarIdealItems} />
              <div className="mt-8">
                <Link
                  href="/contact?type=quote"
                  className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block"
                  style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}
                >
                  {t.ctaSpecialist}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle kicker={t.essentialKicker} title={t.essentialTitle} subtitle={t.essentialLead} />
          <p className="text-xs font-semibold tracking-widest uppercase mt-10 mb-4" style={{ color: 'var(--red)' }}>
            {t.essentialAdvantages}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.essentialItems.map((item) => (
              <div key={item} className="border p-6" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle kicker={t.onsiteKicker} title={t.onsiteTitle} subtitle={t.onsiteLead} />
            <div className="mt-8 grid gap-5">
              <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h3 className="font-condensed text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--text-main)' }}>
                  {t.dubaiLocs}
                </h3>
                <BulletList items={t.dubaiList} />
              </div>
              <div className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h3 className="font-condensed text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--text-main)' }}>
                  {t.adLocs}
                </h3>
                <BulletList items={t.adList} />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?type=booking"
                className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block"
                style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}
              >
                {t.ctaOnsite}
              </Link>
              <WhatsAppCta href={waFastUrl} label={t.waBooking} />
            </div>
          </div>
          <div className="border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="relative" style={{ aspectRatio: '16/10' }}>
              <Image
                src="/images/marine/marine-safety-9.jpg"
                alt="On-site marine film installation at port or marina"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title={t.whyTitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {t.whyItems.map((v) => (
              <div key={v} className="border p-6" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="text-sm font-medium" style={{ color: 'var(--text-main)' }}>
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title={t.faqTitle} />
          <div className="grid lg:grid-cols-2 gap-4 mt-10">
            {t.faq.map((f) => (
              <div key={f.q} className="border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-main)' }}>
                  {f.q}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto border p-10" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            {t.finalTitle}
          </h2>
          <p className="text-sm font-light leading-relaxed mb-6 max-w-3xl" style={{ color: 'var(--text-muted)' }}>
            {t.finalLead}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact?type=quote"
              className="text-xs font-semibold tracking-widest uppercase px-8 py-4 inline-block"
              style={{ background: 'var(--red)', color: 'white', borderRadius: '4px' }}
            >
              {t.ctaFinalQuote}
            </Link>
            <WhatsAppCta href={waFastUrl} label={t.waBooking} />
          </div>
        </div>
      </section>
    </>
  )
}
