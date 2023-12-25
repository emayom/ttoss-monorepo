/**
 * 🚧 구형 브라우저에서 사용 시 support 확인 필요!  
 * [css-cascade-layers](https://caniuse.com/css-cascade-layers)
 * [@layer#browser_compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer#browser_compatibility)
 * */
import { layer } from '@vanilla-extract/css';

export const reset = layer('reset');
