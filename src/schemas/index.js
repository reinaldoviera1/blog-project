import { schema } from 'normalizr';

// Define your comments schema
export const comment = new schema.Entity('comments');

// Define your article 
export const blog = new schema.Entity('articles', {
  comments: [ comment ]
});

export const blogListSchema = [blog];