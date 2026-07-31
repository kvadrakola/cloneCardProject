import './App.css';
import Testimonial from './components/Testimonial.jsx'

import EmmaPhoto from './assets/img/EmmaPhoto.png';
import SarahPhoto from './assets/img/SarahPhoto.png';
import ShawnPhoto from './assets/img/ShawnPhoto.png';

function App() {
    return (
        <div className='main-container'>
            <h1> Here is what our students say about freeCodeCamp:</h1>

            <Testimonial
                name="Shawn Wang"
                country="Singapore"
                jobTitle="Software Engineer"
                jobCompany="Amazon"
                text="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. <strong> freeCodeCamp changed my life.</strong>"
                image={ShawnPhoto}
            />
            <Testimonial
                name="Sarah Chima"
                country="Nigeria"
                jobTitle="Software Engineer"
                jobCompany="ChatDesk"
                text="<strong>freeCodeCamp was the gateway to my career</strong> as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
                image={SarahPhoto}
            />
            <Testimonial
                name="Emma Bostian"
                country="Sweden"
                jobTitle="Software Engineer"
                jobCompany="Spotify"
                text="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on <strong>freeCodeCamp gave me the skills</strong> and confidence I needed to land my dream job as a software engineer at Spotify."
                image={EmmaPhoto}
            />



        </div>


    );

}

export default App;