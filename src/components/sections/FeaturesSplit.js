import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import { Link } from 'react-router-dom';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Products and services'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" id="Product">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="text-xxs fw-600 tt-u mb-8">
                  Products
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                  On Power - Home Automation
                  </h3>
                <p className="m-0">
                  Our Home automation segment which is developed on advance technology to turn your exsiting home into a new age smart home
                </p>
              </div>
              <Link to='/'>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                    <Image
                      src={require('./../../assets/images/OnPowerLogo.png')}
                      alt="On Power"
                      width={528}
                      height={396} />
                </div>
              </Link>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                  Habit Box
                  </h3>
                <p className="m-0">
                  A unique reminding system to increase your productivity. It gamifies your daily habits and helps you keep a track of it. 
                </p>
              </div>
              <Link to='/'>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                    <Image
                      src={require('./../../assets/images/BlackHBlogo.png')}
                      alt="HABIT BOX"
                      width={528}
                      height={396} />
                </div>
              </Link>
            </div>
            
            <div className="text-xxs fw-600 tt-u mb-8">
                  Services
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                  Solution Studio
                  </h3>
                <p className="m-0">
                  We provide a complete end to end solution for Hardware and Software. 
                </p>
              </div>
              <Link to='/'>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                    <Image
                      src={require('./../../assets/images/solutionStudio.svg')}
                      alt="HABIT BOX"
                      width={456}
                      height={256} />
                </div>
              </Link>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                  Design Studio
                  </h3>
                <p className="m-0">
                  We help business to turn into a brand. We make logos, posters and complete branding kit.
                </p>
              </div>
              <Link to='/'>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('./../../assets/images/DesignStudio.svg')}
                    alt="Design Studio"
                    width={528}
                    height={396} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;