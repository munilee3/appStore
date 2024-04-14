import './index.css'

const TabItem = props => {
  const {eachTab, updateActiveTab, isActiveTab} = props
  const {displayText, tabId} = eachTab

  const onClickTabItem = () => {
    updateActiveTab(tabId)
  }

  const activeTabClassName = isActiveTab ? 'active-tab' : 'tabs-btn'
  return (
    <li className="tabs">
      <button
        type="button"
        className={`${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
