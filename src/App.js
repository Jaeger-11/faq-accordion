import React from 'react';
import Questions from './data';
import Accordion from './accordion';
import bg from './illustration-woman-online-desktop.svg'
import box from './images/illustration-box-desktop.svg'

const App = () => {
  const bgc = {
    background: 'linear-gradient(to right, rgb(101, 101, 231), rgb(175, 103, 233))'
  }
  return (
    <div className='app' style={bgc}>
      <img src={box} alt = 'box' className='box'/>
      <div className='container'>
        <section className='imgSection'>
          <img src={bg} className='bg' alt='illustrator'/>
        </section> 
        <main className='main'>
          <h1 className='faq'>FAQ</h1>
          {Questions.map((question) => {
            return <Accordion key={question.id} {...question} />
          })}
        </main>
      </div>
      <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href='https://github.com/Jaeger-11'> Falodun Oluwadamilola </a>.
    </div>
  </div>
  );
}

export default App;
