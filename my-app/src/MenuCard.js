import React, {useState, useEffect} from "react";
import MenuPage from "./MenuPage";

function MenuCard(props) {
    const [isShown, setIsShown] = useState(true)
    const handleClick = event => {
      setIsShown(isShown => !isShown);
      console.log(isShown)
    };

    const [dataArray, setDataArray] = React.useState([]) 
 
  const fetchReviews = async ()=> {
    try {
      const response = await fetch("http://localhost:9293/admin/reviews")
      const data = await response.json()
      console.log(data)
      setDataArray(data)
    } catch (error){
      console.log(error)
    }
  }
 
  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviewsByMenuCard = async ()=> {
    try {
      const response = await fetch("http://localhost:9293/admin/reviews/:id")
      const data = await response.json()
      console.log(data)
      setDataArray(data)
    } catch (error){
      console.log(error)
    }
  }
 
  useEffect(() => {
    fetchReviewsByMenuCard()
  }, [])



  console.log(dataArray)
  const listItems = dataArray.map((review) =>
   <ul>
      <li>{review.testimonial}. I still give it a {review.score} star review.</li>      
   </ul>
  ); 
  
  const averageReview = dataArray.map((review) =>
  [review.score]
  );

    const {meal} = props

    // let ReviewButton = <></>

    // if (isLoggedIn) {
    //   ReviewButton = <button>Show Reviews</button>;
    // } else {
    //   AuthButton = <button>Hide Reviews</button>;
    // }

    return (
<>
  <div class="menu">
    <div id="mc1" class="mealcard">
      <span class="cardimg">
          <img src="/assets/squirtle.jpg"/>
      </span>
      <h3>
          BREAKFAST MENU
      </h3>
      <h2>
          SQUIRTLE STEW
      </h2>
      <div class="divider"></div>
        <div class="review-stars">
          {averageReview}
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-blank.jpg"/> 
        </div>
        <div class="break"></div>
        <div className="card">
        {isShown ? (
            <button onClick={handleClick} className="btn">Show Reviews</button>
          ) : (
            (
             <button onClick={handleClick} className="btn">Hide Reviews</button>
            )
          )}
          {isShown ? (
            ""
          ) : (
            (
              <div className="testimonials">{listItems}</div>
            )
          )}
          
          
        </div>
      
    </div> 



    <div id="mc2" class="mealcard">
      <span class="cardimg">
          <img src="/assets/charmander.jpg"/>
      </span>
      <h3>
          LUNCH MENU
      </h3>
      <h2>
          CHARRED CHARMANDER
      </h2>
      <div class="divider"></div>
        <div class="review-stars">
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-blank.jpg"/> 
        </div>
        <div class="break"></div>
        <li className="card">
          {isShown ? (
            <button onClick={handleClick} className="btn">Show Reviews</button>
          ) : (
            (
             <button onClick={handleClick} className="btn">Show Reviews</button>
            )
          )}

        </li>
        
      
    </div> 



    <div id="mc3" class="mealcard">
      <span class="cardimg">
          <img src="/assets/bulbasaur.jpg"/>
      </span>
      <h3>
          DINNER MENU
      </h3>
      <h2>
          BOILED BULBASAUR BULB
      </h2>
      
        <div class="review-stars">
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-blank.jpg"/> 
        </div>
        <div class="break"></div>
        <li className="card">
          {isShown ? (
            <button onClick={handleClick} className="btn">Show Reviews</button>
          ) : (
            (
             <li>"test"</li>,
             <button onClick={handleClick} className="btn">Show Reviews</button>
            )
          )}
          
        </li>
     
    </div> 
  



  <div class="break"></div>


  <div id="mc4" class="mealcard">
      <span class="cardimg">
          <img src="/assets/chikarita.jpg"/>
      </span>
      <h3>
          BREAKFAST MENU
      </h3>
      <h2>
          CHIKARITA & CHIC PEA SALAD
      </h2>
      
        <div class="review-stars">
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-blank.jpg"/> 
        </div>
        <div class="break"></div>
        <li className="card">
          {isShown ? (
            <button onClick={handleClick} className="btn">Show Reviews</button>
          ) : (
            (
             <li>"test"</li>,
             <button onClick={handleClick} className="btn">Show Reviews</button>
            )
          )}
          
        </li>
      
    </div> 
  


    <div id="mc4" class="mealcard">
      <span class="cardimg">
          <img src="/assets/pikachu.jpg"/>
      </span>
      <h3>
          LUNCH MENU
      </h3>
      <h2>
          THATS JUST A DEAD PIKACHU
      </h2>
      
        <div class="review-stars">
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-blank.jpg"/> 
        </div>
        <div class="break"></div>
        <li className="card">
          {isShown ? (
            <button onClick={handleClick} className="btn">Show Reviews</button>
          ) : (
            (
             <li>"test"</li>,
             <button onClick={handleClick} className="btn">Show Reviews</button>
            )
          )}
          
        </li>
        
        </div>




        <div id="mc6" class="mealcard">
      <span class="cardimg">
          <img src="/assets/magikarp.jpg"/>
      </span>
      <h3>
          DINNER MENU
      </h3>
      <h2>
          MAGIKARP SASHIMI
      </h2>
      
        <div class="review-stars">
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-filled.jpg"/>
          <img src="/assets/star-blank.jpg"/> 
        </div>
        <div class="break"></div>
        <li className="card">
          {isShown ? (
            <button onClick={handleClick} className="btn">Show Reviews</button>
          ) : (
            (
             <li>"test"</li>,
             <button onClick={handleClick} className="btn">Show Reviews</button>
            )
          )}
          
        </li>
        
        </div>

    </div>
</>
    );
  }


export default MenuCard;