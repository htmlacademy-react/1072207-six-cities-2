type BadgePremiumProps={
  blockName: 'place-card' | 'offer';
}

function BadgePremium({blockName}: BadgePremiumProps): JSX.Element {
  return (
    <div className={`${blockName}__mark`}><span>Premium</span></div>
  );
}

export default BadgePremium;
