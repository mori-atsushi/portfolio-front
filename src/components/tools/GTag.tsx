import { useRouter } from 'next/dist/client/router'
import Script from 'next/script'
import { useEffect } from 'react'
import { GA_TRACKING_ID, pageview } from 'src/helper/gtag'

const GTag: React.FC = () => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Script defer src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
      <Script id="ga" defer strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  )
}

export default GTag
