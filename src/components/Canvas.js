import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
    canvasWrapper: {
        marginTop: 100,
    },

    canvas: {
        border: "1px solid #000",
        background: "#fff"
    }
}))

export const Canvas = () => {
    const classes = useStyle()
    return(
        <Grid container item justify="center" alignItems="center" className={classes.canvasWrapper}>
        <canvas width={600} height={480} className={classes.canvas}></canvas>
        </Grid>
    )
}