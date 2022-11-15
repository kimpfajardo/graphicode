import { Button as Btn } from "@mui/material";
import { useStyles } from "./styles/button.styles";
export interface BasicButtonProps {
  text: string;
  variant?: "contained" | "outlined" | "text";
  onClick: any;
  sx: any;
  className: any;
  disabled: boolean;
}
const Button = (props: BasicButtonProps) => {
  const {
    text,
    variant = "contained",
    onClick,
    sx = {},
    className = {},
    disabled,
  } = props;
  const classes = useStyles();

  return (
    <Btn
      onClick={onClick}
      className={`${classes.btn} ${className}`}
      variant={variant}
      sx={sx}
      disabled={disabled}
    >
      {text}
    </Btn>
  );
};

export default Button;
