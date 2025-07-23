import React from 'react';

interface Props {
  step: number;
  totalSteps: number;
  onBack?: () => void;
  onNext: () => void;
}

const FormNavigation: React.FC<Props> = ({ step, totalSteps, onBack, onNext }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
    {onBack && <button onClick={onBack}>Back</button>}
    <button onClick={onNext}>{step === totalSteps ? 'Submit' : 'Next'}</button>
  </div>
);

export default FormNavigation;
