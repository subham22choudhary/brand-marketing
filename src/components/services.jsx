import React from 'react';
import './servicescss.css';

function DigitalSolutions() {
    return (
        <section className="bx1">
            <h2 className="hd1">Our Digital Solutions</h2>
            <p className="txt1">
                We offer a comprehensive suite of digital services designed to help your business thrive in the digital landscape.
            </p>

            <div className="gr1">
                {solutions.map((item, index) => (
                    <div className="crd1" key={index}>
                        <div className="icn1">{item.icon}</div>
                        <h3 className="hd2">{item.title}</h3>
                        <p className="tag1">{item.tag}</p>
                        <p className="desc1">{item.desc}</p>
                        <ul className="lst1">
                            {item.points.map((point, i) => (
                                <li key={i} className="lst-itm1">✔ {point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

const solutions = [
    {
        icon: "🌐",
        title: "Website Development",
        tag: "Featured Service",
        desc: "Professional, responsive websites built with modern technologies to showcase your brand and drive business growth.",
        points: [
            "Mobile-responsive design",
            "SEO-optimized structure",
            "Fast loading speeds",
            "User-friendly interface",
            "Content management system",
            "Analytics integration"
        ]
    },
    {
        icon: "🎯",
        title: "SEO & Branding",
        tag: "Build Your Brand Authority",
        desc: "Comprehensive branding and search engine optimization strategies to increase your online visibility.",
        points: [
            "Brand identity design",
            "Keyword research & optimization",
            "Content strategy",
            "Local SEO setup",
            "Brand guidelines creation",
            "Competitor analysis"
        ]
    },
    {
        icon: "📊",
        title: "Digital Marketing Strategy",
        tag: "Data-Driven Growth Plans",
        desc: "Strategic marketing campaigns designed to reach your target audience and maximize your ROI.",
        points: [
            "Social media marketing",
            "Email marketing campaigns",
            "Content marketing strategy",
            "Marketing automation",
            "Performance tracking",
            "A/B testing optimization"
        ]
    },
    {
        icon: "💰",
        title: "Paid Advertising",
        tag: "Targeted Ad Campaigns",
        desc: "Professional management of Google Ads, Facebook Ads, and other paid advertising platforms.",
        points: [
            "Google Ads management",
            "Social media advertising",
            "Campaign optimization",
            "Audience targeting",
            "Ad creative development",
            "ROI tracking & reporting"
        ]
    },
    {
        icon: "⚡",
        title: "Software & CRM Integration",
        tag: "Streamline Your Operations",
        desc: "Custom software solutions and CRM integrations to automate your processes.",
        points: [
            "CRM system setup",
            "Workflow automation",
            "Third-party integrations",
            "Database management",
            "API development",
            "Training & support"
        ]
    }
];

export default DigitalSolutions;
