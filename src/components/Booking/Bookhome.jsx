import React from 'react'
import Header from './header/Header'
import Featured from './featured/Featured'
import PropertyList from './propertylist/PropertyList'
import FeaturedProperties from './featuredproperties/FeaturedProperties'
import MailList from './mailList/MailList'

const Bookhome = () => {
  return (
    <div className='bookhomes'>
      <Header />
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
      </div>
    </div>
  )
}

export default Bookhome