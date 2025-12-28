// HPI 1.6-V
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { ArrowRight, Leaf, Users, Heart, Sparkles, ArrowUpRight, MoveRight, Flower2, Scroll } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- 1. DATA FIDELITY PROTOCOL: CANONICAL DATA SOURCES ---

const HERO_CONTENT = {
  title: "Crafted with Mitti, Rooted in Tradition",
  subtitle: "Discover authentic Indian clay pottery, handcrafted by skilled artisans who breathe life into earth.",
  ctaPrimary: "Explore Collection",
  ctaSecondary: "Meet Our Artisans"
};

const BRAND_STORY = {
  title: "The Soul of Indian Mitti",
  paragraph1: "PRITHVO is more than a brand—it's a celebration of India's timeless relationship with clay. For centuries, our artisans have transformed humble earth into objects of beauty and utility, carrying forward traditions passed down through generations.",
  paragraph2: "Each piece tells a story of skilled hands, patient craftsmanship, and the sacred bond between maker and material. We honor this heritage while bringing it into modern homes with contemporary designs that respect tradition."
};

const VALUES_DATA = [
  {
    icon: Heart,
    title: 'Handcrafted Excellence',
    description: 'Each piece is lovingly shaped by skilled artisan hands, ensuring unique character and quality.',
    id: 'val-1'
  },
  {
    icon: Users,
    title: 'Artisan Empowerment',
    description: 'We support local craftsmen, preserving traditional skills and providing sustainable livelihoods.',
    id: 'val-2'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Natural clay, traditional firing methods, and zero-waste practices honor our earth.',
    id: 'val-3'
  },
  {
    icon: Sparkles,
    title: 'Cultural Heritage',
    description: 'Celebrating centuries-old Indian pottery traditions with contemporary design sensibility.',
    id: 'val-4'
  },
];

const CATEGORIES_DATA = [
  {
    title: 'Traditional Pottery',
    image: 'traditional-pots',
    description: 'Timeless designs for daily use',
    link: '/store/traditional',
    colSpan: 'md:col-span-2',
    aspect: 'aspect-[16/9]'
  },
  {
    title: 'Decorative Pieces',
    image: 'decorative-items',
    description: 'Artistic creations for your space',
    link: '/store/decor',
    colSpan: 'md:col-span-1',
    aspect: 'aspect-[4/5]'
  },
  {
    title: 'Cookware & Dining',
    image: 'cookware-collection',
    description: 'Healthy cooking, authentic taste',
    link: '/store/cookware',
    colSpan: 'md:col-span-1',
    aspect: 'aspect-square'
  },
  {
    title: 'Garden & Planters',
    image: 'garden-planters',
    description: 'Breathing homes for your plants',
    link: '/store/garden',
    colSpan: 'md:col-span-2',
    aspect: 'aspect-[2/1]'
  },
];

// --- 2. UTILITY COMPONENTS (SAFETY & PERFORMANCE) ---

/**
 * Reveal: Uses IntersectionObserver for performant scroll animations.
 */
const Reveal = ({ 
  children, 
  className, 
  threshold = 0.1, 
  animation = 'fade-up',
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  threshold?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'scale-up';
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
    }, { threshold });

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up': return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
      case 'fade-in': return isVisible ? 'opacity-100' : 'opacity-0';
      case 'slide-left': return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12';
      case 'scale-up': return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
      default: return '';
    }
  };

  return (
    <div 
      ref={ref} 
      className={cn(
        "transition-all duration-1000 ease-out will-change-transform", 
        getAnimationClass(), 
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/**
 * ParallaxImage: Uses CSS variables driven by IntersectionObserver for smooth parallax.
 */
const ParallaxImage = ({ 
  src, 
  alt, 
  className,
  speed = 0.5 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  speed?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress: 0 when top enters bottom of screen, 1 when bottom leaves top
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      
      // Only update if in view
      if (progress >= 0 && progress <= 1) {
        container.style.setProperty('--parallax-y', `${(progress - 0.5) * 100 * speed}%`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calc

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={cn("overflow-hidden relative", className)}>
      <div 
        className="w-full h-[120%] absolute top-[-10%] left-0 will-change-transform"
        style={{ transform: 'translateY(var(--parallax-y, 0))' }}
      >
        <Image
          src={src}
          alt={alt}
          width={1600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

// --- 3. MAIN PAGE COMPONENT ---

export default function HomePage() {
  return (
    <div className="bg-background text-foreground font-paragraph overflow-clip selection:bg-terracotta selection:text-white">
      <style>{`
        .text-stroke {
          -webkit-text-stroke: 1px rgba(160, 82, 45, 0.3);
          color: transparent;
        }
        .clip-organic-tr {
          border-top-right-radius: 6rem;
        }
        .clip-organic-bl {
          border-bottom-left-radius: 6rem;
        }
        .grain-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Parallax */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage 
            src="https://static.wixstatic.com/media/a66230_73bad50ed56744dd9dd4900a26754ef9~mv2.png?originWidth=1600&originHeight=896"
            alt="Artisan hands molding clay on a wheel"
            className="w-full h-full"
            speed={0.3}
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 pt-20 text-center">
          <Reveal animation="fade-up" delay={200}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white mb-8">
              <Sparkles className="w-4 h-4 text-terracotta" />
              <span className="text-sm tracking-wider uppercase font-medium">Est. 2024 • Indian Heritage</span>
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={400}>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8 tracking-tight">
              Crafted with <span className="text-terracotta italic font-serif">Mitti</span>,<br />
              Rooted in Tradition
            </h1>
          </Reveal>

          <Reveal animation="fade-up" delay={600}>
            <p className="font-paragraph text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              {HERO_CONTENT.subtitle}
            </p>
          </Reveal>

          <Reveal animation="fade-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/store" 
                className="group relative px-8 py-4 bg-terracotta text-white rounded-full overflow-hidden transition-all hover:bg-clay-orange"
              >
                <span className="relative z-10 flex items-center gap-2 font-medium text-lg">
                  {HERO_CONTENT.ctaPrimary}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link 
                to="/artisans" 
                className="group flex items-center gap-2 text-white hover:text-terracotta transition-colors text-lg font-medium"
              >
                {HERO_CONTENT.ctaSecondary}
                <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-terracotta group-hover:border-terracotta group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/60 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* --- MARQUEE TICKER --- */}
      <div className="bg-primary text-beige py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
        <div className="inline-flex animate-marquee">
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-8 text-lg font-heading uppercase tracking-widest flex items-center gap-4">
                Handmade in India <Flower2 className="w-4 h-4" /> Sustainable Living <Flower2 className="w-4 h-4" /> Artisan Crafted
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* --- BRAND STORY (THE SOUL) --- */}
      <section className="py-32 bg-beige relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grain-overlay opacity-30 pointer-events-none" />
        
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Text Content */}
            <div className="lg:col-span-5">
              <Reveal animation="slide-left">
                <span className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
                <h2 className="font-heading text-5xl md:text-6xl text-primary mb-8 leading-tight">
                  {BRAND_STORY.title}
                </h2>
                <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                  <p>{BRAND_STORY.paragraph1}</p>
                  <p>{BRAND_STORY.paragraph2}</p>
                </div>
                <div className="mt-10">
                  <Link to="/about" className="inline-flex items-center gap-3 text-primary font-medium hover:text-terracotta transition-colors group">
                    <span className="border-b border-primary group-hover:border-terracotta pb-1">Read Our Full Story</span>
                    <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Image Composition */}
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-2 gap-6">
                <Reveal animation="fade-up" delay={200} className="mt-12">
                  <div className="aspect-[3/4] rounded-tl-[4rem] rounded-br-2xl overflow-hidden shadow-xl">
                    <Image 
                      src="https://static.wixstatic.com/media/a66230_62872578be044f41ab76f816c065a414~mv2.png?originWidth=896&originHeight=1152" 
                      alt="Potter at the wheel" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Reveal>
                <Reveal animation="fade-up" delay={400}>
                  <div className="aspect-[3/4] rounded-tr-2xl rounded-bl-[4rem] overflow-hidden shadow-xl">
                    <Image 
                      src="https://static.wixstatic.com/media/a66230_23f2f358b454493c957fe34ba54e11e4~mv2.png?originWidth=896&originHeight=1152" 
                      alt="Raw clay texture" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Reveal>
              </div>
              {/* Floating Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl z-20 hidden md:block">
                <div className="w-24 h-24 border border-dashed border-terracotta rounded-full flex items-center justify-center text-center">
                  <span className="font-heading text-terracotta text-xl leading-none">100%<br/><span className="text-xs font-paragraph text-foreground">Natural</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID COLLECTION --- */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <Reveal>
              <h2 className="font-heading text-5xl md:text-6xl text-primary mb-4">Curated Collections</h2>
              <p className="text-foreground/60 max-w-md">Explore our range of handcrafted clay products, designed for modern living while honoring ancient techniques.</p>
            </Reveal>
            <Reveal delay={200}>
              <Link to="/store" className="hidden md:flex items-center gap-2 px-6 py-3 border border-primary/20 rounded-full hover:bg-primary hover:text-white transition-all">
                View All Products <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORIES_DATA.map((cat, idx) => (
              <Reveal key={idx} animation="fade-up" delay={idx * 150} className={cn(cat.colSpan)}>
                <Link to={cat.link} className="group block relative h-full overflow-hidden rounded-3xl">
                  <div className={cn("w-full relative overflow-hidden", cat.aspect)}>
                    <Image 
                      src={'https://static.wixstatic.com/media/a66230_33d7a1c35ecd4584a4b6c2deeae6e6ea~mv2.png?originWidth=576&originHeight=576'}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-heading text-3xl text-white mb-2">{cat.title}</h3>
                      <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cat.description}</p>
                    </div>

                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/store" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- ARTISAN SPOTLIGHT (STICKY SCROLL) --- */}
      <section className="bg-secondary/10 py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Sticky Content */}
            <div className="relative">
              <div className="sticky top-32">
                <Reveal>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-[1px] w-12 bg-terracotta" />
                    <span className="text-terracotta uppercase tracking-widest font-medium">Meet The Makers</span>
                  </div>
                  <h2 className="font-heading text-5xl md:text-6xl text-primary mb-8">
                    Hands That Shape<br/>The Earth
                  </h2>
                  <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                    Behind every PRITHVO creation is a master artisan carrying forward a legacy. We work directly with pottery communities in rural India, ensuring fair wages and preserving their craft.
                  </p>
                  
                  <div className="space-y-8 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                        <Users className="w-6 h-6 text-terracotta" />
                      </div>
                      <div>
                        <h4 className="font-heading text-xl text-primary mb-1">Community First</h4>
                        <p className="text-foreground/60">Supporting 50+ artisan families across 3 villages.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                        <Scroll className="w-6 h-6 text-terracotta" />
                      </div>
                      <div>
                        <h4 className="font-heading text-xl text-primary mb-1">Living Heritage</h4>
                        <p className="text-foreground/60">Techniques preserved from the Indus Valley civilization.</p>
                      </div>
                    </div>
                  </div>

                  <Link to="/artisans" className="inline-flex items-center gap-2 text-lg font-medium text-primary border-b-2 border-primary hover:text-terracotta hover:border-terracotta transition-colors pb-1">
                    Read Their Stories
                  </Link>
                </Reveal>
              </div>
            </div>

            {/* Scrolling Images */}
            <div className="space-y-12 pt-12 lg:pt-0">
              {[
                { src: "artisan-portrait-1", caption: "Master Craftsman Ramu Kaka, 45 years of experience" },
                { src: "artisan-process-firing", caption: "Traditional kiln firing process at sunset" },
                { src: "artisan-painting-detail", caption: "Intricate hand-painting with natural dyes" }
              ].map((item, idx) => (
                <Reveal key={idx} animation="fade-up" delay={idx * 100}>
                  <div className="group relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                      <Image 
                        src={'https://static.wixstatic.com/media/a66230_dfddaddb90314dafae5b2be482a93080~mv2.png?originWidth=1024&originHeight=768'}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-tl-3xl shadow-xl max-w-xs hidden sm:block">
                      <p className="font-heading text-primary italic">"{item.caption}"</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-24 bg-primary text-beige">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {VALUES_DATA.map((value, idx) => (
              <Reveal key={value.id} animation="fade-up" delay={idx * 100}>
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-terracotta transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-beige" />
                  </div>
                  <h3 className="font-heading text-2xl mb-4">{value.title}</h3>
                  <p className="text-beige/70 leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- SUSTAINABILITY (FULL BLEED) --- */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="https://static.wixstatic.com/media/a66230_2b74889c77be4eaaac1a5831dc882d8e~mv2.png?originWidth=1600&originHeight=896"
            alt="Hands holding raw clay soil"
            className="w-full h-full"
            speed={0.2}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20">
            <Reveal animation="fade-up">
              <div className="flex items-center gap-2 text-terracotta mb-4">
                <Leaf className="w-5 h-5" />
                <span className="uppercase tracking-widest font-medium">Conscious Living</span>
              </div>
              <h2 className="font-heading text-5xl text-white mb-6">Return to Earth</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Our products are born from the earth and can return to it without harm. We use 100% natural clay, lead-free glazes, and plastic-free packaging.
              </p>
              <Link to="/sustainability" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full hover:bg-beige transition-colors font-medium">
                Our Sustainability Pledge <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="py-32 bg-beige text-center relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <Reveal animation="scale-up">
            <h2 className="font-heading text-6xl md:text-7xl text-primary mb-8">
              Bring Home a Piece of India
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-12">
              Join us in preserving an ancient art form. Every purchase supports an artisan's livelihood and keeps the wheel spinning.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/store" className="px-10 py-5 bg-primary text-white rounded-full text-lg font-medium hover:bg-terracotta transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Shop Collection
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-transparent border-2 border-primary text-primary rounded-full text-lg font-medium hover:bg-primary hover:text-white transition-colors">
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}