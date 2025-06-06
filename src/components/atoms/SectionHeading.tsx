import Typography from "@mui/material/Typography";

const SectionHeading = ({
  text = "Heading",
  variant = "h6",
  fontWeight = "700",
  ...props
}: any) => {
  return (
    <Typography variant={variant} fontWeight={fontWeight} {...props}>
      {text}
    </Typography>
  );
};

export default SectionHeading;
