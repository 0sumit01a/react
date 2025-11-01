import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  // State for each API method
  const [fetchImage, setFetchImage] = useState(null)
  const [axiosImages, setAxiosImages] = useState([])

  // Fetch single random image using Fetch API
  const fetchData = async () => {
    try {
      const response = await fetch('https://picsum.photos/200/300')
      // response.url will contain the image URL (because Picsum redirects)
      console.log('Fetch image URL:', response.url)
      setFetchImage(response.url)
    } catch (error) {
      console.error('Error fetching image with Fetch:', error)
    }
  }

  // Fetch list of images using Axios
  const getData = async () => {
    try {
      const axiosResponse = await axios.get('https://picsum.photos/v2/list?page=2&limit=5')
      console.log('Axios image data:', axiosResponse.data)
      setAxiosImages(axiosResponse.data)
    } catch (error) {
      console.error('Error fetching images with Axios:', error)
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>API Call Example with Lorem Picsum</h1>

      {/* FETCH EXAMPLE */}
      <button onClick={fetchData}>Get Random Image (Fetch)</button>
      {fetchImage && (
        <div style={{ marginTop: '15px' }}>
          <h3>Fetched Image:</h3>
          <img src={fetchImage} alt="Random from Picsum" style={{ width: 200, height: 300, borderRadius: 8 }} />
        </div>
      )}

      <hr style={{ margin: '20px 0' }} />

      {/* AXIOS EXAMPLE */}
      <button onClick={getData}>Get Image List (Axios)</button>
      {axiosImages.length > 0 && (
        <div style={{ marginTop: '15px' }}>
          <h3>Axios Images (5 items):</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {axiosImages.map(img => (
              <div key={img.id} style={{ textAlign: 'center' }}>
                <img
                  src={img.download_url}
                  alt={img.author}
                  style={{ width: 150, height: 150, objectFit: 'cover', borderRadius: 8 }}
                />
                <p style={{ fontSize: '0.9rem' }}>By: {img.author}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
