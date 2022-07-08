import React from "react";

import { Card,  Typography } from "@material-ui/core";
const Cards = (props) => {
  return(
    <Card style={{padding: 10}}>
        
        <Typography>{props.text}</Typography>
        
    </Card>
  )
  
};

export default Cards;
