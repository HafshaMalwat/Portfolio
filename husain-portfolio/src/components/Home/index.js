import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/letter-h.png'
import LogoM from '../../assets/images/letter-m.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Layout from '../Layout'
import Logo from './Logo'


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
              <Link to="/contact" className="flat-button">
                CONTACT ME
              </Link>
            </div>
            <Logo />
          </div>
    
          
        </>
      )
}

export default Home