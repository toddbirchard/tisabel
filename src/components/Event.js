import React from "react"
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import 'moment-timezone'

Moment.globalTimezone = `America/New_York`

const Event = ({ data }) => {
  const start_time = data.start
  const end_time = data.end

  return (
    <>
      <div className="event">
        <div className="event-detail">
          <div className="event-time">
            {start_time &&
              <Moment format="h:mma" element="span">{start_time}</Moment>
            }
            {end_time &&
              <span>{` - `}<Moment format="h:mma" element="span">{end_time}</Moment></span>
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
