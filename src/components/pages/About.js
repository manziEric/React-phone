import React, {Component} from 'react';

class About extends Component {
  state = {
    width: null,
    height: null,
  };

  updateWindowSize = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  };

  componentDidMount() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
    window.addEventListener('resize', this.updateWindowSize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  }

  render() {
    return (
      <div>
        <header className='aboutHeader'>
          {this.state.width < 699 ? (
            <>
              <div className='aboutSpace'></div>
              <p className='book'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sapiente ipsa asperiores laborum quae repellendus temporibus
                ipsam nostrum libero sed ullam perferendis porro necessitatibus
                totam reprehenderit corporis ut officiis, non tempora at quo?
                Itaque animi dolor debitis quae, necessitatibus saepe excepturi
                ipsam delectus quibusdam labore ut cupiditate voluptates amet
                sed neque illum at vitae quasi aliquid cum doloribus? Illum
                soluta quaerat, aperiam maxime.
              </p>

              <p className='book'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sapiente ipsa asperiores laborum quae repellendus temporibus
                ipsam nostrum libero sed ullam perferendis porro necessitatibus
                totam reprehenderit corporis ut officiis, non tempora at quo?
                Itaque animi dolor debitis quae, necessitatibus saepe excepturi
                ipsam delectus quibusdam labore ut cupiditate voluptates amet
                sed neque illum at vitae quasi aliquid cum doloribus? Illum
                soluta quaerat, aperiam maxime.
              </p>
            </>
          ) : (
            <>
              <p className='book'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sapiente ipsa asperiores laborum quae repellendus temporibus
                ipsam nostrum libero sed ullam perferendis porro necessitatibus
                totam reprehenderit corporis ut officiis, non tempora at quo?
                Itaque animi dolor debitis quae, necessitatibus saepe excepturi
                ipsam delectus quibusdam labore ut cupiditate voluptates amet
                sed neque illum at vitae quasi aliquid cum doloribus? Illum
                soluta quaerat, aperiam maxime.
              </p>

              <p className='book'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sapiente ipsa asperiores laborum quae repellendus temporibus
                ipsam nostrum libero sed ullam perferendis porro necessitatibus
                totam reprehenderit corporis ut officiis, non tempora at quo?
                Itaque animi dolor debitis quae, necessitatibus saepe excepturi
                ipsam delectus quibusdam labore ut cupiditate voluptates amet
                sed neque illum at vitae quasi aliquid cum doloribus? Illum
                soluta quaerat, aperiam maxime.
              </p>
            </>
          )}

          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 200 100'
            preserveAspectRatio='none'
          >
            <circle fill='white' cx='0' cy='100' r='100' />
            <circle fill='white' cx='200' cy='100' r='100' />
          </svg>
        </header>
      </div>
    );
  }
}

export default About;
