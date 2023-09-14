import React from "react";
import classnames from "classnames";

export default function Card({ icon, iconBackgroundColor, children, className, ...rest }) {
  const allClasses = classnames("card", className);

  const defaultIcon = <img src={`./sources/cloud_upload.svg`} alt={`cloud upload Icon`} />;

  return (
    <div className={allClasses} {...rest}>
      <div className="card-icon" style={{ backgroundColor: iconBackgroundColor }}>
        {icon || defaultIcon}
      </div>
      <div>{children}</div>
    </div>
  );
}
