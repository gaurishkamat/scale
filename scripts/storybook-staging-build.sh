source ./scripts/_colors.sh;
echo "This will setup the project, build components and then Storybook"
echo "--------"
echo "${GREEN}Building Components...${NC}"
yarn workspace @scaleds/components-telekom build;
echo "--------"
echo "${GREEN}Building Vue proxy...${NC}"
yarn workspace @scaleds/components-vue-telekom build;
echo "--------"
echo "${GREEN}Building Storybook...${NC}"
yarn workspace @scaleds/storybook-vue build;
