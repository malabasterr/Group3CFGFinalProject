import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import './QuizSlider.css';

function QuizSlider({ showNextButton, swiperRef }) {

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
              <div className='container'>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className="question_container">
                      <div className="border_container">
                        <p className="question_text">{questionSet[index].text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </SwiperSlide>
        ))}

        {/* ***** Continues to display all the slides without having to code 10 SwiperSlides ***** */}

        </Swiper>
      </div>
         

    </div>    
  );
}

export default QuizSlider;
