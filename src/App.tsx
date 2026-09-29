import { AppShell } from './components/AppShell'
import { HomePage } from './pages/HomePage'
import { CareerPage } from './pages/CareerPage'
import { PricingPage } from './pages/PricingPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Route, Routes } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  return (
    <AppShell>
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppShell>
  )
}