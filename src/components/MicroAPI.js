// @ts-nocheck
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import MainLayout from "../layouts/main";
import List from "@mui/material/List";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import MicroserviceItem from "../components/MicroserviceItem";
import { useLocation } from "react-router-dom";

const Sidebar = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  paddingTop: theme.spacing(8),
  maxHeight: "100%",
  overflowY: "auto",
  position: "sticky",
  top: 0,
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MicroAPI({ projectName }) {
  const query = useQuery();
  const [microservices, setMicroservices] = useState([]);

  const queryMicro = query.get("micro");

  useEffect(() => {
    fetch(`/apis/${projectName}/swagger.json`)
      .then((response) => response.json())
      .then((data) => {
        setMicroservices(data || []);
      })
      .catch((error) =>
        console.error("Error loading the swagger.json file:", error)
      );
  }, []);

  const getSwaggerUrl = () => {
    if (queryMicro) {
      return `/apis/${projectName}/${queryMicro}.json`;
    } else if (microservices.length > 0) {
      return `/apis/${projectName}/${microservices[0].name}.json`;
    } else {
      return "";
    }
  };

  return (
    <MainLayout title="Telar Micros API">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Sidebar>
            <List>
              {microservices.map((microservice, index) => (
                <MicroserviceItem
                  key={index}
                  microservice={microservice}
                  isFirstItem={index === 0}
                />
              ))}
            </List>
          </Sidebar>
        </Grid>
        <Grid item xs={12} md={9}>
          <Container>
            <div id="swagger-ui">
              <SwaggerUI url={getSwaggerUrl()} />
            </div>
          </Container>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default MicroAPI;
