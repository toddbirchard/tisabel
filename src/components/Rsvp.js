import React from "react"

const Rsvp = () => (
  <>
    <section id="rsvp">
      <h2>RSVP</h2>
      <form
        name="rsvp"
        netlify
        data-netlify="true"
        netlify-honeypot="address"
        method="post"
      >

        <fieldset>
          <span className="field-title">{`New wedding who dis?`}</span>
          <div className="input-group">
            <label htmlFor="guestName" className="hidden-field">Name</label>
            <input id="guestName" name="Name" type="text" placeholder="(Tell us your name)" />
          </div>
        </fieldset>

        <fieldset>
          <span className="field-title">{`Are you coming or nah?`}</span>
          <div className="input-group">
            <input id="guestRsvpYes" name="guestRsvp" value="yes" type="radio" />
            <label htmlFor="guestRsvpYes">Yes</label>
            <input id="guestRsvpNo" name="guestRsvp" value="no" type="radio" />
            <label htmlFor="guestRsvpNo">Nah</label>
          </div>
        </fieldset>

        <fieldset>
          <span className="field-title">{`Bringing a +1?`}</span>
          <div className="input-group">
            <input id="guestPlusOne" name="guestPlusOne" type="checkbox" value="+1 confirmed" />
            <label htmlFor="guestPlusOne">{`Yes, I'm bringing a +1`}</label>
          </div>
        </fieldset>

        <fieldset>
          <span className="field-title">{`Free hotel room?`}</span>
          <div className="input-group">
            <input id="guestHotelYes" name="guestHotel" value="yes" type="radio" />
            <label htmlFor="guestHotelYes">Yes</label>
            <input id="guestHotelNo" name="guestHotel" value="no" type="radio" />
            <label htmlFor="guestHotelNo">Nah</label>
          </div>
        </fieldset>

        <fieldset>
          <span className="field-title">{`Anything else we should know?`}</span>
          <div className="input-group">
            <label htmlFor="Details" className="hidden-field">Details</label>
            <textarea id="Details" name="guestDetails"></textarea>
          </div>
        </fieldset>

        <input type="submit" value="Submit" />

      </form>
    </section>
  </>
)

export default Rsvp
