# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy only index.html and index_copy.html to the Nginx HTML directory
COPY index.html /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
