import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import PAI from "../../../StyleComponents/Overview_Styles/PAI.jsx";

const SocialMedia = ({ product, currStyle }) => {
  const url = 'www.zara.com';

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
          href={`http://pinterest.com/pin/create/link/?url=${url}&media=https://www.redhat.com/cms/managed-files/Brand_Standars-Red_Hat-_color_on-darkgray.svg?itok=OMKEYTam&description=Next%20stop%3A%20Pinterest`}
          rel="noopener"
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