export const getKeyFromPath = (path: string) => {
  if (!path) return;

  const texts = path.split("/");
  const len = texts.length;

  return texts[len - 1];
};
