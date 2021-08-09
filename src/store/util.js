export function appendModuleKeyPrefix(subModuleObject = {}, prefix) {
  const ret = {};
  const keywords = ['GETTER', 'MUTATION', 'ACTION'];
  keywords.forEach((keyword) => {
    ret[keyword] = {};
    if (subModuleObject[keyword]) {
      Object.keys(subModuleObject[keyword]).forEach((key) => {
        ret[keyword][key] = `${prefix}/${subModuleObject[keyword][key]}`;
      });
    }
  });
  return ret;
}

export default {
  appendModuleKeyPrefix,
};
