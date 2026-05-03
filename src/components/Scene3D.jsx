import './Scene3D.css';

/**
 * Fixed decorative layer: perspective grid, gradient mesh, floating orbs.
 * Pointer-events none — content stays interactive above (z-index in App.css).
 */
export function Scene3D() {
  return (
    <div className="scene-3d" aria-hidden>
      <div className="scene-3d__noise" />
      <div className="scene-3d__mesh" />
      <div className="scene-3d__grid-wrap">
        <div className="scene-3d__grid" />
      </div>
      <div className="scene-3d__orb scene-3d__orb--a" />
      <div className="scene-3d__orb scene-3d__orb--b" />
      <div className="scene-3d__orb scene-3d__orb--c" />
      <div className="scene-3d__ring scene-3d__ring--1" />
      <div className="scene-3d__ring scene-3d__ring--2" />
    </div>
  );
}
