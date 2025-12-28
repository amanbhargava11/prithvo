import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { Artisans } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { ArrowLeft, Award } from 'lucide-react';

export default function ArtisanDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [artisan, setArtisan] = useState<Artisans | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtisan = async () => {
      if (!id) return;
      const data = await BaseCrudService.getById<Artisans>('artisans', id);
      setArtisan(data);
      setLoading(false);
    };

    fetchArtisan();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!artisan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-paragraph text-xl text-foreground/60 mb-6">
            Artisan not found
          </p>
          <Link
            to="/artisans"
            className="inline-flex items-center gap-2 text-primary hover:text-terracotta transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Artisans
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Back Button */}
      <div className="max-w-[100rem] mx-auto px-6 lg:px-12 pt-8">
        <Link
          to="/artisans"
          className="inline-flex items-center gap-2 font-paragraph text-primary hover:text-terracotta transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Artisans
        </Link>
      </div>

      {/* Artisan Profile */}
      <section className="py-16">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden sticky top-24">
                {artisan.profilePicture && (
                  <Image
                    src={artisan.profilePicture}
                    alt={artisan.artisanName || 'Artisan'}
                    width={800}
                    className="w-full h-full object-cover"
                  />
                )}
                {artisan.featured && (
                  <div className="absolute top-6 right-6 bg-terracotta text-white px-4 py-2 rounded-full flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span className="font-paragraph text-sm font-medium">Featured Artisan</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="font-heading text-5xl md:text-6xl text-primary mb-4">
                  {artisan.artisanName}
                </h1>
                {artisan.craftSpecialty && (
                  <p className="font-paragraph text-2xl text-terracotta">
                    {artisan.craftSpecialty}
                  </p>
                )}
              </div>

              {artisan.shortBio && (
                <div className="bg-beige p-8 rounded-xl">
                  <p className="font-paragraph text-lg text-foreground/80 leading-relaxed italic">
                    "{artisan.shortBio}"
                  </p>
                </div>
              )}

              {artisan.fullStory && (
                <div className="space-y-6">
                  <h2 className="font-heading text-3xl text-primary">The Artisan's Journey</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="font-paragraph text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
                      {artisan.fullStory}
                    </p>
                  </div>
                </div>
              )}

              {/* Additional Info */}
              <div className="bg-white p-8 rounded-xl space-y-4">
                <h3 className="font-heading text-2xl text-primary mb-4">Craft Details</h3>
                {artisan.craftSpecialty && (
                  <div>
                    <span className="font-paragraph text-sm text-foreground/60">Specialty:</span>
                    <p className="font-paragraph text-lg text-foreground">
                      {artisan.craftSpecialty}
                    </p>
                  </div>
                )}
                <div>
                  <span className="font-paragraph text-sm text-foreground/60">Tradition:</span>
                  <p className="font-paragraph text-lg text-foreground">
                    Generations of pottery-making expertise
                  </p>
                </div>
                <div>
                  <span className="font-paragraph text-sm text-foreground/60">Technique:</span>
                  <p className="font-paragraph text-lg text-foreground">
                    Traditional hand-throwing and natural firing methods
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              Support {artisan.artisanName}'s Craft
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
              Every purchase directly supports artisan families and helps preserve traditional pottery-making techniques for future generations.
            </p>
            <Link
              to="/store"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded font-paragraph text-lg hover:bg-beige transition-colors"
            >
              Explore Our Collection
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
