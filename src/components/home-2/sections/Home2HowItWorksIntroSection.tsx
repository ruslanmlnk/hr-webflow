import { webflowStyles } from "../styles";

export default function Home2HowItWorksIntroSection() {
    return (
        <section className="section how-it-works" style={{ overflow: 'visible' }}>
            <div className="w-layout-blockcontainer base-container w-container">
                <div className="center-how-it-works-wrapper" style={{ overflow: 'visible', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h6 data-w-id="78b1b3e7-47e2-8506-03d6-8fe5cb6336b3" style={webflowStyles.opacity0} className="primary-title">WHY CHOOSE US</h6>
                    <h3 data-w-id="78b1b3e7-47e2-8506-03d6-8fe5cb6336b5" style={webflowStyles.opacity0} className="medium-title">
                        Why companies trust us <span className="grey-text">with their hiring</span>
                    </h3>
                    <p data-w-id="78b1b3e7-47e2-8506-03d6-8fe5cb6336b7" style={webflowStyles.opacity0} className="short-paragraph center">Reliable recruitment focused on quality, speed, and results</p>
                    <img src="/allLines.svg" loading="lazy" alt="lines" className="how-it-works-lines" />
                </div>
            </div>
        </section>
    );
}
