import React, { Component } from 'react';
import './LandingPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Typography from '@material-ui/core/Typography';

class LandingPage extends Component {
  render () {
    return (
      <div className='landing-page-container'>
        <div className='background-img'>
          <div className='social-media-icons'>
            <img 
              src='/images/ProdigyLogo.png'
              alt='logo'
              className='prodigy-logo' 
            />
            <FontAwesomeIcon 
              className='facebook-icon'
              icon={faFacebookSquare} 
              size='2x' 
            />
            <FontAwesomeIcon 
              className='instagram-icon'
              icon={faInstagram} 
              size='2x' 
            />
            <Typography className='link1'>
              Contact
            </Typography>
            <Typography className='link2'>
              About
            </Typography>
            <Typography className='link3'>
              Tour
            </Typography>
            <Typography className='link4'>
              Programs
            </Typography>
          </div>
          <div className='prodigy-title row'>
            <Typography className='prod-1'>
              Prod&#183;i&#183;gy
            </Typography> 
            <Typography className='prod-2'>
              /prädjē/
            </Typography> 
            <Typography className='prod-3'>
              {`An impressive or outstanding\nexample of a particular quality.`}
            </Typography>
            <div className='button-row'>
              <button className='btn discover'>
                Discover Us
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;