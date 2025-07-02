import React from 'react';
import './myhome.css';

function Home() {
    return (
        <div className="hm1">

            {/* HERO */}
            <section className="hm2">
                <div className="hm3">
                    <h1 className="hm4">🚀 Digital Growth Starts Here</h1>
                    <p className="hm5">We help businesses and creators build, market, and scale with powerful online solutions.</p>
                    <button className="hm6">Let's Work Together</button>
                </div>
            </section>

            {/* ABOUT SNAPSHOT */}
            <section className="hm7">
                <h2 className="hm8">💡 Who We Are</h2>
                <p className="hm9">
                    We're a digital solutions studio focused on results — blending design, development, and marketing for real business outcomes.
                </p>
            </section>

            {/* SERVICES PREVIEW */}
            <section className="hm15">
                <h2 className="hm8">🛠️ Our Expertise</h2>
                <p className="hm9">Here’s a glimpse at what we help you with:</p>
                <div className="hm10">
                    {services.slice(0, 3).map((s, i) => (
                        <div className="hm11" key={i}>
                            <div className="hm12">{s.icon}</div>
                            <h3 className="hm13">{s.title}</h3>
                            <p className="hm14">{s.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="btn-wrap">
                    <a href="/services" className="hm-link">Explore All Services →</a>
                </div>
            </section>

            {/* INDUSTRIES PREVIEW */}
            <section className="hm15">
                <h2 className="hm8">🌍 Who We Work With</h2>
                <p className="hm9">Industries we serve, tailored to scale your unique needs.</p>
                <div className="hm10 hm-mini">
                    {industries.slice(0, 3).map((i, x) => (
                        <div className="hm11" key={x}>
                            <div className="hm12">{i.icon}</div>
                            <h3 className="hm13">{i.title}</h3>
                        </div>
                    ))}
                </div>
                <div className="btn-wrap">
                    <a href="/industries" className="hm-link">View Industry Solutions →</a>
                </div>
            </section>

            {/* CONSULTATION CTA */}
            <section className="hm16">
                <h2 className="hm17">📣 Not sure where to start?</h2>
                <p className="hm18">Book a free 30-minute call and let’s chart your growth path together.</p>
                <button className="hm6">📅 Free Consultation</button>
            </section>

        </div>
    );
}

const services = [
    { icon: "💻", title: "Website Development", desc: "Modern, SEO-optimized websites built to convert." },
    { icon: "🔍", title: "SEO & Branding", desc: "Stand out and get found online with expert SEO & brand strategy." },
    { icon: "📈", title: "Digital Marketing", desc: "Data-driven campaigns for lead generation and visibility." },
    { icon: "⚡", title: "Paid Ads", desc: "Scalable Google and Meta ad solutions to drive traffic." },
    { icon: "🛠️", title: "CRM Integration", desc: "Automate and scale your backend operations." }
];

const industries = [
    { icon: "⚡", title: "SaaS Companies" },
    { icon: "🏬", title: "E-Commerce Brands" },
    { icon: "🧑‍🏫", title: "Coaches & Consultants" },
    { icon: "🛍️", title: "Local Businesses" },
    { icon: "⭐", title: "Influencers & Creators" }
];

export default Home;
