

import { useState } from 'react'
import Canvas from '../../components/Canvas/Canvas'
import './CanvasPage.css'


function CanvasPage() {

    const [color, setColor] = useState('#000000')

    const [brushSize, setBrushSize] = useState(5)

    return (
        <div className="canvas-page">
            <Canvas
                color={color}
                brushSize={brushSize}
            />
        </div>
    )
}

export default CanvasPage