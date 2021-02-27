import React from "react"

const Rsvp = () => (
  <>
    <section id="rsvp">
      <h2>RSVP</h2>
      <form
        name="comments"
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
            <label htmlFor="guestRsvpYes">Yes</label>
            <input id="guestRsvpYes" name="Yes" type="radio" />
            <label htmlFor="guestRsvpNo">Nah</label>
            <input id="guestRsvpNo" name="No" type="radio" />
          </div>
        </fieldset>

        <fieldset>
          <span className="field-title">{`Bringing a +1?`}</span>
          <div className="input-group">
            <label htmlFor="guestPlusOne">+1</label>
            <input id="guestPlusOne" name="+1" type="checkbox" value="+1" />
          </div>
        </fieldset>

        <fieldset>
          <span className="field-title">{`Free hotel room?`}</span>
          <div className="input-group">
            <label htmlFor="guestHotelYes">Yes</label>
            <input id="guestHotelYes" name="Yes" type="radio" />
            <label htmlFor="guestHotelNo">Nah</label>
            <input id="guestHotelNo" name="No" type="radio" />
          </div>
        </fieldset>

        <fieldset>
          <span className="field-title">{`Anything else we should know?`}</span>
          <div className="input-group">
            <label htmlFor="Details" className="hidden-field">Details</label>
            <textarea id="Details" name="guestDetails"></textarea>
          </div>
        </fieldset>
      </form>
    </section>
  </>
)

export default Rsvp
