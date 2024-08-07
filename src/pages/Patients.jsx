import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faNotesMedical,
  faLungs,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  fontSize: "3rem",
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const forms = [
  { title: "Breast Cancer Screening", icon: faHeartbeat, color: "#FF69B4" },
  { title: "Diabetes Risk Assessment", icon: faNotesMedical, color: "#4CAF50" },
  { title: "Lung Health Questionnaire", icon: faLungs, color: "#2196F3" },
  { title: "Mental Health Check", icon: faBrain, color: "#9C27B0" },
  {
    title: "Cardiovascular Risk Evaluation",
    icon: faHeartbeat,
    color: "#F44336",
  },
  {
    title: "Nutrition and Lifestyle Survey",
    icon: faNotesMedical,
    color: "#FF9800",
  },
];

const Patients = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Health Forms
      </Typography>
      <Grid container spacing={3}>
        {forms.map((form, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <IconWrapper>
                  <FontAwesomeIcon
                    icon={form.icon}
                    style={{ color: form.color }}
                  />
                </IconWrapper>
                <Typography gutterBottom variant="h5" component="div">
                  {form.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Fill out this form to assess your health and get personalized
                  recommendations.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: "auto" }}>
                  Start Form
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Patients;
