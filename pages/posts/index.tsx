
import { NextPage } from 'next'
import Head from 'next/head'

import { API_URL } from '../../src/config'
// import API_ROUTES from '../../src/constants/APIRoutes'
import MainLayout from '../../src/layouts/MainLayout'
import Post from '../../src/models/Post'
// import request from '../../src/services/request'

interface PostsProps {
  posts: Post[]
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
  //   const [posts, setPosts] = useState<Post[] | null>(null)

  //   useEffect(() => {
  //     const load = async (): Promise<void> => {
  //       const posts = await request<Post[]>(API_ROUTES.posts)
  //       setPosts(posts)
  //     }

  //     void load()
  //   }, [])

  return (
        <MainLayout>
            <Head>
                <title>Блог | {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>
            <h1>Блог</h1>
            {posts?.map((post) => <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>)}
        </MainLayout>
  )
}

// export const getServerSideProps = async () => {
//   const posts = await request<Post[]>(API_ROUTES.posts)

//   return {
//     props: {
//       posts
//     }
//   }
// }

// // should write url directly
// export const getStaticProps = async () => {
//   const response = await fetch(API_URL + '/posts')
//   const posts = await response.json()

//   return {
//     props: {
//       posts
//     },
//     revalidate: 10
//   }
// }

export default Posts
