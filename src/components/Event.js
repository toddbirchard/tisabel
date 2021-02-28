import React from "react"
import PropTypes from 'prop-types'

const Event = ({ data }) => {
  const start_time = data.start
  const end_time = data.end

  return (
    <>
      <div className="event">
        <div className="event-detail">
          <div className="event-time">
            {start_time &&
              <span>{start_time}</span>} {end_time && <span>{` - ${end_time}`}</span>
            }
          </div>
          <div className="event-location">{data.location}</div>
        </div>
        <div className="event-name">{data.Name}</div>
      </div>
    </>
  )
}

Event.propTypes = {
  data: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string,
    day: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
}

export default Event
