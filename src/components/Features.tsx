import React from 'react';
import { useInView } from 'react-intersection-observer';
import GradualSpacing from './GradualSpacing';

const Features: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  console.log('Features section in view:', inView);

  return (     //borderTop:"1px solid gray",borderBottom:"1px solid gray"
    <div id="section3" ref={ref} style={{ marginTop: '10vh'}}> {/* Forcing it to be out of view initially */}
      {inView && (
        <GradualSpacing duration={1} className="row g-4 py-5 row-cols-1 row-cols-lg-3 ml-10 mr-10">
          <div className="col d-flex align-items-start bg-pink-100" >
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em" fill="currentColor">
                <use xlinkHref="#bi-arrow-left-right"></use>
              </svg>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Exchange Data</h3>
              <p>You Buy and Sell data securely.<br />
                It's easy, it's fast, it's simple.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start bg-blue-100">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em" fill="currentColor">
                <use xlinkHref="#bi-lightbulb"></use>
              </svg>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">BlockChain</h3>
              <p>Your data, which you sell or buy <br /> is through Smart Contracts.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start bg-green-100">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em" fill="currentColor">
                <use xlinkHref="#bi-shield-lock"></use>
              </svg>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Security</h3>
              <p>Our platform helps you exchange data freely,<br />securely and transparently</p>
            </div>
          </div>
        </GradualSpacing>
      )}
    </div>
  );
};

export default Features;


