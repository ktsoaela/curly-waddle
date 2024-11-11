// js/core/config.js
import dotenv from 'dotenv';
dotenv.config();

const config = {
    // Basic Project Settings
    PROJECT_NAME: "Curly Waddle",
    DEBUG: process.env.DEBUG === 'true',
    SECRET_KEY: process.env.SECRET_KEY,

    // Allowed Origins (similar to Django's CORS_ALLOWED_ORIGINS)
    ALLOWED_ORIGINS: [
        "http://localhost:3000",
    ],

    // Other Settings (e.g., Installed Apps, Middlewares - more applicable in a backend)
    INSTALLED_APPS: [
        "base",
        "blog",
        "shop"
    ],

    // API Configuration
    API_BASE_URL: process.env.API_BASE_URL || "http://localhost:8000/api",

    // Database Configuration (assuming API interacts with the database)
    DATABASE: {
        ENGINE: process.env.DB_ENGINE,
        NAME: process.env.DB_NAME,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        HOST: process.env.DB_HOST,
        PORT: process.env.DB_PORT,
    },

    // Cache Configuration (for Redis or other caching tools)
    CACHE: {
        BACKEND: process.env.REDIS_BACKEND || "redis",
        HOST: process.env.REDIS_HOST || "localhost",
        PORT: process.env.REDIS_PORT || "6379",
    },

    // Session Configuration (useful if leveraging backend sessions via API)
    SESSION: {
        ENGINE: "cache",
        CACHE_ALIAS: "default",
    },

    // Email Configuration
    EMAIL: {
        BACKEND: process.env.EMAIL_BACKEND || "smtp",
        HOST: process.env.EMAIL_HOST,
        PORT: parseInt(process.env.EMAIL_PORT, 10),
        USER: process.env.EMAIL_HOST_USER,
        PASSWORD: process.env.EMAIL_HOST_PASSWORD,
        USE_TLS: process.env.EMAIL_USE_TLS === 'true',
        USE_SSL: process.env.EMAIL_USE_SSL === 'true',
    },

    // Internationalization
    LANGUAGE_CODE: "en-us",
    TIME_ZONE: "UTC",
    USE_I18N: true,
    USE_TZ: true,

    // Static and Media Configuration
    STATIC_URL: "/static/",
    STATIC_ROOT: "static",
    MEDIA_URL: "/media/",
    MEDIA_ROOT: "media",


};

export default config;
