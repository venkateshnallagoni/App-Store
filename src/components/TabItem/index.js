// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props

  const {tabId, displayText} = tabDetails

  const activeTabClass = isActive ? 'active-tb-style' : ''

  const onUpdateId = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-style ${activeTabClass}`}
        onClick={onUpdateId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
