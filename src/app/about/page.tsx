import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '3M OUR CAR | Official 3M Window Tinting & PPF in UAE',
  description:
    'Official 3M Dealer since 2006. Get RTA-approved 50% car tinting in 55 mins at 9 mall locations in Dubai & Abu Dhabi. Professional PPF & Ceramic Coating.',
}

export default function AboutPage() {
  return (
    <>
      <section
        className="relative min-h-[72svh] flex items-end pb-16 overflow-hidden pt-24 px-6"
        style={{ background: 'linear-gradient(135deg,var(--bg-page) 0%,#1a0005 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C8102E 0,#C8102E 1px,transparent 0,transparent 30px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>
            About Us
          </p>
          <h1 className="font-heading leading-none tracking-wide on-dark-title" style={{ fontSize: 'clamp(2.4rem,7vw,5.2rem)' }}>
            <span style={{ color: 'var(--red)', fontWeight: 800 }}>3M</span> OUR CAR
            <br />
            AUTHORIZED <span style={{ color: 'var(--red)', fontWeight: 800 }}>3M</span> WINDOW TINTING & PROTECTION
          </h1>
          <p className="text-sm font-light leading-relaxed max-w-4xl mt-6 on-dark-soft">
            Since 2006, <span style={{ color: 'var(--red)', fontWeight: 700 }}>3M</span> OUR CAR has been the UAE&apos;s premier destination for RTA-approved car tinting, Paint Protection Film (PPF), ceramic coating, and advanced automotive protection.
            With 9 strategic branches and 78,000+ vehicles serviced, we deliver certified, legal, and long-lasting protection tailored for the extreme Middle Eastern climate.
          </p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>
              Our Story
            </p>
            <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(1.9rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
              SETTING THE STANDARD
              <br />
              FOR NEARLY TWO DECADES
            </h2>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--red)', fontWeight: 700 }}>3M</span> OUR CAR began in 2006 with a single location inside Ibn Battuta Mall. At the time, the market was flooded with low-grade films that faded quickly and offered poor heat rejection.
            </p>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              We entered as an Official <span style={{ color: 'var(--red)', fontWeight: 700 }}>3M</span> Authorized Dealer, introducing laboratory-tested films backed by global safety standards.
            </p>
            <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Today, we remain an owner-operated company. This ensures that our leadership stays directly involved in quality control, technical standards, and our long-term vision for excellence across the UAE.
            </p>
          </div>
          <div className="border overflow-hidden" style={{ borderColor: 'var(--border)', background: '#ffffff' }}>
            <div className="relative w-full" style={{ aspectRatio: '16 / 10' }}>
              <Image
                src="/images/proof/certificate-automotive-window-films-ppf.jpg"
                alt="Official 3M certification"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="border overflow-hidden" style={{ borderColor: 'var(--border)', background: '#ffffff' }}>
            <div className="relative w-full" style={{ aspectRatio: '16 / 10' }}>
              <Image
                src="/images/proof/award-excellence.jpg"
                alt="3M Excellence Award"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 45vw, 100vw"
                quality={100}
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>
              Tint While You Shop
            </p>
            <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(1.9rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
              CAR TINTING IN DUBAI & ABU DHABI
              <br />
              READY IN 55 MINUTES
            </h2>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Our &quot;Tint While You Shop&quot; model was built for your convenience. Simply park in our dedicated, dust-controlled installation bays, enjoy your time at the mall, and return to a fully protected vehicle in approximately 55 minutes.
            </p>
            <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-main)' }}>
              Branch Locations
            </p>
            <p className="text-sm font-light leading-relaxed mb-2" style={{ color: 'var(--text-muted)' }}>
              Dubai: Mall of the Emirates, Dubai Mall, Dubai Marina Mall, BurJuman Mall, Deira City Centre, Mirdif City Centre, Circle Mall JVC, and Ibn Battuta Mall.
            </p>
            <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Abu Dhabi: Al Wahda Mall.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>
              RTA Compliance
            </p>
            <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'var(--text-main)' }}>
              RTA-APPROVED TINTING
              <br />
              100% LEGAL & SAFE
            </h2>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              All installations at <span style={{ color: 'var(--red)', fontWeight: 700 }}>3M</span> OUR CAR strictly follow UAE RTA regulations. If you are searching for &quot;Is 3M tint legal in Dubai?&quot; or &quot;What is the 50% tint law in UAE?&quot;, we provide the clear answers and compliant solutions you need.
            </p>
            <div className="space-y-3 text-sm font-light" style={{ color: 'var(--text-muted)' }}>
              <p>
                <strong style={{ color: 'var(--text-main)' }}>Legal Compliance:</strong> We offer the RTA-allowed 50% tint darkness for passenger vehicles.
              </p>
              <p>
                <strong style={{ color: 'var(--text-main)' }}>Shade Variety:</strong> Choose from 30%, 50%, or 70% shades based on your privacy and heat rejection needs.
              </p>
              <p>
                <strong style={{ color: 'var(--text-main)' }}>Certified Safety:</strong> Our films ensure maximum visibility for night driving while blocking 99% of harmful UV rays.
              </p>
            </div>
          </div>
          <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>
              Recognition
            </p>
            <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'var(--text-main)' }}>
              OFFICIAL <span style={{ color: 'var(--red)', fontWeight: 800 }}>3M</span> DEALER
              <br />
              2018 EXCELLENCE AWARD
            </h2>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              We aren&apos;t just installers; we are certified applicators. In 2018, we received the <span style={{ color: 'var(--red)', fontWeight: 700 }}>3M</span> Excellence Award, a prestigious recognition of our commitment.
            </p>
            <ul className="space-y-3 text-sm font-light" style={{ color: 'var(--text-muted)' }}>
              <li>• Authenticity: We use only genuine <span style={{ color: 'var(--red)', fontWeight: 700 }}>3M</span> window films and products.</li>
              <li>• Precision: Every film is hand-cut and installed by our 60+ certified technicians, many of whom have over 19 years of experience.</li>
              <li>• Quality: Adherence to <span style={{ color: 'var(--red)', fontWeight: 700 }}>3M</span>&apos;s global technical standards for every single vehicle.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: 'var(--bg-page)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>
            Premium Protection
          </p>
          <h2 className="font-heading leading-none tracking-wide mb-4" style={{ fontSize: 'clamp(1.9rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            78,000+ VEHICLES
            <br />
            AND COUNTING
          </h2>
          <p className="text-sm font-light leading-relaxed mb-6 max-w-4xl" style={{ color: 'var(--text-muted)' }}>
            From daily drivers to the world&apos;s most prestigious flagship models, we are the trusted choice for luxury owners and corporate leaders.
          </p>
          <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-main)' }}>
            Brands We Service Daily
          </p>
          <ul className="space-y-2 text-sm font-light mb-8" style={{ color: 'var(--text-muted)' }}>
            <li>• Luxury &amp; Performance: Rolls-Royce Cullinan, Bentley Bentayga, Porsche Cayenne, Mercedes-Benz S-Class, BMW 7 Series, Audi Q8, and Lexus LS.</li>
            <li>• UAE Favorites: Nissan Patrol, Toyota Land Cruiser, and Range Rover.</li>
          </ul>

          <p className="text-xs font-semibold tracking-[3px] uppercase mb-3" style={{ color: 'var(--red)' }}>Beyond Automotive</p>
          <h2 className="font-heading leading-none tracking-wide mb-8" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-main)' }}>
            PROTECTION FOR ROAD,
            <br />
            HOME, OFFICE & MARINE
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              '3M Paint Protection Film (PPF): Self-healing protection against stone chips and sand damage.',
              'Ceramic Coating: Hydrophobic, deep-gloss protection for interiors and exteriors.',
              'Residential & Commercial Tinting: Energy-efficient heat reduction for villas and offices.',
              'Marine Tinting: Specialized heat and glare solutions for yachts.',
            ].map((item) => (
              <div key={item} className="border p-6 text-sm font-light leading-relaxed" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
                {item}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderLeft: '4px solid var(--red)' }}>
              <h3 className="font-heading text-3xl tracking-wide mb-3" style={{ color: 'var(--text-main)' }}>MODERN DIGITAL WARRANTY</h3>
              <ol className="space-y-2 text-sm font-light" style={{ color: 'var(--text-muted)' }}>
                <li>1. Every service includes a written warranty.</li>
                <li>2. Your service history is linked to your Plate Number.</li>
                <li>3. Visit any of our 9 branches years later; we can retrieve your records instantly without the need for physical documents.</li>
              </ol>
            </div>
            <div className="border p-8" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <h3 className="font-heading text-3xl tracking-wide mb-3" style={{ color: 'var(--text-main)' }}>WHY CHOOSE <span style={{ color: 'var(--red)', fontWeight: 800 }}>3M</span> OUR CAR?</h3>
              <ul className="space-y-2 text-sm font-light" style={{ color: 'var(--text-muted)' }}>
                <li>• Established 2006: Nearly 20 years of UAE market leadership.</li>
                <li>• Official <span style={{ color: 'var(--red)', fontWeight: 700 }}>3M</span> Authorized Dealer: Guaranteed genuine products.</li>
                <li>• RTA Approved: Guaranteed legal compliance (up to 50% limit).</li>
                <li>• 55-Minute Service: Professional tinting while you shop.</li>
                <li>• 4.5-Star Rated: Trusted by thousands of individual and corporate clients.</li>
              </ul>
              <p className="mt-5 text-sm font-semibold" style={{ color: 'var(--text-main)' }}>
                We didn&apos;t enter the market to compete on price - we entered to raise the standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: 'var(--bg-mid)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase mb-5" style={{ color: 'var(--red)' }}>Corporate Partners</p>
          <div className="border p-6" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <style>{`
              .partner-marquee {
                overflow: hidden;
                position: relative;
                width: 100%;
              }
              .partner-track {
                display: flex;
                align-items: center;
                gap: 1rem;
                width: max-content;
                animation: partnerScroll 26s linear infinite;
              }
              .partner-marquee:hover .partner-track {
                animation-play-state: paused;
              }
              @keyframes partnerScroll {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
            `}</style>

            <div className="partner-marquee py-2">
              <div className="partner-track">
                {[...['partner-1.png', 'partner-2.png', 'partner-3.png', 'partner-4.png', 'partner-5.png'], ...['partner-1.png', 'partner-2.png', 'partner-3.png', 'partner-4.png', 'partner-5.png']].map((logo, idx) => (
                  <div
                    key={`${logo}-${idx}`}
                    className="border p-2 shrink-0"
                    style={{
                      borderColor: 'var(--border)',
                      background: '#ffffff',
                      width: 'clamp(220px, 24vw, 320px)',
                    }}
                  >
                    <div className="relative w-full h-28 md:h-32">
                      <Image
                        src={`/images/partners/${logo}`}
                        alt={`Partner logo ${idx + 1}`}
                        fill
                        className="object-contain"
                        sizes="320px"
                        quality={100}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

