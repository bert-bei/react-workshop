/* eslint-disable react/prop-types */
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { AppBar, Tabs, Tab } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DefaultExample from "./Example/DefaultExample";
import SignUpExample from "./Example/SignUpExample";
import DashboardExample from "./Example/DashboardExample";
import BlogExample from "./Example/BlogExample";
import PricingExample from "./Example/PricingExample";
import CheckoutExample from "./Example/CheckoutExample";
import { themeOptions } from "./customTheme";
import ReactExample from "./Todo/ReactExample";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export const App = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, index) => {
    setTabIndex(index);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={createTheme(themeOptions)}>
        <CssBaseline />
        <AppBar position="static">
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            variant="scrollable"
            textColor="inherit"
            indicatorColor="secondary"
            scrollButtons
            aria-label="preview-window-tabs"
            allowScrollButtonsMobile
          >
            <Tab label="ReactJS" />
            <Tab label="Instructions" />
            <Tab label="Sign Up" />
            <Tab label="Dashboard" />
            <Tab label="Blog" />
            <Tab label="Pricing" />
            <Tab label="Checkout" />
          </Tabs>
        </AppBar>
        <div>
          <TabPanel value={tabIndex} index={0}>
            <ReactExample />
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <DefaultExample />
          </TabPanel>
          <TabPanel value={tabIndex} index={2}>
            <SignUpExample />
          </TabPanel>
          <TabPanel value={tabIndex} index={3}>
            <DashboardExample />
          </TabPanel>
          <TabPanel value={tabIndex} index={4}>
            <BlogExample />
          </TabPanel>
          <TabPanel value={tabIndex} index={5}>
            <PricingExample />
          </TabPanel>
          <TabPanel value={tabIndex} index={6}>
            <CheckoutExample />
          </TabPanel>
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
};
