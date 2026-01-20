import { defineCollection, z } from "astro:content";

export const collections = {
    players: defineCollection({
        type: "content",
        schema: z.object({
            club: z.enum(["galacticosc", "acesfc"]),
            name: z.string(),
            number: z.number(),
            position: z.enum([
                "Goalkeeper",
                "Defender",
                "Midfielder",
                "Forward",
            ]),
            nationality: z.string(),
            age: z.number(),
            height: z.string(),
            image: z.string(),
            featured: z.boolean().default(false),
        }),
    }),
};
