// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageData, updateImage, isActive} = props
  const {id, thumbnailAltText, thumbnailUrl} = imageData

  const onClickImage = () => {
    updateImage(id)
  }

  const activeThumbImageClassName = isActive ? 'active-thumb-image' : ''

  return (
    <li>
      <button onClick={onClickImage} className="thumb-button" type="button">
        <img
          className={`thumb-image ${activeThumbImageClassName}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
