import React from "react";

import { THEME_DOCS_URL } from "../../../../lib/constants";

import "./index.scss";

export const PreviewNotice = () => (
  <div className="preview-notice" role="note">
    <p className="preview-notice__text">
      Firefox has a new look. This preview still shows the previous design, so
      your theme may look slightly different in Firefox.{" "}
      <a
        className="preview-notice__link"
        href={THEME_DOCS_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more about themes
      </a>
    </p>
  </div>
);

export default PreviewNotice;
