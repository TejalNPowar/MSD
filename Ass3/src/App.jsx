import { useState } from "react";

import Switch from "@mui/material/Switch";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import CircularProgress from "@mui/material/CircularProgress";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tooltip from "@mui/material/Tooltip";

import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "#111827" : "#f3f4f6",
        color: darkMode ? "#ffffff" : "#1f2937",
        transition: "0.3s",
      }}
    >
      {/* Header */}
      <div
        style={{
          height: "70px",
          backgroundColor: darkMode ? "#1f2937" : "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 35px",
          boxShadow: darkMode
            ? "0 2px 10px rgba(0,0,0,0.4)"
            : "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Button
            onClick={() => setOpen(true)}
            style={{
              minWidth: "42px",
              color: darkMode ? "#c4b5fd" : "#6d28d9",
            }}
          >
            <MenuIcon />
          </Button>

          <h2
            style={{
              margin: 0,
              fontSize: "23px",
              fontWeight: "600",
              color: darkMode ? "#e9d5ff" : "#5b21b6",
            }}
          >
            My Dashboard
          </h2>
        </div>

        {/* Right Side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
          }}
        >
          {/* Notification */}
          <Tooltip title="Notifications">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon
                style={{
                  color: darkMode ? "#ddd6fe" : "#6d28d9",
                  cursor: "pointer",
                }}
              />
            </Badge>
          </Tooltip>

          {/* Avatar */}
          <Avatar
            style={{
              backgroundColor: darkMode ? "#7c3aed" : "#6d28d9",
              width: "40px",
              height: "40px",
            }}
          >
            TP
          </Avatar>

          {/* Theme Switch */}
          <Switch
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
        </div>
      </div>

      {/* Drawer */}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
      >
        <div
          style={{
            width: "250px",
            height: "100%",
            padding: "25px",
            backgroundColor: darkMode ? "#1f2937" : "#ffffff",
            color: darkMode ? "#ffffff" : "#1f2937",
          }}
        >
          <h2
            style={{
              color: darkMode ? "#c4b5fd" : "#6d28d9",
              marginBottom: "30px",
            }}
          >
            Menu
          </h2>

          <p
            style={{
              padding: "12px",
              borderRadius: "8px",
              backgroundColor: darkMode ? "#374151" : "#f3e8ff",
              color: darkMode ? "#ddd6fe" : "#6d28d9",
              cursor: "pointer",
            }}
          >
            Home
          </p>

          <p
            style={{
              padding: "12px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Profile
          </p>

          <p
            style={{
              padding: "12px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Settings
          </p>
        </div>
      </Drawer>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "50px 30px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "34px",
            fontWeight: "700",
            color: darkMode ? "#f9fafb" : "#111827",
          }}
        >
          Dashboard
        </h1>

        <p
          style={{
            marginTop: "8px",
            marginBottom: "35px",
            color: darkMode ? "#9ca3af" : "#6b7280",
            fontSize: "16px",
          }}
        >
          Welcome back! Here's your dashboard.
        </p>

        {/* Main Card */}
        <div
          style={{
            backgroundColor: darkMode ? "#1f2937" : "#ffffff",
            borderRadius: "16px",
            padding: "25px",
            boxShadow: darkMode
              ? "0 8px 25px rgba(0,0,0,0.35)"
              : "0 8px 25px rgba(0,0,0,0.08)",
            border: darkMode
              ? "1px solid #374151"
              : "1px solid #e5e7eb",
          }}
        >
          {/* Tabs */}
          <Tabs
            value={tab}
            onChange={(e, newValue) => setTab(newValue)}
            centered
          >
            <Tab label="Home" />
            <Tab label="Profile" />
            <Tab label="Settings" />
          </Tabs>

          {/* Tab Content */}
          <div
            style={{
              minHeight: "270px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Home */}
            {tab === 0 && (
              <>
                <CircularProgress
                  size={55}
                  thickness={4}
                />

                <h3
                  style={{
                    marginBottom: "5px",
                    color: darkMode ? "#e9d5ff" : "#5b21b6",
                  }}
                >
                  Welcome!
                </h3>

                <p
                  style={{
                    color: darkMode ? "#9ca3af" : "#6b7280",
                    margin: 0,
                  }}
                >
                  Your dashboard is loading...
                </p>
              </>
            )}

            {/* Profile */}
            {tab === 1 && (
              <>
                <Avatar
                  style={{
                    width: "85px",
                    height: "85px",
                    fontSize: "30px",
                    backgroundColor: darkMode
                      ? "#7c3aed"
                      : "#6d28d9",
                  }}
                >
                  TP
                </Avatar>

                <h3
                  style={{
                    marginBottom: "5px",
                    color: darkMode ? "#e9d5ff" : "#5b21b6",
                  }}
                >
                  My Profile
                </h3>

                <p
                  style={{
                    color: darkMode ? "#9ca3af" : "#6b7280",
                    margin: 0,
                  }}
                >
                  Welcome to my profile
                </p>
              </>
            )}

            {/* Settings */}
            {tab === 2 && (
              <>
                <h3
                  style={{
                    marginBottom: "5px",
                    color: darkMode ? "#e9d5ff" : "#5b21b6",
                  }}
                >
                  Settings
                </h3>

                <p
                  style={{
                    color: darkMode ? "#9ca3af" : "#6b7280",
                  }}
                >
                  Toggle between Light and Dark Mode
                </p>

                <Switch
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;