import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../store/AppState"
import { useEffect, useState } from "react"
import { UserProfileSetType } from "../../store/user/Reducer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRegistered, faSignInAlt, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons"
import Registration from "../auth/Registration"
import './SideBarMenus.css'
import Login from "../auth/Login"
import Logout from "../auth/Logout"

const SideBarMenus = () => {
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
  const user = useSelector((state: AppState) => state.user)
  const dispatch = useDispatch()

  const onClickToggleRegister = () => {
    setShowRegister(!showRegister)
  }

  const onClickToggleLogin = () => {
    setShowLogin(!showLogin)
  }

  const onClickToggleLogout = () => {
    setShowLogout(!showLogout)
  }

  useEffect(() => {
    dispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        userName: 'testUser'
      },
    })
  }, [dispatch])

  return (
    <>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">{user?.userName}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span onClick={onClickToggleRegister} className="menu-name">register</span>
          <Registration
            isOpen={showRegister}
            onClickToggle={onClickToggleRegister}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignInAlt} />
          <span onClick={onClickToggleLogin} className="menu-name">login</span>
          <Login isOpen={showLogin} onClickToggle={onClickToggleLogin} />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span onClick={onClickToggleLogout} className="menu-name">logout</span>
          <Logout isOpen={showLogout} onClickToggle={onClickToggleLogout} />
        </li>
      </ul>
    </>
  )
}

export default SideBarMenus
