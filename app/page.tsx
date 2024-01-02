import { Button } from '@/components/shared/ui/button';
import LatestArticles from '@/components/blog/LatestArticles';
import { ComponentDemo } from 'demo/demo';
import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingFaqSection } from '@/components/landing/LandingFaq';
import { LandingFeatureList } from '@/components/landing/LandingFeatureList';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingSaleCtaSection } from '@/components/landing/LandingSaleCta';
import { LandingTestimonialListSection } from '@/components/landing/LandingTestimonialList';

import {
  ChromeIcon,
  FigmaIcon,
  FramerIcon,
  GithubIcon,
  LayersIcon,
  LightbulbIcon,
  LineChartIcon,
  SparklesIcon,
  ThumbsUpIcon,
  ZapIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <div className="w-full flex flex-col items-center gap-8 md:gap-16">
        <section className="wide-container">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl md:max-w-3xl">
            Idea to Reality in Seconds
          </h1>
          <p className="mt-6 md:text-xl md:max-w-3xl">
            As AI brings the incremental cost of building, launching, testing,
            iterating, and scaling a digital product to near zero, leverage
            these capabilities.
          </p>

          <span className="flex flex-wrap gap-2 mt-6">
            <a href="/signup" target="_blank" rel="noopener noreferrer">
              <Button size="xl">Get Started</Button>
            </a>
            <a
              href="/read-more"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Button size="xl" variant="outlinePrimary">
                Read more
              </Button>
            </a>
          </span>
        </section>
      </div>

      <LandingBandSection
        className="mt-24"
        title="Turn Ideas into Reality"
        description="Build, launch, and scale your digital product in seconds using AI-powered technology."
        logosComponent={
          <>
            <ChromeIcon className="w-12 h-12" />
            <FigmaIcon className="w-12 h-12" />
            <GithubIcon className="w-12 h-12" />
            <FramerIcon className="w-12 h-12" />
          </>
        }
      />

      <LandingProductFeature
        imagePosition="right"
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Product image"
        title="Unleash the Power of AI"
        description="With AI-driven technology, Startups.Studio empowers you to build, launch, test, iterate, and scale your digital product with near-zero costs. Say goodbye to time-consuming development cycles!"
        withBackground
      />

      <LandingFeatureList
        title="Key Features"
        description="Experience the revolutionary capabilities of Startups.Studio."
        featureItems={[
          {
            title: 'Instant Prototyping',
            description:
              'Transform your ideas into functional prototypes within seconds.',
            icon: <LayersIcon />,
          },
          {
            title: 'Automated Testing',
            description:
              'Effortlessly test and validate your product with AI-driven precision.',
            icon: <LineChartIcon />,
          },
          {
            title: 'Intelligent Iteration',
            description:
              'Leverage AI algorithms to enhance and optimize your product at each iteration.',
            icon: <SparklesIcon />,
          },
          {
            title: 'Seamless Scalability',
            description:
              'Scale your digital product effortlessly as your user base grows.',
            icon: <LightbulbIcon />,
          },
          {
            title: 'User-centric Design',
            description:
              'Craft intuitive and visually stunning user interfaces that captivate your audience.',
            icon: <ZapIcon />,
          },
          {
            title: 'Real-time Analytics',
            description:
              'Gain valuable insights into user behavior and performance metrics instantly.',
            icon: <ThumbsUpIcon />,
          },
        ]}
      />

      <LandingFaqSection
        title="Frequently Asked Questions"
        description="Got questions? We have answers."
        faqItems={[
          {
            question:
              'How does Startups.Studio use AI for product development?',
            answer:
              'Startups.Studio incorporates AI algorithms to automate various stages of the development process, such as prototyping, testing, and optimization.',
          },
          {
            question: 'Can I scale my digital product as my user base grows?',
            answer:
              'Absolutely! Startups.Studio ensures seamless scalability, allowing your product to grow alongside your business.',
          },
          {
            question:
              'Is Startups.Studio suitable for both small startups and large enterprises?',
            answer:
              'Yes, Startups.Studio caters to the needs of both small startups and large enterprises, providing adaptable solutions for any scale.',
          },
        ]}
        withBackground
      />

      <LandingTestimonialListSection
        title="What Our Clients Say"
        description="Hear from some of our satisfied clients."
        testimonialItems={[
          {
            name: 'John Smith',
            text: "Startups.Studio has revolutionized the way we build digital products. It's incredibly fast and efficient!",
            handle: '@john_smith',
            imageUrl: 'https://picsum.photos/800/400?random=1',
            url: '#',
            size: 'full',
          },
          {
            name: 'Sarah Johnson',
            text: 'I was amazed by how quickly I was able to turn my idea into a fully functional prototype with Startups.Studio. Highly recommend!',
            handle: '@sarah_johnson',
            imageUrl: 'https://picsum.photos/800/400?random=2',
            url: '#',
            size: 'half',
          },
          {
            name: 'David Lee',
            text: "The AI-powered features of Startups.Studio have significantly improved our product's performance and scalability. It's a game-changer!",
            handle: '@david_lee',
            imageUrl: 'https://picsum.photos/800/400?random=3',
            url: '#',
            size: 'half',
          },
        ]}
      />

      <LandingSaleCtaSection
        title="Achieve Success Faster"
        description="Startups.Studio streamlines the product development process, enabling you to reach your business goals rapidly."
        ctaHref={'#'}
        ctaLabel={'Pre-order now'}
        withBackground
      />

      <section className="wide-container mt-12">
        <LatestArticles />
      </section>

      <div className="w-full flex flex-col items-center gap-8 md:gap-16">
        <section className="ultrawide-container">
          <ComponentDemo />
        </section>
      </div>
    </div>
  );
}
