import Banner from './banner'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Banner preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
