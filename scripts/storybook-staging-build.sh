source ./scripts/_colors.sh;
echo "This will setup the project, build components and then Storybook"
echo "--------"
echo "${GREEN}Building Components...${NC}"
yarn workspace @scaleds/telekom-components build;
echo "--------"
echo "${GREEN}Building Vue proxy...${NC}"
yarn workspace @scaleds/telekom-components-vue build;
echo "--------"
echo "${GREEN}Building Storybook...${NC}"
yarn workspace @scaleds/storybook-vue build;
