type BadgeProps ={
  className: string;
  text: string;
}

function Badge({className, text}: BadgeProps): JSX.Element {
  return (
    <div className={className}>
      <span>{text}</span>
    </div>
  );
}

export default Badge;
