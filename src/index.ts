import 'dotenv/config';
import { OpenRouterService } from "./openrouterService.ts";
import { createServer } from "./server.ts";
import { config } from "./config.ts";

const routerService = new OpenRouterService(config)
const app = createServer(routerService);

await app.listen({ port: 4333, host: '0.0.0.0' });
app.log.info(`Servidor rodando na porta ${4333}`);

app.inject({
    method: 'POST',
    url: '/talk',
    body: {
        question: 'Hello World'
    }
}).then(response => {
    console.log('Response Status', response.statusCode)
    console.log('Response Body', response.body)
})
