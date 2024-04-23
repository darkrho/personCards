import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const PersonCard = ({ person }) => {
  const { gender, name, email, location, registered, picture, phone } = person;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={picture.medium}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.title} {name.first} {name.last}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {email}
          </Typography>
          <Typography>
            Direction: {location.street.name} {location.street.number}
          </Typography>
          Join date:{registered.date}
          <Typography></Typography>
          Gender: {gender}
          <Typography></Typography>
          <Typography>Contact: {phone}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PersonCard;
