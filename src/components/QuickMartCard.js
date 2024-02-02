import React from 'react'
import { ImgMart } from '../config';

const QuickMartCard = ({imageId,displayName}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex-1'><img src={ImgMart + imageId} alt="" width={150}/></div>
      <div className='flex-2 text-sm font-semibold'>{displayName}</div>
    </div>
  )
}

export default QuickMartCard;
