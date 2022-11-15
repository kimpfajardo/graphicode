import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((e) => ({
    btn: {
        border: "1px solid black",
        background: "white",
        color: '#000',
        fontFamily: 'monospace',
        textTransform: 'capitalize'
    },
    elevate: {
        transition: "all 100ms linear",

        '&:hover': {
            transform: 'translate(-10px, -20px)',
            boxShadow: "1px 1px 0px blue, 2px 2px 0px blue, 3px 3px 0px blue,4px 4px 0px blue, 5px 5px 0px blue, 6px 6px 0px blue, 7px 7px 0px blue,8px 8px 0px blue, 9px 9px 0px blue",
            outline: 'none',
            background: "white",
        }
    }
}))