import Cf7FormWrapper from './form-cf7'
import { useState } from "react"

function Form({ handler, isLoading, isSent, hasError }) {
  const [formState, setFormState] = useState({})

  const handleFieldChange = (field, e) => {
    setFormState({
      ...formState,
      [field]: e.target.value,
    })
  }

  const handleFormSubmit = (e) => {
    handler(e, formState)
  }

  return (
    <form 
      onSubmit={handleFormSubmit}
      className="wpcf7-form"
      >
      <div>isLoading: {isLoading ? "Loading" : "false"}</div>
      <div>isSent: {isSent ? "Sent" : "false"}</div>
      <div>Error: {hasError || "null"}</div>

      <div className="mb-4 row-auto">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="your-name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="your-name" type="text" placeholder="Username"
          onChange={(e) => handleFieldChange("your-name", e)} 
          />
      </div>

      <div>Your name:</div>
      <input onChange={(e) => handleFieldChange("your-name", e)} type="text" />
      <div>Your email:</div>
      <input onChange={(e) => handleFieldChange("your-email", e)} type="text" />
      <div>Enter your phone:</div>
      <input onChange={(e) => handleFieldChange("your-phone", e)} type="text" />
      <div>Subject:</div>
      <input onChange={(e) => handleFieldChange("your-subject", e)} type="text" />
      <div>Message:</div>
      <input onChange={(e) => handleFieldChange("your-message", e)} type="text" />
      <input type="submit" value="Send" />
    </form>
  )
}

export default function ContactForm() {
  return (
    <div id="get-in-touch" className="wpcf7 max-w-2xl px-8 pt-6 pb-8 mx-auto mb-4 bg-white shadow-md rounded ">
      <h2 className="text-center mb-2 text-6xl md:text-7xl font-bold tracking-tighter leading-tight" id="get-in-touch">GET IN TOUCH</h2>
      <Cf7FormWrapper
        url=""
        siteUrl="https://get2.sknow.it/"
        formId="1562"
        >

        <Form handler={undefined} isLoading={undefined} isSent={undefined} hasError={undefined}/>

      </Cf7FormWrapper>
    </div>
  )
}