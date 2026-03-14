"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplitTestimonial from "@/components/sections/hero/HeroSplitTestimonial";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { Star, Wrench, Shield, MessageSquare, HelpCircle, Phone } from "lucide-react";

export default function LandingPage() {
  const navItems = [
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" }
  ];

  const navButton = {
    text: "Call Now",    href: "tel:03-683-3796"
  };

  const heroTestimonials = [
    {
      name: "David M.",      handle: "@davidm_telaviv",      testimonial: "Excellent service, friendly and efficient. Got my tires replaced in 20 minutes!",      rating: 5,
      imageSrc: "https://img.freepik.com/free-photo/portrait-businessman-smiling-looking-camera_1150-1778.jpg?_wi=1",      imageAlt: "David Moshe customer review"
    },
    {
      name: "Sara K.",      handle: "@sarak_driver",      testimonial: "Excellent work at excellent price. Highly recommend for anyone in Tel Aviv.",      rating: 5,
      imageSrc: "https://img.freepik.com/free-photo/portrait-young-woman-smiling_1150-11532.jpg?_wi=1",      imageAlt: "Sara Kaplan customer review"
    },
    {
      name: "Yosef L.",      handle: "@yosef_automotive",      testimonial: "Professional team, honest pricing, and fast turnaround. Will be back!",      rating: 5,
      imageSrc: "https://img.freepik.com/free-photo/portrait-confident-man-smiling_1150-1779.jpg?_wi=1",      imageAlt: "Yosef Levi customer review"
    },
    {
      name: "Mira T.",      handle: "@mirat_il",      testimonial: "Fixed my flat tire same day. Great customer service and fair rates.",      rating: 5,
      imageSrc: "https://img.freepik.com/free-photo/portrait-woman-smiling_1150-1533.jpg?_wi=1",      imageAlt: "Mira Tzur customer review"
    }
  ];

  const serviceAccordionItems = [
    {
      id: "tire-replacement",      title: "Tire Replacement",      content: "Install high-quality tires for all vehicle types. We carry major brands and competitive pricing. Professional installation with wheel balancing included."
    },
    {
      id: "flat-repair",      title: "Flat Tire Repair",      content: "Fast puncture repair and patch service. Expert diagnosis of tire damage. Emergency roadside tire repair available."
    },
    {
      id: "wheel-balancing",      title: "Wheel Balancing",      content: "Improve ride comfort and extend tire lifespan. State-of-the-art balancing equipment. Quick service with precision results."
    },
    {
      id: "seasonal-change",      title: "Seasonal Tire Change",      content: "Quick seasonal tire swaps between winter and summer tires. Storage options available. Expert technicians ensure proper installation."
    },
    {
      id: "emergency-help",      title: "Emergency Tire Help",      content: "Same-day tire repair and service. Urgent assistance for flat tires. Professional mobile support in Tel Aviv area."
    }
  ];

  const metrics = [
    {
      id: "fast-service",      value: "30 min",      title: "Average Service Time",      items: ["Quick tire installation", "Efficient repair work", "Minimal wait times"]
    },
    {
      id: "competitive-price",      value: "Best",      title: "Competitive Pricing",      items: ["Fair tire costs", "No hidden fees", "Transparent estimates"]
    },
    {
      id: "experienced-team",      value: "15+",      title: "Years Experience",      items: ["Professional technicians", "Expert service quality", "Certified mechanics"]
    },
    {
      id: "central-location",      value: "Central",      title: "Convenient Location",      items: ["Herzl Street, Tel Aviv", "Easy parking", "Public transport nearby"]
    }
  ];

  const testimonialCards = [
    {
      id: "testimonial-1",      name: "David Moshe",      handle: "@davidm_telaviv",      testimonial: "Excellent service, friendly and efficient team. Got my tires replaced in 20 minutes. Will definitely come back!",      imageSrc: "https://img.freepik.com/free-photo/portrait-businessman-smiling-looking-camera_1150-1778.jpg?_wi=2",      imageAlt: "David Moshe customer review",      icon: Star
    },
    {
      id: "testimonial-2",      name: "Sara Kaplan",      handle: "@sarak_driver",      testimonial: "Excellent work at excellent prices. The technicians were professional and thorough. Highly recommend for anyone in Tel Aviv.",      imageSrc: "https://img.freepik.com/free-photo/portrait-young-woman-smiling_1150-11532.jpg?_wi=2",      imageAlt: "Sara Kaplan customer review",      icon: Star
    },
    {
      id: "testimonial-3",      name: "Yosef Levi",      handle: "@yosef_automotive",      testimonial: "Professional team, honest pricing, and incredibly fast service. Best tire shop in the area. Will be back for sure!",      imageSrc: "https://img.freepik.com/free-photo/portrait-confident-man-smiling_1150-1779.jpg?_wi=2",      imageAlt: "Yosef Levi customer review",      icon: Star
    },
    {
      id: "testimonial-4",      name: "Mira Tzur",      handle: "@mirat_il",      testimonial: "Fixed my flat tire same day with excellent customer service. Fair rates and quality work. Highly trusted!",      imageSrc: "https://img.freepik.com/free-photo/portrait-woman-smiling_1150-1533.jpg?_wi=2",      imageAlt: "Mira Tzur customer review",      icon: Star
    },
    {
      id: "testimonial-5",      name: "Omer Chen",      handle: "@omer_driver",      testimonial: "Great experience. Fast, professional, and friendly. Saved me a lot of money compared to other tire shops in the city.",      imageSrc: "https://img.freepik.com/free-photo/portrait-man-smiling_1150-1780.jpg",      imageAlt: "Omer Chen customer review",      icon: Star
    },
    {
      id: "testimonial-6",      name: "Noa Reuveni",      handle: "@noa_telaviv",      testimonial: "Always reliable. The staff knows their job and treats customers with respect. Top choice for tire service in Tel Aviv!",      imageSrc: "https://img.freepik.com/free-photo/portrait-woman-looking-camera_1150-1534.jpg",      imageAlt: "Noa Reuveni customer review",      icon: Star
    }
  ];

  const faqs = [
    {
      id: "faq-1",      title: "How long does tire replacement take?",      content: "Most tire replacements take 20-30 minutes depending on your vehicle. We work efficiently without compromising quality. Call ahead for emergency situations."
    },
    {
      id: "faq-2",      title: "Do you offer emergency tire repair?",      content: "Yes! We provide same-day emergency tire repair for flat tires and punctures. Call us at 03-683-3796 for urgent assistance anywhere in Tel Aviv."
    },
    {
      id: "faq-3",      title: "What tire brands do you carry?",      content: "We stock all major tire brands including Michelin, Bridgestone, Goodyear, Continental, and more. We can order specific brands if needed."
    },
    {
      id: "faq-4",      title: "How much does tire replacement cost?",      content: "Pricing varies by tire brand and size. We offer competitive rates. For an exact quote, call us at 03-683-3796 or use our online quote form."
    },
    {
      id: "faq-5",      title: "Do you do wheel balancing?",      content: "Yes, wheel balancing is included with new tire installation. We also offer separate balancing service using state-of-the-art equipment."
    },
    {
      id: "faq-6",      title: "What are your business hours?",      content: "We're open Sunday-Thursday 7:30 AM - 6:00 PM, Friday 7:30 AM - 2:00 PM. Closed on Saturdays and holidays. Call for exact holiday hours."
    }
  ];

  const footerColumns = [
    {
      items: [
        { label: "Services", href: "#services" },
        { label: "About Us", href: "#about" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      items: [
        { label: "Call: 03-683-3796", href: "tel:03-683-3796" },
        { label: "Herzl St 101, Tel Aviv-Yafo", href: "https://maps.google.com/?q=Herzl+101+Tel+Aviv" },
        { label: "Hours: Sun-Thu 7:30 AM - 6:00 PM", href: "#" }
      ]
    },
    {
      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Accessibility", href: "#" }
      ]
    }
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="noise"
      cardStyle="subtle-shadow"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Tire Service Tel Aviv"
          navItems={navItems}
          button={navButton}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Fast & Affordable Tire Service in Tel Aviv"
          description="Tire replacement, repair, and balancing from a trusted local shop. Same-day service for all your automotive tire needs."
          background={{ variant: "radial-gradient" }}
          tag="⭐ 4.7 Rating • 270+ Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          buttons={[
            { text: "Call Now: 03-683-3796", href: "tel:03-683-3796" },
            { text: "Get a Free Quote", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          testimonials={heroTestimonials}
          testimonialRotationInterval={5000}
          imageSrc="http://img.b2bpic.net/free-photo/mechanic-examining-tyre_1170-1585.jpg"
          imageAlt="Professional tire technician working on vehicle tire replacement"
          mediaAnimation="blur-reveal"
          imagePosition="right"
          fixedMediaHeight={true}
          ariaLabel="Hero section with customer testimonials"
          containerClassName="py-16 md:py-24"
          titleClassName="text-5xl md:text-6xl font-bold tracking-tight"
          descriptionClassName="text-xl text-opacity-90"
          buttonContainerClassName="flex gap-4 flex-wrap"
          buttonClassName="px-6 py-3 rounded-full font-semibold"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyOne
          title="Our Services"
          description="Complete tire solutions for all your vehicle needs in Tel Aviv"
          tag="Professional Tire Services"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          accordionItems={serviceAccordionItems}
          imageSrc="http://img.b2bpic.net/free-photo/mechanic-repairing-car-workshop_329181-11805.jpg"
          imageAlt="Professional tire replacement service in our shop"
          mediaAnimation="blur-reveal"
          mediaPosition="left"
          useInvertedBackground={false}
          buttons={[
            { text: "Call for Service", href: "tel:03-683-3796" }
          ]}
          buttonAnimation="slide-up"
          containerClassName="py-16 md:py-24"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg text-opacity-80"
          accordionContainerClassName="space-y-3"
        />
      </div>

      <div id="why-choose" data-section="why-choose">
        <MetricCardSeven
          title="Why Choose Tire Service Tel Aviv"
          description="Trusted by local drivers for quality, reliability, and excellent customer service"
          tag="Local Expertise"
          tagIcon={Shield}
          tagAnimation="slide-up"
          metrics={metrics}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[
            { text: "Get Quote Now", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          containerClassName="py-16 md:py-24"
          textBoxTitleClassName="text-4xl md:text-5xl font-bold"
          textBoxDescriptionClassName="text-lg"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Customer Reviews"
          description="Real feedback from Tel Aviv drivers who trust us with their tire needs"
          tag="Customer Stories"
          tagIcon={MessageSquare}
          tagAnimation="slide-up"
          testimonials={testimonialCards}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={35}
          topMarqueeDirection="left"
          buttons={[
            { text: "Join Our Customers", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          containerClassName="py-16 md:py-24"
          textBoxTitleClassName="text-4xl md:text-5xl font-bold"
          textBoxDescriptionClassName="text-lg"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our tire services in Tel Aviv"
          tag="Help & Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={faqs}
          imageSrc="http://img.b2bpic.net/free-photo/view-city-street-night-valencia-spain_1398-4134.jpg"
          imageAlt="Our tire shop location in central Tel Aviv"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="smooth"
          showCard={true}
          buttons={[
            { text: "Still Have Questions? Call Us", href: "tel:03-683-3796" }
          ]}
          buttonAnimation="slide-up"
          containerClassName="py-16 md:py-24"
          textBoxTitleClassName="text-4xl md:text-5xl font-bold"
          textBoxDescriptionClassName="text-lg"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Ready to Service Your Tires?"
          description="Contact us today for a free quote or immediate service. We're here to help with all your tire needs in Tel Aviv."
          tagIcon={Phone}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/medium-shot-man-holding-tyre-wrench_23-2148270635.jpg"
          imageAlt="Professional tire service team ready to help"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Get Free Quote"
          termsText="By submitting, you agree to our Terms and Conditions and Privacy Policy."
          containerClassName="py-16 md:py-24"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg"
          formClassName="space-y-4"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Tire Service Tel Aviv"
          columns={footerColumns}
          ariaLabel="Site footer with business information"
          containerClassName="py-12 border-t"
          columnsClassName="grid grid-cols-1 md:grid-cols-3 gap-8"
          itemClassName="hover:opacity-70 transition-opacity"
        />
      </div>
    </ThemeProvider>
  );
}
