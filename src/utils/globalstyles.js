import { withStyles } from "@mui/styles";

const styles = theme => ({
    "@global": {
        "*:focus": {
            outline: 0
        },
        gradientText : {
            color: theme.palette.common.white
        },
    }
});

const GlobalStyles = () => {
    return null;
}

export default withStyles(styles, { withTheme: true })(GlobalStyles);
