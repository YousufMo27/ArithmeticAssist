import '../App.css'
import Navbar from './navbar';
import Hero from './hero-section';
import SecondHero from './second-hero-section';

function Home () {
    return <div className="App">
    <Navbar/>
    <Hero/>
    <SecondHero/>
    </div>
}

export default Home;