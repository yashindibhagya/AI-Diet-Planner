import { v } from "convex/values";
import { mutation, query } from "../convex/_generated/server";

export const CreateNewUser = mutation({
    args: {
        email: v.string(),
        name: v.string()
    },

    handler: async (ctx, args) => {
        const user = await ctx.db.query("users").filter(q => q.eq(q.field("email"), args.email))
            .collect()

        if (user.length === 0) {
            const data = {
                name: args.name,
                email: args.email,
                credits: 10
            }
            const result = await ctx.db.insert("users", {
                ...data
            });

            return data
        }

        return user[0]
    }
})

export const GetUser = query({
    args: {
        email: v.optional(v.string())
    },

    handler: async (ctx, args) => {
        if (!args?.email) {
            return null;
        }
        const users = await ctx.db.query("users")
            .filter(q => q.eq(q.field("email"), args.email.toLowerCase().trim()))
            .collect();

        return users.length > 0 ? users[0] : null;
    }
})

export const UpdateUserPref = mutation({
    args: {
        email: v.string(),  // Required to identify the user
        height: v.string(),
        weight: v.string(),
        gender: v.string(),
        goal: v.string(),
    },
    handler: async (ctx, args) => {
        // Find user by email
        const user = await ctx.db.query('Users')
            .withIndex('by_email', q => q.eq('email', args.email))
            .first();

        if (!user) {
            // If user doesn't exist, create a new one with default values
            return await ctx.db.insert('Users', {
                name: 'New User',  // Default name
                email: args.email,
                credits: 0,       // Default credits
                height: args.height,
                weight: args.weight,
                gender: args.gender,
                goal: args.goal,
                createdAt: Date.now(),
                updatedAt: Date.now()
            });
        }

        // Update existing user
        return await ctx.db.patch(user._id, {
            height: args.height,
            weight: args.weight,
            gender: args.gender,
            goal: args.goal,
            updatedAt: Date.now()
        });
    }
});