import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// In convex/schema.js
export default defineSchema({
    Users: defineTable({
        name: v.string(),
        email: v.string(),
        picture: v.optional(v.string()),
        subscribeID: v.optional(v.string()),
        credits: v.number(),
        height: v.optional(v.string()),
        weight: v.optional(v.string()),
        gender: v.optional(v.string()),
        goal: v.optional(v.string()),
        createdAt: v.optional(v.number()),
        updatedAt: v.optional(v.number()),
    }).index('by_email', ['email'])  // Add this index
});