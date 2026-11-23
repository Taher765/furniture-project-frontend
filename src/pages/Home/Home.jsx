import Category from "../../components/Category/Category";
import Footer from "../../components/layouts/Footer/Footer";
import ProductsItems from "../../components/ProductsItems/ProductsItems";
import Slider from "../../components/Slider/Slider";

function Home() {
  return (
    <>
      <Slider />
      <Category />
      <ProductsItems title="وصل حديثا" colSm={6} colMd={4} colLg={3} />
      <ProductsItems title="الاكثر طلبا" colSm={6} colMd={4} colLg={3} />
      <ProductsItems
        title="مقترح لك (لو كنت مسجل ايميلك فقط)"
        colSm={6}
        colMd={4}
        colLg={3}
      />
      <Footer />
    </>
  );
}

export default Home;
