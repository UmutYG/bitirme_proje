import Box from "@mui/material/Box"
import Rating from "@mui/material/Rating"

export default function StarRating(props: { value: number }) {
  console.log(props.value)
  const convertedValue =
    props.value > 4.5 && props.value < 5 ? 4.5 : props.value

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="read-only"
        value={convertedValue}
        readOnly
        precision={0.5}
        className="product__star-rating"
      />
    </Box>
  )
}
