const Chevron = ({ direction }: { direction: "left" | "right" }) => {
  if (direction === "left") {
    return (
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.11 8l1.415-1.414 4.95-4.95 1.414 1.414L6.94 8l4.95 4.95-1.414 1.414-4.95-4.95L4.111 8z"
          fill="currentColor"
        ></path>
      </svg>
    );
  }

  if (direction === "right") {
    return (
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.89 8l-1.415 1.414-4.95 4.95-1.414-1.414L9.06 8 4.11 3.05l1.414-1.414 4.95 4.95L11.889 8z"
          fill="currentColor"
        ></path>
      </svg>
    );
  }
};

export default Chevron;
