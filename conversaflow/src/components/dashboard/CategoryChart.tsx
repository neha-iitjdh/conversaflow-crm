import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { categoryData } from "@/services/mockData";

export const CategoryChart: React.FC = () => {
  const total = categoryData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h6" fontWeight={600}>
            Sales Category
          </Typography>
          <IconButton size="small">
            <ArrowForward />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            height: 200,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData as any[]}
                cx="50%"
                cy="50%"
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -20%)",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" fontWeight={700}>
              {total.toLocaleString()}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Product sales
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          {categoryData.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: item.color,
                  }}
                />
                <Typography variant="body2">{item.name}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mt: 2,
            pt: 2,
            borderTop: "1px solid",
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="body2" color="success.main" fontWeight={600}>
            +12.2%
          </Typography>
          <Typography variant="caption" color="text.secondary">
            You sold 2,921 items compared to last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
