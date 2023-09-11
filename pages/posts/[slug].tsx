import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import Container from '../../components/container'
import Header from '../../components/header'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header-overlay'
import MoreStories from '../../components/more-stories'
import PostMeta from '../../components/post-meta'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import GA from '../../components/seo-ga'
import PostTitle from '../../components/post-title'
import Tags from '../../components/tags'
import ContactForm from '../../components/form-contact'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import { SITE_TITLE } from '../../lib/constants'

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${post.title} | ${SITE_TITLE}`}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <GA />
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
              />
              <PostBody content={post.content} />

              <ContactForm />

              <PostMeta 
                  date={post.date}
                  author={post.author}
                  categories={post.categories}
              />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}
