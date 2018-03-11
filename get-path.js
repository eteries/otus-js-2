const getPath = node => {
  if (!node || !node.nodeType) return null;

  let result = '';
  const isUnique = path => document.querySelectorAll(path).length === 1;
  const getIndexAmongSiblings = node => {
    const children = [...node.parentNode.children];
    // If there are no siblings with the same tag name, we don't need index
    if (children.filter(child => child.tagName === node.tagName).length === 1) {
      return -1;
    }
    return children.indexOf(node);
  };

  // Looping to the top, until our selector is unique
  while (node.parentNode !== null) {
    const parent = node.parentNode;
    const index = getIndexAmongSiblings(node);

    // Write the current tag into the result string with an optional :nth-child index
    result = (index > -1) ?
      node.tagName.toLowerCase() + ':nth-child(' + (index+1) + ')' + result :
      node.tagName.toLowerCase() + result;

    if (isUnique(result)) return result;

    node = parent;
    result = '>' + result;
  }

  return result;
};