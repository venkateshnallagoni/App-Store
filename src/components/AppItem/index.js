// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-item">
      <img src={imageUrl} className="app-img" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
