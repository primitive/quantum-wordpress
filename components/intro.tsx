import { CMS_NAME, CMS_URL, SITE_NAME, SITE_TAGLINE, THEME_NAME, INTRO_TEXT, THEME_HEADER} from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div>
        <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight text-shadow-custom md:pr-8 mpen">
          {SITE_NAME}
        </h1>
        <p className="text-center md:text-left md:text-lg md:pl-6 mt-[-1rem] md:mt-[-1.5rem]">
          {SITE_TAGLINE}
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-display font-bold leading-tight text-center text-shadow-custom md:text-left mt-5 md:pl-8">
          {THEME_NAME} <span className="font-sans text-lg text-secondary">{THEME_HEADER}</span>
        </h3>
        <h4 className="font-sans text-center text-shadow-custom md:text-left text-lg mt-5 md:pl-8">
          {INTRO_TEXT}{" "}
          <a
            href="https://nextjs.org/"
            className="underline hover:text-success duration-300 font-display transition-colors"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href={CMS_URL}
            className="underline hover:text-success duration-300 font-display transition-colors"
          >
            {CMS_NAME}
          </a>
          .
        </h4>
      </div>
    </section>
  );
}
