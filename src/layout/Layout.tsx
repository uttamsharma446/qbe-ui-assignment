import { Home } from "../pages";
import { Footer } from "./Footer";
import { Header } from "./Header";
export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
};
