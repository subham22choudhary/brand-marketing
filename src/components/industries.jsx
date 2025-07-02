import React from 'react';
import './Industries.css';

function SolutionsAndIndustries() {
    return (
        <div className="s1">
            {/* What We Do */}
            <section className="s2">
                <h2 className="h1">✨ What We Do</h2>
                <p className="p1">
                    From website development to digital marketing, we offer end-to-end solutions to grow your online presence and sales.
                </p>
                <div className="g1">
                    {whatWeDo.map((item, idx) => (
                        <div key={idx} className="c1">
                            <div className="i1">{item.icon}</div>
                            <h3 className="h2">{item.title}</h3>
                            <p className="p2">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="btn-wrap">
                    <button className="b1">Explore All Services</button>
                </div>
            </section>

            {/* Who We Work With */}
            <section className="s3">
                <h2 className="h1">🌍 Who We Work With</h2>
                <p className="p1">
                    We tailor every project to the unique needs of your industry—whether you're a creator, startup, or enterprise.
                </p>
                <div className="g1">
                    {industries.map((item, idx) => (
                        <div key={idx} className="c1">
                            <div className="i1">{item.icon}</div>
                            <h3 className="h2">{item.title}</h3>
                            <p className="p2">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="btn-wrap">
                    <button className="b2">View Industry Solutions</button>
                </div>
            </section>
        </div>
    );
}

const whatWeDo = [
    {
        icon: "💻",
        title: "Website Development",
        desc: "Custom, fast, SEO-ready websites that convert visitors into customers."
    },
    {
        icon: "🔍",
        title: "SEO & Branding",
        desc: "Rank higher on Google and build a strong, memorable brand identity."
    },
    {
        icon: "📈",
        title: "Digital Marketing",
        desc: "Smart campaigns designed to bring you more qualified leads and traffic."
    },
    {
        icon: "⚡",
        title: "Paid Ads (Google, Meta)",
        desc: "Targeted advertising campaigns that deliver measurable ROI."
    },
    {
        icon: "🛠️",
        title: "SaaS & CRM Integration",
        desc: "Automate your tools and streamline your growth processes."
    }
];

const industries = [
    {
        icon: "⚡",
        title: "SaaS Companies",
        desc: "For scale, automation, and user acquisition."
    },
    {
        icon: "🏬",
        title: "E-Commerce Brands",
        desc: "Optimized for sales and performance."
    },
    {
        icon: "🧑‍🏫",
        title: "Coaches & Consultants",
        desc: "Built for personal branding and lead generation."
    },
    {
        icon: "🛍️",
        title: "Local Businesses",
        desc: "Designed for visibility and walk-ins."
    },
    {
        icon: "⭐",
        title: "Influencers & Creators",
        desc: "Turn your following into a thriving business."
    }
];

export default SolutionsAndIndustries;
