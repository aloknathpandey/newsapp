import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
    articles = [
        {
            "source": { "id": null, "name": "BBC News" },
            "author": null,
            "title": "Trump 'resorted to crimes' to overturn 2020 result - prosecutors - BBC.com",
            "description": "A new filing presents the clearest view yet of how prosecutors would present their case against the former president at trial.",
            "url": "https://www.bbc.com/news/articles/c93pdlg4dlno",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/b70a/live/afc26ac0-8122-11ef-822c-a50726bfda2e.jpg",
            "publishedAt": "2024-10-03T09:28:22Z",
            "content": "Donald Trump \"resorted to crimes\" while trying to overturn his 2020 election defeat, and should not escape charges, prosecutors say.\r\nA new court filing challenges Trump's claim that he should avoid … [+4882 chars]"
        },
        {
            "source": { "id": "nbc-news", "name": "NBC News" },
            "author": "Nnamdi Egwuonwu",
            "title": "Liz Cheney hits the trail for Harris in the birthplace of the Republican Party - NBC News",
            "description": "Liz Cheney will join Vice President Kamala Harris Thursday at a campaign event in Ripon, Wisconsin, a city commonly recognized as the birthplace of the Republican Party.",
            "url": "https://www.nbcnews.com/politics/2024-election/liz-cheney-hits-trail-kamala-harris-republican-party-wisconsin-rcna173713",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-10/241002-liz-cheney-mn-1555-451541.jpg",
            "publishedAt": "2024-10-03T09:00:00Z",
            "content": "Liz Cheney, a former Republican congresswoman and daughter of a former Republican vice president, will join Vice President Kamala Harris on Thursday at a campaign event in Ripon, Wisconsin, the city … [+3849 chars]"
        },
        {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Doyinsola Oladipo",
            "title": "Ship queue grows at US ports as dockworker strike enters third day - Reuters",
            "description": "The port owners, under pressure from the White House to hike their pay offer to land a deal, signaled they were open to new talks.",
            "url": "https://www.reuters.com/world/us/ship-queue-grows-us-ports-dockworker-strike-enters-third-day-2024-10-03/",
            "urlToImage": "https://www.reuters.com/resizer/v2/XC272WPZM5PDHF56QDUPUY5BA4.jpg?auth=054580907751ef0b29819cc4e11d314babc4edc88a536459fd71bb56a1c805bf&height=1005&width=1920&quality=80&smart=true",
            "publishedAt": "2024-10-03T08:04:16Z",
            "content": null
        },
        {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Reuters",
            "title": "Russian man jailed for burning Koran charged with treason - Reuters",
            "description": "A Russian man jailed in February for burning the Koran has been charged with treason by prosecutors who accuse him of passing video footage of military movements to Ukraine.",
            "url": "https://www.reuters.com/world/europe/russian-man-jailed-burning-koran-charged-with-treason-2024-10-03/",
            "urlToImage": "https://www.reuters.com/resizer/v2/EJQJ4JFXFNPOHAWBZNKX5QAC4Y.jpg?auth=ab6761350a456f9b40a78499d822a80b41044d240588a285e88dff6d1de26c0c&height=1005&width=1920&quality=80&smart=true",
            "publishedAt": "2024-10-03T07:35:32Z",
            "content": null
        },
        {
            "source": { "id": "techcrunch", "name": "TechCrunch" },
            "author": "Brian Heater",
            "title": "Oura Ring 4 debuts slimmer design, additional sizes, and improved sensing starting at $349 - TechCrunch",
            "description": "The Oura Ring 4 is up for preorder starting Thursday and starts shipping October 15. Users get one month of membership to its software offering for free.",
            "url": "https://techcrunch.com/2024/10/03/oura-ring-4-debuts-slimmer-design-additional-sizes-and-improved-sensing-starting-at-349/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/10/05-Oura-Ring-Lifestyle.jpg?resize=1200,775",
            "publishedAt": "2024-10-03T07:01:00Z",
            "content": "Oura on Thursday unveiled the fourth generation of its popular smart ring. The Oura Ring 4 arrives just under three years after its predecessors debut. Despite the gap, the new wearable largely refin… [+3687 chars]"
        },
        {
            "source": { "id": null, "name": "Fox Business" },
            "author": "Christina Shaw",
            "title": "New Jersey couple blocked from suing Uber after serious car accident - Fox Business",
            "description": "A New Jersey couple is being denied the ability to sue rideshare company Uber following a life altering accident citing Uber's terms of service agreement.",
            "url": "https://www.foxbusiness.com/lifestyle/new-jersey-couple-blocked-from-suing-uber-after-serious-car-accident",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/06/0/0/uber.jpg?ve=1&tl=1",
            "publishedAt": "2024-10-03T06:41:00Z",
            "content": "A couple in New Jersey who suffered serious injuries after being involved in an accident while using Uber is being told they cannot sue the popular rideshare service.\r\nThe couple, Georgia and John Mc… [+2976 chars]"
        },
        {
            "source": { "id": null, "name": "BBC News" },
            "author": null,
            "title": "Deadly Gaza school strike targeted one Hamas figure, BBC told - BBC.com",
            "description": "Thirteen children and a pregnant woman were among the victims of the air strike on 21 September.",
            "url": "https://www.bbc.com/news/articles/c3dv18l03n1o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f7a4/live/d84972b0-8017-11ef-83dd-fbf1b9732cf0.jpg",
            "publishedAt": "2024-10-03T04:57:23Z",
            "content": "Amal says she and other children in her shelter wake up and go to sleep terrified\r\nWarning: This story contains details which some people may find upsetting\r\nAn Israeli air strike that killed multipl… [+3399 chars]"
        },
        {
            "source": { "id": null, "name": "New York Post" },
            "author": "Jon Heyman",
            "title": "Mets need to find more magic yet again with season on the brink - New York Post ",
            "description": "The Mets authored some very big wins throughout a mostly magical year. But now they finally have a game that can only be called a must-win.",
            "url": "https://nypost.com/2024/10/03/sports/mets-need-to-find-more-magic-yet-again-with-season-on-the-brink/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/10/newspress-collage-pj70v0u1b-1727929424525.jpg?quality=75&strip=all&1727915075&w=1024",
            "publishedAt": "2024-10-03T04:55:00Z",
            "content": "MILWAUKEE These Mets seem to come through when they absolutely have to, and once again, they are at that scary point. \r\nThe Mets authored some very big wins throughout a mostly magical year. But now … [+5357 chars]"
        },
        {
            "source": { "id": null, "name": "The San Diego Union-Tribune" },
            "author": "Kevin Acee",
            "title": "Padres sweep Braves from wild-card series, advance to face Dodgers - The San Diego Union-Tribune",
            "description": "Club loses Joe Musgrove to elbow tightness, holds on for tense 5-4 win over visiting Atlanta",
            "url": "http://www.sandiegouniontribune.com/2024/10/02/padres-sweep-braves-from-wild-card-series-advance-to-face-dodgers/",
            "urlToImage": "https://www.sandiegouniontribune.com/wp-content/uploads/2024/10/SUT-L-padres-1003-037.jpg?w=1024&h=728",
            "publishedAt": "2024-10-03T04:52:30Z",
            "content": "The Padres kept going, so they are still going.\r\n“A little up and down,” Fernando Tatis Jr. said. “But we’re here now. It’s all that matters. And we’re gonna keep showing up.”\r\nIn ways both exhilarat… [+5790 chars]"
        },
        {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Timour Azhari, Ari Rabinovitch",
            "title": "Israel strikes heart of Beirut, killing six - Reuters",
            "description": "Israel bombed Beirut early on Thursday, killing at least six people, after its forces suffered their deadliest day on the Lebanese front in a year of clashes with Iran-backed Hezbollah.",
            "url": "https://www.reuters.com/world/middle-east/israel-strikes-heart-beirut-killing-six-2024-10-02/",
            "urlToImage": "https://www.reuters.com/resizer/v2/FE4KDFKAO5JQNOC4EPFL3Z6UJU.jpg?auth=98202630ed7c239fc459e1d30ff01977c744ab949148bdd0a1ebb5d80d7ed66c&height=1005&width=1920&quality=80&smart=true",
            "publishedAt": "2024-10-03T04:37:00Z",
            "content": "BEIRUT/JERUSALEM, Oct 3 (Reuters) - Israel bombed Beirut early on Thursday, killing at least six people, after its forces suffered their deadliest day on the Lebanese front in a year of clashes with … [+6384 chars]"
        },
        {
            "source": { "id": "the-washington-post", "name": "The Washington Post" },
            "author": "Emily Wax-Thibodeaux",
            "title": "Desperate to find Grandma, a family hit the road with bikes and chain saws - The Washington Post",
            "description": "After Helene tore through North Carolina, Beth Holmes couldn’t get in touch with her grandmother. So she and her family set off on an expedition to find her.",
            "url": "https://www.washingtonpost.com/weather/2024/10/02/helene-north-carolina-grandma-search/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RVLC3IZ7QVFP4UBELERGZDU4PU.JPG&w=1440",
            "publishedAt": "2024-10-03T04:34:26Z",
            "content": "The Holmes family began preparing for Helene as soon as meteorologists started warning the storm was headed their way.\r\nBeth Holmes, a real estate lawyer in the small North Carolina mountain town of … [+6938 chars]"
        },
        {
            "source": { "id": null, "name": "Vulture" },
            "author": "Bethy Squires",
            "title": "Were Jax Taylor and Brittany Cartwright Ever Legally Married? - Vulture",
            "description": "In new legal filings, Jax Taylor claims he and Brittany Cartwright were never legally married. Now a rep is saying Taylor ‘made errors’ filling out the forms.",
            "url": "http://www.vulture.com/article/jax-taylor-brittany-cartwright-never-married-custody.html",
            "urlToImage": "https://pyxis.nymag.com/v1/imgs/ec4/bda/4b73fb901e24b8de7d730d25d1bf3a655e-jax-brittany-divorce.1x.rsocial.w1200.jpg",
            "publishedAt": "2024-10-03T04:33:00Z",
            "content": "Once again, we have all been Jaxed. Jax Taylors divorce filing appeared to claim he and Brittany Cartwright were never legally married. Now reps say Taylor made a mistake somewhere on the forms. But … [+1445 chars]"
        },
        {
            "source": { "id": "abc-news", "name": "ABC News" },
            "author": "MARI YAMAGUCHI Associated Press",
            "title": "An American bomb from WWII explodes at a Japanese airport, leaving a crater on the taxiway - ABC News",
            "description": "A U.S. bomb from World War II has exploded at a Japanese airport, causing a large crater in a taxiway and the cancellation of more than 80 flights",
            "url": "https://abcnews.go.com/International/wireStory/us-bomb-world-war-ii-explodes-japanese-airport-114419077",
            "urlToImage": "https://i.abcnewsfe.com/a/07bc73e6-c95c-46ea-96dc-0a6869cdf5f0/wirestory_bf561e4c71f644267d86d8589b6999d4_16x9.jpg?w=1600",
            "publishedAt": "2024-10-03T04:13:03Z",
            "content": "TOKYO -- An unexploded U.S. bomb from World War II that had been buried at a Japanese airport exploded Wednesday, causing a large crater in a taxiway and the cancellation of more than 80 flights, Jap… [+1313 chars]"
        },
        {
            "source": { "id": "cnn", "name": "CNN" },
            "author": null,
            "title": "Disgraced ex-minister gets jail time in rare corruption case for squeaky clean Singapore - CNN",
            "description": "A Singapore court sentenced a former minister to 12 months in prison on Thursday for obstructing justice and receiving more than $300,000 worth of gifts, in the first jailing of an ex-cabinet member in a city-state known for clean governance.",
            "url": "https://www.cnn.com/2024/10/02/business/singapore-iswaran-sentencing-corruption-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-10-03t014103z-1448351298-rc2pcaab85ea-rtrmadp-3-singapore-politics.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-10-03T04:10:00Z",
            "content": "A Singapore court sentenced a former minister to 12 months in prison on Thursday for obstructing justice and receiving more than $300,000 worth of gifts, in the first jailing of an ex-cabinet member … [+1710 chars]"
        },
        {
            "source": { "id": "fox-news", "name": "Fox News" },
            "author": "Sarah Rumpf-Whitten",
            "title": "Bird flu kills 47 tigers, 3 lions and a panther in Vietnam zoos, state media reports - Fox News",
            "description": "Forty-seven tigers, three lions and a panther have died in zoos in south Vietnam due to the H5N1 bird flu virus, state media reported on Wednesday.",
            "url": "https://www.foxnews.com/health/bird-flu-kills-47-tigers-3-lions-panther-vietnam-zoos-state-media-reports",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/10/tiger.jpg",
            "publishedAt": "2024-10-03T04:04:00Z",
            "content": "Forty-seven tigers, three lions and a panther have died in zoos in south Vietnam due to the bird flu, state media said.\r\nAccording to the Vietnam News Agency (VNA), the mammals died at the private My… [+1330 chars]"
        },
        {
            "source": { "id": "associated-press", "name": "Associated Press" },
            "author": "SIMINA MISTREANU",
            "title": "Typhoon Krathon shuts parts of Taiwan for a third day as it nears the island with extreme rains - The Associated Press",
            "description": "A slow-moving typhoon approaching Taiwan led to school and office closures for a third consecutive day, with authorities asking people to stay indoors. Typhoon Krathon was centered about 19 miles southwest of the major port city of Kaohsiung on Thursday morni…",
            "url": "https://apnews.com/article/taiwan-typhoon-krathon-rain-e4acaaf0fbf22779c1f0124ee2f2712b",
            "urlToImage": "https://dims.apnews.com/dims4/default/548c5b4/2147483647/strip/true/crop/6000x3375+0+256/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F3f%2F87%2F2265f2e1a761b0157f1c16f4a241%2F6b521f53c0cd44f582ddbf411be09ca0",
            "publishedAt": "2024-10-03T04:02:00Z",
            "content": "KAOHSIUNG, Taiwan (AP) A slow-moving typhoon approaching Taiwan led to school and office closures for a third consecutive day Thursday, with authorities asking people to stay indoors.\r\nTyphoon Kratho… [+2409 chars]"
        },
        {
            "source": { "id": null, "name": "NBCSports.com" },
            "author": "Mike Florio",
            "title": "Raiders might end up paying some of Davante Adams’s salary to facilitate trade - NBC Sports",
            "description": "With Raiders receiver Davante Adams due to make $983,333 in salary each week plus $30,000 for each game in which he's on the active roster, his remaining compensation could create a cap issue for a team that trades for him.",
            "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/raiders-might-end-up-paying-some-of-davante-adamss-salary-to-facilitate-trade",
            "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/580d1c2/2147483647/strip/true/crop/6945x3907+0+362/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fb8%2Fba%2F6af69815479e81cd1f882e5f1fb4%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2175573585",
            "publishedAt": "2024-10-03T03:38:05Z",
            "content": "With Raiders receiver Davante Adams due to make $983,333 in salary each week plus $30,000 for each game in which hes on the active roster, his remaining compensation could create a cap issue for a te… [+879 chars]"
        },
        {
            "source": { "id": null, "name": "Sports Illustrated" },
            "author": "Karl Rasmussen",
            "title": "Alex Bregman Sends Short Message to Fans After Potential Final Game With Astros - Sports Illustrated",
            "description": "The longtime Houston third baseman  is set to hit free agency this offseason.",
            "url": "https://www.si.com/mlb/alex-bregman-message-fans-after-potential-final-game-astros",
            "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_5196,h_2922,x_0,y_443/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01j97zrp0gvfbk07txev.jpg",
            "publishedAt": "2024-10-03T03:14:46Z",
            "content": "There's a real possibility star third baseman Alex Bregman has played his last game for the Houston Astros. He appeared to acknowledge as much on Wednesday following the team's exit from the postseas… [+1603 chars]"
        },
        {
            "source": { "id": null, "name": "mlive.com" },
            "author": "Mark Torregrossa | mtorregr@mlive.com",
            "title": "Geomagnetic Storm Watch issued; Prepare for northern lights over Michigan, southern Midwest - MLive.com",
            "description": "The Space Weather Prediction center has targeted two time periods that should have northern lights.",
            "url": "https://www.mlive.com/weather/2024/10/geomagnetic-storm-watch-issued-prepare-for-northern-lights-over-michigan-southern-midwest.html",
            "urlToImage": "https://www.mlive.com/resizer/v2/FBOSJVO4KNH4JOKXXGDIN2LNMU.png?auth=e3b3258454c42fc4079975ee0201300e988dab2e1c9c4ed95cdf9a15c8c9d8ea&width=1280&quality=90",
            "publishedAt": "2024-10-03T02:41:00Z",
            "content": "A strong solar flare is likely going to blow enough solar energy into our atmosphere to produce widespread northern lights in the next few days.\r\nThe NOAAs Space Weather Prediction Center (SWPC) has … [+2308 chars]"
        },
        {
            "source": { "id": null, "name": "Page Six" },
            "author": "Sabrina Picou",
            "title": "Britney Spears’ on-again, off-again boyfriend Paul Soliz’s wife files for divorce after 8 years of marriage - Page Six",
            "description": "The pop star’s ex is currently involved in divorce proceedings with his estranged wife, Nicole Mancilla.",
            "url": "https://pagesix.com/2024/10/02/celebrity-news/britney-spears-on-again-off-again-boyfriend-paul-solizs-wife-files-for-divorce/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2024/10/90922992.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2024-10-03T02:32:00Z",
            "content": "It’s officially over for Paul Soliz and his estranged wife Nicole Mancilla!\r\nMancilla filed for divorce from Britney Spears’ former housekeeper-turned-boyfriend in the Superior Court of California on… [+2984 chars]"
        }


    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey Top Headlines</h2>
                <div className="row mt-2 mb-2">
                    {this.state.articles.map((ele) => {
                       return <div className="col-md-4">
                            <NewsItem title={ele.title.slice(0,40)} description={ele.description.slice(0,90)} imageUrl={ele.urlToImage}
                                url={ele.url} />
                        </div>

                    })}
                </div>
            </div>
        )
    }
}

export default News