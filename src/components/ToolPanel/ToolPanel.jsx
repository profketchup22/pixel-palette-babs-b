//recieves current tool seetings as props from CanvasPage

import './ToolPanel.css'
import StampPicker from '../StampPicker/StampPicker'
import ColorPicker from '../ColorPicker/ColorPicker'


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

        <div className="tool-section">
            <ColorPicker
            color={props.color}
            setColor={props.setColor}
            />
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
                    💌 Stamp
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