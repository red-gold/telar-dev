import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import APIIcon from "@mui/icons-material/ConnectingAirportsOutlined";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton, ListItemIcon } from "@mui/material";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function MicroserviceItem({ microservice, isFirstItem }) {
  const history = useHistory();
  const location = useLocation();

  const handleClick = () => {
    history.push(`?micro=${encodeURIComponent(microservice.name)}`);
  };

  const isSelected =
    decodeURIComponent(location.search).includes(
      `?micro=${encodeURIComponent(microservice.name)}`
    ) ||
    (location.search === "" && isFirstItem);

  return (
    <ListItemButton
      // @ts-ignore
      onClick={handleClick}
      selected={isSelected}
    >
      <ListItemIcon>
        <APIIcon />
      </ListItemIcon>
      <ListItemText
        primary={capitalizeFirstLetter(microservice.name)}
        secondary={`${microservice.apiPath} - ${microservice.description}`} // Concatenate apiPath and description
      />
    </ListItemButton>
  );
}

export default MicroserviceItem;
