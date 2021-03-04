import React, { useState } from "react"
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import getStripe from '../common/Stripe'


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
  const [loading, setLoading] = useState(false)
  const image = getImage(data.product.localFiles[0])
  const siteUrl = process.env.GATSBY_ROOT_URL

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    const price = data.id
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: `payment`,
      lineItems: [{ price, quantity: 1 }],
      successUrl: siteUrl + `/success/`,
      cancelUrl: siteUrl + `/cancel/`,
    })

    if (error) {
      console.warn(`Error:`, error)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset style={{ border: `none` }} className="registry-gift">
        <div className="gift-details">
          <div className="gift-headline">
            <label className="registry-gift-title">{data.product.name}</label>
            <span name="price">
              {formatPrice(data.unit_amount, data.currency)}
            </span>
          </div>
          <p className="gift-description">{data.product.description}</p>
          <button disabled={loading}><span>Contribute</span> <IoArrowForwardCircleOutline /></button>
        </div>
        <GatsbyImage
          image={image}
          placeholder="blurred"
          layout="fixed"
          width={120}
          height={120}
          alt={data.product.name}
          className="registry-image"
        />
      </fieldset>

    </form>
  )
}

RegistryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    unit_amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    product:PropTypes.shape({
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      statement_descriptor: PropTypes.string.isRequired,
      localFiles: PropTypes.arrayOf(
        PropTypes.shape({
          childImageSharp: PropTypes.object.isRequired,
        }),
      ),
    }),
  }),
}



export default RegistryItem
