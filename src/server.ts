import Fastify from "fastify";

export const createServer = () => {
    const app = Fastify({
        logger: false
    });

    app.post("/talk", {
        schema: {
            body: {
                type: 'object',
                required: ['question'],
                properties: {
                    question: {
                        type: 'string',
                        minLength: 5,
                    }
                }
            }
        }
    }, async (request, reply) => {
        try {
            const { question } = request.body as { question: string };
            reply.send('tamo junto');
        } catch (error) {
            reply.code(500).send('ERROR');
        }
    });

    return app;
}