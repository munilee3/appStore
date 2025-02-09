import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp
  return (
    <li className="app">
      <img src={imageUrl} alt={appName} className="app-icon" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
