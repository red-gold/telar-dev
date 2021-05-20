// Copyright (c) 2021 Amirhossein Movahedi (@qolzam)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

import Grid from "@material-ui/core/Grid";
import {
  experimentalStyled as styled,
  useTheme,
} from "@material-ui/core/styles";
import CommunityIcon from "@material-ui/icons/PeopleRounded";
import RawCheckIcon from "@material-ui/icons/CheckRounded";
import RawConstructionIcon from "@material-ui/icons/HandymanRounded";
import RawOptionIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import ProfessionalIcon from "@material-ui/icons/TrainRounded";
import EnterpriseIcon from "@material-ui/icons/AirplanemodeActiveRounded";
import CustomIcon from "@material-ui/icons/DashboardCustomize";
import { green, yellow } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import MainLayout from "../../layouts/main";
import { Tooltip } from "@material-ui/core";

const PricingItem = styled(Paper)(({ theme }) => ({
  // TODO withStyles removal
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid #babec9",
  boxShadow: "unset",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: 500,
}));

const PricingGridItem = styled(Grid)(({ theme }) => ({
  maxWidth: "315px !important",
}));

const ConstructionIcon = styled((props) => (
<Tooltip title="Under development">
  <RawConstructionIcon {...props} />
  </Tooltip>
  ))(({ theme }) => ({
  marginRight: 5,
  color: yellow[600],
  fontSize: 18
}));

const CheckIcon = styled(RawCheckIcon)(({ theme }) => ({
  marginRight: 5,
  color: green[600],
}));

const OptionIcon = styled(RawOptionIcon)(({ theme }) => ({
  marginRight: 5,
}));

const CheckItem = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontWeight: 500,
  textAlign: "left",
});

const CheckList = styled("div")({
  padding: 10,
});

const PricingHead = styled("div")({
  width: "100%",
});

const PricingFooter = styled("div")({
  width: "100%",
});

const Price = styled("h2")({
  paddingTop: 5,
});

function Pricing() {
  const theme = useTheme();
  return (
    <MainLayout title="Pricing">
      <Container
        maxWidth="md"
        sx={{ textAlign: "center", marginTop: 3, marginBottom: 3 }}
      >
        <h1>Create a modern social network on your own</h1>

        <p>
          Move from your idea to production with just few clicks, enjoy flexible
          plans for all social network ideas. Findout wich plan is yours.
        </p>
      </Container>
      <Grid
        container
        spacing={2}
        sx={{ padding: 2, paddingBottom: 10 }}
        justifyContent="center"
        alignItems="center"
      >
        {/* Community */}
        <PricingGridItem item xs={12} sm={6} md={4} alignItems="center">
          <PricingItem>
            <PricingHead>
              <Avatar sx={{ margin: "auto", marginBottom: 1 }}>
                <CommunityIcon />
              </Avatar>
              <h3>Community</h3>
              <p>Essentials to get started your idea</p>
              <CheckList>
                <CheckItem>
                  <CheckIcon />
                  Open source
                </CheckItem>
                <CheckItem>
                  <CheckIcon />
                  Basic social services
                </CheckItem>
                <CheckItem>
                  <CheckIcon />
                  Community support
                </CheckItem>
                <CheckItem>
                  <CheckIcon />
                  PWA(Progressive Web App) 
                </CheckItem>
                <CheckItem>
                  <CheckIcon />
                  MIT Licence
                </CheckItem>
              </CheckList>
            </PricingHead>
            <PricingFooter>
              <Divider />
              <Price>0$</Price>
              <Button href='/docs/start/introduction' variant="contained" color="secondary" fullWidth>
                Get Started
              </Button>
            </PricingFooter>
          </PricingItem>
        </PricingGridItem>
        {/* Professional */}
        <PricingGridItem item xs={12} sm={6} md={4} alignItems="center">
          <PricingItem
            sx={{
              border: `2px solid ${theme.palette.primary.main}`,
              boxShadow: `0 0 0 2px ${theme.palette.primary.main}, 0 0 0 5px #e9e6ff;`,
            }}
          >
            <PricingHead>
              <Avatar
                sx={{
                  margin: "auto",
                  marginBottom: 1,
                  backgroundColor: theme.palette.primary.main,
                }}
              >
                <ProfessionalIcon />
              </Avatar>
              <h3>Professional</h3>
              <p>Essentials to get started your idea</p>
              <CheckList>
                <CheckItem>
                  <ConstructionIcon />
                  Admin portal
                </CheckItem>
                <CheckItem>
                  <ConstructionIcon />
                  Full social services
                </CheckItem>
                <CheckItem>
                  <CheckIcon />
                  PWA(Progressive Web App) 
                </CheckItem>
                <CheckItem>
                  <ConstructionIcon />
                  Mobile app for android and IOS
                </CheckItem>
                <CheckItem>
                  <ConstructionIcon />
                  Desktop app for Windows, Linux and Mac OS
                </CheckItem>
                <CheckItem>
                  <ConstructionIcon />
                  Push notifications  
                </CheckItem>
                <CheckItem>
                  <CheckIcon />
                  Prioritized email support
                </CheckItem>
                <CheckItem>
                  <CheckIcon />
                  Double License
                </CheckItem>
                <CheckItem>
                  <CheckIcon />
                  Free Upgrade
                </CheckItem>
                <CheckItem>
                  <CheckIcon />
                  Free Setup
                </CheckItem>
              </CheckList>
            </PricingHead>
            <PricingFooter>
              <Divider />
              <Price>Under Development</Price>
              <Button href='mailto:sales@telar.dev' variant="outlined" color="secondary" fullWidth>
                Contact Us
              </Button>
            </PricingFooter>
          </PricingItem>
        </PricingGridItem>

        {/* Enterprise */}
        <PricingGridItem item xs={12} sm={6} md={4} alignItems="center">
          <PricingItem
            sx={{
              border: `2px solid ${theme.palette.primary.main}`,
              boxShadow: `0 0 0 2px ${theme.palette.primary.main}, 0 0 0 5px #e9e6ff;`,
            }}
          >
            <PricingHead>
              <Avatar
                sx={{
                  margin: "auto",
                  marginBottom: 1,
                  backgroundColor: theme.palette.primary.main,
                }}
              >
                <EnterpriseIcon />
              </Avatar>
              <h3>Enterprise</h3>
              <p>Essentials to get started your idea</p>
              <CheckList>
                <CheckItem>
                  <CheckIcon />
                  Includes everything in Professional
                </CheckItem>
                <CheckItem>
                  <ConstructionIcon />
                  Voice call
                </CheckItem>
                <CheckItem>
                  <ConstructionIcon />
                  Video call
                </CheckItem>
                <CheckItem>
                  <ConstructionIcon />
                  Market place
                </CheckItem>
                <CheckItem>
                  <ConstructionIcon />
                  Pub/Sub implemetation for state changes
                </CheckItem>
                <CheckItem>
                  <ConstructionIcon />
                  Advanced Search Engine (Elastic Search)
                </CheckItem>
                <CheckItem>
                  <ConstructionIcon />
                  AI Solutions (Smart recommendation/personalization)
                </CheckItem>
              </CheckList>
            </PricingHead>
            <PricingFooter>
              <Divider />
              <Price>Under Development</Price>
              <Button href='mailto:sales@telar.dev' variant="outlined" color="secondary" fullWidth>
                Contact Us
              </Button>
            </PricingFooter>
          </PricingItem>
        </PricingGridItem>

        {/* Custom */}
        <PricingGridItem item xs={12} sm={6} md={4} alignItems="center">
          <PricingItem
          >
            <PricingHead>
              <Avatar
                sx={{
                  margin: "auto",
                  marginBottom: 1
                }}
              >
                <CustomIcon />
              </Avatar>
              <h3>Custom</h3>
              <p>Need a custom plan?</p>
              <CheckList>
                <CheckItem>
                  <OptionIcon />
                  Development support
                </CheckItem>
                <CheckItem>
                  <OptionIcon />
                  Frontend(Web,Desktop,Mobile) only
                </CheckItem>
                <CheckItem>
                  <OptionIcon />
                  API backend only
                </CheckItem>
                <CheckItem>
                  <OptionIcon />
                  Select some of Enterprise features only
                </CheckItem>
                <CheckItem>
                  <OptionIcon />
                  Advanced Search Engine (Elastic Search)
                </CheckItem>
                <CheckItem>
                  <OptionIcon />
                  AI Solutions (Smart recommendation/personalization)
                </CheckItem>
              </CheckList>
            </PricingHead>
            <PricingFooter>
              <Divider />
              <div style={{height:50}}/>
              <Button href='mailto:sales@telar.dev' variant="outlined" color="secondary" fullWidth>
                Contact Us
              </Button>
            </PricingFooter>
          </PricingItem>
        </PricingGridItem>
      </Grid>
      
    </MainLayout>
  );
}

export default Pricing;
