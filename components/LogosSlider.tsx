import ExportableImage from './ExportableImage'

import ba_agency from '../assets/images/home/partners/ba-agency-logo.png'
import catch_bangladesh from '../assets/images/home/partners/catch-bangladesh-logo.png'
import new_vision from '../assets/images/home/partners/new-vision-logo.png'
import skylane_group from '../assets/images/home/partners/skylane-group-logo.png'
import london_intl_school from '../assets/images/home/partners/london-intl-logo.png'

const LogosSlider: React.FC = () => {

    return (
        <div className="slider container rounded-5">
            <div className="slide-track py-5">
                <div className="slide">
                    <ExportableImage
                        placeholder="blur"
                        loading="lazy"
                        src={ba_agency}
                        alt="rmg"
                        className="img-fluid"
                    />
                </div>
                <div className="slide">
                    <ExportableImage
                        placeholder="blur"
                        loading="lazy"
                        src={catch_bangladesh}
                        alt="rmg"
                        className="img-fluid"
                    />
                </div>
                <div className="slide">
                    <ExportableImage
                        placeholder="blur"
                        loading="lazy"
                        src={skylane_group}
                        alt="rmg"
                        className="img-fluid"
                    />
                </div>
                <div className="slide">
                    <ExportableImage
                        placeholder="blur"
                        loading="lazy"
                        src={new_vision}
                        alt="rmg"
                        className="img-fluid"
                    />
                </div>
                <div className="slide">
                    <ExportableImage
                        placeholder="blur"
                        loading="lazy"
                        src={london_intl_school}
                        alt="rmg"
                        className="img-fluid"
                    />
                </div>
                <div className="slide">
                    <ExportableImage
                        placeholder="blur"
                        loading="lazy"
                        src={ba_agency}
                        alt="rmg"
                        className="img-fluid"
                    />
                </div>
                <div className="slide">
                    <ExportableImage
                        placeholder="blur"
                        loading="lazy"
                        src={catch_bangladesh}
                        alt="rmg"
                        className="img-fluid"
                    />
                </div>
                <div className="slide">
                    <ExportableImage
                        placeholder="blur"
                        loading="lazy"
                        src={skylane_group}
                        alt="rmg"
                        className="img-fluid"
                    />
                </div>
                <div className="slide">
                    <ExportableImage
                        placeholder="blur"
                        loading="lazy"
                        src={new_vision}
                        alt="rmg"
                        className="img-fluid"
                    />
                </div>
                <div className="slide">
                    <ExportableImage
                        placeholder="blur"
                        loading="lazy"
                        src={london_intl_school}
                        alt="rmg"
                        className="img-fluid"
                    />
                </div>
                <div className="slide">
                    <ExportableImage
                        placeholder="blur"
                        loading="lazy"
                        src={ba_agency}
                        alt="rmg"
                        className="img-fluid"
                    />
                </div>
                <div className="slide">
                    <ExportableImage
                        placeholder="blur"
                        loading="lazy"
                        src={catch_bangladesh}
                        alt="rmg"
                        className="img-fluid"
                    />
                </div>
                <div className="slide">
                    <ExportableImage
                        placeholder="blur"
                        loading="lazy"
                        src={skylane_group}
                        alt="rmg"
                        className="img-fluid"
                    />
                </div>
                <div className="slide">
                    <ExportableImage
                        placeholder="blur"
                        loading="lazy"
                        src={new_vision}
                        alt="rmg"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
};

export default LogosSlider;