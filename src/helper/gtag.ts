export const GA_TRACKING_ID = 'G-QKVPCM0WGF'

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
}

export const outbound = (url: String, callback?: () => void) => {
  window.gtag('event', 'click', {
    'event_category': 'outbound',
    'event_label': url,
    'transport_type': 'beacon',
    'event_callback': callback
  })
}
