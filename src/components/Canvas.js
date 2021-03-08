import { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import Brush from '../tools/Brush'

const useStyle = makeStyles(() => ({
    canvasWrapper: {
        marginTop: 100,
    },

    canvas: {
        border: "1px solid #000",
        background: "#fff"
    }
}))

export const Canvas = observer(() => {
    const classes = useStyle()

    const canvasRef = useRef()

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    }, [])

    return(
        <Grid container item justify="center" alignItems="center" className={classes.canvasWrapper}>
        <canvas width={600} height={480} className={classes.canvas} ref={canvasRef}></canvas>
        </Grid>
    )
})