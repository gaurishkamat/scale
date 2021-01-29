
function printSymbolStructure(symbol, indent = 0) {
  console.log("".padStart(indent) + symbol.name);
  if (symbol.layers) symbol.layers.forEach(s => printSymbolStructure(s, indent+2));
}

function findLayer(symbol, predicate) {
  if (predicate(symbol)) return symbol;
  if (symbol.layers) {
    for (let i = 0; i < symbol.layers.length; i++) {
      const result = findLayer(symbol.layers[i], predicate);
      if (result) return result;
    }
  }
  return undefined;
}

function findLayers(symbol, predicate, results=[]) {
  if (predicate(symbol)) results.push(symbol);
  if (symbol.layers) {
    for (let i = 0; i < symbol.layers.length; i++) {
      findLayers(symbol.layers[i], predicate, results);
    }
  }
  return results;
}

module.exports = {
  findLayer,
  findLayers,
  printSymbolStructure
};