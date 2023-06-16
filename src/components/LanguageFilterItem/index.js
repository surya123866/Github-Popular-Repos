import './index.css'

const LanguageItem = props => {
  const {itemDetails, ActiveId, clickAction} = props
  const {id, language} = itemDetails
  const active = id === ActiveId ? 'color-item' : ''
  const clickEvent = () => {
    clickAction(id)
  }

  return (
    <i className="list-item">
      <button
        type="button"
        className={`list-button ${active}`}
        onClick={clickEvent}
      >
        {language}
      </button>
    </i>
  )
}

export default LanguageItem
