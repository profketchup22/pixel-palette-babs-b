
import { useRef, useState } from 'react'
//recieves current tool settings as props fom canvaspage
import './Canvas.css'

function Canvas(props) {
    // grabs canvas element from browser
    // starts out as null becasue canvas hasnt loaded yet whne react first runs

    const canvasRef = useRef(null)

    // isDrawing tracks whether the mouse button is currently held down
    const [isDrawing, setIsDrawing] = useState(false)

    // starts when the user presses the mouse button
    function startDrawing(e) {

        // gets the drawing context from the canvas elemnt
        //drawing in 2 dimesions
        const ctx = canvasRef.current.getContext('2d')

        // begin a new path so each stroke is independent
        ctx.beginPath()

        //move to sets the starting point of the line
        //e.nativeevent.offsetX and offsetY are the x and y coordinates
        //of where the mouse is relative to the canvas elemnt
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)

        //setIsDrawing to true so onMouseMove knows too start drawing
        setIsDrawing(true)
    }

    // this runs continuously as the mouse moves over the canvas
    function draw(e) {

        // if mouse button is not held down do nothing
        if (!isDrawing) return
        // get the drawing context again
        const ctx = canvasRef.current.getContext('2d')
        // sets the color / prop passed fomr CanvasPage
        ctx.strokeStyle = props.color
        //sets the thickness / prop passed from CanvasPage
        ctx.lineWidth = props.brushSize
        // makes the pen tip smooth and rounded
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        // lineTo draws a line from the last position to the current position
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        // stroke actually makes the line visible on the canvas
        ctx.stroke()
    }

    // runs when the user releases the mouse button
    function stopDrawing() {
        // stops making lines
        setIsDrawing(false)
    }
    return (
        <canvas
            ref={canvasRef}
            className="canvas"
            width={800}
            height={550}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            />
    )
}

export default Canvas