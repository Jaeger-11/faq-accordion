import React from 'react';
import Questions from './data';
import Accordion from './accordion';
import bg from './illustration-woman-online-desktop.svg'
import box from './images/illustration-box-desktop.svg'

const App = () => {
  // const bgc = {background: 'linear-gradient(to right, rgb(175, 103, 233),rgb(101, 101, 231))'}
  return (
    <div>
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
    </div>
  );
}

export default App;
