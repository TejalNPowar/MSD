import { useState } from "react";

import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import LinearProgress from "@mui/material/LinearProgress";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Popover from "@mui/material/Popover";
import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [page, setPage] = useState(1);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eef3f8",
        padding: "35px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: "1050px",
          margin: "0 auto 25px auto",
          background:
            "linear-gradient(135deg, #1565c0, #42a5f5)",
          color: "white",
          padding: "30px 35px",
          borderRadius: "16px",
          boxShadow:
            "0 8px 20px rgba(21, 101, 192, 0.25)",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "32px",
          }}
        >
          MUI Component Showcase
        </h1>

        <p
          style={{
            margin: "8px 0 0",
            opacity: 0.9,
          }}
        >
          Exploring different Material UI components
        </p>
      </div>

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "16px",
          boxShadow:
            "0 5px 20px rgba(0,0,0,0.08)",
        }}
      >
        {/* Chips */}
        <section
          style={{
            marginBottom: "25px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#1565c0",
            }}
          >
            Chips
          </h2>

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
            />

            <Chip
              label="JavaScript"
              color="secondary"
            />

            <Chip
              label="Material UI"
              color="success"
            />

            <Chip
              label="MongoDB"
              color="info"
            />
          </div>
        </section>

        <Divider style={{ margin: "25px 0" }} />

        {/* Two Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Progress */}
          <div
            style={{
              padding: "22px",
              backgroundColor: "#f8fbff",
              borderRadius: "12px",
              border: "1px solid #e0eaf5",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#1565c0",
              }}
            >
              Progress
            </h2>

            <p>Project Completion: 70%</p>

            <LinearProgress
              variant="determinate"
              value={70}
              style={{
                height: "10px",
                borderRadius: "5px",
              }}
            />
          </div>

          {/* Rating */}
          <div
            style={{
              padding: "22px",
              backgroundColor: "#f8fbff",
              borderRadius: "12px",
              border: "1px solid #e0eaf5",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#1565c0",
              }}
            >
              Rating
            </h2>

            <Rating
              defaultValue={4}
              size="large"
            />

            <p
              style={{
                color: "#666",
                marginBottom: 0,
              }}
            >
              Rate your experience
            </p>
          </div>

          {/* Skeleton */}
          <div
            style={{
              padding: "22px",
              backgroundColor: "#f8fbff",
              borderRadius: "12px",
              border: "1px solid #e0eaf5",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#1565c0",
              }}
            >
              Skeleton
            </h2>

            <Skeleton
              variant="text"
              width="75%"
              height={40}
            />

            <Skeleton
              variant="rectangular"
              width="100%"
              height={70}
              style={{
                borderRadius: "8px",
                marginTop: "8px",
              }}
            />
          </div>

          {/* Menu */}
          <div
            style={{
              padding: "22px",
              backgroundColor: "#f8fbff",
              borderRadius: "12px",
              border: "1px solid #e0eaf5",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#1565c0",
              }}
            >
              Menu
            </h2>

            <Button
              variant="contained"
              onClick={(event) =>
                setMenuAnchor(event.currentTarget)
              }
            >
              Open Menu
            </Button>

            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={() =>
                setMenuAnchor(null)
              }
            >
              <MenuItem
                onClick={() =>
                  setMenuAnchor(null)
                }
              >
                Home
              </MenuItem>

              <MenuItem
                onClick={() =>
                  setMenuAnchor(null)
                }
              >
                Profile
              </MenuItem>

              <MenuItem
                onClick={() =>
                  setMenuAnchor(null)
                }
              >
                Settings
              </MenuItem>
            </Menu>
          </div>

          {/* Popover */}
          <div
            style={{
              padding: "22px",
              backgroundColor: "#f8fbff",
              borderRadius: "12px",
              border: "1px solid #e0eaf5",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#1565c0",
              }}
            >
              Popover
            </h2>

            <Button
              variant="outlined"
              onClick={(event) =>
                setPopoverAnchor(
                  event.currentTarget
                )
              }
            >
              Show Information
            </Button>

            <Popover
              open={Boolean(popoverAnchor)}
              anchorEl={popoverAnchor}
              onClose={() =>
                setPopoverAnchor(null)
              }
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div
                style={{
                  padding: "20px",
                  width: "220px",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: "8px",
                  }}
                >
                  MUI Information
                </Typography>

                <Typography>
                  This is a simple Popover
                  component.
                </Typography>
              </div>
            </Popover>
          </div>

          {/* Pagination */}
          <div
            style={{
              padding: "22px",
              backgroundColor: "#f8fbff",
              borderRadius: "12px",
              border: "1px solid #e0eaf5",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#1565c0",
              }}
            >
              Pagination
            </h2>

            <Pagination
              count={5}
              page={page}
              onChange={(event, value) =>
                setPage(value)
              }
              color="primary"
            />

            <p
              style={{
                color: "#666",
                marginBottom: 0,
              }}
            >
              Current Page: {page}
            </p>
          </div>

          {/* FAB */}
          <div
            style={{
              padding: "22px",
              backgroundColor: "#f8fbff",
              borderRadius: "12px",
              border: "1px solid #e0eaf5",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#1565c0",
              }}
            >
              Floating Action Button
            </h2>

            <Fab
              color="primary"
              aria-label="add"
            >
              <AddIcon />
            </Fab>
          </div>
        </div>

        {/* Bottom Divider */}
        <Divider style={{ margin: "30px 0" }} />

        {/* Speed Dial */}
        <div
          style={{
            padding: "22px",
            backgroundColor: "#f8fbff",
            borderRadius: "12px",
            border: "1px solid #e0eaf5",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#1565c0",
            }}
          >
            Speed Dial
          </h2>

          <SpeedDial
            ariaLabel="Speed Dial"
            icon={<SpeedDialIcon />}
            direction="right"
          >
            <SpeedDialAction
              icon={<AddIcon />}
              tooltipTitle="Add"
            />

            <SpeedDialAction
              icon={<EditIcon />}
              tooltipTitle="Edit"
            />

            <SpeedDialAction
              icon={<DeleteIcon />}
              tooltipTitle="Delete"
            />
          </SpeedDial>
        </div>
      </div>
    </div>
  );
}

export default App;