import React from 'react';
import close from '../../../icons/close.svg';
import './transitions.scss';

const Transitions = () => {
  return (
    <div className='form'>
      <div className='form-header'>
        <div className='form-header__title'>Upload transactions</div>
        <div className='form-header__close-btn'>
          <img src={close} alt="title"></img>
        </div>
      </div>
      <div className='container'>
        <div className='text-header-container'>
          <div className='text-header'>Map columns. For each field, select bank account fields</div>
        </div>
        <form>
          <div className="checkbox-wrapper">
            <label className="checkbox">
              <input type="checkbox" />
              <span className="checkmark">First row in file is a header row</span>
            </label>
          </div>
          <div className="mid-form">
            <div className="columns">
              <div className="columns__title">Columns</div>
              <div className="columns__navigation-arrow">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.7903 0.387101L4.70711 0.292893C4.34662 -0.0675907 3.77939 -0.0953203 3.3871 0.209705L3.29289 0.292893L0.292893 3.29289L0.251496 3.33685L0.196335 3.40469L0.124671 3.51594L0.0712255 3.62866L0.0358451 3.73401L0.00690716 3.8819L0 4L0.00278786 4.07524L0.0202401 4.20073L0.0497381 4.31214L0.0936734 4.42322L0.145995 4.52071L0.219689 4.62545L0.292893 4.70711L3.29289 7.70711C3.68342 8.09763 4.31658 8.09763 4.70711 7.70711C5.06759 7.34662 5.09532 6.77939 4.7903 6.3871L4.70711 6.29289L3.415 5H11C11.5523 5 12 4.55228 12 4C12 3.44772 11.5523 3 11 3H3.415L4.70711 1.70711C5.06759 1.34662 5.09532 0.779392 4.7903 0.387101L4.70711 0.292893L4.7903 0.387101Z" fill="#20284A"/>
                </svg>
              </div>
              <div className="columns__file-name">File report_09.10.20.xls</div>
            </div>
            <div className="date">
              <div className="date__title inactive-title">Date</div>
              <div className="date__navigation-arrow inactive-arrow">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.7903 0.387101L4.70711 0.292893C4.34662 -0.0675907 3.77939 -0.0953203 3.3871 0.209705L3.29289 0.292893L0.292893 3.29289L0.251496 3.33685L0.196335 3.40469L0.124671 3.51594L0.0712255 3.62866L0.0358451 3.73401L0.00690716 3.8819L0 4L0.00278786 4.07524L0.0202401 4.20073L0.0497381 4.31214L0.0936734 4.42322L0.145995 4.52071L0.219689 4.62545L0.292893 4.70711L3.29289 7.70711C3.68342 8.09763 4.31658 8.09763 4.70711 7.70711C5.06759 7.34662 5.09532 6.77939 4.7903 6.3871L4.70711 6.29289L3.415 5H11C11.5523 5 12 4.55228 12 4C12 3.44772 11.5523 3 11 3H3.415L4.70711 1.70711C5.06759 1.34662 5.09532 0.779392 4.7903 0.387101L4.70711 0.292893L4.7903 0.387101Z" fill="#20284A"/>
                </svg>
              </div>
              <div className="select-container">
                <select name="values" id="values">
                  <option value="value1">Column 1: Date</option>
                  <option value="value2">Velue 01</option>
                  <option value="value3">Velue 02</option>
                  <option value="value4">Velue 03</option>
                  <option value="value5">Velue 04</option>
                  <option value="value6">Velue 05</option>
                </select>
              </div>
              <input type="text" placeholder="Month"/>
              <input type="text" placeholder="Day" />
              <input type="text" placeholder="Year" />
            </div>
            <div className="description">
              <div className="description__title inactive-title">Description</div>
              <div className="description__navigation-arrow inactive-arrow">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.7903 0.387101L4.70711 0.292893C4.34662 -0.0675907 3.77939 -0.0953203 3.3871 0.209705L3.29289 0.292893L0.292893 3.29289L0.251496 3.33685L0.196335 3.40469L0.124671 3.51594L0.0712255 3.62866L0.0358451 3.73401L0.00690716 3.8819L0 4L0.00278786 4.07524L0.0202401 4.20073L0.0497381 4.31214L0.0936734 4.42322L0.145995 4.52071L0.219689 4.62545L0.292893 4.70711L3.29289 7.70711C3.68342 8.09763 4.31658 8.09763 4.70711 7.70711C5.06759 7.34662 5.09532 6.77939 4.7903 6.3871L4.70711 6.29289L3.415 5H11C11.5523 5 12 4.55228 12 4C12 3.44772 11.5523 3 11 3H3.415L4.70711 1.70711C5.06759 1.34662 5.09532 0.779392 4.7903 0.387101L4.70711 0.292893L4.7903 0.387101Z" fill="#20284A"/>
                </svg>
              </div>
              <div className="description-inputs-wrapper">
                <textarea placeholder="Enter description"></textarea>
                <button>To map one more column</button>
              </div>
            </div>
            <div className="amount">
              <div className="amount__title inactive-title">Amount</div>
              <div className="amount__navigation-arrow inactive-arrow">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.7903 0.387101L4.70711 0.292893C4.34662 -0.0675907 3.77939 -0.0953203 3.3871 0.209705L3.29289 0.292893L0.292893 3.29289L0.251496 3.33685L0.196335 3.40469L0.124671 3.51594L0.0712255 3.62866L0.0358451 3.73401L0.00690716 3.8819L0 4L0.00278786 4.07524L0.0202401 4.20073L0.0497381 4.31214L0.0936734 4.42322L0.145995 4.52071L0.219689 4.62545L0.292893 4.70711L3.29289 7.70711C3.68342 8.09763 4.31658 8.09763 4.70711 7.70711C5.06759 7.34662 5.09532 6.77939 4.7903 6.3871L4.70711 6.29289L3.415 5H11C11.5523 5 12 4.55228 12 4C12 3.44772 11.5523 3 11 3H3.415L4.70711 1.70711C5.06759 1.34662 5.09532 0.779392 4.7903 0.387101L4.70711 0.292893L4.7903 0.387101Z" fill="#20284A"/>
                </svg>
              </div>
              <input type="text" placeholder="Enter amount"></input>
            </div>
          </div>
          <div className="bottom-form">
            <div className="popoup-wrapper">
              <div className="popoup-text">File has amounts in:</div>
              <div className="popoup-icon" data-tooltip="Info text">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.00001 0.333328C10.6819 0.333328 13.6667 3.3181 13.6667 7C13.6667 10.6819 10.6819 13.6667 7.00001 13.6667C3.31811 13.6667 0.333344 10.6819 0.333344 7C0.333344 3.3181 3.31811 0.333328 7.00001 0.333328ZM7.00001 1.66666C4.05449 1.66666 1.66668 4.05448 1.66668 6.99999C1.66668 9.94551 4.05449 12.3333 7.00001 12.3333C9.94553 12.3333 12.3333 9.94551 12.3333 6.99999C12.3333 4.05448 9.94553 1.66666 7.00001 1.66666ZM7.00001 5.66666C7.3682 5.66666 7.66668 5.96514 7.66668 6.33333V10.3333C7.66668 10.7015 7.3682 11 7.00001 11C6.63182 11 6.33334 10.7015 6.33334 10.3333V6.33333C6.33334 5.96514 6.63182 5.66666 7.00001 5.66666ZM7.00001 2.99999C7.3682 2.99999 7.66668 3.29847 7.66668 3.66666C7.66668 4.03485 7.3682 4.33333 7.00001 4.33333C6.63182 4.33333 6.33334 4.03485 6.33334 3.66666C6.33334 3.29847 6.63182 2.99999 7.00001 2.99999Z" fill="#898EA3"/>
                </svg>
              </div>
            </div>
            <div className="radio-buttons">
              <input type="radio" id="contactChoice1" name="contact" value="email" />
              <label htmlFor="contactChoice1">1 column: both positive and negative numbers</label>
              <input type="radio" id="contactChoice2" name="contact" value="phone" />
              <label htmlFor="contactChoice2">2 columns: separate positive and negative numbers</label>
            </div>
          </div>
          <div className="back-next-buttons">
            <button>Back</button>
            <button>Next&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Transitions;