import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DrawerToggleButton from './sideDrawer/DrawerToggleButton';
import SideDrawer from './sideDrawer/SideDrawer';
import {ButtonContainer} from './Button';
import logo from '../image/symbolic.svg';

class Toolbar extends Component {
  state = {
    sideDrawerOpen: false,
    color: '',
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({color: '#48bbfe'});
    } else {
      this.setState({color: 'transparent'});
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    let sideDrawer;

    const color = this.state.color;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer click={this.backdropClickHandler} />;
    }

    return (
      <div>
        <header className='toolbar' style={{background: color}}>
          <nav className='toolbar_navigation'>
            <div>
              <DrawerToggleButton click={this.drawerToggleClickHandler} />
            </div>
            <div className='toolbar_logo'>
              <Link to='/'>
                <img src={logo} alt='store' />
              </Link>
            </div>
            <div className='spacer' />
            <div className='toolbar_navigation-items'>
              <ul>
                <li>
                  <Link to='/' className='nav-link'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/products' className='nav-link'>
                    Products
                  </Link>
                </li>
              </ul>
            </div>
            <Link to='/cart' className='ml-auto '>
              <ButtonContainer>
                <span className='mr-2 '>
                  <i className='fas fa-cart-plus ' />
                </span>
              </ButtonContainer>
            </Link>
          </nav>
        </header>
        {sideDrawer}
      </div>
    );
  }
}

export default Toolbar;
