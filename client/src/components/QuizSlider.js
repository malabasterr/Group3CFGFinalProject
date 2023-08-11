/*
THE FILE

This file contains the Quiz Slider component. It uses the library Swiper to create the slider feature for the quiz questions. 
The Quiz Slider function calls upon the question-api to render the set of questions for the game. 
Each question is display in a slide. 


*/



//Imports for react and API
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Imports for slider 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow} from 'swiper/modules';


//Quiz Slider component.
function QuizSlider() {
  

  //Relates to the quiz questions
  const [questionSet, setQuestionSet] = useState([]);

  //Incase the game takes time to load this will display 'Loading..'
  const [isLoading, setIsLoading] = useState(true);

  //Function to fetch the questions stored in the API called question-api.
  //Used ane except statement incase thier is an error fetching questions. 

  async function fetchQuestionSet() {
    try {
      const response = await axios.get('http://localhost:3001/api/questions/random');
      //The next line of code is storing the JSON in the setQuestionSet variable.
      setQuestionSet(response.data.questions);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching question set:', error);
    }
  }

  //Calling upon the questions from the API.
  useEffect(() => {
    fetchQuestionSet();
  }, []);

   //Incase the game takes time to load this will display 'Loading..'
  if (isLoading) {
    return <div>Loading...</div>;
  }

  //Return statement
  return (
    <div className="container">
      <h1 className="heading">Welcome to the Quiz</h1>

      {/* I've used the Swiper Library to help create the slider feature */}
      <Swiper
      /*Behavour of the slider */
        effect={'coverflow'} //Slide transition
        grabCursor={true} //Cursor when hover **Might want to remove this when finished.
        centeredSlides={true} //Current slide in the center
        loop={false} //Do you want slider to loop around.
        slidesPerView={'auto'} //Decides how many slides are visible
        coverflowEffect={{ //3D effect, the stack of the slides.
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow]}//These are the modules used to create the coverflow effect.
        className="swiper_container"//The class name for the slider
      >
  
  {/* SLIDES */}

  {/* Used .map to go through each question in the questionSet variable to display a quesiton on each slide.*/}
  {questionSet.map((question, index) => (
    
    // Slide 1, question at index[0]
    <SwiperSlide key={index}>
      <div className="question_container">
        <div className="border-container">
          <p className="question_text">{questionSet[0].text}</p>
          </div>
        </div>
      
    </SwiperSlide>
  ))}

  {/* ***** Continues to display all the slides without having to code 10 SwiperSlides ***** */}

      </Swiper>
    </div>
    
      
  );
}

export default QuizSlider;

  