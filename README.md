# Solo Project Color Scheme Generator
A solo project completed after the 'Working with APIs' module on Scrimba. I built it from scratch using React, following the requirements and the provided Figma design. I did the light mode version for the UI. It features an async API call to the Color API to display various color schemes. The stretch goal of enabling users to click hex values to copy to the clipboard was implemented. Additionally, I added an option for users to choose different color code displays.

The color scheme generator allows an user to select a color from the color picker and select a mode to generate 5 different color schemes, and copy a selected color's color code value (hex, rgb, hsl, cmyk).

## Tech Stack
- React
- Vite (with HMR)
- @vitejs/plugin-react 
- ESLint 
- Babel

## Dependencies
- "react": "^19.2.4",
- "react-dom": "^19.2.4"

## Installation
Clone the repository, navigate into the project folder, and install dependencies:

```bash
npm install
```

## Start the development server

```bash
npm run dev
```

## Requirements 
- Choose seed color with an input type of color.
- Choose color scheme mode in a select input box. 
- Clicking button makes request to the Color API to get a color scheme
- Display the scheme colors and hex values on the page
- Stretch goal: click hex values to copy to clipboard 


## Usage/Examples

![App Screenshot](./assets/screenshots/ColorSchemePicker.PNG)

### App Demo
![App Screenshot](./assets/screenshots/ColorSchemeGeneratorDemo.gif)


## License

This project is licensed under the MIT License.  
See the [License](./LICENSE) file for details.

## Acknowledgements/References

 - [Color API](https://www.thecolorapi.com/docs#schemes)
 - [Figma Design File for Color Scheme Generator - Scrimba](https://www.figma.com/file/twasy8Bca4hW7gunLFSLoY/Color-Picker?node-id=2%3A1155)