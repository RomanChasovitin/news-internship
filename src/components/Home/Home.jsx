import React from 'react'

// layout
import Grid from '@material-ui/core/Grid'

// ui
import Typography from '@material-ui/core/Typography'

// components
import { CountryPicker } from '../shared/CountryPicker'
import { NewsList } from '../shared/NewsList'

const mockedNews = [
  {
    source: {
      id: null,
      name: 'CNBC',
    },
    author: 'Arjun Kharpal',
    title: "China's renewed crypto crackdown wipes nearly $300 billion off the market as bitcoin slides - CNBC",
    description:
      "Since Friday, China has stepped up its efforts to rein in the country's cryptocurrency industry from mining bans to warnings to financial institutions.",
    url: 'https://www.cnbc.com/2021/06/22/china-crypto-crackdown-wipes-nearly-300-billion-off-market-btc-slides.html',
    urlToImage:
      'https://image.cnbcfm.com/api/v1/image/106885587-16214575182021-05-19t203912z_144465080_rc28jn9cpt2v_rtrmadp_0_crypto-currency-bitcoin.jpeg?v=1621457768',
    publishedAt: '2021-06-22T03:47:00Z',
    content:
      "GUANGZHOU, China China's renewed crackdown on the cryptocurrency industry has wiped off nearly $300 billion in value from the total digital currency market since Friday, when a major bitcoin mining h… [+1555 chars]",
  },
  {
    source: {
      id: null,
      name: 'KTLA Los Angeles',
    },
    author: 'KTLA Digital Staff',
    title: 'Police in standoff with driver of stolen vehicle in La Crescenta following pursuit - KTLA Los Angeles',
    description:
      'A man was taken into custody in La Crescenta Monday night, after stealing a vehicle and leading police on a pursuit through the San Fernando Valley, officials said. The lengthy chase dragged on even after the car lost all of its tires following a series of sp…',
    url: 'https://ktla.com/news/local-news/authorities-chasing-driver-in-stolen-vehicle-through-san-fernando-valley/',
    urlToImage: 'https://ktla.com/wp-content/uploads/sites/4/2021/06/snapshot-1-12.jpg?w=1280',
    publishedAt: '2021-06-22T01:42:01Z',
    content:
      'A man was taken into custody in La Crescenta Monday night, after stealing a vehicle and leading police on a pursuit through the San Fernando Valley, officials said.\r\nThe lengthy chase dragged on even… [+2103 chars]',
  },
  {
    source: {
      id: null,
      name: 'CNBC',
    },
    author: 'Yen Nee Lee',
    title: 'Asia needs to keep Covid under control before the Fed hikes rates, says economist - CNBC',
    description:
      "Controlling Covid-19 would put Asian economies in good stead to manage rate hikes by the U.S. Federal Reserve, said Steve Cochrane of Moody's Analytics.",
    url: 'https://www.cnbc.com/2021/06/22/moodys-analytics-on-covid-outbreaks-in-asia-fed-rate-hikes-in-2023.html',
    urlToImage:
      'https://image.cnbcfm.com/api/v1/image/106899976-1624250356283-gettyimages-1233554838-INDONESIA-JAKARTA-COVID-19-VACCINATION.jpeg?v=1624249947',
    publishedAt: '2021-06-22T00:45:00Z',
    content:
      'Asian countries have to tame the current waves of the coronavirus outbreak in order to get their economies ready for future rate hikes by the U.S. Federal Reserve, an economist said Monday.\r\nFed offi… [+2183 chars]',
  },
  {
    source: {
      id: null,
      name: 'Fox Business',
    },
    author: 'Associated Press',
    title: 'Powell says economy growing rapidly, inflation up ‘notably’ - Fox Business',
    description:
      'The economy is growing at a healthy clip, and that has accelerated inflation, Federal Reserve Chair Jerome Powell says in written testimony to be delivered Tuesday at a congressional oversight hearing.',
    url: 'https://www.foxbusiness.com/economy/powell-says-economy-growing-rapidly-inflation-up-notably',
    urlToImage:
      'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2019/10/0/0/AP19303675326220.jpg?ve=1&tl=1',
    publishedAt: '2021-06-22T00:31:46Z',
    content:
      'WASHINGTON — The economy is growing at a healthy clip, and that has accelerated inflation, Federal Reserve Chair Jerome Powell says in written testimony to be delivered Tuesday at a congressional ove… [+3012 chars]',
  },
  {
    source: {
      id: null,
      name: 'Fox Business',
    },
    author: 'Reuters',
    title: 'Regulators tell Biden U.S. financial system in good shape - White House - Fox Business',
    description:
      'Financial regulators assured President Joe Biden on Monday that the U.S. financial system is in good shape and that financial risks are being mitigated by strong liquidity in the banking system, the White House said.',
    url: 'https://www.foxbusiness.com/economy/regulators-tell-biden-u-s-financial-system-in-good-shape-white-house',
    urlToImage:
      'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/03/0/0/YELLEN-BIDEN-SPLIT-2-.jpg?ve=1&tl=1',
    publishedAt: '2021-06-22T00:28:38Z',
    content:
      'WASHINGTON – Financial regulators assured President Joe Biden on Monday that the U.S. financial system is in good shape and that financial risks are being mitigated by strong liquidity in the banking… [+2041 chars]',
  },
  {
    source: {
      id: null,
      name: "Investor's Business Daily",
    },
    author: "Investor's Business Daily",
    title:
      "Dow Jones Futures Rise After 586-Point Surge; Nasdaq Closes In On Record Highs; 5 Stocks To Buy And Watch - Investor's Business Daily",
    description:
      'Dow Jones futures were higher late Monday. The Nasdaq is on the cusp of record highs, as Dow leader Microsoft leads five stocks to buy and watch.',
    url: 'https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-nasdaq-nears-record-highs-top-stocks-to-buy-and-watch/',
    urlToImage: 'https://www.investors.com/wp-content/uploads/2018/07/stock-bull-19-shutter.jpg',
    publishedAt: '2021-06-22T00:01:00Z',
    content:
      'Dow Jones futures, along with S&amp;P 500 futures and Nasdaq 100 futures, were higher late Monday following the Dow Jones-led stock market rally. Dow Jones leader Microsoft, along with Alphabet, KKR,… [+5431 chars]',
  },
  {
    source: {
      id: 'ign',
      name: 'IGN',
    },
    author: 'Matthew Adler',
    title: 'The Best Gaming Headphones Deals For Prime Day 2021 - IGN - IGN',
    description: null,
    url: 'https://www.ign.com/articles/the-best-gaming-headphones-deals-for-prime-day-2021',
    urlToImage: 'https://assets-prd.ignimgs.com/2021/06/21/gamingheadphones-1624311228486.jpg?width=1280',
    publishedAt: '2021-06-21T23:48:28Z',
    content:
      "As you probably know by now, Amazon Prime Day 2021 has begun and we're already deep into the first day. There are thousands of deals to save on and there's no better time to grab a new pair of headph… [+1520 chars]",
  },
  {
    source: {
      id: null,
      name: 'CNBC',
    },
    author: 'Annika Kim Constantino',
    title: 'Victoria’s Secret reportedly borrows $500 million to finance split from Bath & Body Works - CNBC',
    description:
      "Lingerie retailer Victoria's Secret is taking out a $500 million loan to finance its split from Bath & Body Works, Bloomberg reported Monday.",
    url: 'https://www.cnbc.com/2021/06/21/victorias-secret-reportedly-borrows-500-million-to-finance-split-from-bath-body-works.html',
    urlToImage: 'https://image.cnbcfm.com/api/v1/image/104348578-GettyImages-492471125.jpg?v=1624315595',
    publishedAt: '2021-06-21T23:18:05Z',
    content:
      "Lingerie retailer Victoria's Secret is taking out a $500 million loan to finance its split from Bath &amp; Body Works, Bloomberg News reported Monday.\r\nThe loan is due 2028 and could pay interest tha… [+768 chars]",
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Charles Davis',
    title: '21 attorneys general oppose USPS plan to delay first-class mail - Business Insider',
    description:
      'Critics argue that the Postal Service is betraying its duty to provide quality service to rural communities.',
    url: 'https://www.businessinsider.com/21-attorneys-general-oppose-usps-plan-delay-first-class-mail-2021-6',
    urlToImage: 'https://i.insider.com/60d117a8db3f80001848d172?width=1200&format=jpeg',
    publishedAt: '2021-06-21T23:12:29Z',
    content:
      'Delaying first-class mail delivery by as many as two days would harm rural communities and potentially disenfranchise those who cast absentee ballots, 21 state attorneys general argued in a joint sta… [+2041 chars]',
  },
  {
    source: {
      id: 'associated-press',
      name: 'Associated Press',
    },
    author: 'Frank Bajak',
    title: 'Ransomware gangs get paid off as officials struggle for fix - The Associated Press',
    description:
      "BOSTON (AP) — If your business falls victim to ransomware  and you want simple advice on whether to pay the criminals, don't expect much help from the U.S.",
    url: 'https://apnews.com/article/joe-biden-europe-government-and-politics-technology-business-3b81e8116c42439566040a052617ad55',
    urlToImage: 'https://storage.googleapis.com/afs-prod/media/d132c85e483047628a17edaec3f7fdcd/3000.jpeg',
    publishedAt: '2021-06-21T23:01:37Z',
    content: null,
  },
  {
    source: {
      id: 'google-news',
      name: 'Google News',
    },
    author: null,
    title: 'States with low COVID-19 vaccine rates see cases rise as variants spread - CBS Evening News',
    description: null,
    url: 'https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9N2lFd3AtWFo4SknSAQA?oc=5',
    urlToImage: null,
    publishedAt: '2021-06-21T23:01:00Z',
    content: null,
  },
  {
    source: {
      id: 'google-news',
      name: 'Google News',
    },
    author: null,
    title: "Last week's market worries are no longer in play on Wall Street, Jim Cramer says - CNBC Television",
    description: null,
    url: 'https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VWlGaS11eXFTVDjSAQA?oc=5',
    urlToImage: null,
    publishedAt: '2021-06-21T22:59:46Z',
    content: null,
  },
  {
    source: {
      id: null,
      name: 'WMUR Manchester',
    },
    author: 'Kristen Carosa',
    title:
      'American Airlines cancels hundreds of flights, Manchester-Boston Regional monitoring situation - WMUR Manchester',
    description:
      'Staffing shortages combined with increased travel demand have prompted American Airlines to cancel hundreds of flights this summer.',
    url: 'https://www.wmur.com/article/american-airlines-cancellation-flights-manchester-nh/36793581',
    urlToImage:
      'https://kubrick.htvapps.com/vidthumb/cbb1faab-cd99-423a-9619-ec265c00935a/cbb1faab-cd99-423a-9619-ec265c00935a_image.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
    publishedAt: '2021-06-21T22:35:00Z',
    content:
      'MANCHESTER, N.H. —Staffing shortages combined with increased travel demand have prompted American Airlines to cancel hundreds of flights this summer.\r\nThe director of Manchester-Boston Regional Airpo… [+1623 chars]',
  },
]

const Home = () => (
  // const [selectedCountry, setSelectedCountry] = useState(null)

  // const onCountryPick = useCallBack(country => {
  //   setSelectedCountry(country)
  // })
  // selectedCountry={selectedCountry} onCountryPick={onCountryPick}
  <div>
    <Typography align="center" variant="h4" component="h2">
      Top news
    </Typography>
    <div align="center">
      <CountryPicker />
    </div>
    <Grid container spacing={3}>
      {mockedNews && mockedNews.map(news => <NewsList news={news} />)}
    </Grid>
  </div>
)

export { Home }
