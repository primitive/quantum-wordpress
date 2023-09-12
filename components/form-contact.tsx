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
      {/* debug
        <div>isLoading: {isLoading ? "Loading" : "false"}</div>
        <div>isSent: {isSent ? "Sent" : "false"}</div>
        <div>Error: {hasError || "null"}</div>
      */}

      <div className="mb-4 flex">
        <label className="block w-20 text-gray-700 text-sm font-bold pr-2 pt-2" htmlFor="your-name">
          Name
        </label>
        <input
          className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="your-name" type="text" placeholder="Your Name"
          onChange={(e) => handleFieldChange("your-name", e)} 
          />
      </div>

      <div className="mb-4 flex">
        <label className="block w-20 text-gray-700 text-sm font-bold pr-2 pt-2" htmlFor="your-email">
          Email
        </label>
        <input
          className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="your-email" type="text" placeholder="Contact Email"
          onChange={(e) => handleFieldChange("your-email", e)} 
          />
      </div>

      <div className="mb-4 flex">
        <label className="block w-20 text-gray-700 text-sm font-bold pr-2 pt-2" htmlFor="your-phone">
          Phone
        </label>
        <input
          className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="your-phone" type="text" placeholder="Contact Number"
          onChange={(e) => handleFieldChange("your-phone", e)} 
          />
      </div>

      <div className="mb-4 flex">
        <label className="block w-20 text-gray-700 text-sm font-bold pr-2 pt-2" htmlFor="your-subject">
          Subject
        </label>
        <input
          className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="your-subject" type="text" placeholder="Contact Reason"
          onChange={(e) => handleFieldChange("your-subject", e)} 
          />
      </div>

      <div className="mb-4 flex">
        <label className="block w-20 text-gray-700 text-sm font-bold pr-2 pt-2 mb-1" htmlFor="your-message">
          Message
        </label>
        <textarea
          className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="your-message" placeholder="Your Message"
          onChange={(e) => handleFieldChange("your-message", e)} 
          />
      </div>

      {hasError &&
        <div className="mb-2 mt-4 flex">
          <p className="flex-1 text-center text-red-700 text-sm"> {hasError} </p>
        </div>
      }

      <div className="mb-4 mt-8 flex">
        {isSent ? <p className="flex-1 text-center">Message sent, thank you!</p> :
          <input type="submit" value="Send Message" className="w-80 mx-auto bg-accent-1 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline tracking-wider transition-colors"/>
        }
      </div>
    </form>
  )
}

export default function ContactForm() {
  return (
    <div id="get-in-touch" className="wpcf7 max-w-2xl px-8 pt-6 pb-8 mx-auto mb-4 bg-white shadow-md rounded ">
      <h2 className="text-center mt-2 mb-6 text-6xl md:text-7xl font-bold tracking-tighter leading-tight" id="get-in-touch">GET IN TOUCH</h2>
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