import { getAIResponse } from "./gemini";
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  LinearProgress
} from "@mui/material";

export default function App() {
  const [query, setQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAnalyze = async () => {
    if (query.trim() !== "") {
      const response = await getAIResponse(query);
      setAiResponse(response);
      setShowResult(true);
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 6,
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f7faff, #ffffff)"
      }}
    >
      {/* HEADER */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        TruthScope
      </Typography>

      {/* HOME SCREEN */}
      {!showResult && (
        <Box textAlign="center" mt={8}>
          <Typography variant="h5" gutterBottom>
            See the Truth Behind AI Answers
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Analyze AI responses for bias, assumptions, and missing perspectives
          </Typography>

          {/* INPUT */}
          <TextField
            fullWidth
            placeholder="Ask any question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{
              mb: 2,
              backgroundColor: "#fff",
              borderRadius: "12px"
            }}
          />

          {/* BUTTON */}
          <Button
            variant="contained"
            onClick={handleAnalyze}
            sx={{
              borderRadius: "25px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontWeight: "bold"
            }}
          >
            Analyze Answer
          </Button>

          {/* EXAMPLES */}
          <Box mt={3}>
            <Chip
              label="Which is the smartest country?"
              onClick={() => setQuery("Which is the smartest country?")}
              sx={{ m: 1 }}
            />
            <Chip
              label="Best education system?"
              onClick={() => setQuery("Best education system?")}
              sx={{ m: 1 }}
            />
          </Box>
        </Box>
      )}

      {/* RESULT SCREEN */}
      {showResult && (
        <Box mt={6}>
          {/* AI RESPONSE */}
          <Card>
            sx={{
              mb: 3,
              borderRadius: "16px",
              boxShadow: 3
            }}
          </Card>
          <Card
            sx={{
              mb: 3,
              borderRadius: "16px",
              boxShadow: 3
            }}
          >
            <CardContent>
              <Typography variant="h6">
                AI Response
              </Typography>

              <Typography mt={1}>
                {aiResponse || "Loading response..."}
              </Typography>
            </CardContent>
          </Card>

          {/* TRUTH INSIGHTS */}
          <Card
            sx={{
              mb: 3,
              borderRadius: "16px",
              boxShadow: 3
            }}
          >
            <CardContent>
              <Typography variant="h6">Truth Insights</Typography>

              <Typography mt={2}>
                ⚠ Based on limited metric (IQ)
              </Typography>
              <Typography>
                ⚠ Low regional diversity detected
              </Typography>

              <Box mt={3}>
                <Typography>
                  Bias Risk: 72% (High)
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={72}
                  sx={{ mt: 1, height: 8, borderRadius: 5 }}
                />
              </Box>
            </CardContent>
          </Card>

          {/* METRICS */}
          <Card
            sx={{
              mb: 3,
              borderRadius: "16px",
              boxShadow: 3
            }}
          >
            <CardContent>
              <Typography variant="h6">
                Detected Reasoning Factors
              </Typography>

              <Box mt={2}>
                <Chip label="IQ Rankings" sx={{ mr: 1 }} />
                <Chip label="Education Index" sx={{ mr: 1 }} />
              </Box>
            </CardContent>
          </Card>

          {/* SOURCE DIVERSITY */}
          <Card
            sx={{
              mb: 3,
              borderRadius: "16px",
              boxShadow: 3
            }}
          >
            <CardContent>
              <Typography variant="h6">Source Diversity</Typography>

              <Typography mt={2}>
                Western: 70% | Asia: 20% | Others: 10%
              </Typography>

              <Typography color="error" mt={1}>
                High Western bias in data sources detected
              </Typography>
            </CardContent>
          </Card>

          {/* ALTERNATIVES */}
          <Card
            sx={{
              mb: 3,
              borderRadius: "16px",
              boxShadow: 3
            }}
          >
            <CardContent>
              <Typography variant="h6">
                Al Response
              </Typography>

              <Box mt={2}>
                <Chip label="Academic Intelligence" sx={{ m: 1 }} />
                <Chip label="Innovation" sx={{ m: 1 }} />
                <Chip label="Creativity & Problem Solving" sx={{ m: 1 }} />
              </Box>
            </CardContent>
          </Card>

          {/* BACK BUTTON */}
          {/* BACK BUTTON */}
          <Button
            onClick={() => setShowResult(false)}
            sx={{ mt: 2 }}
          >
            Ask Another Question
          </Button>

        </Box>
      )}
    </Container>
  );
}