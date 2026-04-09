//recieves current tool seetings as props from CanvasPage

import './ToolPanel.css'
import StampPicker from '../StampPicker/StampPicker'

// an array of hex color strings
const colors = [
    '#000000',
    '#ffffff',
    '#ff3b3b',
    '#2196f3',
    '#ffdd57',
    '#4caf50',
    '#b596f9',
    '#ff69b4',
    '#795548',
]

// recieves data from CanvasPage as props
// doesnt manage state just displays controls canvas page tells when something happens
function ToolPanel(props) {
    return (
        <div className="tool-panel">

            {/* brush size tool */}
            <div className="tool-section">

                {/*a label displays the current brush size nuber as the slider drags */}
                <label className="tool-label">Brush Size: {props.brushSize}</label>
                <input
                    type="range" /*makes it a dragable slider */
                    min="1" /*slider goes from 1 to 50 */
                    max="50"
                    value={props.brushSize} /*connects the slider to state so it shows the current value */
                    onChange={(e) => props.setBrushSize(e.target.value)} /*every time the slider move the e.target.value gets passed to canvaspage by calling props.setBrushSize */
                    className="brush-slider"
                />
            </div>

        {/*color swatch tool */}
        <div className="tool-section">
            <label className="tool-label">Color</label>
            <div className="color-swatches">
                {/*loops through our color array */}
                {colors.map((color) => (
                    <button
                    /*in react .map needs a uniqe key prop 
                        were using hex color string */
                    key={color}
                    className="color-swatch"
                    /*this is inline css in jsx sets the background 
                        color of each swatch to its own color */
                    style={{
                        backgroundColor: color,
                        /*this is a ternary operator (a shorter if/else) if the currently selected
                            color equals this swatches colo give it a white border to show its selected
                            or else give it a dark border. {conditional rendering}  */
                        border: props.color === color ? '3px solid #fff' : '3px solid #333'
                    }}
                    /*a swatch is clicked calls setColor from CanvasPage with that
                        color. updates the color state in CanvasPage then flows back down as a prop */
                    onClick={() => props.setColor(color)}
                />
            ))}
        </div>
    </div>
            {/*tool selector */}
            <div className="tool-section">
                <label className="tool-label">Tool</label>
                <div className="tool-buttons">
                    <button
                /*Brush */
                /*IF the selected tool is brush add the active class 
                    to style it or ELSE just use tool-button */
                    className={props.selectedTool === 'brush' ? 'tool-button active' : 'tool-button'}
                onClick={() => props.setSelectedTool('brush')}
                >
                    🖌️ Brush
            </button>

                {/*Stamp */}
                {/*if the selected tool is stamp add the active class 
                    to style it or else just use tool-button */}
                <button
                className={props.selectedTool === 'stamp' ? 'tool-button active' : 'tool-button'}
                onClick={() => props.selectedTool === 'stamp'
                    ? props.setSelectedTool('brush')
                    : props.setSelectedTool('stamp')}
                >
                    🖃 Stamp
                </button>
            </div>
        </div>
            
        
        {props.selectedTool === 'stamp' ? (
            <StampPicker
            ///* only shows when the stamp tool is selected
            //conditional rendering using a ternary
            //if selectedTool is stamp render StampPicker menu
            // otherwise render nothing null
            //passes selectedStamp and onSelectStamp 
            // down to StampPicker as props */
            selectedStamp={props.selectedStamp}
            onSelectStamp={props.onSelectStamp}
        />
            ) : null}
      

            {/*clear button */}
            <div className="tool-section">
                {/* calls the function with this button 
                the logic happens on canvaspage*/}
                <button className="clear-button" onClick={props.onClear}>
                    🗑️ Clear Canvas
                </button>
            </div>
        </div>
        )
    }

export default ToolPanel