const { findLayer, findLayers } = require('./utils');

module.exports = {
  libraryServerPath: "https://office.heichen.hk/shared/Public/telekom/",

  libraryTitle: "Scale Telekom Components",
  libraryDescription: "Scale Telekom Components design library",

  fontReplacer: function(jsonValue) {
    if (jsonValue === "system-ui") {
      return "TeleNeo";
    } else if (jsonValue === "-apple-system") {
      return "TeleNeo";
    } else if (/^TeleNeoWeb/.test(jsonValue)) {
      return jsonValue.replace(/^TeleNeoWeb/, "TeleNeo");
    }
  },

  setSymbolResizing: function(symbol) {
    if (!/^(Icon|(Unnamed Components \/ icon))/.test(symbol.name)) {
      symbol.groupLayout = {
        _class: "MSImmutableInferredGroupLayout",
        axis: 0,
        layoutAnchor: 0,
        maxSize: 0,
        minSize: 0
      };
    } else {
      var icon = findLayer(symbol, s => s.name === "svg.icon");
      if (icon) icon.resizingConstraint = 45;
      if (symbol.layers && symbol.layers[0]) {
        symbol.layers[0].resizingConstraint = 45;
      }
    }

    var icons = findLayers(
      symbol,
      s => s.name === /^Unnamed Components \/ icon/
    );
    icons.forEach(icon => (icon.name = "Icon"));

    try {
      if (/^Accordion/.test(symbol.name)) {
        symbol.layers[0].resizingConstraint = 10;
        var icon = findLayer(symbol, s => s.name === "Icon");
        if (icon) icon.resizingConstraint = 9;
        var label = findLayer(symbol, s => s.name === "Accordion Label");
        if (label) label.resizingConstraint = 9;
        var bg = findLayer(symbol, s => s.name === "Background");
        if (bg) bg.resizingConstraint = 10;
      }
      if (/^(Button)/.test(symbol.name)) {
        var button = findLayer(symbol, s => s.name === "button.button");
        if (button) {
          button.resizingConstraint = 11;
          button.layers.pop();
        }
        var slot = findLayer(symbol, s => s.name === "slot");
        if (slot) slot.resizingConstraint = 45;
        var icon = findLayer(symbol, s => s.name === "Icon");
        if (icon) icon.resizingConstraint = 9;
        var label = findLayer(symbol, s => s.name === "Button Label");
        if (icon) {
          if (label) label.resizingConstraint = 9;
          else icon.resizingConstraint = 45;
        } else {
          if (label) label.resizingConstraint = 45;
        }
      }
      if (/^Breadcrumb/.test(symbol.name)) {
        symbol.groupLayout = undefined;
        symbol.layers[0].resizingConstraint = 9;
        findLayers(symbol.layers[0], l => (l.resizingConstraint = 9));
      }
      if (/^(Card)/.test(symbol.name)) {
      }
      if (/^(Checkbox|Radio)/.test(symbol.name)) {
        symbol.layers[0].resizingConstraint = 9;
      }
      if (/^Divider \/ \d+ Standard/.test(symbol.name)) {
        symbol.layers[0].resizingConstraint = 47;
      }
      if (/^Divider \/ \d+ Vertical/.test(symbol.name)) {
        symbol.layers[0].resizingConstraint = 61;
      }
      if (/^(Dropdown)/.test(symbol.name)) {
        symbol.groupLayout = undefined;
        symbol.layers[0].resizingConstraint = 11;
        var icon = findLayer(symbol, s => s.name === "Icon");
        icon.resizingConstraint = 44;
        var label = findLayer(symbol, s => s.name === "Dropdown Label");
        if (label) {
          label.resizingConstraint = 10;
          label.frame.width = 144;
          label.glyphBounds = "{{0, 3}, {136, 12}}";
          label.textBehaviour = 2;
        }
        var label = findLayer(symbol, s => s.name === "Dropdown Value");
        if (label) {
          label.resizingConstraint = 10;
          label.frame.width = 144;
          label.glyphBounds = "{{0, 3}, {136, 12}}";
          label.textBehaviour = 2;
        }
        var label = findLayer(symbol, s => s.name === "Information Label");
        if (label) {
          label.resizingConstraint = 10;
          label.frame.width = 186;
          label.glyphBounds = "{{0, 3}, {186, 12}}";
          label.textBehaviour = 2;
        }
      }
      if (/^Link/.test(symbol.name)) {
        symbol.layers[0].resizingConstraint = 9;
        var underline = findLayer(symbol, s => s.name === 'border-bottom');
        if (underline) underline.resizingConstraint = 58;
      }
      if (/^Modal/.test(symbol.name)) {
        symbol.layers[0].layers[1].resizingConstraint = 45;
        //fitSymbolToContent(symbol);
      }
      if (/^Progress Bar/.test(symbol.name)) {
        symbol.layers[0].resizingConstraint = 9;
        var desc = findLayer(symbol, s => s.name === 'Description');
        if (desc) desc.resizingConstraint = 9;
        var desc = findLayer(symbol, s => s.name === 'Progress Bar Label');
        if (desc) desc.resizingConstraint = 9;
        var desc = findLayer(symbol, s => s.name === 'div.progress-bar');
        if (desc) desc.resizingConstraint = 9;
        var desc = findLayer(symbol, s => s.name === 'div.progress-bar-wrapper');
        if (desc) desc.resizingConstraint = 9;
      }
      if (/^Slider/.test(symbol.name)) {
        symbol.layers[0].resizingConstraint = 10;

        var track = findLayer(symbol, s => s.name === "div.slider--track");
        var bar = findLayer(symbol, s => s.name === "div.slider--bar");
        var count = findLayer(symbol, s => /^\d+/.test(s.name));
        var label = findLayer(symbol, s => s.name === "Slider Label");

        if (label) label.resizingConstraint = 47;

        if (count) {
          count.resizingConstraint = 44;
          count.name = "Counter Label";
        }

        if (bar) bar.resizingConstraint = 59;

        track.resizingConstraint = 58;
        var knob = findLayer(track, s => /div\#slider/.test(s.name));
        if (knob) knob.resizingConstraint = 45;
      }
      if (/^Switch/.test(symbol.name)) {
        symbol.layers[0].resizingConstraint = 9;
      }
      if (/^Table/.test(symbol.name)) {
        symbol.groupLayout = undefined;
        symbol.layers.forEach(l => l.resizingConstraint = 9);
      }
      if (/^(Tab Nav)/.test(symbol.name)) {
        symbol.groupLayout = undefined;
        symbol.layers[0].resizingConstraint = 9;
        var label = findLayer(symbol, s => s.name === "Header Label");
        if (label) {
          label.resizingConstraint = 10;
          label.frame.width = 120;
          label.glyphBounds = "{{0, 3}, {120, 24}}";
          label.textBehaviour = 2;
        }

      }
      if (/^Tag/.test(symbol.name)) {
        symbol.layers[0].resizingConstraint = 9;
        var icon = findLayer(symbol, s => s.name === "button") ||
                   findLayer(symbol, s => s.name === "Icon");
        if (icon) icon.resizingConstraint = 44;
      }
      if (/^(Text area)/.test(symbol.name)) {
        symbol.groupLayout = undefined;
        var count = findLayer(symbol, s => /^\d+\s*\/\s*\d+$/.test(s.name));
        if (count) {
          count.resizingConstraint = 36;
          count.name = "Counter";
        }
        var info = findLayer(symbol, s => /^Information/.test(s.name));
        if (info) {
          info.resizingConstraint = 35;
        }
        var helperMessage = findLayer(symbol, s => /^div#helper-message/.test(s.name));
        if (helperMessage) helperMessage.resizingConstraint = 34;
        var inputValue = findLayer(symbol, s => /^Input Value/.test(s.name));
        if (inputValue) inputValue.resizingConstraint = 9;
        var label = findLayer(symbol, s => /^Label/.test(s.name));
        if (label) label.resizingConstraint = 9;
        var textarea = findLayer(symbol, s => /^textarea/.test(s.name));
        if (textarea) {
          textarea.resizingConstraint = 18;
          findLayers(textarea, l => l.resizingConstraint = 18);
        }

        var bg = findLayer(symbol, s => /safety-background/.test(s.name));
        if (bg) bg.resizingConstraint = 18;

        var label = findLayer(symbol, s => s.name === "Label");
        if (label) {
          label.resizingConstraint = 10;
          label.frame.width = 148;
          label.glyphBounds = "{{0, 3}, {148, 12}}";
          label.textBehaviour = 2;
        }
        var label = findLayer(symbol, s => s.name === "Input Value");
        if (label) {
          label.resizingConstraint = 10;
          label.frame.width = 148;
          label.glyphBounds = "{{0, 3}, {148, 12}}";
          label.textBehaviour = 2;
        }
        var label = findLayer(symbol, s => s.name.startsWith("Information"));
        if (label) {
          if (label.name === 'Information') {
            label.resizingConstraint = 34;
            label.frame.width = 162;
            label.glyphBounds = "{{0, 3}, {162, 12}}";
          } else {
            label.resizingConstraint = 10;
            label.frame.width = 108;
            label.glyphBounds = "{{0, 3}, {108, 12}}";
          }
          label.textBehaviour = 2;
        }

      }

      if (/^(Text Field)/.test(symbol.name)) {
        symbol.groupLayout = undefined;
        var count = findLayer(symbol, s => /^\d+\s*\/\s*\d+$/.test(s.name));
        if (count) {
          count.resizingConstraint = 12;
          count.name = "Counter";
        }
        var info = findLayer(symbol, s => /^Information/.test(s.name));
        if (info) {
          info.resizingConstraint = 11;
        }
        var helperMessage = findLayer(symbol, s => /^div#helper-message/.test(s.name));
        if (helperMessage) helperMessage.resizingConstraint = 10;
        var inputValue = findLayer(symbol, s => /^Input Value/.test(s.name));
        if (inputValue) inputValue.resizingConstraint = 9;
        var label = findLayer(symbol, s => /^Label/.test(s.name));
        if (label) label.resizingConstraint = 9;
        var input = findLayer(symbol, s => /^input#input/.test(s.name));
        if (input) {
          input.resizingConstraint = 10;
          findLayers(input, l => l.resizingConstraint = 10);
        }

        var label = findLayer(symbol, s => s.name === "Label");
        if (label) {
          label.resizingConstraint = 10;
          label.frame.width = 148;
          label.glyphBounds = "{{0, 3}, {148, 12}}";
          label.textBehaviour = 2;
        }
        var label = findLayer(symbol, s => s.name === "Input Value");
        if (label) {
          label.resizingConstraint = 10;
          label.frame.width = 148;
          label.glyphBounds = "{{0, 3}, {148, 12}}";
          label.textBehaviour = 2;
        }
        var label = findLayer(symbol, s => s.name === "Information");
        if (label) {
          label.resizingConstraint = 10;
          label.frame.width = 108;
          label.glyphBounds = "{{0, 3}, {108, 12}}";
          label.textBehaviour = 2;
        }

      }

      if (/^(Text List)/.test(symbol.name)) {
        symbol.layers[0].resizingConstraint = 9;
      }
    } catch (err) {
      console.log("Error processing", symbol.name, err);
    }

    if (symbol.groupLayout && symbol.layers && symbol.layers[0]) {
      symbol.layers[0].groupLayout = { ...symbol.groupLayout };
    }
  }
};
