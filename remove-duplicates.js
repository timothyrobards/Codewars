function distinct(a) {
  return [ ...new Set(a) ];
}

// In ES6 you have Sets and Spread which makes it very easy and performant to remove all duplicates
// The Set object lets you store unique values of any type, whether primitive values or object references.
