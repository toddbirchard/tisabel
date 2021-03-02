import React from "react"
import Img from 'gatsby-image'
// import getStripe from "../common/Stripe"


const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat([`en-US`], {
    style: `currency`,
    currency: currency,
    currencyDisplay: `symbol`,
  })
  return numberFormat.format(price)
}

const RegistryItem = ({ data }) => {
  // const [loading, setLoading] = useState(false)

  const handleSubmit = e => console.log(e)

  {/* const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    const price = event.target.priceSelect
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: `payment`,
      lineItems: [{ price, quantity: 1 }],
      successUrl: `/page-2/`,
      cancelUrl: `/advanced`,
    })

    if (error) {
      console.warn(`Error:`, error)
      setLoading(false)
    }
  }*/}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: `none` }}>
          <legend>
            <h4>{data.product.name}</h4>
          </legend>
          <label>
            Price{` `}
            <span name="price">
              {formatPrice(data.unit_amount, data.currency)}
            </span>
            <p>{data.product.description}</p>
            <Img fixed={data.product.localFiles[0].childImageSharp.fixed}/>
          </label>
        </fieldset>
        <button >
          BUY ME
        </button>
      </form>
    </div>
  )
}

export default RegistryItem
