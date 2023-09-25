import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../components/container";
import Header from "../components/header";
import PostBody from "../components/post-body";
import PostHeader from "../components/post-header-overlay";
import MoreStories from "../components/more-stories";
import PostMeta from "../components/post-meta";
import SectionSeparator from "../components/section-separator";
import Layout from "../components/layout";
import GA from "../components/seo-ga";
import PostTitle from "../components/post-title";
import Tags from "../components/tags";
import ContactForm from "../components/form-contact";
// import { getPageByURI, getAllPostsWithSlug, getPageAndMorePosts } from '../lib/api'
import { getAllPagesWithSlugs, getPageBySlug } from "../lib/api";
import { SITE_TITLE } from "../lib/constants";

export default function Page(page) {
  // export default function Page({ page, posts, preview }) {
  const router = useRouter();
  // const morePosts = posts?.edges

  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const preview = false;

  console.log("page", page);

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
                <title>{`${page.title} / ${SITE_TITLE}`}</title>
                <meta
                  property="og:image"
                  content={page.featuredImage?.node.sourceUrl}
                />
              </Head>
              <GA />
              <PostHeader title={page.title} coverImage={page.featuredImage} />
              <PostBody content={page.content} />

              <ContactForm />

              {/* <PostMeta 
                  date={page.date}
                  author={page.author}
                  categories={page.categories}
              /> */}
              <footer>
                {/* {page.tags.edges.length > 0 && <Tags tags={page.tags} />} */}
              </footer>
            </article>

            <SectionSeparator />
            {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          </>
        )}
      </Container>
    </Layout>
  );
}

// ADV. > needs refactoring
// export default function Page({ page, posts, preview }) {

// const router = useRouter()
// const morePosts = posts?.edges

//   if (!router.isFallback && !page?.slug) {
//     return <ErrorPage statusCode={404} />
//   }

//   return (
//     <Layout preview={preview}>
//       <Container>
//         <Header />
//         {router.isFallback ? (
//           <PostTitle>Loading…</PostTitle>
//         ) : (
//           <>
//             <article>
//               <Head>
//                 <title>
//                   {`${page.title} | ${SITE_TITLE}`}
//                 </title>
//                 <meta
//                   property="og:image"
//                   content={page.featuredImage?.node.sourceUrl}
//                 />
//               </Head>
//               <GA />
//               <PostHeader
//                 title={page.title}
//                 coverImage={page.featuredImage}
//               />
//               <PostBody content={page.content} />

//               <ContactForm />

//               <PostMeta
//                   date={page.date}
//                   author={page.author}
//                   categories={page.categories}
//               />
//               <footer>
//                 {page.tags.edges.length > 0 && <Tags tags={page.tags} />}
//               </footer>
//             </article>

//             <SectionSeparator />
//             {morePosts.length > 0 && <MoreStories posts={morePosts} />}
//           </>
//         )}
//       </Container>
//     </Layout>
//   )
// }

// BASICS > working
export async function getStaticProps({ params }) {
  const page = await getPageBySlug(params.slug);
  return { props: page };
}

// ADV. > needs refactoring
// export const getStaticProps: GetStaticProps = async ({
//   params,
//   preview = false,
//   previewData,
// }) => {
//   const data = await getPageAndMorePosts(params?.slug, preview, previewData)

//   return {
//     props: {
//       preview,
//       page: data.page,
//       posts: data.posts,
//     },
//     revalidate: 10,
//   }
// }

// BASICS > working
export async function getStaticPaths() {
  const pagesWithSlugs = await getAllPagesWithSlugs();

  console.log("1", pagesWithSlugs.edges);

  // sk-dev: workaround filter out the blog posts page

  const pagesWithSlugs2 = pagesWithSlugs.edges.filter(function (obj) {
    return obj.node.slug !== "blog";
  });

  console.log("2", pagesWithSlugs2);

  return {
    // paths: pagesWithSlugs.edges.map(({ node }) => `/${node.slug}`) || [],
    paths: pagesWithSlugs2.map(({ node }) => `/${node.slug}`) || [],
    fallback: false,
  };
}

// ADV. > needs refactoring
// export const getStaticPaths: GetStaticPaths = async () => {
//   const allPosts = await getAllPostsWithSlug()
//   //const allPosts = await getPageByURI()

//   return {
//     paths: allPosts.edges.map(({ node }) => `/${node.slug}`) || [],
//     fallback: true,
//   }
// }
