import AboutSection from "./AboutSection";
import InfoSection from "./InfoSection";
import TeamSection from "./TeamSection";


export default function AboutUs() {
  return (
    <main className="">
      <section className="py- px-">
        {/* <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Latest Fashion & Travel Blogs
        </h1> */}
        <AboutSection />
        <InfoSection />
        <TeamSection />
      </section>
    </main>
  );
}