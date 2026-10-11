type ProgressBarProps = {
  className: string;
  label: string;
  max: number;
  value: number;
};

export default function ProgressBar({
  className,
  label,
  max,
  value,
}: ProgressBarProps) {
  const safeMax = Math.max(max, 1);
  const safeValue = Math.min(Math.max(value, 0), safeMax);
  const percentage = (safeValue / safeMax) * 100;

  return (
    <div
      aria-label={label}
      aria-valuemax={safeMax}
      aria-valuemin={0}
      aria-valuenow={safeValue}
      className={className}
      role="progressbar"
    >
      <i style={{ width: `${percentage}%` }} />
    </div>
  );
}
