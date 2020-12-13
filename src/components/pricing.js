import React from "react"

const Pricing = () => {
  return (
    <div
      data-sal="fade"
      data-sal-duration="500"
      data-sal-easing="ease-in-out"
      className="pricing"
    >
      <h2>Pricing</h2>
      <table>
        <tr>
          <th colSpan="3">Unlimited</th>
        </tr>
        <tr className="row">
          <td></td>
          <td>$129/mo</td>
          <td></td>
        </tr>
        <tr>
          <th colSpan="3">Punch Cards</th>
        </tr>
        <tr className="row">
          <td>10 classes: $161</td>
          <td></td>
          <td>20 classes: $261</td>
        </tr>
        <tr>
          <th colSpan="3">Barbell</th>
        </tr>
        <tr className="row">
          <td colSpan="3">Membership add-on: $70/mo</td>
          <td colSpan="3">Unlimited: $120/mo</td>
          <td colSpan="3">Youth: $99/mo</td>
        </tr>
      </table>
      {/*       <p>Drop-In: $20/class</p>
      <p>2x/week: $100/mo</p>
      <p>3x/week: $120/mo</p>
      <p>Unlimited: $130/mo</p>
      <p>Barbell Club: $100/mo</p>
      <p style={{margin: 0}}><strong>Family Discount</strong></p>
      <p>10% off each membership</p>
      <p style={{margin: 0}}><strong>Hero Discount</strong></p>
      <p>20% off for active military, first responders, vetarans, and teachers</p> */}
    </div>
  )
}

export default Pricing
