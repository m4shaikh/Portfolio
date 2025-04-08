import { useEffect, useState } from 'react'

// ✅ External Libraries (Sorted Alphabetically)
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components' // ✅ 'css' comes before 'keyframes'

// ✅ Internal Components (Sorted Alphabetically)
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-s.png'

// ✅ Styles at the End
import './index.scss'


// 🔥 Super Slow Growth Animation (15 seconds)
const slowGrow = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(100); /* Expands extremely slowly */
  }
`

const GrowingButton = styled.a`
  display: inline-block;
  padding: 15px 25px;
  font-size: 1.2rem;
  color: white;
  background-color: red;
  border: none;
  text-decoration: none;
  transition: transform 250s linear; /* Super slow expansion */

  &:hover {
    animation: ${slowGrow} 250s forwards; /* Grows very slowly */
  }
`

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = 'oinuddin Shaikh'.split('')
  const jobArray = 'Backend Developer'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i      T</span>
            <span className={`${letterClass} _12`}>h</span>
            <span className={`${letterClass} _12`}>e</span>
            <span className={`${letterClass} _12`}>r</span>
            <span className={`${letterClass} _12`}>e,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Shaikh Moinuddin" />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
          </h1>
          <h2> Designing Scalable & Secure APIs</h2>

          {/* ✅ Buttons Container */}
          <div className="buttons-container">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
            {/* ✅ Extremely Slow Growing Resume Button */}
            <GrowingButton href="/Moinuddin Resume.pdf" download>
              DOWNLOAD RESUME
            </GrowingButton>
          </div>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
