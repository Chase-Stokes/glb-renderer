import Link from 'next/link'
import Layout from '../components/Layout'
import ThreeJsRenderer from '../components/Renderer'

const IndexPage = () => (
  <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust the height as needed
    width: '100vw', // Adjust the width as needed
  }}
>
    <ThreeJsRenderer />
</div>
)

export default IndexPage
