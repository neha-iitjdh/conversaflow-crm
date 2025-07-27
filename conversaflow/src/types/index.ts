export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "manager" | "agent" | "viewer";
}

export interface SalesData {
  month: string;
  sales: number;
  insight: number;
}

export interface MetricCardData {
  title: string;
  value: string | number;
  change?: number;
  period?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  type: string;
  sales: number;
  stock: number;
  price: number;
  status: "in-stock" | "out-of-stock";
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  title: string;
  taskProgress: number;
  lastActive: string;
  team: string[];
  avatar?: string;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}
