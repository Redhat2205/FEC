import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import PAI from "../../../StyleComponents/Overview_Styles/PAI.jsx";

const SocialMedia = ({ product, currStyle }) => {
  const url = 'www.ourURL.com';

  if (product.name !== undefined) {
    return (
      <PAI.SocialMedia>
        Share on
        <a
          type="button"
          role="button"
          title="Share on facebook"
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          rel="noopener"
          style={{ color: 'grey' }}
        >
          <FontAwesomeIcon
            icon={faFacebookSquare}
            style={{ position: 'relative', left: '20%' }}
          />
        </a>
        <a
          type="button"
          role="button"
          title="Share on twitter"
          href={`https://twitter.com/intent/tweet?url=${url}`}
          rel="noopener"
          style={{ color: 'grey' }}
        >
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ position: 'relative', left: '40%' }}
          />
        </a>
        <a
          type="button"
          role="button"
          title="Share on pinterest"
          href={`http://pinterest.com/pin/create/link/?url=${url}&media=https://www.kindpng.com/picc/m/31-310489_six-thinking-hats-red-hd-png-download.png`}
          rel="noopener"
          style={{ color: 'grey' }}
        >
          <FontAwesomeIcon
            icon={faPinterest}
            style={{ position: 'relative', left: '60%' }}
          />
        </a>
      </PAI.SocialMedia>
    );
  }
  return (
    <PAI.SocialMedia>
      loading...
    </PAI.SocialMedia>
  );
};

export default SocialMedia;