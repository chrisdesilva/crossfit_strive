import React, { useState } from "react"
import { FaDumbbell, FaFire, FaHeartbeat } from "react-icons/fa"
import { Collapse } from "react-collapse"

const Schedule = props => {
  const [isCrossfitOpen, toggleCrossfit] = useState(false)
  const [isPumpBurnOpen, togglePumpBurn] = useState(false)
  const [isBarbellOpen, toggleBarbell] = useState(false)

  return (
    <div
      data-sal="fade"
      data-sal-duration="500"
      data-sal-easing="ease-in-out"
      className="schedule"
    >
      <h2>Schedule</h2>
      <p>Click a class below to check the schedule</p>
      <span
        onClick={() => toggleCrossfit(!isCrossfitOpen)}
        className={isCrossfitOpen ? "strive-red" : undefined}
      >
        <FaHeartbeat />
        <p>Strive 60</p>
      </span>
      <Collapse isOpened={isCrossfitOpen}>
        <table className="schedule--crossfit__table">
          <tbody>
            <tr>
              <th>Monday | Friday</th>
            </tr>
            <tr>
              <td>5:30am | 6:45am | 12:00pm | 4:30pm | 5:45pm </td>
            </tr>
            <tr>
              <th>Tuesday | Thursday</th>
            </tr>
            <tr>
              <td>
                5:30am | 6:45am | 9:30am | 12:00pm | 4:30pm | 5:45pm | 7:00pm
              </td>
            </tr>
            <tr>
              <th>Wednesday</th>
            </tr>
            <tr>
              <td>5:30am | 12:00pm | 4:30pm | 5:45pm </td>
            </tr>
            <tr>
              <th>Saturday</th>
            </tr>
            <tr>
              <td>8:00am | 9:15am</td>
            </tr>
            <tr>
              <th>Sunday</th>
            </tr>
            <tr>
              <td>9:00am</td>
            </tr>
          </tbody>
        </table>
      </Collapse>
      <span
        onClick={() => togglePumpBurn(!isPumpBurnOpen)}
        className={isPumpBurnOpen ? "strive-red" : undefined}
      >
        <FaFire />
        <p>Pump & Burn</p>
      </span>
      <Collapse isOpened={isPumpBurnOpen}>
        <table className="schedule--crossfit__table">
          <tbody>
            <tr>
              <th>Monday | Wednesday</th>
            </tr>
            <tr>
              <td>9:30am | 5:45pm</td>
            </tr>
            <tr>
              <th>Tuesday | Thursday</th>
            </tr>
            <tr>
              <td>5:30am</td>
            </tr>
            <tr>
              <th>Friday</th>
            </tr>
            <tr>
              <td>9:30am</td>
            </tr>
          </tbody>
        </table>
      </Collapse>
      <span
        onClick={() => toggleBarbell(!isBarbellOpen)}
        className={isBarbellOpen ? "strive-red" : undefined}
      >
        <FaDumbbell />
        <p> Barbell Club</p>
      </span>
      <Collapse isOpened={isBarbellOpen}>
        <table className="schedule--crossfit__table">
          <tbody>
            <tr>
              <th>Tuesday</th>
            </tr>
            <tr>
              <td>4:30pm | 5:45pm</td>
            </tr>
            <tr>
              <th>Thursday</th>
            </tr>
            <tr>
              <td>4:30pm | 5:45pm</td>
            </tr>
            <tr>
              <th>Saturday</th>
            </tr>
            <tr>
              <td>8:00am</td>
            </tr>
          </tbody>
        </table>
      </Collapse>
      <p>
        For class descriptions, click{" "}
        <span className="schedule__link" onClick={props.scroll}>
          here
        </span>
        .
      </p>
    </div>
  )
}

export default Schedule
