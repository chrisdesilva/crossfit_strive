import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { FaStar } from "react-icons/fa"

const Reviews = props => {
  // const [reviews, setReviews] = useState([])

  // useEffect(() => {
  //   fetch(
  //     `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.GATSBY_GOOGLE_PLACES_API}&place_id=ChIJt72IgyGaRIYRXtrxZoDnDXc`
  //   )
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log(result)
  //       // setReviews(result.result.reviews)
  //     })
  // }, [])

  const reviews = [
    {
      author_name: "joshua bingaman",
      rating: 5,
      text:
        "Best coaches, members, and workouts I’ve ever experienced. STRIVE seriously changed my fitness forever and I can’t imagine my life without it. Long live STRIVE!",
    },
    {
      author_name: "Bridget Borja",
      rating: 5,
      text:
        "Great place, not only do you get into the best shape of your life, but you become part of a community, A FAMILY. I have made the most sincere connections in this gym. The goals set/accomplished here are far more than what you could ever find in any work-our session! Come see what MY family is about!",
    },
    {
      author_name: "Sara Waldmann",
      rating: 5,
      text:
        "Let me preface this by saying that I would have never thought that I would, at any point, be a member of a Crossfit gym. I've never felt more welcome and supported and after 9 months of being a member, I can't imagine being anywhere else.",
    },
    {
      author_name: "Jason Fisher",
      rating: 5,
      text:
        "I spent years at another local gym. Made progress but wasn't never obtaining my fitness goals. CrossFit has literally changed my life for the better. Within months of doing CrossFit I am closer to my fitness goals than I ever have been. What I also love about it above all is the family type atmosphere at CrossFit Strive. Everyone lifts one another up and is so encouraging. The coaching is top notch. No matter where you are in your current fitness level you can participate in the workouts. If you want a better version of you and willing to put in the work start doing CrossFit now!!!",
    },
    {
      author_name: "Aaron Goodwin",
      rating: 5,
      text:
        "My brother lives in Bastrop so I drop in here when I'm in town visiting. Always a great workout. Athan and the gang are super helpful and welcoming. Great workouts and great people.",
    },
  ]

  return (
    <div className="reviews">
      <h2
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease-in-out"
      >
        Reviews
      </h2>
      <div
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease-in-out"
        className="reviews__bestOf"
      >
        <div>
          <Img fluid={props.best2018} alt="Best of Bastrop 2018 award" />
        </div>
        <div>
          <Img fluid={props.best2019} alt="Best of Bastrop 2019 award" />
        </div>
      </div>
      <div
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease-in-out"
        className="reviews__cards"
      >
        {reviews &&
          reviews.map((review, i) => {
            let fullName = review.author_name.split(" ")
            return (
              <div
                key={review.author_name}
                className={`reviews__card card${i}`}
              >
                {reviews.map(rating => (
                  <span>
                    <FaStar />
                  </span>
                ))}
                <p>{review.text}</p>
                <h3>-{fullName[0]}</h3>
              </div>
            )
          })}
      </div>
      {/*<div data-sal="fade" data-sal-duration="1000" data-sal-easing="ease-in-out" className="reviews__cards">
      <iframe className="reviews__iframe" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffish1200%2Fposts%2F10217125698044336&width=500" width="500" height="256" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>  
      <iframe className="reviews__iframe" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjoshua.bingaman%2Fposts%2F10217120466104389&width=500" width="500" height="161" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      <iframe className="reviews__iframe" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftimothy.sharlow.3%2Fposts%2F1186811554794133%3A0&width=500" width="500" height="354" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>   
      <iframe className="reviews__iframe" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fchelsea.l.forrest.3%2Fposts%2F10156382843612787&width=500" width="500" height="199" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      <iframe className="reviews__iframe" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmarroquintorres27%2Fposts%2F10157477835996763&width=500" width="500" height="180" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>  
      <iframe className="reviews__iframe" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fveeguns1%2Fposts%2F10156052718412838%3A0&width=500" width="500" height="392" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>  
  </div>*/}
    </div>
  )
}

export default Reviews
