import Cf7FormWrapper from "./form-cf7";
import { useState, FormEvent } from "react";

interface FormProps {
  handler: (formData: Record<string, string>) => void;
  isLoading: boolean;
  isSent: boolean;
  hasError: string | null;
}

const Form: React.FC<FormProps> = ({ handler, isLoading, isSent, hasError }) => {
  const [formState, setFormState] = useState<Record<string, string>>({});

  const handleFieldChange = (field: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handler(formState);
  };

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
          id="your-name" name="your-name" type="text" placeholder="Your Name"
          className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => handleFieldChange("your-name", e)}
        />
      </div>

      <div className="mb-4 flex">
        <label className="block w-20 text-gray-700 text-sm font-bold pr-2 pt-2" htmlFor="your-email">
          Email
        </label>
        <input
          id="your-email" name="your-email" type="email" placeholder="Contact Email"
          className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => handleFieldChange("your-email", e)}
        />
      </div>

      <div className="mb-4 flex">
        <label className="block w-20 text-gray-700 text-sm font-bold pr-2 pt-2" htmlFor="your-phone">
          Phone
        </label>
        <input id="your-phone" name="your-phone" type="tel" placeholder="Contact Number"
          onChange={(e) => handleFieldChange("your-phone", e)}
          className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700"
        />
      </div>

      <div className="mb-4 flex">
        <label className="block w-20 text-gray-700 text-sm font-bold pr-2 pt-2" htmlFor="your-subject">
          Subject
        </label>
        <input
          className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700"
          id="your-subject" placeholder="Contact Reason" type="text"  name="your-subject"
          onChange={(e) => handleFieldChange("your-subject", e)}
        />
      </div>

      <div className="mb-4 flex">
        <label className="block w-20 text-gray-700 text-sm font-bold pr-2 pt-2 mb-1" htmlFor="your-message">
          Message
        </label>
        <textarea id="your-message" name="your-message" placeholder="Your Message"
          onChange={(e) => handleFieldChange("your-message", e)}
          className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700"
        />
      </div>

      {hasError && (
        <div className="mb-2 mt-4 flex">
          <p className="flex-1 text-center text-red-700 text-sm">{hasError}</p>
        </div>
      )}

      <div className="mb-4 mt-8 flex">
        {isSent ? (
          <p className="flex-1 text-center">Message sent, thank you!</p>
        ) : (
          <input type="submit" value={isLoading ? "Sending..." : "Send Message"}
            className="w-80 mx-auto bg-accent-1 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
            disabled={isLoading}
          />
        )}
      </div>
    </form>
  )
}

const ContactForm: React.FC = () => {
  return (
    <div id="get-in-touch" className="wpcf7 max-w-2xl px-8 pt-6 pb-8 mx-auto mb-4 bg-white shadow-md rounded">
      <h2 className="text-center mt-2 mb-6 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        GET IN TOUCH
      </h2>
      <Cf7FormWrapper
        url=""
        siteUrl="https://get2.sknow.it/"
        formId="1562"
      >
        <Form handler={() => {}} isLoading={false} isSent={false} hasError={null} />
      </Cf7FormWrapper>
    </div>
  )
}
export default ContactForm;