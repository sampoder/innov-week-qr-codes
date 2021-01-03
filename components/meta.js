import Head from 'next/head'

export default ({
  name = 'Innovation Week 2021',
  title = 'Schedule of Events',
  description = 'A schedule of events and the fun that\'s coming up',
  image = 'https://cloud-cotwl6h2q.vercel.app/0screenshot_2021-01-03_at_3.30.40_pm.png',
  url = 'https://schedule.innovweek.co'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={name} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
  </Head>
)