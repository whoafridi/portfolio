import Head from 'next/head'

import Layout from '../components/_Layout'
import SITEMAP from '../components/SITEMAP'

const Page404: React.FC = () => (
  <>
    <Head>
      <title>Not Found | RoseTech Solutions LTD.</title>
      <link rel='canonical' href={`https://${SITEMAP.host}/404`} />
    </Head>
    <section className='py-5 my-5'>
      <div className='container my-5'>
        <h2>Page Not Found</h2>
      </div>
    </section>
  </>
)

Page404.Layout = Layout

export default Page404
