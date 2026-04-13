'use client';
import { useState } from 'react';
import Image from "next/image";

export default function Home() {
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    
    // Replace YOUR_FORM_ID with the actual ID from Formspree
    const response = await fetch("https://formspree.io/f/mqajenke", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  };
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section id="home" className="section" style={{
        position: 'relative',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url("/images/dms_gpt.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '5rem'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, color: 'white' }}>
          <span style={{ 
            background: 'var(--accent)', 
            padding: '0.4rem 1rem', 
            borderRadius: '4px', 
            fontWeight: 700, 
            fontSize: '0.9rem',
            marginBottom: '1.5rem',
            display: 'inline-block'
          }}>
            NAMASTE & WELCOME
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', color: 'white', maxWidth: '800px', marginBottom: '1.5rem' }}>
            A Bright Future for Every Child in <span style={{ color: 'var(--primary)' }}>Nepal</span>
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2.5rem', color: 'rgba(255,255,255,0.9)' }}>
            Dolphin Magic School provides a holistic, Waldorf-inspired education to marginalized children 
            in the Pharping Valley. A community beacon of hope since 2011.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://www.himalaya-development.org/de/aktiv-helfen/online-spenden/" target="_blank" className="btn btn-primary">Support Our Mission</a>
            <a href="#about" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Our Story</a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-light" style={{ background: 'var(--bg-offset)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Heart-Led Mission</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.1rem', color: 'var(--text-light)' }}>
            We believe that every child, regardless of their background, deserves a chance to learn, grow, and succeed. 
            Supported by our partners at Friends for Nepal, we offer a comprehensive support system beyond just books.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: '🎓', title: 'Free Education', desc: 'No-cost schooling for children from marginalized and underprivileged families.' },
              { icon: '🤝', title: 'Sponsorship', desc: 'Sponsorship programs covering educational and daily expenses for students.' },
              { icon: '🌱', title: 'Sustainability', desc: 'On-site biofarming providing fresh, nutritious meals and environmental education.' }
            ].map((item, i) => (
              <div key={i} className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--border-radius)', textAlign: 'left' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-light)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div style={{ position: 'relative', borderRadius: 'var(--border-radius)', overflow: 'hidden', height: '500px' }}>
              <Image src="/images/children.jpg" alt="Children at school" fill style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <span style={{ color: 'var(--primary)', fontWeight: 700 }}>OUR STORY</span>
              <h2 style={{ fontSize: '2.5rem', margin: '1rem 0 1.5rem' }}>Building Hope Since 2011</h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
                The official groundbreaking ceremony of Dolphin Magic School took place in January 2011, 
                initiated by the Austrian association "Friends for Nepal." 
              </p>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
                Founded by Tom Stuppner and local partners Suresh Basnet and Dayan Cutler, the project began with 
                a community survey covering a 14km radius to identify families in the greatest need. Today, it 
                stands as a beacon of possibility for hundreds of children.
              </p>
              <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
                During the devastating 2015 earthquake, Dolphin Magic School pivoted to become a regional 
                relief hub, providing essential supplies and spearheading the reconstruction of vital 
                local infrastructure that remains standing today.
              </p>
              <div style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary)', background: 'var(--bg-offset)' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--text)', fontWeight: 500 }}>
                  "Mein Gott in mir grüßt den Gott in dir!" - The core philosophy that drives our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure Sections */}
      <section className="section bg-light" style={{ background: 'var(--bg-offset)' }}>
        <div className="container">
          {/* Teachers Team */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 700 }}>TEACHERS TEAM</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>The Hearts in the Classroom</h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {[
                { name: 'Manisha Basnet', role: 'Principal' },
                { name: 'Keshav KC Khatri', role: 'Vice-Principal/ Math teacher' },
                { name: 'Ram Mani Raila', role: 'Social/yoga teacher' },
                { name: 'Samikshya Karki', role: 'Science Teacher' },
                { name: 'Manita Magar', role: 'Nepali Teacher' },
                { name: 'Lalita Bista', role: 'Computer teacher' },
                { name: 'Kanchhi Balami', role: 'Grade Teacher' },
                { name: 'Aayusha Thapa', role: 'Grade Teacher Assistant' },
                { name: 'Chanda Bhandari', role: 'Grade Teacher' },
                { name: 'Sadip Bahadur Khatri', role: 'English Teacher' },
                { name: 'Junu Pakhrin', role: 'Grade Teacher' },
                { name: 'Shrijana Khadka', role: 'Grade Teacher' },
                { name: 'Anaida Shrestha', role: 'Grade Teacher Assistant' },
                { name: 'Rama Silwal', role: 'Grade Teacher' },
                { name: 'Ranjana Khadka', role: 'Grade Teacher' },
                { name: 'Dilmaya Balami', role: 'Grade Teacher' },
                { name: 'Rabina Tamang', role: 'Nursery Teacher Assistant' },
                { name: 'Sunaina Magar', role: 'PG teacher' },
                { name: 'Anisha Balami', role: 'PG teacher Assistant' },
                { name: 'Sunita Gurung', role: 'Nursery Teacher' }
              ].map((staff, i) => (
                <div key={i} className="glass" style={{ 
                  padding: '1.5rem', 
                  borderRadius: 'var(--border-radius)', 
                  textAlign: 'left',
                  border: '1px solid rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem'
                }}>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--text)' }}>{staff.name}</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>{staff.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kitchen and Outdoor Team */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 700 }}>KITCHEN & OUTDOOR TEAM</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>The Hands Behind the Magic</h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {[
                { name: 'Binod Basnet', role: 'Chef' },
                { name: 'Buddha Rumba', role: 'Bus Driver/Assistant Cook' },
                { name: 'Rajesh Basnet', role: 'Assistant Driver' },
                { name: 'Nirmala Lama', role: 'supervisor/Helper' },
                { name: 'Ruku Tamang', role: 'Helper' },
                { name: 'Aina Kala Goral', role: 'Helper' },
                { name: 'Kamala Karki', role: 'Helper' },
                { name: 'Tara Basnet', role: 'Helper' },
                { name: 'Ajaya Tamang', role: 'Stationery keeper/Helper' },
                { name: 'Manbahadur Tamang', role: 'School Guard' }
              ].map((staff, i) => (
                <div key={i} className="glass" style={{ 
                  padding: '1.5rem', 
                  borderRadius: 'var(--border-radius)', 
                  textAlign: 'left',
                  border: '1px solid rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem'
                }}>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--text)' }}>{staff.name}</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>{staff.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section" style={{ background: 'var(--bg-offset)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Core Projects & Impact</h2>
            <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>Sustaining a community through localized action.</p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { title: 'The Paten Program', tag: 'Direct Support', desc: 'A fixed €45/month covers everything for a child: tuition, meals, materials, and medical care.' },
              { title: 'New School Buses', tag: 'Infrastructure', desc: 'In 2024, we added two new buses to safely transport students from the remote Lama Gaon hills.' },
              { title: 'Himalayan Healthpost', tag: 'Community', desc: 'Direct medical support integrated with the school for students and their families.' }
            ].map((project, i) => (
              <div key={i} style={{ 
                background: 'white', 
                borderRadius: 'var(--border-radius)', 
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}>
                <div style={{ padding: '2rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase' }}>{project.tag}</span>
                  <h3 style={{ margin: '0.5rem 0 1rem' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-light)' }}>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Voices of Our Global Community</h2>
            <p style={{ color: 'var(--text-light)', marginTop: '1rem', maxWidth: '700px', margin: '1rem auto 0' }}>
              Hear from the volunteers and godparents who have shared our journey and experienced the magic of Dolphin Magic School firsthand.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { 
                quote: "We received such a warm welcome! I felt at home right from the start and had the impression of being welcomed into a big family.", 
                author: "Sara", 
                role: "Volunteer from Austria" 
              },
              { 
                quote: "The children surprised me with their cooperation. Everyone was willing to learn and work concentrated. It was an amazing experience.", 
                author: "Jonas Amborn", 
                role: "Volunteer Music Teacher, Germany" 
              },
              { 
                quote: "The teachers are very open and eager to learn. The children are a joy to teach and they are very receptive to new ideas.", 
                author: "Camillia", 
                role: "Volunteer Teacher Trainer" 
              },
              { 
                quote: "Seeing the progress of my sponsored student over the years has been incredibly rewarding. The connection is deeply personal.", 
                author: "Maria S.", 
                role: "Godparent from Switzerland" 
              }
            ].map((t, i) => (
              <div key={i} className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--border-radius)', position: 'relative' }}>
                <div style={{ color: 'var(--primary)', fontSize: '3rem', position: 'absolute', top: '1rem', right: '2rem', opacity: 0.2 }}>"</div>
                <p style={{ fontStyle: 'italic', marginBottom: '2rem', color: 'var(--text)', lineHeight: '1.6', position: 'relative', zIndex: 1 }}>
                  {t.quote}
                </p>
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>{t.author}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <a href="#contact" className="btn btn-outline">Share Your Own Story</a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>The Faces Behind the Magic</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            justifyContent: 'center'
          }}>
            {[
              { 
                name: 'Tom Stuppner', 
                role: 'Chairperson of Friends for Nepal', 
                image: '/images/team/tom_new.jpg',
                position: '70% 20%',
                rotate: '0deg',
                scale: 1.4
              },
              { 
                name: 'Rewant Bhandari', 
                role: 'Chairperson of Himalayan Joy Force & Project Manager of Friends for Nepal', 
                image: '/images/team/rewant_new.jpg',
                position: 'top',
                rotate: '0deg',
                scale: 1.4
              },
              { 
                name: 'Manisha Basnet', 
                role: 'Principal of the School', 
                image: '/images/team/manisha_new.jpg',
                position: 'top',
                rotate: '0deg',
                scale: 1.4
              },
              { 
                name: 'Dayan Cutler', 
                role: 'Visionary and Supporter', 
                image: '/images/team/dayan_new.jpg',
                position: 'top',
                rotate: '0deg',
                scale: 1.4
              },
              { 
                name: 'Suresh Basnet', 
                role: "Dolphin Magic School's Management Chairperson and Visionary", 
                image: '/images/team/suresh_new.jpg',
                position: 'top',
                rotate: '0deg',
                scale: 1.4
              }
            ].map((member, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '200px', 
                  height: '200px', 
                  borderRadius: '50%', 
                  overflow: 'hidden',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  position: 'relative',
                  border: '4px solid white',
                  background: 'var(--bg-offset)'
                }}>
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    transform: `rotate(${member.rotate || '0deg'}) scale(${member.scale || 1.4})`,
                    transition: 'transform 0.3s ease'
                  }}>
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: member.position || 'center'
                      }} 
                    />
                  </div>
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{member.name}</h4>
                <p style={{ 
                  color: 'var(--primary)', 
                  fontWeight: 600, 
                  fontSize: '0.85rem', 
                  lineHeight: '1.4',
                  maxWidth: '220px',
                  margin: '0 auto'
                }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'var(--bg-offset)' }}>
        <div className="container">
          <div className="glass" style={{
            padding: '4rem',
            borderRadius: 'var(--border-radius)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem'
          }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Visit Us in Nepal</h2>
              <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
                We are located in the beautiful Pharping Valley, about an hour from Kathmandu.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary)' }}>LOCATION</h4>
                  <p>Lamagaon, Pharping, Kathmandu</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary)' }}>WHATSAPP</h4>
                  <p>+977 984-3664003</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary)' }}>EMAIL</h4>
                  <p>info@himalaya-development.org</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>FOLLOW US</h4>
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="https://www.facebook.com/dolphinmagicschool" target="_blank" style={{ color: 'var(--text)', fontWeight: 500 }}>Facebook</a>
                    <a href="https://www.youtube.com/@friendsfornepal" target="_blank" style={{ color: 'var(--text)', fontWeight: 500 }}>YouTube</a>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--border-radius)' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Extension of Support</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
                Interested in sponsorship or volunteering? Leave a message and we will get back to you namaste-style.
              </p>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" name="name" placeholder="Your Name" required style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-offset)' }} />
                <input type="email" name="email" placeholder="Your Email" required style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-offset)' }} />
                <textarea name="message" placeholder="Message" rows={4} required style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-offset)' }}></textarea>
                
                {status === 'success' ? (
                  <div style={{ 
                    padding: '1rem', 
                    background: 'rgba(34, 197, 94, 0.1)', 
                    color: 'rgb(21, 128, 61)', 
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontWeight: 600,
                    border: '1px solid rgba(34, 197, 94, 0.2)'
                  }}>
                    Namaste! Your message has been sent.
                  </div>
                ) : (
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={status === 'sending'}
                    style={{ width: '100%', opacity: status === 'sending' ? 0.7 : 1 }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                )}
                
                {status === 'error' && (
                  <p style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'center' }}>
                    Oops! There was a problem. Please try again or use WhatsApp.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <section className="section bg-light" style={{ background: 'var(--bg-offset)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ color: 'var(--primary)', fontWeight: 700 }}>MAGIC IN MOTION</span>
              <h2 style={{ fontSize: '2.5rem', margin: '1rem 0 1.5rem' }}>Experience Dolphin Magic</h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
                Our official YouTube channel showcases the daily joy and transformation at Dolphin Magic School. 
                From student stories to cultural celebrations, witness the direct impact of our global community.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://www.youtube.com/@friendsfornepal" target="_blank" className="btn btn-primary">Watch on YouTube</a>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent)', marginRight: '0.5rem' }}>★</span> Over 50+ stories shared
                </div>
              </div>
            </div>
            <div className="glass" style={{ padding: '1rem', borderRadius: 'var(--border-radius)', overflow: 'hidden' }}>
              <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: 'calc(var(--border-radius) - 10px)', overflow: 'hidden' }}>
                <iframe 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  src="https://www.youtube.com/embed/jAWBF-alGPw" 
                  title="Dolphin Magic School Intro"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--text)', color: 'white', padding: '4rem 0 2rem' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '3rem',
            marginBottom: '4rem'
          }}>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Dolphin Magic</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                A project by Friends for Nepal – Himalayan Development Aid. 
                Founded in 2011 to empower the Pharping Valley.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Explore</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Home', 'Our Story', 'Projects', 'Team', 'Contact'].map(item => (
                  <li key={item} style={{ marginBottom: '0.8rem' }}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Partner Sites</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.8rem' }}>
                  <a href="https://www.himalaya-development.org/de/" target="_blank" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Himalayan Development Aid</a>
                </li>
                <li style={{ marginBottom: '0.8rem' }}>
                  <a href="https://www.youtube.com/@friendsfornepal" target="_blank" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Official YouTube</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Support</h4>
              <a href="https://www.himalaya-development.org/de/aktiv-helfen/online-spenden/" target="_blank" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Donate Now</a>
              <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Every contribution changes a child's story.</p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
              © {new Date().getFullYear()} Dolphin Magic School. A Friends for Nepal Initiative.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
