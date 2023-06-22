import React from 'react'
import calories from '../../assets/calory-icon.svg'

export default function Calories() {
  const calorieCount = 1930
  return (
    <article className='nutrition_card'>
      <div className="calory_button">
        <img src={calories} alt="calories" />
      </div>
      <div className="calory_content">
        <h3>{calorieCount}kCal</h3>
        <span>Calories</span>
      </div>
    </article>
  )
}
