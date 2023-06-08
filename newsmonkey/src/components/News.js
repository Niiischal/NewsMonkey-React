import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  articles =[
    {
      "source": {
        "id": null,
        "name": "Nikkei.com"
      },
      "author": "Staff Writer",
      "title": "Ukraine latest: Russia's Belgorod region under shelling, authorities tell residents - Nikkei Asia",
      "description": "Hundreds evacuated after dam in southern Ukraine is damaged, flooding war zone",
      "url": "https://asia.nikkei.com/Politics/Ukraine-war/Ukraine-war-Free-to-read/Ukraine-latest-Russia-s-Belgorod-region-under-shelling-authorities-tell-residents",
      "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%253A%252F%252Fs3-ap-northeast-1.amazonaws.com%252Fpsh-ex-ftnikkei-3937bb4%252Fimages%252F3%252F0%252F7%252F5%252F45995703-1-eng-GB%252F2023-06-05T132235Z_1317585576_RC21D1ASX2KF_RTRMADP_3_UKRAINE-CRISIS-FREEDOM-OF-RUSSIA-LEGION.JPG?width=1260&height=630&fit=cover&gravity=faces&source=nar-cms",
      "publishedAt": "2023-06-06T16:10:00Z",
      "content": "The war that began with Russia's invasion of Ukraine in February 2022 has passed a grim one-year milestone, with mounting military and civilian deaths.\r\nAs fighting rages in and around Bakhmut, Weste… [+41471 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "Vasilisa Stepanenko",
      "title": "Live updates: Collapse of Kakhovka dam in Ukraine triggers emergency - The Associated Press",
      "description": "The wall of a major dam in a part of southern Ukraine that Moscow controls collapsed Tuesday after a reported explosion, sending water gushing downriver and prompting dire warnings of ecological disaster as both sides in the war ordered residents to evacuate.",
      "url": "https://apnews.com/article/russia-ukraine-war-kakhovka-dam-flood-evacuation-eecc9952c2d9f500c38b0a873f69438c",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/d367ec6411444665a27828ba2f291842/3000.jpeg",
      "publishedAt": "2023-06-06T15:52:10Z",
      "content": "KHERSON, Ukraine (AP) A major dam in southern Ukraine collapsed Tuesday, triggering floods, endangering crops in the countrys breadbasket and threatening drinking water supplies as both sides in the … [+7855 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Cuba Gooding Jr settles rape lawsuit ahead of civil trial - BBC",
      "description": "The actor, who has faced multiple misconduct allegations, has said the encounter was consensual.",
      "url": "https://www.bbc.com/news/entertainment-arts-65825715",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/91AA/production/_130009273_gettyimages-1243935677.jpg",
      "publishedAt": "2023-06-06T15:13:47Z",
      "content": "Actor Cuba Gooding Jr has settled a lawsuit with an unnamed woman who accused him of raping her in a New York City hotel room in 2013.\r\nIt came as jury selection was about to begin in a federal civil… [+2113 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "Haley Ott",
      "title": "Prince Harry, in U.K. court for phone hacking trial, blasts \"utterly vile\" actions of British tabloids - CBS News",
      "description": "The son of Britain's King Charles III is the first senior royal to give testimony and face questioning in court since the 19th century.",
      "url": "https://www.cbsnews.com/news/prince-harry-in-court-testimony-uk-mirror-group-newspapers-phone-hacking/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/06/06/93b443b2-9215-4b2e-8c04-77567a1273b2/thumbnail/1200x630g1/aae2d7ec0b56d2bd0faf43d0f62bb837/phquenzler.jpg",
      "publishedAt": "2023-06-06T15:05:00Z",
      "content": "London — Prince Harry, the Duke of Sussex, appeared in a U.K. court Tuesday to testify as part of his lawsuit against Britain's Mirror Group Newspapers (MGN). The 38-year-old second son of Britain's … [+3929 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cleveland 19 News"
      },
      "author": null,
      "title": "Cleveland Browns players robbed at gunpoint downtown - Cleveland 19 News",
      "description": "According to the police report, six masked suspects jumped the players leaving a bar.",
      "url": "https://www.cleveland19.com/2023/06/06/cleveland-browns-players-robbed-gunpoint-downtown/",
      "urlToImage": "https://gray-woio-prod.cdn.arcpublishing.com/resizer/4w_acN_b4i2UMItP_Q92M4Hd8Qw=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/67YRXU2KRVDNXNTTOQNATD7ICM.jpg",
      "publishedAt": "2023-06-06T14:52:00Z",
      "content": "CLEVELAND, Ohio (WOIO) - Cleveland police are investigating after at least one Cleveland Browns player was robbed at gunpoint downtown.\r\nAccording to the police report, Browns player Greg Newsome II … [+1450 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "US intelligence officer turns whistleblower | UFOs, Alien vehicles & covert operations | WION - WION",
      "description": "It may sound like a conspiracy theory or a plot for a sci-fi movie a US intelligence officer who has turned whistleblower reveals that the American governmen...",
      "url": "https://www.youtube.com/watch?v=NGKqEASd_W8",
      "urlToImage": "https://i.ytimg.com/vi/NGKqEASd_W8/maxresdefault.jpg",
      "publishedAt": "2023-06-06T14:33:39Z",
      "content": null
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "US SEC sues Coinbase, one day after suing Binance - Reuters",
      "description": "The U.S. Securities and Exchange Commission on Tuesday sued Coinbase <a href=\"https://www.reuters.com/companies/COIN.O\" target=\"_blank\">(COIN.O)</a>, accusing the largest U.S. cryptocurrency exchange of operating illegally because it failed to first registere…",
      "url": "https://www.reuters.com/legal/us-sec-sues-coinbase-over-failure-register-2023-06-06/",
      "urlToImage": "https://www.reuters.com/resizer/rLm0ajWJoxfUXvxtkmcir9Y9CYA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TXJSDM4KBRO6PPQQQ3ZK7YB5FE.jpg",
      "publishedAt": "2023-06-06T14:21:00Z",
      "content": "NEW YORK, June 6 (Reuters) - The U.S. Securities and Exchange Commission on Tuesday sued Coinbase (COIN.O), accusing the largest U.S. cryptocurrency exchange of operating illegally because it failed … [+3595 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "Malcolm Owen",
      "title": "New 15-inch MacBook Air vs 13-inch MacBook Air M2: Compared - AppleInsider",
      "description": "Apple has introduced a new model of MacBook Air at WWDC 2023, with a 15-inch MacBook Air now a larger option for consumers. Here's how the specs differ from the existing 13-inch model.",
      "url": "https://appleinsider.com/inside/macbook-air/vs/new-15-inch-macbook-air-vs-13-inch-macbook-air-m2-compared",
      "urlToImage": "https://photos5.appleinsider.com/gallery/54634-110907-versus15in13inmacbookair-xl.jpg",
      "publishedAt": "2023-06-06T14:07:14Z",
      "content": "15-inch MacBook Air [left], 13-inch MacBook Air [right]\r\nApple has introduced a new model of MacBook Air at WWDC 2023, with a 15-inch MacBook Air now a larger option for consumers. Here's how the spe… [+12071 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Tom Warren",
      "title": "What's so “pro” about Apple's Vision Pro headset? - The Verge",
      "description": "Apple has a new augmented reality headset with the pro moniker. After a showing of mainly consumption apps, it will have to convince developers to make the case for the professional side.",
      "url": "https://www.theverge.com/2023/6/6/23750624/apple-vision-pro-headset-developers",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/Vk6pkvRyA2YSN7KgrcA8hx5Rzjw=/0x0:2560x1440/1200x628/filters:focal(1280x720:1281x721)/cdn.vox-cdn.com/uploads/chorus_asset/file/24705661/UO9oWqu.jpeg",
      "publishedAt": "2023-06-06T14:04:32Z",
      "content": "Apple needs developers to make the case for its new augmented reality headset.\r\nByTom Warren, a senior editor covering Microsoft, PC gaming, console, and tech. He founded WinRumors, a site dedicated … [+7483 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "Sara Moniuszko",
      "title": "New study finds AI can help improve breast cancer risk predictions - Yahoo News",
      "description": "A new study is showing yet another way artificial intelligence is entering the medical field​. This time, researchers found AI algorithms improved on existing practices for predicting breast cancer risk.",
      "url": "https://www.cbsnews.com/news/ai-can-help-improve-breast-cancer-risk-predictions-study-finds/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/06/06/1cb70bff-8b1f-4ba2-af53-7229cb8cfa96/thumbnail/1200x630/3f00484f6a9e49b203486425ce2bed75/gettyimages-1128870494.jpg",
      "publishedAt": "2023-06-06T14:02:25Z",
      "content": "A new study is showing yet another way artificial intelligence is entering the medical field — and potentially improving existing practices for predicting breast cancer risk. \r\nThe study, which was p… [+1874 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Lillian Rizzo",
      "title": "PGA Tour agrees to merge with Saudi-backed rival LIV Golf - CNBC",
      "description": "The PGA Tour is merging with Saudi-backed rival LIV Golf, following months of tensions and mounting lawsuits between the competitors.",
      "url": "https://www.cnbc.com/2023/06/06/pga-tour-agrees-to-merge-with-saudi-backed-rival-liv-golf.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107096217-1662141971945-phil.jpg?v=1686065607&w=1920&h=1080",
      "publishedAt": "2023-06-06T13:55:48Z",
      "content": "The PGA Tour has agreed to merge with Saudi-backed rival LIV Golf in a deal that would see the competitors squash pending litigation and move forward as a larger golf enterprise.\r\nThe two entities si… [+12076 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "SciTechDaily"
      },
      "author": null,
      "title": "Power of Exercise: Countering High Genetic Risk of Type 2 Diabetes - SciTechDaily",
      "description": "Can physical activity ‘fight off’ risk of type 2 diabetes? A University of Sydney study suggests high levels of physical activity can significantly lower the risk of developing type 2 diabetes, even for those with a high genetic risk. Over an hour of daily mo…",
      "url": "https://scitechdaily.com/?p=284104",
      "urlToImage": "https://scitechdaily.com/images/Health-Fitness-Painting.jpg",
      "publishedAt": "2023-06-06T13:42:18Z",
      "content": "ByUniversity of SydneyJune 6, 2023\r\nA new study has found a strong correlation between high levels of physical activity and a decreased risk of type 2 diabetes, even among individuals with a high gen… [+5754 chars]"
    },
    {
      "source": {
        "id": "ign",
        "name": "IGN"
      },
      "author": "Ryan Leston",
      "title": "Spider-Man: Across the Spider-Verse Almost Had 'Huge' Live Action Sequences - IGN",
      "description": "Spider-Man: Across the Spider-Verse, despite being a follow-up to one of the most beloved animated films in recent memory, almost included \"huge live action sequences\".",
      "url": "https://www.ign.com/articles/spider-man-across-the-spider-verse-almost-had-huge-live-action-sequences",
      "urlToImage": "https://assets-prd.ignimgs.com/2023/06/01/acrossthespiderverse-endingexplained-blogroll-1685655849868.jpg?width=1280",
      "publishedAt": "2023-06-06T13:36:02Z",
      "content": "Warning: This article features spoilers for elements of Spider-Man: Across the Spider-Verse.\r\nSpider-Man: Across the Spider-Verse, despite being a follow-up to one of the most beloved animated films … [+2076 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Russian military arsenal in Ukraine war | Hypersonic missiles to advanced tanks | Russia-Ukraine war - WION",
      "description": null,
      "url": "https://www.youtube.com/watch?v=xdnVLGziMUE",
      "urlToImage": null,
      "publishedAt": "2023-06-06T13:34:38Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Have the Heat found the blueprint to defend the Nuggets? | Get Up - ESPN",
      "description": "Have the Heat found the blueprint to defend the Nuggets? 🤔 | Get UpThe Get Up crew discuss:0:00 Michael Malone's comments on Nikola Jokic1:10 Have the Heat ...",
      "url": "https://www.youtube.com/watch?v=WWyWoRB38zM",
      "urlToImage": "https://i.ytimg.com/vi/WWyWoRB38zM/maxresdefault.jpg",
      "publishedAt": "2023-06-06T13:30:13Z",
      "content": null
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Ivan Mehta",
      "title": "Here are the iOS 17 features Apple didn’t announce on stage - TechCrunch",
      "description": "Apple’s Vision Pro headset dominated the headlines at the Worldwide Developer Conference (WWDC) event on Monday. But Apple is also going to launch a major update to iOS later this year. The upcoming iOS 17 update will introduce many “nice-to-have” features li…",
      "url": "https://techcrunch.com/2023/06/06/here-are-the-ios-17-features-apple-didnt-announce-on-stage/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/06/Screenshot-2023-06-06-at-5.30.25-PM.jpg?resize=1200,611",
      "publishedAt": "2023-06-06T13:30:00Z",
      "content": "Apple’s Vision Pro headset dominated the headlines at the Worldwide Developer Conference (WWDC) event on Monday. But Apple is also going to launch a major update to iOS later this year. The upcoming … [+4893 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Maeve Reston, Hannah Knowles",
      "title": "In New Hampshire, Chris Christie formally kicking off presidential bid - The Washington Post",
      "description": "More than seven years after he ended his first campaign for president and swiftly endorsed Trump, Christie returns as a long-shot candidate in a growing Republican field.",
      "url": "https://www.washingtonpost.com/elections/2023/06/06/chris-christie-running-gop-president-2024/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/E47AXNKJTFD2236HCAFTB72ZXU.JPG&w=1440",
      "publishedAt": "2023-06-06T13:00:00Z",
      "content": "Comment on this story\r\nComment\r\nFormer New Jersey governor Chris Christie will announce his presidential campaign in New Hampshire on Tuesday evening positioning himself as a bare-knuckled brawler be… [+7255 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Pete Muntean,Elizabeth Wolfe",
      "title": "Hypoxia being investigated as potential factor in deadly plane crash, source says - CNN",
      "description": "The recovery of wreckage from a private plane that crashed Sunday in Virginia, killing all four people onboard, after its pilot became unresponsive is expected to begin Tuesday.",
      "url": "https://www.cnn.com/2023/06/06/us/virginia-unresponsive-plane-crash-investigation-tuesday/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230606105503-plane-crash-scene-virginia-0604.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-06-06T12:55:00Z",
      "content": "The recovery of wreckage from a private plane that crashed Sunday in Virginia, killing all four people onboard, after its pilot became unresponsive is expected to begin Tuesday.\r\nInvestigators face c… [+7000 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Sheena Vasani",
      "title": "Amazon's Fire TV Stick 4K Max is on sale for just $34.99 - The Verge",
      "description": "Amazon’s Fire TV Stick 4K Max has returned to its best price yet. We also found deals on the Wyze Cam Floodlight Pro, Google’s Pixel Buds Pro, and the 2021 version of Belkin’s BoostCharge Pro 3-in-1 MagSafe charging stand.",
      "url": "https://www.theverge.com/2023/6/6/23749214/amazon-fire-tv-stick-google-pixel-buds-pro-wyze-cam-floodlight-pro-deal-sale",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/fvaU24yg4LC8MW3QCZd8qWYT2n8=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22909969/DSCF5782.jpg",
      "publishedAt": "2023-06-06T12:44:31Z",
      "content": "Amazons Fire TV Stick 4K Max is on sale for just $34.99\r\nAmazons Fire TV Stick 4K Max is on sale for just $34.99\r\n / Plus, the Wyze Cam Floodlight Pro is on sale for the first time, while you can als… [+5502 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WPLG Local 10"
      },
      "author": "The Associated Press",
      "title": "Mother fatally shot by neighbor after dispute over playing children, sheriff says - WPLG Local 10",
      "description": "A Florida mother was fatally shot through the front door of her neighbor’s home while her 9-year-old son stood next to her, a violent culmination of what police said was a 2½-year feud.",
      "url": "https://www.local10.com/news/local/2023/06/06/mother-fatally-shot-by-neighbor-after-dispute-over-playing-children-sheriff-says/",
      "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/LA3E3PNNLJA5PASCKFFOGAHZZU.jpg?_a=ATCqVhC0",
      "publishedAt": "2023-06-06T12:10:16Z",
      "content": "OCALA, Fla. A Florida mother was fatally shot through the front door of her neighbors home while her 9-year-old son stood next to her, a violent culmination of what police said was a 2½-year feud.\r\nA… [+3165 chars]"
    }
  ]
  constructor(){
    super()
    this.state = {
      articles: this.articles,
      loading: false
    }

  }

  async componentDidMount(){
    let url= "https://newsapi.org/v2/top-headlines?country=us&apiKey=90c71cea048a4c9f9714415dd37eb9cc"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey- Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                    <NewsItems title={element.title?.slice(0,63)} description={element.description?.slice(0,78)}  imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
        })}

        </div>
      </div>
    )
  }
}

export default News
