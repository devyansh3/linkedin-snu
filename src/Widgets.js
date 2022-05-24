import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import './Widgets.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

const Widgets = () => {

    const newsArticle = (heading, subtittle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon/>
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtittle}</p>
            </div>

        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>News</h2>
            <InfoIcon/>
        </div>
        {newsArticle ('LIC IPO hits lowest!', "Top news - 9909 readers")}
        {newsArticle ('CoronaVirus india updates', "Top news - 9830 readers")}
        {newsArticle ('SNU hosting its 8th convocation ceremony', "Top news - 4748 readers")}
        {newsArticle ('Placement season for batch of 2023 begins!', "Top news - 1244 readers")}

    </div>
  )
}

export default Widgets