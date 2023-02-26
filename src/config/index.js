const isProduction = process.env.NODE_ENV === 'production';

export const API_BASE_URL = isProduction ? "https://example.com" : "https://localhost:5000";