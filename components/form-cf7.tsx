import { cloneElement, useState } from "react";

interface Cf7FormWrapperProps {
  children: React.ReactElement;
  siteUrl?: string;
  formId?: string;
  url?: string;
}

const jsonToFormData = (json: Record<string, string>) => {
  try {
    const data = new FormData();

    for (let k in json) {
      data.append(k, json[k]);
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const ErrorMessage = () => (
  <div style={{ color: "red" }}>
    <strong>url</strong> or <strong>siteUrl</strong> and <strong>formId</strong> are mandatory attributes.
  </div>
)

const Cf7FormWrapper: React.FC<Cf7FormWrapperProps> = ({ children, siteUrl, formId, url }) => {
  const [isSent, setSent] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState<string | null>(null);
  const [unitTag, setUnitTag] = useState(`wpcf7-f${formId}-o1`);

  const apiUrl =
  url ||
  `${siteUrl}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback/`;

  const formSubmitHandler = (payload: Record<string, string>) => {
    setLoading(true);
    setError(null);

    const formData = {
      ...payload,
      _wpcf7_unit_tag: unitTag,
    };

    fetch(apiUrl, {
      method: "POST",
      body: jsonToFormData(formData),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.status !== "mail_sent") throw new Error(resp.message);
        setSent(true);
      })
      .catch((error) => {
        setError(error.message || "Error sending message");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return <div>{url || (siteUrl && formId) ? cloneElement(children, { handler: formSubmitHandler, isLoading, isSent, hasError }) : <ErrorMessage />}</div>;
};

export default Cf7FormWrapper;
