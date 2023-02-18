// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickBtn = () => {
    onClickTab(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab' : ''
  return (
    <li>
      <button
        type="button"
        className={`display-text ${activeTabClassName}`}
        onClick={onClickBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
