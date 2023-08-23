/*
THE FILE
This file contains the Quiz Slider component. It uses the library Swiper to create the slider feature for the quiz questions. 
The Quiz Slider function calls upon the question-api to render the set of questions for the game. 
Each question is display in a slide. 
This file also contains the next question button that triggers the slider to move to the next question.
*/


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import './QuizSlider.css';
import { useNavigate } from 'react-router-dom';

//Quiz Slider component.
function QuizSlider() {

  //This relates to the 'Next Question' button
  const swiperRef = useRef(null);

  const navigate = useNavigate();

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  //Relates to the quiz questions
  const [questionSet, setQuestionSet] = useState([]);

  //Function to fetch the questions stored in the API called question-api.
  //Used an except statement in case there is an error fetching questions. 
  async function fetchQuestionSet() {
    try {
      const response = await axios.get('http://localhost:1234/api/questions/random');
      //The next line of code is storing the JSON in the setQuestionSet variable.
      setQuestionSet(response.data.questions);
      console.log('Question set from non-socket API:', questionSet)
      // setIsLoading(false);

    } catch (error) {
      console.error('Error fetching question set:', error);
    }
  }

  //Calling upon the questions from the API.
  useEffect(() => {
    fetchQuestionSet();
  }, []);

  const reshuffleQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:1234/api/questions/reshuffle');
      setQuestionSet(response.data.questions);
      console.log('Question set reshuffled:', response.data.questions);
    } catch (error) {
      console.error('Error reshuffling question set:', error);
    }
    navigate('/');
  };

  //Return statement
  return (
    <div className='questionContainer'>
      <div className="quiz_slider_container">
        <h1 className="quiz_slider_heading">It's Not You, It's Me</h1>

        {/* I've used the Swiper Library to help create the slider feature */}
        <Swiper
        /*Behavour of the slider */
          ref={swiperRef}
          effect={'coverflow'} //Slide transition
          grabCursor={false} //No cursor when hovering
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
          allowTouchMove={false} // Disable dragging behavior
        >

        {/* SLIDES */}

        {/* Used .map to go through each question in the questionSet variable to display a quesiton on each slide.*/}
        {questionSet.map((question, index) => (

          // Slide 1, question at index[0]
          <SwiperSlide key={index}>
          <div className="question_container">
            <div className="border_container">
              <p className="question_text">{questionSet[index].text}</p>
            </div>
          </div>

          </SwiperSlide>
        ))}

        {/* ***** Continues to display all the slides without having to code 10 SwiperSlides ***** */}

        </Swiper>

        {/*This button triggers the function to move the slider to next question.*/}
        <div className='buttonContainer'>
          <button className="primary_button" onClick = {goToNextSlide}>Next Question</button>
        </div>
        <div className='buttonContainer'>
          <button className="secondary_button" onClick={reshuffleQuestions}>Reshuffle Questions</button>
        </div>
      </div>

    </div>    
  );
}

export default QuizSlider;

  