import { useWindowDimensions } from "../hooks/useWindowDimensions"

const SideBar = () => {
  const { width } = useWindowDimensions()

  if (width <= 768) {
    return null
  }

  return (
    <main className="sidebar">Sidebar</main>
  )
}

export default SideBar
