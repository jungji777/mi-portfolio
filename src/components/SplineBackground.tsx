import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Spline 
        scene="https://prod.spline.design/EaRPY1WC7rS9rGKi/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}