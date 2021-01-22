# Release push checklist
Tracking https://gard.telekom.de/gardwiki/display/DTDS/2021+Sketch+File+Progress
    - ( ) Ping new Sketch file & feedback to Anna every afternoon

    - [x] Naming "Default" -> "Standard"
    - [x] Breadcrumb
        - [x] "02 breadcrumb label" should be named "02 Page Links"
        - [x] Example is missing, please add as "00 Example" inside the symbols
        - [x] icon size should be 12px instead of 16px
    - [z] Button
        - [ ] Naming sketch files + storybook need to be aligned
        - [x] Icon only buttons need fixed spacing
            - Storybook component doesn't have scaling whatsoever (but you can hack the CSS and it'll behave like the Sketch symbol).
            - Should the button not be resizable? Or only expandable?
        - [x] Small button icon size
        - [x] Secondary large button is 42x40, should be 40x40
            - Broken in component style (border 1, padding 8, width 24 => 1+1 + 8+8 + 24 = 42)
            - Workaround: make icon size 22
            - Ditto for secondary small button 34x32
    - [z] Checkbox
        - [x] error state need error message
        - [ ] disable states should have the same font color (#D0D0D0)
    - [x] Icons
    - [x] Radio
        - [x] default error needs error message below the label
    - [x] Divider
        - [x] Naming
    - [x] Slider
        - [x] Large thumb variant missing
        - [x] label on and label off without counter can be removed
        - [x] label off can be removed
        - [x] Bar is 1px to the right
            - Broken in the Storybook component
    - [x] Link
        - [x] font weight should be medium

    - [ ] Breadcrumb fix positioning of "Current Page"
    - [ ] Card
        - [ ] Use new component
    - [ ] Dropdown
        - [x] Select Box renamed to Dropdown
        - [ ] should have fixed height/width and spacing
        - [ ] different symbol naming structure, no open dropdown symbol existing
        - [ ] pressed states should have an open dropdown, solid icon and (except the error state) a magenta pressed outline (#CB0068)
    - [ ] Progress bar
        - [x] progress bar filling needs corner roundings
        - [x] progress bar needs counter with percentage 
        - [ ] should have fixed height/width and spacing
        - [ ] naming sketch files + storybook need to be aligned
    - [ ] Switch
        - [z] label inside switch should change color as well in hover/active  states
        - [x] artboards too large
        - [ ] should have fixed height/width and spacing
        - [ ] different symbol naming
    - [ ] Tag
        - [x] disabled states can be removed
        - [ ] with overwrites the alignment/Spacing is off
        - [ ] naming sketch files + storybook need to be aligned (default vs standard etc.)
    - [ ] Textarea
        - [ ] textarea scroll is three times in there
        - [ ] textarea resizable and expand missing
        - [ ] should have fixed height/width and spacing
        - [ ] naming sketch files + storybook need to be aligned (default vs standard etc.)
    - [ ] Text field
        - [x] Rename "Input field" to "Text field"
        - [ ] should have fixed height/width and spacing
        - [ ] naming sketch files + storybook need to be aligned (default vs standard etc.)
    - [ ] Text lists
        - [ ] should have fixed height/width and spacing
    
    - Later
        - [ ] Accordion
        - [ ] Modal
        - [ ] Tab Nav
        - [ ] Sidebar Nav




# Style overrides
    - [x] Color styles to change icon colors
        const sharedStyles = [
            new SharedStyle({
                id: "white-shared-style",
                name: "White",
                fills: [{ color: "#fff" }]
            }),
            new SharedStyle({
                id: "black-shared-style",
                name: "Black",
                fills: [{ color: "#f00" }]
            })
        ];
        sharedStyles.map(sharedStyle => sketch.addLayerStyle(sharedStyle));
        - Shared styles are in document.json
        - Symbol master object has sharedStyleID that points to sharedStyle
        - Used from pages with
        "overrideValues": [
            {
              "_class": "overrideValue",
              "overrideName": "0173F81D-7C15-4DC0-AEF9-0D33F0D05243_textStyle",
              "value": "466854FC-AD3A-4F5C-B487-BDA4B7E4EE42"
            },
            {
              "_class": "overrideValue",
              "overrideName": "5348A644-0E77-421A-82BC-3F014078AA9F_layerStyle",
              "value": "0CF90F4F-FD7F-4CF3-AC5A-23D394921A10"
            }
        ]
    - [x] Add styles to symbols
        - [x] Detect style variants in HTML
            - If symbol instance has different background color / text color, create new style
            - Name new style with data-style-name
            - Use symbol master diff thing in generator-sketch
        - [x] Create styles based on style diffs
        - [x] Apply styles to symbol instance
    - [x] Better style names 
        `${symbolName} - ${variantName}`
    - [x] Replace system-ui with Helvetica


# SVGs
- Only rect rx used as cornerRadius, ry is ignored.
- Sketch doesn't have transformation matrices in the document format. Object rotation is passed through though. Maybe it SVDs transformation matrices internally into rotation-scale-rotation sequences.

- [x] Convert path segments to cubics
- [x] Convert path segments to curvePoints
    - [x] Split path into layers at each M
- [x] Apply transformation stack to path points
    - multiply path points with node CTM
    - go through path points to compute bbox
    - export curvePoints
- [x] Clip SVG to viewport
    - create rect path for SVG element
    - add to SVG layers
    - set hasClippingMask to true
- [x] Convert other nodes to paths
    - [x] rect
    - [x] circle
    - [x] ellipse
    - [x] polygon
    - [x] polyline
    - [x] line
- [-] Pass styles to SVG
    - [x] Stroke
        - [x] stroke
        - [x] stroke-dasharray
        - [x] stroke-dashoffset (Not supported)
        - [x] stroke-linecap
        - [x] stroke-linejoin
        - [x] stroke-miterlimit
        - [x] stroke-opacity
        - [x] stroke-width
    - [-] Fill
        - [x] fill
        - [x] fill-opacity
        - [x] fill-rule
        - [x] gradient fill
            ```
            fill="url(#a)"
            <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="32.002" y1="60" x2="32.002" y2="4.0049">
                <stop offset="0" stop-color="#ddd6d3"></stop>
                <stop offset=".3881" stop-color="#e9e4e2"></stop>
                <stop offset="1" stop-color="#e9e4e2"></stop>
            </linearGradient>
            ```
            ```
            {
                fillType: Style.FillType.Gradient,
                // color, gradient, pattern: 0, 1, 2
                gradient: {
                    gradientType: Style.GradientType.Linear,
                    // linear, radial, angular: 0, 1, 2
                    aspectRatio: number, // for radial: When the gradient is Radial, the from and to points makes one axis of the ellipse of the gradient while the aspect ratio determine the length of the orthogonal axis (aspectRatio === 1 means that it’s a circle).
                    // Not sure how from/to work with radial gradients.
                    from: {
                        x: 0,
                        y: 0,
                    },
                    to: {
                        x: 50,
                        y: 50,
                    },
                    stops: [
                        {
                        position: 0,
                        color: '#bbbbbb',
                        },
                        {
                        position: 0.5,
                        color: '#aaaaaa',
                        },
                        {
                        position: 1,
                        color: '#cccccc',
                        },
                    ],
                },
            }
            ```
            - [x] Transform gradient coordinates to correct system
                - [x] Convert gradient coords to path-bbox-relative coords ((point - bbox.topLeft) / bbox.dimensions)
                - [x] Apply gradientTransform
                - [ ] Do path transform affect gradients?
        - [x] Object bounding box coords
            - [x] Radial gradients
                - [x] Test
            - [x] Linear gradients
                - [x] Test
        - [x] Pattern fill
            - Doesn't really exist in Sketch
        - [-] Image fill
            - https://developer.sketch.com/reference/api/#fill
- [x] How to deal with the (#( )#) filled paths
    - Inside path cuts away fill of outside path
    - Sketch imports the path with multiple inner paths
- [x] Clip paths from defs
    - [x] clip-path
    - [x] clip-rule
- [x] Test with all icons
    - [x] Make all_icons.html
- [ ] Convert text to a text object
- [ ] Arrowheads
    - [ ] marker-end
    - [ ] marker-mid
    - [ ] marker-start
- [ ] Which of these CSS attributes are supported
    - [ ] mask
    - [ ] mask-type
    - [ ] filter
    - [ ] flood-color
    - [ ] flood-opacity
    - [ ] lighting-color
    - [ ] stop-color
    - [ ] stop-opacity
    - [ ] color-interpolation
    - [ ] color-interpolation-filters
    - [ ] color-rendering
    - [ ] shape-rendering
    - [ ] vector-effect
    - [ ] paint-order

# Port sketch-to-html models over to sketch-constructor
    [] Make sketch-constructor models that work in the browser
    [] Translate API in nodeToSketch files
    [] Both libs to use the same models

# Layout constraints to make buttons resize with the text content
    [] Figure out what components not to make resizable (hint, tip: specified width and/or height)
        [] Pass CSS layout info from html-to-sketch
    [] Translate flexbox rules to constraints 
        [] layout direction
        [] justify
        [] auto margins
        [] flow left/right/top/bottom?

        margin-left:auto

        display: flex
        justify: flex-end

        align-item: center
## Done
    https://medium.com/zendesk-engineering/reverse-engineering-sketchs-resizing-functionality-23f6aae2da1a

    https://github.com/html-sketchapp/html-sketchapp/pull/90
    layer.setResizingConstraint(resizingConstraintValues.top, resizingConstraintValues.left); // Return 27 (31 & 59)
    [x] resizesContent: true
    [x]  "groupLayout": {
            "_class": "MSImmutableInferredGroupLayout",
            "axis": 0,
            "layoutAnchor": 0,
            "maxSize": 0,
            "minSize": 0
        }

# Images
    - [] SVG
        - PDFs can be embedded
        - svg-to-pdfkit...
    - [x] Download images https://stackoverflow.com/questions/52542149/how-can-i-download-images-on-a-page-using-puppeteer
    - [x] Inject images into Sketch document - asketch.json has bitmap entries, turn them into sketch-constructor
        new Bitmap({
            filePath: '/local/path.png',
            frame,
            style
        })
    - [x] IMG
    - [x] Images in CSS
        - [x] url()
        - [x] data:
        - [x] content
    - [x] Cross-origin images
    - [x] Formats
        - [x] PNG
        - [x] JPG

# Smoke test using whatever websites in inject.js

# Make a new branch for adding layout constraints, pseudo elements
    [x] :after and :before pseudo elements
    [x] :-webkit-slider-thumb and friends
    [x] -webkit-slider-track

# Nested symbols

- [x] Agent states - compare if has :hover, :focus, :active etc
    - [x] Generate state variant elements
    - [x] getComputedStyle with :foo
    - [x] Create variant names with :foo
    - Doesn't work, since getComputedStyle doesn't do :hover
    - There's a way to do it via Puppeteer https://github.com/puppeteer/puppeteer/issues/4057
    - [x] Shadow root handling for states
        - Can't get it working correctly
        - Ignore Shadow DOM, scale is deprecating it
    - [x] Investigate once more if we can programmatically do them
    - [x] Add :focus
    - [x] Add :active                  
- [x] Symbol names
    - [x] No crazy /null/0
    - [x] If param value long, just remove it
- [x] Override - parse layer name
    - Use layer name as prefix to override style name
    - Deal with instance creation failure
- [x] Create new symbol if frame differs
- [x] Accurate rendering or fewer symbols?
    - Accurate
- [x] Always use node names
- [x] Replace system fonts
- [x] Debug duplicate text styles
    - [x] Instead of name = variant, name = symbol / variant
- [x] Symbol Master text styles should use variant name if symbol master has one.

# Components tests

- [x] Use document as Sketch library
    - [x] Stable document ID
    - [x] Stable symbol IDs
    - [x] Bump symbol changeIdentifier on build

- [x] Better Sketch library stability
    - [x] Store document ID in symbol map
    - [x] Pass in symbol map filename
    - [x] Use Sqlite DB as symbol map
    - [x] Allow renaming symbols
        - [x] Use a stable symbol key for components instead of symbol name
        - [x] symbolKey -> symbolID -map
        - [x] Default symbolKey to symbol name
        - [x] Fix symbol renaming
            - Symbols in dropdown update name on Library update
            - Document layer names aren't updated on Library update (You need an extension for that (e.g. symbol instance renamer))

- [x] Propagate :hover states through Shadow DOM (including slot content)

- [x] Handle slot content better (copying the content tree under the slot element breaks styles, materializing the styles breaks the stylesheet overrides as style attribute takes precedence)
    - Slot content is now traversed similarly to shadow roots

- [ ] SVG styles shouldn't be materialized to DOM

- [x] Group layout should be applied to the first child as well (axis 0 layoutAnchor 1)

- [ ] groupLayout messes up some symbols, in some it works fine
    - Messed up
        - [x] Input field - actually this is fine, it should have a fixed size...
        - [ ] Textarea
        - [ ] Select box
        - [ ] Icons (stretched icon override)
    - Works fine
        - Button
        - Tag
        - Checkbox
        - Radio button
    - Looks as usual
        - Breadcrumb
        - Links
        - Accordion
        - Modal
        - Slider
        - Switch
        - Card

- [ ] Create text inside empty input and textarea
- [ ] Input label and placeholder
- [ ] List ordinals
- [ ] List bullets

- [ ] Button sizing wrong due to center aligned text
- [ ] Button symbols have 1px outline, messing up the size
- [ ] Icons not linked (still two groups of icons)
- [ ] Icons don't take color of buttons if I switch them

