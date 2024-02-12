import React from 'react'
import {IMG_CDN} from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div>
        <div className="w-36 md:w-48 pr-4">
            <img src={IMG_CDN + posterPath} alt='Card Image' />
        </div>
    </div>
  )
}

export default MovieCard