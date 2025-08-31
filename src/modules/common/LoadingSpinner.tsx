const LoadingSpinner = ({ color }: { color?: string }) => (
  <div className="flex justify-center">
    <div className={`animate-spin rounded-full h-5 w-5 border-b-2 border-${color}-600`}></div>
  </div>
);

export default LoadingSpinner;
