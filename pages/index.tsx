import Link from 'next/link'
import Layout from '../components/Layout'
import ThreeJsRenderer from '../components/Renderer'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <ThreeJsRenderer />
  </Layout>
)

export default IndexPage
