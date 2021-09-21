import { Grid, Link, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Controls from "../components/Controls";
import { Form } from "../components/useForm";
import { Typography } from "@material-ui/core";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import MainImage from "../static/img/login_img.svg";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
    },
  },

  siteName: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(2),
    },
  },
  paperDiv: {
    padding: `${theme.spacing(0)}px ${theme.spacing(0)}px ${theme.spacing(
      2
    )}px ${theme.spacing(0)}px !important`,
  },
  disabledSubmit: {
    backgroundColor: `${theme.palette.grey[300]} !important`,
    width: 250,
    minHeight: 50,
  },
  activeSubmit: {
    backgroundColor: "#236CC7 !important",
    width: 250,
    minHeight: 50,
  },
  loginImage: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inherit",
    },
  },
  title: {
    color: `${theme.palette.primary.main} !important`,
  },
}));

const ButtonSet = () => {
  // const [selected, setSelected] = useState(0);

  return (
    <Form>
      <Grid>
        <Grid
          style={{
            // maxHeight: "100vh",
            height: "5vh",
            display: "flex",
            alignItems: "left",
            flexWrap: "wrap",
            paddingLeft: "30px",
          }}
        >
          <PlaylistAddCheckIcon />
          <Typography>Terms</Typography>
        </Grid>
        <Grid
          container
          style={{
            boxShadow: "0px 2px 2px 1px rgba(0,0,0,0.21)",
            padding: "10px",
            borderRadius: "10px",
            overflow: "auto",
          }}
        >
          <Terms />
        </Grid>
      </Grid>
      {/* <Grid container alignItems="center">
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          style={{ marginTop: 20 }}
        >
          <Controls.Button
            text="Decline"
            style={{
              width: "20%",
              height: "100%",
              ...(selected === 0
                ? { color: "white", backgroundColor: "#236CC7" }
                : { color: "#236CC7", backgroundColor: "white" }),
            }}
            // style={{
            //   backgroundColor: "#236CC7",
            // }}
          />
          <Controls.Button
            text="Accept"
            style={{
              width: "20%",
              height: "100%",
              ...(selected === 1
                ? { color: "white", backgroundColor: "#236CC7" }
                : { color: "#236CC7", backgroundColor: "white" }),
            }}
            // style={{
            //   backgroundColor: "#236CC7",
            // }}
          />
        </Grid>
      </Grid> */}
    </Form>
  );
};

const Terms = () => {
  return (
    <Grid
      item
      xs={12}
      style={{
        // maxHeight: "100vh",
        padding: "30px",
        height: "50vh",
        paddingTop: "10px",
      }}
      container
      spacing={3}
    >
      <Typography
        align="justify"
        style={{
          marginTop: "10px",
          fontWeight: 400,
          fontSize: 15,
          marginBottom: 8,
        }}
      >
        <Typography
          align="left"
          style={{
            fontWeight: 600,
            fontSize: 15,
            marginBottom: 8,
          }}
        >
          Welcome to the Reviewia website.
        </Typography>
        These terms, conditions, and notices (“Terms”) govern your access to and use of the Reviewia website, including access and use through any other website or platforms or mobile applications, (“Site”).
        By accessing or using this Site in any manner, you agree to be bound by these Terms. Please read these Terms carefully. If you do not accept all of these Terms, you may not use this Site.
        Be sure to return to this page periodically to review the most current version of these Terms. We may modify these Terms or any additional terms that apply to this Site to, for example, reflect changes to the law or changes to this Site. We will notify you about material changes to these Terms by either sending a notice to the email address you provided to us and/or by placing a prominent notice of modifications to these Terms on this page. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted. However, changes addressing new functions or features of this Site or changes made for legal reasons will be effective immediately. If you do not agree to the modified Terms, you should discontinue your use of this Site.
        The terms “we”, “us”, “our” and “Reviewia” refer to Reviewia, Inc., a (). The term “you” refers to the person visiting this Site and/or contributing content on this Site. If you are accessing or using this Site on behalf of a business, that business accepts these Terms, and the term “you” also refers to that business.
      </Typography>

      <Typography
        align="justify"
        style={{
          marginTop: "10px",
          fontWeight: 400,
          fontSize: 15,
          marginBottom: 8,
        }}
      >
        <Typography
          align="left"
          style={{
            fontWeight: 600,
            fontSize: 15,
            marginBottom: 8,
          }}
        >
          Use of the Site
        </Typography>
        This Site allows you to search for and share information about technology products, services, and vendors, communicate with others, and/or create new content such as recommendations and reviews. You also can connect with those who post about products and services. To make sure that reviews are unbiased, current and real, we have developed Community Guidelines and use different mechanisms to verify that you are who you say you are. However, you decide what information you want to share with the public since you have the option to post your reviews, or not post any review at all.
        As a condition of your use of this Site, you warrant that (i) all information supplied by you on this Site is true, accurate, current, and complete, (ii) if you have a Reviewia account (“Registered User”), you will safeguard your account information and will supervise and be completely responsible for any use of your account by anyone other than you, and (iii) you are 18 years of age or older. Reviewia does not knowingly collect the information of anyone under the age of 18. We retain the right at our sole discretion to deny access to anyone to this Site and the content we offer, at any time and for any reason, including, but not limited to, for violation of these Terms.
        Please be advised that all reviews, including any endorsements, of third-party products, services, or vendors contained on this Site are the opinions of the reviewers of those products, services, or vendors and not those of Reviewia.
      </Typography>
      
      <Typography
        align="justify"
        style={{
          marginTop: "10px",
          fontWeight: 400,
          fontSize: 15,
          marginBottom: 8,
        }}
      >
        <Typography
          align="left"
          style={{
            fontWeight: 600,
            fontSize: 15,
            marginBottom: 8,
          }}
        >
          Prohibited Activities
        </Typography>
        The content and information on this Site (including, but not limited to, messages, data, information, text, photos, graphics,, icons, software, code, or other material), as well as the infrastructure used to provide such content and information, is proprietary to us, except as expressly provided in these Terms. You agree not to otherwise modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell or re-sell any such content or information obtained from or through this Site. Therefore, if there are more than two activities reported as not following Community Guidelines and Standards, conducted by a registered user, his/ her account will be banned from the system. The particular user will not be able to use the account to access services offered by Reviewia.
Additionally, you agree not to:
use this Site or its contents for any commercial purpose without our express written permission;
access, monitor, or copy any content or information of this Site using any robot, spider, scraper, or other automated means or any manual process for any purpose without our express written permission;
violate the restrictions in any robot exclusion headers on this Site or bypass or circumvent other measures employed to prevent or limit access to this Site;
take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately large load on our infrastructure;
deep-link to any portion of this Site for any purpose without our express written permission;
“frame”, “mirror”, or otherwise incorporate any part of this Site into any other website or mobile application without our prior written authorization;
attempt to modify, translate, adapt, edit, decompile, disassemble, or reverse engineer any software programs used by Reviewia in connection with this Site or the content we provide;
post reviews on products or services offered by your current employer or by direct competitors of your current employer; or
log in using an alias that masks your true identity.
      </Typography>

    </Grid>
  );
};

export default function TermsOfService() {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={false} className={classes.loginImage} md={5}>
        <Grid
          container
          justifyContent="center"
          style={{ flexDirection: "column", paddingLeft: 40 }}
        >
          <Link
            underline="none"
            variant="h3"
            align="center"
            component={RouterLink}
            to="/"
            className={classes.title}
          >
            Reviewia
          </Link>
          <img alt="" style={{ width: "100%" }} src={MainImage} />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={11} md={7} className={classes.wrapper}>
        <Grid item className={classes.siteName}>
          <Link
            underline="none"
            variant="h3"
            align="center"
            component={RouterLink}
            to="/"
            className={classes.title}
          >
            Reviewia
          </Link>
        </Grid>
        <Controls.Paper
          className={classes.paper}
          divClassName={classes.paperDiv}
        >
          <Grid container alignItems="center">
            <Grid
              item
              xs={12}
              style={{
                backgroundColor: "#236CC7",
                boxShadow: "0px 2px 2px 1px rgba(0,0,0,0.21)",
                minHeight: 50,
              }}
            >
              <Typography
                variant="h6"
                align="center"
                style={{
                  marginTop: "10px",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                Reviewia Terms of Service
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h7"
                align="left"
                style={{
                  marginTop: "20px",
                  marginLeft: 40,
                  marginRight: 40,
                  fontWeight: 600,
                }}
                component="div"
              >
                Terms of Service
              </Typography>
              <Typography
                variant="h7"
                align="left"
                style={{
                  marginLeft: 40,
                  marginRight: 40,
                  fontWeight: 200,
                }}
                component="div"
              >
                Last updated on August 29, 2021
              </Typography>
            </Grid>
          </Grid>
          <ButtonSet />
        </Controls.Paper>
      </Grid>
    </Grid>
  );
}
