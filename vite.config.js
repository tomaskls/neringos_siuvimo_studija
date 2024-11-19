import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  transformIndexHtml: {
    transform: (html) => {
      return html.replace(/<\/head>/, `
        <!-- Google Tag Manager (GTM) -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id=GTM-KKX37SJG'+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KKX37SJG');</script>
        <!-- End Google Tag Manager -->
        </head>
      `);
    },
  },
})