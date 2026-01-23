interface TwoColTitleProps {
    topTitle?: string;
    title?: string;
    titleColor?: string;
    description?: string;
}
export default function TwoColTitle({ topTitle, title, description, titleColor }: TwoColTitleProps) {
    return (
        <section className="pricing-section">
            <div className="pricing-container">
                <div className="pricing-content">

                    {/* Left Column: Heading */}
                    <div className="left-column">
                        <div className="label-wrapper">
                            <span className="pricing-label">
                                {topTitle}
                            </span>
                        </div>

                        <h2 className="pricing-heading">
                            {title} <span className="heading-highlight">{titleColor}</span>
                        </h2>
                    </div>

                    <div className="right-column">
                        <p className="pricing-description">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
