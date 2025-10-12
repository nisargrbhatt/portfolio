import Hero from "./__components/Hero";
import Projects from "./__components/Projects";
import Skills from "./__components/Skills";
import Contact from "./__components/Contact";
import { Metadata, NextPage } from "next";
import { ProfilePage, WithContext } from "schema-dts";
import { SITE_URL } from "@/lib/common";

const jsonLd: WithContext<ProfilePage> = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    image: new URL("/me.png", SITE_URL).toString(),
    jobTitle: "Full Stack Developer",
    description:
      "I'm Nisarg Bhatt, a Full Stack Developer from India. I'm passionate about building scalable and performant applications using modern technologies.",
    name: "Nisarg Bhatt",
    givenName: "Nisarg",
    familyName: "Bhatt",
    url: SITE_URL,
    sameAs: [
      "https://github.com/nisargrbhatt",
      "https://www.linkedin.com/in/nisarg-r-bhatt/",
      "https://x.com/nisarg_2001",
    ],
    email: "mailto:nisargrbhatt@gmail.com",
    gender: "Male",
    nationality: "Indian",
  },
};

export const metadata: Metadata = {
  title: "Nisarg Bhatt",
  description:
    "I'm Nisarg Bhatt, a Full Stack Developer from India. I'm passionate about building scalable and performant applications using modern technologies.",
  twitter: {
    card: "summary_large_image",
    title: "Nisarg Bhatt",
    description:
      "I'm Nisarg Bhatt, a Full Stack Developer from India. I'm passionate about building scalable and performant applications using modern technologies.",
    images: new URL("/me.png", SITE_URL).toString(),
    creator: "@nisarg_2001",
  },
  openGraph: {
    type: "website",
    title: "Nisarg Bhatt",
    description:
      "I'm Nisarg Bhatt, a Full Stack Developer from India. I'm passionate about building scalable and performant applications using modern technologies.",
    url: SITE_URL,
    countryName: "India",
    locale: "en_IN",
    siteName: "Nisarg Bhatt",
    images: new URL("/me.png", SITE_URL).toString(),
  },
  keywords:
    "portfolio, javascript, typescript, developer, nisargrbhatt, nisargbhatt",
};

const Home: NextPage = () => {
  return (
    <div className="*:border-b *:border-neutral-200 *:last-of-type:border-b-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
