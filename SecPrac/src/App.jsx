import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: 3,
          width: 350,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          Welcome to react!
        </Typography>

        <TextField
          label="Enter your name"
          variant="outlined"
          fullWidth
        />

        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
          >
            Click Me
          </Button>
        </Box>

        <Box sx={{ marginTop: 1 }}>
          <Checkbox />
          Accept Terms
        </Box>

        <Card sx={{ marginTop: 3  }}>
          <CardContent>
            <Typography variant="h6">
              My Card
            </Typography>

            <Typography variant="body2">
              Welcome to my React!
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default App;