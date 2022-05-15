import React, { useState } from 'react'
import fire from '../assets/fire.png'
import Rate from './cmc-table/Rate'

import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'
import TrendingCard from './TrendingCard'
import ReactSwitch from 'react-switch'

const Trending = () => {
  const [checked, setChecked] = useState(false)
  const styles = {
    trendingWrapper: `mx-auto max-w-screen-2xl`,
    h1: `text-3xl text-white`,
    flexCenter: `flex items-center,`,
  }

  const trendingData = [
    {
      number: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      icon: btc,
      isIncrement: true,
      rate: '+2.22%',
    },
    {
      number: 2,
      symbol: 'USDT',
      name: 'Tether',
      icon: usdt,
      isIncrement: false,
      rate: '-0.22%',
    },
    {
      number: 3,
      name: 'Bitcoin',
      symbol: 'BTC',
      icon: btc,
      isIncrement: true,
      rate: '+2.22%',
    },
  ]

  return (
    <div className="text-white">
      <div className={styles.trendingWrapper}>
        <div className="flex justify-between">
          <h1 className={styles.h1}>
            Todays Cryptocurrency Prices by Market Cap
          </h1>
          <div className="flex">
            <p className="text-gray-400">Highlights &nbsp;</p>
            <ReactSwitch
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </div>
        </div>
        <br />
        <div className="flex ">
          <p className="text-gray-400">
            The global crypto market cap is $1.74T, a &nbsp;
          </p>
          <span>
            <Rate isIncrement={true} rate="0.53%" />
          </span>
          <p>
            &nbsp; decrease over the last day.&nbsp;&nbsp;
            <span className="underline">Read More</span>
          </p>
        </div>
        <br />
        <div className={styles.flexCenter}>
          <TrendingCard
            title="Trending"
            icon={fire}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Biggest Gainers"
            icon={gainers}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Recently added"
            icon={recent}
            trendingData={trendingData}
          />
        </div>
      </div>
    </div>
  )
}

export default Trending
