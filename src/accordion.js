import React, {useState} from 'react';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';

const Accordion = ({id, title, info}) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <article key={id} className = 'accordion'>
            <div className = 'qdiv'>
                <p className={`title ${showInfo && 'titleBold'}`} onClick={() => setShowInfo(!showInfo)}>{title}</p>
                <button onClick={() => setShowInfo(!showInfo)} className='btn'>
                    {showInfo ? <FaChevronUp/> : <FaChevronDown/>}
                </button>
            </div>  
            {showInfo && <p className = 'info'>{info}</p>} <hr/>
        </article>
    )
}

export default Accordion;