import { FC } from 'react'
import './Home.css'
import Nav from '../areas/Nav'
import SideBar from '../sidebar/SideBar'
import LeftMenu from '../areas/LeftMenu'
import Main from '../areas/main/Main'
import RightMenu from '../areas/rightMenu/RightMenu'

const Home: FC = () => {
  return (
    <div className="screen-root-container home-container">
      <div className="navigation">
        <Nav />
      </div>
      <SideBar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  )
}

export default Home
