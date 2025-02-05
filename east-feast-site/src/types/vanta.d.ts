declare module 'vanta/dist/vanta.fog.min' {
  import * as THREE from 'three';

  export interface VantaFogOptions {
    el: HTMLElement | null;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    baseColor?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    blurFactor?: number;
    speed?: number;
  }

  export interface VantaFogEffect {
    destroy: () => void;
  }

  // This is the callable function that initializes the Vanta effect.
  declare function VantaFog(options: VantaFogOptions): VantaFogEffect;

  export default VantaFog;
}
