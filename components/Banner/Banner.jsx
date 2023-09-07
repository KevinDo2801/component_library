import React from "react";
import classnames from "classnames";

export default function Banner({ children, className, status, ...rest }) {
  let statusClass = status && `banner-${status}`;
  const allClasses = classnames("banner", statusClass, className);

  let icon = <img src={`./sources/${status}.svg`} alt={`${status} Icon`} />;

  return (
    <div className={allClasses} {...rest}>
      {icon}
      <div>{children}</div>
    </div>
  );
}
