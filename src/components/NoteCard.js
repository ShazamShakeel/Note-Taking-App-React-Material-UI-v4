import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import { Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === "Work") {
        return "1px solid red";
      } else if(note.category === "Reminder"){
          return "1px solid blue";
      } else if(note.category === "Todo") {
          return "1px solid green";
      }
    }
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "Work") {
        return 'red';
      } else if(note.category === "Reminder"){
          return "blue";
      } else if(note.category === "Todo") {
          return "green";
      }
    }
  }
},
);

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={2} className={classes.test}>
         <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>}
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
