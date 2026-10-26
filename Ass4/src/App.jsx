import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function App() {
  const departments = [
    "Computer Science",
    "Information Technology",
    "Electronics",
    "Mechanical",
    "Civil",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f3f8",
        padding: "35px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto 25px auto",
          background:
            "linear-gradient(135deg, #6d28d9, #8b5cf6)",
          color: "white",
          padding: "28px 35px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(109, 40, 217, 0.25)",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: "700",
          }}
        >
          Student Dashboard
        </h1>

        <p
          style={{
            margin: "8px 0 0 0",
            fontSize: "16px",
            opacity: 0.9,
          }}
        >
          Manage your student information
        </p>
      </div>

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "28px",
          borderRadius: "16px",
          boxShadow: "0 5px 20px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Breadcrumbs */}
        <div
          style={{
            marginBottom: "22px",
          }}
        >
          <Breadcrumbs>
            <Link
              underline="hover"
              color="inherit"
              href="#"
            >
              Home
            </Link>

            <Link
              underline="hover"
              color="inherit"
              href="#"
            >
              Students
            </Link>

            <Typography color="text.primary">
              Profile
            </Typography>
          </Breadcrumbs>
        </div>

        {/* Alert */}
        <Alert
          severity="success"
          style={{
            marginBottom: "25px",
            borderRadius: "10px",
          }}
        >
          Student information loaded successfully!
        </Alert>

        {/* Department Section */}
        <div
          style={{
            marginBottom: "25px",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontWeight: "600",
              marginBottom: "10px",
              color: "#4c1d95",
            }}
          >
            Department
          </Typography>

          <Autocomplete
            options={departments}
            style={{
              width: "100%",
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Department"
              />
            )}
          />
        </div>

        {/* Skills Section */}
        <div
          style={{
            marginBottom: "25px",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontWeight: "600",
              marginBottom: "12px",
              color: "#4c1d95",
            }}
          >
            Skills
          </Typography>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <Chip
              label="React"
              color="primary"
              style={{
                fontWeight: "500",
              }}
            />

            <Chip
              label="JavaScript"
              color="secondary"
              style={{
                fontWeight: "500",
              }}
            />

            <Chip
              label="MongoDB"
              color="success"
              style={{
                fontWeight: "500",
              }}
            />

            <Chip
              label="Python"
              color="info"
              style={{
                fontWeight: "500",
              }}
            />
          </div>
        </div>

        {/* Actions */}
        <div
          style={{
            marginBottom: "25px",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontWeight: "600",
              marginBottom: "12px",
              color: "#4c1d95",
            }}
          >
            Actions
          </Typography>

          <ButtonGroup
            variant="contained"
            style={{
              borderRadius: "8px",
            }}
          >
            <Button>Edit</Button>
            <Button>Save</Button>
            <Button color="error">
              Cancel
            </Button>
          </ButtonGroup>
        </div>

        {/* Accordion */}
        <Accordion
          style={{
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            style={{
              backgroundColor: "#f5f3ff",
            }}
          >
            <Typography
              style={{
                fontWeight: "600",
                color: "#4c1d95",
              }}
            >
              Student Information
            </Typography>
          </AccordionSummary>

          <AccordionDetails
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
            }}
          >
            <Typography
              style={{
                marginBottom: "10px",
              }}
            >
              <strong>Name:</strong> Tejal Powar
            </Typography>

            <Typography
              style={{
                marginBottom: "10px",
              }}
            >
              <strong>Course:</strong> Computer Science
              Engineering
            </Typography>

            <Typography>
              <strong>College:</strong> DYPCET
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default App;