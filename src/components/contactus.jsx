import React from 'react';
import './contact.css';

function ConsultationBanner() {
    return (
        <section className="cb1">
            <div className="cb2">
                <h2 className="cb3">📣 Still unsure about what you need?</h2>
                <p className="cb4">
                    Don't worry! We're here to help you figure it out. Let's have a conversation about your goals and find the perfect solution together.
                </p>

                <div className="cb5">
                    <button className="cb6">
                        <span className="cb7">📅</span>
                        Book a Free Consultation
                        <span className="cb8">→</span>
                    </button>
                    <p className="cb9">👉 No commitment • 30 minutes • Completely free</p>
                </div>

                <div className="cb10">
                    <div className="cb11">
                        <div className="cb12">💡</div>
                        <h4 className="cb13">Strategy Discussion</h4>
                        <p className="cb14">Talk through your ideas and goals</p>
                    </div>

                    <div className="cb11">
                        <div className="cb12">🎯</div>
                        <h4 className="cb13">Tailored Solutions</h4>
                        <p className="cb14">Get recommendations that fit your needs</p>
                    </div>

                    <div className="cb11">
                        <div className="cb12">🚀</div>
                        <h4 className="cb13">Clear Next Steps</h4>
                        <p className="cb14">Leave with a plan of action</p>
                    </div>
                </div>


            </div>

            <>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfbOnojQzXMCAFCGi_D2s5_vbAdxhRh7yFKHeTTfCCrfUCmLw/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </>
        </section>


    );
}

export default ConsultationBanner;
