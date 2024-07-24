
import Header from "./Header";
import Footer from "./Footer";

export default function Layouts({children}) {
  return (
    <main>
       <Header/>
            <main>
                {children}
            </main>
       <Footer/>
    </main>
  );
}
