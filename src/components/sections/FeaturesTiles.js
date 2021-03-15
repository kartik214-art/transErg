import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'What we do?',
    paragraph: 'We develop end to end IOT solutions as per your need. We provide a complete customized hardware and software solutions'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id='1' className="container" id="WhatWeDo">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <h1 className="mt-0 mb-16 center-content reveal-from-bottom" data-reveal-delay="200">
          <Image
                  src={require('./../../assets/images/30495.svg')}
                  alt="Solution Image"
                  width={528}
                  height={396} />
          </h1>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;