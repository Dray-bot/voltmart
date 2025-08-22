import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Trending from "@/components/Trending";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FeaturedProducts />
      <Trending />
      <Categories />
      <Newsletter />
    </div>
  );
}
