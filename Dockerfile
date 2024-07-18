FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/Eliahhango/EliTechWiz/root/Eliahhango

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/Eliahhango/node_modules

# Install dependencies
WORKDIR /root/Eliahhango
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
