import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// 🔥 Dynamic Routes Auto-Loader
const routesPath = path.join(__dirname, 'routes');

fs.readdirSync(routesPath).forEach((file) => {
    if (file.endsWith('.routes.ts') || file.endsWith('.routes.js')) {
        // Import file route
        const route = require(path.join(routesPath, file));

        // Generate prefix from filename
        const routePrefix =
            '/' +
            file
                .replace('.routes.ts', '')
                .replace('.routes.js', '')
                .replace('.routes', '');

        if (route.default) {
            app.use(routePrefix, route.default);
            console.log(`✅ Loaded route: ${routePrefix}`);
        }
    }
});

app.listen(port, () => {
    console.log(`🚀 Server berjalan di http://localhost:${port}`);
});
