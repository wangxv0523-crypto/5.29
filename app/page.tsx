import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'
import { Capabilities } from '@/components/capabilities'
import { RegionalAdaptation } from '@/components/regional-adaptation'
import { ExportMarkets } from '@/components/export-markets'
import { Factory } from '@/components/factory'
import { TrustStatement } from '@/components/trust-statement'
import { ContactForm } from '@/components/contact-form'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Capabilities />
        <ExportMarkets />
        <RegionalAdaptation />
        <Factory />
        <TrustStatement />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
