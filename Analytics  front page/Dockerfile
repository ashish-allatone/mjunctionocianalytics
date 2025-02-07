# Use a lightweight, multi-architecture Nginx image
FROM nginx:1.23.4-alpine

# Copy index.html and index_copy.html to the Nginx HTML directory
COPY index.html /usr/share/nginx/html/

# Expose port 80 to serve the website
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
