import React from "react";
import "../Calender/Calender.css";

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="month">October 2022</div>
      <div className="days">
        {/* Day Names */}
        <div className="day-name">Sun</div>
        <div className="day-name">Mon</div>
        <div className="day-name">Tue</div>
        <div className="day-name">Wed</div>
        <div className="day-name">Thu</div>
        <div className="day-name">Fri</div>
        <div className="day-name">Sat</div>
        {/* Days */}
        <div className="prev-day">25</div> {/* Empty cells for alignment */}
        <div className="prev-day">26</div>
        <div className="prev-day">27</div>
        <div className="prev-day">28</div>
        <div className="prev-day">29</div>
        <div className="prev-day">30</div>
        <div className="day">1</div>
        <div className="day">2</div>
        <div className="day">3</div>
        <div className="day">4</div>
        <div className="day">5</div>
        <div className="day">6</div>
        <div className="day">7</div>
        <div className="day">8</div>
        <div className="day">9</div>
        <div className="day">10</div>
        <div className="day">11</div>
        <div className="day">12</div>
        <div className="day">13</div>
        <div className="day">14</div>
        <div className="day">15</div>
        <div className="day">16</div>
        <div className="day">17</div>
        <div className="day">18</div>
        <div className="day">19</div>
        <div className="day">20</div>
        <div className="day current-day">21</div>
        <div className="day">22</div>
        <div className="day">23</div>
        <div className="day">24</div>
        <div className="day">25</div>
        <div className="day">26</div>
        <div className="day">27</div>
        <div className="day">28</div>
        <div className="day">29</div>
        <div className="day">30</div>
        <div className="day">31</div>
        <div className="prev-day">1</div>
        <div className="prev-day">2</div>
        <div className="prev-day">3</div>
        <div className="prev-day">4</div>
        <div className="prev-day">5</div>
      </div>
    </div>
  );
};

export default Calendar;
