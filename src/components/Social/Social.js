import React from 'react';
import fb from '../../images/icons/facebook.png';
import github from '../../images/icons/github.png';
import instagram from '../../images/icons/instagram.png';
import linkedin from '../../images/icons/linkedin.png';
import skype from '../../images/icons/skype.png';
import twitter from '../../images/icons/twitter.png';
import youtube from '../../images/icons/youtube.png';

export default function Social() {
    return (
        <div className="container mt-3 mb-2" id="technologies">
        <div className="row text-start align-items-center">
            <div className="col text-center">
            <img className=" ps-3 img" src={fb} alt=""/>
                  <img className="ps-2 img" src={linkedin} alt=""/>
                  <img className="ps-2 img" src={twitter} alt=""/>
                  <img className="w-auto ps-2 img" src={instagram} alt=""/>
                  <img className="ps-2 img" src={github} alt=""/>
                  <img className="ps-2 img " src={skype} alt=""/>
                  <img className="ps-2 img" src={youtube} alt=""/>
                </div>
              </div>
            </div>
    )
}
