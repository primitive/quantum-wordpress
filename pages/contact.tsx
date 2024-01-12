import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import PageHeader from '../components/page-header'
import Layout from '../components/layout'
import ContactForm from '../components/form-contact'
import { getAllPostsForHome } from '../lib/api'
import { SITE_TITLE } from '../lib/constants'

export default function Contact({ allPosts: { edges }, preview }) {
  const morePosts = edges.slice(1)

  return (
    <Layout preview={preview}>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <Container>
        <PageHeader />
        <div className="lg:mb-20"></div>
        <ContactForm />
        <div className="mb-20"></div>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
