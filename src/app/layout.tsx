import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dolphin Magic School | Empowering Underprivileged Children in Nepal",
  description: "Dolphin Magic School provides free quality education to marginalized children in Pharping, Nepal, supported by Friends for Nepal.",
  keywords: ["Nepal", "Education", "NGO", "Dolphin Magic School", "Free School", "Pharping", "Student Sponsorship"],
  openGraph: {
    title: "Dolphin Magic School",
    description: "Empowering children in the Pharping Valley through education.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <nav className="glass" style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          padding: '1rem 0'
        }}>
          <div className="container" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ fontWeight: 800, fontSize: '1.5rem', fontFamily: 'Outfit' }}>
              <span style={{ color: 'var(--primary)' }}>DOLPHIN</span> MAGIC
            </div>
            <div style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
              <a href="#home">Home</a>
              <a href="#about">Our Story</a>
              <a href="#projects">Projects</a>
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
            </div>
            <a href="https://www.himalaya-development.org/de/aktiv-helfen/online-spenden/" target="_blank" className="btn btn-primary">Support Us</a>
          </div>
        </nav>
        <main>{children}</main>
        <footer style={{ 
          background: 'var(--bg-offset)', 
          padding: '4rem 0',
          borderTop: '1px solid var(--border)'
        }}>
          <div className="container" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem'
          }}>
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Dolphin Magic School</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                Groundbreaking in 2011, we are dedicated to providing a bright future for 
                marginalized children in the Pharping Valley.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://www.facebook.com/dolphinmagicschool" target="_blank" style={{ 
                  color: '#1877F2', 
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  Facebook
                </a>
                <a href="https://www.youtube.com/@friendsfornepal" target="_blank" style={{ 
                  color: '#FF0000', 
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  YouTube
                </a>
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem' }}>Our NGO Partner</h4>
              <p style={{ color: 'var(--text-light)' }}>
                Friends for Nepal – Himalayan Development Aid (Austria)
              </p>
              <a href="https://himalaya-development.org" target="_blank" style={{ color: 'var(--primary)', marginTop: '1rem', display: 'inline-block' }}>
                Visit NGO Website →
              </a>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem' }}>Link Items</h4>
              <ul style={{ color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><a href="#about">About Us</a></li>
                <li><a href="#projects">Recent Projects</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem' }}>Namaste!</h4>
              <p style={{ color: 'var(--text-light)' }}>
                Lamagaon, Pharping<br />
                Kathmandu, Nepal<br />
                WhatsApp: +977 984-3664003
              </p>
            </div>
          </div>
          <div className="container" style={{ 
            marginTop: '3rem', 
            paddingTop: '2rem', 
            borderTop: '1px solid var(--border)',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: 'var(--text-light)'
          }}>
            © {new Date().getFullYear()} Dolphin Magic School. Extends a helping hand to the world.
          </div>
        </footer>
      </body>
    </html>
  );
}
