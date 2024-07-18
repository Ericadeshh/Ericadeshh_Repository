import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Prevent the default click behavior
    event.preventDefault();

    // Redirect to the specified link
    window.location.href = link;
  };

  return (
    <a
      href={link}
      className={styles.button}
      style={{ "--clr": "#bd8700" } as React.CSSProperties}
      onClick={handleClick}
    >
      <span className={styles["button__icon-wrapper"]}>
        <svg
          width="10"
          className={styles["button__icon-svg"]}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 15"
        >
          <path
            fill="currentColor"
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          />
        </svg>

        <svg
          className={`${styles["button__icon-svg"]} ${styles["button__icon-svg--copy"]}`}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          fill="none"
          viewBox="0 0 14 15"
        >
          <path
            fill="currentColor"
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          />
        </svg>
      </span>
      {text}
    </a>
  );
};

export default Button;