import React from 'react';
import '../../assert/AboutFile.css'
import NavBar from './NavBar';

const About=()=> {
 return (
  <>
  <NavBar />
    <div className="App">
      <header className="App-header">
        <h1 style={{marginTop:"100px"}}>About Us</h1>
      </header>
      <main>
        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide our users with an extensive and
            informative platform to explore the world of books and read
            reviews from other avid readers.
          </p>
          </section>
        <section>
          <h2>Our Team</h2>
          <p>
            Our team consists of highly skilled individuals who share a
            passion for books and strive to provide the best possible
            experience for our users.
          </p>
        </section>
        <section>
          <h2>Acknowledgments</h2>
          <p>
          We extend our heartfelt thanks to everyone who has contributed to
           the growth and success of <span style={{fontFamily:'fantasy',fontSize:'20px'}}>ReadReflex</span> Whether you're a reader, contributor, or partner, 
          your support has been instrumental in shaping our community.
          </p>
        </section>
      </main>
    </div>
    </>
 );
}

export default About;