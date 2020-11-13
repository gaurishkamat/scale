const {
  Sketch,
  Page,
  Rect,
  Style,
  Artboard,
  Bitmap,
  SharedStyle,
  SymbolMaster,
  SymbolInstance,
} = require("sketch-constructor");
const fs = require("fs");
const path = require("path");
const directory = "sketch";
const sketch = new Sketch();
const uuid = require("uuid").v4;
const crypto = require('crypto');
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const rssBuilder = require('./rss-builder');
const config = require('./config');

const documentName = process.argv[2] || "default";

const serverPath = config.libraryServerPath;

const dbFilename = path.resolve(__dirname, `../sketch/symbol_database.sqlite`);


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

(async function() {

  const documentDB = await sqlite.open({
    filename: dbFilename,
    driver: sqlite3.Database
  });
  await documentDB.exec(`CREATE TABLE IF NOT EXISTS document (
    document_id TEXT NOT NULL,
    document_name TEXT PRIMARY KEY,
    document_version INTEGER NOT NULL DEFAULT 0
  )`);
  await documentDB.exec(`CREATE TABLE IF NOT EXISTS symbol (
    document_id TEXT NOT NULL,
    symbol_id TEXT NOT NULL,
    symbol_name TEXT NOT NULL,
    symbol_change_id INTEGER NOT NULL,
    UNIQUE (document_id, symbol_id),
    FOREIGN KEY (document_id)
      REFERENCES document (document_id)
        ON DELETE CASCADE
        ON UPDATE NO ACTION
  )`);
  const rows = await documentDB.all('PRAGMA table_info(document)');
  if (!rows.find(r => r.name === "document_version")) {
    await documentDB.exec('ALTER TABLE document ADD COLUMN document_version INTEGER NOT NULL DEFAULT 0');
  }
  const documentIDRow = await documentDB.get("SELECT document_id FROM document WHERE document_name = ?", [documentName]);
  const documentID = documentIDRow && documentIDRow.document_id;
  sketch.document.do_objectID = documentID || sketch.document.do_objectID;
  if (!documentID) {
    await documentDB.run("REPLACE INTO document(document_name, document_id, document_version) VALUES (?, ?, ?)", [documentName, sketch.document.do_objectID, 0]);
  }
  const symbolIDs = await documentDB.all("SELECT symbol_name, symbol_id, symbol_change_id FROM symbol WHERE document_id = ?", [sketch.document.do_objectID]);
  const symbolNameToIdMap = {};
  symbolIDs.forEach(({symbol_name, symbol_id, symbol_change_id}) => {
    symbolNameToIdMap[symbol_name] = {symbolID: symbol_id, changeIdentifier: parseInt(symbol_change_id)};
  });

  if (!fs.existsSync(directory)) {
    console.log(`generating directory: ${directory}`);
    fs.mkdirSync(`${process.cwd()}/${directory}`, { recursive: true });
  }

  const symbolNames = {};
  function getSymbolName(name) {
    if (symbolNames[name]) {
      let i = 2;
      let newName = name + '-' + i;
      while (symbolNames[newName]){ 
        ++i;
        newName = name + '-' + i;
      }
      name = newName;
    }
    symbolNames[name] = true;
    return name;
  }

  const symbolMaster = (args) => {
    const {name, id, layers, height, width, x, y} = args
    const symbol = new SymbolMaster({
      id,
      name,
      frame: {
        x,
        y,
        width,
        height
      },
      ...args
    });
    if (!/^(Icon|(Unnamed Components \/ icon\-\d+))/.test(symbol.name)) {
      symbol.groupLayout = {
        "_class": "MSImmutableInferredGroupLayout",
        "axis": 0,
        "layoutAnchor": 0,
        "maxSize": 0,
        "minSize": 0
      };
    } else {
      var icon = findLayer(symbol, s => s.name === 'svg.icon');
      if (icon) icon.resizingConstraint = 45;
      if (symbol.layers && symbol.layers[0]) {
        symbol.layers[0].resizingConstraint = 45;
      }
    }
    if (/^(Card)/.test(symbol.name)) {
      symbol.layers[0].layers[1].resizingConstraint = 18;      
    }
    if (/^(Radio|Checkbox)/.test(symbol.name)) {
      symbol.layers[0].resizingConstraint = 9;
      symbol.layers[0].layers[0].resizingConstraint = 9;
      symbol.layers[0].layers[1].resizingConstraint = 11;
    }
    if (/^Tag/.test(symbol.name)) {
      symbol.layers[0].resizingConstraint = 9;
    }
    if (/^Switch/.test(symbol.name)) {
      symbol.layers[0].resizingConstraint = 9;
      symbol.layers[1].resizingConstraint = 9;
    }
    if (/^(Button)/.test(symbol.name)) {
      symbol.layers[0].resizingConstraint = 45;
      var button = findLayer(symbol, s => s.name === 'button.button');
      var icon = findLayer(symbol, s => s.name === 'Icon');
      var label = findLayer(symbol, s => s.name === 'Button Label');
      if (button) button.resizingConstraint = 10;
      if (icon) icon.resizingConstraint = 58;
      if (label) label.resizingConstraint = 42;
    }
    if (/^Breadcrumb/.test(symbol.name)) {
      symbol.layers[0].resizingConstraint = 9;
    }
    if (/^Modal/.test(symbol.name)) {
      symbol.layers[0].layers[1].resizingConstraint = 45;
      //fitSymbolToContent(symbol);
    }
    if (/^Slider/.test(symbol.name)) {
      symbol.layers[0].resizingConstraint = 10;

      var track = findLayer(symbol, s => s.name === 'div.slider--track');
      var count = findLayer(symbol, s => s.name === '40');
      var label = findLayer(symbol, s => s.name === 'Slider Label');

      if (label) label.resizingConstraint = 47;

      if (count) {
        count.resizingConstraint = 44;
      }

      track.resizingConstraint = 58;
      track.layers[1].frame.width += 6;
      track.layers[2].resizingConstraint = 45;
    }
    // Textarea & inputfield
    // Deal with information text aligns (. = bottom left/right pin, ' = top left/right pin)
    //
    // Textarea pins:
    //
    // .Information notes    0 / 148.
    //                       0 / 148.
    // .Information notes
    //
    // Inputfield pins:
    //
    // 'Information notes    0 / 148'
    //                       0 / 148'
    // 'Information notes
    if (/^(Text area)/.test(symbol.name)) {
      if (symbol.layers[0].layers.length > 2) {
        symbol.layers[0].layers[2].resizingConstraint = 11;
        if (symbol.layers[0].layers[1].layers) {
          symbol.layers[0].layers[1].resizingConstraint = 35;
          symbol.layers[0].layers[1].layers[0].resizingConstraint = 35;
          symbol.layers[0].layers[1].layers[1].resizingConstraint = 36;
        } else {
          if (symbol.layers[0].layers[1].name === '0 / 148') {
            // If it's "0 / 148"
            symbol.layers[0].layers[1].resizingConstraint = 36;
          } else {
            // If it's "Information notes"
            symbol.layers[0].layers[1].resizingConstraint = 35;
          }
        }
        symbol.layers[0].layers[1].resizingConstraint = 35;
        symbol.layers[0].layers[0].resizingConstraint = 18;
      } else {
        symbol.layers[0].layers[1].resizingConstraint = 11;
      }
    }
    if (/^(Inputfield)/.test(symbol.name)) {
      if (symbol.layers[0].layers.length > 2) {
        symbol.layers[0].layers[2].resizingConstraint = 11;
        if (symbol.layers[0].layers[1].layers) {
          symbol.layers[0].layers[1].resizingConstraint = 11;
          symbol.layers[0].layers[1].layers[0].resizingConstraint = 11;
          symbol.layers[0].layers[1].layers[1].resizingConstraint = 12;
        } else {
          if (symbol.layers[0].layers[1].name === '0 / 148') {
            // If it's "0 / 148"
            symbol.layers[0].layers[1].resizingConstraint = 12;
          } else {
            // If it's "Information notes"
            symbol.layers[0].layers[1].resizingConstraint = 11;
          }
        }
        symbol.layers[0].layers[0].resizingConstraint = 11;
      } else {
        symbol.layers[0].layers[1].resizingConstraint = 11;
        symbol.layers[0].layers[0].resizingConstraint = 11;
      }
    }
    if (/^(Select Box)/.test(symbol.name)) {
        symbol.layers[0].resizingConstraint = 11;
        symbol.layers[0].layers[0].layers[1].resizingConstraint = 12;
        symbol.layers[0].layers[1].resizingConstraint = 11;
    }
    if (/^Link/.test(symbol.name)) {
      symbol.layers[0].resizingConstraint = 9;
    }
    if (/^Divider \/ \d+ Vertical/.test(symbol.name)) {
      symbol.layers[0].resizingConstraint = 61;
    }
    if (/^Divider \/ \d+ Horizontal/.test(symbol.name)) {
      symbol.layers[0].resizingConstraint = 47;
    }
    if (/^Accordion/.test(symbol.name)) {
      symbol.layers[0].resizingConstraint = 9;
    }
    if (symbol.groupLayout && symbol.layers && symbol.layers[0]) {
      symbol.layers[0].groupLayout = {...symbol.groupLayout};
    }
    return symbol;
  };

  function isSymbolInstanceOf(instance, symbol, json, objectID = '', symbolName, parentFrames) {
    if (!symbol || !json) {
      console.log(symbolName, objectID, "instance match fail - missing match");
      throw new Error(`Not an instance of ${symbolName}`);
    }
    const keys = Object.keys(json);
    newParentFrames = json.frame && json.frame.x !== 0 && json.frame.y !== 0 ? [json.frame, symbol.frame] : parentFrames;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const symbolValue = symbol[key];
      const jsonValue = json[key];
      if (key === 'do_objectID') {
        objectID = symbolValue;
      }
      if (key === 'frame') {
        if (symbol['_class'] !== 'symbolInstance' && symbol['_class'] !== 'text') {
          if (parentFrames && (
              jsonValue.x !== symbolValue.x
              || jsonValue.y !== symbolValue.y
              || jsonValue.width !== symbolValue.width || jsonValue.height !== symbolValue.height
          )) {
            console.log(symbolName, key, objectID, "instance match fail - frame");
            throw new Error(`Not an instance of ${symbolName}`);
          }
        }
      }
      if (Array.isArray(jsonValue)) {
        if (symbolValue) {
          if (jsonValue.length !== symbolValue.length) {
            console.log(symbolName, key, objectID, "instance match fail - array length");
            throw new Error(`Not an instance of ${symbolName}`);
          }
          jsonValue.forEach((nestedJson, i) => isSymbolInstanceOf(instance, symbolValue[i], nestedJson, objectID, symbolName, newParentFrames));
        }
      } else if (!excludeKeys.has(key) && typeof symbolValue === 'string' && symbolValue !== jsonValue) {
      } else if (typeof symbolValue === 'object') {
        // If we're in style, do fill, borders and textStyle comparisons
        if (key === 'style') {
          let differs = false;
          let textDiffers = false;
          const override = {};
          const textOverride = {};
          if (JSON.stringify(symbolValue.borders) !== JSON.stringify(jsonValue.borders)) {
            differs = true;
            override.borders = jsonValue.borders;
          }
          if (JSON.stringify(symbolValue.fills) !== JSON.stringify(jsonValue.fills)) {
            differs = true;
            override.fills = jsonValue.fills;
          }
          if (JSON.stringify(symbolValue.textStyle) !== JSON.stringify(jsonValue.textStyle)) {
            textDiffers = true;
            textOverride.textStyle = jsonValue.textStyle;
          }
          if (differs || textDiffers) {
            continue;
          }
        }
        isSymbolInstanceOf(instance, symbolValue, jsonValue, objectID, symbolName, newParentFrames);
      }
    }
  }

  const excludeKeys = new Set(['_class', 'frame', 'contextSettings', 'attributedString', 'style', 'do_objectID', 'name', 'text']);
  // Set instance frame size and overrides
  function fillInstance(instance, symbol, json, objectID = '', symbolName, symbolVariantName, variantName) {
    const keys = Object.keys(json);
    for (let i = 0 ; i < keys.length; i++) {
      const key = keys[i];
      const symbolValue = symbol[key];
      const jsonValue = json[key];
      if (key === 'do_objectID') {
        objectID = symbolValue;
      }
      if (Array.isArray(jsonValue)) {
        if (symbolValue) {
          jsonValue.forEach((nestedJson, i) => fillInstance(instance, symbolValue[i], nestedJson, objectID, symbolName, symbolVariantName, variantName));
        }
      } else if (!excludeKeys.has(key) && typeof symbolValue === 'string' && symbolValue !== jsonValue) {
        // console.log(instance.name, instance.do_objectID, '-- override', key, ':',  symbolValue, '=>', jsonValue);
        const overrideValue = {
          "_class": "overrideValue",
          "overrideName": `${objectID}_${key}Value`,
          "value": jsonValue
        };
        instance.overrideValues.push(overrideValue);
      } else if (typeof symbolValue === 'object') {
        // If we're in style, do fill, borders and textStyle comparisons
        // If they differ, create a new SharedStyle and assign it to the symbol instance.
        if (key === 'style') {
          let differs = false;
          let textDiffers = false;
          const override = {};
          const textOverride = {};
          if (JSON.stringify(symbolValue.borders) !== JSON.stringify(jsonValue.borders)) {
            differs = true;
            override.borders = jsonValue.borders;
          }
          if (JSON.stringify(symbolValue.fills) !== JSON.stringify(jsonValue.fills)) {
            differs = true;
            override.fills = jsonValue.fills;
          }
          if (JSON.stringify(symbolValue.textStyle) !== JSON.stringify(jsonValue.textStyle)) {
            textDiffers = true;
            textOverride.textStyle = jsonValue.textStyle;
          }
          if (differs) {
            // console.log('style override', JSON.stringify(override, null, 4));
            if (!symbol.sharedStyleID) {
              // Make a shared style for the SymbolMaster
              const sharedStyle = new SharedStyle(null, {
                name: symbolVariantName,
                do_objectID: uuid(),
                _class: 'sharedStyle',
                value: symbolValue
              });
              sketch.addLayerStyle(sharedStyle);
              symbol.sharedStyleID = sharedStyle.do_objectID;
            }
            let sharedStyle = sketch.getLayerStyles().find(s => s.name === variantName);
            if (!sharedStyle) {
              sharedStyle = new SharedStyle(null, {
                name: `${variantName}`,
                do_objectID: uuid(),
                _class: 'sharedStyle',
                value: jsonValue
              });
              sketch.addLayerStyle(sharedStyle);
            }
            const overrideValue = {
              "_class": "overrideValue",
              "overrideName": `${objectID}_layerStyle`,
              "value": sharedStyle.do_objectID
            };
            instance.overrideValues.push(overrideValue);
          }
          if (textDiffers) {
            // console.log('textStyle override', JSON.stringify(textOverride, null, 4));
            if (!symbol.sharedStyleID) {
              // Make a shared style for the SymbolMaster
              const sharedStyle = new SharedStyle(null, {
                name: symbolVariantName,
                do_objectID: uuid(),
                _class: 'sharedStyle',
                value: symbolValue
              });
              sketch.addTextStyle(sharedStyle);
              symbol.sharedStyleID = sharedStyle.do_objectID;
              console.log(symbolVariantName, variantName);
            }
            let sharedStyle = sketch.getTextStyles().find(s => s.name === variantName);
            if (!sharedStyle) {
              sharedStyle = new SharedStyle(null, {
                name: `${variantName}`,
                do_objectID: uuid(),
                _class: 'sharedStyle',
                value: jsonValue
              });
              sketch.addTextStyle(sharedStyle);
            }
            const overrideValue = {
              "_class": "overrideValue",
              "overrideName": `${objectID}_textStyle`,
              "value": sharedStyle.do_objectID
            };
            instance.overrideValues.push(overrideValue);
          }
          if (differs || textDiffers) {
            console.log(symbolVariantName, variantName);
            continue;
          }
        }
        fillInstance(instance, symbolValue, jsonValue, objectID, symbolName, symbolVariantName, variantName);
      }
    }
  }

  function replaceSystemFonts(json) {
    const keys = Object.keys(json);
    for (let i = 0 ; i < keys.length; i++) {
      const key = keys[i];
      const jsonValue = json[key];
      if (Array.isArray(jsonValue)) {
        jsonValue.forEach(replaceSystemFonts);
      } else if (typeof jsonValue === 'string') {
        if (key === 'name') { 
          json[key] = config.fontReplacer(jsonValue) || json[key];
        }
      } else if (typeof jsonValue === 'object') {
        replaceSystemFonts(jsonValue);
      }
    }
  }

  const symbols = new Map();

  function enhanceJson(json) {
    let enhanced = {};
    const keys = Object.keys(json);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = json[key];
      if (Array.isArray(value)) {
        enhanced[key] = value.map(nestedJson => enhanceJson(nestedJson))
      } else if (key === 'image') {
        const fileName = crypto
                      .createHash('sha1')
                      .update(value.url)
                      .digest('hex');
        enhanced[key] = new Bitmap({filePath: path.resolve(__dirname, `../sketch-json/${fileName}`)}).image;
      } else if (typeof value === 'object') {
        enhanced[key] = enhanceJson(value);
      } else {
        enhanced[key] = value
      }
    }
    /*
      Handle symbol creation and instancing
    */
    if (enhanced['_class'] === 'group' && enhanced.isSymbol === true) {
      // Find all symbols with the same name.
      let symbolArray = symbols.get(enhanced.name);
      if (!symbolArray) {
        symbolArray = [];
        symbols.set(enhanced.name, symbolArray);
      }
      // Try to create a symbol instance.
      // If the symbol is too different, we create a master symbol instead below.
      let instance;
      let symbol = false && symbolArray.find(master => {
        if (master.variant !== enhanced.variant) return false;
        instance = master.createInstance({name: enhanced.name});
        instance.frame = new Rect(enhanced.frame);
        instance.style = new Style(enhanced.style);
        try {
          isSymbolInstanceOf(instance, master, enhanced, '', master.name);
          fillInstance(instance, master, enhanced, '', master.name, master.variantName, uuid());
          return true;
        } catch (err) {
          return false;
        }
      });
      
      // Couldn't create a symbol instance, let's create a new master instead.
      if (!symbol) {
        symbol = symbolMaster({...enhanced, name: getSymbolName(enhanced.name)});
        symbol.stableSymbolName = enhanced.stableSymbolName || symbol.name;
        symbol.variant = enhanced.variant;
        symbol.variantName = uuid();
        if (symbolNameToIdMap[symbol.stableSymbolName]) {
          // console.log("Reusing symbol ID:", symbol.stableSymbolName, '-', symbol.name, "-", symbolNameToIdMap[symbol.stableSymbolName].symbolID, "-", symbolNameToIdMap[symbol.stableSymbolName].changeIdentifier);
          symbol.symbolID = symbolNameToIdMap[symbol.stableSymbolName].symbolID;
          symbol.changeIdentifier = (symbolNameToIdMap[symbol.stableSymbolName].changeIdentifier || 0) + 1;
        } else {
          // console.log("Creating symbol ID:", symbol.stableSymbolName, symbol.changeIdentifier || 0);
        }
        symbolNameToIdMap[symbol.stableSymbolName] = {symbolID: symbol.symbolID, changeIdentifier: symbol.changeIdentifier || 0};
        if (symbolArray.length == 1) symbolArray[0].name += ' / ' + symbolArray[0].variant;
        if (symbolArray.length > 0) symbol.name += ' / ' + symbol.variant;
        symbol.resizesContent = true;
        symbolArray.push(symbol);
        instance = symbol.createInstance({name: symbol.name});
        instance.frame = new Rect(enhanced.frame);
        instance.style = new Style(enhanced.style);
        fillInstance(instance, symbol, enhanced, '', symbol.name, symbol.variantName, enhanced.name.split('/')[0].trim() + ' / ' + (enhanced.variant || uuid()));
        if (/^((Unnamed Components \/ icon\-\d+))/.test(symbol.name)) {
          instance.name = 'Icon';
        }
      }
      return instance;
    }
    return enhanced;
  }

  function simplifyTree(node, parent) {
    if (node.layers) {
      node.layers.forEach(l => simplifyTree(l, node));
      if ((node.name == 'div' || node.layers.length == 1) && parent && !node.isSymbol) {
        const idx = parent.layers.indexOf(node);
        parent.layers = parent.layers.slice(0,idx).concat(node.layers).concat(parent.layers.slice(idx+1));
        node.layers.forEach(l => {
          l.frame.x += node.frame.x;
          l.frame.y += node.frame.y;
        });
      }
    }
  }

  const symbolsPage = new Page({
    name: "Symbols"
  });

  sketch.addPage(symbolsPage);

  const jsons = fs.readdirSync(path.resolve(__dirname, "../sketch-json")).filter(fn => fn.endsWith('.json'));
  jsons.forEach(jsonFn => {
    const json = require(`../sketch-json/${jsonFn}`);

    const componentsPage = new Page({
      name: json.name
    });

    json.artboards.forEach((artboard, index) => {
      replaceSystemFonts(artboard);
      simplifyTree(artboard);
      const enhanced = enhanceJson(artboard);

      const artboardComponents = new Artboard({
        name: artboard.name,
        frame: {
          x: artboard.frame.x,
          y: artboard.frame.y,
          width: artboard.frame.width,
          height: artboard.frame.height
        }
      });

      enhanced.layers.forEach(layer => artboardComponents.addLayer(layer));
      componentsPage.addArtboard(artboardComponents);

      // fs.writeFileSync(`./debug_${index}.json`, JSON.stringify(enhanced, null, 4))
    });

    sketch.addPage(componentsPage);
  });

  const gutter = 32;
  let y = 0;
  for (const symbolArray of symbols.values()) {
    symbolArray.forEach(symbol => {
      symbol.frame.x = 0;
      symbol.frame.y = y;
      y += gutter + symbol.frame.height;
      symbolsPage.addLayer(symbol);
    });
  }

  const queries = [];
  for (const symbolName in symbolNameToIdMap) {
    const s = symbolNameToIdMap[symbolName];
    queries.push(
      documentDB.run("REPLACE INTO symbol(symbol_id, symbol_name, symbol_change_id, document_id) VALUES (?, ?, ?, ?)", [s.symbolID, symbolName, s.changeIdentifier, sketch.document.do_objectID])
    );
  }
  await Promise.all(queries);
  let version = (await documentDB.get("SELECT document_version FROM document WHERE document_id = ?", [sketch.document.do_objectID])).document_version;
  console.log(`Old document version`, version);
  version++;
  console.log(`New document version`, version);
  await documentDB.run("UPDATE document SET document_version = ? WHERE document_id = ?", [version, sketch.document.do_objectID]);

  sketch.build(`./sketch/${documentName}.sketch`).then(() => {
    console.log(`Built ./sketch/${documentName}.sketch`);
  });

  rssBuilder.build(`./sketch/${documentName}.xml`, {
    title: config.libraryTitle,
    description: config.libraryDescription,
    url: `${serverPath}${documentName}.sketch`,
    version: version
  });
  console.log(`Built ./sketch/${documentName}.xml`);

})();