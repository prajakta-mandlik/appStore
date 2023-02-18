// Write your code here
import './index.css'

const AppItem = props => {
  const {itemDetails} = props
  const {appName, imageUrl} = itemDetails

  return (
    <li className="card-container">
      <img src={imageUrl} className="image" alt={appName} />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
