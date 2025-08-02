import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Button,
  Pagination,
  Avatar,
} from '@mui/material';
import { FilterList, Add } from '@mui/icons-material';
import { ProductItem } from '@/types';

interface ProductTableProps {
  products: ProductItem[];
}

export const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 10;

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Products List
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <Button
                variant="outlined"
                size="small"
                sx={{ textTransform: 'none' }}
              >
                Popular Product Sales
              </Button>
              <IconButton size="small">
                <FilterList />
              </IconButton>
              <IconButton size="small">
                <Add />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Table Header */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '0.5fr 2fr 1fr 1fr 1fr 1fr 1.5fr',
            gap: 2,
            pb: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
            mb: 2,
          }}
        >
          <Typography variant="subtitle2" color="text.secondary"></Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Name
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Type
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Sales
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Stock
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Price
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Stock Status
          </Typography>
        </Box>

        {/* Table Body */}
        {products.map((product, index) => (
          <Box
            key={product.id}
            sx={{
              display: 'grid',
              gridTemplateColumns: '0.5fr 2fr 1fr 1fr 1fr 1fr 1.5fr',
              gap: 2,
              py: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
              alignItems: 'center',
              '&:last-child': {
                borderBottom: 'none',
              },
            }}
          >
            {/* Index */}
            <Typography variant="body2" color="text.secondary">
              {index + 1}.
            </Typography>

            {/* Name with Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar
                variant="rounded"
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: 'action.hover',
                  color: 'text.primary',
                }}
              >
                {product.type === 'Jacket' ? '🧥' : 
                 product.type === 'Pants' ? '👖' : 
                 product.type === 'T-shirt' ? '👕' : 
                 product.type === 'Polo' ? '👔' : '👟'}
              </Avatar>
              <Typography variant="body2" fontWeight={500}>
                {product.name}
              </Typography>
            </Box>

            {/* Type */}
            <Typography variant="body2" color="text.secondary">
              {product.type}
            </Typography>

            {/* Sales */}
            <Typography variant="body2">{product.sales}</Typography>

            {/* Stock */}
            <Typography variant="body2">{product.stock}</Typography>

            {/* Price */}
            <Typography variant="body2" fontWeight={600}>
              ${product.price}
            </Typography>

            {/* Status */}
            <Chip
              label={product.status === 'in-stock' ? 'Ready stock' : 'Out of stock'}
              size="small"
              sx={{
                backgroundColor:
                  product.status === 'in-stock' ? 'success.light' : 'error.light',
                color:
                  product.status === 'in-stock' ? 'success.dark' : 'error.dark',
                fontWeight: 600,
              }}
            />
          </Box>
        ))}

        {/* Pagination */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 3,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Show: {itemsPerPage}
          </Typography>
          <Pagination
            count={Math.ceil(products.length / itemsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
            shape="rounded"
          />
        </Box>
      </CardContent>
    </Card>
  );
};