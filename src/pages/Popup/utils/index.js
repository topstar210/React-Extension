export const uuid = () => {
  return new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
}