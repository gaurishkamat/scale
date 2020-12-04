/**
 * @see https://www.youtube.com/watch?v=9-6CKCz58A8
 */
export function animateTo(
  element: HTMLElement,
  keyframes: Keyframe,
  options?: KeyframeAnimationOptions
) {
  const anim = element.animate(keyframes, { ...options, fill: 'both' });
  anim.addEventListener('finish', () => {
    // @ts-ignore
    anim.commitStyles();
    anim.cancel();
  });

  return anim;
}
