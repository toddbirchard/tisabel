import React, { useRef } from "react"
import { NetlifyForm, Honeypot } from 'react-netlify-forms'
import fetch from 'node-fetch'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`)
}

const Rsvp = () => {
  const formRefPartTwo = useRef()
  const formRefPartThree = useRef()

  const handleRsvpConfirmation = (e) => {
    if (e.target.value == `yes`){
      formRefPartTwo.current.classList.remove(`hidden`)
    } else {
      formRefPartTwo.current.classList.add(`hidden`)
    }
  }
  const handleTravelConfirmation = (e) => {
    if (e.target.value == `yes`){
      formRefPartThree.current.classList.remove(`hidden`)
    } else {
      formRefPartThree.current.classList.add(`hidden`)
    }
  }
  const handleSubmit = data => {
    data[`form-name`] = `rsvp`
    fetch(`/`, {
      method: `POST`,
      headers: { 'Content-Type': `application/x-www-form-urlencoded` },
      body: encode({ "form-name": `rsvp`, data }),
    })
      .catch(error => console.log(error))
  }

  return (
    <>
      <section id="rsvp" className="main component">
        <h2>RSVP</h2>
        <NetlifyForm
          name="rsvp"
          action="/"
          honeypotName="streetAddress"
          onSubmit={handleSubmit}
          onSuccess={(response, context) => {
            context.formRef.current.reset()
            context.formRef.classList.add( `hidden-form` )
          }}
        >
          {({ handleChange, error, success }) => (
            <>
              {success &&
                <div className="success response">
                  {`Thanks for letting us know! LET'S GET WASTED!`}
                </div>
              }

              {error &&
                <div className="error response">
                  Your information was not sent. Please try again later.
                </div>
              }

              <>
                <div className="rsvp-part-1 hidden">
                  <Honeypot />
                  <fieldset className="hidden-label">
                    <span className="field-title">{`New wedding who dis?`}</span>
                    <div className="input-group">
                      <label htmlFor="name" className="hidden-field">Name</label>
                      <input
                        id="guestName"
                        name="name"
                        type="text"
                        placeholder="(Tell us your name)"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </fieldset>

                  <fieldset>
                    <span className="field-title">{`Are you coming or nah?`}</span>
                    <div className="input-group">
                      <input
                        id="guestRsvpYes"
                        name="guestRsvp"
                        value="yes"
                        type="radio"
                        onClick={e => handleRsvpConfirmation(e)}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="guestRsvpYes">Yes</label>
                      <input
                        id="guestRsvpNo"
                        name="guestRsvp"
                        value="no"
                        type="radio"
                        onClick={e => handleRsvpConfirmation(e)}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="guestRsvpNo">Nah</label>
                    </div>
                  </fieldset>
                </div>

                <div className="rsvp-part-2 hidden" ref={formRefPartTwo}>
                  <fieldset>
                    <span className="field-title">{`Bringing a +1?`}</span>
                    <div className="input-group">
                      <input
                        id="guestPlusOne"
                        name="guestPlusOne"
                        type="checkbox"
                        value="+1 confirmed"
                        onChange={handleChange}
                      />
                      <label htmlFor="guestPlusOne">{`Yes, I'm bringing someone.`}</label>
                    </div>
                  </fieldset>

                  <fieldset>
                    <span className="field-title">{`Are you traveling from out of town?`}</span>
                    <div className="input-group">
                      <input
                        id="guestTravelingYes"
                        name="guestTraveling"
                        value="yes"
                        type="radio"
                        onClick={e => handleTravelConfirmation(e)}
                        onChange={handleChange}
                      />
                      <label htmlFor="guestTravelingYes">Yep</label>
                      <input
                        id="guestTravelingNo"
                        name="guestTraveling"
                        value="no"
                        type="radio"
                        onClick={e => handleTravelConfirmation(e)}
                        onChange={handleChange}
                      />
                      <label htmlFor="guestTravelingNo">Nope</label>
                    </div>
                  </fieldset>
                </div>

                <div className="rsvp-part-3 hidden" ref={formRefPartThree}>
                  <fieldset>
                    <span className="field-title">{`Need a hotel room?`}</span>
                    <div className="input-group">
                      <input
                        id="guestHotelYes"
                        name="guestHotel"
                        value="yes"
                        type="radio"
                        onChange={handleChange}
                      />
                      <label htmlFor="guestHotelYes">Yes</label>
                      <input
                        id="guestHotelNo"
                        name="guestHotel"
                        value="no"
                        type="radio"
                        onChange={handleChange}
                      />
                      <label htmlFor="guestHotelNo">No Thanks</label>
                    </div>
                  </fieldset>
                </div>
                <button type="submit" className="submit">Submit RSVP</button>
              </>
            </>
          )}
        </NetlifyForm>
      </section>
    </>
  )}

export default Rsvp
