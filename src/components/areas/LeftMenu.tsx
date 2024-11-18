import { useEffect, useState } from "react"
import { useWindowDimensions } from "../../hooks/useWindowDimensions"
import { getCategories } from "../../services/DataService"
import Category from "../../models/Category"

const LeftMenu = () => {
  const { width } = useWindowDimensions()
  const [categories, setCategories] = useState<JSX.Element>(<div>Left Menu</div>)

  useEffect(() => {
    getCategories()
      .then((categories: Category[]) => {
        const cats = categories.map(cat => {
          return <li key={cat.id}>{cat.name}</li>
        })
        setCategories(<ul className="category">{cats}</ul>)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  if (width <= 768) {
    return null
  }

  return (
    <main className="leftmenu">{categories}</main>
  )
}

export default LeftMenu
