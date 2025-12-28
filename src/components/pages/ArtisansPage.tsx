import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { Artisans } from '@/entities';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Award } from 'lucide-react';

export default function ArtisansPage() {
  const [artisans, setArtisans] = useState<Artisans[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtisans = async () => {
      const { items } = await BaseCrudService.getAll<Artisans>('artisans');
      setArtisans(items);
      setLoading(false);
    };

    fetchArtisans();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

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
              Meet Our Artisans
            </h1>
            <p className="font-paragraph text-xl text-foreground/80 leading-relaxed">
              The skilled hands and creative minds behind every PRITHVO creation. Each artisan brings generations of knowledge and a unique artistic vision to their craft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {artisans.map((artisan, index) => (
              <motion.div
                key={artisan._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/artisans/${artisan._id}`}
                  className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Artisan Image */}
                  <div className="aspect-[3/4] overflow-hidden relative">
                    {artisan.profilePicture && (
                      <Image
                        src={artisan.profilePicture}
                        alt={artisan.artisanName || 'Artisan'}
                        width={600}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    {artisan.featured && (
                      <div className="absolute top-4 right-4 bg-terracotta text-white px-3 py-1 rounded-full flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span className="font-paragraph text-sm">Featured</span>
                      </div>
                    )}
                  </div>

                  {/* Artisan Info */}
                  <div className="p-6">
                    <h3 className="font-heading text-2xl text-primary mb-2">
                      {artisan.artisanName}
                    </h3>
                    {artisan.craftSpecialty && (
                      <p className="font-paragraph text-sm text-terracotta mb-3">
                        {artisan.craftSpecialty}
                      </p>
                    )}
                    {artisan.shortBio && (
                      <p className="font-paragraph text-foreground/70 leading-relaxed line-clamp-3">
                        {artisan.shortBio}
                      </p>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {artisans.length === 0 && (
            <div className="text-center py-16">
              <p className="font-paragraph text-xl text-foreground/60">
                No artisan profiles available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Artisan Support Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl mb-6">
                Supporting Artisan Communities
              </h2>
              <p className="font-paragraph text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                When you purchase from PRITHVO, you're not just buying pottery—you're supporting entire artisan families, preserving traditional skills, and helping keep ancient crafts alive for future generations. Every purchase makes a direct impact on the lives of our artisan partners.
              </p>
              <div className="grid sm:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="font-heading text-4xl mb-2">Fair Wages</div>
                  <p className="font-paragraph text-primary-foreground/80">
                    Above market rates for quality work
                  </p>
                </div>
                <div>
                  <div className="font-heading text-4xl mb-2">Skill Training</div>
                  <p className="font-paragraph text-primary-foreground/80">
                    Continuous learning opportunities
                  </p>
                </div>
                <div>
                  <div className="font-heading text-4xl mb-2">Community Care</div>
                  <p className="font-paragraph text-primary-foreground/80">
                    Healthcare and education support
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
