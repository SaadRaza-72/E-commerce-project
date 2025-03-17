import CommentForm from "./CommentForm";
import CommentsSection from "./CommentsSection";
import HeroImageWithQuote from "./HeroImageWithQuote";
import HeroSection from "./HeroSection";
import OutfitCollections from "./OutfitCollections";
import RelatedArticles from "./RelatedArticles";
import ShopTheLook from "./ShopTheLook";
import SocialShareSection from "./SocialShareSection";


export default function blogpage() {
  return (
    <main className="">
      <section className="py- px-">
        <HeroSection />
        <HeroImageWithQuote />
        <ShopTheLook />
        <OutfitCollections />
        <SocialShareSection />
        <RelatedArticles />
        <CommentsSection />
        <CommentForm />
      </section>
    </main>
  );
}