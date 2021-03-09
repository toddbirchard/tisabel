import React, { useState } from "react"
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import getStripe from '../../util/Stripe'


const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat([`en-US`], {
    style: `currency`,
    currency: currency,
    currencyDisplay: `symbol`,
  })
  return numberFormat.format(price)
}

const RegistryItem = ({ item }) => {
  const [loading, setLoading] = useState(false)
  const image = getImage(item.product.localFiles[0])
  const siteUrl = process.env.GATSBY_ROOT_URL

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    const priceId = item.id
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: `payment`,
      lineItems: [{ priceId, quantity: 1 }],
      successUrl: siteUrl + `/success`,
      cancelUrl: siteUrl,
    })

    if (error) {
      console.warn(`Error:`, error)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button disabled={loading} name="priceSelect" className="registry-gift">
        <div className="gift-details">
          <div className="gift-headline">
            <label className="registry-gift-title">{item.product.name}</label>
            <span className="price">
              {formatPrice(item.unit_amount, item.currency)}
            </span>
          </div>
          <p className="gift-description">{item.product.description}</p>
          <div className="submit-button"><span>Contribute</span> <IoArrowForwardCircleOutline /></div>
        </div>
        <GatsbyImage
          image={image}
          placeholder="blurred"
          layout="fixed"
          width={120}
          height={120}
          alt={item.product.name}
          className="registry-image"
        />
      </button>
    </form>
  )
}

RegistryItem.propTypes = {
  item: PropTypes.shape({
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
      images: PropTypes.arrayOf(
        PropTypes.string,
      ),
    }),
  }),
}

export default RegistryItem
