interface P {
  onClear: () => void;
  isSubmitting: boolean;
}

export const HomeButtons = ({ onClear, isSubmitting }: P) => {
  return (
    <div className="buttons">
      <div className="register-input-button">
        <button className="buttonClass" type="submit" disabled={isSubmitting}>
          Start
        </button>
      </div>
      <div
        className="register-input-button"
        onClick={() => {
          onClear();
        }}
      >
        <button className="buttonClass" type="button">
          Clear
        </button>
      </div>
    </div>
  );
};
