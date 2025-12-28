import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Heart, Users, Leaf, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-beige">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              The Story of PRITHVO
            </h1>
            <p className="font-paragraph text-xl text-foreground/80 leading-relaxed">
              Where ancient traditions meet modern living, and every piece carries the soul of Indian mitti
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-primary mb-6">
                Born from Earth, Shaped by Tradition
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 mb-6 leading-relaxed">
                PRITHVO, meaning "earth" in Sanskrit, was founded on a simple yet profound belief: that the ancient art of Indian pottery deserves a place in contemporary life. Our journey began in the pottery villages of Rajasthan, where we witnessed master craftsmen transforming clay into objects of extraordinary beauty.
              </p>
              <p className="font-paragraph text-lg text-foreground/80 mb-6 leading-relaxed">
                For generations, these artisans have preserved techniques passed down through centuries, yet struggled to find markets for their craft. We saw an opportunity to bridge this gap—to honor tradition while creating products that resonate with modern sensibilities.
              </p>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                Today, PRITHVO stands as a testament to what happens when heritage meets innovation, when skilled hands are given the recognition they deserve, and when consumers choose authenticity over mass production.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/a66230_3540429857184c219811d2ca42de1925~mv2.png?originWidth=768&originHeight=1024"
                  alt="Artisan working with clay on pottery wheel"
                  width={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-secondary/10">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 rounded-2xl"
            >
              <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-3xl text-primary mb-6">Our Mission</h2>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                To preserve and promote India's rich pottery heritage by empowering artisan communities, creating sustainable livelihoods, and bringing authentic handcrafted clay products to conscious consumers who value tradition, quality, and environmental responsibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-10 rounded-2xl"
            >
              <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-3xl text-primary mb-6">Our Vision</h2>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                To become India's most trusted name in handcrafted clay products, recognized globally for our commitment to artisan welfare, cultural preservation, and sustainable practices. We envision a future where traditional crafts thrive alongside modern innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Mitti Philosophy */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/a66230_5c4ca2e319da4b7591971a7d0c85d02b~mv2.png?originWidth=768&originHeight=1024"
                  alt="Clay pottery in natural setting"
                  width={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-heading text-4xl md:text-5xl text-primary mb-6">
                The Sacred Bond with Mitti
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 mb-6 leading-relaxed">
                In Indian culture, clay—or mitti—holds a sacred place. It's the earth from which we come and to which we return. Our artisans understand this profound connection, treating each lump of clay with reverence and respect.
              </p>
              <p className="font-paragraph text-lg text-foreground/80 mb-6 leading-relaxed">
                The process of pottery-making is meditative, almost spiritual. From sourcing the right clay to the final firing, every step requires patience, skill, and an intimate understanding of the material. This isn't just manufacturing—it's a dialogue between maker and medium.
              </p>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                When you hold a PRITHVO piece, you're not just holding pottery. You're holding centuries of wisdom, the warmth of human touch, and a piece of India's living heritage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-24 bg-beige">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">
              Our Commitments
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              Every decision we make is guided by our core principles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Artisan First',
                description: 'Fair wages, safe working conditions, and opportunities for skill development. Our artisans are partners, not just suppliers.',
              },
              {
                icon: Leaf,
                title: 'Earth Conscious',
                description: 'Natural materials, traditional firing methods, minimal waste, and biodegradable packaging. We honor the earth that gives us clay.',
              },
              {
                icon: Heart,
                title: 'Quality & Authenticity',
                description: 'Every piece is handmade, unique, and crafted with care. We never compromise on quality or authenticity for mass production.',
              },
            ].map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl"
              >
                <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mb-6">
                  <commitment.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-primary mb-4">{commitment.title}</h3>
                <p className="font-paragraph text-foreground/70 leading-relaxed">
                  {commitment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">
              Our Impact
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              Together, we're making a difference
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Artisan Families Supported' },
              { number: '10,000+', label: 'Products Handcrafted' },
              { number: '25+', label: 'Villages Empowered' },
              { number: '100%', label: 'Eco-Friendly Materials' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-5xl md:text-6xl text-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-paragraph text-lg text-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
