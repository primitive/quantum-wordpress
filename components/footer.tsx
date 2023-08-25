import Container from "./container";
import Image from "next/image";
import primitiveIcon from "../public/img/primitive.svg";
import {
  GITHUB_REPO,
  FOOTER_BTN_TEXT,
  FOOTER_BTN_LINK,
  FOOTER_BTN2_TEXT,
  FOOTER_BTN2_LINK,
  FOOTER_COLOPHON,
  FOOTER_TEXT,
  FOOTER_HEADER,
  FOOTER_TEXT2,
} from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t-4 border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <Image
              priority
              src={primitiveIcon}
              alt="Primitive Digital"
              title="Primitive Digital"
              className="w-[170px] h-auto opacity-50 m-auto mb-1 lg:ml-0 lg:mb-0 "
            />

            <h4 className="text-3xl lg:text-4xl leading-tight text-center text-success pl-2 lg:text-left mb-4 lg:mb-0 lg:pr-4">
              {FOOTER_HEADER}
            </h4>
            <p className="text-xl lg:text-2xl tracking-tighter leading-tight text-center text-success pl-2 lg:text-left mb-5 lg:mb-0 lg:pr-4">
              {FOOTER_TEXT}
            </p>
            <p className="text-l lg:text-xl tracking-wider leading-tight text-center text-success pl-2 lg:text-left mb-10 lg:mb-0 lg:pr-4">
              {FOOTER_TEXT2}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={FOOTER_BTN_LINK}
              className="mx-3 bg-amber-600 hover:bg-amber-500 hover:text-accent-2 border border-accent-2 text-white font-bold tracking-wide py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              {FOOTER_BTN_TEXT}
            </a>
            <a
              href={FOOTER_BTN2_LINK}
              className="mx-3 font-bold text-amber-800 hover:text-amber-700 hover:underline"
              target="_blank"
            >
              {FOOTER_BTN2_TEXT}
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className="p-3 pb-4 text-sm tracking-wider leading-tight text-center text-amber-800">
            {FOOTER_COLOPHON}
          </p>
        </div>
      </Container>
    </footer>
  );
}
