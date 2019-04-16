import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CS_KEY = 'AIzaSyDE7I1yji7dxha4hgvQJ9rP4EWhoD6pc-c'

const ImageSearch = ({ food }) => {
  const [images, setImages] = useState([])
  useEffect(() => {
    axios({
      url: `https://www.googleapis.com/customsearch/v1?key=${CS_KEY}&searchType=image&cx=001646449377674453720:fpmd1462yfk&q=${food}`,
      responseType: 'json'
    }).then(response => {
      console.log(response.data.items)
      setImages(response.data.items.map(item => item.image.thumbnailLink))
    })
  }, [food])

  console.log(images)

  return (
    // <div className="flex flex-wrap">
    <div className="masonry">
      {images.map(i => (
        // <div key={i} className="w-full sm:w-1/3 md:w-1/4">
        <div key={i} className="masonry-item">
          <img src={i} alt="" />
        </div>
      ))}
    </div>
  )
}

export default ImageSearch
