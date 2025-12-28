import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Leaf, Droplet, Recycle, Sun, Wind, TreePine } from 'lucide-react';

export default function SustainabilityPage() {
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
              Crafted with Care for Our Earth
            </h1>
            <p className="font-paragraph text-xl text-foreground/80 leading-relaxed">
              Sustainability isn't just a practice for us—it's woven into the very fabric of traditional pottery-making. We honor the earth that gives us clay.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
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
                Our Eco-Philosophy
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 mb-6 leading-relaxed">
                For thousands of years, Indian potters have worked in harmony with nature. They understood what modern science is only now confirming: that the best way to create is to work with the earth, not against it.
              </p>
              <p className="font-paragraph text-lg text-foreground/80 mb-6 leading-relaxed">
                At PRITHVO, we follow these time-tested principles. Every aspect of our process—from clay sourcing to final packaging—is designed to minimize environmental impact while maximizing quality and authenticity.
              </p>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                We believe that truly sustainable products don't just reduce harm—they actively contribute to ecological balance and community well-being.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/a66230_f55acab6225c4bcf964fcb21b08b2d09~mv2.png?originWidth=768&originHeight=768"
                  alt="Natural clay and eco-friendly pottery making"
                  width={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <section className="py-24 bg-secondary/10">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">
              Our Sustainable Practices
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              Every step of our process is designed with environmental responsibility in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Natural Clay Sourcing',
                description: 'We source clay from local, sustainable deposits, ensuring minimal transportation and supporting regional ecosystems. Our clay is 100% natural with no synthetic additives.',
              },
              {
                icon: Sun,
                title: 'Traditional Firing Methods',
                description: 'Using wood-fired kilns and solar drying techniques passed down through generations, we minimize energy consumption while achieving superior results.',
              },
              {
                icon: Droplet,
                title: 'Water Conservation',
                description: 'Our artisans use water-efficient techniques, recycling and reusing water throughout the pottery-making process to minimize waste.',
              },
              {
                icon: Recycle,
                title: 'Zero Waste Production',
                description: 'Every scrap of clay is reclaimed and reused. Broken pieces are ground down and mixed back into new clay, ensuring nothing goes to waste.',
              },
              {
                icon: TreePine,
                title: 'Biodegradable Packaging',
                description: 'All our packaging materials are biodegradable or recyclable. We use jute, paper, and natural fibers—no plastic, no foam.',
              },
              {
                icon: Wind,
                title: 'Carbon Neutral Shipping',
                description: 'We partner with eco-conscious logistics providers and offset our shipping emissions through verified carbon credit programs.',
              },
            ].map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl"
              >
                <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mb-6">
                  <practice.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-primary mb-4">{practice.title}</h3>
                <p className="font-paragraph text-foreground/70 leading-relaxed">
                  {practice.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Clay */}
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/a66230_fc03cd2d72344413839013a9de09bbe2~mv2.png?originWidth=768&originHeight=576"
                  alt="Natural clay pottery benefits"
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
                Why Clay is Earth's Perfect Material
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-2xl text-primary mb-3">100% Natural & Non-Toxic</h3>
                  <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                    Clay is pure earth—no chemicals, no plastics, no harmful additives. Safe for you and safe for the planet.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-primary mb-3">Fully Biodegradable</h3>
                  <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                    When a clay product reaches the end of its life, it returns to the earth without leaving any toxic residue.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-primary mb-3">Energy Efficient</h3>
                  <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                    Traditional pottery-making uses a fraction of the energy required for plastic or metal production.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-primary mb-3">Locally Sourced</h3>
                  <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                    Clay is abundant and available locally, reducing transportation emissions and supporting regional economies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-beige">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">
              Our Environmental Impact
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              Measurable results from our commitment to sustainability
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '0%', label: 'Plastic Used', description: 'Completely plastic-free production and packaging' },
              { number: '95%', label: 'Water Recycled', description: 'Through efficient reuse systems' },
              { number: '100%', label: 'Natural Materials', description: 'Only earth, water, and fire' },
              { number: '50+', label: 'Trees Planted', description: 'For every 100 products sold' },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl text-center"
              >
                <div className="font-heading text-5xl md:text-6xl text-primary mb-2">
                  {metric.number}
                </div>
                <div className="font-heading text-xl text-foreground mb-2">{metric.label}</div>
                <p className="font-paragraph text-sm text-foreground/70">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              Choose Earth-Friendly Pottery
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
              Every PRITHVO purchase is a vote for sustainable living, traditional craftsmanship, and a healthier planet. Join us in making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/store"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded font-paragraph text-lg hover:bg-beige transition-colors"
              >
                Shop Sustainable Pottery
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
