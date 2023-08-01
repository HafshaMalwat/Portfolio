import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import LogoTitle from '../../assets/images/letter-h.png'
import LogoM from '../../assets/images/letter-m.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Layout from '../Layout'
import Logo from './Logo'
import cv from '../../assets/Documents/resume.pdf'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['u', 's', 'a', 'i', 'n', ' ']
  const nameArray2 = [ 'a', 'l', 'w', 'a','t']
  const jobArray = [
    'A',
    '',
    'S',
    't',
    'u',
    'd',
    'e',
    'n',
    't',
    '.',
  ]


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timeoutId);
      }, []);
    
      const handleDownload = () => {
        // Create an anchor element
        const link = document.createElement('a');
        link.href = {cv};
        link.download = 'husain_cv.pdf';
    
        // Append the anchor to the document body and trigger the download
        document.body.appendChild(link);
        link.click();
    
        // Remove the anchor element from the document after the download is triggered
        document.body.removeChild(link);
      };

    return (
        <>
        <Layout />
          <div className="container home-page">
            
            <div className="text-zone">
              <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
            <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="name"/>

                <AnimatedLetters letterClass={letterClass}
                  strArray={nameArray}
                  idx={15} />
                <img src={LogoM} alt="Surname"/>
                <AnimatedLetters letterClass={letterClass}
                  strArray={nameArray2}
                  idx={16} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                  strArray={jobArray}
                  idx={13} />
              </h1>
              <h2>Front End Developer / JavaScript Expert / Youtuber</h2>           
                <Link onClick={handleDownload} className="flat-button">              
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="anchor-icon"                    
                  />                             
                  Download CV
                </Link>
            </div>
            <Logo />
            
          </div>
    
          <Loader type="pacman" />
        </>
      )
}

export default Home