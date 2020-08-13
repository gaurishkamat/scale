# Input Field

Text input allows users to enter different types of data.

## General

### When to Use

The input field is used to enter different kinds of data into a form.

### When Not to Use

Do not use input fields for searching. If you have a search use case, refer to the search component. Use regular input fields exclusively for capturing data.

## Basic Types

### Text

Use the type "text" to capture generic text like names or addresses.

### Number

Use the type "number" to capture natural numbers like the amount of items to order.

### Email

Use the type "email" whenever a user has to enter an e-mail adress.

### Password

Use the type "password" for passwords and sensitive data. Password text will be obscured by symbols such as the asterisk ("*") or a dot ("•"). The character will vary depending on the user agent and OS.

## Elements

![Image Name](/assets/3_components/input-field/image-20200811095946547.png)

### Label (1)

Clearly label the input field so the user knows what information to enter. e.g. "your email".

### Placeholder Text (2) (Optional)

An example text that is displayed on focus when no input has been entered yet, e.g. "max@muster.de".

### Info (3) (Optional)

Optional instructions about the field, e.g. "this will not be shared with your contacts". If provided, this text is displayed below the input by default.

### Character Count (4) (Optional)

Limits the number of characters that can be entered. When a limit is set, a counter is displayed, e.g. "14/75".

### Error / Improve / Required Input (5) (Optional)

Error text can be set to highlight the changes a user has to make for the information to validate, e.g. "please enter a valid e-mail address". The error text overwrites the information notes, if present.

For required fields, use this flag to display the corresponding information and validate the form accordingly.

## Sizes

Important: Use either only small or only large elements within groups.

### Large

Use large fields as the default option.

![Image Name](/assets/3_components/input-field/image-20200811100017924.png)

### Small

When space is limited, consistently use small size elements.

![Image Name](/assets/3_components/input-field/image-20200811100024147.png)

## Related Components
