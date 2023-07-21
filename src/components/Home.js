import React from 'react'
import Slider from './Slider'
import Card from './Card'
import Features from './Features'
import Productstitle from './Productstitle'
import Colection from './Colection'
import { Pro } from './Pro'
import Proslider from './Proslider'

function Home() {
return (
    <div>
        <Slider/>
        <Card />
        <Productstitle/>
        <Pro/>
        <Colection/>
        <Proslider/>
        <Features/>
    </div>
)
}

export default Home