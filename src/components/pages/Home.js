import React, {Component} from 'react';
import image1 from '../../image/augmented-reality-3468596_1280.jpg';
import image2 from '../../image/bee-2984342_1280.jpg';
import image3 from '../../image/tablet-1719191_1280.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <header id='headSection'>
          <div id='rectangle'></div>
          <div className='homeSection'>
            <div className='section__bg'></div>
          </div>
        </header>

        <main>
          {/* Section C  */}

          <section id='section-c' className='grid'>
            <div className='content-wrap'>
              <h2 className='content-title'>
                We handle all of your digital needs
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                voluptatibus maiores optio ea officia iste iusto, aliquam beatae
                voluptates excepturi.
              </p>
            </div>
          </section>

          {/* Showcase */}
          <section id='showcase' className='grid'>
            <div className='bg-image'></div>
            <div className='content-wrap'>
              <h1>Welocome to acme web selotions</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                ab nam necessitatibus accusantium porro officia voluptates, quo
                rerum? Vitae, aliquid.
              </p>
              <a href='#section-b' className='homebtn'>
                Read More
              </a>
            </div>
          </section>

          {/* Section B */}
          <section id='section-b' className='grid'>
            <ul>
              <li>
                <div className='card'>
                  <img className='cardImg' src={image1} alt='' />
                  <div className='card-content'>
                    <h3 className='card-title'>Web Development</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Illo beatae ullam labore a, ipsa dolorum. Odio, temporibus
                      fugit! Amet, sapiente?
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className='card'>
                  <img className='cardImg' src={image2} alt='' />
                  <div className='card-content'>
                    <h3 className='card-title'>Mobile Development</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Illo beatae ullam labore a, ipsa dolorum. Odio, temporibus
                      fugit! Amet, sapiente?
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className='card'>
                  <img className='cardImg' src={image3} alt='' />
                  <div className='card-content'>
                    <h3 className='card-title'>Tech Marketing</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Illo beatae ullam labore a, ipsa dolorum. Odio, temporibus
                      fugit! Amet, sapiente?
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          {/* Section A  */}
          <section id='section-a' className='grid'>
            <div className='content-wrap'>
              <h2 className='content-title'>Web & App Development</h2>
              <div className='content-text'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magnam necessitatibus praesentium blanditiis repellat saepe
                  impedit pariatur. Nobis dolore reiciendis provident.
                </p>
              </div>
            </div>
          </section>

          {/* Section D   */}
          <section id='section-d' className='grid'>
            <div className='box'>
              <h2 className='content-title'>Contact Us</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorem nesciunt numquam excepturi odio et tempore voluptas
                praesentium fuga autem! Eaque.
              </p>
            </div>
            <div className='box'>
              <h2 className='content-title'>About Our Company</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                fugit! Vel accusantium eum ab iure reprehenderit, neque sequi
                pariatur nesciunt!
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
