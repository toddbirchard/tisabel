import React, { useRef } from "react"
import { useForm } from "react-hook-form"
import fetch from 'node-fetch'

{/*function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`)
}*/}

const Rsvp = () => {
  const formRefPartTwo = useRef()
  const formRefPartThree = useRef()
  const { register, handleSubmit } = useForm()

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
  const onSubmit = data => {
    data[`form-name`] = `rsvp`
    let body = JSON.stringify(data)
    console.log(`body = ` + body)
    fetch(`/`, {
      method: `POST`,
      headers: { 'Content-Type': `application/json` },
      body: body,
    })
      .catch(error => console.log(error))
  }
  return(
    <>
      <section id="rsvp">
        <h2>RSVP</h2>
        <form
          name="rsvp"
          netlify
          data-netlify="true"
          data-netlify-honeypot="streetAddress"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >

          <fieldset className="hidden-label">
            <span className="field-title">{`New wedding who dis?`}</span>
            <div className="input-group">
              <label htmlFor="name" className="hidden-field">Name</label>
              <input
                id="guestName"
                name="name"
                type="text"
                placeholder="(Tell us your name)"
                ref={register}
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
                ref={register}
              />
              <label htmlFor="guestRsvpYes">Yes</label>
              <input
                id="guestRsvpNo"
                name="guestRsvp"
                value="no"
                type="radio"
                onClick={e => handleRsvpConfirmation(e)}
                ref={register}
              />
              <label htmlFor="guestRsvpNo">Nah</label>
            </div>
          </fieldset>

          <div className="rsvp-part-2 hidden" ref={formRefPartTwo}>
            <fieldset>
              <span className="field-title">{`Bringing a +1?`}</span>
              <div className="input-group">
                <input
                  id="guestPlusOne"
                  name="guestPlusOne"
                  type="checkbox"
                  value="+1 confirmed"
                  ref={register}
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
                  ref={register}
                />
                <label htmlFor="guestTravelingYes">Yep</label>
                <input
                  id="guestTravelingNo"
                  name="guestTraveling"
                  value="no"
                  type="radio"
                  onClick={e => handleTravelConfirmation(e)}
                  ref={register}
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
                  ref={register}
                />
                <label htmlFor="guestHotelYes">Yes</label>
                <input
                  id="guestHotelNo"
                  name="guestHotel"
                  value="no"
                  type="radio"
                  ref={register}
                />
                <label htmlFor="guestHotelNo">No Thanks</label>
              </div>
            </fieldset>

            <fieldset className="hidden-field">
              <input id="streetAddress" name="form-name" type="hidden" />
            </fieldset>
          </div>

          <fieldset className="hidden-label">
            <span className="field-title">{`Anything else we should know?`}</span>
            <div className="input-group">
              <label htmlFor="Details">Details</label>
              <textarea
                id="Details"
                name="guestDetails"
                ref={register}
              ></textarea>
            </div>
          </fieldset>

          <button type="submit" className="submit">Submit RSVP</button>

        </form>
      </section>
    </>
  )
}

export default Rsvp
