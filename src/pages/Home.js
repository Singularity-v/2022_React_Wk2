
import Nav from "../components/Nav";
import Header from "../components/Header";
import Category from "../components/CategoryList";
import Footer from "../components/Footer";

function Home(){
    return(
        <div>
            <Nav/>
            <Header />
            <Category />
            <Footer />
        </div>
    );
}

export default Home;